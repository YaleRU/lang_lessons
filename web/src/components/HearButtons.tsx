export function HearButtons({
  alone,
  word,
  onSpeak,
  compact = false,
  inLabel = "в слове",
}: {
  alone: string
  word?: string
  onSpeak: (text: string) => void
  compact?: boolean
  inLabel?: string
}) {
  return (
    <span className="row" style={{ marginTop: compact ? 0 : 8 }}>
      <button className="speak" type="button" onClick={() => onSpeak(alone)}>
        отдельно
      </button>
      {word ? (
        <button className="speak" type="button" onClick={() => onSpeak(word)}>
          {inLabel}
        </button>
      ) : null}
    </span>
  )
}
