import Container, { Options } from '@components/Container'
import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import FadeInFromLeft from '@components/FadeInFromLeft'
import ProgressCircle from '@components/ProgressCircle'
import { FaArrowRight } from 'react-icons/fa'

const WhyMeSection = () => {
  return (
    <section className='my-20 lg:my-40 '>
      <Container size={Options.md}>
        <div className='mx-auto max-w-7xl'>
          <FadeInFromLeft className='pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-5xl lg:text-6xl text-white'>
              That's why you should work with me
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='font-heading text-emerald-500 leading-tight md:leading-tight lg:leading-tight font-extrabold text-4xl md:text-6xl lg:text-8xl text-white'>
              I'm performance <span className='text-emerald-500'>obsessed</span>{' '}
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight md:leading-tight lg:leading-tight '>
              Lighthouse scores:
            </h3>
          </FadeInFromLeft>

          <div className='flex gap-3 w-full justify-between mt-5 md:mt-10'>
            <ProgressCircle percentage={90} caption='Performance' />
            <ProgressCircle
              percentage={94}
              caption='Accessibility'
              delay={0.2}
            />
            <ProgressCircle
              percentage={99}
              caption='Best Practices'
              delay={0.4}
            />
            <ProgressCircle percentage={93} caption='SEO' delay={0.6} />
          </div>

          <FadeInFromLeft className='relative inline-block mt-5 md:mt-10'>
            <AnimatedLink
              href='https://developer.chrome.com/docs/lighthouse/overview/'
              linkClassName='font-semibold'
              newTab
            >
              Google Lighthouse
            </AnimatedLink>{' '}
            is a tool for measuring the <Em delay={0.1}>quality</Em> of web
            pages, and I think they like <Em delay={0.1}>keone.io</Em>.
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <h3 className='text-white font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-tight lg:leading-tight'>
              Core Web Vitals
            </h3>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 max-w-sm md:max-w-lg lg:max-w-2xl'>
            <img
              alt='Core Web Vitals Graphic'
              className='w-full'
              src='/images/graphics/core-web-vitals.svg'
            />
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)] inline-block relative'>
            <AnimatedLink href='https://web.dev/vitals/' newTab>
              Core Web Vitals
            </AnimatedLink>{' '}
            are an official <Em delay={0.1}>Google ranking factor</Em>, but rest
            assured <Em delay={0.1}>you don't have to worry </Em>
            about any of that when working with me.
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              I use the <Em delay={0.1}>fastest </Em>
              web frameworks available and I'm always searching for{' '}
              <Em delay={0.1}>bleeding edge solutions </Em>
              to <Em delay={0.1}>improve performance</Em>- it's my{' '}
              <Em delay={0.1}>passion</Em>.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              Even some of the biggest agencies in the world use
              <Em delay={0.1}> slow </Em>
              and<Em delay={0.1}> dated </Em>
              web frameworks because they're 'proven', despite only being
              'proven' 5 years ago and<Em delay={0.1}> sluggish </Em>
              today.
            </p>
          </FadeInFromLeft>

          <div className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p className='relative inline-block font-heading font-extrabold text-6xl md:text-7xl lg:text-8xl text-violet-500 leading-tight md:leading-tight lg:leading-tight'>
              I'm faster.
            </p>
          </div>

          <FadeInFromLeft className='mt-20 lg:mt-40 pr-[calc(6.25%+5px)] md:pr-[calc(12.5%+20px)]'>
            <p>
              Work with me and you'll get a{' '}
              <Em delay={0.1}>lightning fast website</Em>. It's really that
              simple.
            </p>
          </FadeInFromLeft>

          <div className='flex justify-end pt-20 md:pt-40 font-heading leading-tight font-extrabold text-2xl md:text-3xl lg:text-4xl'>
            <AnimatedLink
              href='/products'
              linkClassName='flex gap-1 items-center'
            >
              View products
              <FaArrowRight className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default WhyMeSection
