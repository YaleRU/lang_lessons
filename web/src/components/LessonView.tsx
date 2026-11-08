import { useState } from "react"
import { OPEN_LESSONS } from "../data/openLessons.ts"
import type { GenderedPhrase, Lesson } from "../data/types.ts"
import { side } from "../lib/phrase.ts"
import { resolveThai } from "../lib/readings.ts"
import { HearButtons } from "./HearButtons.tsx"
import { Readable } from "./Readable.tsx"
import { Romanization } from "./Romanization.tsx"

export function LessonView({
  lesson,
  gender,
  onOpen,
  onSpeak,
}: {
  lesson: Lesson
  gender: string
  onOpen: (id: number | null) => void
  onSpeak: (text: string) => void
}) {
  const [shown, setShown] = useState<Record<number, boolean>>({})
  const lead = side(lesson.lead, gender)

  return (
    <>
      <button className="ghost" type="button" onClick={() => onOpen(null)}>
        Все уроки
      </button>
      <p className="kicker">Урок {lesson.id} из 16</p>
      <h1>{lesson.title}</h1>
      <p>
        <Readable text={lesson.goal} onSpeak={onSpeak} />
      </p>
      <p className="muted">
        <Readable text={lesson.petrov} onSpeak={onSpeak} />
      </p>
      <h2>Скажите сейчас</h2>
      <div className="card lead">
        {lesson.lead.ru ? <div className="ru muted">{lesson.lead.ru}</div> : null}
        <div className="thai">{lead.th}</div>
        <Romanization rom={lead.rom} />
        <div className="row" style={{ marginTop: 8 }}>
          <button className="speak" type="button" onClick={() => onSpeak(lead.th)}>
            слушать
          </button>
        </div>
      </div>
      <h2>Как читаются эти слова</h2>
      <p className="muted">Только буквы слов этого урока. Остальной алфавит можно добрать потом, он не держит речь.</p>
      {lesson.words.map((word) => (
        <article className="word" key={`${word.th}-${word.ru}`}>
          <div className="thai">{word.th}</div>
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
                  <div className="thai" style={{ fontSize: "1.15rem" }}>
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
      {lesson.tables.map((table) => (
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
      ))}
      <h2>Закройте ответ и скажите</h2>
      {lesson.drills.map((drill, index) => {
        const spoken = side(drill, gender)
        const open = Boolean(shown[index])
        return (
          <article className="drill" key={`${drill.ru}-${index}`}>
            <div className="ru">Скажите вслух, потом откройте</div>
            <b>{drill.ru}</b>
            <div className={open ? "answer" : "answer hidden"}>
              <div className="thai">{spoken.th}</div>
              <Romanization rom={spoken.rom} />
              <button
                className="speak"
                type="button"
                onClick={() => onSpeak(spoken.th)}
              >
                слушать
              </button>
            </div>
            <button
              className="show"
              type="button"
              onClick={() =>
                setShown((current) => ({ ...current, [index]: !current[index] }))
              }
            >
              показать, как сказать
            </button>
          </article>
        )
      })}
      <h2>Теперь про себя</h2>
      <p>
        <Readable text={lesson.self} onSpeak={onSpeak} />
      </p>
      <div className="row" style={{ marginTop: 16 }}>
        {lesson.id > 1 ? (
          <button
            className="navbtn"
            type="button"
            onClick={() => onOpen(lesson.id - 1)}
          >
            Урок {lesson.id - 1}
          </button>
        ) : null}
        {lesson.id < 16 ? (
          <button
            className="navbtn primary"
            type="button"
            onClick={() => onOpen(lesson.id + 1)}
          >
            Урок {lesson.id + 1}
          </button>
        ) : null}
      </div>
    </>
  )
}

function OpenLessonBlock({
  lessonId,
  onSpeak,
}: {
  lessonId: number
  onSpeak: (text: string) => void
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
            <div className="thai">{row.th}</div>
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
      <div className="thai">{spoken.th}</div>
      <Romanization rom={spoken.rom} />
      <HearButtons alone={spoken.th} word={resolveThai(spoken.th).phrase} onSpeak={onSpeak} inLabel="в фразе" />
    </div>
  )
}
