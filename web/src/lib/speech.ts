export const MISSING_SPEECH_HINT =
  "В этом браузере нет озвучки. Читайте запись вслух по тонам."

export const MISSING_VOICE_HINT =
  "Тайский голос ещё не скачан. Шпаргалка → «Голос на iPhone». Пока читайте тоновую запись."

export type SpeakResult = "spoken" | "missing-api" | "missing-voice"

export function primeVoices() {
  if (!window.speechSynthesis) return
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices()
  }
  window.speechSynthesis.getVoices()
}

export function speak(text: string): SpeakResult {
  if (!window.speechSynthesis) return "missing-api"
  const voices = window.speechSynthesis.getVoices()
  const voice = voices.find((item) =>
    (item.lang || "").toLowerCase().startsWith("th"),
  )
  if (!voice) return "missing-voice"
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = "th-TH"
  utterance.voice = voice
  utterance.rate = 0.8
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
  return "spoken"
}
