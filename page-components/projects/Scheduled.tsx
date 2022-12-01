import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'
import Em from '@components/Em'

export default () => {
  return (
    <>
      <section className='pt-16 md:pt-20 relative bg-anthracite-3'>
        <Container size={Options.md}>
          <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
            <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-violet-300 lg:pb-1 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
              Scheduled
            </h2>
            <p className='font-display text-anthracite-9 pb-8 lg:pb-14'>
              Main objective: Drive sales
            </p>
            <article>
              <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
                An eCommerce project selling made-to-order, ethically sourced
                fashion jewelry.
                <br />
                <br />
                More info <Em>coming soon</Em>. I’m very excited about this one!
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
                    dashColor={Color.violet}
                    className='text-anthracite-9 text-base lg:text-lg'
                    items={['Figma', 'FigJam']}
                  />
                </div>
                <div>
                  <h3 className='text-2xl lg:text-3xl font-heading font-extrabold text-anthracite-11 mb-1 lg:mb-2 leading-tight lg:leading-tight'>
                    Development Tooling
                  </h3>
                  <List
                    dashColor={Color.violet}
                    className='text-anthracite-9 text-base lg:text-lg'
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
          </div>

          <div className='flex justify-end pt-16 md:pt-20 bg-anthracite-3'>
            <AnimatedLink
              href='/process'
              linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl flex gap-1 items-center'
            >
              View process
              <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
