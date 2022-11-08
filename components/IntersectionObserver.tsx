import classNames from 'classnames'
import { InView } from 'react-intersection-observer'

export const Component = ({ children }) => (
  <InView>
    {({ inView, ref, entry }) => (
      <div ref={ref} className={classNames("")}>
        {children}
      </div>
    )}
  </InView>
)
