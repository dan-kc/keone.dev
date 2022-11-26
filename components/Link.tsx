import Link from 'next/link'
import useToastStore from '@hooks/stores/useToastStore'

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail?: boolean
  href?: string
  passHref?: boolean
  legacyBehavior?: boolean
  children: React.ReactNode
}

const mailTo =
  " mailto:daniel@keone.io?subject=Services%20enquiry&body=%E2%80%94%E2%80%94%E2%80%94%20READ%20ME%20%E2%80%94%E2%80%94%E2%80%94%0D%0A%0D%0AMy%20email%20is%20open%20to%20queries%20of%20all%20kinds%2C%20however%20I%E2%80%99m%20sure%20that%20most%20of%20you%20would%20just%20like%20a%20quote%20ASAP!%0D%0A%0D%0ASo%20I%E2%80%99ve%20prepared%20an%20email%20template%20that%20shows%20you%20all%20of%20the%20information%20that%20I'll%20need%20in%20order%20to%20give%20you%20an%20instant%20quote%20on%20timescale%20and%20pricing.%0D%0A%0D%0A%0D%0A%E2%80%94%E2%80%94%E2%80%94%20TEMPLATE%20%E2%80%94%E2%80%94%E2%80%94%0D%0A%0D%0AHello%20Daniel%2C%0D%0A%0D%0A%0D%0A1)%20Overview%0D%0A%0D%0ATell%20me%20about%20your%20business.%20I%E2%80%99d%20love%20to%20learn%20what%20makes%20it%20tick%2C%20it%E2%80%99s%20history%2C%20size%2C%20values%20and%20most%20importantly%20its%20target%20audience.%0D%0A%0D%0A%0D%0A2)%20Why%0D%0A%0D%0AWhy%20do%20you%20need%20a%20new%20website%20%26%20what%20are%20your%20objectives%20with%20it%3F%0D%0A%0D%0A%0D%0A3)%20Deadline%0D%0A%0D%0AAre%20there%20any%20urgent%20deadlines%3F%20I%E2%80%99ll%20be%20able%20to%20tell%20you%20straight%20away%20if%20the%20project%20is%20unrealistic.%0D%0A%0D%0A%0D%0A4)%20Content%0D%0A%0D%0ADo%20you%20have%20any%20photography%2Fvideos%20already%3F%20Do%20you%20have%20any%20written%20content%3F%20What%20content%20would%20you%20like%20to%20be%20able%20to%20update%20your%20website%20with%20in%20the%20future%3F%20It%E2%80%99s%20best%20to%20consider%20the%20content%20on%20your%20website%20as%20early%20as%20possible.%0D%0A%0D%0A%0D%0A5)%20Technicalities%0D%0A%0D%0ADo%20you%20require%20any%20specific%20features%3F%20Does%20your%20website%20need%20to%20integrate%20with%20any%20existing%20systems%2C%20perhaps%20an%20existing%20database%20or%20an%20email%20marketing%20service%20like%20Mailchimp%3F%20Do%20you%20already%20have%20a%20preferred%20Content%20Management%20System%3F "

const NewLink: React.FC<Props> = ({
  mail = false,
  href,
  legacyBehavior = false,
  children,
  passHref = false,
  ...rest
}) => {
  const setOpen = useToastStore((state) => state.setOpen)
  return (
    <Link
      href={mail ? mailTo : href}
      passHref={passHref}
      legacyBehavior={legacyBehavior}
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
