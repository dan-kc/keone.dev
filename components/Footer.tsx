import Em from './Em'
import Link from './Link'
import Navbar from '@components/Navbar'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className='relative pt-20 lg:pt-40 pb-4'>
        <div className='relative flex w-full flex-col items-center px-3 md:px-8 lg:px-12'>
          <h2 className='text-5xl md:text-6xl lg:text-8xl font-heading font-extrabold mb-4 md:mb-10 text-center w-fit text-transparent bg-clip-text bg-gradient-to-br from-redDark-9 to-redDark-11 leading-tight md:leading-tight lg:leading-tight'>
            Get in touch!
          </h2>
          <p className='mt-2 px-4 mx-auto text-xl md:text-2xl lg:text-3xl text-center max-w-md md:max-w-xl lg:max-w-3xl leading-tight md:leading-tight lg:leading-tight'>
            My inbox is <Em>always open</Em>. Feel free to shoot me a message
            and I&apos;ll get back to you <Em>as soon as possible!</Em>
          </p>
          <Link
            mail
            className='font-heading font-bold border border-2 py-2 px-7 md:py-3 md:px-10 mb-20 mt-10 lg:mt-16 lg:mb-36 bg-redDark-3/20 hover:bg-redDark-4/20 border-redDark-6 hover:border-redDark-8 text-redDark-9 rounded-md md:rounded-lg shadow text-3xl md:text-4xl lg:text-5xl duration-200'
          >
            Say Hello
          </Link>
        </div>
        <Navbar />
      </footer>
    </>
  )
}
export default Footer
