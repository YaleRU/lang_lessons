import assert from "node:assert/strict"
import { test } from "node:test"
import { CONSONANTS } from "./alphabet.ts"
import { HIGH_CLASS, PHRASE_TONE, TONE_PAIRS, identifyTrials, sameTrials } from "./tones.ts"
import { lessonSteps } from "../lib/lessonSteps.ts"
import { COURSE } from "./course.ts"

test("high class is only the letters the cheat sheet already names", () => {
  const fromSheet = CONSONANTS.filter((letter) => letter.how.includes("Высокий класс")).map((letter) => letter.th)
  assert.deepEqual(
    HIGH_CLASS.map((letter) => letter.th),
    fromSheet,
  )
  assert.deepEqual(fromSheet, ["ข", "ฉ", "ฐ", "ถ", "ผ", "ฝ", "ศ", "ส", "ห"])
})

test("tone pairs use the attested transcriptions", () => {
  assert.deepEqual(
    TONE_PAIRS.map((pair) => pair.items.map((item) => `${item.th} ${item.rom}`)),
    [
      ["ไม่ mâi", "ไหม mǎi", "ใหม่ mài"],
      ["ใกล้ glâi", "ไกล glai"],
      ["ขาว khǎao", "ข้าว khâao"],
    ],
  )
})

test("phrase tone keeps the question from the schema", () => {
  assert.equal(PHRASE_TONE.th, "คุณรักผมไหมครับ")
  assert.equal(PHRASE_TONE.rom, "khun rák phǒm mǎi khráp")
  assert.equal(PHRASE_TONE.verb.rom, "rák")
  assert.equal(PHRASE_TONE.particle.rom, "mǎi")
})

test("hearing trials contain both same and different pairs", () => {
  const trials = sameTrials(3)
  assert.equal(trials.length, 6)
  assert.ok(trials.some((trial) => trial.kind === "same" && trial.first === trial.second))
  assert.ok(trials.some((trial) => trial.kind === "different" && trial.first !== trial.second))
  const names = identifyTrials(3)
  assert.ok(names.length >= 5)
})

test("lesson 1 still starts with the same speech step", () => {
  const steps = lessonSteps(COURSE[0])
  assert.equal(steps[0]?.title, "Скажите сейчас")
  assert.equal(steps.at(-1)?.title, "Теперь про себя")
  assert.ok(steps.length > 2)
})
