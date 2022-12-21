import { ChevronRightIcon, HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BreadCrumb = () => {
  const { asPath } = useRouter()
  const lowerCaseText = asPath.slice(1)
  const upperCaseText =
    lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1)

  return (
    <div className='flex items-center gap-1'>
      <Link  href='/'>
        <HomeIcon className='w-5 h-5' />
      </Link>
      <ChevronRightIcon className='w-4 h-4' />
      <h1 className='font-heading font-semibold text-lg'>{upperCaseText}</h1>
    </div>
  )
}
export default BreadCrumb
