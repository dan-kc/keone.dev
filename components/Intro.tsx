import Container, { Options } from '@components/Container'

export default function Intro({ title }) {
  return (
    <Container size={Options.Small}>
      <h1 className='my-[60px] md:my-[120px] font-heading text-[60px] md:text-[75px] lg:text-[90px] text-white'>
        {title}
      </h1>
    </Container>
  )
}
