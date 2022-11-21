import classNames from 'classnames'


interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  color: Color
}

const Highlight: React.FC<Props> = ({ children, color }) => {
  let textColorClassName: string
  let lineClassName: string
  if (color === Color.cyan) {
    textColorClassName = 'text-cyan-500'
    lineClassName = 'bg-cyan-500/30'
  }
  if (color === Color.emerald) {
    textColorClassName = 'text-emerald-500'
    lineClassName = 'bg-emerald-500/30'
  }
  if (color === Color.violet) {
    textColorClassName = 'text-violet-500'
    lineClassName = 'bg-violet-500/30'
  }
  if (color === Color.yellow) {
    textColorClassName = 'text-yellow-300'
    lineClassName = 'bg-yellow-300/30'
  }

  return (
    <>
      <span
        className={classNames(
          textColorClassName,
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
