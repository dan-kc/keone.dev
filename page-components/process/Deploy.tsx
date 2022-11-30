import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Separator from '@components/Separator'
import FadeInFromLeft from '@components/FadeInFromLeft'

const Deploy = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-3'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-yellow-200 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
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

          <Separator className='my-10 lg:my-14' />

          <article className='relative'>
            <p className='font-display text-base lg:text-lg text-yellow-300'>
              Step 8/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Deployment
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              We’re now ready to launch your website!
              <br />
              <br />
              But just before we do, I’ll deploy a test version which I’ll use
              to <Em> guide you on how to use your website’s features</Em>, for
              example <Em> where to access the analytics</Em>, or{' '}
              <Em> how to add products.</Em>
              <br />
              <br />
              I’ll also benchmark your website using{' '}
              <AnimatedLink
                href='https://developer.chrome.com/docs/lighthouse/overview/'
                newTab={true}
              >
                Google Lighthouse
              </AnimatedLink>
              . This is a service that audits your website for{' '}
              <Em>performance, accessibility, and SEO.</Em>
              <br />
              <br />
              This will give you peace of mind knowing that your website has
              good{' '}
              <AnimatedLink newTab={true} href='https://web.dev/vitals/'>
                Core Web Vitals
              </AnimatedLink>{' '}
              which are metrics{' '}
              <Em>Google uses for indexing search results</Em>.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-yellow-300'>
              Step 9/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Maintenance
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Once the project is deployed I’ll be{' '}
              <Em>sticking around for an extra month </Em>
              to ensure that <Em> everything runs smoothly</Em>.
              <br />
              <br />
              When your business grows and you require more features, or if you
              just want to hang onto me for a bit longer, I’m open to set up a
              monthly arrangement for me to{' '}
              <Em>implement changes for you on demand</Em>.
            </div>
          </article>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-yellow-300'>-</span> Payment following
            deployment and maintenance
          </FadeInFromLeft>

          <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-yellow-300'>-</span> ...and that's that!
          </FadeInFromLeft>
        </div>
      </Container>
    </section>
  )
}

export default Deploy
