import Header from '@components/Header'
import Head from 'next/head'
import Footer from '@components/Footer'
import Keone from '@page-components/projects/Keone'
import InProgress from '@page-components/projects/InProgress'
import Scheduled from '@page-components/projects/Scheduled'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Daniel Keone Cox</title>
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
        <meta name='theme-color' content='#000000' />
        <link rel='icon' href='/images/icons/code.svg' />
      </Head>
      <div className='bg-black font-body text-[18px] md:text-[20px] lg:text-[22px]'>
        <Header />
        <main>
          <Keone />
          <InProgress />
          <Scheduled />
          <Footer
          />
        </main>
      </div>
    </>
  )
}

export default Projects
