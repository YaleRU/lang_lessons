import type { Lesson } from "../data/types.ts"

export type LessonStepKind = "lead" | "words" | "schema" | "table" | "drills" | "self"

export type LessonStep = {
  kind: LessonStepKind
  title: string
  tableIndex?: number
}

export function lessonSteps(lesson: Lesson): LessonStep[] {
  const steps: LessonStep[] = [
    { kind: "lead", title: "Скажите сейчас" },
    { kind: "words", title: "Как читаются эти слова" },
    { kind: "schema", title: "Схема" },
  ]
  lesson.tables.forEach((table, tableIndex) => {
    steps.push({ kind: "table", title: table.title, tableIndex })
  })
  if (lesson.drills.length > 0) steps.push({ kind: "drills", title: "Закройте ответ и скажите" })
  steps.push({ kind: "self", title: "Теперь про себя" })
  return steps
}

export function clampStep(step: number, count: number) {
  if (count < 1) return 0
  return Math.min(Math.max(0, step), count - 1)
}
