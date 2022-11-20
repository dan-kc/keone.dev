import { motion } from 'framer-motion'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
  children: React.ReactNode
}

const FadeInFromLeft: React.FC<Props> = ({ className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: '0' }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeInFromLeft
