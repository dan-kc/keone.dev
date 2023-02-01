import AnimatedLink from '@components/AnimatedLink'
import Section from '@components/Section'
import Article from '@page-components/process/ProcessArticle'
import ExtraInfo from '@page-components/process/ExtraInfo'

const Plan = () => {
  return (
    <Section heading='Plan' color='sky'>
      <Article stepNumber={1} heading='Shoot me an email'>
        <p>
          Here's an <AnimatedLink mail> email template </AnimatedLink> to help
          get things started.
          <br />
          <br />
          I know how businesses work and how frustrating it can be when all you
          want is a quote but instead you’re having to endure a drawn out email
          exchange that feels like it’s going nowhere - made even worse when
          quoted terms in the end don’t even work for you!
          <br />
          <br />
          So, to spare you from that ordeal, I've structured the email template
          to clearly outline everything that I need to know in order to
          accurately gauge the scope of your project and give you an instant
          quote on timescale and cost.
          <br />
          <br />
          In fact, if the email is detailed enough, I’m confident I can give you
          that quote you’re looking for in my very first email back! Along with
          some suggestions of features worth implementing.
          <br />
          <br />
          Get in touch - I can't wait to learn all about your business!
        </p>
      </Article>

      <Article stepNumber={2} heading='We discuss & agree terms'>
        <p>Yep... That’s really all it takes to get started!</p>
      </Article>

      <ExtraInfo bulletPoints={['Design deposit']} />
    </Section>
  )
}

export default Plan
