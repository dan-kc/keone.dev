import ProcessSection from '@page-components/index/ProcessSection'
import ProfileSection from '@page-components/index/ProfileSection'
import MetricsSection from '@page-components/index/MetricsSection'
import Head from 'next/head'
// pt-20 lg:pt-36 pb-4 md:pb-2
export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Keone Cox | Web Designer \ Developer</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className="flex flex-col gap-36 lg:gap-52 pt-12 lg:pt-32 ">
        <ProfileSection />
        <MetricsSection />
        <ProcessSection />
      </main>
    </>
  )
}
