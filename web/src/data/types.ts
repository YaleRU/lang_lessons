export type GenderSide = {
  th: string
  rom: string
}

export type GenderedPhrase = {
  ru: string
  m: GenderSide
  f: GenderSide
}

export type Word = {
  th: string
  rom: string
  ru: string
  how: string
}

export type DiagramSlot = {
  role: string
  m: GenderSide
  f: GenderSide
}

export type Diagram = {
  title: string
  slots: DiagramSlot[]
}

export type TableCell = GenderedPhrase

export type TableRow = {
  h: string
  cells: TableCell[]
}

export type LessonTable = {
  title: string
  cols: string[]
  rows: TableRow[]
}

export type Lesson = {
  id: number
  title: string
  goal: string
  petrov: string
  formula: string
  note: string
  lead: GenderedPhrase
  words: Word[]
  diagrams: Diagram[]
  tables: LessonTable[]
  drills: GenderedPhrase[]
  self: string
}
