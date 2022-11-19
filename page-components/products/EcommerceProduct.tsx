import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
import * as Separator from '@radix-ui/react-separator'
const EcommerceProduct = () => {
  return (
    <section className='relative'>
      <Container size={Options.md}>
        <div className='bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg shadow-2xl'>
          <h2
            className='text-violet-500 pb-8 w-fit lg:pb-14 font-heading font-extrabold leading-none max-[350px]:text-4xl text-5xl md:text-6xl lg:text-7xl '
            style={{ hyphens: 'auto' }}
          >
            Ecommerce Store
          </h2>
          <article className='relative'>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Reinvent your online business with a{' '}
              <Em inViewClassName='text-white'>brand new eCommerce store</Em>{' '}
              that’s designed from the ground up to{' '}
              <Em inViewClassName='text-white'>drive sales</Em>, and is
              developed using the <Em inViewClassName='text-white'>fastest</Em>,{' '}
              <Em inViewClassName='text-white'>most reliable</Em> web frameworks
              available!
            </div>
          </article>

          <Separator.Root
            decorative
            className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
          />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Design
            </h3>
            <div className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Your new storefront will be designed to
              <br />
              <br />
              <List
                inViewDashClassName='opacity-100 text-violet-500'
                outViewDashClassName='opacity-0 text-violet-500'
                items={[
                  'Attract new users',
                  'Convert users into customers',
                  'Maximise sales from each customer',
                  'Achieve any unique business requirements',
                ]}
              />
              <br />
              <Em inViewClassName='text-white'>
                CRO (Conversion Rate Optimisation)
              </Em>{' '}
              is a crucial aspect of my design process for every page especially
              the checkout, where I’ll use my{' '}
              <Em inViewClassName='text-white'>
                expertise on behavioural design
              </Em>{' '}
              to create a funnel that’s{' '}
              <Em inViewClassName='text-white'>
                bespoke to your business needs.
              </Em>
              <br />
              <br />
              And don’t worry about your website being responsive,{' '}
              <Em inViewClassName='text-white'>I design mobile first!</Em>
            </div>
          </article>

          <Separator.Root
            decorative
            className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
          />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Development
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              My favourite web frameworks to enable this are{' '}
              <Em inViewClassName='text-white'> NextJs, </Em> which is used by
              huge companies like <Em inViewClassName='text-white'>Target</Em>{' '}
              and <Em inViewClassName='text-white'>Nike</Em>, and{' '}
              <Em inViewClassName='text-white'>Remix</Em> which is a newer
              technology that boasts{' '}
              <Em inViewClassName='text-white'>even faster speeds</Em> in most
              cases.
            </p>
          </article>

          <Separator.Root
            decorative
            className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
          />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Content management
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              <Em inViewClassName='text-white'>Crystallise</Em> is my preferred
              headless eCommerce solution. Not only is it{' '}
              <Em inViewClassName='text-white'>
                secure, versatile, and future proof;
              </Em>{' '}
              it also has a{' '}
              <Em inViewClassName='text-white'>clean, intuitive UI</Em> that
              makes updating your website with new content or adding new
              products a{' '}
              <Em inViewClassName='text-white'>
                breeze for you and your team.
              </Em>
              <br />
              <br />
              <Em inViewClassName='text-white'>Crystallise</Em> also boast{' '}
              <Em inViewClassName='text-white'>incredible value</Em> in a space
              where other solutions can mean yearly bills of{' '}
              <Em inViewClassName='text-white'>$24,000</Em> (Shopify Plus),{' '}
              <Em inViewClassName='text-white'>$50,000</Em> (Elastic Path), up
              to as much as <Em inViewClassName='text-white'>$300,000</Em>{' '}
              (CommerceTools).
              <br />
              <br />
              These solutions often come with plenty of bells and whistles, but
              for most businesses these extra features are left unused,{' '}
              <Em inViewClassName='text-white'>
                eating into your business’ money pot.
              </Em>
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
              <Em inViewClassName='text-white'>
                adapt my designs to fit a Shopify template
              </Em>{' '}
              for use on one of their basic plans.
            </p>
          </article>

          <Separator.Root
            decorative
            className='h-[0.1rem] my-10 lg:my-14  bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
          />

          <article className=''>
            <h3 className='mb-6 text-3xl lg:text-4xl font-heading font-extrabold text-white'>
              Price / Timeframe
            </h3>
            <p className='sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16'>
              Ecommerce stores vary massively in scope and feature set, and as
              such, they{' '}
              <Em inViewClassName='text-white'>vary hugely in price too.</Em> My
              best estimate for the{' '}
              <Em inViewClassName='text-white'>
                design, development, deployment, and maintenance
              </Em>{' '}
              of a{' '}
              <Em inViewClassName='text-white'>
                mid featured, blazingly fast eCommerce store
              </Em>{' '}
              to cost around{' '}
              <Em inViewClassName='text-white'>£18,000 - £25,000</Em> and to
              take roughly <Em inViewClassName='text-white'>10 weeks.</Em>
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
export default EcommerceProduct
