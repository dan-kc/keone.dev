import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'
import AnimatedLink from '@components/AnimatedLink'

const EcommerceProduct = () => {
  return (
    <section>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-9 md:p-8 lg:p-12 rounded-lg shadow-2xl'>
          <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-violet-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Ecommerce Store
          </h2>
          <article>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Reinvent your online business with a{' '}
              <Em>brand new eCommerce store</Em> that’s designed from the ground
              up to <Em>drive sales</Em>, and is developed using the{' '}
              <Em>fastest</Em>, <Em>most reliable</Em> web frameworks around!
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Design
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your new storefront will be designed to:
              <br />
              <br />
              <List
                dashColor={Color.violet}
                items={[
                  'Attract new users',
                  'Convert users into customers',
                  'Maximise sales from each customer',
                  'Achieve any unique business requirements',
                ]}
              />
              <br />
              <Em>CRO (Conversion Rate Optimisation)</Em> is a crucial aspect of
              my design process for every page, especially the checkout, where
              I’ll apply my <Em>expertise on behavioural design</Em> to create a
              funnel that’s <Em>bespoke to your business’ needs.</Em>
              <br />
              <br />
              And don’t worry about your website being responsive,{' '}
              <Em>I design mobile first!</Em>
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Development
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My favourite web frameworks for eCommerce are{' '}
              <AnimatedLink href='https://nextjs.org/showcase' newTab>
                NextJs{' '}
              </AnimatedLink>
              , which is used by huge corporations such as <Em>Target</Em> and{' '}
              <Em>Nike</Em>, and{' '}
              <AnimatedLink href='https://remix.run/' newTab>
                Remix
              </AnimatedLink>
              , which is a newer technology that boasts{' '}
              <Em>even faster speeds</Em> in many cases.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Content management
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My go-to headless eCommerce solution is{' '}
              <AnimatedLink
                href='https://crystallize.com/#this-is-crystallize'
                newTab
              >
                Crystallise
              </AnimatedLink>
              .
              <br />
              <br />
              Along with being <Em>secure, versatile, and future proof,</Em> it
              also has a <Em>simple, intuitive user interface</Em> that makes
              updating your website with new content or adding new products a{' '}
              <Em>breeze for you and your team.</Em>
              <br />
              <br />
              Crystallise also boast{' '}
              <AnimatedLink href='https://crystallize.com/pricing' newTab>
                incredible value
              </AnimatedLink>{' '}
              in a market where other solutions can mean yearly bills of{' '}
              <Em>$24,000</Em> (Shopify Plus), <Em>$50,000</Em> (Elastic Path),
              up to as much as <Em>$300,000</Em> (CommerceTools).
              <br />
              <br />
              These other solutions often come with a slew of bells and
              whistles, but for most businesses these extra features are left
              unused, <Em>eating into your business’ money pot.</Em>
              <br />
              <br />
              But keep in mind that I'm <Em> platform agnostic</Em>. If you
              already have a headless eCommerce solution and you want to stick with
              it, <Em>that's fine with me!</Em>
              <br />
              <br />
              What’s more, if you have a fast approaching deadline or a limited
              budget, such that I’m not afforded enough time to develop on
              Crystallise, I'll gladly{' '}
              <Em>adapt my designs to fit a Shopify template</Em> for use on one
              of their basic plans.
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-anthracite-12 leading-tight lg:leading-tight'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Ecommerce stores vary massively in scope and feature set, and as a
              result, they also{' '}
              <Em> vary hugely in price and turnaround time</Em>.
              <br />
              <br />
              My best estimate is that for the{' '}
              <Em>design, development, deployment, and maintenance</Em> of a{' '}
              <Em>mid-featured, blazingly fast eCommerce store</Em>, it will
              cost between <Em>£9,500 and £18,500</Em> and will take between{' '}
              <Em>9 and 14 weeks</Em>.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default EcommerceProduct
