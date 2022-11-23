import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const DoubleText = () => {
  const scrollRef = useRef(null)
  const isInView = useInView(scrollRef, { margin: '400% 0px -70% 0px' })
  return (
    <div className='relative font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight md:leading-tight lg:leading-tight'>
      <div className='relative' ref={scrollRef}>
        <div className='absolute top-0 left-0'>
          <p className='whitespace-nowrap'>
            <span className=''>A</span>
            <span className='text-violet-500'> performance </span>
            <br />
            focused developer
            <br />
            specialising in
            <br />
            <span className='text-sky-500'> eCommerce </span>
          </p>
        </div>

        <div className='relative'>
          <div className='flex align-baseline whitespace-nowrap'>
            <div className='whitespace-nowrap'>A</div>
            <motion.div
              initial={{ maxWidth: 0 }}
              animate={{ maxWidth: isInView ? '100%' : '0%' }}
              className='text-emerald-500 whitespace-nowrap overflow-hidden bg-anthracite-1'
              transition={{ duration: 1, delay: isInView ? 0 : 0.6 }}
            >
              &nbsp;user behaviour
            </motion.div>
          </div>

          <div className='flex align-baseline'>
            <div>focused</div>
            <motion.div
              initial={{ maxWidth: 0 }}
              animate={{ maxWidth: isInView ? '100%' : '0%' }}
              className='text-yellow-300 whitespace-nowrap overflow-hidden bg-anthracite-1'
              transition={{ duration: 1, delay: isInView ? 0.2 : 0.4 }}
            >
              &nbsp;designer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </motion.div>
          </div>

          <div className='whitespace-nowrap'>specialising in</div>

          <div className='flex align-baseline whitespace-nowrap'>
            <motion.div
              initial={{ maxWidth: 0 }}
              animate={{ maxWidth: isInView ? '100%' : '0%' }}
              className='text-fuchsia-500 whitespace-nowrap overflow-hidden bg-anthracite-1'
              transition={{ duration: 1, delay: isInView ? 0.4 : 0.2 }}
            >
              conversion rate
            </motion.div>
          </div>

          <div className='flex align-baseline whitespace-nowrap'>
            <motion.div
              initial={{ maxWidth: 0 }}
              animate={{ maxWidth: isInView ? '100%' : '0%' }}
              className='text-fuchsia-500 whitespace-nowrap overflow-hidden bg-anthracite-1'
              transition={{ duration: 1, delay: isInView ? 0.6 : 0 }}
            >
              optimisation
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoubleText
