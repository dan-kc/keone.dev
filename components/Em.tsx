import classNames from 'classnames'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
  className?: string
  inViewClassName?: string
  outViewClassName?: string
  delay?: number
  bold?: boolean
}

const Em: React.FC<Props> = ({
  children,
  className,
  inViewClassName="text-white",
  outViewClassName,
  delay = 0,
  bold = true,
}) => {
  const delayString = String(delay) + 's'
  const scrollRef = useRef(null)
  const inView = useInView(scrollRef)

  return (
    <motion.em
      ref={scrollRef}
      style={{ transitionDelay: delayString }}
      className={classNames(
        inView ? inViewClassName : outViewClassName,
        bold ? 'font-semibold' : null,
        className,
        'duration-1000 not-italic'
      )}
    >
      {children}
    </motion.em>
  )
}
export default Em
