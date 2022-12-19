import BreadCrumb from '@components/BreadCrumb'
import cn from 'classnames'
import { Color } from 'types'

const colorClassNames = {
  tomato: {
    background: 'to-tomatoDark-3/50',
    border: 'border-tomatoDark-6',
    heading: 'from-tomatoDark-9 to-tomatoDark-11',
    subHeading: 'text-tomatoDark-12',
  },
  crimson: {
    background: 'to-crimsonDark-3/50',
    border: 'border-crimsonDark-6',
    heading: 'from-crimsonDark-9 to-crimsonDark-11',
    subHeading: 'text-crimsonDark-12',
  },
  violet: {
    background: 'to-violetDark-3/50',
    border: 'border-violetDark-6',
    heading: 'from-violetDark-9 to-violetDark-11',
    subHeading: 'text-violetDark-12',
  },
  purple: {
    background: 'to-purpleDark-3/50',
    border: 'border-purpleDark-6',
    heading: 'from-purpleDark-9 to-purpleDark-11',
    subHeading: 'text-purpleDark-12',
  },
}

interface Props {
  heading: string
  subHeading: string
  color: Color
}

const Title: React.FC<Props> = ({ heading, subHeading, color }) => {
  const classNames = colorClassNames[color]
  return (
    <div
      className={cn(
        'bg-gradient-to-b from-mauveDark-1 via-mauveDark-1 pt-16 pb-20 border-b',
        classNames.background,
        classNames.border
      )}
    >
      <div className='px-5 sm:px-10 max-w-6xl mx-auto'>
        <div className='md:max-w-xl'>
          <BreadCrumb />
          <h2
            className={cn(
              'mt-8 font-heading font-extrabold text-5xl md:text-6xl leading-tight md:leading-tight w-fit text-transparent bg-clip-text bg-gradient-to-bl',
              classNames.heading
            )}
          >
            {heading}
          </h2>
          <p className={cn('mt-3 text-lg', classNames.subHeading)}>
            {subHeading}
          </p>
        </div>
      </div>
    </div>
  )
}
export default Title
