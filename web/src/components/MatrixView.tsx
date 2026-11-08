import { useEffect } from "react"
import { COURSE } from "../data/course.ts"
import { LAYER_NOTES, MATRIX_LAYERS, SLOT_LABELS, rowsForLayer, type MatrixLayerId } from "../data/matrix.ts"
import { speakAs } from "../lib/matrixGender.ts"
import type { SpeakOptions } from "../lib/speech.ts"
import { Romanization } from "./Romanization.tsx"
import { SpeakControls } from "./SpeakControls.tsx"

const GROUP_TITLE: Record<string, string> = {
  "A-rak": "รัก. Буквы одни и те же",
  "A-kin": "กิน. Без объекта",
  "B-rak": "รัก. Вчера — это ไม่, не ไม่ได้",
  "B-warning": "Так лучше не собирать",
  "B-kin": "กิน. Вчера — это ไม่ได้ перед глаголом",
  "C-kin": "กิน. Слово занимает свой слот",
  "C-answer": "Короткий ответ",
  "D-pai": "ไป",
  "E-ask": "Вопрос не «да или нет»",
  "E-be": "Четыре разных «быть»",
  "E-slot": "Соседний слот, без новой грамматики лица",
}

export function MatrixView({
  layer,
  gender,
  onHome,
  onLayer,
  onLesson,
  onSpeak,
}: {
  layer: number
  gender: string
  onHome: () => void
  onLayer: (layer: number) => void
  onLesson: (id: number) => void
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  const safe = Math.min(Math.max(0, layer), MATRIX_LAYERS.length - 1)
  const current = MATRIX_LAYERS[safe]
  const rows = current ? rowsForLayer(current.id) : []

  useEffect(() => {
    const node = document.getElementById(`matrix-layer-${safe}`)
    const parent = node?.parentElement
    if (!node || !parent) return
    const left = node.offsetLeft - (parent.clientWidth - node.offsetWidth) / 2
    parent.scrollTo({ left: Math.max(0, left) })
  }, [safe])

  if (!current) return null

  return (
    <>
      <button className="ghost" type="button" onClick={onHome}>
        Оглавление
      </button>
      <p className="kicker">
        Слой {safe + 1} из {MATRIX_LAYERS.length}. Одна клетка, потом следующее слово
      </p>
      <h1>Матрица</h1>
      <div
        className="step-dots"
        role="tablist"
        aria-label="Слои матрицы"
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
          event.preventDefault()
          const next = event.key === "ArrowRight" ? Math.min(safe + 1, MATRIX_LAYERS.length - 1) : Math.max(safe - 1, 0)
          onLayer(next)
          window.setTimeout(() => document.getElementById(`matrix-layer-${next}`)?.focus(), 0)
        }}
      >
        {MATRIX_LAYERS.map((item, index) => (
          <button
            key={item.id}
            id={`matrix-layer-${index}`}
            type="button"
            role="tab"
            aria-selected={index === safe}
            aria-controls="matrix-panel"
            tabIndex={index === safe ? 0 : -1}
            className={index === safe ? "on" : undefined}
            onClick={() => onLayer(index)}
          >
            {item.id}. {item.title}
          </button>
        ))}
      </div>
      <div id="matrix-panel" role="tabpanel" aria-labelledby={`matrix-layer-${safe}`}>
        <h2>{current.title}</h2>
        <p>{current.lead}</p>
        <ul className="mark-list">
          {LAYER_NOTES[current.id as MatrixLayerId].map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <button className="navbtn" type="button" onClick={() => onLesson(5)}>
          Не расслышал. Урок 5
        </button>
        {rows.map((item, index) => {
          const spoken = speakAs(item, gender)
          const lesson = COURSE.find((entry) => entry.id === item.reuseLesson)
          const previous = rows[index - 1]
          return (
            <article className="word" key={item.id}>
              {item.group !== previous?.group ? <h3>{GROUP_TITLE[item.group] ?? item.group}</h3> : null}
              <div className="thai" lang="th">
                {spoken.thai}
              </div>
              <Romanization rom={spoken.rom} />
              <Romanization rom={spoken.ruRead} />
              <div className="ru">{spoken.ru}</div>
              {item.note ? <p className="muted">{item.note}</p> : null}
              <ol className="matrix-slots">
                {SLOT_LABELS.map((label, slotIndex) => {
                  const token = spoken.slots[slotIndex] ?? "—"
                  const thai = /[\u0E00-\u0E7F]/.test(token)
                  return (
                    <li key={label}>
                      <i>{label}</i>
                      <span lang={thai ? "th" : undefined} className={thai ? "thai" : undefined}>
                        {token}
                      </span>
                    </li>
                  )
                })}
              </ol>
              <SpeakControls text={spoken.thai} label={spoken.rom} onSpeak={onSpeak} />
              <button className="lesson-link" type="button" onClick={() => onLesson(item.reuseLesson)}>
                <b>Практика. Урок {item.reuseLesson}</b>
                <span>{lesson?.title}</span>
              </button>
            </article>
          )
        })}
      </div>
      <div className="continue-bar">
        {safe > 0 ? (
          <button className="navbtn" type="button" onClick={() => onLayer(safe - 1)}>
            Назад
          </button>
        ) : (
          <span />
        )}
        <button className="navbtn primary" type="button" onClick={() => onLayer(safe + 1)}>
          {safe < MATRIX_LAYERS.length - 1 ? "Дальше" : "К оглавлению"}
        </button>
      </div>
    </>
  )
}
