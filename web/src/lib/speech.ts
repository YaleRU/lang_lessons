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

function utterance(text: string, voice: SpeechSynthesisVoice) {
  const result = new SpeechSynthesisUtterance(text)
  result.lang = "th-TH"
  result.voice = voice
  result.rate = 0.8
  return result
}

function queue(parts: readonly string[]): SpeakResult {
  if (!window.speechSynthesis) return "missing-api"
  const voice = thaiVoice()
  if (!voice) return "missing-voice"
  window.speechSynthesis.cancel()
  for (const part of parts) {
    if (!part) continue
    window.speechSynthesis.speak(utterance(part, voice))
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

export function speak(text: string): SpeakResult {
  return queue([text])
}

export function speakSequence(parts: readonly string[]): SpeakResult {
  return queue(parts)
}
