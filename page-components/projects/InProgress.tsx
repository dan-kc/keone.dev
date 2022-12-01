import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'

const InProgress = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-3'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300 lg:pb-1 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            In progress
          </h2>
          <p className='font-display text-anthracite-9 pb-8 lg:pb-14'>
            Main objective: Drive sales
          </p>
          <article>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              An elegant, eCommerce department store selling modern art and
              luxury fashion.
              <br />
              <br />
              This project is still in the works, so more information will be{' '}
              <Em> available soon</Em>
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
              <div>
                <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-anthracite-11 mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                  Design Tooling
                </h3>
                <List
                  dashColor={Color.emerald}
                  className='text-anthracite-9 text-base lg:text-lg'
                  items={['Figma', 'FigJam']}
                />
              </div>
              <div>
                <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-anthracite-11 mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                  Development Tooling
                </h3>
                <List
                  dashColor={Color.emerald}
                  className='text-anthracite-9 text-base lg:text-lg'
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
export default InProgress
