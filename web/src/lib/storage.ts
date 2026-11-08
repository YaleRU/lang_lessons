const GENDER_KEY = "tp-g"
const LESSON_KEY = "tp-lesson"
const THEME_KEY = "tp-theme"
const STEPS_KEY = "tp-steps"
const TONE_KEY = "tp-tone-reached"
const MATRIX_KEY = "tp-matrix-reached"
const WORDS_KEY = "tp-words-tab"

export type ThemeChoice = "light" | "dark" | "system"

export function readGender(): string {
  try {
    return localStorage.getItem(GENDER_KEY) || "m"
  } catch {
    return "m"
  }
}

export function writeGender(value: string) {
  try {
    localStorage.setItem(GENDER_KEY, value)
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

export function readLesson(): number | null {
  try {
    const stored = localStorage.getItem(LESSON_KEY)
    return stored ? Number(stored) : null
  } catch {
    return null
  }
}

export function writeLesson(value: number | null) {
  try {
    if (value == null) localStorage.removeItem(LESSON_KEY)
    else localStorage.setItem(LESSON_KEY, String(value))
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

export function readTheme(): ThemeChoice {
  try {
    const stored = localStorage.getItem(THEME_KEY)
    if (stored === "light" || stored === "dark" || stored === "system") return stored
    return "system"
  } catch {
    return "system"
  }
}

export function writeTheme(value: ThemeChoice) {
  try {
    localStorage.setItem(THEME_KEY, value)
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

function readMap(key: string): Record<string, number> {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "{}") as unknown
    if (!parsed || typeof parsed !== "object") return {}
    return parsed as Record<string, number>
  } catch {
    return {}
  }
}

export function readLessonStep(id: number): number {
  const step = readMap(STEPS_KEY)[String(id)]
  return Number.isInteger(step) && step >= 0 ? step : 0
}

export function writeLessonStep(id: number, step: number) {
  try {
    const map = readMap(STEPS_KEY)
    map[String(id)] = step
    localStorage.setItem(STEPS_KEY, JSON.stringify(map))
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

export function readToneReached(): number {
  try {
    const stored = Number(localStorage.getItem(TONE_KEY))
    return Number.isInteger(stored) && stored >= 0 ? stored : 0
  } catch {
    return 0
  }
}

export function writeToneReached(step: number) {
  try {
    const next = Math.max(readToneReached(), step)
    localStorage.setItem(TONE_KEY, String(next))
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

export function readMatrixReached(): number {
  try {
    const stored = localStorage.getItem(MATRIX_KEY)
    if (stored == null) return -1
    const value = Number(stored)
    return Number.isInteger(value) && value >= 0 ? value : -1
  } catch {
    return -1
  }
}

export function writeMatrixReached(layer: number) {
  try {
    const next = Math.max(readMatrixReached(), layer)
    localStorage.setItem(MATRIX_KEY, String(next))
  } catch {
    /* исходник глотает сбой хранилища */
  }
}

export function readWordsTab(): string {
  try {
    return sessionStorage.getItem(WORDS_KEY) || "verbs"
  } catch {
    return "verbs"
  }
}

export function writeWordsTab(value: string) {
  try {
    sessionStorage.setItem(WORDS_KEY, value)
  } catch {
    /* исходник глотает сбой хранилища */
  }
}
