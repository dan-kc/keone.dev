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
        color='orange'
        heading={`Things I'm working on`}
        subHeading={`I'll be be updating this page whenever I finish, start or schedule a new project, so feel free to revisit in the future to see more works!`}
      >
        <Keone />
        <InProgress />
        <Scheduled />
      </PageContainer>
    </>
  )
}

export default Projects
