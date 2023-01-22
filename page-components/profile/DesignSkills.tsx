import List from '@components/List'

const DesignSkills = () => {
  return (
    <section id='designSkills' className='relative mb-14'>
      <h2 className='sticky z-10 -ml-[1px] top-0 pt-6 text-3xl text-violetDark-11 border-b border-violetDark-6 font-heading font-extrabold bg-grayDark-1'>
        Design skills
      </h2>
      <div className='mt-8 grid gap-7 lg:grid-cols-2'>
        <div>
          <h3 className='text-xl mb-1'>Software</h3>
          <List
            items={['Figma', 'Adobe Illustrator', 'Adobe After Effects']}
            className='text-lg text-grayDark-11'
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
            className='text-lg text-grayDark-11'
            dashClassName='text-violetDark-11'
          />
        </div>
      </div>
    </section>
  )
}
export default DesignSkills
