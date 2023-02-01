import AnimatedLink from '@components/AnimatedLink'
import Em from '@components/Em'
import List from '@components/List'
import Section from '@components/Section'
import Article from '@page-components/products/ProductsArticle'

const Portfolio = () => {
  return (
    <Section heading='Portfolio' color='green'>
      <Article>
        <div>
          Impress your potential clients with a stunning new Portfolio site
          that’s bespoke to your artistic style, validating your status as a
          creative professional.
          <br />
          <br />
          As a creative professional your business <Em>IS</Em> your website.
          It’s the place where you:
          <br />
          <br />
          <List
            dashClassName='text-greenDark-11'
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
      </Article>

      <Article heading='Design'>
        <p>
          Your portfolio will be designed to generate qualified leads from
          potential clients who are likely to do business with you.
          <br />
          <br />A portfolio is just as scientific as an eCommerce store in its
          design, and just as important to its owner's business.
        </p>
      </Article>

      <Article heading='Development'>
        <p>
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
        </p>
      </Article>

      <Article heading='Content management'>
        <p>
          <AnimatedLink href='https://prismic.io/marketers' newTab>
            Prismic
          </AnimatedLink>{' '}
          is my go-to CMS solution. You'll use this to update your website with
          your latest works to keep your website looking fresh.
          <br />
          <br />
          It has a generous free tier too!
        </p>
      </Article>

      <Article heading='Price & timeframe'>
        <p>
          I estimate that a portfolio will cost between £7,500 and £13,500 and
          will take 6-8 weeks to complete, depending on the scope of the
          animations implemented.
          <br />
          <br />
          Beautiful animations are time-consuming to make performant across all
          browsers, devices, and screen sizes, so they are a big factor in
          evaluating price and timescale.
        </p>
      </Article>
    </Section>
  )
}
export default Portfolio
