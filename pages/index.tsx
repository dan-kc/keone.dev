import Footer from '@components/Footer'
import Header from '@components/Header'
import ProcessSection from '@page-components/index/ProcessSection'
import ProfileSection from '@page-components/index/ProfileSection'
import ReportSection from '@page-components/index/ReportSection'
import WhyMeSection from '@page-components/index/WhyMeSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Keone Cox | Web Designer \ Developer</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='A Performance focused Web Developer specialising in eCommerce. A User Behaviour focued Web Designer, specialising in Conversion Rate Optimisation.'
        />
        <meta
          name='keywords'
          content='contract web developer, website designer, freelance, digital marketing'
        />
        <meta name='author' content='Daniel Keone Cox' />
        <link rel='icon' href='/images/icons/code.svg' />
        <meta name='theme-color' content='#000000' />
      </Head>

      <div className='bg-black font-body text-[18px] md:text-[27px] lg:text-[36px]'>
        <Header />
        <main>
          <ProfileSection />
          <ReportSection />
          <WhyMeSection />
          <ProcessSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
