import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import FadeInFromLeft from '@components/FadeInFromLeft'
import Separator from '@components/Separator'

const Design = () => {
  return (
    <section className='pt-16 md:pt-20 bg-anthracite-3'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-violet-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Design
          </h2>

          <article>
            <p className='font-display text-base lg:text-lg text-violet-400'>
              Step 3/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Moodboard
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              First thing's first, let's define a <Em>design direction</Em> for
              your website.
              <br />
              <br />
              I'll make a moodboard for us so that we can{' '}
              <Em>easily share design inspiration with one another</Em>.
              <br />
              <br />
              This will instantly give you a space where you can show me any
              existing design material you may have, such as{' '}
              <Em>
                logos, colours, typography, photography, other websites that you
                really like, or even entire other moodboards.
              </Em>{' '}
              Feel free to add <Em> anything!</Em>
              <br />
              <br />
              I'll be steadily populating the moodboard with complementary
              material, mainly in the form of other website designs. Simply let
              me know what you like and dislike, and{' '}
              <Em>I'll reflect your feedback in the future designs.</Em>
              <br />
              <br />
              Moodboards often{' '}
              <Em>
                capture ideas that would otherwise be lost in translation
              </Em>{' '}
              when only describing things verbally,
              <Em> saving you time and money </Em>
              by avoiding additional revision requests later down the line.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <p className='font-display text-base lg:text-lg text-violet-400'>
              Step 4/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Sitemap
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Shortly after receiving the moodboard you'll also be given a
              sitemap diagram which will outline the <Em> structure </Em> of
              your website and give you a bird's-eye view of the{' '}
              <Em>user journey.</Em>
              <br />
              <br />
              Even better, you'll receive this diagram, the moodboard, and all
              other design work on{' '}
              <AnimatedLink newTab={true} href='https://www.figma.com/figjam/'>
                FigJam
              </AnimatedLink>
              , making live feedback an <Em>absolute breeze</Em>. This keeps me{' '}
              <Em>continually informed</Em> on your style preferences and what
              you envision the end product to look like.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <p className='font-display text-base lg:text-lg text-violet-400'>
              Step 5/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Wireframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Next, I'll give you a detailed wireframe for each page of your
              website.
              <br />
              <br />
              Wireframes are skeletal illustrations of a page’s interface. They
              communicate what content is being prioritised and, most
              importantly, the <Em>intended user behaviours.</Em>
              <br />
              <br />
              Defining a good interface structure is the{' '}
              <Em> most important part </Em>
              of designing your website because it directly focuses on{' '}
              <Em>fulfilling your business’ key objectives.</Em>
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='mb-14'>
            <p className='font-display text-base lg:text-lg text-violet-400'>
              Step 6/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Final designs
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              For the final designs I'll populate the wireframes with your
              content, such as product images or text, and modify the wireframes
              to <Em>reflect your style preferences </Em>
              from the moodboard.
              <br />
              <br />
              Since the goal of this stage is to <Em>fine-tune</Em>, we'll
              conduct <Em>three review rounds</Em> so you can be{' '}
              <Em>absolutely certain </Em> that the designs{' '}
              <Em>meet your expectations.</Em>
              <br />
              <br />
              Adjusting these final designs is my favourite part of the design
              process because I finally get to{' '}
              <Em>fully hone in on your vision.</Em>
            </p>
          </article>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-violet-500'>-</span> 3 Review rounds
          </FadeInFromLeft>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-violet-500'>-</span> Payment following design
            completion
          </FadeInFromLeft>

          <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-violet-500'>-</span> Development deposit
          </FadeInFromLeft>
        </div>
      </Container>
    </section>
  )
}

export default Design
