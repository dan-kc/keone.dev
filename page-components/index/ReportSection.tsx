import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import { Color } from 'styles/color-config'
import QuoteLine from '@components/QuoteLine'
import AnimatedLink from '@components/AnimatedLink'

const ReportSection = () => {
  return (
    <>
      <section className='py-20 md:py-40 bg-anthracite-4'>
        <Container size={Options.md}>
          <div className='px-2 md:px-0'>
            <div className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
              <FadeInFromLeft className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-anthracite-12'>
                According to{' '}
                <AnimatedLink
                  thick
                  newTab
                  href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
                >
                  this
                </AnimatedLink>{' '}
                <Em delay={0.2} color={Color.emerald} bold={false}>
                  Google
                </Em>{' '}
                &{' '}
                <Em delay={0.2} color={Color.emerald} bold={false}>
                  Deloitte
                </Em>{' '}
                report...
              </FadeInFromLeft>
            </div>

            <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
              <FadeInFromLeft className='relative'>
                <QuoteLine color={Color.emerald} />
                <p>
                  A <Em color={Color.grey}>0.1 second</Em> improvement of mobile
                  site speed{' '}
                  <Em color={Color.grey}>
                    increased retail site conversion rates
                  </Em>{' '}
                  by <Em color={Color.grey}>8.4%</Em> and{' '}
                  <Em color={Color.grey}>increased average order value</Em> by{' '}
                  <Em color={Color.grey}>9.2%</Em>.
                </p>
              </FadeInFromLeft>
            </div>

            <div className='mt-20 lg:mt-40'>
              <div className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
                <FadeInFromLeft>
                  <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-anthracite-12'>
                    These numbers are
                    <Em color={Color.rose} bold={false} delay={0.2}>
                      {' '}
                      scary!
                    </Em>{' '}
                  </p>
                </FadeInFromLeft>

                <FadeInFromLeft className='mt-20 lg:mt-40'>
                  <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-anthracite-12'>
                    I mean, what if your site was{' '}
                    <Em color={Color.rose} bold={false} delay={0.2}>
                      {' '}
                      half a second
                    </Em>{' '}
                    slower than your competitors?
                  </p>
                </FadeInFromLeft>

                <FadeInFromLeft className='mt-20 lg:mt-40'>
                  <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-rose-700 to-rose-500'>
                    What about a whole second?
                  </p>
                </FadeInFromLeft>

                <FadeInFromLeft className='mt-20 lg:mt-40'>
                  <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-anthracite-12'>
                    It's{' '}
                    <Em color={Color.rose} bold={false} delay={0.2}>
                      {' '}
                      even worse
                    </Em>{' '}
                    for portfolio and business websites
                  </p>
                </FadeInFromLeft>

                <FadeInFromLeft className='mt-5'>
                  <p className=''>
                    The report also found that for{' '}
                    <Em>lead generating websites </Em>
                    with a form...
                  </p>
                </FadeInFromLeft>
              </div>
            </div>

            <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
              <FadeInFromLeft className='relative'>
                <QuoteLine color={Color.yellow} />
                <p>
                  "A site speed improvement of <Em color={Color.grey}>0.1s</Em>{' '}
                  observed an <Em color={Color.grey}>uplift of 21.6%</Em> from
                  the first step of the form to the form submission"
                </p>
              </FadeInFromLeft>
            </div>

            <p className='mt-20 lg:mt-40 font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-7xl md:text-8xl lg:text-9xl w-fit text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200'>
              21.6%.
            </p>

            <FadeInFromLeft className='mt-20 lg:mt-40'>
              <p className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-anthracite-12'>
                A faster website means...
              </p>
            </FadeInFromLeft>

            <ul className='mt-5 font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-3xl md:text-4xl lg:text-5xl flex flex-col gap-2'>
              <li>
                <FadeInFromLeft className='flex gap-1 w-fit text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300'>
                  <span>-</span> Increased conversion rates
                </FadeInFromLeft>
              </li>
              <li>
                <FadeInFromLeft className='flex gap-1 w-fit text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200'>
                  <span>-</span> Decreased bounce rates
                </FadeInFromLeft>
              </li>
              <li>
                <FadeInFromLeft className='flex gap-1 w-fit text-transparent bg-clip-text bg-gradient-to-br from-rose-700 to-rose-500'>
                  <span>-</span> More satisfied users
                </FadeInFromLeft>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  )
}
export default ReportSection
