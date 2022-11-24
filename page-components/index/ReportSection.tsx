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
          <div className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <FadeInFromLeft className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              According to{' '}
              <AnimatedLink
                thick
                newTab
                href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
              >
                this
              </AnimatedLink>{' '}
              <Em delay={0.3} color={Color.emerald} bold={false}>
                Google
              </Em>{' '}
              &{' '}
              <Em delay={0.3} color={Color.emerald} bold={false}>
                Deloitte
              </Em>{' '}
              report...
            </FadeInFromLeft>
          </div>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
            <FadeInFromLeft className='relative'>
              <QuoteLine color={Color.emerald} />
              <p>
                A{' '}
                <Em color={Color.grey} delay={0.1}>
                  0.1 second
                </Em>{' '}
                improvement of mobile site speed{' '}
                <Em color={Color.grey} delay={0.1}>
                  increased retail site conversion rates
                </Em>{' '}
                by{' '}
                <Em color={Color.grey} delay={0.1}>
                  8.4%
                </Em>{' '}
                and{' '}
                <Em color={Color.grey} delay={0.1}>
                  increased average order value
                </Em>{' '}
                by{' '}
                <Em color={Color.grey} delay={0.1}>
                  9.2%
                </Em>
                .
              </p>
            </FadeInFromLeft>
          </div>

          <div className='mt-20 lg:mt-40'>
          <div className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
              <FadeInFromLeft>
                <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
                  These numbers are
                  <Em color={Color.rose} bold={false} delay={0.1}>
                    {' '}
                    scary!
                  </Em>{' '}
                </p>
              </FadeInFromLeft>

              <FadeInFromLeft className='mt-20 lg:mt-40'>
                <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
                  I mean, what if your site was{' '}
                  <Em color={Color.rose} bold={false} delay={0.1}>
                    {' '}
                    half a second
                  </Em>{' '}
                  slower than your competitors?
                </p>
              </FadeInFromLeft>

              <FadeInFromLeft className='mt-20 lg:mt-40'>
                <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-rose-700'>
                  What about a whole second?
                </p>
              </FadeInFromLeft>

              <FadeInFromLeft className='mt-20 lg:mt-40'>
                <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
                  It's{' '}
                  <Em color={Color.rose} bold={false} delay={0.1}>
                    {' '}
                    even worse
                  </Em>{' '}
                  for portfolio and business websites
                </p>
              </FadeInFromLeft>

              <FadeInFromLeft className='mt-5'>
                <p className=''>
                  The report also found that for <Em>lead generating</Em> sites
                  with a form...
                </p>
              </FadeInFromLeft>
            </div>
          </div>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-sm md:max-w-lg lg:max-w-2xl text-anthracite-9'>
            <FadeInFromLeft className='relative'>
              <QuoteLine color={Color.yellow} />
              <p>
                "A site speed improvement of{' '}
                <Em color={Color.grey} delay={0.1}>
                  0.1s
                </Em>{' '}
                observed an{' '}
                <Em color={Color.grey} delay={0.1}>
                  uplift of 21.6%
                </Em>{' '}
                from the first step of the form to the form submission"
              </p>
            </FadeInFromLeft>
          </div>

          <p className='mt-20 lg:mt-40 font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-7xl md:text-8xl lg:text-9xl text-yellow-300'>
            21.6%.
          </p>

          <FadeInFromLeft className='mt-20 lg:mt-40'>
            <p className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              A faster website means...
            </p>
          </FadeInFromLeft>

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
