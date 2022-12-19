const COLOR = {
  tomato: 'tomato',
  crimson: 'crimson',
  violet: 'violet',
  purple: 'purple',
} as const
type ObjectValue<T> = T[keyof T]
export type Color = ObjectValue<typeof COLOR>
