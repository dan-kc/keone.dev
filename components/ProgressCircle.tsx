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
    <div className='flex flex-col relative w-1/5 items-center' ref={scrollRef}>
      <motion.div
        className='relative'
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: isInView ? 1.5 : 0,
          delay: isInView ? delay : 0,
        }}
      >
        <motion.svg
          className='w-full'
          viewBox='0 0 100 100'
          initial={'hidden'}
          animate={isInView ? 'visible' : 'hidden'}
        >
          <circle
            cx='50'
            cy='50'
            r='40'
            stroke='#0f291e'
            fill='#0d1912'
            strokeWidth={6}
          />
          <motion.circle
            className='-rotate-90 origin-center'
            cx='50'
            cy='50'
            r='40'
            fill='transparent'
            stroke='#30a46c'
            strokeWidth={6}
            variants={draw}
          />
        </motion.svg>
        {isInView ? (
          <CountUp
            className='absolute text-greenDark-9 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-bold text-[13px] min-[350px]:text-[14px] min-[380px]:text-[15px] sm:text-[20px] md:text-[14px] lg:text-[17px] xl:text-[21px] leading-tight min-[350px]:leading-tight min-[380px]:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight'
            end={percentage}
            duration={2.35}
            delay={delay}
          />
        ) : null}
      </motion.div>
      <h4 className='text-center font-heading font-medium text-[10px] min-[350px]:text-[11px] min-[380px]:text-[12px] sm:text-[15px] md:text-[13px] lg:text-[15px] xl:text-[16px] leading-tight min-[350px]:leading-tight min-[380px]:leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-tight'>
        {caption}
      </h4>
    </div>
  )
}

export default ProgressCircle
