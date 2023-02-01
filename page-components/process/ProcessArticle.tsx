import classNames from 'classnames'

interface Props {
  stepNumber: number
  heading: string
  children: React.ReactNode
}

const ProcessArticle = ({ stepNumber, heading, children }: Props) => {
  return (
    <article className='text-lg'>
      <p className={classNames('font-display text-base text-skyDark-11')}>
        Step {stepNumber}/9
      </p>
      <h3 className='text-4xl font-heading font-extrabold leading-tight mb-3'>
        {heading}
      </h3>
      {children}
    </article>
  )
}

export default ProcessArticle
