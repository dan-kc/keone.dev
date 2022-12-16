const COLOR = {
  tomato: 'tomato',
  crimson: 'crimson',
  violet: 'violet',
  plum: 'plum',
  purple: 'purple',
  ref: 'red'
} as const
type ObjectValue<T> = T[keyof T]
export type Color = ObjectValue<typeof COLOR>

