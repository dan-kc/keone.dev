import List from '@components/List'

const DevelopmentSkills = () => {
  return (
    <section id='DevelopmentSkills' className='relative'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-violetDark-11 border-b border-violetDark-6 font-heading font-extrabold bg-grayDark-1'>
        Development skills
      </h2>
      <div className='mt-8 grid gap-7 lg:grid-cols-2'>
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
            items={['Vercel', 'Shopify', 'Crystalise', 'Fly.io', 'Prismic']}
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
    </section>
  )
}
export default DevelopmentSkills
