import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Props {
  percentage: number
  caption: string
  delay?: number
}

const ProgressCircle: React.FC<Props> = ({
  percentage,
  caption,
  delay = 0,
}) => {
  const draw = {
    hidden: {
      pathLength: 0,
      transition: {
        type: 'spring',
        duration: 1,
        bounce: 0,
      },
    },
    visible: {
      pathLength: percentage / 100,
      transition: { type: 'spring', duration: 3, bounce: 0, delay: delay },
    },
  }

  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: isInView ? 1.5 : 0, delay: isInView ? delay : 0 }}
      className='flex flex-col relative w-1/5 items-center'
      ref={scrollRef}
    >
      <div className='relative'>
        <motion.svg
          className='w-full'
          viewBox='0 0 100 100'
          initial={'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          <circle cx='50' cy='50' r='40' stroke='#141417' strokeWidth={6} />
          <motion.circle
            className='-rotate-90 origin-center text-anthracite-8'
            cx='50'
            cy='50'
            r='40'
            fill='transparent'
            stroke='#10b981'
            strokeWidth={6}
            variants={draw}
          />
        </motion.svg>
        {isInView ? (
          <CountUp
            className='absolute text-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-bold text-[16px] min-[450px]:text-[24px] sm:text-[32px] lg:text-[38px]'
            end={percentage}
            duration={2.35}
            delay={delay}
          />
        ) : null}
      </div>
      <h4 className='text-center font-heading text-anthracite-12 font-medium text-[12px] min-[450px]:text-[16px] sm:text-[22px] lg:text-3xl leading-tight min-[450px]:leading-tight sm:leading-tight lg:leading-tight'>
        {caption}
      </h4>
    </motion.div>
  )
}

export default ProgressCircle
