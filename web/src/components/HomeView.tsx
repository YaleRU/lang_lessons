import { COURSE } from "../data/course.ts"

export function HomeView({ onOpen }: { onOpen: (id: number) => void }) {
  return (
    <>
      <p className="kicker">16 речевых задач</p>
      <h1>Сначала сказать.</h1>
      <p>Одна таблица на урок и одни и те же слова: да, нет, вопрос, вчера, завтра. Целый алфавит для этого не нужен. Сверху выберите ผม или ฉัน.</p>
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
        <b>Как открыть на iPhone без интернета</b>
        <p className="muted" style={{ marginTop: 6 }}>
          Сохраните этот файл в «Файлы». Откройте его через «Поделиться» → Safari. Экран «Файлы» сам страницу не запускает. Сеть после этого не нужна. Шпаргалка открывается нижней кнопкой, свайпом от правого края или снизу вверх.
        </p>
      </div>
      <p className="muted">Каркас тот же, что у Петрова: на каждом уроке одна схема. В тайском время — слово в начале фразы, поэтому «люблю, любил, буду любить» стоят в первом уроке. Буквы разбираются внутри тех слов, которые вы говорите.</p>
    </>
  )
}
