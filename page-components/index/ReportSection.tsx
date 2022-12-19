import Em from '@components/Em'
import FadeIn from '@components/FadeIn'
import QuoteLine from '@components/QuoteLine'
import AnimatedLink from '@components/AnimatedLink'
import { CameraIcon, LapTimerIcon } from '@radix-ui/react-icons'

const ReportSection = () => {
  return (
    <>
      <section className='relative overflow-hidden bg-mauveDark-2 text-mauveDark-12 pb-20 lg:pb-40 border-b border-grayDark-6'>
        <div className='max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-5 sm:px-10 flex flex-col gap-20 md:gap-40'>
          <FadeIn className='relative inline-block text-center font-heading font-extrabold text-4xl md:text-5xl leading-tight md:leading-tight mx-auto'>
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
              linkClassName='text-mauveDark-12'
              underlineClassName='bg-mauveDark-12'
              href='https://www2.deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
            >
              study
            </AnimatedLink>
            ...
          </FadeIn>

          <div className='px-5 max-w-md mx-auto'>
            <FadeIn className='flex gap-4 relative'>
              <QuoteLine className='bg-redDark-11 flex-none' />
              <blockquote className='text-base md:text-lg'>
                A 0.1 second improvement of mobile site speed increased retail
                site conversion rates by 8.4% and average order value by 9.2%.
              </blockquote>
            </FadeIn>
          </div>

          <div className='flex flex-col md:flex-row-reverse items-center gap-3 md:gap-10'>
            <FadeIn from={20}>
              <LapTimerIcon className='w-20 h-20 md:w-28 md:h-28' />
            </FadeIn>
            <FadeIn
              from={-20}
              className='text-center md:text-left flex flex-col gap-3 items-center md:items-start'
            >
              <p className='text-3xl md:text-4xl font-heading font-extrabold leading-tight md:leading-tight'>
                These numbers are
                <Em bold={false} delay={0.2} inViewClassName='text-redDark-11'>
                  {' '}
                  scary!
                </Em>{' '}
              </p>
              <p className='text-base md:text-lg max-w-md md:max-w-xl'>
                I mean, what if your site was half a second slower than your
                competitors?
                <br />
                <br />
                What about a whole second?
              </p>
            </FadeIn>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-3 md:gap-10'>
            <FadeIn from={-20}>
              <CameraIcon className='w-20 h-20 md:w-28 md:h-28' />
            </FadeIn>
            <FadeIn
              from={20}
              className='text-center md:text-left flex flex-col gap-3 items-center md:items-start'
            >
              <p className='text-3xl md:text-4xl font-heading font-extrabold leading-tight md:leading-tight'>
                I'ts{' '}
                <Em delay={0.2} inViewClassName='text-redDark-11' bold={false}>
                  even worse
                </Em>{' '}
                for portfolio websites
              </p>
              <p className='text-base md:text-lg max-w-md md:max-w-xl'>
                The same report found that for websites with a form...
              </p>
            </FadeIn>
          </div>

          <div className='px-5 max-w-md mx-auto'>
            <FadeIn className='flex gap-4 relative'>
              <QuoteLine className='bg-redDark-11 flex-none' />
              <blockquote className='text-base md:text-lg'>
                "A site speed improvement of 0.1s observed an uplift of{' '}
                <Em>21.6%</Em> from the first step of the form to the form
                submission"
              </blockquote>
            </FadeIn>
          </div>

          <FadeIn className='text-center font-heading font-extrabold text-7xl md:text-8xl text-redDark-11 leading-tight md:leading-tight'>
            21.6%
          </FadeIn>
        </div>
      </section>
    </>
  )
}
export default ReportSection
