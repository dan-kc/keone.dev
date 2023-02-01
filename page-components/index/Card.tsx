interface Props {
  heading: string
  children: React.ReactNode
}

const Card = ({ heading, children }: Props) => {
  return (
    <article className='bg-skyDark-3/20 border border-skyDark-6 rounded-xl shadow p-6'>
      <h3 className='font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight text-skyDark-11'>
        {heading}
      </h3>
      <p className='mt-5 text-base lg:text-lg text-skyDark-12'>{children}</p>
    </article>
  )
}

export default Card
