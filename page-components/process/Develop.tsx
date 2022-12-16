import Image from 'next/image'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import FadeInFromLeft from '@components/FadeInFromLeft'
import AnimatedLink from '@components/AnimatedLink'

const Develop = () => {
  return (
    <section id='develop' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-purpleDark-11 border-b border-purpleDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Develop
      </h2>
      <div className='mt-8 max-w-md'>
        <AspectRatio.Root ratio={874 / 812} className='relative'>
          <Image
            src='/images/graphics/process-snippet.png'
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

      <p className='mt-8 font-display text-base text-purpleDark-11'>Step 7/9</p>
      <h3 className='text-4xl font-heading font-extrabold'>
        Let's write some code
      </h3>
      <div className='mt-3 text-lg'>
        By this point, I’m itching to begin coding and making your website a
        reality.
        <br />
        <br />
        This is the most time consuming step of the process, but it’s also the
        most enjoyable for me as it reminds me of my time at university reading
        maths.
        <br />
        <br />I use fast, modern and industry proven web frameworks such as{' '}
        <AnimatedLink href='https://astro.build/' newTab>
          Astro
        </AnimatedLink>{' '}
        and{' '}
        <AnimatedLink href='https://nextjs.org/' newTab>
          NextJs
        </AnimatedLink>{' '}
        which are relied upon heavily by giants like TikTok, Redbull and Nike.
      </div>

      <FadeInFromLeft className='mt-20'>
        <p className='text-2xl font-heading font-extrabold'>
          - 3 Review rounds
        </p>
      </FadeInFromLeft>

      <FadeInFromLeft className='mt-6'>
        <p className='text-2xl font-heading font-extrabold'>
          - Payment following development completion
        </p>
      </FadeInFromLeft>

      <FadeInFromLeft className='mt-6'>
        <p className='text-2xl font-heading font-extrabold'>
          - Deployment & maintenance deposit
        </p>
      </FadeInFromLeft>
    </section>
  )
}

export default Develop
