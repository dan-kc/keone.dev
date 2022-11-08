import Header from '@components/Header'
import Container, { Options } from '@components/Container'
import Head from 'next/head'
import Plan from '@page-components/process/Plan'
import Highlight from '@components/Hightlight'
import Design from '@page-components/process/Design'
import Develop from '@page-components/process/Develop'
import Deploy from '@page-components/process/Deploy'
import QA from '@components/QA'
import Footer from '@components/Footer'

const Process = () => {
  return (
    <>
      <Head>
        <title>Process | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='font-body text-base md:text-lg lg:text-xl text-anthracite-11 relative overflow-hidden'>
        <Header />
        <main className='z-50'>
          <div className='fixed top-24 md:top-24 lg:top-28 inset-x-0'>
            <Container size={Options.Small}>
              <h1 className='px-5 -z-50 inline-block font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-anthracite-10'>
                Wanna see how I <Highlight>work?</Highlight>
              </h1>
            </Container>
          </div>
          <Plan />
          <Design />
          <Develop />
          <Deploy />
          <QA />
          <Footer
            containerClassName='text-sageDark-12'
            headingClassName='text-pink-6'
          />
        </main>
      </div>
    </>
  )
}

export default Process
