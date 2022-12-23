import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import List from '@components/List'

const Portfolio = () => {
  return (
    <section id='portfolio' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-tomatoDark-11 border-b border-tomatoDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Portfolio
      </h2>

      <div className='mt-8 text-lg'>
        Impress your potential clients with a stunning new Portfolio site that’s
        bespoke to your artistic style, validating your status as a creative
        professional.
        <br />
        <br />
        As a creative professional your business <Em>IS</Em> your website. It’s
        the place where you:
        <br />
        <br />
        <List
          dashClassName='text-tomatoDark-11'
          items={[
            'Introduce yourself to potential clients',
            'Show off your latest works',
            'Display your skills and expertise',
            'Express your artistic style',
            'Provide ways to contact you',
          ]}
        />
        <br />
        ...and so on.
      </div>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Design
      </h3>
      <div className='mt-3 text-lg '>
        Your portfolio will be designed to generate qualified leads from
        potential clients who are likely to do business with you.
        <br />
        <br />A portfolio is just as scientific as an eCommerce store in its
        design, and just as important to its owner's business.
      </div>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Development
      </h3>
      <div className='mt-3 text-lg '>
        Static site generators like{' '}
        <AnimatedLink href='https://astro.build/' newTab>
          Astro
        </AnimatedLink>{' '}
        are often perfect for projects like these, to keep the file size down
        and the performance high!
        <br />
        <br />
        I’m also an expert in the animation libraries{' '}
        <AnimatedLink href='https://greensock.com/' newTab>
          GSAP
        </AnimatedLink>{' '}
        and{' '}
        <AnimatedLink href='https://www.framer.com/motion/' newTab>
          Framer Motion
        </AnimatedLink>
        , enabling a beautifully animated showcase of your work if needs be!
      </div>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Content Management
      </h3>
      <div className='mt-3 text-lg'>
        <AnimatedLink href='https://prismic.io/marketers' newTab>
          Prismic
        </AnimatedLink>{' '}
        is my go-to CMS solution. You'll use this to update your website with
        your latest works to keep your website looking fresh.
        <br />
        <br />
        It has a generous free tier too!
      </div>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Price & Timescale
      </h3>
      <p className='mt-3 text-lg'>
        I estimate that a portfolio will cost between £7,500 and £13,500 and
        will take 6-8 weeks to complete, depending on the scope of the
        animations implemented.
        <br />
        <br />
        Beautiful animations are time-consuming to make performant across all
        browsers, devices, and screen sizes, so they are a big factor in
        evaluating price and timescale.
      </p>
    </section>
  )
}
export default Portfolio
