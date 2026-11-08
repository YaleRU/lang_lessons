import { CONSONANTS } from "../data/alphabet.ts"
import { COURSE } from "../data/course.ts"

export type Reading = {
  rom: string | null
  ru: string
  alone: string
  phrase?: string
  status: "word" | "letter" | "sign" | "unverified"
}

const SIGN_TEXT = "знак, своего тона нет"
const UNVERIFIED = "тон не сверен"

const SIGNS = new Set(
  Array.from("ะัาำิีึืุูเแโใไ็่้๊๋์ํฺๆๅ"),
)

type Entry = { rom: string; ru: string }

const entries = new Map<string, Entry>()
const phrases: string[] = []

function add(th: unknown, rom: unknown, ru = "") {
  if (typeof th !== "string" || typeof rom !== "string" || !th || !rom) return
  if (!entries.has(th)) entries.set(th, { rom, ru })
  if (th.length > 1 && !phrases.includes(th)) phrases.push(th)
}

function walk(value: unknown) {
  if (Array.isArray(value)) {
    for (const item of value) walk(item)
    return
  }
  if (!value || typeof value !== "object") return
  const record = value as Record<string, unknown>
  if (typeof record.th === "string" && typeof record.rom === "string") {
    add(record.th, record.rom, typeof record.ru === "string" ? record.ru : "")
  }
  const male = record.m
  const female = record.f
  if (male && typeof male === "object") {
    const side = male as Record<string, unknown>
    add(side.th, side.rom, typeof record.ru === "string" ? record.ru : "")
  }
  if (female && typeof female === "object") {
    const side = female as Record<string, unknown>
    add(side.th, side.rom, typeof record.ru === "string" ? record.ru : "")
  }
  for (const item of Object.values(record)) walk(item)
}

walk(COURSE)

const particles: Array<[string, string]> = [
  ["ครับ", "khráp"],
  ["ค่ะ", "khâ"],
  ["คะ", "khá"],
]
const pronouns: Array<[string, string]> = [
  ["ผม", "phǒm"],
  ["ฉัน", "chǎn"],
  ["คุณ", "khun"],
]

for (const [th, entry] of [...entries]) {
  for (const [particle, rom] of particles) {
    if (th.endsWith(particle) && entry.rom.endsWith(` ${rom}`) && th.length > particle.length) {
      const next = th.slice(0, -particle.length)
      const nextRom = entry.rom.slice(0, -(rom.length + 1))
      if (next && nextRom) add(next, nextRom, entry.ru)
    }
  }
}

for (const [th, entry] of [...entries]) {
  for (const [pronoun, rom] of pronouns) {
    if (th.startsWith(pronoun) && entry.rom.startsWith(`${rom} `) && th.length > pronoun.length) {
      const next = th.slice(pronoun.length)
      const nextRom = entry.rom.slice(rom.length + 1)
      if (next && nextRom) add(next, nextRom, entry.ru)
    }
  }
}

const words = [...entries.keys()].sort((a, b) => b.length - a.length)
const letters = new Map(CONSONANTS.map((letter) => [letter.th, letter]))

function examplePhrase(token: string) {
  let best = ""
  for (const phrase of phrases) {
    if (phrase === token || phrase.length > 48 || !phrase.includes(token)) continue
    if (!best || phrase.length < best.length) best = phrase
  }
  return best || undefined
}

const cache = new Map<string, Reading>()

export function resolveThai(token: string): Reading {
  const cached = cache.get(token)
  if (cached) return cached
  const reading = resolveUncached(token)
  cache.set(token, reading)
  return reading
}

function brief(ru: string) {
  const head = ru.split(";")[0].trim()
  return head.length > 48 ? `${head.slice(0, 48).trim()}…` : head
}

function resolveUncached(token: string): Reading {
  const exact = entries.get(token)
  if (exact?.ru) {
    return {
      status: "word",
      rom: exact.rom,
      ru: brief(exact.ru),
      alone: token,
      phrase: examplePhrase(token),
    }
  }
  if ([...token].length === 1 && letters.has(token)) {
    const letter = letters.get(token)!
    return {
      status: "letter",
      rom: letter.rom,
      ru: letter.how,
      alone: letter.alone,
      phrase: letter.word,
    }
  }
  if ([...token].every((char) => SIGNS.has(char))) {
    return { status: "sign", rom: null, ru: SIGN_TEXT, alone: token }
  }
  const parts: Entry[] = []
  let index = 0
  while (index < token.length) {
    const hit = words.find((word) => word && word !== token && token.startsWith(word, index))
    if (!hit) {
      if (exact) {
        return {
          status: "word",
          rom: exact.rom,
          ru: "см. таблицу",
          alone: token,
          phrase: examplePhrase(token),
        }
      }
      return {
        status: "unverified",
        rom: null,
        ru: UNVERIFIED,
        alone: token,
        phrase: examplePhrase(token),
      }
    }
    parts.push(entries.get(hit)!)
    index += hit.length
  }
  const ru = parts.map((part) => part.ru).filter(Boolean).join(", ")
  const spaced = parts.map((part) => part.rom).join(" ")
  const joined = parts.map((part) => part.rom).join("-")
  const rom = phrases.some((phrase) => entries.get(phrase)?.rom.includes(joined))
    ? joined
    : spaced
  return {
    status: "word",
    rom,
    ru: brief(ru) || "см. таблицу",
    alone: token,
    phrase: examplePhrase(token),
  }
}
