import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import Separator from '@components/Separator'

const LandingPageProduct = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-cyan-500 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Landing Page
          </h2>
          <article className='relative'>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              For businesses that operate mostly outside of the web, one web
              page is often all it takes to{' '}
              <Em >
                introduce and inform users about their products and services.
              </Em>
              <br />
              <br />
              An eye catching landing page would{' '}
              <Em >
                establish your brand’s online presence{' '}
              </Em>
              and open you up to a{' '}
              <Em >
                huge set of potential clients
              </Em>{' '}
              that would otherwise be in the dark!
              <br />
              <br />
              Single landing pages are very similar to portfolios in their
              design and development, but they may differ in terms of scope and
              content management. Portfolios may require multiple pages or
              integration with a CMS such that owner can update their website
              with new works, but{' '}
              <Em >
                for many businesses neither is necessary.
              </Em>
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              A landing page should range from around{' '}
              <Em >£4,800</Em> to{' '}
              <Em >£6,700</Em> and take{' '}
              <Em >roughly 6 weeks,</Em> but,
              similar to the portfolio website, price and timeframe may vary
              depending on the scope of the animations implemented.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default LandingPageProduct
