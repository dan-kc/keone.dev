import DoubleText from '@page-components/index/DoubleText'
import Link from 'next/link'
import Image from 'next/image'
import Em from '@components/Em'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import MorphGraphic from '@components/MorphGraphic'

const ProfileSection = () => {
  return (
    <section>
      <div className='px-3 pt-20 md:pt-40 overflow-hidden'>
        <article className='relative max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-2xl border border-grayDark-6 flex flex-col sm:flex-row-reverse overflow-hidden shadow bg-grayDark-3'>
          <div className='w-fit sm:w-[360px] md:w-[395px] lg:w-[450px] xl:w-[480px] flex-none border-b sm:border-none border-grayDark-6 z-10'>
            <Image
              src='/images/self-portrait-1.webp'
              alt='portrait'
              height={520.126}
              width={480}
              quality={100}
            />
          </div>
          <div className='pt-6 pb-6 px-4 sm:pb-4 md:pb-6 flex flex-col justify-between z-10'>
            <div className='md:pl-2'>
              <DoubleText />
              <p className='pt-3 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
                Let me renovate your online business with a brand new website
                that <Em>exceeds the conversion rates</Em> of your competitors,
                so you can <Em> finally focus on your business</Em>.
              </p>
            </div>
            <div className='flex justify-end mt-8 sm:mt-0 md:pr-2'>
              <Link
                href='/profile'
                className='flex items-center gap-2 bg-grayDark-1 border border-grayDark-7 py-2 px-5 rounded-lg hover:border-grayDark-8 hover:bg-grayDark-2 font-heading font-bold shadow-lg text-xl sm:text-base md:text-xl'
              >
                View Profile
                <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6' />
              </Link>
            </div>
          </div>
          <MorphGraphic className='absolute -bottom-[20px] -left-[230px] sm:-left-[330px] sm:w-[900px] md:-left-[280px] lg:-left-[250px] h-[270px] w-[800px] pointer-events-none' />
        </article>
      </div>
      <div className='h-20 md:h-40 bg-gradient-to-b from-mauveDark-1 to-mauveDark-2' />
    </section>
  )
}
export default ProfileSection
