import type { ContourName } from "../lib/toneAudio.ts"

const PATH: Record<ContourName, string> = {
  mid: "M8 24 H112",
  low: "M8 36 H112",
  high: "M8 12 H112",
  falling: "M8 8 C48 12 78 22 112 40",
  rising: "M8 40 C42 36 78 22 112 8",
}

export function ToneContour({ name, label }: { name: ContourName; label: string }) {
  return (
    <svg className={`contour ${name}`} viewBox="0 0 120 48" role="img" aria-label={label}>
      <path d={PATH[name]} />
    </svg>
  )
}
