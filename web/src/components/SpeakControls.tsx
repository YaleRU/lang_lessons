import type { SpeakOptions } from "../lib/speech.ts"

export function SpeakControls({
  text,
  label,
  onSpeak,
}: {
  text: string
  label: string
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  return (
    <div className="row">
      <button
        className="speak"
        type="button"
        aria-label={`обычная скорость: ${label}`}
        onClick={() => onSpeak(text, { rate: 0.85 })}
      >
        обычно
      </button>
      <button
        className="speak"
        type="button"
        aria-label={`медленно: ${label}`}
        onClick={() => onSpeak(text, { rate: 0.55 })}
      >
        медленно
      </button>
      <button
        className="speak"
        type="button"
        aria-label={`ещё раз: ${label}`}
        onClick={() => onSpeak(text, { times: 2 })}
      >
        ещё раз
      </button>
    </div>
  )
}
