import Head from 'next/head'
import Plan from '@page-components/process/Plan'
import Highlight from '@components/Hightlight'
import Design from '@page-components/process/Design'
import Develop from '@page-components/process/Develop'
import Deploy from '@page-components/process/Deploy'
import QA from '@components/QA'
import Title from '@components/Title'
import { Color } from 'styles/color-config'

const Process = () => {
  return (
    <>
      <Head>
        <title>Process | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <Title>
          Wanna see how I <Highlight color={Color.cyan}>work?</Highlight>
        </Title>
        <Plan />
        <Design />
        <Develop />
        <Deploy />
        <QA />
      </main>
    </>
  )
}

export default Process
