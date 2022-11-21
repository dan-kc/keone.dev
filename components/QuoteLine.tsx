import classNames from 'classnames'
import { Color, generateClassName } from 'styles/color-config'
import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  color?: Color
  delay?: number
}

const QuoteLine: React.FC<Props> = ({
  className,
  color = Color.white,
  delay = 0,
}) => {
  const { bgColorClassName } = generateClassName(color)

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ delay: delay, duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={classNames(
        className,
        bgColorClassName,
        'origin-top absolute w-1 top-0 -left-8 lg:w-2 h-full'
      )}
    />
  )
}
export default QuoteLine
