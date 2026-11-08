import { CONSONANTS, VOWELS, type Letter } from "../data/alphabet.ts"
import { SCHEMAS, type SchemaLine } from "../data/schemas.ts"
import { HearButtons } from "./HearButtons.tsx"
import { Readable } from "./Readable.tsx"
import { Romanization } from "./Romanization.tsx"

export function CheatSheet({ onSpeak }: { onSpeak: (text: string) => void }) {
  return (
    <>
      <p className="muted">Схемы, буквы и звук. Тон стоит на гласной.</p>
      <h2>Как читать запись</h2>
      <p>Знак тона стоит на гласной. Цвет значит то же самое.</p>
      <table className="ref">
        <tbody>
          <tr>
            <th>Знак</th>
            <th>Тон</th>
            <th>Голос</th>
            <th>Пример</th>
          </tr>
          <ToneRow mark="нет" tone="средний" voice="ровно" th="กิน" rom="gin" toneClass="mid" word="ผมกินข้าวครับ" onSpeak={onSpeak} />
          <ToneRow mark="à" tone="низкий" voice="ниже обычного" th="จะ" rom="jà" toneClass="low" word="พรุ่งนี้ผมจะรักคุณครับ" onSpeak={onSpeak} />
          <ToneRow mark="â" tone="падающий" voice="сверху вниз" th="ไม่" rom="mâi" toneClass="falling" word="ผมไม่รักคุณครับ" onSpeak={onSpeak} />
          <ToneRow mark="á" tone="высокий" voice="высоко" th="รัก" rom="rák" toneClass="high" word="ผมรักคุณครับ" onSpeak={onSpeak} />
          <ToneRow mark="ǎ" tone="восходящий" voice="снизу вверх" th="ไหม" rom="mǎi" toneClass="rising" word="คุณรักผมไหมครับ" onSpeak={onSpeak} />
        </tbody>
      </table>
      <p>Две одинаковые буквы — долгий гласный: a коротко, aa долго. Конечные p, t, k не взрывайте.</p>
      <h2>Схемы</h2>
      {SCHEMAS.map((schema) => (
        <section key={schema.title}>
          <h2>{schema.title}</h2>
          <div className="formula">
            <Readable text={schema.scheme} onSpeak={onSpeak} />
          </div>
          <p className="muted">
            <Readable text={schema.universal} onSpeak={onSpeak} />
          </p>
          {schema.lines.map((line) => (
            <SchemaRow key={line.th} line={line} onSpeak={onSpeak} />
          ))}
        </section>
      ))}
      <h2>Согласные</h2>
      <p className="muted">Слог буквы: живой слог без знака. Высокий класс даёт восходящий тон, средний и низкий — средний.</p>
      {CONSONANTS.map((letter) => (
        <LetterRow key={letter.th} letter={letter} onSpeak={onSpeak} />
      ))}
      <h2>Гласные</h2>
      {VOWELS.map((letter) => (
        <LetterRow key={letter.th} letter={letter} onSpeak={onSpeak} />
      ))}
      <h2>Голос на iPhone</h2>
      <p>Настройки → Универсальный доступ → Проговаривание содержимого → Голоса → Тайский. После загрузки кнопки «отдельно» и «в слове» говорят без интернета.</p>
    </>
  )
}

function ToneRow({
  mark,
  tone,
  voice,
  th,
  rom,
  toneClass,
  word,
  onSpeak,
}: {
  mark: string
  tone: string
  voice: string
  th: string
  rom: string
  toneClass: string
  word: string
  onSpeak: (text: string) => void
}) {
  return (
    <tr>
      <td>{mark}</td>
      <td className={toneClass === "mid" ? undefined : toneClass}>{tone}</td>
      <td>{voice}</td>
      <td className="thai">
        {th} <span className={`rom ${toneClass}`}>{rom}</span>
        <HearButtons alone={th} word={word} onSpeak={onSpeak} />
      </td>
    </tr>
  )
}

function SchemaRow({
  line,
  onSpeak,
}: {
  line: SchemaLine
  onSpeak: (text: string) => void
}) {
  return (
    <article className="word">
      <div className="ru">{line.label}</div>
      <div className="thai">{line.th}</div>
      <Romanization rom={line.rom} />
      <div className="ru">{line.ru}</div>
      <HearButtons alone={line.alone} word={line.word} onSpeak={onSpeak} />
    </article>
  )
}

function LetterRow({
  letter,
  onSpeak,
}: {
  letter: Letter
  onSpeak: (text: string) => void
}) {
  return (
    <article className="word">
      <div className="thai">{letter.th}</div>
      <Romanization rom={letter.rom} />
      <div className="ru">{letter.ru}</div>
      <div className="how">
        <Readable text={letter.how} onSpeak={onSpeak} />
      </div>
      <div className="thai" style={{ fontSize: "1.15rem" }}>{letter.word}</div>
      <Romanization rom={letter.wordRom} />
      <HearButtons alone={letter.alone} word={letter.word} onSpeak={onSpeak} />
    </article>
  )
}
