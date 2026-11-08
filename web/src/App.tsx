import { useEffect, useRef, useState } from "react"
import { CheatSheet } from "./components/CheatSheet.tsx"
import { HomeView } from "./components/HomeView.tsx"
import { LessonView } from "./components/LessonView.tsx"
import { COURSE } from "./data/course.ts"
import {
  MISSING_SPEECH_HINT,
  MISSING_VOICE_HINT,
  primeVoices,
  speak,
} from "./lib/speech.ts"
import { readGender, readLesson, writeGender, writeLesson } from "./lib/storage.ts"

export default function App() {
  const [gender, setGender] = useState(readGender)
  const [lessonId, setLessonId] = useState<number | null>(readLesson)
  const [voiceHint, setVoiceHint] = useState("")
  const [sheetOpen, setSheetOpen] = useState(false)
  const [viewGeneration, setViewGeneration] = useState(0)
  const sheetOpenRef = useRef(false)

  const lesson = COURSE.find((item) => item.id === lessonId) ?? null

  useEffect(() => {
    primeVoices()
  }, [])

  useEffect(() => {
    let startX = 0
    let startY = 0
    let dismissFromBar = false
    const onStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0]
      startX = touch.clientX
      startY = touch.clientY
      const target = event.target
      dismissFromBar =
        target instanceof Element && Boolean(target.closest("#sheet .bar"))
    }
    const onEnd = (event: TouchEvent) => {
      const touch = event.changedTouches[0]
      const dx = touch.clientX - startX
      const dy = touch.clientY - startY
      const fromEdge = startX > window.innerWidth - 28
      const fromBottom = startY > window.innerHeight - 88
      if (
        !sheetOpenRef.current &&
        ((fromEdge && dx < -40) || (fromBottom && dy < -50))
      ) {
        sheetOpenRef.current = true
        setSheetOpen(true)
      } else if (
        sheetOpenRef.current &&
        dismissFromBar &&
        dy > 70 &&
        Math.abs(dy) > Math.abs(dx)
      ) {
        sheetOpenRef.current = false
        setSheetOpen(false)
      }
    }
    document.addEventListener("touchstart", onStart, { passive: true })
    document.addEventListener("touchend", onEnd, { passive: true })
    return () => {
      document.removeEventListener("touchstart", onStart)
      document.removeEventListener("touchend", onEnd)
    }
  }, [])

  const openLesson = (id: number | null) => {
    setLessonId(id)
    writeLesson(id)
    window.scrollTo(0, 0)
  }

  const chooseGender = (value: string) => {
    setGender(value)
    writeGender(value)
  }

  const onSpeak = (text: string) => {
    const result = speak(text)
    if (result === "missing-api") {
      setVoiceHint(MISSING_SPEECH_HINT)
      setViewGeneration((current) => current + 1)
      return
    }
    if (result === "missing-voice") setVoiceHint(MISSING_VOICE_HINT)
  }

  const setSheet = (open: boolean) => {
    sheetOpenRef.current = open
    setSheetOpen(open)
  }

  return (
    <>
      <header className="top">
        <div className="brand">Тайский вслух</div>
        <div className="genders">
          <button
            type="button"
            className={gender === "m" ? "on" : undefined}
            onClick={() => chooseGender("m")}
          >
            я ผม
          </button>
          <button
            type="button"
            className={gender === "f" ? "on" : undefined}
            onClick={() => chooseGender("f")}
          >
            я ฉัน
          </button>
        </div>
      </header>
      <p
        id="voiceHint"
        className="muted"
        style={{ maxWidth: 760, margin: "0 auto", padding: "0 16px" }}
      >
        {voiceHint}
      </p>
      <div id="app">
        {lesson ? (
          <LessonView
            key={`${lesson.id}:${gender}:${viewGeneration}`}
            lesson={lesson}
            gender={gender}
            onOpen={openLesson}
            onSpeak={onSpeak}
          />
        ) : (
          <HomeView onOpen={openLesson} />
        )}
      </div>
      <div className="edge" id="edge" />
      <div className="grab">
        <button className="navbtn" type="button" onClick={() => openLesson(null)}>
          Уроки
        </button>
        <button className="navbtn primary" type="button" onClick={() => setSheet(true)}>
          Шпаргалка
        </button>
      </div>
      <div id="sheet" className={sheetOpen ? "open" : undefined} aria-hidden={sheetOpen ? "false" : "true"}>
        <div className="bar">
          <strong>Шпаргалка</strong>
          <button className="ghost" type="button" onClick={() => setSheet(false)}>
            Закрыть
          </button>
        </div>
        <div className="body">
          <CheatSheet onSpeak={onSpeak} />
        </div>
      </div>
    </>
  )
}
