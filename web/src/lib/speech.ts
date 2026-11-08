export const MISSING_SPEECH_HINT =
  "В этом браузере нет озвучки. Читайте запись вслух по тонам."

export const MISSING_VOICE_HINT =
  "Тайский голос ещё не скачан. Шпаргалка → «Голос на iPhone». Пока читайте тоновую запись."

export type SpeakResult = "spoken" | "missing-api" | "missing-voice"

function thaiVoice(): SpeechSynthesisVoice | null {
  if (!window.speechSynthesis) return null
  return (
    window.speechSynthesis
      .getVoices()
      .find((item) => (item.lang || "").toLowerCase().startsWith("th")) ?? null
  )
}

export type SpeakOptions = {
  rate?: number
  times?: number
}

function utterance(text: string, voice: SpeechSynthesisVoice, rate: number) {
  const result = new SpeechSynthesisUtterance(text)
  result.lang = "th-TH"
  result.voice = voice
  result.rate = rate
  return result
}

function queue(parts: readonly string[], rate = 0.85): SpeakResult {
  if (!window.speechSynthesis) return "missing-api"
  const voice = thaiVoice()
  if (!voice) return "missing-voice"
  window.speechSynthesis.cancel()
  for (const part of parts) {
    if (!part) continue
    window.speechSynthesis.speak(utterance(part, voice, rate))
  }
  return "spoken"
}

export function primeVoices() {
  if (!window.speechSynthesis) return
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices()
  }
  window.speechSynthesis.getVoices()
}

export function speak(text: string, options?: SpeakOptions): SpeakResult {
  const times = Math.max(1, options?.times ?? 1)
  return queue(Array.from({ length: times }, () => text), options?.rate ?? 0.85)
}

export function speakSequence(parts: readonly string[], options?: SpeakOptions): SpeakResult {
  return queue(parts, options?.rate ?? 0.85)
}
