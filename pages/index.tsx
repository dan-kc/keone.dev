import ProcessSection from '@page-components/index/ProcessSection'
import ProfileSection from '@page-components/index/ProfileSection'
import ReportSection from '@page-components/index/ReportSection'
import WhyMeSection from '@page-components/index/WhyMeSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Keone Cox | Web Designer \ Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <main>
        <ProfileSection />
        <ReportSection />
        <WhyMeSection />
        <ProcessSection />
      </main>
    </>
  )
}
