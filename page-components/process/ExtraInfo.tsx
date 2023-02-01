import FadeIn from '@components/FadeIn'

interface Props {
  bulletPoints: string[]
}

const ExtraInfo = ({ bulletPoints }: Props) => {
  return (
    <div className='flex flex-col gap-6'>
      {bulletPoints.map((bulletPoint, index) => {
        return (
          <FadeIn from={-10} key={index}>
            <p className='text-2xl font-heading font-extrabold flex gap-2'>
              <span>-</span>
              <span>{bulletPoint}</span>
            </p>
          </FadeIn>
        )
      })}
    </div>
  )
}

export default ExtraInfo
