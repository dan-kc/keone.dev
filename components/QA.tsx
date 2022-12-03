import * as Separator from '@radix-ui/react-separator'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import Container, { Options } from '@components/Container'
import classNames from 'classnames'
import { Fragment } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@chakra-ui/accordion'

interface AccordionItem {
  header: string
  paragraphs: string[]
}

const items: AccordionItem[] = [
  {
    header: 'How often are we going to speak?',
    paragraphs: [
      'That’s up to you.',
      'I expect to communicate at least every other day during the design stage, but I’m happy to consolidate my updates if you’d rather me get on with things behind the scenes. ',
      'For the development stage I’ll give you weekly or bi-weekly updates on progress, for example when I finish developing the landing page, or when I finish a complicated animation, but let me know if you’d prefer more granular updates; I’ll happily adjust my communication process accordingly.',
    ],
  },
  {
    header: 'What if I don’t like the designs?',
    paragraphs: [
      'I take this concern very seriously so I’ve structured my process to make this scenario as unlikely and as painless for you as possible.',
      'I provide three review rounds for my work (most agencies only provide one) and you’re able to give me live feedback at any time via FigJam.',
      'I also don’t lock you behind one huge deposit like most agencies do. If you’re still unhappy with the designs after all of the review rounds, well you haven’t paid for any of my development, deployment or maintenance services yet, so it’s painless for you to just take the designs and leave.',
      'No hard feelings either! My doors will remain open if you’d like to resume work later.',
    ],
  },
  {
    header: 'Do you work with clients outside of the UK?',
    paragraphs: [
      'Absolutely.',
      'I’m very flexible and more than happy to accommodate to your timezone.',
    ],
  },
  {
    header: 'I’d rather not pay in chunks, can we consolidate the payments?',
    paragraphs: [
      'Of course!',
      'Let me know what works best for you; I offer these gradual payments as a benefit to you, but we can certainly do things your way.',
    ],
  },
  {
    header: 'I don’t need all these of steps, will you still work with me?',
    paragraphs: [
      'Absolutely. ',
      'What’s written above is only a blueprint. I’m happy to alter my process to cater to your specific needs.',
    ],
  },
  {
    header: 'Why should I pick you over an agency?',
    paragraphs: [
      'First, let me say that most agencies provide excellent services that might be ideal for you and your business. Who you should go to really depends on your business’ needs and budget.',
      'I offer services in web design and development, but agencies typically offer additional services such as copywriting, content strategy, product design, and social media marketing.',
      'Since agencies frequently have several projects running at the same time, they’re typically no faster than me in completing a project. However some agencies offer clients the expensive option to expedite the project, which results in a turnaround time that simply cannot be beaten by a single person.',
      'Having said that, agencies and I both produce a polished end product. And for that end product, I offer strikingly cheaper prices. Seriously, a fraction of their price.',
      'And, unlike agencies, I don’t demand half of the total project cost upfront. All payments are spread out over the course of the project, giving you the leverage to drop out at any time without penalty.',
      'You’ll also get a much more personal business relationship with me. I’m not ‘ABC Web Design Agency’. I’m Daniel. I’m easygoing and approachable, and I’ll be with you all the way through the project. There’s no need to worry about speaking to a new person on each video call.',
      'In short, if your business has additional needs outside of web design and development, or if you have a tight deadline, hire an agency; otherwise, hire me. You’ll get the same high-quality product while also benefiting from a much more personal business relationship, all at a hugely discounted rate.',
    ],
  },
]

const numberOfItems = items.length

export default function QA() {
  return (
    <section className='pt-16 md:pt-20 bg-anthracite-3'>
      <Container size={Options.md}>
        <Accordion allowMultiple>
          <div className='bg-anthracite-4 px-5 pt-9 md:px-8 md:pt-8 lg:px-12 lg:pt-12 rounded-lg shadow-2xl'>
            <h2 className='w-fit text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-cyan-300 pb-8 lg:pb-14 font-heading font-extrabold max-[350px]:text-[42px] text-5xl md:text-6xl lg:text-7xl leading-tight max-[350px]:leading-tight md:text-6xl lg:leading-tight'>
              Some questions and answers
            </h2>
            {items.map((item, itemsIndex) => {
              const isFirstItem = itemsIndex === 0
              const isLastItem = itemsIndex === numberOfItems - 1
              return (
                <Fragment key={itemsIndex}>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <div
                              className={classNames(
                                isFirstItem ? 'pb-4 md:pb-8' : 'py-4 md:py-8',
                                'flex w-full justify-between'
                              )}
                            >
                              <span className='text-xl md:text-2xl lg:text-3xl font-heading font-extrabold text-anthracite-12 text-left'>
                                {item.header}
                              </span>

                              <div
                                aria-hidden
                                className={classNames(
                                  isExpanded ? 'rotate-180' : '',
                                  'transform duration-300 w-fit h-fit'
                                )}
                              >
                                <ChevronDownIcon className='w-6 h-6 lg:w-8 lg:h-8' />
                              </div>
                            </div>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          className={classNames(
                            'pt-3 lg:pt-0 sm:pr-4 md:pr-8 lg:pr-12 xl:pr-16 text-anthracite-11',
                            isLastItem ? 'mb-2 md:mb-4 lg:mb-6' : ''
                          )}
                        >
                          {item.paragraphs.map((para, paraIndex) => {
                            return (
                              <Fragment key={paraIndex}>
                                {para}
                                <br />
                                <br />
                              </Fragment>
                            )
                          })}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {isLastItem ? null : (
                    <Separator.Root
                      decorative
                      className='h-[1.6px] bg-gradient-to-r from-anthracite-6'
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        </Accordion>
      </Container>
    </section>
  )
}
