import classNames from 'classnames'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Color } from 'styles/color-config'


interface Props {
  items: string[]
  className?: string
  dashColor?: Color
}

const List = ({ items, className, dashColor }: Props) => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { margin: '-5% 0px -5% 0px' })
  let textColorClassName: string
  const length = items.length

  if (dashColor === Color.cyan) {
    textColorClassName = 'text-cyan-500'
  }
  if (dashColor === Color.emerald) {
    textColorClassName = 'text-emerald-500'
  }
  if (dashColor === Color.violet) {
    textColorClassName = 'text-violet-500'
  }
  if (dashColor === Color.yellow) {
    textColorClassName = 'text-yellow-300'
  }

  return (
    <ul ref={scrollRef} className={className}>
      {items.map((item, index) => {
        const delayTime = (index / length) * 0.4

        return (
          <li className='flex' key={index}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{
                duration: 1,
                delay: delayTime,
              }}
              className={classNames(textColorClassName, 'mr-2')}
            >
              -
            </motion.span>
            {item}
          </li>
        )
      })}
    </ul>
  )
}
export default List
