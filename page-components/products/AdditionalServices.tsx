import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import SideLine from '@components/SideLine'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator'
import classNames from 'classnames'

const services = [
  {
    heading: 'User logins',
    subHeading: 'log in with email/password or Google, Facebook etc…',
  },
  {
    heading: 'Email Marketing Service Integration',
    subHeading: 'with Mailchimp ',
  },
  {
    heading: 'Android / IOS app development',
    subHeading: 'using React Native',
  },
  {
    heading: 'Automated tax service integration',
    subHeading:
      'with Taxjar, an accountant will be able to advise you on these services',
  },
  {
    heading: 'Analytics integration',
    subHeading: 'with HotJar and/or Google Analytics',
  },
]

const AdditionalServices = () => {
  return (
    <>
      <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
        <Container size={Options.md}>
          <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
            <h2 className='text-yellow-300 pb-8 w-fit lg:pb-14 font-heading font-extrabold leading-none text-5xl md:text-6xl lg:text-7xl'>
              Additional Services
            </h2>
            <ul className='font-heading font-extrabold text-white text-xl lg:text-2xl'>
              {services.map((service, index) => {
                const isLast = index === services.length - 1 ? true : false
                return (
                  <li className={classNames(isLast ? '' : 'pb-4')} key={index}>
                    <SideLine lineClassName='text-yellow-300'>
                      <div className='ml-2'>
                        <h3 className=''>{service.heading}</h3>
                        <p className='font-body text-anthracite-9 text-base lg:text-lg'>
                          {service.subHeading}
                        </p>
                      </div>
                    </SideLine>
                  </li>
                )
              })}
            </ul>
            <Separator.Root
              decorative
              className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
            />
            <p className='mt-4 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Of course, every website requires{' '}
              <Em inViewClassName='text-white'>
                different features and considerations,
              </Em>{' '}
              so take my price/timeframe approximations above with a{' '}
              <Em inViewClassName='text-white'>grain of salt.</Em> The only way
              to know for sure is to{' '}
              <Em inViewClassName='text-white'>contact me for a quote!</Em>
            </p>
          </div>
          <div className='flex justify-end pt-16 md:pt-20 bg-anthracite-1'>
            <AnimatedLink
              mail={false}
              href='/projects'
              thick={false}
              newTab={false}
              linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl text-white flex gap-1 items-center'
              underlineClassName='bg-white'
            >
              View projects
              <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
export default AdditionalServices
