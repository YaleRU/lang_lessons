import assert from "node:assert/strict"
import { test } from "node:test"
import { loveCell } from "../data/matrix.ts"
import { speakAs } from "./matrixGender.ts"

const at = (time: "future" | "present" | "past", column: "question" | "statement" | "negation", person: string) => {
  const line = loveCell(time, column).find((item) => item.person === person)
  if (!line) throw new Error(person)
  return line
}

test("female speaker changes я and the closing particle", () => {
  const question = speakAs(at("future", "question", "Я"), "f")
  assert.equal(question.thai, "ฉันจะรักประเทศไทยไหมคะ")
  assert.equal(question.rom, "chǎn jà rák bprà-thêet-thai mǎi khá")
  assert.equal(question.ruRead, "чǎн джà ра́к бпрà-тхêет-тхай мǎй кхá")

  const statement = speakAs(at("present", "statement", "Я"), "f")
  assert.equal(statement.thai, "ฉันรักประเทศไทยค่ะ")
  assert.equal(statement.rom, "chǎn rák bprà-thêet-thai khâ")
  assert.equal(statement.ruRead, "чǎн ра́к бпрà-тхêет-тхай кхâ")

  const past = speakAs(at("past", "negation", "Я"), "f")
  assert.equal(past.thai, "เมื่อก่อนฉันไม่รักประเทศไทยค่ะ")
  assert.equal(past.ru, "Раньше я не любила Таиланд.")
})

test("เขา stays the same word for him and for her", () => {
  const he = speakAs(at("present", "statement", "Он"), "f")
  const she = speakAs(at("present", "statement", "Она"), "f")
  assert.equal(he.thai, "เขารักประเทศไทยค่ะ")
  assert.equal(she.thai, he.thai)
  assert.equal(he.rom, "khǎo rák bprà-thêet-thai khâ")
  assert.equal(speakAs(at("present", "statement", "Он"), "m").thai, "เขารักประเทศไทยครับ")
})

test("male lines stay as stored", () => {
  const line = at("present", "statement", "Я")
  assert.deepEqual(speakAs(line, "m"), line)
})
