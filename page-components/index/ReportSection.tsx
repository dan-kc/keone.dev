import { InView } from 'react-intersection-observer'
import Link from '@components/Link'
import classNames from 'classnames'
import Container, { Options } from '@components/Container'
const ReportSection = () => {
  return (
    <>
      <section className='py-20 md:py-40 bg-mauveDark-1'>
        <Container size={Options.Large}>
          <div className='pr-[calc(6.25vw+10px)] md:pr-[calc(18.75vw+30px)]'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 relative inline-block font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                  )}
                >
                  According to{' '}
                  <Link mail={false} href='' className='relative inline-block'>
                    <div
                      className={classNames(
                        inView ? 'scale-x-100 delay-300' : 'scale-x-0',
                        'absolute inline-block w-full origin-bottom-left h-1 bottom-0 left-0 bg-white duration-500'
                      )}
                    />
                    this
                  </Link>{' '}
                  <span
                    className={classNames(
                      inView ? 'text-green-7 delay-300' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    Google
                  </span>{' '}
                  &{' '}
                  <span
                    className={classNames(
                      inView ? 'text-green-7 delay-300' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    Deloitte
                  </span>{' '}
                  report...
                </div>
              )}
            </InView>
          </div>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-mauveDark-12'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView ? 'opacity-100' : 'opacity-10',
                    'duration-1000 relative'
                  )}
                >
                  <div
                    className={classNames(
                      inView ? 'scale-y-100 delay-300' : 'scale-y-0',
                      'origin-top absolute bg-green-7 w-[5px] top-0 -left-8 lg:w-[7px] h-full duration-500'
                    )}
                  />
                  <p>
                    A{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      0.1 second
                    </span>{' '}
                    improvement of mobile site speed{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      increased retail site conversion rates
                    </span>{' '}
                    by{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      8.4%
                    </span>{' '}
                    and{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      increased average order value
                    </span>{' '}
                    by{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      9.2%
                    </span>
                    .
                  </p>
                </div>
              )}
            </InView>
          </div>

          <div className='mt-20 lg:mt-40'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                  )}
                >
                  These numbers are{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-pink-6' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    scary!
                  </span>
                </p>
              )}
            </InView>

            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 mt-20 lg:mt-40 font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                  )}
                >
                  I mean, what if your site was{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-pink-6' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    0.5 seconds
                  </span>{' '}
                  slower than your competitors?
                </p>
              )}
            </InView>

            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 mt-20 lg:mt-40 font-heading text-[30px] md:text-[45px] lg:text-[60px] text-pink-6'
                  )}
                >
                  What about a whole second?
                </p>
              )}
            </InView>
          </div>

          <div className='pt-20 lg:pt-40'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                  )}
                >
                  It's{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-pink-6' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    even worse
                  </span>{' '}
                  for{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-500 text-blue-7' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    portfolio
                  </span>{' '}
                  and{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-700 text-yellowDark-11' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    business
                  </span>{' '}
                  websites
                </p>
              )}
            </InView>
          </div>

          <div className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)] text-mauveDark-12'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'inline-block relative duration-1000'
                  )}
                >
                  That same report observed that for{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    lead generating
                  </span>{' '}
                  sites with a form...
                </div>
              )}
            </InView>
          </div>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-mauveDark-12'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView ? 'opacity-100' : 'opacity-10',
                    'duration-1000 relative'
                  )}
                >
                  <div
                    className={classNames(
                      inView ? 'scale-y-100 delay-300' : 'scale-y-0',
                      'origin-top absolute bg-yellowDark-11 w-[5px] top-0 -left-8 lg:w-[7px] h-full duration-500'
                    )}
                  />
                  <p>
                    "A site speed improvement of{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      0.1s
                    </span>{' '}
                    observed an{' '}
                    <span
                      className={classNames(
                        inView ? 'text-white delay-700' : '',
                        'font-semibold duration-500 '
                      )}
                    >
                      uplift of 21.6%
                    </span>{' '}
                    from the first step of the form to the form submission"
                  </p>
                </div>
              )}
            </InView>
          </div>

          <div className='pt-20 lg:pt-40 '>
            <p className='font-heading text-[50px] md:text-[75px] lg:text-[100px] text-white'>
              21.6%.
            </p>
          </div>

          <div className='pt-20 lg:pt-40'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'duration-1000 font-heading text-[30px] md:text-[45px] lg:text-[60px] text-white'
                  )}
                >
                  A faster website means
                </p>
              )}
            </InView>
          </div>
          <ul className='font-heading list-disc text-[26px] md:text-[39px] lg:text-[52px]'>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <li
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'text-green-7 ml-6 md:ml-8 lg:ml-11 duration-1000'
                  )}
                >
                  Increased conversion rates
                </li>
              )}
            </InView>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <li
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'text-yellowDark-11 ml-6 md:ml-8 lg:ml-11 duration-1000'
                  )}
                >
                  Decreased bounce rates
                </li>
              )}
            </InView>
            <InView rootMargin='400% 0px -20% 0px'>
              {({ inView, ref }) => (
                <li
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-4',
                    'text-pink-6 ml-6 md:ml-8 lg:ml-11 duration-1000'
                  )}
                >
                  More satisfied users
                </li>
              )}
            </InView>
          </ul>
        </Container>
      </section>
    </>
  )
}
export default ReportSection
