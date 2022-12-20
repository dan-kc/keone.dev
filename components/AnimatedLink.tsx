import Link from '@components/Link'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail?: boolean
  href?: string
  newTab?: boolean
  delay?: number
  thick?: boolean
  linkClassName?: string
  underlineClassName?: string
  children: React.ReactNode
}

const AnimatedLink: React.FC<Props> = ({
  href,
  delay = 0,
  mail = false,
  thick = false,
  newTab = false,
  linkClassName = "text-white",
  underlineClassName = "bg-white",
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
      className={classNames(
        linkClassName,
        'relative inline-block'
      )}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: delay, duration: 1 }}
        className={classNames(
          thick ? 'h-1' : 'h-0.5',
          'absolute inline-block w-full origin-bottom-left bottom-0 left-0',
          underlineClassName
        )}
      />
      {children}
    </Link>
  )
}

export default AnimatedLink
