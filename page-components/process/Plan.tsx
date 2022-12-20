import AnimatedLink from '@components/AnimatedLink'
import FadeIn from '@components/FadeIn'

const Plan = () => {
  return (
    <section id='plan' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-purpleDark-11 border-b border-purpleDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Plan
      </h2>
      <p className='mt-8 font-display text-base text-purpleDark-11'>Step 1/9</p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Shoot me an email
      </h3>
      <p className='mt-3 text-lg'>
        Here's an <AnimatedLink mail> email template </AnimatedLink> to help get
        things started.
        <br />
        <br />
        I know how businesses work and how frustrating it can be when all you
        want is a quote but instead you’re having to endure a drawn out email
        exchange that feels like it’s going nowhere - made even worse when
        quoted terms in the end don’t even work for you!
        <br />
        <br />
        So, to spare you from that ordeal, I've structured the email template to
        clearly outline everything that I need to know in order to accurately
        gauge the scope of your project and give you an instant quote on
        timescale and cost.
        <br />
        <br />
        In fact, if the email is detailed enough, I’m confident I can give you
        that quote you’re looking for in my very first email back! Along with
        some suggestions of features worth implementing.
        <br />
        <br />
        Get in touch - I can't wait to learn all about your business!
      </p>

      <p className='mt-20 font-display text-base text-purpleDark-11'>
        Step 2/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        We discuss & agree terms
      </h3>
      <p className='mt-3 text-lg'>
        Yep... That’s really all it takes to get started!
      </p>

      <FadeIn className='mt-20' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Design deposit</span>
        </p>
      </FadeIn>
    </section>
  )
}

export default Plan
