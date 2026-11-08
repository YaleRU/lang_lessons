export type ToneName = "rising" | "falling" | "high" | "low" | "mid"

export function toneOf(text: string): ToneName {
  const normalized = text.normalize("NFD")
  if (normalized.includes("\u030c")) return "rising"
  if (normalized.includes("\u0302")) return "falling"
  if (normalized.includes("\u0301")) return "high"
  if (normalized.includes("\u0300")) return "low"
  return "mid"
}

export function romanizationParts(rom: string): string[] {
  return String(rom).split(/(\s+|-)/)
}
