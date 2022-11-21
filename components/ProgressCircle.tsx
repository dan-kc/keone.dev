import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProgressCircle = ({ percentage }) => {
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
      transition: { type: 'spring', duration: 3, bounce: 0 },
    },
  }

  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { margin: '0px 0px 0px 0px' })

  return (
    <div className='w-fit relative' ref={scrollRef}>
      <motion.svg
        width='100'
        height='100'
        viewBox='0 0 100 100'
        initial='hidden'
        whileInView='visible'
        // viewport={{ margin: '-5% 0px -5% 0px' }}
      >
        <circle cx='50' cy='50' r='40' stroke='#FFFFFF' strokeWidth={8} />
        <motion.circle
          className='-rotate-90 origin-center'
          cx='50'
          cy='50'
          r='40'
          fill='transparent'
          stroke='#10b981'
          strokeWidth={8}
          variants={draw}
        />
        <text
          className='text-emerald-500'
          x='50%'
          y='50%'
          dominantBaseline='central'
          textAnchor='middle'
          fontSize={'1em'}
          color='#FFFFFF'
        ></text>
      </motion.svg>

      <CountUp
        className='absolute text-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-display'
        end={isInView ? percentage : 0}
        duration={2.3}
        // easingFn={( t: 0.65, b: 0, c: 0.35, d: 1 )}
      />
    </div>
  )
}

export default ProgressCircle
