import classNames from 'classnames'

export enum Options {
  Small = 'Small',
  Large = 'Large',
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size: Options
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children, size }) => {
  return (
    <div
      className={classNames(
        size === Options.Small
          ? 'sm:max-w-[650px] md:max-w-[800px] lg:max-w-2xl xl:max-w-3xl'
          : '',
        size === Options.Large
          ? 'sm:max-w-[650px] md:max-w-[800px] lg:max-w-[950px] xl:max-w-[1200px]'
          : '',
        'relative px-5 md:px-10 sm:mx-auto'
      )}
    >
      {children}
    </div>
  )
}
export default Container
