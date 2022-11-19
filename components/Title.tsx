import Container, { Options } from '@components/Container'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
  return (
    <div className='my-24 md:my-28 lg:my-40'>
      <Container size={Options.sm}>
        <h1 className='px-5 -z-50 font-heading font-extrabold font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-anthracite-10 leading-tight sm:leading-tight md:leading-tight lg:leading-tight'>
          {children}
        </h1>
      </Container>
    </div>
  )
}
export default Title
