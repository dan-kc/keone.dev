import Em from './Em'
import Link from './Link'
import Navbar from '@components/Navbar'
import { useRouter } from 'next/router'
import classNames from 'classnames'

interface Props {}

const colorClassNames = {
  tomato: {
    header: 'from-tomatoDark-9 to-tomatoDark-11',
    button:
      'bg-tomatoDark-3/20 hover:bg-tomatoDark-4/20 border-tomatoDark-6 hover:border-tomatoDark-8 text-tomatoDark-9',
  },
  violet: {
    header: 'from-violetDark-9 to-violetDark-11',
    button:
      'bg-violetDark-3/20 hover:bg-violetDark-4/20 border-violetDark-6 hover:border-violetDark-8 text-violetDark-9',
  },
  crimson: {
    header: 'from-crimsonDark-9 to-crimsonDark-11',
    button:
      'bg-crimsonDark-3/20 hover:bg-crimsonDark-4/20 border-crimsonDark-6 hover:border-crimsonDark-8 text-crimsonDark-9',
  },
  purple: {
    header: 'from-purpleDark-9 to-purpleDark-11',
    button:
      'bg-purpleDark-3/20 hover:bg-purpleDark-4/20 border-purpleDark-6 hover:border-purpleDark-8 text-purpleDark-9',
  },
  red: {
    header: 'from-redDark-9 to-redDark-11',
    button:
      'bg-redDark-3/20 hover:bg-redDark-4/20 border-redDark-6 hover:border-redDark-8 text-redDark-9',
  },
}

const generateClassName = (path: string) => {
  let headerClass: string, buttonClass: string

  if (path === '/') {
    headerClass = colorClassNames.red.header
    buttonClass = colorClassNames.red.button
  } else if (path === '/profile') {
    headerClass = colorClassNames.violet.header
    buttonClass = colorClassNames.violet.button
  } else if (path === '/products') {
    headerClass = colorClassNames.tomato.header
    buttonClass = colorClassNames.tomato.button
  } else if (path === '/projects') {
    headerClass = colorClassNames.crimson.header
    buttonClass = colorClassNames.crimson.button
  } else if (path === '/process') {
    headerClass = colorClassNames.purple.header
    buttonClass = colorClassNames.purple.button
  }
  return { headerClass, buttonClass }
}

const Footer: React.FC<Props> = () => {
  const { asPath } = useRouter()
  const { headerClass, buttonClass } = generateClassName(asPath)

  return (
    <>
      <footer className='bg-mauveDark-1 relative pt-20 lg:pt-36 pb-4 md:pb-2 border-grayDark-6 border-t'>
        <div className='relative flex w-full flex-col items-center px-3 md:px-8 '>
          <h2
            className={classNames(
              headerClass,
              'text-5xl md:text-7xl font-heading font-extrabold text-center w-fit text-transparent bg-clip-text bg-gradient-to-br leading-tight md:leading-tight '
            )}
          >
            Get in touch!
          </h2>
          <p className='mt-5 md:mt-6 px-4 mx-auto text-xl md:text-2xl text-center max-w-lg md:max-w-xl  leading-tight md:leading-tight '>
            My inbox is <Em>always open</Em>. Feel free to shoot me a message
            and I&apos;ll get back to you as soon as possible!
          </p>
          <Link
            mail
            className={classNames(
              buttonClass,
              'mb-20 lg:mb-32 mt-12 font-heading font-bold border border-2 py-2 px-7 md:py-3 md:px-10 rounded-lg shadow text-3xl md:text-4xl duration-200'
            )}
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
