import assert from "node:assert/strict"
import { test } from "node:test"
import { findThaiVoice, speak, voiceListStatus } from "./speech.ts"

test("an empty voice list is not treated as a missing Thai voice", () => {
  assert.equal(voiceListStatus([]), "unloaded")
  assert.equal(findThaiVoice([]), null)
})

test("a loaded list without Thai is missing", () => {
  assert.equal(voiceListStatus([{ lang: "en-US" }, { lang: "ru-RU" }]), "missing")
})

test("Thai is matched by language, including underscores", () => {
  const voices = [{ lang: "en-US" }, { lang: "th_TH" }]
  assert.equal(voiceListStatus(voices), "ready")
  assert.equal(findThaiVoice(voices)?.lang, "th_TH")
  assert.equal(findThaiVoice([{ lang: "TH-TH" }])?.lang, "TH-TH")
})

class FakeUtterance {
  lang = ""
  rate = 1
  voice: { lang?: string } | null = null
  onerror: ((event: { error: string }) => void) | null = null
  text: string
  constructor(text: string) {
    this.text = text
  }
}

function install(synth: Record<string, unknown>) {
  Object.assign(globalThis, { SpeechSynthesisUtterance: FakeUtterance, window: { speechSynthesis: synth } })
}

test("speak still starts when the voice list has not loaded", () => {
  const spoken: FakeUtterance[] = []
  install({
    speaking: false,
    pending: false,
    paused: false,
    getVoices: () => [],
    cancel: () => {
      throw new Error("cancel should not run while idle")
    },
    resume: () => {},
    speak: (item: FakeUtterance) => spoken.push(item),
  })
  assert.equal(speak("รัก"), "spoken")
  assert.equal(spoken.length, 1)
  assert.equal(spoken[0]?.text, "รัก")
  assert.equal(spoken[0]?.lang, "th-TH")
  assert.equal(spoken[0]?.voice, null)
  assert.equal(spoken[0]?.rate, 0.85)
})

test("a loaded list without Thai does not speak", () => {
  const spoken: string[] = []
  install({
    speaking: false,
    pending: false,
    paused: false,
    getVoices: () => [{ lang: "en-US" }],
    cancel: () => {},
    resume: () => {},
    speak: (item: FakeUtterance) => spoken.push(item.text),
  })
  assert.equal(speak("รัก"), "missing-voice")
  assert.deepEqual(spoken, [])
})

test("a Thai voice is used, and a throwing cancel does not block the next phrase", async () => {
  const spoken: FakeUtterance[] = []
  let cancelled = 0
  install({
    speaking: true,
    pending: false,
    paused: true,
    getVoices: () => [{ lang: "th-TH", name: "Kanya" }],
    cancel: () => {
      cancelled += 1
      throw new Error("safari")
    },
    resume: () => {},
    speak: (item: FakeUtterance) => spoken.push(item),
  })
  assert.equal(speak("ครับ", { times: 2, rate: 0.55 }), "spoken")
  assert.equal(cancelled, 1)
  assert.equal(spoken.length, 0)
  await new Promise((resolve) => setTimeout(resolve, 0))
  assert.equal(spoken.length, 2)
  assert.equal(spoken[0]?.voice && "lang" in spoken[0].voice ? spoken[0].voice.lang : "", "th-TH")
  assert.equal(spoken[1]?.text, "ครับ")
  spoken[0]?.onerror?.({ error: "interrupted" })
  let unavailable = 0
  spoken[0]?.onerror?.({ error: "language-unavailable" })
  assert.equal(unavailable, 0)
})

test("language-unavailable reports a real missing voice", () => {
  const spoken: FakeUtterance[] = []
  let unavailable = 0
  install({
    speaking: false,
    pending: false,
    paused: false,
    getVoices: () => [],
    cancel: () => {},
    resume: () => {},
    speak: (item: FakeUtterance) => spoken.push(item),
  })
  assert.equal(speak("ไหม", { onUnavailable: () => { unavailable += 1 } }), "spoken")
  spoken[0]?.onerror?.({ error: "canceled" })
  assert.equal(unavailable, 0)
  spoken[0]?.onerror?.({ error: "voice-unavailable" })
  assert.equal(unavailable, 1)
})
