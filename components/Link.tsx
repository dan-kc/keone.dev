import Link from 'next/link'
import useToastStore from '@hooks/stores/useToastStore'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail: boolean
  href?: string
  children: React.ReactNode
}

const mailTo =
  'mailto:daniel@keone.io?subject=Services%20Enquiry&body=Hello%20Daniel%2C'

const NewLink: React.FC<Props> = ({ mail, href, children, ...rest }) => {
  const setOpen = useToastStore((state) => state.setOpen)
  return (
    <Link
      href={mail ? mailTo : href}
      onClick={
        mail
          ? () => {
              setOpen(true)
            }
          : null
      }
      {...rest}
    >
      {children}
    </Link>
  )
}

export default NewLink
