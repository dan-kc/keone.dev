import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import Image from 'next/image'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Separator from '@components/Separator'
import FadeInFromLeft from '@components/FadeInFromLeft'
const Develop = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-3'>
      <Container size={Options.md}>
          <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Develop
          </h2>
          <div className='md:pr-[5%] lg:pr-[10%] xl:pr-[35%]'>
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

          <Separator className='my-10 lg:my-14' />

          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-emerald-400'>
              Step 7/9
            </p>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Let's write some code
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              By this point, I’m itching to begin coding and{' '}
              <Em>making your website a reality.</Em> This is the most time
              consuming step of the process, but it’s the most enjoyable for me
              as it reminds me of my time at university reading maths.
              <br />
              <br />I use <Em>fast, modern</Em> and <Em>industry proven </Em>
              web frameworks like <Em> React </Em>
              and <Em>NextJs </Em>which are relied upon heavily by giants like{' '}
              <Em>TikTok, Redbull </Em>
              and<Em> Nike.</Em>
            </div>
          </article>

          <FadeInFromLeft className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-emerald-500'>-</span> Payment following
            development completion
          </FadeInFromLeft>

          <FadeInFromLeft className='text-2xl lg:text-3xl font-heading font-extrabold leading-tight lg:leading-tight text-anthracite-12 flex gap-1'>
            <span className='text-emerald-500'>-</span> Deployment & maintenance
            deposit
          </FadeInFromLeft>
        </div>
      </Container>
    </section>
  )
}

export default Develop
