import classNames from 'classnames'

export enum ColorOptions {
  cyan = 'cyan',
  emerald = 'emerald',
  violet = 'violet',
  yellow = 'yellow',
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  color: ColorOptions
}

const Highlight: React.FC<Props> = ({ children, color }) => {
  let textClassName: string
  let lineClassName: string
  if (color === ColorOptions.cyan) {
    textClassName = 'text-cyan-500'
    lineClassName = 'bg-cyan-500/30'
  }
  if (color === ColorOptions.emerald) {
    textClassName = 'text-emerald-500'
    lineClassName = 'bg-emerald-500/30'
  }
  if (color === ColorOptions.violet) {
    textClassName = 'text-violet-500'
    lineClassName = 'bg-violet-500/30'
  }
  if (color === ColorOptions.yellow) {
    textClassName = 'text-yellow-300'
    lineClassName = 'bg-yellow-300/30'
  }

  return (
    <>
      <span
        className={classNames(
          textClassName,
          'relative inline-block text-white'
        )}
      >
        {children}

        <div
          className={classNames(
            lineClassName,
            '-z-10 h-0.5 w-[calc(200vw+200vh)] absolute bottom-[19%] -left-[100vw]'
          )}
        />
        <div
          className={classNames(
            lineClassName,
            '-z-10 h-0.5 w-[calc(200vw+200vh)] absolute top-[39%] -left-[100vw]'
          )}
        />
        <div
          className={classNames(
            lineClassName,
            '-z-10 h-[calc(200vh+200vw)] w-0.5 absolute -top-[100vh] left-0'
          )}
        />
        <div
          className={classNames(
            lineClassName,
            '-z-10 h-[calc(200vh+200vw)] w-0.5 absolute -top-[100vh] right-0'
          )}
        />

        {/* left */}
        <div
          className='-z-20 h-0.5 w-[calc(200vw+200vh)] absolute top-0 left-0 origin-top-left bg-anthracite-5/70'
          style={{
            transform: 'translate(0.51em) rotate(-45deg) translate(-50%,-50%)',
          }}
        />
        <div
          className='-z-20 h-0.5 w-[calc(200vw+200vh)] absolute bottom-0 left-0 origin-bottom-left bg-anthracite-5/70'
          style={{
            transform: 'translate(0.23em) rotate(45deg) translate(-50%,-50%)',
          }}
        />

        {/* {/* right */}
        <div
          className='-z-20 h-0.5 w-[calc(200vw+200vh)] absolute top-0 right-0 origin-top-right bg-anthracite-5/70'
          style={{
            transform: 'translate(-0.475em) rotate(45deg) translate(50%,50%)',
          }}
        />

        <div
          className='-z-20 h-0.5 w-[calc(200vw+200vh)] absolute bottom-0 right-0 origin-bottom-right bg-anthracite-5/70'
          style={{
            transform: 'translate(-0.25em) rotate(-45deg) translate(50%,50%)',
          }}
        />
      </span>
    </>
  )
}
export default Highlight
