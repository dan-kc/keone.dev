import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Separator from '@components/Separator'
import { Color } from '@components/Hightlight'
import { FaArrowRight } from 'react-icons/fa'
export default () => {
  return (
    <>
      <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
        <Container size={Options.md}>
          <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
            <h2 className='text-violet-500 w-fit font-heading font-extrabold leading-none text-5xl lg:text-7xl pb-2 lg:pb-3'>
              Scheduled
            </h2>
            <p className='font-display text-base lg:text-lg text-anthracite-8 pb-8 lg:pb-14'>
              Main objective: Drive sales
            </p>
            <article className='relative'>
              <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
                An eCommerce project selling made-to-order, ethically sourced
                fashion jewelry. More info soon. I’m very excited about this
                one!
              </div>
            </article>

            <Separator className='my-10 lg:my-14' />

            <article className='relative'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
                <div className=''>
                  <h3 className='text-lg lg:text-2xl font-heading font-extrabold text-white mb-1 lg:mb-2'>
                    Design Tooling
                  </h3>
                  <List
                    dashColor={Color.violet}
                    className='text-anthracite-9 text-sm lg:text-base'
                    items={['Figma', 'FigJam']}
                  />
                </div>
                <div className=''>
                  <h3 className='text-lg lg:text-2xl font-heading font-extrabold text-white mb-1 lg:mb-2'>
                    Development Tooling
                  </h3>
                  <List
                    dashColor={Color.violet}
                    className='text-anthracite-9 text-sm lg:text-base'
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

          <div className='flex justify-end pt-16 md:pt-20 bg-anthracite-1'>
            <AnimatedLink
              mail={false}
              href='/process'
              thick={false}
              newTab={false}
              linkClassName='font-heading font-extrabold text-xl md:text-2xl lg:text-3xl text-white flex gap-1 items-center'
              underlineClassName='bg-white'
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
