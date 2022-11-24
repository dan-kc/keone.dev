import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import FadeInFromLeft from '@components/FadeInFromLeft'
import Separator from '@components/Separator'

const Design = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-violet-500 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Design
          </h2>

          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-violet-500'>
              Step 3/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Moodboard
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              First thing's first, let's define a <Em>design direction</Em> for
              your website. I'll create a Moodboard where we'll be able to{' '}
              <Em>easily share design inspiration with each other.</Em>
              <br />
              <br />
              This will instantly give you a space where you can show me any
              existing design material you may have, for example{' '}
              <Em>
                logos, colours, typography, photography, other websites that you
                really like, or even whole other moodboards.
              </Em>{' '}
              Feel free to add
              <Em> anything!</Em>
              <br />
              <br />
              I'll be steadily populating the space with complimentary material,
              mainly in the form of other website designs. Just let me know what
              you like and dislike, and{' '}
              <Em>I'll reflect your preferences in the future designs.</Em>
              <br />
              <br />
              Moodboards will often{' '}
              <Em>
                capture ideas that would otherwise be lost in translation{' '}
              </Em>
              when only describing things verbally-
              <Em> saving you time and money </Em>
              by avoiding any additional revision requests later down the line.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-violet-500'>
              Step 4/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Sitemap
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Shortly after receiving the Moodboard you'll also be given a
              sitemap diagram which will outline your{' '}
              <Em>website’s structure</Em> and give you a bird's-eye view of the{' '}
              <Em>user journey.</Em>
              <br />
              <br />
              Better yet, you'll receive this diagram, the Moodboard and all
              other design work on{' '}
              <AnimatedLink
                underlineClassName='bg-white'
                newTab={true}
                mail={false}
                href='https://www.figma.com/figjam/'
              >
                <Em>FigJam</Em>
              </AnimatedLink>{' '}
              which makes providing <Em>live feedback</Em> an absolute breeze.
              This keeps me <Em>constantly informed</Em> on your style
              preferences and what you envision the project to look like.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-violet-500'>
              Step 5/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Wireframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Next, I'll give you a detailed wireframe for every page on your
              website. Wireframes are skeletal illustrations of a page’s
              interface. They communicate what content is being prioritised,
              and, most importantly, the <Em>intended user behaviours.</Em>
              <br />
              <br />
              Defining a good interface structure is the{' '}
              <Em> most important part </Em>
              of designing your website because it directly focuses on{' '}
              <Em>fulfilling your business’ key objectives.</Em>
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-violet-500'>
              Step 6/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Final designs
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              For the final designs I'll populate the wireframes with your
              content, like product images or text. I’ll also adapt the
              wireframes to <Em>reflect your style preferences </Em>
              from the moodboard.
              <br />
              <br />
              Since the goal of this stage is to <Em>fine-tune,</Em> we'll go
              through a comprehensive <Em>3 rounds of review</Em> so that we can
              be <Em>absolutely certain that</Em> the designs{' '}
              <Em>meet your expectations.</Em>
              <br />
              <br />
              Adjusting these final designs is my favourite part of the design
              process because I finally get to{' '}
              <Em>fully hone in on your vision.</Em>
            </p>
          </article>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-white flex gap-1'>
            <span className='text-violet-500'>-</span> 3 Review rounds
          </FadeInFromLeft>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-white flex gap-1'>
            <span className='text-violet-500'>-</span> Payment following design
            completion
          </FadeInFromLeft>

          <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-white flex gap-1'>
            <span className='text-violet-500'>-</span> Development deposit
          </FadeInFromLeft>
        </div>
      </Container>
    </section>
  )
}

export default Design
