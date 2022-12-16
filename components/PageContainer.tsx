import Contents from '@components/Contents'
import Title from '@components/Title'
import { Color } from 'types'

interface Props {
  children: React.ReactNode
  color: Color
  heading: string
  subHeading: string
}

const BodyContainer: React.FC<Props> = ({
  children,
  color,
  heading,
  subHeading,
}) => {
  return (
    <main className='bg-mauveDark-2'>
      <Title color={color} heading={heading} subHeading={subHeading} />
      <div className='px-5 pt-14 sm:px-10 max-w-6xl mx-auto pb-20 lg:pb-40'>
        <div className='flex gap-10 lg:gap-20 xl:gap-28'>
          <div>{children}</div>
          <Contents color={color} />
        </div>
      </div>
    </main>
  )
}
export default BodyContainer
