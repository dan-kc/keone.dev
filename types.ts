const COLOR = {
  violet: 'violet',
  green: 'green',
  orange: 'orange',
  sky: 'sky',
} as const
type ObjectValue<T> = T[keyof T]
export type Color = ObjectValue<typeof COLOR>
