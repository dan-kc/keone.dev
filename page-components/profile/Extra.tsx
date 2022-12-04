import Container, { Options } from '@components/Container'

export default function Extra() {
  return (
    <section className='pb-[60px] lg:pb-[80px] pt-[10px] lg:pt-5 text-oliveDark-12 bg-black from-black via-grassDark-1 to-black'>
      <Container size={Options.md}>
        <h2 className='text-yellow pb-5 font-heading font-extrabold text-[30px] md:text-[34px] lg:text-[42px] md:order-1'>
          More about me
        </h2>
        <p >
          I love doing weekly, monthly and yearly challenges. Last year my
          challenge was no meat. This year it’s no chocolate. Next year it’s no
          United Kingdom and no deep fried food- both very bad for you.
        </p>
      </Container>
    </section>
  )
}
