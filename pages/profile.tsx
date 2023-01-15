import Head from 'next/head'
import Why from '@page-components/profile/Why'
import DesignSkills from '@page-components/profile/DesignSkills'
import DevelopmentSkills from '@page-components/profile/DevelopmentSkills'
import PageContainer from '@components/PageContainer'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <PageContainer
        color='violet'
        heading={'Who does this guy think he is?'}
        subHeading={`Hello, I'm Daniel - a mathematician from London providing services in web design and development.`}
      >
        <Why />
        <DesignSkills />
        <DevelopmentSkills />
      </PageContainer>
    </>
  )
}
