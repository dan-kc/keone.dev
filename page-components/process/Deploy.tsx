import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
const Deploy = () => {
  return (
    <section className='mt-16 md:mt-20 relative'>
      <Container size={Options.Large}>
        <div
          className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'
        >
          <h2 className='text-indigo-700 pb-8 lg:pb-14 font-heading leading-none text-5xl md:text-6xl lg:text-7xl'>
            Deploy & maintain
          </h2>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-indigo-700' bold={false}>
                Step 8/9
              </Em>
            </p>
              <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Deployment
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              We’re now ready to launch the website! But just before we do, I’ll
              deploy a test version which I’ll use to{' '}
              <Em inViewClassName='text-white'>
                {' '}
                guide you on how to use your website’s features,{' '}
              </Em>
              for example where to{' '}
              <Em inViewClassName='text-white'>
                access the analytics, or how to add products.
              </Em>
              <br />
              <br />
              I’ll also benchmark your website using{' '}
              <AnimatedLink
                underlineClassName='bg-white'
                mail={false}
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                newTab={true}
              >
                <Em inViewClassName='text-white'>Google Lighthouse.</Em>
              </AnimatedLink>{' '}
              This is a service that audits your website for{' '}
              <Em inViewClassName='text-white'>
                performance, accessibility, and SEO.
              </Em>
              <br />
              <br />
              This will give you the peace of mind that your website meets{' '}
              <Em inViewClassName='text-white'>
                Google’s{' '}
                <AnimatedLink
                  underlineClassName='bg-white'
                  mail={false}
                  newTab={true}
                  href='https://web.dev/vitals/'
                >
                  Core Web Vitals
                </AnimatedLink>{' '}
              </Em>
              which are metrics{' '}
              <Em inViewClassName='text-white'>
                Google uses for indexing search results.
              </Em>
            </div>
          </article>

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-indigo-700' bold={false}>
                Step 9/9
              </Em>
            </p>
              <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
              Maintenance
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Once the project is deployed I’ll be{' '}
              <Em inViewClassName='text-white'>
                sticking around for an extra month{' '}
              </Em>
              to ensure that all of the features{' '}
              <Em inViewClassName='text-white'>run smoothly.</Em>
              <br />
              <br />
              When your business grows and you require more features, or if you
              just want to hang onto me for a bit longer, I’m open to set up a
              monthly arrangement for me to{' '}
              <Em inViewClassName='text-white'>
                implement changes for you on demand.
              </Em>
            </div>
          </article>

          <div className='mb-14 text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-indigo-700'>
              3 Review rounds
            </SideLine>
          </div>

          <div className='mb-14 text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-indigo-700'>
              Payment following deployment and maintenance
            </SideLine>
          </div>
          <div className='text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-indigo-700'>
              ...and that's that!
            </SideLine>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Deploy
