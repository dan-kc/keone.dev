import Em from '@components/Em'
import Container, { Options } from '@components/Container'
import List from '@components/List'
const EcommerceProduct = () => {
  return (
    <section className='text-oliveDark-12 pb-[60px] lg:pb-[80px] bg-gradient-to-b from-black via-grassDark-1 to-black'>
      <Container size={Options.Small}>
        <h1 className='py-[60px] md:mp-[80px] font-heading text-[60px] md:text-[75px] lg:text-[90px] bg-clip-text text-transparent bg-gradient-to-r from-grassDark-11 to-grassDark-10'>
          Products, services and prices
        </h1>
        <h2 className='pt-[10px] lg:pt-5 pb-2 lg:pb-4 text-white font-heading text-[38px] md:text-[44px] lg:text-[60px]'>
          Ecommerce Store
        </h2>
        <article>
          <div className='bg-grassDark-2 aspect-video mb-10 lg:mb-[60px]' />
          <p className='mb-10 lg:mb-[60px]'>
            Reinvent your online business with a{' '}
            <Em inViewClassName='text-white'>brand new eCommerce store</Em>
            {' that’s '}
            designed from the ground up to{' '}
            <Em inViewClassName='text-white'>drive sales</Em>, and is developed
            using the <Em inViewClassName='text-white'>fastest</Em>,{' '}
            <Em inViewClassName='text-white'>most reliable</Em> web frameworks
            available!
          </p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Design
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            Your new storefront will be designed to
          </p>
          <List
            ulClassName='mb-5 lg:mb-[30px]'
            inViewDashClassName='text-grassDark-11'
            items={[
              'Attract new users',
              'Convert users into customers',
              'Maximise sales from each customer',
              'Achieve any unique business requirements',
            ]}
          />
          <p className='mb-5 lg:mb-[30px]'>
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
          </p>
          <p>
            And don’t worry about your website being responsive,{' '}
            <Em inViewClassName='text-white'>I design mobile first!</Em>
          </p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Development
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            My favourite web frameworks to enable this are{' '}
            <Em inViewClassName='text-white'> NextJs, </Em> which is used by
            huge companies like <Em inViewClassName='text-white'>Target</Em> and{' '}
            <Em inViewClassName='text-white'>Nike</Em>, and{' '}
            <Em inViewClassName='text-white'>Remix</Em> which is a newer
            technology that boasts{' '}
            <Em inViewClassName='text-white'>even faster speeds</Em> in most
            cases.
          </p>
        </article>

        <article className='mb-10 lg:mb-[60px]'>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Content management
          </h3>
          <p className='mb-5 lg:mb-[30px]'>
            <Em inViewClassName='text-white'>Crystallise</Em> is my preferred
            headless eCommerce solution. Not only is it{' '}
            <Em inViewClassName='text-white'>
              secure, versatile, and future proof;
            </Em>{' '}
            it also has a{' '}
            <Em inViewClassName='text-white'>clean, intuitive UI</Em> that makes
            updating your website with new content or adding new products a{' '}
            <Em inViewClassName='text-white'>breeze for you and your team.</Em>
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            <Em inViewClassName='text-white'>Crystallise</Em> also boast{' '}
            <Em inViewClassName='text-white'>incredible value</Em> in a space
            where other solutions can mean yearly bills of{' '}
            <Em inViewClassName='text-white'>$24,000</Em> (Shopify Plus),{' '}
            <Em inViewClassName='text-white'>$50,000</Em> (Elastic Path), up to{' '}
            as much as <Em inViewClassName='text-white'>$300,000</Em>{' '}
            (CommerceTools).
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            These solutions often come with plenty of bells and whistles, but
            for most businesses these extra features are left unused,{' '}
            <Em inViewClassName='text-white'>
              eating into your business’ money pot.
            </Em>
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            Keep in mind though, I’m platform agnostic. If you have an existing
            headless eCommerce solution that you’d like to stick with- that’s
            fine by me!
          </p>
          <p>
            What’s more, if you have a fast approaching deadline or your budget
            is small, such that I’m not afforded enough time to develop on
            Crystallise, I’m happy to{' '}
            <Em inViewClassName='text-white'>
              adapt my designs to fit a Shopify template
            </Em>{' '}
            for use on one of their basic plans.
          </p>
        </article>

        <article className=''>
          <h3 className='mb-[5px] text-[24px] md:text-[34px] lg:text-[38px] font-heading text-white'>
            Price / Timeframe
          </h3>
          <p className=''>
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
            <Em inViewClassName='text-white'>£18,000 - £25,000</Em> and to take
            roughly <Em inViewClassName='text-white'>10 weeks.</Em>
          </p>
        </article>
      </Container>
    </section>
  )
}
export default EcommerceProduct
