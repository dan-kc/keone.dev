import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
export default () => {
  return (
    <section className='pb-[60px] lg:pb-[80px] pt-[10px] lg:pt-5 text-slateDark-12 bg-gradient-to-b from-black via-skyDark-1 to-black'>
      <Container size={Options.Small}>
        <h2 className='font-heading text-white text-[38px] md:text-[44px] lg:text-[60px]'>
          In progress
        </h2>
        <p className='mb-5 font-display text-blue-7'>
          Main objective: Drive sales
        </p>
        <article>
            <p className='mb-5 lg:mb-[30px]'>
            A{' '}
            <Em inViewClassName='text-white'>
              sleek, eCommerce department store startup-
            </Em>{' '}
            selling modern art and luxury fashion. This project is in progress,
            so more information is {' '}
            <Em inViewClassName='text-white'>coming soon.</Em>
          </p>
        </article>

        <article>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
            <div className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Design Tooling
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Figma', 'FigJam']}
              />
            </div>
            <div className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Development Tooling
              </h3>
              <List
                inViewDashClassName='text-blue-7'
                ulClassName=' text-slateDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={[
                  'Remix',
                  'React',
                  'Typescript',
                  'Tailwind CSS',
                  'Crystalize',
                  'Redis',
                ]}
              />
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
