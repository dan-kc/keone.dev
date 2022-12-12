import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const DoubleText = () => {
  const [isDesign, setIsDesign] = useState<boolean>(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    if (isMounted === false) {
      setIsMounted(true)
      return
    }

    const interval = setInterval(() => {
      setIsDesign((prevState) => !prevState)
    }, 4500)

    return () => clearInterval(interval)
  }, [isDesign, isMounted])

  return (
    <div className='relative font-heading font-extrabold text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-anthracite-12 leading-tight sm:leading-tight md:leading-tight lg:leading-tight'>
      <div className='relative'>
        <div className='absolute top-0 left-0'>
          <h1 className='whitespace-nowrap'>
            <span className=''>A</span>
            <span className='text-skyDark-11'> performance </span>
            <br />
            focused developer
            <br />
            specialising in
            <br />
            <span className='text-violetDark-10'> eCommerce </span>
            <br />
            <span className='text-violetDark-10'> storefronts </span>
          </h1>
        </div>

        <div className='relative'>
          <div className='flex align-baseline whitespace-nowrap'>
            <div className='whitespace-nowrap'>A</div>
            <div className=''>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? '100%' : '0%' }}
                className='text-greenDark-11 whitespace-nowrap overflow-hidden bg-grayDark-3'
                transition={{ duration: 0.8, delay: isDesign ? 0 : 0.6 }}
              >
                &nbsp;user behaviour
              </motion.div>
            </div>
          </div>

          <div className='flex align-baseline'>
            <div>focused</div>
            <div className=''>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? '100%' : '0%' }}
                className='text-yellowDark-10 whitespace-nowrap overflow-hidden bg-grayDark-3'
                transition={{ duration: 0.8, delay: isDesign ? 0.3 : 0.3 }}
              >
                &nbsp;designer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className='whitespace-nowrap'>specialising in</div>

          <div className='flex align-baseline whitespace-nowrap'>
            <div className=''>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? '100%' : '0%' }}
                className='text-redDark-10 whitespace-nowrap overflow-hidden bg-grayDark-3'
                transition={{ duration: 0.8, delay: isDesign ? 0.4 : 0.2 }}
              >
                conversion rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className='flex align-baseline whitespace-nowrap'>
            <div className=''>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? '100%' : '0%' }}
                className='text-redDark-10 whitespace-nowrap overflow-hidden bg-grayDark-3'
                transition={{ duration: 0.8, delay: isDesign ? 0.6 : 0 }}
              >
                optimisation
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DoubleText
