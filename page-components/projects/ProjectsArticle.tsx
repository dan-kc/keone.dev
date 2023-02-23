import classNames from 'classnames'

interface Props {
  mainObjective?: string
  children: React.ReactNode
}

const ProjectsArticle = ({ mainObjective, children }: Props) => {
  return (
    <article className='text-lg'>
      {mainObjective ? (
        <p className='py-2 px-4 w-fit text-base border border-slateDark-6 bg-slateDark-3/30 text-slateDark-11 rounded-lg'>
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
