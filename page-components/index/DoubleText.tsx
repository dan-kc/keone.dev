import classNames from 'classnames'
import { InView } from 'react-intersection-observer'
const DoubleText = () => {
  return (
    <InView rootMargin='400% 0px -70% 0px'>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className='relative font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
        >
          <div className='absolute top-0 left-0'>
            <p className='whitespace-nowrap'>
              <span className=''>A</span>
              <span className='text-magenta-6'> performance </span>
              <br />
              focused developer
              <br />
              specialising in
              <br />
              <span className='text-blue-7'> eCommerce </span>
            </p>
          </div>

          <div id='doubleTextCover' className='relative'>
            <div className='flex align-baseline '>
              <div id='A'>A</div>
              <div
                className={classNames(
                  inView ? 'max-w-full' : 'max-w-0 delay-500',
                  'text-green-7 whitespace-nowrap overflow-hidden bg-black duration-1000'
                )}
              >
                &nbsp;user behaviour
              </div>
            </div>

            <div className='flex align-baseline'>
              <div>focused</div>
              <div
                className={classNames(
                  inView
                    ? 'max-w-full delay-200 duration-[2000ms]'
                    : 'max-w-0 delay-300 duration-1000',
                  'text-yellowDark-11 whitespace-nowrap overflow-hidden bg-black delay-200'
                )}
              >
                &nbsp;designer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>

            <div>specialising in</div>

            <div
              className={classNames(
                inView ? 'max-w-full delay-300' : 'max-w-0 delay-200',
                'text-pink-6 whitespace-nowrap overflow-hidden bg-black duration-1000'
              )}
            >
              conversion rate
            </div>

            <div
              className={classNames(
                inView ? 'max-w-full delay-500' : 'max-w-0',
                'text-pink-6 whitespace-nowrap overflow-hidden bg-black duration-1000'
              )}
            >
              optimisation
            </div>
          </div>
        </div>
      )}
    </InView>
  )
}
export default DoubleText
