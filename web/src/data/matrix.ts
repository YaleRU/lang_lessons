export const TIMES = [
  { id: "future", title: "Будущее время" },
  { id: "present", title: "Настоящее время" },
  { id: "past", title: "Прошедшее время" },
] as const

export const COLUMNS = [
  { id: "question", title: "Вопрос" },
  { id: "statement", title: "Утверждение" },
  { id: "negation", title: "Отрицание" },
] as const

export const PERSONS = [
  { label: "Я", thai: "ผม", rom: "phǒm", ru: "пхǒм" },
  { label: "Ты", thai: "คุณ", rom: "khun", ru: "кхун" },
  { label: "Мы", thai: "เรา", rom: "rao", ru: "рао" },
  { label: "Вы", thai: "พวกคุณ", rom: "phûak-khun", ru: "пхûак-кхун" },
  { label: "Он", thai: "เขา", rom: "khǎo", ru: "кхǎо" },
  { label: "Она", thai: "เขา", rom: "khǎo", ru: "кхǎо" },
] as const

export type TimeId = (typeof TIMES)[number]["id"]
export type ColumnId = (typeof COLUMNS)[number]["id"]

export type LoveLine = {
  person: string
  thai: string
  rom: string
  ruRead: string
  ru: string
}

const LAND = { thai: "ประเทศไทย", rom: "bprà-thêet-thai", ru: "бпрà-тхêет-тхай" }
const PAST = { thai: "เมื่อก่อน", rom: "mʉ̂ʉa-gɔ̀ɔn", ru: "мʉ̂а-гɔ̀он" }

const RU: Record<TimeId, Record<(typeof PERSONS)[number]["label"], [string, string, string]>> = {
  future: {
    Я: ["Я буду любить Таиланд?", "Я буду любить Таиланд.", "Я не буду любить Таиланд."],
    Ты: ["Ты будешь любить Таиланд?", "Ты будешь любить Таиланд.", "Ты не будешь любить Таиланд."],
    Мы: ["Мы будем любить Таиланд?", "Мы будем любить Таиланд.", "Мы не будем любить Таиланд."],
    Вы: ["Вы будете любить Таиланд?", "Вы будете любить Таиланд.", "Вы не будете любить Таиланд."],
    Он: ["Он будет любить Таиланд?", "Он будет любить Таиланд.", "Он не будет любить Таиланд."],
    Она: ["Она будет любить Таиланд?", "Она будет любить Таиланд.", "Она не будет любить Таиланд."],
  },
  present: {
    Я: ["Я люблю Таиланд?", "Я люблю Таиланд.", "Я не люблю Таиланд."],
    Ты: ["Ты любишь Таиланд?", "Ты любишь Таиланд.", "Ты не любишь Таиланд."],
    Мы: ["Мы любим Таиланд?", "Мы любим Таиланд.", "Мы не любим Таиланд."],
    Вы: ["Вы любите Таиланд?", "Вы любите Таиланд.", "Вы не любите Таиланд."],
    Он: ["Он любит Таиланд?", "Он любит Таиланд.", "Он не любит Таиланд."],
    Она: ["Она любит Таиланд?", "Она любит Таиланд.", "Она не любит Таиланд."],
  },
  past: {
    Я: ["Раньше я любил Таиланд?", "Раньше я любил Таиланд.", "Раньше я не любил Таиланд."],
    Ты: ["Раньше ты любил Таиланд?", "Раньше ты любил Таиланд.", "Раньше ты не любил Таиланд."],
    Мы: ["Раньше мы любили Таиланд?", "Раньше мы любили Таиланд.", "Раньше мы не любили Таиланд."],
    Вы: ["Раньше вы любили Таиланд?", "Раньше вы любили Таиланд.", "Раньше вы не любили Таиланд."],
    Он: ["Раньше он любил Таиланд?", "Раньше он любил Таиланд.", "Раньше он не любил Таиланд."],
    Она: ["Раньше она любила Таиланд?", "Раньше она любила Таиланд.", "Раньше она не любила Таиланд."],
  },
}

function join(bits: string[], separator: string) {
  return bits.filter((bit) => bit.length > 0).join(separator)
}

export function loveCell(timeId: TimeId, columnId: ColumnId): LoveLine[] {
  const columnIndex = COLUMNS.findIndex((column) => column.id === columnId)
  const future = timeId === "future"
  const past = timeId === "past"
  const question = columnId === "question"
  const negation = columnId === "negation"
  const pre = future ? (negation ? "จะไม่" : "จะ") : negation ? "ไม่" : ""
  const preRom = future ? (negation ? "jà mâi" : "jà") : negation ? "mâi" : ""
  const preRu = future ? (negation ? "джà мâй" : "джà") : negation ? "мâй" : ""
  return PERSONS.map((person) => ({
    person: person.label,
    thai: join([past ? PAST.thai : "", person.thai, pre, "รัก", LAND.thai, question ? "ไหม" : "", "ครับ"], ""),
    rom: join([past ? PAST.rom : "", person.rom, preRom, "rák", LAND.rom, question ? "mǎi" : "", "khráp"], " "),
    ruRead: join([past ? PAST.ru : "", person.ru, preRu, "ра́к", LAND.ru, question ? "мǎй" : "", "кхра́п"], " "),
    ru: RU[timeId][person.label][columnIndex] ?? "",
  }))
}
