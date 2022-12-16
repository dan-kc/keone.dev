import Head from 'next/head'
import Keone from '@page-components/projects/Keone'
import InProgress from '@page-components/projects/InProgress'
import Scheduled from '@page-components/projects/Scheduled'
import PageContainer from '@components/PageContainer'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <PageContainer
        color='crimson'
        heading={`Things I'm working on`}
        subHeading={`Hello, I'm Daniel - a mathematician from London providing services in web design and development.`}
      >
        <Keone />
        <InProgress />
        <Scheduled />
      </PageContainer>
    </>
  )
}

export default Projects
