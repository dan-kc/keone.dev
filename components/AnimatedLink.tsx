import Link from '@components/Link'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail: boolean
  href?: string
  newTab?: boolean
  delay?: number
  linkClassName?: string
  underlineClassName?: string
  thick?: boolean
  children: React.ReactNode
}

const AnimatedLink: React.FC<Props> = ({
  href,
  delay,
  mail,
  thick = false,
  newTab = false,
  linkClassName,
  underlineClassName,
  children,
  ...rest
}) => {
  return (
    <Link
      mail={mail}
      href={href}
      {...rest}
      target={newTab ? '_blank' : '_self'}
      rel={newTab ? 'noopener' : null}
      className={classNames(linkClassName, 'relative inline-block')}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: delay, duration:1}}
        className={classNames(
          thick ? 'h-1' : 'h-0.5',
          'absolute inline-block w-full origin-bottom-left bottom-0 left-0',
          underlineClassName
        )}
      ></motion.div>
      {children}
    </Link>
  )
}

export default AnimatedLink
