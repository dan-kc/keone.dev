import List from '@components/List'

const DevelopmentCompetencies = () => {
  return (
    <section id='DevelopmentCompetencies' className='relative'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-violetDark-11 border-b border-violetDark-6 font-heading font-extrabold bg-mauveDark-2'>
        Development Competencies
      </h2>
      <div className='mt-8 grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='text-xl mb-1'>Languages</h3>
          <List
            items={['Typescript / Javascript', 'HTML / CSS', 'Go']}
            className='text-lg text-mauveDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Frameworks</h3>
          <List
            items={['React', 'Next.js', 'Remix', 'Astro']}
            className='text-lg text-mauveDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
        <div>
          <h3 className='text-xl mb-1'>Deployment / CMS Solutions</h3>
          <List
            items={['Vercel', 'Fly.io', 'Crystalise', 'Shopify', 'Prismic']}
            className='text-lg text-mauveDark-11'
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
            ]}
            className='text-lg text-mauveDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
      </div>
    </section>
  )
}
export default DevelopmentCompetencies
