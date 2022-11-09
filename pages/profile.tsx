import Header from '@components/Header'
import Head from 'next/head'
import Bio from '@page-components/profile/Bio'
import Extra from '@page-components/profile/Extra'
import Skills from '@page-components/profile/Skills'
import Footer from '@components/Footer'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Daniel Keone Cox</title>
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
        <meta name='theme-color' content='black' />
        <link rel='icon' href='/images/icons/code.svg' />
      </Head>
      <div className='bg-black font-body text-[18px] md:text-[20px] lg:text-[22px]'>
        <Header />
        <main>
          <Bio />
          <Extra />
          <Skills />
        </main>
        <Footer
        />
      </div>
    </>
  )
}
