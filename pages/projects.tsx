import Head from 'next/head'
import Keone from '@page-components/projects/Keone'
import InProgress from '@page-components/projects/InProgress'
import Scheduled from '@page-components/projects/Scheduled'
import Title from '@components/Title'
import Highlight, { Color } from '@components/Hightlight'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <Title>
          <Highlight color={Color.yellow}>Things</Highlight> I’m working on
        </Title>
        <Keone />
        <InProgress />
        <Scheduled />
      </main>
    </>
  )
}

export default Projects
