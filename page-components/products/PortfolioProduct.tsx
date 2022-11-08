import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import List from '@components/List'

const PortfolioProduct = () => {
  return (
    <section className='text-mauveDark-12 pb-[60px] lg:pb-[80px] pt-[10px] lg:pt-5  bg-gradient-to-b from-black via-violet-1 to-black'>
      <Container size={Options.Small}>
        <h2 className='pb-2 lg:pb-4 text-white font-heading text-[38px] md:text-[44px] lg:text-[60px]'>
          Portfolio
        </h2>
        <article className='mb-10 lg:mb-[60px]'>
          <div className='bg-violet-2 aspect-video mb-10 lg:mb-[60px] duration-1000' />
          <p className='mb-5 lg:mb-[30px]'>
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
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            As a creative professional your business{' '}
            <Em inViewClassName='text-white'>IS </Em>
            your website. It’s the place you
          </p>
          <List
            ulClassName='mb-5 lg:mb-[30px]'
            inViewDashClassName='text-magenta-6'
            items={[
              'Introduce yourself to potential clients',
              'Show off your previous works',
              'Convey your personality',
              'Display your skills and expertise',
              'Express your artistic style',
              'Provide ways to contact you',
            ]}
          />
          <p>...and so on.</p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Design
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            Your portfolio will be designed to{' '}
            <Em inViewClassName='text-white'>generate more qualified leads</Em>{' '}
            from potential clients who are{' '}
            <Em inViewClassName='text-white'>
              likely to do business with you.
            </Em>
          </p>

          <p>
            A portfolio is{' '}
            <Em inViewClassName='text-white'>just as scientific</Em> as an
            eCommerce store in its design, and just as important to the owner
            for their business.
          </p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Development
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            <Em inViewClassName='text-white'>
              HTML, CSS and vanilla Javascript
            </Em>{' '}
            are often perfect for projects like these, to keep the{' '}
            <Em inViewClassName='text-white'>file size down</Em> and the{' '}
            <Em inViewClassName='text-white'>performance high!</Em>
          </p>

          <p>
            I’m an expert in the animation library{' '}
            <Em inViewClassName='text-white'>GSAP</Em> too, enabling a{' '}
            <Em inViewClassName='text-white'>
              beautifully animated showcase of your work{' '}
            </Em>{' '}
            if needs be!
          </p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Content Management
          </h3>
          <p>
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

        <article>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Price / Timeframe
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            I estimate a portfolio to range from{' '}
            <Em inViewClassName='text-white'>£7,500</Em> to{' '}
            <Em inViewClassName='text-white'>£13,500</Em> and to take{' '}
            <Em inViewClassName='text-white'>6-8 weeks</Em> depending on the
            scope of the animations implemented.
          </p>

          <p>
            Beautiful animations are time consuming to make performant across
            all browsers, devices, and screen sizes; so they are the main
            consideration here for evaluating price and timeframe.
          </p>
        </article>
      </Container>
    </section>
  )
}
export default PortfolioProduct
