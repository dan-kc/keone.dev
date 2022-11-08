import Link from '@components/Link'
import classNames from 'classnames'
import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail: boolean
  href?: string
  newTab?: boolean
  linkClassName?: string
  underlineClassName?: string
  thick?: boolean
  children: React.ReactNode
}

const AnimatedLink: React.FC<Props> = ({
  href,
  thick = false,
  mail,
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
      rel='noopener noreferrer'
      className={classNames(linkClassName, 'relative inline-block')}
    >
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        className={classNames(
          thick ? 'h-1' : 'h-[2px]',
          'absolute inline-block w-full origin-bottom-left bottom-0 left-0 duration-1000',
          underlineClassName
        )}
      ></motion.div>
      {children}
    </Link>
  )
}

export default AnimatedLink
