const GENDER_KEY = "tp-g"
const LESSON_KEY = "tp-lesson"

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
