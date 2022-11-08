import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
export default () => {
  return (
    <section className='text-mauveDark-12 pb-[60px] lg:pb-[80px] bg-gradient-to-b from-black via-pink-1 to-black'>
      <Container size={Options.Small}>
        <h1 className='py-[60px] md:mp-[80px] font-heading text-[60px] md:text-[75px] lg:text-[90px] bg-clip-text text-transparent bg-gradient-to-r from-pink-6 to-pink-7'>
          Take a look at what I'm working on
        </h1>
        <h2 className='pt-[10px] lg:pt-5 text-white font-heading text-[38px] md:text-[44px] lg:text-[60px]'>
          keone.io
        </h2>
        <p className='mb-5 font-display text-pink-6'>
          Main objective: Generate leads
        </p>

        <article>
          <div className='bg-slateDark-2 aspect-video mb-10 lg:mb-[60px]' />
          <p className='mb-5 lg:mb-[30px]'>
            An{' '}
            <Em inViewClassName='text-white'>
              elegant, interactive personal website
            </Em>{' '}
            providing the user with{' '}
            <Em inViewClassName='text-white'>
              information surrounding my services,
            </Em>{' '}
            and a<Em inViewClassName='text-white'> clear contact gateway.</Em>
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            The homepage is designed to encourage the user to scroll through an
            animated showcase of information such that they are sufficiently{' '}
            <Em inViewClassName='text-white'>
              advised on how I can help them,
            </Em>{' '}
            before{' '}
            <Em inViewClassName='text-white'>
              inviting the user to get in touch.
            </Em>
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            To satiate the more intrigued user, there are links to supporting
            pages where I elaborate and once again{' '}
            <Em inViewClassName='text-white'>invite the user to contact me.</Em>
          </p>
          <p className='mb-10 lg:mb-[60px]'>
            The website is developed using{' '}
            <Em inViewClassName='text-white'>performance best practices</Em>{' '}
            and{' '}
            <Em inViewClassName='text-white'>lightweight technologies</Em>{' '}
            resulting in a{' '}
            <Em inViewClassName='text-white'>lag-less user experience</Em>{' '}
            and{' '}
            <Em inViewClassName='text-white'>
              stellar google lighthouse scores.
            </Em>
          </p>
        </article>

        <article>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mb-10 lg:mb-[60px]'>
            <div className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Design Tooling
              </h3>
              <List
                inViewDashClassName='text-pink-6'
                ulClassName=' text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
                items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
              />
            </div>
            <div className=''>
              <h3 className='text-[22px] md:text-[25px] lg:text-[28px] font-heading text-white'>
                Development Tooling
              </h3>
              <List
                inViewDashClassName='text-pink-6'
                ulClassName=' text-mauveDark-11 text-[16px] md:text-[18px] lg:text-[20px]'
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
        </article>
        <p>
          <Em inViewClassName='text-white'>Deployed on Vercel.</Em>
        </p>
      </Container>
    </section>
  )
}
