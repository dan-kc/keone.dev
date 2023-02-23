import List from '@components/List'
import Section from '@components/Section'
import Article from '@page-components/projects/ProjectsArticle'

export default () => {
  return (
    <Section heading='Scheduled' color='orange' last>
      <Article mainObjective='drive sales'>
        <p>
          An eCommerce project selling made-to-order, ethically sourced fashion
          jewelry. More info soon - I'm very excited about this one!
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
    </Section>
  )
}
