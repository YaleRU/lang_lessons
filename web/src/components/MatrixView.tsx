import { COLUMNS, TIMES, loveCell } from "../data/matrix.ts"
import { speakAs } from "../lib/matrixGender.ts"
import type { SpeakOptions } from "../lib/speech.ts"
import { Romanization } from "./Romanization.tsx"

function Mark({ thai, rom, ru }: { thai: string; rom: string; ru: string }) {
  return (
    <>
      <span className="thai mark" lang="th">
        {thai}
      </span>{" "}
      <Romanization rom={rom} inline /> <Romanization rom={ru} inline />
    </>
  )
}

export function MatrixView({
  gender,
  onHome,
  onSpeak,
}: {
  gender: string
  onHome: () => void
  onSpeak: (text: string, options?: SpeakOptions) => void
}) {
  return (
    <>
      <button className="ghost" type="button" onClick={onHome}>
        Оглавление
      </button>
      <p className="kicker">Одна таблица</p>
      <h1>Любит Таиланд</h1>
      <p>
        Глагол <Mark thai="รัก" rom="rák" ru="ра́к" /> не меняет букв. Будущее — <Mark thai="จะ" rom="jà" ru="джà" />, отрицание —{" "}
        <Mark thai="ไม่" rom="mâi" ru="мâй" />, вопрос — <Mark thai="ไหม" rom="mǎi" ru="мǎй" />. Прошедшее —{" "}
        <Mark thai="เมื่อก่อน" rom="mʉ̂ʉa-gɔ̀ɔn" ru="мʉ̂а-гɔ̀он" />, «раньше».
      </p>
      <p>
        Он и она — одно слово <Mark thai="เขา" rom="khǎo" ru="кхǎо" />. Вы — несколько человек,{" "}
        <Mark thai="พวกคุณ" rom="phûak-khun" ru="пхûак-кхун" />. К одному человеку и «ты», и «вы» звучат{" "}
        <Mark thai="คุณ" rom="khun" ru="кхун" />. Частица в конце зависит от говорящего.{" "}
        <button className="speak" type="button" onClick={() => onSpeak("รัก จะ ไม่ ไหม เมื่อก่อน เขา พวกคุณ คุณ")}>
          Слушать пометки
        </button>
      </p>
      <div className="love-scroll" tabIndex={0} role="region" aria-label="Таблица на девять клеток. Листается вбок и вниз.">
        <table className="love-grid">
          <caption>Вопрос, утверждение и отрицание в будущем, настоящем и прошедшем</caption>
          <thead>
            <tr>
              <th scope="col">Время</th>
              {COLUMNS.map((column) => (
                <th key={column.id} scope="col">
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TIMES.map((time) => (
              <tr key={time.id}>
                <th scope="row">{time.title}</th>
                {COLUMNS.map((column) => (
                  <td key={column.id}>
                    <ol>
                      {loveCell(time.id, column.id).map((item) => {
                        const line = speakAs(item, gender)
                        return (
                          <li key={line.person}>
                            <b>{line.person}</b>
                            <div className="thai" lang="th">
                              {line.thai}
                            </div>
                            <Romanization rom={line.rom} />
                            <Romanization rom={line.ruRead} />
                            <div className="ru">{line.ru}</div>
                            <button className="speak" type="button" aria-label={`Слушать: ${line.ru}`} onClick={() => onSpeak(line.thai)}>
                              Слушать
                            </button>
                          </li>
                        )
                      })}
                    </ol>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
