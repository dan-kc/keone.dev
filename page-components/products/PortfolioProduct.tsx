import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import List from '@components/List'
import Separator from '@components/separator'

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
              <Em inViewClassName='text-white'>stunning new Portfolio site</Em>{' '}
              that’s{' '}
              <Em inViewClassName='text-white'>
                {' '}
                bespoke to your artistic style,
              </Em>{' '}
              and that{' '}
              <Em inViewClassName='text-white'>
                {' '}
                validates your status as a creative professional.
              </Em>
              <br />
              <br />
              As a creative professional your business{' '}
              <Em inViewClassName='text-white'>IS </Em>
              your website. It’s the place you
              <br />
              <br />
              <List
                inViewDashClassName='opacity-100 text-emerald-500'
                outViewDashClassName='opacity-0 text-emerald-500'
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

          <Separator className='my-10 lg:my-14'/>

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Design
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your portfolio will be designed to{' '}
              <Em inViewClassName='text-white'>
                generate more qualified leads
              </Em>{' '}
              from potential clients who are{' '}
              <Em inViewClassName='text-white'>
                likely to do business with you.
              </Em>
              <br />
              <br />A portfolio is{' '}
              <Em inViewClassName='text-white'>just as scientific</Em> as an
              eCommerce store in its design, and just as important to the owner
              for their business.
            </p>
          </article>

          <Separator className='my-10 lg:my-14'/>

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Development
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              <Em inViewClassName='text-white'>
                HTML, CSS and vanilla Javascript
              </Em>{' '}
              are often perfect for projects like these, to keep the{' '}
              <Em inViewClassName='text-white'>file size down</Em> and the{' '}
              <Em inViewClassName='text-white'>performance high!</Em>
              <br />
              <br />
              I’m an expert in the animation library{' '}
              <Em inViewClassName='text-white'>GSAP</Em> too, enabling a{' '}
              <Em inViewClassName='text-white'>
                beautifully animated showcase of your work{' '}
              </Em>{' '}
              if needs be!
            </p>
          </article>

          <Separator className='my-10 lg:my-14'/>

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Content management
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My preferred CMS solution is{' '}
              <Em inViewClassName='text-white'>Prismic.</Em> This is what you’ll
              use to{' '}
              <Em inViewClassName='text-white'>
                update your website with your latest works and keep your website
                fresh.
              </Em>{' '}
              It has a generous free tier too!
            </p>
          </article>

          <Separator className='my-10 lg:my-14'/>

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              I estimate a portfolio to range from{' '}
              <Em inViewClassName='text-white'>£7,500</Em> to{' '}
              <Em inViewClassName='text-white'>£13,500</Em> and to take{' '}
              <Em inViewClassName='text-white'>6-8 weeks</Em> depending on the
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
