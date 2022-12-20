import PageContainer from '@components/PageContainer'
import Head from 'next/head'
import Plan from '@page-components/process/Plan'
import Design from '@page-components/process/Design'
import Develop from '@page-components/process/Develop'
import Deploy from '@page-components/process/Deploy'
import QA from '@page-components/process/QA'

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
        subHeading={`Have a scroll through my 9-step process to learn how my workflow suits your business.`}
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
