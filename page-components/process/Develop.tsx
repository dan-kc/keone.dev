import Image from 'next/image'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import FadeIn from '@components/FadeIn'
import AnimatedLink from '@components/AnimatedLink'

const Develop = () => {
  return (
    <section id='develop' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-purpleDark-11 border-b border-purpleDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Develop
      </h2>
      <div className='mt-8'>
        <AspectRatio.Root ratio={822 / 382} className='relative'>
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

      <p className='mt-8 md:mt-20 font-display text-base text-purpleDark-11'>Step 7/9</p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Let's write some code
      </h3>
      <p className='mt-3 text-lg'>
        By this point, I’m itching to begin coding and making your website a
        reality.
        <br />
        <br />
        This is the most time consuming step of the process, but it’s also the
        most enjoyable for me as it reminds me of my time at university reading
        maths.
        <br />
        <br />I use fast, modern and industry proven web frameworks such as{' '}
        <AnimatedLink href='https://reactjs.org/' newTab>
          React
        </AnimatedLink>{' '}
        and{' '}
        <AnimatedLink href='https://nextjs.org/' newTab>
          NextJs
        </AnimatedLink>{' '}
        which are relied upon heavily by giants like TikTok, Redbull and Nike.
      </p>

      <FadeIn className='mt-20' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Payment following development completion</span>
        </p>
      </FadeIn>

      <FadeIn className='mt-6' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Deployment & maintenance deposit</span>
        </p>
      </FadeIn>
    </section>
  )
}

export default Develop
