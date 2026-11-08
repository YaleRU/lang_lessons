import type { MatrixRow, SlotLine } from "../data/matrix.ts"

const QUESTION = ["ไหม", "หรือยัง", "ใคร", "อะไร", "ไหน", "เมื่อไหร่", "ทำไม"]

export function asks(thai: string) {
  return QUESTION.some((mark) => thai.includes(mark))
}

function polite(thai: string) {
  return asks(thai) ? "คะ" : "ค่ะ"
}

function politeRom(thai: string) {
  return asks(thai) ? "khá" : "khâ"
}

function politeRead(thai: string) {
  return asks(thai) ? "кхá" : "кхâ"
}

export function speakAs(row: MatrixRow, gender: string): MatrixRow {
  if (gender !== "f") return row
  const thai = row.thai.replaceAll("ผม", "ฉัน").replaceAll("ครับ", polite(row.thai))
  const rom = row.rom.replaceAll("phǒm", "chǎn").replaceAll("khráp", politeRom(row.thai))
  const ruRead = row.ruRead.replaceAll("пхǒм", "чǎн").replaceAll("кхра́п", politeRead(row.thai))
  const slots = row.slots.map((slot) => {
    if (slot === "ผม") return "ฉัน"
    if (slot === "ครับ") return polite(row.thai)
    return slot
  }) as SlotLine
  return { ...row, thai, rom, ruRead, slots }
}
