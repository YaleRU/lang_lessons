import { COURSE } from "../data/course.ts"

export function HomeView({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <>
      <p className="kicker">16 речевых задач</p>
      <h1>Сначала сказать.</h1>
      <p>На уроке одна таблица и те же слова: да, нет, вопрос, вчера, завтра. Сверху выберите ผม или ฉัน. Буквы и схемы лежат в шпаргалке.</p>
      {COURSE.map((lesson) => (
        <button
          key={lesson.id}
          className="lesson-link"
          type="button"
          onClick={() => onOpen(lesson.id)}
        >
          <b>
            {lesson.id}. {lesson.title}
          </b>
          <span>{lesson.goal}</span>
        </button>
      ))}
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
