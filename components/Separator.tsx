import * as Separator from '@radix-ui/react-separator'
import classNames from 'classnames'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string
}

const separator = ({ className }: Props) => {
  return (
    <Separator.Root
      decorative
      className={classNames(
        className,
        'h-[0.1rem] bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
      )}
    />
  )
}

export default separator
