import AnimatedLink from '@components/AnimatedLink'
import ProgressCircle from '@components/ProgressCircle'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import ProgressBar from '@components/ProgressBar'
import Link from 'next/link'
import Em from '@components/Em'

const WhyMeSection = () => {
  return (
    <section className='bg-sageDark-1 text-sageDark-12 pt-20 lg:pt-40'>
      <div className='md:grid grid-cols-2 gap-10 lg:gap-20 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5'>
        <div className='md:sticky md:top-20 px-6 md:px-0'>
          <h2 className='max-w-xs sm:max-w-md font-heading leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl sm:text-6xl md:text-5xl lg:text-6xl'>
            That's why you should{' '}
            <span className='text-greenDark-11'>work with me</span>
          </h2>
          <div className='hidden md:block pt-5'>
            <p className='text-lg lg:text-xl'>
              Hire me and you'll get a lightning fast website and a huge edge
              over your competitors. Did I mention that I'm drastically cheaper
              than agencies too?
            </p>
            <div className='flex justify-start mt-10'>
              <Link
                href='/products'
                className='flex items-center gap-2 bg-greenDark-1 border border-greenDark-7 py-3 px-6 rounded-lg hover:border-greenDark-8 hover:bg-greenDark-2 font-heading font-semibold shadow-lg text-xl duration-100'
              >
                View Products & Prices
                <ArrowRightIcon className='w-7 h-7' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 mt-10 md:mt-3 md:row-span-2'>
          <article className='bg-greenDark-3/20 border border-greenDark-6 rounded-xl shadow p-6 text-greenDark-12'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-greenDark-11'>
              Lighthouse scores
            </h3>
            <div className='flex gap-3 justify-between mt-7 px-2'>
              <ProgressCircle percentage={98} caption='Performance' />
              <ProgressCircle
                percentage={98}
                caption='Accessibility'
                delay={0.2}
              />
              <ProgressCircle
                percentage={92}
                caption='Best Practices'
                delay={0.4}
              />
              <ProgressCircle percentage={100} caption='SEO' delay={0.6} />
            </div>
            <div className='relative inline-block mt-6 text-base lg:text-lg'>
              <AnimatedLink
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                linkClassName='text-sageDark-12 '
                underlineClassName='bg-sageDark-12'
                newTab
              >
                Google Lighthouse
              </AnimatedLink>{' '}
              is a tool for measuring the quality of web pages, and I think they
              like keone.dev.
            </div>
          </article>

          <article className='bg-greenDark-3/20 border border-greenDark-6 rounded-xl shadow p-6 text-greenDark-12'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-greenDark-11'>
              Core web vitals
            </h3>
            <div className='flex flex-col mt-6'>
              <ProgressBar
                percentage={85}
                title='Largest Contentful Paint (LCP)'
                value={1.4}
                suffix='s'
              />
              <ProgressBar
                percentage={90}
                title='First Input Delay (FID)'
                value={17}
                suffix='ms'
              />
              <ProgressBar
                percentage={95}
                title='Cumulative Layout Shift (CLS)'
                value={0}
              />
            </div>
            <div className='relative inline-block mt-3 text-base lg:text-lg'>
              <AnimatedLink
                href='https://web.dev/vitals/'
                linkClassName='text-sageDark-12 '
                underlineClassName='bg-sageDark-12'
                newTab
              >
                Core web vitals
              </AnimatedLink>{' '}
              are official Google ranking factors, but rest assured you don't
              have to worry about any of that when working with me.
              <br />
              <br />I use the fastest web frameworks available and I'm always
              searching for bleeding-edge solutions to improve performance.
              <br />
              <br />
              Many web development agencies, including some of the world's
              largest, still use slow and dated web frameworks because they're
              'proven', despite only being 'proven' 5 years ago and sluggish
              today.
              <br />
              <br />
              <Em inViewClassName='text-sageDark-12'>I'm faster</Em>.
            </div>
          </article>
        </div>
        <div className='md:hidden pt-10'>
          <p className='text-lg px-6'>
            Hire me and you'll get a lightning fast website and a huge edge over
            your competitors.
            <br />
            <br />
            Did I mention that I'm drastically cheaper than agencies too?
          </p>
          <div className='flex justify-end mt-10 pr-6'>
            <Link
              href='/products'
              className='flex items-center gap-2 bg-greenDark-1 border border-greenDark-7 py-2 px-5 sm:py-3 sm:px-6 rounded-lg hover:border-greenDark-8 hover:bg-greenDark-2 font-heading font-semibold shadow-lg text-base sm:text-xl duration-100'
            >
              View Products & Prices
              <ArrowRightIcon className='w-5 h-5 sm:w-7 sm:h-7' />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-20 h-10 lg:h-20 bg-gradient-to-b from-sageDark-1 to-sageDark-1 border-b border-sageDark-6' />
    </section>
  )
}
export default WhyMeSection
