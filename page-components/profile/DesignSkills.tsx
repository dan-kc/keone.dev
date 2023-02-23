import List from '@components/List'
import Section from '@components/Section'

const DesignSkills = () => {
  return (
    <Section heading='Design Skills' color='violet'>
      <div className='grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='text-xl mb-1'>Software</h3>
          <List
            items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
            className='text-lg text-slateDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Expertise</h3>
          <List
            items={[
              'Behavioural web design',
              'Checkout funnels',
              'Landing pages',
            ]}
            className='text-lg text-slateDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
      </div>
    </Section>
  )
}
export default DesignSkills
