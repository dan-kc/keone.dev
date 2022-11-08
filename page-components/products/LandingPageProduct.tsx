import Container, { Options } from '@components/Container'
import Em from '@components/Em'

const LandingPageProduct = () => {
  return (
    <section className='text-sageDark-12 pb-[60px] lg:pb-[80px] pt-10 lg:pt-5 bg-gradient-to-b from-black via-mintDark-1 to-black'>
      <Container size={Options.Small}>
        <h2 className='pb-2 lg:pb-4 text-white font-heading text-[38px] md:text-[44px] lg:text-[60px]'>
          Landing Page
        </h2>
        <article className='mb-10 lg:mb-[60px]'>
          <div className='bg-mintDark-2 aspect-video mb-10 lg:mb-[60px] duration-1000' />
          <p className='mb-5 lg:mb-[30px]'>
            For businesses that operate mostly outside of the web, one web page
            is often all it takes to{' '}
            <Em inViewClassName='text-white'>
              introduce and inform users about their products and services.
            </Em>
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            An eye catching landing page would{' '}
            <Em inViewClassName='text-white'>
              establish your brand’s online presence{' '}
            </Em>
            and open you up to a{' '}
            <Em inViewClassName='text-white'>huge set of potential clients</Em>{' '}
            that would otherwise be in the dark!
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            Single landing pages are very similar to portfolios in their design
            and development, but they may differ in terms of scope and content
            management.
          </p>
          <p>
            Portfolios may require multiple pages or integration with a CMS such
            that owner can update their website with new works, but{' '}
            <Em inViewClassName='text-white'>
              for many businesses neither is necessary.
            </Em>
          </p>
        </article>

        <article >
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Price / Timeframe
          </h3>
          <p>
            A landing page should range from around{' '}
            <Em inViewClassName='text-white'>£4,800</Em>{' '}
            to{' '}
            <Em inViewClassName='text-white'>£6,700</Em>{' '}
            and take{' '}
            <Em inViewClassName='text-white'>roughly 6 weeks,</Em>{' '}
            but, similar to the portfolio website, price and timeframe may vary
            depending on the scope of the animations implemented.
          </p>
        </article>
      </Container>
    </section>
  )
}
export default LandingPageProduct
