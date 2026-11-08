import assert from "node:assert/strict"
import { test } from "node:test"
import { COURSE } from "./course.ts"
import { MATRIX_LAYERS, MATRIX_ROWS, SLOT_LABELS } from "./matrix.ts"

const VERB_GROUPS = ["A-rak", "A-kin", "B-rak", "B-kin", "C-kin", "D-pai"]

test("every matrix row has a reading, eight slots, and an existing lesson", () => {
  const ids = new Set<string>()
  for (const row of MATRIX_ROWS) {
    assert.equal(ids.has(row.id), false, row.id)
    ids.add(row.id)
    assert.ok(row.thai.length > 0)
    assert.ok(row.rom.length > 0)
    assert.ok(row.ruRead.length > 0)
    assert.ok(row.ru.length > 0)
    assert.equal(row.slots.length, SLOT_LABELS.length)
    assert.ok(COURSE.some((lesson) => lesson.id === row.reuseLesson), `${row.id} lesson`)
    assert.ok(MATRIX_LAYERS.some((layer) => layer.id === row.layer))
  }
})

test("one verb stays in the verb slot inside a group", () => {
  for (const group of VERB_GROUPS) {
    const rows = MATRIX_ROWS.filter((row) => row.group === group)
    assert.ok(rows.length > 0, group)
    const verb = rows[0]?.verb
    for (const row of rows) {
      assert.equal(row.verb, verb, row.id)
      assert.equal(row.slots[3], verb, row.id)
      assert.ok(row.thai.includes(verb), row.id)
    }
  }
})

test("layers run from persons to the later slots", () => {
  assert.deepEqual(
    MATRIX_LAYERS.map((layer) => layer.id),
    ["A", "B", "C", "D", "E"],
  )
  assert.ok(MATRIX_ROWS.filter((row) => row.layer === "A" && row.group === "A-rak").length === 12)
  assert.equal(MATRIX_ROWS.find((row) => row.id === "B-kin-yesterday-not")?.reuseLesson, 1)
  assert.equal(MATRIX_ROWS.find((row) => row.id === "D-must")?.reuseLesson, 11)
  assert.equal(MATRIX_ROWS.find((row) => row.id === "B-rak-maidai-warning")?.note?.includes("не собирать"), true)
})
