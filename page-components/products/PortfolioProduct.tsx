import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import Em from '@components/Em'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'

const PortfolioProduct = () => {
  return (
    <section className='pt-16 md:pt-20 bg-anthracite-3'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-emerald-600 to-emerald-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Portfolio
          </h2>
          <article>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Impress your potential clients with a{' '}
              <Em>stunning new Portfolio site</Em> that’s bespoke to your
              artistic style,{' '}
              <Em> validating your status as a creative professional</Em>.
              <br />
              <br />
              As a creative professional your business <Em>IS </Em>
              your website. It’s the place where you:
              <br />
              <br />
              <List
                dashColor={Color.emerald}
                items={[
                  'Introduce yourself to potential clients',
                  'Show off your latest works',
                  'Convey your personality',
                  'Display your skills and expertise',
                  'Express your artistic style',
                  'Provide ways to contact you',
                ]}
              />
              <br />
              ...and so on.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Design
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your portfolio will be designed to{' '}
              <Em>generate more qualified leads</Em> from potential clients who
              are <Em>likely to do business with you.</Em>
              <br />
              <br />A portfolio is <Em>just as scientific</Em> as an eCommerce
              store in its design, and just as important to its owner's
              business.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Development
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Static site generators like{' '}
              <AnimatedLink href='https://astro.build/' newTab>
                Astro
              </AnimatedLink>{' '}
              are often perfect for projects like these, to keep the{' '}
              <Em>file size down</Em> and the <Em>performance high!</Em>
              <br />
              <br />
              I’m also an expert in the animation libraries{' '}
              <AnimatedLink href='https://greensock.com/gsap/' newTab>
                GSAP
              </AnimatedLink>{' '}
              and{' '}
              <AnimatedLink href='https://www.framer.com/motion/' newTab>
                Framer Motion
              </AnimatedLink>
              , enabling a<Em> beautifully animated showcase of your work </Em>{' '}
              if needs be!
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Content management
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              <AnimatedLink href='https://prismic.io' newTab>
                Prismic
              </AnimatedLink>{' '}
              is my go-to CMS solution. You'll use this to{' '}
              <Em>
                update your website with your latest works to keep your website
                looking fresh
              </Em>
              . It has a generous free tier too!
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              I estimate that a portfolio will cost between{' '}
              <Em>£7,500 and £13,500</Em> and will take <Em>6-8 weeks</Em> to
              complete, depending on the scope of the animations implemented.
              <br />
              <br />
              Beautiful animations are time consuming to make performant across
              all browsers, devices, and screen sizes, so they are the primary
              factor here in evaluating price and timeframe.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default PortfolioProduct
