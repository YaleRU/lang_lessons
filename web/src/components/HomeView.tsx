import { COURSE } from "../data/course.ts"
import { MATRIX_LAYERS } from "../data/matrix.ts"
import { TONE_STEPS } from "../data/tones.ts"
import { lessonSteps } from "../lib/lessonSteps.ts"
import type { Screen } from "../lib/nav.ts"
import { Readable } from "./Readable.tsx"
import { Romanization } from "./Romanization.tsx"

export function HomeView({
  lastLesson,
  stepOf,
  toneReached,
  matrixReached,
  onOpen,
  onSpeak,
}: {
  lastLesson: number | null
  stepOf: (id: number) => number
  toneReached: number
  matrixReached: number
  onOpen: (screen: Screen) => void
  onSpeak: (text: string) => void
}) {
  const done = matrixReached >= MATRIX_LAYERS.length
  const here = done ? 0 : Math.max(0, matrixReached)
  const layer = MATRIX_LAYERS[here]
  const continueWhere = done
    ? "Матрица пройдена. Повторить с лиц"
    : matrixReached < 0
      ? `Слой А. ${MATRIX_LAYERS[0]?.title ?? ""}`
      : `Слой ${layer?.id ?? "A"}. ${layer?.title ?? ""}`

  return (
    <>
      <p className="kicker">Одна матрица</p>
      <h1>Сначала одни и те же фразы.</h1>
      <p>Три глагола, одни буквы. Сначала лица и да или нет. Потом слово времени. Потом частицы. Уроки ниже повторяют эти клетки.</p>
      <p className="row">
        <button className="speak" type="button" lang="th" aria-label="слушать รัก, rák, любить" onClick={() => onSpeak("รัก")}>
          <span className="thai" lang="th">รัก</span> <Romanization rom="rák" inline />
        </button>
        <button className="speak" type="button" lang="th" aria-label="слушать กิน, gin, есть" onClick={() => onSpeak("กิน")}>
          <span className="thai" lang="th">กิน</span> <Romanization rom="gin" inline />
        </button>
        <button className="speak" type="button" lang="th" aria-label="слушать ไป, bpai, идти" onClick={() => onSpeak("ไป")}>
          <span className="thai" lang="th">ไป</span> <Romanization rom="bpai" inline />
        </button>
      </p>
      <p>
        <Readable
          text="На уроке одна таблица и те же слова: да, нет, вопрос, вчера, завтра. Сверху выберите ผม или ฉัน. Буквы и схемы лежат в шпаргалке."
          onSpeak={onSpeak}
        />
      </p>
      <button className="continue" type="button" onClick={() => onOpen({ name: "matrix", layer: here })}>
        <b>Продолжить</b>
        <span>{continueWhere}</span>
      </button>
      <section>
        <h2>Слои</h2>
        {MATRIX_LAYERS.map((item, index) => {
          const state = done || matrixReached > index ? "пройден" : matrixReached === index ? "вы здесь" : ""
          return (
            <button
              key={item.id}
              className="lesson-link"
              type="button"
              onClick={() => onOpen({ name: "matrix", layer: index })}
            >
              <b>
                {item.id}. {item.title}
              </b>
              <span>{item.lead}</span>
              {state ? <i className="state">{state}</i> : null}
            </button>
          )
        })}
      </section>
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
        <h2>Практика. {COURSE.length} уроков</h2>
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
