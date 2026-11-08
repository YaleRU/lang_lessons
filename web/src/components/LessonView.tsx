import { useState } from "react"
import { COURSE } from "../data/course.ts"
import { OPEN_LESSONS } from "../data/openLessons.ts"
import type { GenderedPhrase, Lesson } from "../data/types.ts"
import { clampStep, lessonSteps } from "../lib/lessonSteps.ts"
import { side } from "../lib/phrase.ts"
import { resolveThai } from "../lib/readings.ts"
import type { SpeakOptions } from "../lib/speech.ts"
import { HearButtons } from "./HearButtons.tsx"
import { Readable } from "./Readable.tsx"
import { Romanization } from "./Romanization.tsx"
import { SpeakControls } from "./SpeakControls.tsx"

export function LessonView({
  lesson,
  step,
  gender,
  onHome,
  onStep,
  onLesson,
  onSpeak,
}: {
  lesson: Lesson
  step: number
  gender: string
  onHome: () => void
  onStep: (step: number) => void
  onLesson: (id: number) => void
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  const steps = lessonSteps(lesson)
  const safe = clampStep(step, steps.length)
  const current = steps[safe]
  const lead = side(lesson.lead, gender)

  return (
    <>
      <button className="ghost" type="button" onClick={onHome}>
        Все уроки
      </button>
      <p className="kicker">
        Урок {lesson.id} из {COURSE.length}. Шаг {safe + 1} из {steps.length}
      </p>
      <h1>{lesson.title}</h1>
      {current?.kind === "lead" ? (
        <>
          <p>
            <Readable text={lesson.goal} onSpeak={onSpeak} />
          </p>
          <p className="muted">
            <Readable text={lesson.petrov} onSpeak={onSpeak} />
          </p>
          <h2>Скажите сейчас</h2>
          <div className="card lead">
            {lesson.lead.ru ? <div className="ru muted">{lesson.lead.ru}</div> : null}
            <div className="thai" lang="th">
              {lead.th}
            </div>
            <Romanization rom={lead.rom} />
            <SpeakControls text={lead.th} label={lead.rom} onSpeak={onSpeak} />
          </div>
        </>
      ) : null}
      {current?.kind === "words" ? (
        <>
          <h2>Как читаются эти слова</h2>
          <p className="muted">Только буквы слов этого урока. Остальной алфавит можно добрать потом, он не держит речь.</p>
          {lesson.words.map((word) => (
            <article className="word" key={`${word.th}-${word.ru}`}>
              <div className="thai" lang="th">
                {word.th}
              </div>
              <Romanization rom={word.rom} />
              <div className="ru">{word.ru}</div>
              <div className="how">
                <Readable text={word.how} onSpeak={onSpeak} />
              </div>
              <HearButtons
                alone={word.th}
                word={resolveThai(word.th).phrase}
                onSpeak={onSpeak}
                inLabel="в фразе"
              />
            </article>
          ))}
        </>
      ) : null}
      {current?.kind === "schema" ? (
        <>
          <h2>Схема</h2>
          <div className="formula">
            <Readable text={lesson.formula} onSpeak={onSpeak} />
          </div>
          <OpenLessonBlock lessonId={lesson.id} onSpeak={onSpeak} />
          {lesson.note ? (
            <div className="card" style={{ padding: "12px 14px", margin: "10px 0" }}>
              <p>
                <Readable text={lesson.note} onSpeak={onSpeak} />
              </p>
            </div>
          ) : null}
          {lesson.diagrams.map((diagram) => (
            <section key={diagram.title}>
              <h2>{diagram.title}</h2>
              <div className="slots">
                {diagram.slots.map((slot, index) => {
                  const spoken = side(slot, gender)
                  return (
                    <div className="slot" key={`${slot.role}-${index}`}>
                      <i>{slot.role}</i>
                      <div className="thai" lang="th" style={{ fontSize: "1.15rem" }}>
                        {spoken.th}
                      </div>
                      <Romanization rom={spoken.rom} />
                      <div className="ru">{resolveThai(spoken.th).ru}</div>
                      <HearButtons
                        alone={spoken.th}
                        word={resolveThai(spoken.th).phrase}
                        onSpeak={onSpeak}
                        compact
                        inLabel="в фразе"
                      />
                    </div>
                  )
                })}
              </div>
            </section>
          ))}
        </>
      ) : null}
      {current?.kind === "table"
        ? lesson.tables
            .filter((_, index) => index === current.tableIndex)
            .map((table) => (
              <section key={table.title}>
                <h2>{table.title}</h2>
                {table.rows.map((row) => {
                  const wide = table.cols.length > 1
                  const cells = row.cells.map((cell, index) => (
                    <TableCellView
                      key={`${row.h}-${index}`}
                      cell={cell}
                      label={wide ? table.cols[index] : row.h}
                      gender={gender}
                      onSpeak={onSpeak}
                    />
                  ))
                  return wide ? (
                    <div key={row.h}>
                      <h3 style={{ margin: "14px 0 6px" }}>{row.h}</h3>
                      <div className="grid cols-3">{cells}</div>
                    </div>
                  ) : (
                    <div className="grid" key={row.h}>
                      {cells}
                    </div>
                  )
                })}
              </section>
            ))
        : null}
      {current?.kind === "drills" ? (
        <>
          <h2>Закройте ответ и скажите</h2>
          {lesson.drills.map((drill, index) => (
            <DrillCard key={`${drill.ru}-${index}`} drill={drill} formula={lesson.formula} gender={gender} onSpeak={onSpeak} />
          ))}
        </>
      ) : null}
      {current?.kind === "self" ? (
        <>
          <h2>Теперь про себя</h2>
          <p>
            <Readable text={lesson.self} onSpeak={onSpeak} />
          </p>
          <div className="row">
            {lesson.id > 1 ? (
              <button className="navbtn" type="button" onClick={() => onLesson(lesson.id - 1)}>
                Урок {lesson.id - 1}
              </button>
            ) : null}
            {lesson.id < COURSE.length ? (
              <button className="navbtn primary" type="button" onClick={() => onLesson(lesson.id + 1)}>
                Урок {lesson.id + 1}
              </button>
            ) : null}
          </div>
        </>
      ) : null}
      <div className="continue-bar">
        {safe > 0 ? (
          <button className="navbtn" type="button" onClick={() => onStep(safe - 1)}>
            Назад
          </button>
        ) : (
          <span />
        )}
        {safe < steps.length - 1 ? (
          <button className="navbtn primary" type="button" onClick={() => onStep(safe + 1)}>
            Продолжить
          </button>
        ) : lesson.id < COURSE.length ? (
          <button className="navbtn primary" type="button" onClick={() => onLesson(lesson.id + 1)}>
            Продолжить
          </button>
        ) : (
          <button className="navbtn primary" type="button" onClick={onHome}>
            Продолжить
          </button>
        )}
      </div>
    </>
  )
}

function DrillCard({
  drill,
  formula,
  gender,
  onSpeak,
}: {
  drill: GenderedPhrase
  formula: string
  gender: string
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  const [open, setOpen] = useState(false)
  const spoken = side(drill, gender)
  return (
    <article className="drill">
      <div className="ru">Скажите вслух, потом откройте</div>
      <b>{drill.ru}</b>
      <div className={open ? "answer" : "answer hidden"} hidden={!open}>
        <div className="thai" lang="th">
          {spoken.th}
        </div>
        <Romanization rom={spoken.rom} />
        <SpeakControls text={spoken.th} label={spoken.rom} onSpeak={onSpeak} />
        <p className="muted">Почему</p>
        <div className="formula">
          <Readable text={formula} onSpeak={onSpeak} />
        </div>
      </div>
      <button
        className="show"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "скрыть ответ" : "показать, как сказать"}
      </button>
    </article>
  )
}

function OpenLessonBlock({
  lessonId,
  onSpeak,
}: {
  lessonId: number
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  const item = OPEN_LESSONS.find((lesson) => lesson.id === lessonId)
  if (!item) return null
  return (
    <section>
      <h2>Фраза из открытого урока</h2>
      <p className="muted">{item.source}</p>
      <div className="formula">
        <Readable text={item.schema} onSpeak={onSpeak} />
      </div>
      <div className="grid">
        {item.rows.map((row) => (
          <div className="cell" key={row.th}>
            <div className="lab">{row.label}</div>
            <div className="thai" lang="th">
              {row.th}
            </div>
            {row.rom ? <Romanization rom={row.rom} /> : <div className="ru">тон не сверен</div>}
            <div className="ru">{row.ru}</div>
            <HearButtons alone={row.th} onSpeak={onSpeak} />
          </div>
        ))}
      </div>
    </section>
  )
}

function TableCellView({
  cell,
  label,
  gender,
  onSpeak,
}: {
  cell: GenderedPhrase
  label: string
  gender: string
  onSpeak: (text: string) => void
}) {
  const spoken = side(cell, gender)
  return (
    <div className="cell">
      <div className="lab">{label}</div>
      <div className="ru">{cell.ru}</div>
      <div className="thai" lang="th">
        {spoken.th}
      </div>
      <Romanization rom={spoken.rom} />
      <HearButtons alone={spoken.th} word={resolveThai(spoken.th).phrase} onSpeak={onSpeak} inLabel="в фразе" />
    </div>
  )
}
