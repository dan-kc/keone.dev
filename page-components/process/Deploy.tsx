import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import * as Separator from '@radix-ui/react-separator'

const Deploy = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-yellow-300 pb-8 lg:pb-14 font-heading font-extrabold leading-none text-5xl lg:text-7xl'>
            Deploy & maintain
          </h2>
          <div className='md:pr-[5%] lg:pr-[10%] xl:pr-[35%]'>
            <AspectRatio.Root ratio={938 / 644} className='relative'>
              <Image
                src='/images/graphics/package-json.png'
                alt='Code snippet'
                fill
                className='object-fill'
                sizes='(max-width: 1024px) 100vw,
              (max-width: 1536px) 70vw,
              50vw'
                quality={100}
              />
            </AspectRatio.Root>
          </div>
            <Separator.Root
              decorative
              className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
            />
          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-yellow-300'>
              Step 8/9
            </p>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
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

          <Separator.Root
            decorative
            className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
          />
          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-yellow-300'>
              Step 9/9
            </p>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
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

          <div className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold text-white'>
            <SideLine lineClassName='text-yellow-300'>3 Review rounds</SideLine>
          </div>

          <div className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold text-white'>
            <SideLine lineClassName='text-yellow-300'>
              Payment following deployment and maintenance
            </SideLine>
          </div>

          <div className='text-2xl lg:text-3xl font-heading font-extrabold text-white'>
            <SideLine lineClassName='text-yellow-300'>
              ...and that's that!
            </SideLine>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Deploy
