import { InView } from 'react-intersection-observer'
import Link from '@components/Link'
import classNames from 'classnames'
const ProcessSection = () => {
  return (
    <section className='p-20 md:py-40 px-5 md:px-6 lg:px-7 bg-anthracite-3'>
      <div className='mx-auto max-w-7xl'>
        <div>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <h2
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  'duration-1000 relative inline-block font-heading font-extrabold text-[50px] md:text-[75px] lg:text-[100px] text-white'
                )}
              >
                My{' '}
                <InView rootMargin='-5% 0px -5% 0px'>
                  {({ inView, ref }) => (
                    <span
                      ref={ref}
                      className={classNames(
                        inView ? 'text-mintDark-11 delay-300' : 'text-white',
                        'duration-1000'
                      )}
                    >
                      process
                    </span>
                  )}
                </InView>{' '}
                is{' '}
                <InView rootMargin='-5% 0px -5% 0px'>
                  {({ inView, ref }) => (
                    <span
                      ref={ref}
                      className={classNames(
                        inView ? 'text-blue-7 delay-500' : 'text-white',
                        'duration-1000'
                      )}
                    >
                      designed around you
                    </span>
                  )}
                </InView>{' '}
              </h2>
            )}
          </InView>
        </div>

        <article className='mt-20 lg:mt-40'>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  'duration-1000 relative inline-block font-heading font-extrabold text-[30px] md:text-[45px] lg:text-[60px] text-pink-6'
                )}
              >
                No large upfront deposits
              </h3>
            )}
          </InView>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  All payments are taken at{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    milestones
                  </span>{' '}
                  along the project timeline such that{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    you have the freedom
                  </span>{' '}
                  to, at any point,{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    change your mind
                  </span>{' '}
                  on future services or even drop out entirely.
                </p>
              )}
            </InView>
          </div>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  You will{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    never feel locked in
                  </span>
                  .
                </p>
              )}
            </InView>
          </div>
        </article>

        <article className='mt-20'>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  'duration-1000 relative inline-block font-heading font-extrabold text-[30px] md:text-[45px] lg:text-[60px] text-mintDark-11'
                )}
              >
                Several rounds of review
              </h3>
            )}
          </InView>
          <div className='mt-5  duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  For the sitemap, the wireframes, and for the final designs
                  we'll conduct{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    detailed reviews
                  </span>{' '}
                  of my work.
                </p>
              )}
            </InView>
          </div>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  This is where i'll be able to{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    take your suggestions onboard
                  </span>{' '}
                  in order to keep myself informed on{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    your style preferences
                  </span>{' '}
                  so that you can be sure{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    you're getting the website design you envisioned
                  </span>
                  .
                </p>
              )}
            </InView>
          </div>
        </article>

        <article className='mt-20'>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  'duration-1000 relative inline-block font-heading font-extrabold text-[30px] md:text-[45px] lg:text-[60px] text-magenta-6'
                )}
              >
                Live feedback
              </h3>
            )}
          </InView>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  All designs will be shared with you via{' '}
                  <Link
                    mail={false}
                    href='https://www.figma.com/figjam/'
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
                    FigJam
                  </Link>{' '}
                  This means you can easily{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    add comments, voice notes, likes
                  </span>{' '}
                  or{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    dislikes
                  </span>{' '}
                  to my designs at{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    any time, any stage
                  </span>{' '}
                  in the design process.
                </div>
              )}
            </InView>
          </div>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  This is{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    especially useful
                  </span>{' '}
                  for any{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    small revisions
                  </span>{' '}
                  outside of the formal revision rounds.
                </p>
              )}
            </InView>
          </div>
        </article>

        <article className='mt-20'>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <h3
                ref={ref}
                className={classNames(
                  inView
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-10 -translate-x-2',
                  'duration-1000 relative inline-block font-heading font-extrabold text-[30px] md:text-[45px] lg:text-[60px] text-blue-7'
                )}
              >
                A free month of maintenance
              </h3>
            )}
          </InView>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  I'll be{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    sticking around
                  </span>{' '}
                  to make sure you and your team{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    know how to use
                  </span>{' '}
                  every single feature of your website.
                </p>
              )}
            </InView>
          </div>
          <div className='mt-5 duration-[2000ms] pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <InView rootMargin='-5% 0px -5% 0px'>
              {({ inView, ref }) => (
                <p
                  ref={ref}
                  className={classNames(
                    inView
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-10 -translate-x-2',
                    'duration-1000 relative inline-block'
                  )}
                >
                  I'll{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    patch any bugs
                  </span>{' '}
                  and make sure{' '}
                  <span
                    className={classNames(
                      inView ? 'delay-300 text-white' : '',
                      'duration-1000 font-semibold'
                    )}
                  >
                    everything runs smoothly
                  </span>
                  .
                </p>
              )}
            </InView>
          </div>
        </article>

        <div className='mt-20 flex justify-end'>
          <InView rootMargin='-5% 0px -5% 0px'>
            {({ inView, ref }) => (
              <Link
                mail={false}
                href='/profile'
                className='font-heading font-extrabold relative inline-block text-[24px] md:text-[36px] lg:text-[48px] text-white'
              >
                <div
                  ref={ref}
                  className={classNames(
                    inView ? 'scale-x-100' : 'scale-x-0',
                    'absolute inline-block w-full origin-bottom-left h-1 bottom-0 left-0 bg-white duration-1000'
                  )}
                />
                View Process
              </Link>
            )}
          </InView>
        </div>
      </div>
    </section>
  )
}
export default ProcessSection
