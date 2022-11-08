import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import List from '@components/List'

export default function Skills() {
  return (
    <>
      <section className=' pt-[10px] lg:pt-5 text-slateDark-12 bg-black'>
        <Container size={Options.Small}>
          <h2 className='text-magenta pb-5 font-heading text-[32px] md:text-[38px] lg:text-[44px] md:order-1'>
            Design skills
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pb-[60px] lg:pb-[80px]'>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Software
              </h3>
              <List
                inViewDashClassName='text-magenta-6'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
              />
            </article>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Expertise
              </h3>
              <List
                inViewDashClassName='text-magenta-6'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Bevavioural web design', 'Checkout funnels']}
              />
            </article>
          </div>
        </Container>
      </section>
      <section className=' pt-[10px] lg:pt-5 text-slateDark-12 bg-gradient-to-b from-black via-skyDark-1 to-black'>
        <Container size={Options.Small}>
          <h2 className='pb-5 font-heading text-[32px] md:text-[38px] lg:text-[44px] md:order-1'>
            Development skills
          </h2>
          <div className='pb-[60px] lg:pb-[80px] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Languages
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Typescript / Javascript', 'HTML / CSS', 'Go']}
              />
            </article>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Frameworks
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['React', 'Next.js', 'Remix', 'Astro']}
              />
            </article>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Deployment / CMS Solutions
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Vercel', 'Fly.io', 'Crystalise', 'Shopify', 'Prismic']}
              />
            </article>
            <article className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Expertise
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={[
                  'Super fast eCommerce storefronts',
                  'Web animations (GSAP, Lottie, WAAPI)',
                  'Edge deployment',
                ]}
              />
            </article>
          </div>
        </Container>

        <Container size={Options.Large}>
          <div className='flex justify-end'>
            <AnimatedLink
              mail={false}
              href='/products'
              thick={true}
              newTab={false}
              linkClassName='font-heading text-[24px] md:text-[27px] lg:text-[30px] text-white'
              underlineClassName='bg-white'
            >
              View Products
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
