import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import classNames from 'classnames'
import { InView } from 'react-intersection-observer'

const AdditionalServices = () => {
  return (
    <section className='text-mauveDark-12 pt-10 lg:pt-5 bg-gradient-to-b from-black via-pink-1 to-black'>
      <Container size={Options.Small}>
        <h2 className=' pb-2 lg:pb-4 text-white font-heading text-[38px] md:text-[44px] lg:text-[60px]'>
          Additional Services
        </h2>
        <InView rootMargin='-5% 0px -5% 0px' threshold={0.2}>
          {({ inView, ref }) => (
            <ul
              ref={ref}
              className='mb-5 lg:mb-[30px] font-heading text-white text-[22px] md:text-[25px] lg:text-[28px]'
            >
              <li className='flex pb-[10px]'>
                <span
                  className={classNames(
                    inView ? 'text-pink-6 delay-100' : '',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                <div>
                  <h3>User Logins</h3>
                  <p className='font-body text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'>
                    log in with email/password or Google, Facebook etc…
                  </p>
                </div>
              </li>
              <li className='flex pb-[10px]'>
                <span
                  className={classNames(
                    inView
                      ? 'text-pink-6 delay-[400ms]'
                      : '',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                <div>
                  <h3>Email Marketing Service Integration</h3>
                  <p className='font-body text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'>
                    with Mailchimp
                  </p>
                </div>
              </li>
              <li className='flex pb-[10px]'>
                <span
                  className={classNames(
                    inView
                      ? 'text-pink-6 delay-[700ms]'
                      : '',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                <div>
                  <h3>Android / IOS app development</h3>
                  <p className='font-body text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'>
                    using React Native
                  </p>
                </div>
              </li>
              <li className='flex pb-[10px]'>
                <span
                  className={classNames(
                    inView
                      ? 'text-pink-6 delay-[1000ms]'
                      : '',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                <div>
                  <h3>Automated tax service integration</h3>
                  <p className='font-body text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'>
                    with Taxjar, an accountant will be able to advise you on
                    these services
                  </p>
                </div>
              </li>
              <li className='flex mb-10 lg:mb-[60px]'>
                <span
                  className={classNames(
                    inView
                      ? 'text-pink-6 delay-[1300ms]'
                      : '',
                    'mr-2 duration-1000'
                  )}
                >
                  -
                </span>
                <div>
                  <h3>Analytics integrations</h3>
                  <p className='font-body text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'>
                    with HotJar and/or Google Analytics
                  </p>
                </div>
              </li>
            </ul>
          )}
        </InView>
        <p className='mb-20'>
          Of course, every website requires{' '}
          <Em inViewClassName='text-white'>
            different features and considerations,
          </Em>{' '}
          so take my price/timeframe approximations above with a{' '}
          <Em inViewClassName='text-white'>grain of salt.</Em> The only way to
          know for sure is to{' '}
          <Em inViewClassName='text-white'>contact me for a quote!</Em>
        </p>
      </Container>

      <Container size={Options.Large}>
        <div className='flex justify-end'>
          <AnimatedLink
            mail={false}
            href='/projects'
            thick={true}
            newTab={false}
            linkClassName='font-heading text-[24px] md:text-[27px] lg:text-[30px] text-white'
            underlineClassName='bg-white'
          >
            View Projects
          </AnimatedLink>
        </div>
      </Container>
    </section>
  )
}
export default AdditionalServices
