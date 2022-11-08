import classNames from 'classnames'
import { InView } from 'react-intersection-observer'

interface Props {
  items: string[]
  ulClassName?: string
  inViewDashClassName?: string
}

const List = ({ items, ulClassName, inViewDashClassName }: Props) => {
  return (
    <InView rootMargin='-5% 0px -5% 0px' threshold={0.2}>
      {({ inView, ref }) => (
        <ul ref={ref} className={ulClassName}>
          {items.map((item, index) => {
            const delayTime = index * 300 + 100
            const delayTimeString = delayTime.toString() + 'ms'
            return (
              <li className='flex' key={index}>
                <span
                  style={{ transitionDelay: inView ? delayTimeString : "0s" }}
                  className={classNames(
                    inView ? inViewDashClassName : 'delay-1000',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                {item}
              </li>
            )
          })}
        </ul>
      )}
    </InView>
  )
}
export default List
