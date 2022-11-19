import DoubleText from '@page-components/index/DoubleText'
import Em from '@components/Em'
import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const ProfileSection = () => {
  return (
    <section className='py-20 md:py-40'>
      <DoubleText />
      <Container size={Options.md}>
        <div className='pr-[calc(6.25%+10px)] md:pr-[calc(30.5%+5rem)]'>
          <p className='mt-5'>
            Renovate your online business with a brand new website that{' '}
            <Em inViewClassName='text-white'>exceeds the conversion rates</Em>{' '}
            of your competitors, so you can{' '}
            <Em inViewClassName='text-white'>
              finally focus on your business.
            </Em>
          </p>
        </div>
        <div className='flex justify-end pt-20 md:pt-40 bg-anthracite-1'>
          <AnimatedLink
            mail={false}
            href='/profile'
            thick={false}
            newTab={false}
            linkClassName='font-heading leading-tight font-extrabold text-xl md:text-2xl lg:text-3xl text-white flex gap-1 items-center'
            underlineClassName='bg-white'
          >
            View profile
            <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
          </AnimatedLink>
        </div>
      </Container>
    </section>
  )
}
export default ProfileSection
