import List from '@components/List'
import Section from '@components/Section'
import Article from '@page-components/projects/ProjectsArticle'

export default () => {
  return (
    <Section heading='keone.dev' color='orange'>
      <Article mainObjective='generate leads'>
        <p>
          A sleek, modern, and interactive personal website that informs users
          about myself and my services.
          <br />
          <br />
          The homepage is designed to entice the user to scroll through an
          animated showcase of information so that they are adequately advised
          on how I can help them, before inviting the user to get in touch.
          <br />
          <br />
          To satiate the more curious user, there are links to supporting pages
          where I elaborate on some relevant topics, then once again provide the
          user with contact options.
          <br />
          <br />
          The website is developed using performance best practices and super
          lightweight technologies, which results in a lag-free user experience
          with stellar Lighthouse scores and Core Web Vitals.
        </p>
      </Article>

      <Article>
        <div className='grid gap-7 lg:grid-cols-2'>
          <div>
            <h3 className='mb-1 text-3xl font-heading font-extrabold'>
              Design Tooling
            </h3>
            <List
              items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
              className='text-lg text-slateDark-11'
              dashClassName='text-redDark-11'
            />
          </div>
          <div>
            <h3 className='mb-1 text-3xl font-heading font-extrabold'>
              Development Tooling
            </h3>
            <List
              items={['Typescript', 'React', 'Next.js', 'Tailwind CSS']}
              className='text-lg text-slateDark-11'
              dashClassName='text-redDark-11'
            />
          </div>
        </div>
      </Article>
      <p className='text-lg'>Deployed on Vercel.</p>
    </Section>
  )
}
