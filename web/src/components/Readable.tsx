import type { ReactNode } from "react"
import { HearButtons } from "./HearButtons.tsx"
import { Romanization } from "./Romanization.tsx"
import { resolveThai } from "../lib/readings.ts"

const THAI = /[\u0E00-\u0E7F]+/

export function Readable({
  text,
  onSpeak,
}: {
  text: string
  onSpeak?: (value: string) => void
}) {
  const nodes: ReactNode[] = []
  const pieces = text.split(THAI)
  const marks = text.match(new RegExp(THAI.source, "g")) ?? []
  marks.forEach((thai, index) => {
    const reading = resolveThai(thai)
    const next = pieces[index + 1] ?? ""
    if (reading.rom && next.trimStart().startsWith(reading.rom)) {
      const spaces = next.length - next.trimStart().length
      pieces[index + 1] = next.slice(spaces + reading.rom.length)
    }
  })
  pieces.forEach((piece, index) => {
    if (piece) nodes.push(piece)
    const thai = marks[index]
    if (!thai) return
    const reading = resolveThai(thai)
    nodes.push(
      <span className="bit" key={`${thai}-${index}`}>
        <span className="thai">{thai}</span>
        {reading.rom ? <Romanization rom={reading.rom} inline /> : null}
        <span className="ru">{reading.ru}</span>
        {onSpeak && reading.status !== "sign" ? (
          <HearButtons
            alone={reading.alone}
            word={reading.phrase}
            onSpeak={onSpeak}
            compact
            inLabel={reading.status === "letter" ? "в слове" : "в фразе"}
          />
        ) : null}
      </span>,
    )
  })
  return <>{nodes}</>
}
