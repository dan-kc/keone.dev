import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CountUp from 'react-countup'

interface Props {
  percentage: number
  title: string
  value: number
  suffix?: string
}

const ProgressBar: React.FC<Props> = ({
  percentage,
  title,
  value,
  suffix = '',
}) => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef)

  const largeGreenSize = 80
  const pinSize = 0.5
  const smallGreenSize = percentage - largeGreenSize - pinSize
  const smallYellowSize = (100 - percentage) / 2
  const smallRedSize = smallYellowSize
  // const total = largeGreenSize + pinSize + smallGreenSize + smallRedSize + smallYellowSize

  return (
    <motion.div
      ref={scrollRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: isInView ? 1.5 : 0 }}
      className='flex flex-col gap-2'
    >
      <div className='flex md:items-center gap-2 md:gap-4 text-xl md:text-2xl lg:text-3xl font-bold text-white'>
        <span className='h-2 w-2 md:h-3 md:w-3 shrink-0 mt-[11px] md:mt-[1px] bg-emerald-500 rounded-full ' />
        <div className='sm:whitespace-nowrap'>{title}</div>
      </div>

      <div className='flex justify-start'>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${largeGreenSize}%` : '0%' }}
          transition={{
            duration: isInView ? 1.5 : 0,
          }}
          className='pr-1'
        >
          <div className='bg-emerald-500 h-[6px] md:h-2' />
        </motion.div>

        <div
          className='flex flex-col gap-1 items-center'
          style={{ width: `${pinSize}%` }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{
              duration: isInView ? 1.5 : 0,
              delay: isInView ? 0.5 : 0,
            }}
            className='bg-white h-5 md:h-6 w-full origin-top'
          />
          <div className='text-emerald-500'>
            <CountUp
              className='text-emerald-500 font-heading font-bold text-lg sm:text-xl lg:text-2xl'
              end={isInView ? value : 50}
              duration={2}
              start={50}
              suffix={suffix}
            />
          </div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallGreenSize}%` : '0%' }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 0.5 : 0,
          }}
          className='pl-1'
        >
          <div className='h-[6px] md:h-2 bg-emerald-500' />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallYellowSize}%` : '0%' }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 1 : 0,
          }}
          className='pl-1'
        >
          <div className='h-[6px] md:h-2 bg-yellow-300' />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallRedSize}%` : '0%' }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 1.5 : 0,
          }}
          className='pl-1'
        >
          <div className='h-[6px] md:h-2 bg-rose-700' />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProgressBar
