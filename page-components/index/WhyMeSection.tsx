import { InView } from 'react-intersection-observer'
import Link from '@components/Link'
import classNames from 'classnames'
import Container, { Options } from '@components/Container'
import AnimatedLink from '@components/AnimatedLink'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/progress'
import CountUp from 'react-countup'
import ProgressCircle from '@components/ProgressCircle'

const WhyMeSection = () => {
  return (
    <section className=''>
      <Container size={Options.md}>
        <div className='mx-auto max-w-7xl'>
          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <p className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              That's why you need to work with me
            </p>
          </FadeInFromLeft>

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <p className='font-heading leading-tight min-[420px]:leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl min-[420px]:text-5xl md:text-6xl lg:text-8xl text-white'>
              I'm <span className='text-emerald-500'>performance obsessed</span>{' '}
            </p>
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <h3 className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              Lighthouse report:
            </h3>
          </FadeInFromLeft>

          <div className='mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-3xl'>
            <img
              alt='Lighthouse Report Graphic'
              className='duration-1000 w-full'
              src='/images/graphics/lighthouse-scores.svg'
            />
          </div>

          <div className='flex gap-3 justify-between'>
            <ProgressCircle percentage={90} caption="Performance" />
            <ProgressCircle percentage={94} caption="Accessibility" />
            <ProgressCircle percentage={99} caption="Best Practices" />
            <ProgressCircle percentage={93} caption="SEO" />

          </div>

          <div className='relative inline-block mt-5'>
            <AnimatedLink
              href='https://developer.chrome.com/docs/lighthouse/overview/'
              newTab
            >
              Google Lighthouse
            </AnimatedLink>{' '}
            is a tool for measuring the <Em delay={0.1}>quality</Em> of web
            pages, and I think they like <Em delay={0.1}>keone.io</Em>.
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <h3 className='text-white font-heading font-extrabold leading-tight md:leading-tight lg:leading-tight text-4xl md:text-5xl lg:text-6xl'>
              Core Web Vitals
            </h3>
          </FadeInFromLeft>

          <div className='mt-5 max-w-sm md:max-w-lg lg:max-w-2xl'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <img
                  alt='Core Web Vitals Graphic'
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 w-full'
                  )}
                  src='/images/graphics/core-web-vitals.svg'
                />
              )}
            </InView>
          </div>

          <div className='mt-5 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
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
                        'absolute inline-block w-full origin-bottom-left h-0.5 md:h-1 bottom-0 left-0 duration-500'
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

          <div className='mt-5 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
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

          <div className='mt-5 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
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

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <p
              className={classNames(
                'relative inline-block font-heading font-extrabold text-6xl md:text-7xl lg:text-8xl text-violet-500'
              )}
            >
              I'm faster.
            </p>
          </div>

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
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

          <div className='flex justify-end pt-20 bg-anthracite-1'>
            <AnimatedLink
              mail={false}
              href='/profile'
              thick={false}
              newTab={false}
              linkClassName='font-heading leading-tight font-extrabold text-xl md:text-2xl lg:text-3xl text-white flex gap-1 items-center'
              underlineClassName='bg-white'
            >
              View products
              <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default WhyMeSection
