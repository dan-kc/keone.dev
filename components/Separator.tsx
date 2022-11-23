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
        'h-[1.6px] bg-gradient-to-r from-transparent to-transparent via-anthracite-6'
      )}
    />
  )
}

export default separator
