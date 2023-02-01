import AnimatedLink from '@components/AnimatedLink'
import Section from '@components/Section'
import Article from '@page-components/process/ProcessArticle'
import ExtraInfo from '@page-components/process/ExtraInfo'

const Design = () => {
  return (
    <Section heading='Design' color='sky'>
      <Article stepNumber={3} heading='Moodboard'>
        <p>
          First thing's first, let's define a design direction for your website.
          <br />
          <br />
          I'll make a moodboard for us so that we can easily share design
          inspiration with one another.
          <br />
          <br />
          This will instantly give you a space where you can show me any
          existing design material you may have, such as logos, colours,
          typography, photography, other websites that you really like, or even
          entire other moodboards. Feel free to add anything!
          <br />
          <br />
          I'll be steadily populating the moodboard with complementary material,
          mainly in the form of other website designs. Simply let me know what
          you like and dislike, and I'll reflect your feedback in the future
          designs.
          <br />
          <br />
          Moodboards often capture ideas that would otherwise be lost in
          translation when only describing things verbally, saving you time and
          money by avoiding additional revision requests later down the line.
        </p>
      </Article>

      <Article stepNumber={4} heading='Sitemap'>
        <p>
          Shortly after receiving the moodboard you'll also be given a sitemap
          diagram which will outline the structure of your website and give you
          a bird's-eye view of the user journey.
          <br />
          <br />
          Even better, you'll receive this diagram, the moodboard, and all other
          design work on{' '}
          <AnimatedLink href='https://www.figma.com/figjam/' newTab>
            FigJam
          </AnimatedLink>
          , making live feedback an absolute breeze. This keeps me continually
          informed on your style preferences and what you envision the end
          product to look like.
        </p>
      </Article>

      <Article stepNumber={5} heading='Wireframe'>
        <p>
          Next, I'll give you a detailed wireframe for each page of your
          website.
          <br />
          <br />
          Wireframes are skeletal illustrations of a page’s interface. They
          communicate what content is being prioritised and, most importantly,
          the intended user behaviours.
          <br />
          <br />
          Defining a good interface structure is the most important part of
          designing your website because it directly focuses on fulfilling your
          business’ key objectives.
        </p>
      </Article>

      <Article stepNumber={6} heading='Final Designs'>
        <p>
          For the final designs I'll populate the wireframes with your content,
          such as product images or text, and modify the wireframes to reflect
          your style preferences from the moodboard.
          <br />
          <br />
          Since the goal of this stage is to fine-tune, we'll conduct three
          review rounds so you can be absolutely certain that the designs meet
          your expectations.
          <br />
          <br />
          Adjusting these final designs is my favourite part of the design
          process because I finally get to fully hone in on your vision.
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={[
          'Three review rounds',
          'Payment following design completion',
          'Development deposit',
        ]}
      />
    </Section>
  )
}

export default Design
