
interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  heading?: string
  children: React.ReactNode
}

const Section = ({ heading, children }: Props) => {
  return (
    <section className='relative mb-10'>
      <h2 className='sticky top-0 pt-6 text-2xl text-violetDark-11 border-b border-violetDark-6 font-heading font-extrabold bg-mauveDark-2'>
        {heading}
      </h2>
      {children}
    </section>
  )
}

export default Section
