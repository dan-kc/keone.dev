import classNames from 'classnames'

interface Props {
  mainObjective?: string
  children: React.ReactNode
}

const ProjectsArticle = ({ mainObjective, children }: Props) => {
  return (
    <article className='text-lg'>
      {mainObjective ? (
        <p className='py-2 px-4 w-fit text-base border border-grayDark-6 bg-grayDark-3/30 text-grayDark-11 rounded-lg'>
          Main objective: {mainObjective}
        </p>
      ) : null}
      <div className={classNames(mainObjective ? 'mt-6' : null)}>
        {children}
      </div>
    </article>
  )
}

export default ProjectsArticle
