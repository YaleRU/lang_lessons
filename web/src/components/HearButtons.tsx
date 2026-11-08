export function HearButtons({
  alone,
  word,
  onSpeak,
}: {
  alone: string
  word: string
  onSpeak: (text: string) => void
}) {
  return (
    <div className="row" style={{ marginTop: 8 }}>
      <button className="speak" type="button" onClick={() => onSpeak(alone)}>
        отдельно
      </button>
      <button className="speak" type="button" onClick={() => onSpeak(word)}>
        в слове
      </button>
    </div>
  )
}
