import List from '@components/List'
import AnimatedLink from '@components/AnimatedLink'

const Ecommerce = () => {
  return (
    <section id='ecommerce' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-tomatoDark-11 border-b border-tomatoDark-6 font-heading font-extrabold bg-mauveDark-2'>
        eCommerce Store
      </h2>
      <p className='mt-8 text-lg'>
        Reinvent your online business with a brand new, bespoke eCommerce
        storefront that’s designed from the ground up to drive sales, and is
        developed using the fastest, most reliable web frameworks available!
      </p>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Design
      </h3>
      <div className='mt-3 text-lg '>
        Your new storefront will be designed to:
        <br />
        <br />
        <List
          dashClassName='text-tomatoDark-11'
          items={[
            'Attract new users',
            'Convert users into customers',
            'Maximise sales from each customer',
            'Achieve any unique business requirements',
          ]}
        />
        <br />
        CRO (Conversion Rate Optimisation) is a crucial aspect of my design
        process for every page, especially the checkout, where I’ll apply my
        expertise in behavioural design to create a funnel that’s bespoke to
        your business’ needs.
        <br />
        <br />
        And don’t worry about your website being responsive, I design mobile
        first!
      </div>
      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Development
      </h3>
      <div className='mt-3 text-lg '>
        My favourite web frameworks for eCommerce storefronts are{' '}
        <AnimatedLink href='https://nextjs.org/' newTab>
          Next.js
        </AnimatedLink>
        , which is used by huge corporations such as Target and Nike, and{' '}
        <AnimatedLink href='https://remix.run/' newTab>
          Remix
        </AnimatedLink>
        , which is a newer technology that boasts even better performance in
        many cases.
      </div>
      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Content Management
      </h3>
      <div className='mt-3 text-lg '>
        My go-to headless eCommerce solution is{' '}
        <AnimatedLink href='https://www.shopify.com' newTab>
          {' '}
          Shopify
        </AnimatedLink>
        .
        <br />
        <br />
        Along with being secure, versatile, and future proof, Shopify is also
        equipped with a simple, intuitive user interface that makes updating
        your website with new content or adding new products a breeze for you
        and your team.
        <br />
        <br />
        Shopify also boast{' '}
        <AnimatedLink href='https://www.shopify.com/id/pricing' newTab>
          incredible value
        </AnimatedLink>{' '}
        in a market where other solutions can mean yearly bills of $50,000
        (Elastic Path) up to as much as $300,000 (CommerceTools).
        <br />
        <br />
        These other solutions often come with a slew of bells and whistles, but
        for most businesses these extra features are left unused, eating into
        your business’ money pot.
        <br />
        <br />
        But keep in mind that I'm platform agnostic. If you already have a
        headless eCommerce solution that you want to stick with, that's fine
        with me!
        <br />
        <br />
        What’s more, if you have a fast approaching deadline or a limited
        budget, such that I’m not afforded enough time to design and develop a
        fully custom storefront, I'll gladly adapt my designs to fit one of
        Shopify's templates.
        <br />
        <br />
        On the other end of the spectrum, if you require not only a custom
        storefront, but also a custom backend system, I'll build a solution that
        meets your exact business needs on top of a Product Information
        Management (PIM) system like{' '}
        <AnimatedLink
          href='https://crystallize.com/#this-is-crystallize'
          newTab
        >
          Crystalize
        </AnimatedLink>
        .
      </div>

      <h3 className='mt-20 text-4xl font-heading font-extrabold leading-tight'>
        Price & Timescale
      </h3>
      <p className='mt-3 text-lg '>
        Ecommerce stores vary hugely in scope and feature set, and as a result,
        they also vary hugely in cost and turnaround time.
        <br />
        <br />
        My best estimate is that for the design, development and deployment of a
        mid-featured, blazingly fast eCommerce store, it will cost between
        £9,500 and £18,500 and take between 9 and 14 weeks to complete.
      </p>
    </section>
  )
}
export default Ecommerce
