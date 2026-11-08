import { romanizationParts, toneOf } from "../lib/romanization.ts"

export function Romanization({ rom, inline = false }: { rom: string; inline?: boolean }) {
  const Tag = inline ? "span" : "div"
  return (
    <Tag className="rom">
      {romanizationParts(rom).map((part, index) =>
        part === "-" || /^\s+$/.test(part) ? (
          part
        ) : (
          <span key={index} className={`sy ${toneOf(part)}`}>
            {part}
          </span>
        ),
      )}
    </Tag>
  )
}
