import { useState } from "react"
import { LEXICON, type LexiconPart } from "../data/lexicon.ts"
import { HearButtons } from "./HearButtons.tsx"
import { Romanization } from "./Romanization.tsx"

export function LexiconView({
  onHome,
  onSpeak,
}: {
  onHome: () => void
  onSpeak: (text: string) => void
}) {
  const [tab, setTab] = useState<LexiconPart["id"]>("verbs")
  const part = LEXICON.find((item) => item.id === tab) ?? LEXICON[0]

  return (
    <>
      <button className="ghost" type="button" onClick={onHome}>
        Все уроки
      </button>
      <p className="kicker">Бытовые слова</p>
      <h1>{part.title}</h1>
      <div className="lex-tabs" role="tablist">
        {LEXICON.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={item.id === part.id}
            className={item.id === part.id ? "on" : undefined}
            onClick={() => setTab(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {part.items.map((item) => (
        <article className="word" key={`${part.id}-${item.n}`}>
          <div className="thai">{item.th}</div>
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
              <div className="thai">{extra.th}</div>
              {extra.rom ? <Romanization rom={extra.rom} /> : <div className="ru">тон не сверен</div>}
              <HearButtons alone={extra.th} onSpeak={onSpeak} />
            </div>
          ))}
          {item.examples.map((example, index) => (
            <div className="lex-ex" key={`${example.th}-${index}`}>
              {example.label ? <div className="lab">{example.label}</div> : null}
              <div className="thai">{example.th}</div>
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
    </>
  )
}
