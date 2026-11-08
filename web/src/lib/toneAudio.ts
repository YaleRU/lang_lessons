export type ContourName = "mid" | "low" | "falling" | "high" | "rising"

const SHAPE: Record<ContourName, [number, number]> = {
  mid: [220, 220],
  low: [150, 150],
  falling: [320, 140],
  high: [330, 330],
  rising: [150, 320],
}

let context: AudioContext | null = null

function audioContext(): AudioContext | null {
  const Ctor =
    window.AudioContext ??
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return null
  if (!context) context = new Ctor()
  return context
}

export function playContour(name: ContourName): Promise<"played" | "unavailable"> {
  const ctx = audioContext()
  if (!ctx) return Promise.resolve("unavailable")
  const [startHz, endHz] = SHAPE[name]
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = "sine"
  osc.connect(gain)
  gain.connect(ctx.destination)
  const now = ctx.currentTime
  const duration = 0.55
  osc.frequency.setValueAtTime(startHz, now)
  osc.frequency.linearRampToValueAtTime(endHz, now + duration)
  gain.gain.setValueAtTime(0.0001, now)
  gain.gain.exponentialRampToValueAtTime(0.06, now + 0.03)
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)
  osc.start(now)
  osc.stop(now + duration + 0.02)
  return ctx.resume().then(
    () =>
      new Promise((resolve) => {
        osc.onended = () => resolve("played")
      }),
  )
}

export async function playContourPair(
  first: ContourName,
  second: ContourName,
): Promise<"played" | "unavailable"> {
  const firstResult = await playContour(first)
  if (firstResult === "unavailable") return firstResult
  await new Promise((resolve) => window.setTimeout(resolve, 280))
  return playContour(second)
}
