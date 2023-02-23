import DoubleText from '@page-components/index/DoubleText'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const ProfileSection = () => {
  return (
    <section>
      <div className='px-3 overflow-hidden'>
        <article className='relative max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-2xl border border-grayDark-6 flex flex-col sm:flex-row-reverse overflow-hidden shadow bg-grayDark-3'>
          <div className='w-fit sm:w-[345px] md:w-[365px] lg:w-[390px] xl:w-[450px] flex-none border-b sm:border-none border-grayDark-6 z-10'>
            <Image
              src='/images/self-portrait-1.webp'
              alt='portrait'
              height={520.126}
              width={480}
              quality={100}
              priority
            />
          </div>
          <div className='p-6 flex flex-col justify-between z-10'>
            <div>
              <DoubleText />
              <p className='mt-4 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                Hire me to renovate your online business with a brand new
                website that exceeds the conversion rates of your competitors,
                so you can finally focus on your business.
              </p>
            </div>
            <div className='flex justify-end mt-6 md:mt-0'>
              <Link
                href='/profile'
                className='text-xl sm:text-base md:text-xl flex items-center gap-2 bg-grayDark-1 border border-grayDark-7 py-2 px-5 xl:py-3 xl:px-6 rounded-lg hover:border-grayDark-8 hover:bg-grayDark-1 font-heading font-semibold shadow-lg duration-100'
              >
                View Profile
                <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6' />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
export default ProfileSection
