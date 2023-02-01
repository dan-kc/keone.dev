import List from '@components/List'
import Section from '@components/Section'

const DevelopmentSkills = () => {
  return (
    <Section heading='Development Skills' color='violet' last>
      <div className='grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='text-xl mb-1'>Languages</h3>
          <List
            items={['Typescript / Javascript', 'HTML / CSS', 'Go']}
            className='text-lg text-grayDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Frameworks</h3>
          <List
            items={['React', 'Next.js', 'Remix', 'Astro', 'Node.js']}
            className='text-lg text-grayDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Deployment / CMS Solutions</h3>
          <List
            items={['Vercel', 'Shopify', 'Crystallize', 'Fly.io', 'Prismic']}
            className='text-lg text-grayDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Expertise</h3>
          <List
            items={[
              'Super fast eCommerce storefronts',
              'Web animations (GSAP, Lottie, Framer Motion)',
              'Edge deployment',
              'API servers',
            ]}
            className='text-lg text-grayDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
      </div>
    </Section>
  )
}
export default DevelopmentSkills
