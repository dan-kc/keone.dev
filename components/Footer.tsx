import classNames from 'classnames'
import Link from '@components/Link'
import { InView } from 'react-intersection-observer'
import Container, { Options } from '@components/Container'

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className='relative mb-10'>
      <InView rootMargin='400% 0px -5% 0px' threshold={0.5}>
        {({ inView, ref }) => (
          <Container size={Options.Large}>
            <div
              ref={ref}
              className='relative flex w-full flex-col items-center rounded-xl bg-anthracite-3 px-5 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 shadow-2xl'
            >
              <h2
                className={classNames(
                  inView ? 'opacity-100' : 'opacity-10',
                  'duration-1000 relative inline-block text-4xl md:text-6xl lg:text-7xl font-heading mb-4 md:mb-10 text-center'
                )}
              >
                Get in touch!
              </h2>
              <p
                className={classNames(
                  inView ? 'opacity-100 delay-100' : 'opacity-10',
                  'duration-1000 relative pt-2 px-4 text-xl md:text-3xl lg:text-4xl text-center font-body max-w-lg md:max-w-xl lg:max-w-3xl mx-auto lg:mb-10 mb-5 md:mb-8'
                )}
              >
                My inbox is{' '}
                <span
                  className={classNames(
                    inView ? 'delay-500' + 'text-white' : 'text-slateDark-12',
                    'duration-1000 font-semibold'
                  )}
                >
                  always open
                </span>
                . Feel free to shoot me a message and I{"'"}ll get back to you{' '}
                <span
                  className={classNames(
                    inView ? 'delay-500' + 'text-white' : 'text-slateDark-12',
                    'duration-1000 font-semibold'
                  )}
                >
                  as soon as possible
                </span>
                !
              </p>
              <Link
                mail
                className={classNames(
                  inView ? 'opacity-100 delay-200' : 'opacity-10 ',
                  'duration-1000 font-heading relative inline-block pt-6 text-3xl md:text-4xl lg:text-6xl text-red-700'
                )}
              >
                <div
                  ref={ref}
                  className={classNames(
                    inView ? 'scale-x-100 delay-500' : 'scale-x-0',
                    'absolute inline-block w-full origin-bottom-left h-0.5 lg:h-1 bottom-0 left-0 bg-red-700 duration-1000'
                  )}
                />
                Say Hello
              </Link>
            </div>
          </Container>
        )}
      </InView>
    </footer>
  )
}
export default Footer
