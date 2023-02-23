import classNames from 'classnames'

interface Props {
  heading: string
  color: string
  children: React.ReactNode
  last?: boolean
}

const headingClassNames = {
  violet: 'text-violetDark-11 border-violetDark-6',
  green: 'text-greenDark-11 border-greenDark-6',
  orange: 'text-orangeDark-10 border-orangeDark-6',
  sky: 'text-skyDark-11 border-skyDark-6',
}

const Section = ({ heading, color, last = false, children }: Props) => {
  const id = replaceSpacesWithHyphens(
    replaceAmpersand(removeQuestionmark(removeFullstop(heading)))
  )
  return (
    <section className={classNames('relative', last ? null : 'mb-20')} id={id}>
      <h2
        className={classNames(
          'sticky z-10 -ml-[1px] top-0 pt-6 text-3xl border-b font-heading font-extrabold bg-slateDark-1',
          headingClassNames[color]
        )}
      >
        {heading}
      </h2>
      <div className='flex flex-col gap-12 mt-8'>{children}</div>
    </section>
  )
}

export default Section

function replaceSpacesWithHyphens(str: string): string {
  return str.replace(/ /g, '-')
}

function replaceAmpersand(str: string): string {
  return str.replace(/&/g, 'and')
}

function removeQuestionmark(str: string): string {
  return str.replace('?', '')
}

function removeFullstop(str: string): string {
  return str.replace('.', '')
}
