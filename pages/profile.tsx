import Head from 'next/head'
import Bio from '@page-components/profile/Bio'
import Highlight, { Color } from '@components/Hightlight'
import Title from '@components/Title'

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className='font-body text-base lg:text-lg'>
        <Title>
          Who does this guy{' '}
          <Highlight color={Color.emerald}>think</Highlight> he is?
        </Title>
        <Bio />
      </main>
    </>
  )
}
