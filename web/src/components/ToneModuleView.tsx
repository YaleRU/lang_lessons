import { useEffect, useMemo, useState } from "react"
import {
  CONTOURS,
  HIGH_CLASS,
  PHRASE_TONE,
  SHORT_OPEN,
  TONE_MARKS,
  TONE_PAIRS,
  TONE_STEPS,
  identifyTrials,
  sameTrials,
  type ContourName,
} from "../data/tones.ts"
import type { SpeakOptions } from "../lib/speech.ts"
import { playContour, playContourPair } from "../lib/toneAudio.ts"
import { Recorder } from "./Recorder.tsx"
import { Romanization } from "./Romanization.tsx"
import { SpeakControls } from "./SpeakControls.tsx"
import { ToneContour } from "./ToneContour.tsx"

function contourByName(name: ContourName) {
  return CONTOURS.find((contour) => contour.name === name) ?? CONTOURS[0]
}

export function ToneModuleView({
  step,
  onStep,
  onSpeak,
}: {
  step: number
  onStep: (step: number) => void
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  const safe = Math.min(Math.max(0, step), TONE_STEPS.length - 1)
  const [audioNote, setAudioNote] = useState("")
  const [round, setRound] = useState(1)
  const pairs = useMemo(() => sameTrials(round), [round])
  const names = useMemo(() => identifyTrials(round), [round])
  const [pairAnswer, setPairAnswer] = useState<Record<number, string>>({})
  const [nameAnswer, setNameAnswer] = useState<Record<number, string>>({})

  useEffect(() => {
    const node = document.getElementById(`tone-step-${safe}`)
    const parent = node?.parentElement
    if (!node || !parent) return
    const left = node.offsetLeft - (parent.clientWidth - node.offsetWidth) / 2
    parent.scrollTo({ left: Math.max(0, left) })
  }, [safe])

  async function hear(name: ContourName) {
    const result = await playContour(name)
    setAudioNote(result === "played" ? "" : "В этом браузере нет звука контура. Смотрите линию и подпись.")
  }

  async function hearPair(first: ContourName, second: ContourName) {
    const result = await playContourPair(first, second)
    setAudioNote(result === "played" ? "" : "В этом браузере нет звука контура. Смотрите линию и подпись.")
  }

  return (
    <>
      <p className="kicker">До урока 1. Можно вернуться в любой момент</p>
      <h1>Пять тонов</h1>
      <div
        className="step-dots"
        role="tablist"
        aria-label="Шаги модуля тонов"
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
          event.preventDefault()
          const next =
            event.key === "ArrowRight" ? Math.min(safe + 1, TONE_STEPS.length - 1) : Math.max(safe - 1, 0)
          onStep(next)
          window.setTimeout(() => document.getElementById(`tone-step-${next}`)?.focus(), 0)
        }}
      >
        {TONE_STEPS.map((item, index) => (
          <button
            key={item.title}
            id={`tone-step-${index}`}
            type="button"
            role="tab"
            aria-selected={index === safe}
            aria-controls="tone-panel"
            tabIndex={index === safe ? 0 : -1}
            className={index === safe ? "on" : undefined}
            onClick={() => onStep(index)}
          >
            {index + 1}. {item.title}
          </button>
        ))}
      </div>
      <div id="tone-panel" role="tabpanel" aria-labelledby={`tone-step-${safe}`}>
      {audioNote ? (
        <p className="error" role="alert">
          {audioNote}
        </p>
      ) : null}
      {safe === 0 ? <Theory /> : null}
      {safe === 1 ? <Bridges onHear={hear} /> : null}
      {safe === 2 ? (
        <Hearing
          pairs={pairs}
          names={names}
          pairAnswer={pairAnswer}
          nameAnswer={nameAnswer}
          onPair={(index, value) => setPairAnswer((current) => ({ ...current, [index]: value }))}
          onName={(index, value) => setNameAnswer((current) => ({ ...current, [index]: value }))}
          onHearPair={hearPair}
          onHear={hear}
          onMore={() => {
            setRound((current) => current + 1)
            setPairAnswer({})
            setNameAnswer({})
          }}
        />
      ) : null}
      {safe === 3 ? <Gestures onHear={hear} /> : null}
      {safe === 4 ? <Pairs onSpeak={onSpeak} /> : null}
      {safe === 5 ? <Phrase onSpeak={onSpeak} /> : null}
      {safe === 6 ? <ReadingRules /> : null}
      </div>
      <div className="continue-bar">
        {safe > 0 ? (
          <button className="navbtn" type="button" onClick={() => onStep(safe - 1)}>
            Назад
          </button>
        ) : (
          <span />
        )}
        {safe < TONE_STEPS.length - 1 ? (
          <button className="navbtn primary" type="button" onClick={() => onStep(safe + 1)}>
            Дальше
          </button>
        ) : (
          <span />
        )}
      </div>
    </>
  )
}

function Theory() {
  return (
    <section>
      <h2>Что такое тон</h2>
      <p>Тон — высота слога. Она относительная: выше или ниже вашего обычного голоса, не нота на пианино.</p>
      <p>В тайском пять контуров: ровный, низкий, падающий, высокий, восходящий. Контур сидит на слоге.</p>
      <p>Ударение и интонация лежат поверх. Ударение не переносит тайский тон на другой слог. Вопрос фразы не отменяет тон слова.</p>
      <p>
        В языках мира высота устроена по-разному. Где-то тон держит регистр, где-то контур. Где-то высотой отмечен один слог, это питч-акцент. Одна шкала от одного языка к другому этого не описывает.
      </p>
    </section>
  )
}

function Bridges({ onHear }: { onHear: (name: ContourName) => void }) {
  return (
    <section>
      <h2>Русские мостики</h2>
      <p>Русские «да?», «да!», «да…» показывают направление. Это не тайские тоны. В русском нет пяти тонов на одном слоге, и аналогия здесь кончается.</p>
      <p>Ударение в русском переносит вершину: за́мок и замо́к — разные слова при том же составе. В тайском высота есть на каждом слоге и остаётся на нём.</p>
      <div className="grid">
        {CONTOURS.map((contour) => (
          <article className="word" key={contour.name}>
            <ToneContour name={contour.name} label={contour.title} />
            <b>{contour.title}</b>
            <p>{contour.analogy}</p>
            <button className="speak" type="button" onClick={() => onHear(contour.name)}>
              контур: {contour.title}
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

function Hearing({
  pairs,
  names,
  pairAnswer,
  nameAnswer,
  onPair,
  onName,
  onHearPair,
  onHear,
  onMore,
}: {
  pairs: { kind: "same" | "different"; first: ContourName; second: ContourName }[]
  names: ContourName[]
  pairAnswer: Record<number, string>
  nameAnswer: Record<number, string>
  onPair: (index: number, value: string) => void
  onName: (index: number, value: string) => void
  onHearPair: (first: ContourName, second: ContourName) => void
  onHear: (name: ContourName) => void
  onMore: () => void
}) {
  return (
    <section>
      <h2>Сначала слух</h2>
      <p>Сначала решите, два контура одинаковые или разные. Потом назовите контур. Говорить тайское слово здесь не нужно. Линия — чистый контур, не тайское произношение.</p>
      {pairs.map((trial, index) => {
        const chosen = pairAnswer[index]
        const expected = trial.kind === "same" ? "одинаково" : "по-разному"
        return (
          <article className="word" key={`pair-${index}`}>
            <button className="speak" type="button" onClick={() => onHearPair(trial.first, trial.second)}>
              два контура
            </button>
            <div className="row">
              {["одинаково", "по-разному"].map((label) => (
                <button key={label} className="speak" type="button" onClick={() => onPair(index, label)}>
                  {label}
                </button>
              ))}
            </div>
            {chosen ? (
              <p>
                Так: {expected}. {contourByName(trial.first).title} и {contourByName(trial.second).title}.
                {chosen === expected ? " Совпало." : " Ниже линия, можно послушать ещё раз."}
              </p>
            ) : null}
          </article>
        )
      })}
      <h2>Какой контур</h2>
      {names.map((name, index) => {
        const chosen = nameAnswer[index]
        const contour = contourByName(name)
        return (
          <article className="word" key={`name-${index}`}>
            <button className="speak" type="button" onClick={() => onHear(name)}>
              один контур
            </button>
            <div className="choice-grid">
              {CONTOURS.map((item) => (
                <button key={item.name} className="speak" type="button" onClick={() => onName(index, item.name)}>
                  <ToneContour name={item.name} label={item.title} />
                  {item.title}
                </button>
              ))}
            </div>
            {chosen ? (
              <p>
                Так: {contour.title}, {contour.voice}.
                {chosen === name ? " Совпало." : " Смотрите линию этого контура."}
              </p>
            ) : null}
            {chosen ? <ToneContour name={name} label={contour.title} /> : null}
          </article>
        )
      })}
      <button className="navbtn" type="button" onClick={onMore}>
        Другие пары
      </button>
    </section>
  )
}

function Gestures({ onHear }: { onHear: (name: ContourName) => void }) {
  return (
    <section>
      <h2>Контур и жест</h2>
      <p>Линия показывает высоту. Жест рукой повторяет ту же линию. Цвет только дублирует подпись.</p>
      {CONTOURS.map((contour) => (
        <article className="word" key={contour.name}>
          <ToneContour name={contour.name} label={`${contour.title}: ${contour.gesture}`} />
          <b>{contour.title}</b>
          <p>{contour.voice}. {contour.gesture}.</p>
          <button className="speak" type="button" onClick={() => onHear(contour.name)}>
            контур: {contour.title}
          </button>
        </article>
      ))}
    </section>
  )
}

function Pairs({ onSpeak }: { onSpeak: (text: string, options?: SpeakOptions) => void }) {
  return (
    <section>
      <h2>Пары из курса</h2>
      <p>Только слова, тон которых уже записан в курсе. Новых тонов здесь нет. Кнопка «контур» выше не заменяет тайское слово. Здесь говорит тайский голос.</p>
      {TONE_PAIRS.map((pair) => (
        <article className="word" key={pair.title}>
          <h3>{pair.title}</h3>
          {pair.items.map((item) => (
            <div className="lex-ex" key={item.th}>
              <div className="thai" lang="th">
                {item.th}
              </div>
              <Romanization rom={item.rom} />
              <div className="ru">{item.ru}</div>
              <SpeakControls text={item.th} label={`${item.th} ${item.rom}`} onSpeak={onSpeak} />
            </div>
          ))}
        </article>
      ))}
    </section>
  )
}

function Phrase({ onSpeak }: { onSpeak: (text: string, options?: SpeakOptions) => void }) {
  return (
    <section>
      <h2>Тон во фразе</h2>
      <p>Фраза взята из схемы «Вопрос». Частица стоит в конце. Тон глагола остаётся своим. Вопрос делают частица и интонация фразы, не смена тона глагола.</p>
      <article className="word">
        <div className="thai" lang="th">
          {PHRASE_TONE.th}
        </div>
        <Romanization rom={PHRASE_TONE.rom} />
        <div className="ru">{PHRASE_TONE.ru}</div>
        <p>
          <span className="thai" lang="th">
            {PHRASE_TONE.verb.th}
          </span>{" "}
          <Romanization rom={PHRASE_TONE.verb.rom} inline /> остаётся {PHRASE_TONE.verb.ru}.{" "}
          <span className="thai" lang="th">
            {PHRASE_TONE.particle.th}
          </span>{" "}
          <Romanization rom={PHRASE_TONE.particle.rom} inline /> — {PHRASE_TONE.particle.ru}.
        </p>
        <SpeakControls text={PHRASE_TONE.th} label={PHRASE_TONE.rom} onSpeak={onSpeak} />
      </article>
      <h2>Повторите за фразой</h2>
      <p>Послушайте фразу и скажите её следом. Сначала медленно, потом обычно. Это повторение, не оценка тона.</p>
      <Recorder />
      <details>
        <summary>Пение, по желанию</summary>
        <p>Можно протянуть контур на одной гласной, как гамму. Это запасной приём. Основной путь — слушать контур и повторять фразу.</p>
      </details>
    </section>
  )
}

function ReadingRules() {
  return (
    <section>
      <h2>Как читать тон</h2>
      <p>Знак тона пишется на гласной. Класс согласной и живой или мёртвый слог тоже меняют тон. Ниже только то, что уже сказано в шпаргалке. Невыведенный класс не назван.</p>
      <h3>Знаки</h3>
      <ul className="mark-list">
        {TONE_MARKS.map((mark) => (
          <li key={mark.th}>
            <span className="thai" lang="th">
              {mark.th}
            </span>{" "}
            {mark.name}. Своего тона у знака нет: тон даёт слог.
          </li>
        ))}
      </ul>
      <h3>Высокий класс, как в шпаргалке</h3>
      <div className="grid cols-3">
        {HIGH_CLASS.map((letter) => (
          <article className="word" key={letter.th}>
            <div className="thai" lang="th">
              {letter.th}
            </div>
            <Romanization rom={letter.rom} />
            <p>{letter.how}</p>
          </article>
        ))}
      </div>
      <p>У остальных согласных шпаргалка класс не пишет. Похожий звук класс не доказывает. Для них здесь стоит пометка: класс не указан в данных.</p>
      <h3>Короткий открытый слог</h3>
      {SHORT_OPEN ? (
        <article className="word">
          <div className="thai" lang="th">
            {SHORT_OPEN.th}
          </div>
          <p>{SHORT_OPEN.how}</p>
        </article>
      ) : (
        <p>тон не сверен</p>
      )}
    </section>
  )
}
