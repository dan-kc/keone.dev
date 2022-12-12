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

  return (
    <div ref={scrollRef} className='flex flex-col gap-1'>
      <div className='flex gap-2 text-greenDark-12 text-base lg:text-lg '>
        <span className='h-1.5 w-1.5 lg:h-2 lg:w-2 shrink-0 mt-[9px] lg:mt-[10px] bg-greenDark-9 rounded-full' />
        <div className='sm:whitespace-nowrap'>{title}</div>
      </div>

      <motion.div
        className='flex justify-start'
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${largeGreenSize}%` : '0%' }}
          transition={{
            duration: isInView ? 1.5 : 0,
          }}
          className='pr-1'
        >
          <div className='bg-greenDark-9 h-[5px]' />
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
            className='bg-white h-5 w-full origin-top'
          />
          <div>
            <CountUp
              className='text-greenDark-11 font-heading font-bold text-base'
              end={isInView ? value : 50}
              duration={2}
              start={70}
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
          <div className='h-[5px] bg-greenDark-9' />
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
          <div className='h-[5px]  bg-yellowDark-9' />
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
          <div className='h-[5px] bg-redDark-9' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ProgressBar
