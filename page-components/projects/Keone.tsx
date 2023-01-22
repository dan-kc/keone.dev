import List from '@components/List'

export default () => {
  return (
    <section id='keone' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-orangeDark-10 border-b border-orangeDark-6 font-heading font-extrabold bg-sandDark-1'>
        keone.dev
      </h2>
      <div className='mt-8 py-2 px-4 w-fit text-base border border-grayDark-6 bg-grayDark-3/30 text-grayDark-11 rounded-lg'>
        Main objective: generate leads
      </div>
      <p className='mt-6 text-lg'>
        A sleek, modern, and interactive personal website that informs users
        about myself and my services.
        <br />
        <br />
        The homepage is designed to entice the user to scroll through an
        animated showcase of information so that they are adequately advised on
        how I can help them, before inviting the user to get in touch.
        <br />
        <br />
        To satiate the more curious user, there are links to supporting pages
        where I elaborate on some relevant topics, then once again provide the
        user with contact options.
        <br />
        <br />
        The website is developed using performance best practices and
        super lightweight technologies, which results in a lag-free user experience
        with stellar Lighthouse scores and Core Web Vitals.
      </p>

      <div className='mt-20 grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='mb-1 text-3xl font-heading font-extrabold'>
            Design Tooling
          </h3>
          <List
            items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
            className='text-lg text-grayDark-11'
            dashClassName='text-redDark-11'
          />
        </div>
        <div>
          <h3 className='mb-1 text-3xl font-heading font-extrabold'>
            Development Tooling
          </h3>
          <List
            items={['Typescript', 'React', 'Next.js', 'Tailwind CSS']}
            className='text-lg text-grayDark-11'
            dashClassName='text-redDark-11'
          />
        </div>
      </div>
      <p className='mt-20 text-lg'>Deployed on Vercel.</p>
    </section>
  )
}
