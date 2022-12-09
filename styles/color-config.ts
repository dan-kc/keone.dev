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
    textColorClassName = 'text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-300'
    bgColorClassName = 'bg-cyan-500'
  } else if (color === Color.emerald) {
    textColorClassName = 'text-transparent bg-clip-text bg-gradient-to-br from-grassDark-9 to-grassDark-11'
    bgColorClassName = 'bg-gradient-to-br from-grassDark-9 to-grassDark-11'
  } else if (color === Color.violet) {
    textColorClassName = 'text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-violet-300'
    bgColorClassName = 'bg-violet-500'
  } else if (color === Color.yellow) {
    textColorClassName = 'text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200'
    bgColorClassName = 'bg-yellow-300'
  } else if (color === Color.white) {
    textColorClassName = 'text-white'
    bgColorClassName = 'bg-white'
  } else if (color === Color.grey) {
    textColorClassName = 'text-anthracite-11'
    bgColorClassName = 'bg-anthracite-3'
  } else if (color === Color.rose) {
    textColorClassName = 'text-transparent bg-clip-text bg-gradient-to-br from-rose-700 to-rose-500'
    bgColorClassName = 'bg-rose-700'
  }

  return { textColorClassName: textColorClassName, bgColorClassName: bgColorClassName }
}
