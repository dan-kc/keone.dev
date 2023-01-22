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
        color='green'
        heading='Products, services and prices'
        subHeading={`I've packaged some of my services into products for your convenience and to help you get a general idea of my workflow, pricing and timescale.`}
      >
        <Ecommerce />
        <Portfolio />
        <LandingPage />
        <AdditionalServices />
      </PageContainer>
    </>
  )
}
