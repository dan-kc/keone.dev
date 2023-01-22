const COLOR = {
  green: 'green',
  orange: 'orange',
  violet: 'violet',
  sky: 'sky',
} as const
type ObjectValue<T> = T[keyof T]
export type Color = ObjectValue<typeof COLOR>
