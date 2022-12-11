import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

const ProcessSection = () => {
  return (
    <section className='bg-slateDark-1 text-slateDark-12 pt-20 lg:pt-40'>
      <div className='md:grid grid-cols-2 gap-10 lg:gap-20 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5'>
        <div className='md:sticky md:top-20 px-6 order-2 md:px-0'>
          <h2 className='max-w-xs sm:max-w-md font-heading leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl sm:text-6xl md:text-5xl lg:text-6xl'>
            My process is{' '}
            <span className='text-skyDark-11'>designed around you</span>
          </h2>
          <div className='hidden md:block pt-3'>
            <p className='text-lg lg:text-xl'>
              {/* I'm not an agency churning out dozens of projects a week- i'm  */}
              Sound perfect for you and your business? Take a look at my
              detailed 9-step process to find out more.
            </p>
            <div className='flex justify-start mt-5'>
              <Link
                href='/process'
                className='flex items-center gap-2 bg-skyDark-1 border border-skyDark-7 py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-bold shadow-lg text-base sm:text-xl'
              >
                View Process
                <ArrowRightIcon className='w-5 h-5 sm:w-7 sm:h-7' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 mt-10 md:mt-3 md:row-span-2'>
          <article className='bg-skyDark-3/20 border border-skyDark-6 rounded-xl shadow p-6'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-skyDark-11'>
              No large upfront deposits
            </h3>
            <p className='mt-5 text-base lg:text-lg text-skyDark-12'>
              All payments are taken at{' '}
              <Em inViewClassName='text-slateDark-12'>milestones</Em> over the
              course of the project so that{' '}
              <Em inViewClassName='text-slateDark-12'>you have the freedom</Em>{' '}
              to, at any point,{' '}
              <Em inViewClassName='text-slateDark-12'>change your mind</Em> on
              future services or even drop out entirely.
              <br />
              <br />
              You will{' '}
              <Em inViewClassName='text-slateDark-12'>
                {' '}
                never feel locked in.
              </Em>
            </p>
          </article>

          <article className='bg-skyDark-3/20 border border-skyDark-6 rounded-xl shadow p-6'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-skyDark-11'>
              Multiple review rounds
            </h3>
            <p className='mt-5 text-base lg:text-lg text-skyDark-12'>
              We'll conduct multiple{' '}
              <Em className='text-slateDark-12'> detailed reviews </Em> of my
              work for the final designs.
              <br />
              <br />
              This is where I'll be able to{' '}
              <Em className='text-slateDark-12'>
                {' '}
                take your suggestions onboard{' '}
              </Em>{' '}
              to keep myself informed on your style preferences so that you can
              be
              <Em className='text-slateDark-12'>
                {' '}
                100% certain you're getting the website design you envisioned
              </Em>
              .
            </p>
          </article>

          <article className='bg-skyDark-3/20 border border-skyDark-6 rounded-xl shadow p-6'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-skyDark-11'>
              Live feedback
            </h3>
            <div className='relative inline-block mt-5 text-base lg:text-lg text-skyDark-12'>
              All designs will be made available to you via{' '}
              <AnimatedLink
                href='https://www.figma.com/figjam/'
                newTab
                underlineClassName='bg-skyDark-12'
                linkClassName='text-skyDark-12'
              >
                FigJam
              </AnimatedLink>
              . This means that you can easily{' '}
              <Em className='text-slateDark-12'>
                add comments, voice notes, likes, and dislikes{' '}
              </Em>
              to my designs at{' '}
              <Em className='text-slateDark-12'> any time and stage </Em> of the
              design process.
              <br />
              <br />
              This is perfect for any minor revisions made outside of the formal
              revision rounds.
            </div>
          </article>

          <article className='bg-skyDark-3/20 border border-skyDark-6 rounded-xl shadow p-6'>
            <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-skyDark-11'>
              Free maintenance
            </h3>
            <p className='mt-5 text-base lg:text-lg text-skyDark-12'>
              After your website is deployed I'll be
              <Em className='text-slateDark-12'> sticking around </Em>
              for an additional month to ensure that you and your team
              <Em className='text-slateDark-12'>
                {' '}
                understand how to use every single feature{' '}
              </Em>
              of your website.
              <br />
              <br />
              I'll also <Em className='text-slateDark-12'> fix any bugs </Em>and
              ensure that{' '}
              <Em className='text-slateDark-12'>everything runs smoothly</Em>.
            </p>
          </article>
        </div>
        <div className='md:hidden px-6 pt-10'>
          <p className='text-lg '>
            {/* I'm not an agency churning out dozens of projects a week- i'm  */}
            Sound perfect for you and your business? Take a look at my detailed
            9-step process to find out more.
          </p>
          <div className='flex justify-end mt-10'>
            <Link
              href='/process'
              className='flex items-center gap-2 bg-skyDark-1 border border-skyDark-7 py-2 lg:py-3 px-5 lg:px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-bold shadow-lg text-base sm:text-xl'
            >
              View Process
              <ArrowRightIcon className='w-5 h-5 sm:w-7 sm:h-7' />
            </Link>
          </div>
        </div>
      </div>
      <div className='mt-10 lg:mt-20 h-10 lg:h-20 bg-gradient-to-b from-slateDark-1 to-slateDark-1 border-b border-slateDark-6' />
    </section>
  )
}

export default ProcessSection
