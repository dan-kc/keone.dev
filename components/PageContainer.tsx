import Contents from '@components/Contents'
import Title from '@components/Title'
import classNames from 'classnames'
import { Color } from 'types'

interface Props {
  children: React.ReactNode
  color: Color
  heading: string
  subHeading: string
}

const colorClassName = {
  violet: {
    bg: 'border-mauveDark-6 bg-mauveDark-1',
    bottom: 'from-mauveDark-1 to-mauveDark-2',
  },
  green: {
    bg: ' border-sageDark-6 bg-sageDark-1',
    bottom: 'from-sageDark-1 to-sageDark-2',
  },
  orange: {
    bg: 'border-sandDark-6 bg-sandDark-1',
    bottom: 'from-sandDark-1 to-sandDark-2',
  },
  sky: {
    bg: 'border-slateDark-6 bg-slateDark-1',
    bottom: 'from-slateDark-1 to-slateDark-2',
  },
}

const PageContainer: React.FC<Props> = ({
  children,
  color,
  heading,
  subHeading,
}) => {
  return (
    <main className={classNames('border-b', colorClassName[color].bg)}>
      <Title color={color} heading={heading} subHeading={subHeading} />
      <div className='px-5 pt-8 md:pt-12 sm:px-10 max-w-6xl mx-auto'>
        <div className='flex gap-10 lg:gap-20 xl:gap-28'>
          <div>{children}</div>
          <Contents color={color} />
        </div>
      </div>
      <div
        className={classNames(
          'h-20 lg:h-40 bg-gradient-to-b',
          colorClassName[color].bottom
        )}
      />
    </main>
  )
}
export default PageContainer
