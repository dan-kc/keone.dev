import AnimatedLink from '@components/AnimatedLink'
import FadeIn from '@components/FadeIn'

const Design = () => {
  return (
    <section id='design' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-skyDark-11 border-b border-skyDark-6 font-heading font-extrabold bg-slateDark-1'>
        Design
      </h2>

      <p className='mt-8 font-display text-base text-skyDark-11'>Step 3/9</p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Moodboard
      </h3>
      <p className='mt-3 text-lg'>
        First thing's first, let's define a design direction for your website.
        <br />
        <br />
        I'll make a moodboard for us so that we can easily share design
        inspiration with one another.
        <br />
        <br />
        This will instantly give you a space where you can show me any existing
        design material you may have, such as logos, colours, typography,
        photography, other websites that you really like, or even entire other
        moodboards. Feel free to add anything!
        <br />
        <br />
        I'll be steadily populating the moodboard with complementary material,
        mainly in the form of other website designs. Simply let me know what you
        like and dislike, and I'll reflect your feedback in the future designs.
        <br />
        <br />
        Moodboards often capture ideas that would otherwise be lost in
        translation when only describing things verbally, saving you time and
        money by avoiding additional revision requests later down the line.
      </p>

      <p className='mt-20 font-display text-base text-skyDark-11'>
        Step 4/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Sitemap
      </h3>
      <div className='mt-3 text-lg'>
        Shortly after receiving the moodboard you'll also be given a sitemap
        diagram which will outline the structure of your website and give you a
        bird's-eye view of the user journey.
        <br />
        <br />
        Even better, you'll receive this diagram, the moodboard, and all other
        design work on{' '}
        <AnimatedLink href='https://www.figma.com/figjam/' newTab>
          FigJam
        </AnimatedLink>
        , making live feedback an absolute breeze. This keeps me continually
        informed on your style preferences and what you envision the end product
        to look like.
      </div>

      <p className='mt-20 font-display text-base text-skyDark-11'>
        Step 5/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Wireframe
      </h3>
      <p className='mt-3 text-lg'>
        Next, I'll give you a detailed wireframe for each page of your website.
        <br />
        <br />
        Wireframes are skeletal illustrations of a page’s interface. They
        communicate what content is being prioritised and, most importantly, the
        intended user behaviours.
        <br />
        <br />
        Defining a good interface structure is the most important part of
        designing your website because it directly focuses on fulfilling your
        business’ key objectives.
      </p>

      <p className='mt-20 font-display text-base text-skyDark-11'>
        Step 6/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight'>
        Final Designs
      </h3>
      <p className='mt-3 text-lg'>
        For the final designs I'll populate the wireframes with your content,
        such as product images or text, and modify the wireframes to reflect
        your style preferences from the moodboard.
        <br />
        <br />
        Since the goal of this stage is to fine-tune, we'll conduct three review
        rounds so you can be absolutely certain that the designs meet your
        expectations.
        <br />
        <br />
        Adjusting these final designs is my favourite part of the design process
        because I finally get to fully hone in on your vision.
      </p>

      <FadeIn className='mt-20' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Three review rounds</span>
        </p>
      </FadeIn>

      <FadeIn className='mt-6' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Payment following design completion</span>
        </p>
      </FadeIn>

      <FadeIn className='mt-6' from={-10}>
        <p className='text-2xl font-heading font-extrabold flex gap-2'>
          <span>-</span>
          <span>Development deposit</span>
        </p>
      </FadeIn>
    </section>
  )
}

export default Design
