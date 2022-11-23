import classNames from 'classnames'
import { InView } from 'react-intersection-observer'
import { Color, generateClassName } from 'styles/color-config'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
  color?: Color
  delay?: number
  bold?: boolean
}

const Em: React.FC<Props> = ({
  children,
  className,
  color = Color.white,
  delay = 0,
  bold = true,
}) => {
  const delayString = String(delay) + 's'
  const { textColorClassName } = generateClassName(color)

  return (
    <InView rootMargin='-5% 0px -5% 0px'>
      {({ inView, ref }) => (
        <em
          ref={ref}
          style={{ transitionDelay: delayString }}
          className={classNames(
            inView ? textColorClassName : null,
            bold ? 'font-semibold' : null,
            className,
            'duration-1000 not-italic'
          )}
        >
          {children}
        </em>
      )}
    </InView>
  )
}
export default Em
