import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import SideLine from '@components/SideLine'
const Develop = () => {
  return (
    <section className='mt-16 md:mt-20 relative '>
      <Container size={Options.Large}>
        <div
          className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'
        >
          <h2 className='text-green-700 pb-8 lg:pb-14 font-heading leading-none text-5xl md:text-6xl lg:text-7xl'>
            Develop
          </h2>
          <article className='mb-14 relative'>
            <p className='font-display text-base lg:text-lg'>
              <Em inViewClassName='text-green-700' bold={false}>
                Step 7/9
              </Em>
            </p>
              <h3 className='mb-6 text-3xl md:text-4xl lg:text-5xl font-heading text-white'>
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
              <br/>
              <br/>
              I use{' '}
              <Em inViewClassName='text-white'>fast, modern</Em> and{' '}
              <Em inViewClassName='text-white'>industry proven </Em>web
              frameworks like <Em inViewClassName='text-white'> React </Em>and{' '}
              <Em inViewClassName='text-white'>NextJs </Em>which are relied upon
              heavily by giants like{' '}
              <Em inViewClassName='text-white'>TikTok, Redbull </Em>
              and<Em inViewClassName='text-white'> Nike.</Em>
            </div>
          </article>

          <div className='mb-14 text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-green-700'>
              Payment following development completion
            </SideLine>
          </div>

          <div className='text-xl md:text-2xl lg:text-3xl font-heading text-white'>
            <SideLine lineClassName='text-green-700'>
              Deployment & maintenance deposit
            </SideLine>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Develop
