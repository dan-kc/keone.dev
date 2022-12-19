import AnimatedLink from '@components/AnimatedLink'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import FadeIn from '@components/FadeIn'

const Deploy = () => {
  return (
    <section id='deploy' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-purpleDark-11 border-b border-purpleDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Deploy & maintain
      </h2>
      <div className='mt-8 max-w-md'>
        <AspectRatio.Root ratio={874 / 812} className='relative'>
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
      <p className='mt-8 font-display text-base text-purpleDark-11'>Step 8/9</p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Deployment
      </h3>
      <div className='mt-3 text-lg'>
        We’re now ready to launch your website!
        <br />
        <br />
        But just before we do, I’ll deploy a test version that I’ll use to show
        you how to use your website’s features, for example where to access the
        analytics, or how to add new products.
        <br />
        <br />
        I’ll also benchmark your website using{' '}
        <AnimatedLink
          href='https://developer.chrome.com/docs/lighthouse/overview/'
          newTab
        >
          Google Lighthouse
        </AnimatedLink>{' '}
        . This is a service that audits your website for performance,
        accessibility, and SEO.
        <br />
        <br />
        This will give you peace of mind knowing that your website has good
        <AnimatedLink href='https://web.dev/vitals/' newTab>
          Core Web Vitals
        </AnimatedLink>{' '}
        which are metrics used by Google to index search results.
      </div>

      <p className='mt-20 font-display text-base text-purpleDark-11'>
        Step 9/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Deploy & Maintain
      </h3>
      <p className='mt-3 text-lg'>
        I’ll be sticking around for an extra month once the project is deployed
        to ensure that everything runs smoothly.
        <br />
        <br />
        When your business grows and you require more features, or if you just
        want keep me around for a bit longer, I’m open to set up a monthly
        arrangement for me to implement changes for you on demand.
      </p>

      <FadeIn className='mt-20'>
        <p className='text-2xl font-heading font-extrabold'>
          - Payment following deployment and maintenance
        </p>
      </FadeIn>

      <FadeIn className='mt-6'>
        <p className='text-2xl font-heading font-extrabold'>
          ... and that's that!
        </p>
      </FadeIn>
    </section>
  )
}

export default Deploy
