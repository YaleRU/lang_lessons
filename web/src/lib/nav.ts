export type Screen =
  | { name: "home" }
  | { name: "matrix"; layer: number }
  | { name: "lesson"; id: number; step: number }
  | { name: "tones"; step: number }
  | { name: "words" }
  | { name: "sheet" }

const MATRIX_LETTERS = ["A", "B", "C", "D", "E"]

function cleanHash(hash: string) {
  return hash.replace(/^#/, "").replace(/^\/+/, "").replace(/\/+$/, "")
}

function whole(value: string | undefined) {
  if (!value) return 0
  if (!/^\d+$/.test(value)) return null
  return Number(value)
}

export function parseHash(hash: string): Screen {
  const parts = cleanHash(hash).split("/").filter(Boolean)
  if (parts.length === 0) return { name: "home" }
  if (parts[0] === "matrix") {
    if (!parts[1]) return { name: "matrix", layer: 0 }
    const layer = MATRIX_LETTERS.indexOf(parts[1].toUpperCase())
    if (layer < 0) return { name: "home" }
    return { name: "matrix", layer }
  }
  if (parts[0] === "words") return { name: "words" }
  if (parts[0] === "sheet") return { name: "sheet" }
  if (parts[0] === "tones") {
    const step = whole(parts[1])
    if (step == null) return { name: "home" }
    return { name: "tones", step }
  }
  if (parts[0] === "lesson") {
    const id = whole(parts[1])
    const step = whole(parts[2])
    if (id == null || id < 1 || step == null) return { name: "home" }
    return { name: "lesson", id, step }
  }
  return { name: "home" }
}

export function screenHash(screen: Screen): string {
  if (screen.name === "home") return "#/"
  if (screen.name === "matrix") {
    const layer = Math.min(Math.max(0, screen.layer), MATRIX_LETTERS.length - 1)
    return layer > 0 ? `#/matrix/${MATRIX_LETTERS[layer]}` : "#/matrix"
  }
  if (screen.name === "words") return "#/words"
  if (screen.name === "sheet") return "#/sheet"
  if (screen.name === "tones") {
    return screen.step > 0 ? `#/tones/${screen.step}` : "#/tones"
  }
  return screen.step > 0 ? `#/lesson/${screen.id}/${screen.step}` : `#/lesson/${screen.id}`
}

export function resolveScreen(screen: Screen, lessonIds: readonly number[]): Screen {
  if (screen.name === "lesson" && !lessonIds.includes(screen.id)) return { name: "home" }
  return screen
}
