import assert from "node:assert/strict"
import { test } from "node:test"
import { COLUMNS, PERSONS, TIMES, loveCell } from "./matrix.ts"

const ORDER = ["Я", "Ты", "Мы", "Вы", "Он", "Она"] as const

test("the table is three times by three columns, six persons each", () => {
  assert.deepEqual(
    TIMES.map((time) => time.title),
    ["Будущее время", "Настоящее время", "Прошедшее время"],
  )
  assert.deepEqual(
    COLUMNS.map((column) => column.title),
    ["Вопрос", "Утверждение", "Отрицание"],
  )
  assert.deepEqual(
    PERSONS.map((person) => person.label),
    [...ORDER],
  )
  for (const time of TIMES) {
    for (const column of COLUMNS) {
      const lines = loveCell(time.id, column.id)
      assert.deepEqual(
        lines.map((line) => line.person),
        [...ORDER],
        `${time.id} ${column.id}`,
      )
      for (const line of lines) {
        assert.ok(line.rom.length > 0 && line.ruRead.length > 0 && line.ru.includes("Таиланд"))
        assert.equal(line.thai.split("รัก").length - 1, 1, line.thai)
        assert.equal(line.thai.includes("จะ"), time.id === "future", line.thai)
        assert.equal(line.thai.startsWith("เมื่อก่อน"), time.id === "past", line.thai)
        assert.equal(line.thai.includes("ไหม"), column.id === "question", line.thai)
        assert.equal(line.thai.includes("ไม่"), column.id === "negation", line.thai)
      }
    }
  }
})

test("the nine я-lines keep one verb and the attested markers", () => {
  assert.deepEqual(
    TIMES.flatMap((time) => COLUMNS.map((column) => loveCell(time.id, column.id)[0]?.thai)),
    [
      "ผมจะรักประเทศไทยไหมครับ",
      "ผมจะรักประเทศไทยครับ",
      "ผมจะไม่รักประเทศไทยครับ",
      "ผมรักประเทศไทยไหมครับ",
      "ผมรักประเทศไทยครับ",
      "ผมไม่รักประเทศไทยครับ",
      "เมื่อก่อนผมรักประเทศไทยไหมครับ",
      "เมื่อก่อนผมรักประเทศไทยครับ",
      "เมื่อก่อนผมไม่รักประเทศไทยครับ",
    ],
  )
  const past = loveCell("past", "statement")[0]
  assert.equal(past?.rom, "mʉ̂ʉa-gɔ̀ɔn phǒm rák bprà-thêet-thai khráp")
  assert.equal(past?.ruRead, "мʉ̂а-гɔ̀он пхǒм ра́к бпрà-тхêет-тхай кхра́п")
  assert.equal(loveCell("present", "statement")[3]?.thai, "พวกคุณรักประเทศไทยครับ")
  assert.equal(loveCell("present", "statement")[4]?.thai, loveCell("present", "statement")[5]?.thai)
})
