import { useEffect, useRef, useState } from "react"

export function Recorder() {
  const [recording, setRecording] = useState(false)
  const [url, setUrl] = useState<string | null>(null)
  const [error, setError] = useState("")
  const recorder = useRef<MediaRecorder | null>(null)
  const urlRef = useRef<string | null>(null)

  useEffect(() => {
    return () => {
      if (urlRef.current) URL.revokeObjectURL(urlRef.current)
      recorder.current?.stream.getTracks().forEach((track) => track.stop())
    }
  }, [])

  async function start() {
    if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
      setError("В этом браузере нет записи. Браузер всё равно не проверяет тон.")
      return
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const media = new MediaRecorder(stream)
      const chunks: Blob[] = []
      media.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.push(event.data)
      }
      media.onstop = () => {
        stream.getTracks().forEach((track) => track.stop())
        if (urlRef.current) URL.revokeObjectURL(urlRef.current)
        const next = URL.createObjectURL(new Blob(chunks, { type: media.mimeType || "audio/webm" }))
        urlRef.current = next
        setUrl(next)
      }
      media.start()
      recorder.current = media
      setRecording(true)
      setError("")
    } catch {
      setError("Запись не началась. Разрешите микрофон или пропустите шаг. Браузер не проверяет тон.")
    }
  }

  function stop() {
    recorder.current?.stop()
    setRecording(false)
  }

  return (
    <div className="card recorder">
      <p>Запишите себя и послушайте. Браузер не говорит, верный ли тон.</p>
      {recording ? (
        <button className="speak" type="button" onClick={stop}>
          остановить запись
        </button>
      ) : (
        <button className="speak" type="button" onClick={() => void start()}>
          записать себя
        </button>
      )}
      {url ? (
        <audio controls src={url}>
          Ваша запись
        </audio>
      ) : null}
      {error ? (
        <p className="error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
