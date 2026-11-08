import type { LoveLine } from "../data/matrix.ts"

export function speakAs(line: LoveLine, gender: string): LoveLine {
  if (gender !== "f") return line
  const question = line.thai.includes("ไหม")
  return {
    ...line,
    thai: line.thai.replaceAll("ผม", "ฉัน").replaceAll("ครับ", question ? "คะ" : "ค่ะ"),
    rom: line.rom.replaceAll("phǒm", "chǎn").replaceAll("khráp", question ? "khá" : "khâ"),
    ruRead: line.ruRead.replaceAll("пхǒм", "чǎн").replaceAll("кхра́п", question ? "кхá" : "кхâ"),
    ru: line.ru.replaceAll("я не любил", "я не любила").replaceAll("я любил", "я любила"),
  }
}
