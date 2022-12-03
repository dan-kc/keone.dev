import AnimatedLink from '@components/AnimatedLink'
import FadeInFromLeft from '@components/FadeInFromLeft'
import { Color } from 'styles/color-config'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const ProcessSection = () => {
  return (
    <section className='py-20 md:py-40 bg-anthracite-4'>
      <Container size={Options.md}>
        <div className='px-2 md:px-0'>
          <FadeInFromLeft>
            <h2 className='font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-6xl md:text-7xl lg:text-8xl text-anthracite-12'>
              My process is{' '}
              <Em color={Color.violet} bold={false} delay={0.2}>
                designed around you
              </Em>
            </h2>
          </FadeInFromLeft>

          <article className='mt-20 lg:mt-40'>
            <FadeInFromLeft>
              <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl w-fit text-transparent bg-clip-text bg-gradient-to-br from-rose-700 to-rose-500 leading-tight md:leading-tight lg:leading-tight'>
                No large upfront deposits
              </h3>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-9 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                All payments are taken at <Em>milestones</Em> over the course of
                the project so that <Em>you have the freedom</Em> to, at any
                point, <Em>change your mind</Em> on future services or even drop
                out entirely.
              </p>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                You will <Em>never feel locked in</Em>.
              </p>
            </FadeInFromLeft>
          </article>

          <article className='mt-20'>
            <FadeInFromLeft>
              <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl w-fit text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300 leading-tight md:leading-tight lg:leading-tight'>
                Multiple review rounds
              </h3>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-9 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                We'll conduct multiple <Em> detailed reviews </Em> of my work
                for the final designs.
              </p>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                This is where I'll be able to{' '}
                <Em> take your suggestions onboard </Em> to keep myself informed
                on your style preferences so that you can be
                <Em>
                  {' '}
                  100% certain you're getting the website design you envisioned
                </Em>
                .
              </p>
            </FadeInFromLeft>
          </article>

          <article className='mt-20'>
            <FadeInFromLeft>
              <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl w-fit text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200 leading-tight md:leading-tight lg:leading-tight'>
                Live feedback
              </h3>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-9 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <div className='relative inline-block'>
                All designs will be made available to you via{' '}
                <AnimatedLink href='https://www.figma.com/figjam/' newTab>
                  FigJam
                </AnimatedLink>
                . This means that you can easily{' '}
                <Em>add comments, voice notes, likes, and dislikes </Em>to my
                designs at <Em> any time and stage </Em> of the design process.
              </div>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                This is especially useful for minor revisions made outside of
                formal revision rounds.
              </p>
            </FadeInFromLeft>
          </article>

          <article className='mt-20'>
            <FadeInFromLeft>
              <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl w-fit text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-300 leading-tight md:leading-tight lg:leading-tight'>
                Free maintenance
              </h3>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-9 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p className='relative inline-block'>
                After your website is deployed I'll be
                <Em> sticking around </Em>
                for an additional month to ensure that you and your team
                <Em> understand how to use every single feature </Em>
                of your website.
              </p>
            </FadeInFromLeft>

            <FadeInFromLeft className='mt-8 lg:mt-10 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
              <p>
                I'll also <Em> fix any bugs </Em>and ensure that
                <Em> everything runs smoothly</Em>.
              </p>
            </FadeInFromLeft>
          </article>

          <div className='flex justify-end pt-20 md:pt-40 '>
            <AnimatedLink
              href='/process'
              linkClassName='font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl flex gap-1 items-center'
            >
              View process
              <ArrowRightIcon className='w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8' />
            </AnimatedLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
export default ProcessSection
