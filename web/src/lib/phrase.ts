import type { GenderSide } from "../data/types.ts"

export function side(
  item: { m: GenderSide; f: GenderSide },
  gender: string,
): GenderSide {
  return gender === "f" ? item.f : item.m
}
