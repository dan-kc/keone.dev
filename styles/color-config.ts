export enum Color {
  cyan = 'cyan',
  emerald = 'emerald',
  violet = 'violet',
  yellow = 'yellow',
  white = 'white',
  grey = 'grey',
  rose = "rose"
}

export const generateClassName = (
  color: Color
): { textColorClassName: string; bgColorClassName: string } => {
  let textColorClassName: string
  let bgColorClassName: string

  if (color === Color.cyan) {
    textColorClassName = 'text-cyan-500'
    bgColorClassName = 'bg-cyan-500'
  } else if (color === Color.emerald) {
    textColorClassName = 'text-emerald-500'
    bgColorClassName = 'bg-emerald-500'
  } else if (color === Color.violet) {
    textColorClassName = 'text-violet-500'
    bgColorClassName = 'bg-violet-500'
  } else if (color === Color.yellow) {
    textColorClassName = 'text-yellow-300'
    bgColorClassName = 'bg-yellow-300'
  } else if (color === Color.white) {
    textColorClassName = 'text-white'
    bgColorClassName = 'bg-white'
  } else if (color === Color.grey) {
    textColorClassName = 'text-anthracite-11'
    bgColorClassName = 'bg-anthracite-11'
  } else if (color === Color.rose) {
    textColorClassName = 'text-rose-700'
    bgColorClassName = 'bg-rose-700'
  }

  return { textColorClassName: textColorClassName, bgColorClassName: bgColorClassName }
}
