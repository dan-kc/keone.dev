interface Props {
  heading?: string;
  children: React.ReactNode;
}

const ProductsArticle = ({ heading, children }: Props) => {
  return (
    <article className="text-lg">
      {heading ? (
        <h3 className="mb-3 font-heading text-4xl font-extrabold leading-tight">
          {heading}
        </h3>
      ) : null}
      {children}
    </article>
  );
};

export default ProductsArticle;
