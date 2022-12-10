import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import ProgressCircle from '@components/ProgressCircle'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import ProgressBar from '@components/ProgressBar'
import Link from 'next/link'

const WhyMeSection = () => {
  return (
    <section className='relative overflow-hidden bg-oliveDark-1 text-oliveDark-12'>
      <div className='max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5'>
        <h2 className='px-4 max-w-xs sm:max-w-md font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-grassDark-11'>
          That's why you should work with me
        </h2>
        <div className='grid gap-5 md:grid-cols-2 mt-10'>
          <article className='bg-grassDark-3/30 border border-grassDark-6 rounded-2xl shadow-xl p-4 lg:p-5 text-grassDark-12 md:h-fit'>
            <h3 className='font-heading font-bold text-3xl xl:text-4xl leading-tight xl:leading-tight'>
              Lighthouse scores
            </h3>

            <div className='flex gap-3 justify-between mt-5 px-2'>
              <ProgressCircle percentage={97} caption='Performance' />
              <ProgressCircle
                percentage={100}
                caption='Accessibility'
                delay={0.2}
              />
              <ProgressCircle
                percentage={100}
                caption='Best Practices'
                delay={0.4}
              />
              <ProgressCircle percentage={91} caption='SEO' delay={0.6} />
            </div>

            <div className='relative inline-block mt-5 text-base xl:text-lg'>
              <AnimatedLink
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                linkClassName='text-oliveDark-12'
                underlineClassName='bg-oliveDark-12'
                newTab
              >
                Google Lighthouse
              </AnimatedLink>{' '}
              is a tool for measuring the quality of web pages, and I think they
              like <Em inViewClassName='text-oliveDark-12'>keone.io</Em>.
            </div>
          </article>

          <article className='bg-grassDark-3/30 border md:row-span-2 border-grassDark-6 rounded-2xl shadow-xl p-4 lg:p-5 text-grassDark-12'>
            <h3 className='font-heading font-bold text-3xl xl:text-4xl leading-tight xl:leading-tight'>
              Core web vitals
            </h3>

            <div className='flex flex-col mt-3'>
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

            <div className='relative inline-block mt-3 text-base xl:text-lg'>
              <AnimatedLink
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                linkClassName='text-oliveDark-12'
                underlineClassName='bg-oliveDark-12'
                newTab
              >
                Core web vitals
              </AnimatedLink>{' '}
              are official{' '}
              <Em inViewClassName='text-oliveDark-12'>
                Google ranking factors
              </Em>
              , but rest assured you don't have to worry about any of that when
              working with me.
              <br />
              <br />I use the{' '}
              <Em inViewClassName='text-oliveDark-12'>fastest </Em>
              web frameworks available and I'm always searching for{' '}
              <Em inViewClassName='text-oliveDark-12'>
                bleeding-edge solutions to improve performance.
              </Em>
              <br />
              <br />
              Many web development agencies, including some of the world's
              largest, continue to use{' '}
              <Em inViewClassName='text-oliveDark-12'> slow and dated</Em> web
              frameworks because they're 'proven', despite only being 'proven' 5
              years ago and{' '}
              <Em inViewClassName='text-oliveDark-12'> sluggish </Em>today.
              <br />
              <br />
              <Em inViewClassName='text-oliveDark-12'>I'm faster.</Em>
            </div>
          </article>

          <article className='p-4 md:pt-0 lg:p-5 lg:pt-0 '>
            <p className='font-heading font-medium text-2xl md:text-3xl xl:text-3xl leading-tight md:leading-tight xl:leading-tight'>
              Hire me and you'll get a lightning fast website and a huge
              edge over your competitors
            </p>
            <p className='text-base md:text-lg xl:text-lg mt-2 md:mt-4'>
              Did I mention that I'm drastically cheaper than agencies too?
            </p>
            <div className='flex justify-end mt-10'>
              <Link
                href='/products'
                className='flex items-center gap-2 bg-grassDark-1 border border-grassDark-7 py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:border-grassDark-8 hover:bg-grassDark-2 font-heading font-bold shadow-lg text-base sm:text-xl'
              >
                View Products & Prices
                <ArrowRightIcon className='w-5 h-5 sm:w-7 sm:h-7' />
              </Link>
            </div>
          </article>
        </div>
      </div>
      <div className='h-20 md:h-40 bg-gradient-to-b from-oliveDark-1 to-mauveDark-1' />
    </section>
  )
}
export default WhyMeSection
