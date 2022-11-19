import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
import Image from 'next/image'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import * as Separator from '@radix-ui/react-separator'
const Develop = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-emerald-500 pb-8 lg:pb-14 font-heading font-extrabold leading-none text-5xl lg:text-7xl'>
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
            <Separator.Root
              decorative
              className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
            />
          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg text-emerald-500'>
                Step 7/9
            </p>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Let's write some code
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              By this point, I’m itching to begin coding and{' '}
              <Em inViewClassName='text-white'>
                making your website a reality.
              </Em>{' '}
              This is the most time consuming step of the process, but it’s the
              most enjoyable for me as it reminds me of my time at university
              reading maths.
              <br />
              <br />I use <Em inViewClassName='text-white'>
                fast, modern
              </Em> and <Em inViewClassName='text-white'>industry proven </Em>
              web frameworks like <Em inViewClassName='text-white'> React </Em>
              and <Em inViewClassName='text-white'>NextJs </Em>which are relied
              upon heavily by giants like{' '}
              <Em inViewClassName='text-white'>TikTok, Redbull </Em>
              and<Em inViewClassName='text-white'> Nike.</Em>
            </div>
          </article>

          <div className='mb-14 text-2xl lg:text-3xl font-heading font-extrabold text-white'>
            <SideLine lineClassName='text-emerald-500'>
              Payment following development completion
            </SideLine>
          </div>

          <div className='text-2xl lg:text-3xl font-heading font-extrabold text-white'>
            <SideLine lineClassName='text-emerald-500'>
              Deployment & maintenance deposit
            </SideLine>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Develop
