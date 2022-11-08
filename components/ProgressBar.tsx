import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'

const arr = [...Array(9).keys()]
const ProgressBar = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  })
  return (
    <div className='flex flex-col gap-1 fixed right-4 top-[20%] '>
      {arr.map((stage) => {
        return (
          <motion.div
            key={stage}
            initial={{ color: '#403D39' }}
            viewport={{ margin: '-5% 0% -5% 0%' }}
            className='w-1 h-4'
          >
            hi
          </motion.div>
        )
      })}
    </div>
  )
}

export default ProgressBar
