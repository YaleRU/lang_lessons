import assert from "node:assert/strict"
import { test } from "node:test"
import { MATRIX_ROWS } from "../data/matrix.ts"
import { speakAs } from "./matrixGender.ts"

const byId = (id: string) => {
  const row = MATRIX_ROWS.find((item) => item.id === id)
  if (!row) throw new Error(id)
  return row
}

test("female speaker keeps the three check phrases", () => {
  const love = speakAs(byId("A-rak-i-you"), "f")
  assert.equal(love.thai, "ฉันรักคุณค่ะ")
  assert.equal(love.rom, "chǎn rák khun khâ")
  assert.equal(love.ruRead, "чǎн ра́к кхун кхâ")

  const not = speakAs(byId("A-rak-i-not"), "f")
  assert.equal(not.thai, "ฉันไม่รักคุณค่ะ")
  assert.equal(not.rom, "chǎn mâi rák khun khâ")

  const question = speakAs(byId("A-rak-you-me-q"), "f")
  assert.equal(question.thai, "คุณรักฉันไหมคะ")
  assert.equal(question.rom, "khun rák chǎn mǎi khá")
  assert.equal(question.ruRead, "кхун ра́к чǎн мǎй кхá")
})

test("เขา does not choose the particle; the speaker does", () => {
  const male = speakAs(byId("A-rak-he-you"), "m")
  assert.equal(male.thai, "เขารักคุณครับ")
  const female = speakAs(byId("A-rak-he-you"), "f")
  assert.equal(female.thai, "เขารักคุณค่ะ")
  assert.equal(female.rom, "khǎo rák khun khâ")
  assert.ok(!female.thai.includes("ฉัน"))
})

test("a question word takes คะ", () => {
  const row = speakAs(byId("E-where-to"), "f")
  assert.equal(row.thai, "คุณไปไหนคะ")
  assert.equal(row.rom, "khun bpai nǎi khá")
})

test("หรือยัง takes คะ", () => {
  const row = speakAs(byId("C-q-already"), "f")
  assert.equal(row.thai, "กินหรือยังคะ")
  assert.equal(row.rom, "gin rʉ̌ʉ-yang khá")
})
