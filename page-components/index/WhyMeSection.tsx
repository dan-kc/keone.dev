import Container, { Options } from '@components/Container'
import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import ProgressCircle from '@components/ProgressCircle'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import ProgressBar from '@components/ProgressBar'
import FadeIn from '@components/FadeIn'

const WhyMeSection = () => {
  return (
    <section className='relative overflow-hidden bg-oliveDark-1 text-oliveDark-12'>
      <div className='pt-20 md:pt-40 max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5'>
        <div className='pr-10'>
          <FadeInFromLeft className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-grassDark-11'>
            That's why you should work with me
          </FadeInFromLeft>
        </div>
        <div className='grid gap-5 mt-10'>
          <article className='bg-grassDark-3/50 border border-grassDark-6 rounded-2xl shadow-xl p-4 text-grassDark-12'>
            <h2 className='font-heading font-bold text-3xl'>
              Lighthouse scores
            </h2>

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

            <div className='relative inline-block mt-5 text-base'>
              <AnimatedLink
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                linkClassName='text-oliveDark-12'
                underlineClassName='bg-oliveDark-12'
                newTab
              >
                Google Lighthouse
              </AnimatedLink>{' '}
              is a tool for measuring the{' '}
              <Em inViewClassName='text-oliveDark-12'>quality</Em> of web pages,
              and I think they like{' '}
              <Em inViewClassName='text-oliveDark-12'>keone.io</Em>.
            </div>
          </article>
          <article className='bg-grassDark-3/50 border border-grassDark-6 rounded-2xl shadow-xl p-4 text-grassDark-12'>
            <h2 className='font-heading font-bold text-3xl'>Core web vitals</h2>

            <div className='flex flex-col mt-10'>
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

            <div className='relative inline-block mt-5 text-base'>
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
                bleeding-edge solutions{' '}
              </Em>
              to{' '}
              <Em inViewClassName='text-oliveDark-12'>improve performance</Em>.
              <br />
              <br />
              Many web development agencies, including some of the world's
              largest, continue to use{' '}
              <Em inViewClassName='text-oliveDark-12'> slow </Em> and
              <Em inViewClassName='text-oliveDark-12'> dated </Em> web
              frameworks because they're 'proven', despite only being 'proven' 5
              years ago and{' '}
              <Em inViewClassName='text-oliveDark-12'> sluggish </Em>today.
              <br />
              <br />
              <Em inViewClassName='text-oliveDark-12'>I'm faster.</Em>
            </div>
          </article>
          <article>{/* Info */}</article>
        </div>
      </div>
      <div className='h-20 md:h-40 bg-gradient-to-b from-slateDark-1 to-mauveDark-1' />
    </section>
  )
}
export default WhyMeSection
//
//       <FadeInFromLeft className='mt-10 lg:mt-20 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)] inline-block relative'>
//       </FadeInFromLeft>
//
//       <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
//         <p>
//         </p>
//       </FadeInFromLeft>
//
//       <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
//         <p>
//
//       <div className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
//         <p className='relative inline-block font-heading font-extrabold text-7xl md:text-8xl lg:text-9xl leading-tight md:leading-tight lg:leading-tight text-transparent bg-clip-text bg-gradient-to-br from-violet-600 to-violet-300'>
//           I'm faster.
//         </p>
//       </div>
//
//       <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
//         <p>
//           Work with me and you'll get a<Em> lightning fast website</Em> and
//           a <Em>huge edge over your competitors</Em>.
//         </p>
//       </FadeInFromLeft>
//
//       <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
//         <p>
//           Did I mention that I'm <Em>drastically cheaper</Em> than agencies
//           too?
//         </p>
//       </FadeInFromLeft>
//
//       <div className='flex justify-end pt-20 md:pt-40 '>
//         <AnimatedLink
//           href='/products'
//           linkClassName='font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl flex gap-1 items-center'
//         >
//           View products
//           <ArrowRightIcon className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
//         </AnimatedLink>
//       </div>
//     </Container>
//   </div>
// </section>
