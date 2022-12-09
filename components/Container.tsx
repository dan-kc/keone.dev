import classNames from 'classnames'

export enum Options {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size: Options
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, size }) => {
  return (
    <div
      className={classNames(
        size === Options.sm
          ? 'sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl px-3 md:px-10'
          : '',
        size === Options.md
          ? 'max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-3 md:px-10'
          : '',
        size === Options.lg
          ? 'max-w-3xl lg:max-w-5xl xl:max-w-7xl px-5 md:px-10'
          : '',
        'relative  sm:mx-auto'
      )}
    >
      {children}
    </div>
  )
}
export default Container
