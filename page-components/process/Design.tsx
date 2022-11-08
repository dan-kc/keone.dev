import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
const Design = () => {
  return (
    <section className='mt-16 md:mt-20 relative'>
      <Container size={Options.Large}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-violet-700 pb-8 lg:pb-14 font-heading leading-none text-5xl md:text-6xl lg:text-7xl'>
            Design
          </h2>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-violet-700' bold={false}>
                Step 3/9
              </Em>
            </p>
            <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Moodboard
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              First thing's first, let's define a{' '}
              <Em inViewClassName='text-white'>design direction</Em> for your
              website. I'll create a Moodboard where we'll be able to{' '}
              <Em inViewClassName='text-white'>
                easily share design inspiration with each other.
              </Em>
              <br />
              <br />
              This will instantly give you a space where you can show me any
              existing design material you may have, for example{' '}
              <Em inViewClassName='text-white'>
                logos, colours, typography, photography, other websites that you
                really like, or even whole other moodboards.
              </Em>{' '}
              Feel free to add
              <Em inViewClassName='text-white'> anything!</Em>
              <br />
              <br />
              I'll be steadily populating the space with complimentary material,
              mainly in the form of other website designs. Just let me know what
              you like and dislike, and{' '}
              <Em inViewClassName='text-white'>
                I'll reflect your preferences in the future designs.
              </Em>
              <br />
              <br />
              Moodboards will often{' '}
              <Em inViewClassName='text-white'>
                capture ideas that would otherwise be lost in translation{' '}
              </Em>
              when only describing things verbally-
              <Em inViewClassName='text-white'> saving you time and money </Em>
              by avoiding any additional revision requests later down the line.
            </p>
          </article>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-violet-700' bold={false}>
                Step 4/9
              </Em>
            </p>
            <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Sitemap
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Shortly after receiving the Moodboard you'll also be given a
              sitemap diagram which will outline your{' '}
              <Em inViewClassName='text-white'>website’s structure</Em> and give
              you a bird's-eye view of the{' '}
              <Em inViewClassName='text-white'>user journey.</Em>
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
                <Em inViewClassName='text-white'>FigJam</Em>
              </AnimatedLink>{' '}
              which makes providing{' '}
              <Em inViewClassName='text-white'>live feedback</Em> an absolute
              breeze. This keeps me{' '}
              <Em inViewClassName='text-white'>constantly informed</Em> on your
              style preferences and what you envision the project to look like.
            </div>
          </article>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-violet-700' bold={false}>
                Step 5/9
              </Em>
            </p>
            <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Wireframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Next, I'll give you a detailed wireframe for every page on your
              website. Wireframes are skeletal illustrations of a page’s
              interface. They communicate what content is being prioritised,
              and, most importantly, the{' '}
              <Em inViewClassName='text-white'>intended user behaviours.</Em>
              <br />
              <br />
              Defining a good interface structure is the{' '}
              <Em inViewClassName='text-white'> most important part </Em>
              of designing your website because it directly focuses on{' '}
              <Em inViewClassName='text-white'>
                fulfilling your business’ key objectives.
              </Em>
            </p>
          </article>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-violet-700' bold={false}>
                Step 6/9
              </Em>
            </p>
            <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Final designs
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              For the final designs I'll populate the wireframes with your
              content, like product images or text. I’ll also adapt the
              wireframes to{' '}
              <Em inViewClassName='text-white'>
                reflect your style preferences{' '}
              </Em>
              from the moodboard.
              <br />
              <br />
              Since the goal of this stage is to{' '}
              <Em inViewClassName='text-white'>fine-tune,</Em> we'll go through
              a comprehensive{' '}
              <Em inViewClassName='text-white'>3 rounds of review</Em> so that
              we can be{' '}
              <Em inViewClassName='text-white'>absolutely certain that</Em> the
              designs{' '}
              <Em inViewClassName='text-white'>meet your expectations.</Em>
              <br />
              <br />
              Adjusting these final designs is my favourite part of the design
              process because I finally get to{' '}
              <Em inViewClassName='text-white'>
                fully hone in on your vision.
              </Em>
            </p>
          </article>

          <div className='mb-14 text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-violet-700'>3 Review rounds</SideLine>
          </div>

          <div className='mb-14 text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-violet-700'>
              Payment following design completion
            </SideLine>
          </div>
          <div className='text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-violet-700'>
              Development deposit
            </SideLine>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Design
