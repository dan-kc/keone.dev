import PageContainer from '@components/PageContainer'
import Head from 'next/head'
import Plan from '@page-components/process/Plan'
import Design from '@page-components/process/Design'
import Develop from '@page-components/process/Develop'
import Deploy from '@page-components/process/Deploy'
import QA from '@components/QA'

const Process = () => {
  return (
    <>
      <Head>
        <title>Process | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <PageContainer
        color='purple'
        heading={`Wanna see how I work?`}
        subHeading={`Hello, I'm Daniel - a mathematician from London providing services in web design and development.`}
      >
        <Plan />
        <Design />
        <Develop />
        <Deploy />
        <QA />
      </PageContainer>
    </>
  )
}

export default Process
