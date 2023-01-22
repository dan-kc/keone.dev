import List from '@components/List'

const InProgress = () => {
  return (
    <section id='in-progress' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-orangeDark-10 border-b border-orangeDark-6 font-heading font-extrabold bg-sandDark-1'>
        In progress
      </h2>
      <div className='mt-8 py-2 px-4 w-fit text-base border border-grayDark-6 bg-grayDark-3/30 text-grayDark-11 rounded-lg'>
        Main objective: drive sales
      </div>
      <p className='mt-6 text-lg'>
        An elegant eCommerce department store selling modern art and luxury
        fashion.
        <br />
        <br />
        This project is still in the works, so more information will be
        available soon.
      </p>

      <div className='mt-20 grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='mb-1 text-3xl font-heading font-extrabold'>
            Design Tooling
          </h3>
          <List
            items={['Figma']}
            className='text-grayDark-11'
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
  )
}
export default InProgress
