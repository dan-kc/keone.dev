import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'

const PortfolioProduct = () => {
  return (
    <section className='pt-16 md:pt-20 relative bg-anthracite-1'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-emerald-500 pb-8 w-fit lg:pb-14 font-heading font-extrabold leading-none text-5xl md:text-6xl lg:text-7xl'>
            Portfolio
          </h2>
          <article className='relative'>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Impress your potential clients with a{' '}
              <Em>stunning new Portfolio site</Em> that’s{' '}
              <Em> bespoke to your artistic style,</Em> and that{' '}
              <Em> validates your status as a creative professional.</Em>
              <br />
              <br />
              As a creative professional your business <Em>IS </Em>
              your website. It’s the place you
              <br />
              <br />
              <List
                dashColor={Color.emerald}
                items={[
                  'Attract new users',
                  'Convert users into customers',
                  'Maximise sales from each customer',
                  'Achieve any unique business requirements',
                ]}
              />
              <br />
              ...and so on.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Design
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your portfolio will be designed to{' '}
              <Em>generate more qualified leads</Em> from potential clients who
              are <Em>likely to do business with you.</Em>
              <br />
              <br />A portfolio is <Em>just as scientific</Em> as an eCommerce
              store in its design, and just as important to the owner for their
              business.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Development
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              <Em>HTML, CSS and vanilla Javascript</Em> are often perfect for
              projects like these, to keep the <Em>file size down</Em> and the{' '}
              <Em>performance high!</Em>
              <br />
              <br />
              I’m an expert in the animation library <Em>GSAP</Em> too, enabling
              a <Em>beautifully animated showcase of your work </Em> if needs
              be!
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Content management
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My preferred CMS solution is <Em>Prismic.</Em> This is what you’ll
              use to{' '}
              <Em>
                update your website with your latest works and keep your website
                fresh.
              </Em>{' '}
              It has a generous free tier too!
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              I estimate a portfolio to range from <Em>£7,500</Em> to{' '}
              <Em>£13,500</Em> and to take <Em>6-8 weeks</Em> depending on the
              scope of the animations implemented.
              <br />
              <br />
              Beautiful animations are time consuming to make performant across
              all browsers, devices, and screen sizes; so they are the main
              consideration here for evaluating price and timeframe.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default PortfolioProduct
