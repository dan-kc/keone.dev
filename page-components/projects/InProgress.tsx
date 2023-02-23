import List from '@components/List'
import Section from '@components/Section'
import Article from '@page-components/projects/ProjectsArticle'

const InProgress = () => {
  return (
    <Section heading='In Progress' color='orange'>
      <Article mainObjective='drive sales'>
        <p>
          An elegant eCommerce department store selling modern art and luxury
          fashion.
          <br />
          <br />
          This project is still in the works, so more information will be
          available soon.
        </p>
      </Article>

      <Article>
        <div className='grid gap-7 lg:grid-cols-2'>
          <div>
            <h3 className='mb-1 text-3xl font-heading font-extrabold'>
              Design Tooling
            </h3>
            <List
              items={['Figma', 'FigJam']}
              className='text-slateDark-11'
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
    </Section>
  )
}
export default InProgress
