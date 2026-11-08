import assert from "node:assert/strict"
import { test } from "node:test"
import { parseHash, resolveScreen, screenHash, type Screen } from "./nav.ts"

const samples: Screen[] = [
  { name: "home" },
  { name: "matrix", layer: 0 },
  { name: "matrix", layer: 2 },
  { name: "words" },
  { name: "sheet" },
  { name: "tones", step: 0 },
  { name: "tones", step: 4 },
  { name: "lesson", id: 1, step: 0 },
  { name: "lesson", id: 16, step: 3 },
]

test("hash roundtrip keeps the screen", () => {
  for (const screen of samples) {
    assert.deepEqual(parseHash(screenHash(screen)), screen)
  }
})

test("unknown hash returns home", () => {
  assert.deepEqual(parseHash("#/nope"), { name: "home" })
  assert.deepEqual(parseHash(""), { name: "home" })
  assert.deepEqual(parseHash("#/matrix/Z"), { name: "home" })
})

test("unknown lesson id resolves to home", () => {
  assert.deepEqual(resolveScreen({ name: "lesson", id: 99, step: 0 }, [1, 2, 3]), { name: "home" })
  assert.deepEqual(resolveScreen({ name: "lesson", id: 2, step: 1 }, [1, 2, 3]), {
    name: "lesson",
    id: 2,
    step: 1,
  })
})
