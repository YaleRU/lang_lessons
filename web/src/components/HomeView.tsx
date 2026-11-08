import { COURSE } from "../data/course.ts"
import { TONE_STEPS } from "../data/tones.ts"
import { lessonSteps } from "../lib/lessonSteps.ts"
import type { Screen } from "../lib/nav.ts"
import { Readable } from "./Readable.tsx"

export function HomeView({
  lastLesson,
  stepOf,
  toneReached,
  onOpen,
  onSpeak,
}: {
  lastLesson: number | null
  stepOf: (id: number) => number
  toneReached: number
  onOpen: (screen: Screen) => void
  onSpeak: (text: string) => void
}) {
  const tonesLeft = toneReached < TONE_STEPS.length - 1
  const lesson = COURSE.find((item) => item.id === lastLesson) ?? null
  const continueScreen: Screen = tonesLeft
    ? { name: "tones", step: toneReached }
    : { name: "lesson", id: lesson?.id ?? 1, step: lesson ? stepOf(lesson.id) : 0 }
  const continueWhere = tonesLeft
    ? `Тоны. ${TONE_STEPS[toneReached]?.title ?? "Начало"}`
    : lesson
      ? `Урок ${lesson.id}. ${lesson.title}`
      : `Урок 1. ${COURSE[0]?.title ?? ""}`

  return (
    <>
      <p className="kicker">{COURSE.length} речевых задач</p>
      <h1>Сначала сказать.</h1>
      <p>
        <Readable
          text="На уроке одна таблица и те же слова: да, нет, вопрос, вчера, завтра. Сверху выберите ผม или ฉัน. Буквы и схемы лежат в шпаргалке."
          onSpeak={onSpeak}
        />
      </p>
      <button className="continue" type="button" onClick={() => onOpen(continueScreen)}>
        <b>Продолжить</b>
        <span>{continueWhere}</span>
      </button>
      <section>
        <h2>Основы произношения</h2>
        <button className="lesson-link" type="button" onClick={() => onOpen({ name: "tones", step: toneReached })}>
          <b>Тоны</b>
          <span>
            Пять контуров, слух, пары из курса.
            {toneReached > 0 ? ` Шаг ${Math.min(toneReached + 1, TONE_STEPS.length)} из ${TONE_STEPS.length}.` : " Ещё не начато."}
          </span>
        </button>
      </section>
      <section>
        <h2>Уроки речи</h2>
        {COURSE.map((item) => {
          const step = stepOf(item.id)
          const count = lessonSteps(item).length
          const here = item.id === lastLesson
          const done = count > 1 && step >= count - 1
          const state = here ? "вы здесь" : done ? "пройден" : step > 0 ? "начат" : ""
          return (
            <button
              key={item.id}
              className="lesson-link"
              type="button"
              onClick={() => onOpen({ name: "lesson", id: item.id, step })}
            >
              <b>
                {item.id}. {item.title}
              </b>
              <span>{item.goal}</span>
              {state ? <i className="state">{state}</i> : null}
            </button>
          )
        })}
      </section>
      <section>
        <h2>Повторение</h2>
        <button className="lesson-link" type="button" onClick={() => onOpen({ name: "words" })}>
          <b>Бытовые слова</b>
          <span>Глаголы, существительные, прилагательные.</span>
        </button>
      </section>
      <div className="card" style={{ padding: "12px 14px", margin: "12px 0" }}>
        <b>Шпаргалка и голос</b>
        <p className="muted" style={{ marginTop: 6 }}>
          Шпаргалка открывается нижней кнопкой или свайпом от правого края. Закрывается кнопкой «Закрыть» или свайпом вниз по верхней полосе. Прокрутка её не закрывает. Голос на iPhone: Настройки → Универсальный доступ → Проговаривание содержимого → Голоса → Тайский.
        </p>
      </div>
      <p className="muted">Каркас тот же, что у Петрова: на каждом уроке одна схема. В тайском время — слово в начале фразы, поэтому «люблю, любил, буду любить» стоят в первом уроке. Буквы разбираются внутри тех слов, которые вы говорите.</p>
    </>
  )
}
