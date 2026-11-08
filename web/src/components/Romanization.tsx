import { romanizationParts, toneOf } from "../lib/romanization.ts"

export function Romanization({ rom }: { rom: string }) {
  return (
    <div className="rom">
      {romanizationParts(rom).map((part, index) =>
        part === "-" || /^\s+$/.test(part) ? (
          part
        ) : (
          <span key={index} className={`sy ${toneOf(part)}`}>
            {part}
          </span>
        ),
      )}
    </div>
  )
}
