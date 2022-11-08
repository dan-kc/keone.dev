import Em from '@components/Em'
import Container, { Options } from '@components/Container'

export default function Bio() {
  return (
    <section className='text-oliveDark-12 pb-[60px] lg:pb-[80px] bg-gradient-to-b from-black via-violet-1 to-black'>
      <Container size={Options.Small}>
        <h1 className='py-[60px] md:mp-[80px] font-heading text-[60px] md:text-[75px] lg:text-[90px] bg-clip-text text-transparent bg-gradient-to-r from-magenta-6 to-violet-10'>
          Who does this guy think he is?
        </h1>
        <article>
          <div className='mt-[10px] lg:mt-5 bg-slateDark-2 aspect-video mb-10 lg:mb-[60px]' />
          <p className='mb-5 lg:mb-[30px]'>
            Hello I’m Daniel, a mathematician from London offering services in
            <Em> Web Design </Em>
            and
            <Em> Development</Em>.
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            I’ve been fervently programming ever since I first encountered it in
            my maths degree at University of Bath, and, after delving into
            research papers on behavioural design while procrastinating my
            degree, I’ve also become fascinated by the
            <Em> science behind great UX/UI</Em>.
          </p>
          <p className='mb-5 lg:mb-[30px]'>
            These interests in tandem have abruptly steered my trajectory away
            from a career in finance, to a career
            <Em> designing and developing engaging web experiences</Em>-
            inspiring me to spend 3 years after my degree learning the web and
            all it’s intricacies.
          </p>
          <p>
            And I <Em>haven't looked back!</Em>
          </p>
        </article>
      </Container>
    </section>
  )
}
