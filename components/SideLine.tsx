import classNames from 'classnames'
import { InView } from 'react-intersection-observer'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  containerClassName?: string
  lineClassName?: string
}

const SideLine = ({ children, containerClassName, lineClassName }: Props) => {
  return (
    <InView rootMargin='-5% 0px -5% 0px'>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={classNames(
            containerClassName,
            inView ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0',
            'relative duration-1000 flex gap-1'
          )}
        >
          <span
            className={classNames(
              lineClassName,
              inView ? 'delay-300' : '',
              'duration-1000'
            )}
          >
            -
          </span>
          {children}
        </div>
      )}
    </InView>
  )
}

export default SideLine
