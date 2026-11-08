import { CONSONANTS, VOWELS } from "./alphabet.ts"
import { SCHEMAS } from "./schemas.ts"
import type { ContourName } from "../lib/toneAudio.ts"

export type { ContourName }

export type Contour = {
  name: ContourName
  title: string
  voice: string
  gesture: string
  analogy: string
}

export const CONTOURS: Contour[] = [
  {
    name: "mid",
    title: "ровный",
    voice: "ровно",
    gesture: "ладонь идёт вперёд на одной высоте",
    analogy: "Спокойное «да». Высота не поднимается и не падает.",
  },
  {
    name: "low",
    title: "низкий",
    voice: "ниже обычного",
    gesture: "ладонь ниже обычной речи и держится там",
    analogy: "Тяжёлое «да…». Ниже вашего обычного голоса, без скачка.",
  },
  {
    name: "falling",
    title: "падающий",
    voice: "сверху вниз",
    gesture: "ладонь идёт сверху вниз",
    analogy: "Короткое «да!»: начало выше, конец ниже.",
  },
  {
    name: "high",
    title: "высокий",
    voice: "высоко",
    gesture: "ладонь выше обычной речи и держится там",
    analogy: "Высокое «да», почти на одной верхней черте.",
  },
  {
    name: "rising",
    title: "восходящий",
    voice: "снизу вверх",
    gesture: "ладонь идёт снизу вверх",
    analogy: "Вопросительное «да?»: конец выше начала.",
  },
]

export const TONE_STEPS = [
  { title: "Что такое тон" },
  { title: "Русские мостики" },
  { title: "Сначала слух" },
  { title: "Контур и жест" },
  { title: "Пары" },
  { title: "Тон во фразе" },
  { title: "Как читать тон" },
] as const

export type TonePair = {
  title: string
  items: { th: string; rom: string; ru: string }[]
}

export const TONE_PAIRS: TonePair[] = [
  {
    title: "ไม่ / ไหม / ใหม่",
    items: [
      { th: "ไม่", rom: "mâi", ru: "не" },
      { th: "ไหม", rom: "mǎi", ru: "вопрос да или нет" },
      { th: "ใหม่", rom: "mài", ru: "новый" },
    ],
  },
  {
    title: "ใกล้ / ไกล",
    items: [
      { th: "ใกล้", rom: "glâi", ru: "близко" },
      { th: "ไกล", rom: "glai", ru: "далеко" },
    ],
  },
  {
    title: "ขาว / ข้าว",
    items: [
      { th: "ขาว", rom: "khǎao", ru: "белый" },
      { th: "ข้าว", rom: "khâao", ru: "рис" },
    ],
  },
]

const question = SCHEMAS.find((schema) => schema.title === "Вопрос")?.lines[0]

export const PHRASE_TONE = {
  th: question?.th ?? "",
  rom: question?.rom ?? "",
  ru: question?.ru ?? "",
  verb: { th: "รัก", rom: "rák", ru: "любить" },
  particle: { th: "ไหม", rom: "mǎi", ru: "вопрос да или нет" },
}

export const HIGH_CLASS = CONSONANTS.filter((letter) => letter.how.includes("Высокий класс"))

export const SHORT_OPEN = VOWELS.find((letter) => letter.th === "อะ")

export const TONE_MARKS = [
  { th: "่", name: "ไม้เอก" },
  { th: "้", name: "ไม้โท" },
  { th: "๊", name: "ไม้ตรี" },
  { th: "๋", name: "ไม้จัตวา" },
] as const

export type SameTrial = {
  kind: "same" | "different"
  first: ContourName
  second: ContourName
}

function mix(seed: number) {
  let value = seed >>> 0
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0
    return value / 4294967296
  }
}

function pick(random: () => number, names: readonly ContourName[]) {
  return names[Math.floor(random() * names.length)] ?? names[0]
}

export function sameTrials(seed: number): SameTrial[] {
  const random = mix(seed)
  const names = CONTOURS.map((contour) => contour.name)
  return Array.from({ length: 6 }, (_, index) => {
    const first = pick(random, names)
    const same = index % 2 === 0
    const second = same ? first : pick(random, names.filter((name) => name !== first))
    return { kind: same ? "same" : "different", first, second } as SameTrial
  })
}

export function identifyTrials(seed: number): ContourName[] {
  const random = mix(seed + 17)
  const names = CONTOURS.map((contour) => contour.name)
  const bag = [...names, ...names]
  for (let index = bag.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(random() * (index + 1))
    const current = bag[index]
    bag[index] = bag[swap]
    bag[swap] = current
  }
  return bag
}
