import { InView } from 'react-intersection-observer'
import Link from '@components/Link'
import classNames from 'classnames'
const WhyMeSection = () => {
  return (
    <section className='py-20 md:py-40 px-5 md:px-6 lg:px-7 bg-black text-grayDark-12'>
      <div className='mx-auto max-w-7xl'>
        <div className='pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 relative inline-block font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                )}
              >
                That's why you should work with me
              </h2>
            )}
          </InView>
        </div>

        <div className='mt-20 lg:mt-40 pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
          <p className='relative inline-block font-heading text-[40px] md:text-[60px] lg:text-[80px] text-blue-7'>
            I'm Performance Obsessed.
          </p>
        </div>

        <div className='mt-20 lg:mt-40 pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 relative inline-block font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                )}
              >
                Lighthouse report
              </h3>
            )}
          </InView>
        </div>
        <div className='mt-5 px-0 max-w-sm md:max-w-lg lg:max-w-2xl'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <img
                ref={ref}
                alt='Lighthouse Report Graphic'
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 w-full'
                )}
                src='/images/graphics/lighthouse-scores.svg'
              />
            )}
          </InView>
        </div>

        <div className='mt-5  duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 inline-block relative'
                )}
              >
                <Link
                  mail={false}
                  href='https://developer.chrome.com/docs/lighthouse/overview/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative inline-block'
                >
                  <div
                    className={classNames(
                      inView ? 'scale-x-100 delay-300' : 'scale-x-0',
                      'absolute inline-block w-full origin-bottom-left h-[2px] md:h-1 bottom-0 left-0 duration-500'
                    )}
                  />
                  Google Lighthouse
                </Link>{' '}
                is a tool for measuring the{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  quality
                </span>{' '}
                of web pages, and I think they like{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  keone.io
                </span>
                .
              </div>
            )}
          </InView>
        </div>

        <div className='mt-20 lg:mt-40 pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 relative inline-block font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                )}
              >
                Core Web Vitals
              </h3>
            )}
          </InView>
        </div>
        <div className='mt-5 max-w-sm md:max-w-lg lg:max-w-2xl'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <img
                alt='Core Web Vitals Graphic'
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 w-full'
                )}
                src='/images/graphics/core-web-vitals.svg'
              />
            )}
          </InView>
        </div>

        <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 inline-block relative'
                )}
              >
                <Link
                  mail={false}
                  href='https://web.dev/vitals/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='relative inline-block'
                >
                  <div
                    className={classNames(
                      inView ? 'scale-x-100 delay-300' : 'scale-x-0',
                      'absolute inline-block w-full origin-bottom-left h-[2px] md:h-1 bottom-0 left-0 duration-500'
                    )}
                  />
                  Core Web Vitals
                </Link>{' '}
                are an official{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  Google ranking factor
                </span>
                , but rest assured{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  you don't have to worry
                </span>{' '}
                about any of that when working with me.
              </div>
            )}
          </InView>
        </div>

        <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 inline-block relative'
                )}
              >
                I use the{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  fastest
                </span>{' '}
                web frameworks available and I'm always searching for{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  bleeding edge solutions
                </span>{' '}
                to{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  improve performance
                </span>
                - it's my{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  passion
                </span>
                .
              </p>
            )}
          </InView>
        </div>

        <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 inline-block relative'
                )}
              >
                Even some of the biggest agencies in the world use{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  slow
                </span>{' '}
                and{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  dated
                </span>{' '}
                web frameworks because they're 'proven', despite only being
                'proven' 5 years ago and{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  sluggish
                </span>{' '}
                today.
              </p>
            )}
          </InView>
        </div>

        <div className='mt-20 lg:mt-40 pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
          <p
            className={classNames(
              'relative inline-block font-heading text-[40px] md:text-[60px] lg:text-[80px] text-magenta'
            )}
          >
            I'm faster.
          </p>
        </div>

        <div className='mt-20 lg:mt-40 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-4',
                  'duration-1000 inline-block relative'
                )}
              >
                Work with me and you'll get a{' '}
                <span
                  className={classNames(
                    inView ? 'text-white delay-300' : '',
                    'font-semibold duration-1000'
                  )}
                >
                  lightning fast website
                </span>
                . Simple.
              </p>
            )}
          </InView>
        </div>

        <div className='mt-20 flex justify-end'>
          <InView rootMargin='400% 0px -20% 0px'>
            {({ inView, ref }) => (
              <div className=''>
                <Link
                  mail={false}
                  href='/products'
                  className='font-heading relative inline-block text-[24px] md:text-[36px] lg:text-[48px] text-white'
                >
                  <div
                    ref={ref}
                    className={classNames(
                      inView ? 'scale-x-100' : 'scale-x-0',
                      'absolute inline-block w-full origin-bottom-left h-1 bottom-0 left-0 bg-white duration-1000'
                    )}
                  />
                  View Products
                </Link>
                <br />
                <Link
                  mail={false}
                  href='/products'
                  className='font-heading relative inline-block text-[24px] md:text-[36px] lg:text-[48px] text-white'
                >
                  <div
                    ref={ref}
                    className={classNames(
                      inView ? 'scale-x-100 delay-300' : 'scale-x-0',
                      'absolute inline-block w-full origin-bottom-left h-1 bottom-0 left-0 bg-white duration-1000'
                    )}
                  />
                  and Prices
                </Link>
              </div>
            )}
          </InView>
        </div>
      </div>
    </section>
  )
}
export default WhyMeSection
