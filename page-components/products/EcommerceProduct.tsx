import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import Separator from '@components/Separator'
import { Color } from 'styles/color-config'
const EcommerceProduct = () => {
  return (
    <section className='relative'>
      <Container size={Options.md}>
        <div className='bg-anthracite-4 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2 className='text-violet-500 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
            Ecommerce Store
          </h2>
          <article className='relative'>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Reinvent your online business with a{' '}
              <Em>brand new eCommerce store</Em> that’s designed from the ground
              up to <Em>drive sales</Em>, and is developed using the{' '}
              <Em>fastest</Em>, <Em>most reliable</Em> web frameworks around!
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Design
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your new storefront will be designed to
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
              my design process for every page especially the checkout, where
              I’ll use my <Em>expertise on behavioural design</Em> to create a
              funnel that’s <Em>bespoke to your business needs.</Em>
              <br />
              <br />
              And don’t worry about your website being responsive,{' '}
              <Em>I design mobile first!</Em>
            </div>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Development
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My favourite web frameworks to enable this are <Em> NextJs, </Em>{' '}
              which is used by huge companies like <Em>Target</Em> and{' '}
              <Em>Nike</Em>, and <Em>Remix</Em> which is a newer technology that
              boasts <Em>even faster speeds</Em> in most cases.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Content management
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              <Em>Crystallise</Em> is my preferred headless eCommerce solution.
              Not only is it <Em>secure, versatile, and future proof;</Em> it
              also has a <Em>clean, intuitive UI</Em> that makes updating your
              website with new content or adding new products a{' '}
              <Em>breeze for you and your team.</Em>
              <br />
              <br />
              <Em>Crystallise</Em> also boast <Em>incredible value</Em> in a
              space where other solutions can mean yearly bills of{' '}
              <Em>$24,000</Em> (Shopify Plus), <Em>$50,000</Em> (Elastic Path),
              up to as much as <Em>$300,000</Em> (CommerceTools).
              <br />
              <br />
              These solutions often come with plenty of bells and whistles, but
              for most businesses these extra features are left unused,{' '}
              <Em>eating into your business’ money pot.</Em>
              <br />
              <br />
              Keep in mind though, I’m platform agnostic. If you have an
              existing headless eCommerce solution that you’d like to stick
              with- that’s fine by me!
              <br />
              <br />
              What’s more, if you have a fast approaching deadline or your
              budget is small, such that I’m not afforded enough time to develop
              on Crystallise, I’m happy to{' '}
              <Em>adapt my designs to fit a Shopify template</Em> for use on one
              of their basic plans.
            </p>
          </article>

          <Separator className='my-10 lg:my-14' />

          <article className=''>
            <h3 className='mb-6 text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight lg:leading-tight'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Ecommerce stores vary massively in scope and feature set, and as
              such, they <Em>vary hugely in price too.</Em> My best estimate for
              the <Em>design, development, deployment, and maintenance</Em> of a{' '}
              <Em>mid featured, blazingly fast eCommerce store</Em> to cost
              around <Em>£18,000 - £25,000</Em> and to take roughly{' '}
              <Em>10 weeks.</Em>
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default EcommerceProduct
