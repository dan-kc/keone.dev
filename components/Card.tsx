import classNames from 'classnames'

export enum Options {
  Small = 'Small',
  Large = 'Large',
}

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size: Options
  children: React.ReactNode
}

const Card: React.FC<Props> = ({ children, size }) => {
  return (
    <div
      className='from-slateDark-1 via-slateDark-2 to-slateDark-1 bg-gradient-to-b px-5 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16 rounded-lg'
      style={{ filter: 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.9))' }}
    >
      {children}
    </div>
  )
}
export default Card
