import { InView } from 'react-intersection-observer'
import Link from '@components/Link'
import classNames from 'classnames'
import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'

const ReportSection = () => {
  return (
    <>
      <section className='py-20 md:py-40 bg-anthracite-3'>
        <Container size={Options.md}>
          <div className='pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'
                  )}
                >
                  According to{' '}
                  <Link
                    target='_blank'
                    rel='noopener noreferrer'
                    mail={false}
                    href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
                    className='relative inline-block'
                  >
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
                      inView ? 'text-emerald-500 delay-300' : 'text-white',
                      'duration-1000'
                    )}
                  >
                    Google
                  </span>{' '}
                  &{' '}
                  <span
                    className={classNames(
                      inView ? 'text-emerald-500 delay-300' : 'text-white',
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

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
            <InView rootMargin='-5% 0px -5% 0px'>
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
                      'origin-top absolute bg-emerald-500 w-1 top-0 -left-8 lg:w-2 h-full duration-1000'
                    )}
                  />
                  <p>
                    A <Em inViewClassName='text-anthracite-11'>0.1 second</Em>{' '}
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
            <div className='pr-[calc(6.25%+1rem)] md:pr-[calc(12.5%+5rem)]'>
              <InView rootMargin='-5% 0px -5% 0px'>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={classNames(
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-10 -translate-x-2',
                      'duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'
                    )}
                  >
                    These numbers are
                    <span
                      className={classNames(
                        inView ? 'delay-300 text-rose-700' : 'text-white',
                        'duration-1000'
                      )}
                    >
                      {' '}
                      scary!
                    </span>{' '}
                  </p>
                )}
              </InView>

              <InView rootMargin='-5% 0px -5% 0px'>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={classNames(
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-10 -translate-x-2',
                      ' mt-20 lg:mt-40 duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'
                    )}
                  >
                    I mean, what if your site was{' '}
                    <span
                      className={classNames(
                        inView ? 'delay-300 text-rose-700' : 'text-white',
                        'duration-1000'
                      )}
                    >
                      half a second
                    </span>{' '}
                    slower than your competitors?
                  </p>
                )}
              </InView>

              <InView rootMargin='-5% 0px -5% 0px'>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={classNames(
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-10 -translate-x-2',
                      'mt-20 lg:mt-40 duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-rose-700'
                    )}
                  >
                    What about a whole second?
                  </p>
                )}
              </InView>

              <InView rootMargin='-5% 0px -5% 0px'>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={classNames(
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-10 -translate-x-2',
                      'mt-20 lg:mt-40 duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'
                    )}
                  >
                    It's{' '}
                    <span
                      className={classNames(
                        inView ? 'delay-300 text-rose-700' : 'text-white',
                        'duration-1000'
                      )}
                    >
                      even worse
                    </span>{' '}
                    for portfolio and business websites
                  </p>
                )}
              </InView>

              <InView rootMargin='-5% 0px -5% 0px'>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={classNames(
                      inView
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-10 -translate-x-2',
                      'mt-5 inline-block relative duration-1000'
                    )}
                  >
                    The same report claims that for{' '}
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
          </div>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
            <InView rootMargin='-5% 0px -5% 0px'>
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
                      'origin-top absolute bg-yellow-300 w-1 top-0 -left-8 lg:w-2 h-full duration-500'
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

          <p className='pt-20 lg:pt-40 font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-7xl md:text-8xl lg:text-9xl text-yellow-300'>
            21.6%.
          </p>

          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <p
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  ' mt-20 lg:mt-40 duration-1000 relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'
                )}
              >
                A faster website means...
              </p>
            )}
          </InView>

          <ul className='mt-5 font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            <li>
              <FadeInFromLeft className='flex gap-1 text-emerald-500'>
                <span>-</span> Increased conversion rates
              </FadeInFromLeft>
            </li>
            <li>
              <FadeInFromLeft className='flex gap-1 text-yellow-300'>
                <span>-</span> Decreased bounce rates
              </FadeInFromLeft>
            </li>
            <li>
              <FadeInFromLeft className='flex gap-1 text-rose-700'>
                <span>-</span> More satisfied users
              </FadeInFromLeft>
            </li>
          </ul>
        </Container>
      </section>
    </>
  )
}
export default ReportSection
