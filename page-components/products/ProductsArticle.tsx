interface Props {
  heading?: string
  children: React.ReactNode
}

const ProductsArticle = ({ heading, children }: Props) => {
  return (
    <article className='text-lg'>
      {heading ? (
        <h3 className='text-4xl font-heading font-extrabold leading-tight mb-3'>
          {heading}
        </h3>
      ) : null}
      {children}
    </article>
  )
}

export default ProductsArticle
