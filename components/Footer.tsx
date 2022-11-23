import Em from './Em'
import Link from './Link'
import Navbar from '@components/Navbar'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className='relative pt-16 md:pt-20 pb-2 bg-anthracite-1'>
        <div className='relative flex w-full flex-col items-center px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-24'>
          <h2 className='text-4xl md:text-6xl lg:text-8xl font-heading font-extrabold mb-4 md:mb-10 text-center text-rose-700 leading-tight md:leading-tight lg:leading-tight'>
            Get in touch!
          </h2>
          <p className='mt-2 px-4 mx-auto mb-8 md:mb-16 lg:mb-20 text-xl md:text-2xl lg:text-3xl text-center max-w-lg md:max-w-xl lg:max-w-3xl leading-tight md:leading-tight lg:leading-tight'>
            My inbox is <Em>always open</Em>. Feel free to shoot me a message
            and I&aposll get back to you <Em>as soon as possible!</Em>
          </p>

          <Link
            mail
            className='font-heading font-extrabold border border-2 py-2 px-4 md:py-3 md:px-7 lg:py-5 lg:px-8 mb-10 bg-rose-900/20 border-rose-700 hover:border-rose-600 text-rose-700 hover:text-rose-600 rounded-md md:rounded-lg shadow-2xl text-2xl md:text-4xl lg:text-5xl duration-100'
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
