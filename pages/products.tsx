import Head from 'next/head'
import PageContainer from '@components/PageContainer'
import Portfolio from '@page-components/products/Portfolio'
import Ecommerce from '@page-components/products/Ecommerce'
import LandingPage from '@page-components/products/LandingPage'
import AdditionalServices from '@page-components/products/AdditionalServices'

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <PageContainer
        color="tomato"
        heading='Products, services and prices'
        subHeading={`Hello, I'm Daniel - a mathematician from London providing services in web design and development.`}
      >
        <Ecommerce />
        <Portfolio />
        <LandingPage />
        <AdditionalServices />
      </PageContainer>
    </>
  )
}
