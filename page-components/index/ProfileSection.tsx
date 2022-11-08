import DoubleText from '@page-components/index/DoubleText'
import Em from '@components/Em'
import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'

const ProfileSection = () => {
  return (
    <>
      <section className='py-20 md:py-40 lg:px-7 bg-black'>
        <Container size={Options.Large}>
          <DoubleText />
          <div className='pr-[calc(6.25vw+10px)] md:pr-[calc(12.5vw+20px)] text-grayDark-12'>
            <p className='mt-5'>
              Renovate your online business with a brand new website that{' '}
              <Em inViewClassName='text-white'>exceeds the conversion rates</Em>{' '}
              of your competitors, so you can{' '}
              <Em inViewClassName='text-white'>
                finally focus on your business.
              </Em>
            </p>
          </div>
          <div className='mt-20 flex justify-end'>
            <AnimatedLink
              underlineClassName='bg-white'
              mail={false}
              thick={true}
              href='deloitte.com/content/dam/Deloitte/ie/Documents/Consulting/Milliseconds_Make_Millions_report.pdf'
              linkClassName='font-heading text-[24px] md:text-[36px] lg:text-[48px] text-white'
            >
              View Profile
            </AnimatedLink>
          </div>
        </Container>
      </section>
    </>
  )
}
export default ProfileSection
