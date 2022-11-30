import Link from '@components/Link'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Color, generateClassName } from 'styles/color-config'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail?: boolean
  href?: string
  newTab?: boolean
  color?: Color
  delay?: number
  thick?: boolean
  linkClassName?: string
  children: React.ReactNode
}

const AnimatedLink: React.FC<Props> = ({
  href,
  color = Color.white,
  delay = 0,
  mail = false,
  thick = false,
  newTab = false,
  linkClassName,
  children,
  ...rest
}) => {
  const { textColorClassName, bgColorClassName } = generateClassName(color)

  return (
    <Link
      mail={mail}
      href={href}
      {...rest}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener' : null}
      className={classNames(
        linkClassName,
        textColorClassName,
        'relative inline-block'
      )}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: delay, duration: 1 }}
        className={classNames(
          thick ? 'h-1' : 'h-0.5',
          'absolute inline-block w-full origin-bottom-left bottom-0 left-0',
          bgColorClassName
        )}
      />
      {children}
    </Link>
  )
}

export default AnimatedLink
