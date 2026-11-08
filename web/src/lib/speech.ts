export const MISSING_SPEECH_HINT =
  "В этом браузере нет озвучки. Читайте запись вслух по тонам."

export const MISSING_VOICE_HINT =
  "Тайский голос ещё не скачан. Шпаргалка → «Голос на iPhone». Пока читайте тоновую запись."

export type SpeakResult = "spoken" | "missing-api" | "missing-voice"

export type SpeakOptions = {
  rate?: number
  times?: number
  onUnavailable?: () => void
}

type VoiceLike = {
  lang?: string
}

const remembered = new WeakMap<object, SpeechSynthesisVoice[]>()
let poll = 0

export function findThaiVoice<T extends VoiceLike>(voices: readonly T[]): T | null {
  return (
    voices.find((voice) => (voice.lang || "").toLowerCase().replaceAll("_", "-").startsWith("th")) ?? null
  )
}

export function voiceListStatus(voices: readonly VoiceLike[]): "unloaded" | "missing" | "ready" {
  if (voices.length === 0) return "unloaded"
  return findThaiVoice(voices) ? "ready" : "missing"
}

function readVoices(synth: SpeechSynthesis): SpeechSynthesisVoice[] {
  let live: SpeechSynthesisVoice[] = []
  try {
    live = synth.getVoices()
  } catch {
    live = []
  }
  if (live.length > 0) remembered.set(synth, live)
  return live.length > 0 ? live : (remembered.get(synth) ?? [])
}

function remember(synth: SpeechSynthesis) {
  readVoices(synth)
}

export function primeVoices() {
  const synth = window.speechSynthesis
  if (!synth) return
  remember(synth)
  const note = () => remember(synth)
  if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", note)
  synth.onvoiceschanged = note
  if (poll) window.clearInterval(poll)
  let tries = 0
  poll = window.setInterval(() => {
    tries += 1
    const voices = readVoices(synth)
    if (tries >= 24 || voices.length > 0) {
      window.clearInterval(poll)
      poll = 0
    }
  }, 250)
}

function utterance(text: string, voice: SpeechSynthesisVoice | null, rate: number, onUnavailable?: () => void) {
  const result = new SpeechSynthesisUtterance(text)
  result.lang = "th-TH"
  result.rate = rate
  if (voice) {
    try {
      result.voice = voice
    } catch {
      /* объект голоса не из текущего getVoices(); язык уже стоит */
    }
  }
  result.onerror = (event) => {
    if (event.error === "language-unavailable" || event.error === "voice-unavailable") onUnavailable?.()
  }
  return result
}

function resume(synth: SpeechSynthesis) {
  try {
    if (synth.paused) synth.resume()
  } catch {
    /* Safari бросает resume, когда очередь пуста */
  }
}

function enqueue(synth: SpeechSynthesis, items: SpeechSynthesisUtterance[]) {
  const run = () => {
    resume(synth)
    for (const item of items) synth.speak(item)
    resume(synth)
  }
  if (!synth.speaking && !synth.pending) {
    run()
    return
  }
  // cancel() в том же ходе, что и speak(), глотает новую фразу в Safari и Chrome.
  try {
    synth.cancel()
  } catch {
    /* desktop Safari кидает cancel() */
  }
  globalThis.setTimeout(run, 0)
}

function queue(parts: readonly string[], rate: number, onUnavailable?: () => void): SpeakResult {
  const synth = window.speechSynthesis
  if (!synth) return "missing-api"
  const voices = readVoices(synth)
  const status = voiceListStatus(voices)
  if (status === "missing") return "missing-voice"
  const voice = status === "ready" ? findThaiVoice(voices) : null
  const items = parts.filter(Boolean).map((text) => utterance(text, voice, rate, onUnavailable))
  if (items.length === 0) return "spoken"
  enqueue(synth, items)
  return "spoken"
}

export function speak(text: string, options?: SpeakOptions): SpeakResult {
  const times = Math.max(1, options?.times ?? 1)
  return queue(Array.from({ length: times }, () => text), options?.rate ?? 0.85, options?.onUnavailable)
}

export function speakSequence(parts: readonly string[], options?: SpeakOptions): SpeakResult {
  return queue(parts, options?.rate ?? 0.85, options?.onUnavailable)
}
