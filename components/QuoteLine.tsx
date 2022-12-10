import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  delay?: number
}

const QuoteLine: React.FC<Props> = ({ className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ delay: delay, duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={classNames(
        className,
        'origin-top absolute w-1 top-0 -left-6 lg:-left-8 lg:w-1.5 h-full'
      )}
    />
  )
}
export default QuoteLine
