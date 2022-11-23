import DoubleText from '@page-components/index/DoubleText'
import Em from '@components/Em'
import AnimatedLink from '@components/AnimatedLink'
import Container, { Options } from '@components/Container'
import { FaArrowRight } from 'react-icons/fa'

const ProfileSection = () => {
  return (
    <section className='py-20 md:py-40'>
      <Container size={Options.md}>
        <DoubleText />
        <div className='pr-[calc(6.25%+10px)] md:pr-[calc(30.5%+20px)]'>
          <p className='mt-5'>
            Renovate your online business with a brand new website that{' '}
            <Em>exceeds the conversion rates</Em> of your competitors, so you
            can <Em>finally focus on your business.</Em>
          </p>
        </div>

        <div className='flex justify-end pt-20 md:pt-40 font-heading leading-tight font-extrabold text-2xl md:text-3xl lg:text-4xl'>
          <AnimatedLink
            href='/profile'
            linkClassName='flex gap-1 items-center'
          >
            View profile
              <FaArrowRight className='w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7' />
          </AnimatedLink>
        </div>
      </Container>
    </section>
  )
}
export default ProfileSection
