import List from '@components/List'

export default () => {
  return (
    <>
      <section id='scheduled' className='relative'>
        <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-orangeDark-10 border-b border-orangeDark-6 font-heading font-extrabold bg-sandDark-1'>
          Scheduled
        </h2>
        <div className='mt-8 py-2 px-4 w-fit text-base border border-grayDark-6 bg-grayDark-3/30 text-grayDark-11 rounded-lg'>
          Main objective: drive sales
        </div>
        <p className='mt-6 text-lg'>
          An eCommerce project selling made-to-order, ethically sourced fashion
          jewelry. More info soon - I'm very excited about this one!
        </p>

        <div className='mt-20 grid gap-7 lg:grid-cols-2'>
          <div>
            <h3 className='mb-1 text-3xl font-heading font-extrabold'>
              Design Tooling
            </h3>
            <List
              items={['Figma', 'FigJam']}
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
      </section>
    </>
  )
}
