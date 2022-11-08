import ALink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
const Plan = () => {
  return (
    <>
      <section className='mt-72 sm:mt-[20rem] md:mt-[24rem] lg:mt-[28rem] relative'>
        <Container size={Options.Large}>
          <div
            className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'
          >
            <h2 className='text-sky-500 pb-8 w-fit lg:pb-14 font-heading leading-none text-5xl md:text-6xl lg:text-7xl'>
              Plan
            </h2>
            <article className='mb-14 relative'>
              <p className='font-display text-base lg:text-lg'>
                <Em inViewClassName='text-sky-500' bold={false}>
                  Step 1/9
                </Em>
              </p>
              <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
                Send me an email
              </h3>
              <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
                Here's an{' '}
                <ALink mail underlineClassName='bg-white'>
                  <Em inViewClassName='text-white'>email template</Em>
                </ALink>{' '}
                which outlines the information that I’ll need in order to
                accurately gauge the scope of your project.
                <br />
                <br />
                If the email is detailed enough, I'll be able to give you a
                quote in my{' '}
                <Em inViewClassName='text-white'>very next email back!</Em>{' '}
                Along with suggestions for some possible features worth
                implementing.
                <br />
                <br />
                Get in touch-{' '}
                <Em inViewClassName='text-white'>
                  I can't wait to learn all about your business!
                </Em>
              </div>
            </article>

            <article className='mb-14 relative'>
              <p className='font-display text-base lg:text-lg'>
                <Em inViewClassName='text-sky-500' bold={false}>
                  Step 2/9
                </Em>
              </p>
              <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
                We discuss and agree terms
              </h3>
              <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
                Yep... That’s really all it takes to get started!
              </p>
            </article>

            <div className='text-xl md:text-2xl lg:text-3xl font-heading text-white'>
              <SideLine lineClassName='text-sky-500'>Design deposit</SideLine>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Plan
