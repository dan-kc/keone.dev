import AnimatedLink from '@components/AnimatedLink'
import FadeInFromLeft from '@components/FadeInFromLeft'
import { Color } from 'styles/color-config'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const ProcessSection = () => {
  return (
    <section className='py-20 md:py-40 bg-anthracite-3'>
      <Container size={Options.md}>
        <FadeInFromLeft>
          <h2 className='relative inline-block font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl md:text-6xl lg:text-7xl text-white'>
            My process is{' '}
            <Em color={Color.cyan} bold={false} delay={0.1}>
              designed around you
            </Em>
          </h2>
        </FadeInFromLeft>

        <article className='mt-20 lg:mt-40'>
          <FadeInFromLeft>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-rose-500 leading-tight md:leading-tight lg:leading-tight'>
              No large upfront deposits
            </h3>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              All payments are taken at <Em>milestones</Em> along the project
              timeline such that <Em>you have the freedom</Em> to, at any point,{' '}
              <Em>change your mind</Em> on future services or even drop out
              entirely.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              You will <Em>never feel locked in</Em>.
            </p>
          </FadeInFromLeft>
        </article>

        <article className='mt-20'>
          <FadeInFromLeft>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-emerald-500 leading-tight md:leading-tight lg:leading-tight'>
              Several review rounds
            </h3>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              For the final designs we'll conduct<Em> detailed reviews </Em>
              of my work.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              This is where i'll be able to
              <Em> take your suggestions onboard </Em>
              in order to keep myself informed on{' '}
              <Em> your style preferences </Em>
              so that you can be sure
              <Em> you're getting the website design you envisioned.</Em>
            </p>
          </FadeInFromLeft>
        </article>

        <article className='mt-20'>
          <FadeInFromLeft>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-yellow-300 leading-tight md:leading-tight lg:leading-tight'>
              Live feedback
            </h3>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <div className='relative inline-block'>
              All designs will be shared with you via{' '}
              <AnimatedLink href='https://www.figma.com/figjam/' newTab>
                FigJam
              </AnimatedLink>
              . This means you can easily
              <Em delay={0.1}> add comments, voice notes, likes </Em>
              or<Em delay={0.1}> dislikes </Em>
              to my designs at<Em delay={0.1}> any time, any stage </Em>
              in the design process.
            </div>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              This is<Em delay={0.1}> especially useful </Em>
              for any<Em delay={0.1}> small revisions </Em>
              outside of the formal revision rounds.
            </p>
          </FadeInFromLeft>
        </article>

        <article className='mt-20'>
          <FadeInFromLeft>
            <h3 className='font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-violet-500 leading-tight md:leading-tight lg:leading-tight'>
              Free maintenance
            </h3>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p className='relative inline-block'>
              I'll be<Em delay={0.1}> sticking around </Em>
              for a whole month to make sure
              <Em delay={0.1}>
                {' '}
                you and your team know how to use every single feature{' '}
              </Em>
              of your website.
            </p>
          </FadeInFromLeft>

          <FadeInFromLeft className='mt-5 pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)]'>
            <p>
              I'll<Em delay={0.1}> patch any bugs </Em>
              and make sure<Em delay={0.1}> everything runs smoothly</Em>.
            </p>
          </FadeInFromLeft>
        </article>

        <div className='flex justify-end pt-20 md:pt-40 '>
          <AnimatedLink
            href='/process'
            linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl flex gap-1 items-center'
          >
            View process
            <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
          </AnimatedLink>
        </div>
      </Container>
    </section>
  )
}
export default ProcessSection
