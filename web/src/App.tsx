import { useEffect, useRef, useState } from "react"
import { CheatSheet } from "./components/CheatSheet.tsx"
import { HomeView } from "./components/HomeView.tsx"
import { MatrixView } from "./components/MatrixView.tsx"
import { LexiconView } from "./components/LexiconView.tsx"
import { LessonView } from "./components/LessonView.tsx"
import { Romanization } from "./components/Romanization.tsx"
import { ToneModuleView } from "./components/ToneModuleView.tsx"
import { COURSE } from "./data/course.ts"
import { TONE_STEPS } from "./data/tones.ts"
import { clampStep, lessonSteps } from "./lib/lessonSteps.ts"
import { parseHash, resolveScreen, screenHash, type Screen } from "./lib/nav.ts"
import {
  MISSING_SPEECH_HINT,
  MISSING_VOICE_HINT,
  primeVoices,
  speak,
  type SpeakOptions,
} from "./lib/speech.ts"
import {
  readGender,
  readLesson,
  readLessonStep,
  readTheme,
  readMatrixReached,
  readToneReached,
  writeGender,
  writeLesson,
  writeLessonStep,
  writeMatrixReached,
  writeTheme,
  writeToneReached,
  type ThemeChoice,
} from "./lib/storage.ts"

const LESSON_IDS = COURSE.map((lesson) => lesson.id)

export default function App() {
  const [screen, setScreen] = useState<Screen>(() => resolveScreen(parseHash(window.location.hash), LESSON_IDS))
  const [gender, setGender] = useState(readGender)
  const [theme, setTheme] = useState<ThemeChoice>(readTheme)
  const [toneReached, setToneReached] = useState(readToneReached)
  const [matrixReached, setMatrixReached] = useState(readMatrixReached)
  const [voiceHint, setVoiceHint] = useState("")
  const [viewGeneration, setViewGeneration] = useState(0)
  const opener = useRef<HTMLElement | null>(null)
  const sheetRef = useRef<HTMLDivElement>(null)
  const sheetWasOpen = useRef(false)

  const lesson = screen.name === "lesson" ? (COURSE.find((item) => item.id === screen.id) ?? null) : null
  const lessonStepCount = lesson ? lessonSteps(lesson).length : 1
  const lessonStep = lesson ? Math.min(screen.name === "lesson" ? screen.step : 0, lessonStepCount - 1) : 0

  useEffect(() => {
    primeVoices()
    syncFromHash()
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (theme === "system") root.removeAttribute("data-theme")
    else root.dataset.theme = theme
    writeTheme(theme)
  }, [theme])

  useEffect(() => {
    document.body.classList.toggle(
      "has-continue",
      screen.name === "lesson" || screen.name === "tones",
    )
  }, [screen.name])

  useEffect(() => {
    const onHash = () => {
      syncFromHash()
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  useEffect(() => {
    const open = screen.name === "sheet"
    const sheet = sheetRef.current
    if (!sheet) return
    if (open) {
      if (!sheetWasOpen.current && document.activeElement instanceof HTMLElement) {
        opener.current = document.activeElement
      }
      sheetWasOpen.current = true
      window.setTimeout(() => sheet.querySelector<HTMLElement>("button, [href], summary")?.focus(), 0)
      return
    }
    if (sheetWasOpen.current) {
      sheetWasOpen.current = false
      opener.current?.focus()
    }
  }, [screen.name])

  useEffect(() => {
    let startX = 0
    let startY = 0
    let fromControl = false
    const onStart = (event: TouchEvent) => {
      const touch = event.changedTouches[0]
      startX = touch.clientX
      startY = touch.clientY
      const target = event.target
      fromControl = target instanceof Element && Boolean(target.closest("button, a, input, audio"))
    }
    const onEnd = (event: TouchEvent) => {
      if (fromControl) return
      const touch = event.changedTouches[0]
      const dx = touch.clientX - startX
      const dy = touch.clientY - startY
      const fromEdge = startX > window.innerWidth - 28
      const fromBottom = startY > window.innerHeight - 88
      const target = event.target
      const onBar = target instanceof Element && Boolean(target.closest("#sheet .bar"))
      if (screen.name !== "sheet" && ((fromEdge && dx < -40) || (fromBottom && dy < -50))) {
        go({ name: "sheet" })
      } else if (screen.name === "sheet" && onBar && dy > 70 && Math.abs(dy) > Math.abs(dx)) {
        if (window.history.length > 1) history.back()
        else go({ name: "home" })
      }
    }
    document.addEventListener("touchstart", onStart, { passive: true })
    document.addEventListener("touchend", onEnd, { passive: true })
    return () => {
      document.removeEventListener("touchstart", onStart)
      document.removeEventListener("touchend", onEnd)
    }
  }, [screen.name])

  function settled(next: Screen): Screen {
    if (next.name === "lesson") {
      const item = COURSE.find((lesson) => lesson.id === next.id)
      return { name: "lesson", id: next.id, step: clampStep(next.step, item ? lessonSteps(item).length : 1) }
    }
    if (next.name === "tones") {
      return { name: "tones", step: Math.min(Math.max(0, next.step), TONE_STEPS.length - 1) }
    }
    return next
  }

  function remember(next: Screen) {
    if (next.name === "lesson") {
      writeLesson(next.id)
      writeLessonStep(next.id, next.step)
    }
    if (next.name === "tones") {
      writeToneReached(next.step)
      setToneReached(readToneReached())
    }
    if (next.name === "matrix") {
      writeMatrixReached(1)
      setMatrixReached(readMatrixReached())
    }
  }

  function syncFromHash() {
    const next = settled(resolveScreen(parseHash(window.location.hash), LESSON_IDS))
    const hash = screenHash(next)
    if (window.location.hash !== hash) history.replaceState(null, "", hash)
    setScreen(next)
    remember(next)
  }

  function go(next: Screen) {
    const resolved = resolveScreen(next, LESSON_IDS)
    const hash = screenHash(resolved)
    if (window.location.hash === hash) {
      setScreen(resolved)
      window.scrollTo(0, 0)
      return
    }
    window.location.hash = hash
  }

  const chooseGender = (value: string) => {
    setGender(value)
    writeGender(value)
  }

  const onSpeak = (text: string, options?: SpeakOptions) => {
    const result = speak(text, {
      ...options,
      onUnavailable: () => setVoiceHint(MISSING_VOICE_HINT),
    })
    if (result === "missing-api") {
      setVoiceHint(MISSING_SPEECH_HINT)
      setViewGeneration((current) => current + 1)
      return
    }
    if (result === "missing-voice") {
      setVoiceHint(MISSING_VOICE_HINT)
      return
    }
    setVoiceHint("")
  }

  const nav = [
    {
      name: "Уроки",
      current: screen.name === "home" || screen.name === "lesson" || screen.name === "matrix",
      go: () => go({ name: "home" }),
    },
    {
      name: "Тоны",
      current: screen.name === "tones",
      go: () => go({ name: "tones", step: toneReached }),
    },
    { name: "Слова", current: screen.name === "words", go: () => go({ name: "words" }) },
    { name: "Шпаргалка", current: screen.name === "sheet", go: () => go({ name: "sheet" }) },
  ] as const

  return (
    <>
      <div className="frame" inert={screen.name === "sheet" ? true : undefined}>
        <header className="top">
          <div className="brand">Тайский вслух</div>
          <div className="genders">
            <button
              type="button"
              className={gender === "m" ? "on" : undefined}
              aria-pressed={gender === "m"}
              onClick={() => chooseGender("m")}
            >
              я <span className="thai" lang="th">ผม</span> <Romanization rom="phǒm" inline />
            </button>
            <button
              type="button"
              className={gender === "f" ? "on" : undefined}
              aria-pressed={gender === "f"}
              onClick={() => chooseGender("f")}
            >
              я <span className="thai" lang="th">ฉัน</span> <Romanization rom="chǎn" inline />
            </button>
            <button
              type="button"
              aria-pressed={theme !== "system"}
              onClick={() => setTheme(theme === "dark" ? "light" : theme === "light" ? "system" : "dark")}
            >
              {theme === "dark" ? "тёмная" : theme === "light" ? "светлая" : "как в системе"}
            </button>
          </div>
        </header>
        <p id="voiceHint" className="muted" role="status" aria-live="polite">
          {voiceHint}
        </p>
        <main id="app">
          {screen.name === "matrix" ? (
            <MatrixView gender={gender} onHome={() => go({ name: "home" })} onSpeak={onSpeak} />
          ) : screen.name === "tones" ? (
            <ToneModuleView
              step={Math.min(screen.step, TONE_STEPS.length - 1)}
              onStep={(step) => go({ name: "tones", step })}
              onSpeak={onSpeak}
            />
          ) : screen.name === "words" ? (
            <LexiconView onHome={() => go({ name: "home" })} onSpeak={onSpeak} />
          ) : lesson && screen.name === "lesson" ? (
            <LessonView
              key={`${lesson.id}:${gender}:${viewGeneration}`}
              lesson={lesson}
              step={lessonStep}
              gender={gender}
              onHome={() => go({ name: "home" })}
              onStep={(step) => go({ name: "lesson", id: lesson.id, step })}
              onLesson={(id) => go({ name: "lesson", id, step: readLessonStep(id) })}
              onSpeak={onSpeak}
            />
          ) : (
            <HomeView
              lastLesson={readLesson()}
              stepOf={readLessonStep}
              toneReached={toneReached}
              matrixReached={matrixReached}
              onOpen={go}
              onSpeak={onSpeak}
            />
          )}
        </main>
      </div>
      <div className="edge" id="edge" />
      <nav className="grab" aria-label="Разделы">
        <div className="grab-inner">
          {nav.map((item) => (
            <button
              key={item.name}
              className={item.current ? "navbtn primary" : "navbtn"}
              type="button"
              aria-current={item.current ? "page" : undefined}
              onClick={item.go}
            >
              {item.name}
            </button>
          ))}
        </div>
      </nav>
      <div
        id="sheet"
        ref={sheetRef}
        className={screen.name === "sheet" ? "open" : undefined}
        inert={screen.name === "sheet" ? undefined : true}
        aria-hidden={screen.name === "sheet" ? "false" : "true"}
      >
        <div className="bar">
          <strong>Шпаргалка</strong>
          <button
            className="ghost"
            type="button"
            onClick={() => {
              if (window.history.length > 1) history.back()
              else go({ name: "home" })
            }}
          >
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
