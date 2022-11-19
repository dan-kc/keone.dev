import Head from 'next/head'
import EcommerceProduct from '@page-components/products/EcommerceProduct'
import PortfolioProduct from '@page-components/products/PortfolioProduct'
import LandingPageProduct from '@page-components/products/LandingPageProduct'
import AdditionalServices from '@page-components/products/AdditionalServices'
import Title from '@components/Title'
import Highlight, { ColorOptions } from '@components/Hightlight'

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Daniel Keone Cox</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main>
        <Title>
          Products, <Highlight color={ColorOptions.violet}>services</Highlight>{' '}
          and prices
        </Title>
        <EcommerceProduct />
        <PortfolioProduct />
        <LandingPageProduct />
        <AdditionalServices />
      </main>
    </>
  )
}
