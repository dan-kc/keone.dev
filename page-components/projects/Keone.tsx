import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'
export default () => {
  return (
    <section className='relative'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-yellow-300 w-fit font-heading font-extrabold leading-none text-5xl lg:text-7xl pb-3'>
            keone.io
          </h2>
          <p className='font-display text-base lg:text-lg text-anthracite-8 pb-8 lg:pb-14'>
            Main objective: Generate leads
          </p>
          <article className='relative'>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              An <Em>elegant, interactive personal website</Em> providing the
              user with <Em>information surrounding my services,</Em> and a
              <Em> clear contact gateway.</Em>
              <br />
              <br />
              The homepage is designed to encourage the user to scroll through
              an animated showcase of information such that they are
              sufficiently <Em>advised on how I can help them,</Em> before{' '}
              <Em>inviting the user to get in touch.</Em>
              <br />
              <br />
              To satiate the more intrigued user, there are links to supporting
              pages where I elaborate and once again{' '}
              <Em>invite the user to contact me.</Em>
              The website is developed using <Em>
                performance best practices
              </Em>{' '}
              and <Em>lightweight technologies</Em> resulting in a{' '}
              <Em>lag-less user experience</Em> and{' '}
              <Em>stellar google lighthouse scores.</Em>
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
                  dashColor={Color.yellow}
                  className='text-anthracite-9 text-sm lg:text-base'
                  items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
                />
              </div>
              <div className=''>
                <h3 className='text-lg lg:text-2xl font-heading font-extrabold text-white mb-1 lg:mb-2'>
                  Development Tooling
                </h3>
                <List
                  dashColor={Color.yellow}
                  className='text-anthracite-9 text-sm lg:text-base'
                  items={[
                    'Next.js',
                    'React',
                    'Typescript',
                    'Tailwind CSS',
                    'Lottie',
                  ]}
                />
              </div>
            </div>

            <Separator className='my-10 lg:my-14' />

            <p className=''>
              Deployed on <Em>Vercel</Em>.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}