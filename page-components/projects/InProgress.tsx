import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from '@components/Hightlight'
export default () => {
  return (
      <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-emerald-500 w-fit font-heading leading-tight font-extrabold leading-none text-5xl lg:text-7xl pb-2 lg:pb-3'>
            In progress
          </h2>
          <p className='font-display text-base lg:text-lg text-anthracite-8 pb-8 lg:pb-14'>
            Main objective: Drive sales
          </p>
          <article className='relative'>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              A{' '}
              <Em inViewClassName='text-white'>
                sleek, eCommerce department store startup-
              </Em>{' '}
              selling modern art and luxury fashion. This project is in
              progress, so more information is{' '}
              <Em inViewClassName='text-white'>coming soon.</Em>
            </div>
          </article>

          <Separator className='my-10 lg:my-14'/>

          <article className='relative'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
              <div className=''>
                <h3 className='text-lg lg:text-2xl font-heading leading-tight font-extrabold text-white mb-1 lg:mb-2'>
                  Design Tooling
                </h3>
                <List
                  dashColor={Color.emerald}
                  className='text-anthracite-9 text-sm lg:text-base'
                  items={['Figma', 'FigJam']}
                />
              </div>
              <div className=''>
                <h3 className='text-lg lg:text-2xl font-heading leading-tight font-extrabold text-white mb-1 lg:mb-2'>
                  Development Tooling
                </h3>
                <List
                  dashColor={Color.emerald}
                  className='text-anthracite-9 text-sm lg:text-base'
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
        </div>
      </Container>
    </section>
  )
}
