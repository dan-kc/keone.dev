import AnimatedLink from '@components/AnimatedLink'
import FadeIn from '@components/FadeIn'
import classNames from 'classnames'

const services = [
  {
    heading: 'User logins',
    subHeading: 'Log in via email/password or Google, Facebook etc…',
  },
  {
    heading: 'REST / GraphQL API servers',
    subHeading: 'written in Typescript, or Go - deployed on traditional or edge servers',
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
    heading: 'Automated sales tax',
    subHeading: 'with Taxjar',
  },
  {
    heading: 'Analytics integration',
    subHeading: 'with HotJar and/or Google Analytics',
  },
  {
    heading: 'Custom email domiain setup',
    subHeading:
      "A personalised business email for you and your business' employees",
  },
]

const AdditionalServices = () => {
  return (
    <section id='additionalServices' className='relative '>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-tomatoDark-11 border-b border-tomatoDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Additional services
      </h2>

      <ul className='mt-8 text-lg'>
        {services.map((service, index) => {
          const isLast = index === services.length - 1 ? true : false
          return (
            <li className={classNames(isLast ? '' : 'pb-4')} key={index}>
              <FadeIn from={-5} className='text-2xl font-heading font-extrabold leading-tight lg:leading-tight flex gap-1'>
                <span className='text-tomatoDark-11'>-</span>
                <div className='ml-2'>
                  <h3 className='mb-1 lg:mb-2'>{service.heading}</h3>
                  <p className='font-body font-normal text-mauveDark-11 text-base lg:text-lg leading-tight lg:leading-tight'>
                    {service.subHeading}
                  </p>
                </div>
              </FadeIn>
            </li>
          )
        })}
      </ul>
      <div className='mt-20 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
        Of course, every website has unique requirements and considerations, so
        take my price and time frame estimates with a grain of salt.
        <br />
        <br />
        The only way to know for sure is to{' '}
        <AnimatedLink mail>contact me</AnimatedLink> for a quote!
      </div>
    </section>
  )
}
export default AdditionalServices
