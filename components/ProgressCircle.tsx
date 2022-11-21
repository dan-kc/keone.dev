import CountUp from 'react-countup'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ProgressCircle = ({ percentage, caption}) => {
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
  const isInView = useInView(scrollRef)

  return (
    <div className='flex flex-col gap-[10px]'>
      <div className='relative' ref={scrollRef}>
        <motion.svg
          className='w-[100%]'
          viewBox='0 0 100 100'
          initial='hidden'
          whileInView='visible'
        >
          <circle cx='50' cy='50' r='40' stroke='#141417' strokeWidth={8} />
          <motion.circle
            className='-rotate-90 origin-center text-anthracite-8'
            cx='50'
            cy='50'
            r='40'
            fill='transparent'
            stroke='#10b981'
            strokeWidth={8}
            variants={draw}
          />
        </motion.svg>

        <CountUp
          className='absolute text-emerald-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  font-display'
          end={isInView ? percentage : 0}
          duration={2.35}
        />
      </div>
      <h4 className='text-center font-heading text-white font-medium text-[14px] min-[450px]:text-[24px] min-[550px]:text-[30px] sm:text-[35px] lg:text-[44px]'>{caption}</h4>
    </div>
  )
}

export default ProgressCircle
