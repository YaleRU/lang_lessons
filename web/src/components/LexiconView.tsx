import { useState } from "react"
import { LEXICON, type LexiconPart } from "../data/lexicon.ts"
import { readWordsTab, writeWordsTab } from "../lib/storage.ts"
import { HearButtons } from "./HearButtons.tsx"
import { Romanization } from "./Romanization.tsx"

const TABS = LEXICON.map((item) => item.id)

function TabLabel({ title }: { title: string }) {
  const tail = "тельные"
  if (title.endsWith(tail) && title.length > tail.length + 2) {
    return (
      <>
        {title.slice(0, -tail.length)}
        <br />
        {tail}
      </>
    )
  }
  return title
}

export function LexiconView({
  onHome,
  onSpeak,
}: {
  onHome: () => void
  onSpeak: (text: string) => void
}) {
  const stored = readWordsTab()
  const initial = TABS.includes(stored as LexiconPart["id"]) ? (stored as LexiconPart["id"]) : "verbs"
  const [tab, setTab] = useState<LexiconPart["id"]>(initial)
  const part = LEXICON.find((item) => item.id === tab) ?? LEXICON[0]
  const choose = (next: LexiconPart["id"]) => {
    setTab(next)
    writeWordsTab(next)
  }

  return (
    <>
      <button className="ghost" type="button" onClick={onHome}>
        Все уроки
      </button>
      <p className="kicker">Бытовые слова</p>
      <h1>{part.title}</h1>
      <div
        className="lex-tabs"
        role="tablist"
        aria-label="Части речи"
        onKeyDown={(event) => {
          if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
          event.preventDefault()
          const index = TABS.indexOf(part.id)
          const next =
            event.key === "ArrowRight"
              ? (TABS[(index + 1) % TABS.length] ?? part.id)
              : (TABS[(index - 1 + TABS.length) % TABS.length] ?? part.id)
          choose(next)
          window.setTimeout(() => document.getElementById(`tab-${next}`)?.focus(), 0)
        }}
      >
        {LEXICON.map((item) => (
          <button
            key={item.id}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={item.id === part.id}
            aria-controls={`panel-${item.id}`}
            tabIndex={item.id === part.id ? 0 : -1}
            className={item.id === part.id ? "on" : undefined}
            aria-label={item.title}
            onClick={() => choose(item.id)}
          >
            <TabLabel title={item.title} />
          </button>
        ))}
      </div>
      <div id={`panel-${part.id}`} role="tabpanel" aria-labelledby={`tab-${part.id}`}>
      {part.items.map((item) => (
        <article className="word" key={`${part.id}-${item.n}`}>
          <div className="thai" lang="th">
            {item.th}
          </div>
          {item.rom ? <Romanization rom={item.rom} /> : <div className="ru">тон не сверен</div>}
          <div className="ru">{item.ru}</div>
          <p>{item.gloss}</p>
          <HearButtons alone={item.th} onSpeak={onSpeak} />
          {item.notes.map((note) => (
            <p className="muted" key={note}>
              {note}
            </p>
          ))}
          {item.extras.map((extra) => (
            <div key={extra.th}>
              <div className="thai" lang="th">
                {extra.th}
              </div>
              {extra.rom ? <Romanization rom={extra.rom} /> : <div className="ru">тон не сверен</div>}
              <HearButtons alone={extra.th} onSpeak={onSpeak} />
            </div>
          ))}
          {item.examples.map((example, index) => (
            <div className="lex-ex" key={`${example.th}-${index}`}>
              {example.label ? <div className="lab">{example.label}</div> : null}
              <div className="thai" lang="th">
                {example.th}
              </div>
              {example.rom ? <Romanization rom={example.rom} /> : <div className="ru">тон не сверен</div>}
              {example.tail ? <div className="ru">{example.tail}</div> : null}
              <HearButtons
                alone={example.alone || item.th}
                word={example.th}
                onSpeak={onSpeak}
                inLabel="в фразе"
              />
            </div>
          ))}
        </article>
      ))}
      </div>
    </>
  )
}
