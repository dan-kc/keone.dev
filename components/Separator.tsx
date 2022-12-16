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
        'h-[1px] bg-gradient-to-r from-transparent to-transparent via-grayDark-6/50'
      )}
    />
  )
}

export default separator
