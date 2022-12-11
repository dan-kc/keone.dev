import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import QuoteLine from '@components/QuoteLine'
import AnimatedLink from '@components/AnimatedLink'

const ReportSection = () => {
  return (
    <>
      <section className='relative overflow-hidden bg-mauveDark-2 text-mauveDark-12 pb-14 lg:pb-36 border-b border-grayDark-6'>
        <div className='max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-5 sm:px-10'>
          <FadeInFromLeft className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl'>
            According to a{' '}
            <Em delay={0.2} inViewClassName='text-redDark-11' bold={false}>
              Google
            </Em>{' '}
            &{' '}
            <Em delay={0.2} inViewClassName='text-redDark-11' bold={false}>
              Deloitte
            </Em>{' '}
            <AnimatedLink
              thick
              newTab
              underlineClassName='bg-mauveDark-12'
              href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
            >
              study
            </AnimatedLink>
            ...
          </FadeInFromLeft>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-md md:max-w-lg lg:max-w-xl text-base lg:text-xl'>
            <FadeInFromLeft className='relative'>
              <QuoteLine className='bg-redDark-11' />
              <blockquote>
                A <Em>0.1 second</Em> improvement of mobile site speed{' '}
                <Em>increased retail site conversion rates</Em> by <Em>8.4%</Em>{' '}
                and <Em>average order value</Em> by <Em>9.2%</Em>.
              </blockquote>
            </FadeInFromLeft>
          </div>

          <div className='mt-20 lg:mt-40'>
            <FadeInFromLeft>
              <p className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl'>
                These numbers are
                <Em bold={false} delay={0.2} inViewClassName='text-redDark-11'>
                  {' '}
                  scary
                </Em>{' '}
              </p>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-6'>
              <p className='relative inline-block text-xl lg:text-2xl'>
                I mean, what if your site was <Em> half a second</Em> slower
                than your competitors? <br />
                <br /> <Em>What about a whole second?</Em>
              </p>
            </FadeInFromLeft>
          </div>
        </div>

        <div className='h-20 md:h-40 bg-gradient-to-b from-mauveDark-2 to-mauveDark-2' />
        <div className='max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto px-5 sm:px-10'>
          <FadeInFromLeft className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl'>
            I'ts{' '}
            <Em delay={0.2} inViewClassName='text-redDark-11' bold={false}>
              even worse
            </Em>{' '}
            for portfolio and business websites
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-6'>
            <p className='text-xl lg:text-2xl'>
              The same report found that for <Em>lead generating websites </Em>
              with a form...
            </p>
          </FadeInFromLeft>

          <div className='px-10 mt-20 lg:mt-40 mx-auto max-w-md md:max-w-lg lg:max-w-xl text-base lg:text-xl'>
            <FadeInFromLeft className='relative'>
              <QuoteLine className='bg-redDark-11' />
              <blockquote>
                "A site speed improvement of <Em>0.1s</Em> observed an{' '}
                <Em>uplift of 21.6%</Em> from the first step of the form to the
                form submission"
              </blockquote>
            </FadeInFromLeft>
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40'>
            <p className='text-8xl lg:text-9xl font-heading font-extrabold text-redDark-11 leading-tight lg:leading-tight'>
              21.6%
            </p>
          </FadeInFromLeft>
        </div>
      </section>
    </>
  )
}
export default ReportSection
