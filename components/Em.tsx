import classNames from 'classnames'
import { InView } from 'react-intersection-observer'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  bold?: boolean
  inViewClassName?: string
  outViewClassName?: string
}

const Em: React.FC<Props> = ({
  children,
  inViewClassName,
  outViewClassName,
  bold = true,
}) => {
  return (
    <InView>
      {({ inView, ref }) => (
        <span
          ref={ref}
          className={classNames(
            inView ? inViewClassName : outViewClassName,
            bold ? 'font-semibold' : '',
            'duration-1000'
          )}
        >
          {children}
        </span>
      )}
    </InView>
  )
}
export default Em
