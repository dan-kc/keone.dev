import {
  ChevronUpIcon,
  EnvelopeOpenIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons'
import * as Separator from '@radix-ui/react-separator'
import Image from 'next/image'
import Link from '@components/Link'
import { useEffect, useState } from 'react'
import { Color } from 'types'
import classNames from 'classnames'

interface Section {
  heading: string
  id: string
}

interface Props {
  color: Color
}

const colorClassNames = {
  red: 'text-redDark-11',
  violet: 'text-violetDark-11',
  crimson: 'text-crimsonDark-11',
  tomato: 'text-tomatoDark-11',
  purple: 'text-purpleDark-11',
}

const Contents: React.FC<Props> = ({ color }) => {
  const [sections, setSections] = useState<Section[]>([])

  useEffect(() => {
    const elementsArr = Array.from(document.querySelectorAll('section')).map(
      (element) => {
        return {
          id: element.id,
          heading: element.childNodes[0].textContent,
        }
      }
    )
    setSections(elementsArr)
  }, [])

  return (
    <nav className='hidden md:block md:sticky top-20 h-fit'>
      <div className='flex flex-col justify-between border border-mauveDark-6 bg-mauveDark-3/40 rounded-lg w-60 pt-5 px-5 min-h-[300px] shadow'>
        <div>
          <div className='flex gap-4 items-center mb-5'>
            <div className='overflow-hidden rounded-full'>
              <Image
                src='/images/profile-photo.webp'
                alt='Code snippet'
                width={50}
                height={50}
              />
            </div>
            <div>
              <p className='text-sm mb-1'>Daniel Keone Cox</p>
              <div className='flex gap-2'>
                <Link href='https://github.com/dan-kc' newTab>
                  <GitHubLogoIcon className='h-5 w-5' />
                </Link>
                <Link mail>
                  <EnvelopeOpenIcon className='h-5 w-5' />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className='font-heading font-extrabold'>Contents</p>
            <div className='flex flex-col items-start gap-3 my-5'>
              {sections.map((section, index) => {
                return (
                  <a
                    key={index}
                    className={classNames(colorClassNames[color], 'text-sm')}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector(`#${section.id}`)
                        .scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {section.heading}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <Separator.Root
            decorative
            className='mt-8 h-[1px] bg-gradient-to-r from-transparent to-transparent via-mauveDark-6'
          />
          <a
            className='flex gap-1 items-center justify-center p-4'
            href='header'
            onClick={(e) => {
              e.preventDefault()
              document
                .querySelector('header')
                .scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <ChevronUpIcon className='h-5 w-5' />
            <p className='text-sm'>Back to top</p>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Contents
