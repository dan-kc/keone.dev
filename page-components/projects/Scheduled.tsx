import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
export default () => {
  return (
    <>
      <section className='pb-[60px] lg:pb-[80px] pt-[10px] lg:pt-5 text-oliveDark-12 bg-gradient-to-b from-black via-grassDark-1 to-black'>
        <Container size={Options.Small}>
          <h2 className='font-heading text-white text-[38px] md:text-[44px] lg:text-[60px]'>
            Scheduled
          </h2>
          <p className='mb-5 font-display text-grassDark-11'>
            Main objective: Drive sales
          </p>
          <article>
            <p className='mb-5 lg:mb-[30px]'>
              An eCommerce project selling made-to-order, ethically sourced
              fashion jewelry. More info soon. I’m very excited about this one!
            </p>
          </article>

          <article>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
              <div className=''>
                <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                  Design Tooling
                </h3>
                <List
                  inViewDashClassName='text-grassDark-11'
                  ulClassName=' text-oliveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                  items={['Figma', 'FigJam']}
                />
              </div>
              <div className=''>
                <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                  Development Tooling
                </h3>
                <List
                  inViewDashClassName='text-grassDark-11'
                  ulClassName=' text-oliveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                  items={[
                    'NextJs',
                    'React',
                    'Typescript',
                    'Tailwind CSS',
                    'Crystalize',
                  ]}
                />
              </div>
            </div>
          </article>
        </Container>
      </section>
      <Container size={Options.Large}>
        <div className='flex justify-end'>
          <AnimatedLink
            mail={false}
            href='/process'
            thick={true}
            newTab={false}
            linkClassName='font-heading text-[24px] md:text-[27px] lg:text-[30px] text-white'
            underlineClassName='bg-white'
          >
            View Process
          </AnimatedLink>
        </div>
      </Container>
    </>
  )
}
