import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Card from './Card'

const ProcessSection = () => {
  return (
    <section className='text-slateDark-12 '>
      <div className='md:grid grid-cols-2 gap-10 lg:gap-20 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5'>
        <div className='md:sticky md:top-20 px-6 order-2 md:px-0'>
          <h2 className='max-w-xs sm:max-w-md font-heading leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl sm:text-6xl md:text-5xl lg:text-6xl'>
            My process is{' '}
            <span className='text-skyDark-11'>designed around you</span>
          </h2>
          <div className='hidden md:block pt-5'>
            <p className='text-lg lg:text-xl'>
              Sound perfect for you and your business? Take a look at my
              detailed 9-step process to find out more.
            </p>
            <div className='flex justify-start mt-10'>
              <Link
                href='/process'
                className='flex items-center gap-2 bg-skyDark-1 border border-skyDark-7 py-3 px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-semibold shadow-lg text-xl duration-100'
              >
                View Process
                <ArrowRightIcon className='w-7 h-7' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-10 mt-10 md:mt-3 md:row-span-2'>
          <Card heading='No large upfront deposits'>
            All payments are taken at milestones over the course of the project
            so that you have the freedom to, at any point, change your mind on
            future services or even drop out entirely.
            <br />
            <br />
            You will{' '}
            <Em inViewClassName='text-slateDark-12'> never feel locked in.</Em>
          </Card>

          <Card heading='Multiple review rounds'>
            We'll conduct multiple detailed reviews of my work for the final
            designs.
            <br />
            <br />
            This is where I'll be able to take your suggestions onboard to keep
            myself informed on your style preferences so that you can be
            <Em className='text-slateDark-12'>
              {' '}
              100% certain you're getting the website design you envisioned
            </Em>
            .
          </Card>

          <Card heading='Live feedback'>
            All designs will be made available to you via{' '}
            <AnimatedLink
              href='https://www.figma.com/figjam/'
              newTab
              underlineClassName='bg-slateDark-12'
              linkClassName='text-slateDark-12'
            >
              FigJam
            </AnimatedLink>
            . This means that you can easily add comments, voice notes, likes,
            or dislikes to my designs at any time.
            <br />
            <br />
            This is perfect for requesting any minor changes outside of the
            formal review rounds.
          </Card>

          <Card heading='Free maintenance'>
            After your website is deployed I'll be sticking around for an
            additional month to ensure that you and your team understand how to
            use
            <Em className='text-slateDark-12'>
              {' '}
              every single feature of your website
            </Em>
            .
            <br />
            <br />
            I'll also fix any bugs and ensure that{' '}
            <Em className='text-slateDark-12'>everything runs smoothly</Em>.
          </Card>
        </div>
        <div className='md:hidden px-6 pt-10'>
          <p className='text-lg'>
            Sound perfect for you and your business? Take a look at my detailed
            9-step process to find out more.
          </p>
          <div className='flex justify-end mt-10'>
            <Link
              href='/process'
              className='flex items-center gap-2 bg-skyDark-1 border border-skyDark-7 py-2 px-5 sm:py-3 sm:px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-semibold shadow-lg text-base sm:text-xl duration-100'
            >
              View Process
              <ArrowRightIcon className='w-5 h-5 sm:w-7 sm:h-7' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
