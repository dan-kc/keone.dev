import * as Accordion from '@radix-ui/react-accordion'
import * as Separator from '@radix-ui/react-separator'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { styled, keyframes } from '@stitches/react'
import Container, { Options } from '@components/Container'
import classNames from 'classnames'
import { Fragment } from 'react'

export default function QA() {
  interface AccordionItem {
    header: string
    paragraphs: string[]
  }

  const items: AccordionItem[] = [
    {
      header: 'How often are we going to speak?',
      paragraphs: [
        'That’s up to you.',
        'During the design stage I expect to communicate daily, or at least every other day; but I’m more than happy to consolidate my updates if you’d rather have me just get on with things behind the scenes.',
        'For the development stage I’ll give you weekly or bi-weekly updates on progress, for example when I finish developing the landing page, or when I finish a complicated animation, but let me know if you’d prefer more granular updates; I’ll happily adjust my process accordingly.',
      ],
    },
    {
      header: 'What if I don’t like the designs?',
      paragraphs: [
        'I take this concern very seriously so I’ve structured my process to make this scenario as unlikely as possible.',
        'I offer three review rounds for my work (agencies usually only offer one) and ample opportunities to provide live feedback via FigJam.',
        'I also don’t lock you behind one huge deposit like most agencies do. If after all of the review rounds review you’re still unsatisfied with the designs- well you haven’t paid for any of my development, deployment or maintenance services yet, so it’s painless for you to just take the designs and leave.',
        'No hard feelings either! My doors will remain open if you’d like to resume work later.',
      ],
    },
    {
      header: 'Do you work with clients outside of the UK?',
      paragraphs: [
        'Absolutely.',
        'I’m very flexible so I’ll always accommodate for your timezone.',
      ],
    },
    {
      header: 'I’d rather not pay in chunks, can we consolidate the payments?',
      paragraphs: [
        'Of course!',
        'Let me know what works for you- I offer these gradual payments as a benefit to you, but I’m more than happy to do things your way.',
      ],
    },
    {
      header: 'I don’t need all these of steps, will you still work with me?',
      paragraphs: [
        'Absolutely.',
        'What’s written above is only blueprint. All businesses are different, and you may not yet be in the market for such a comprehensive service. You may just need some, not all, of the above steps. Even if you already have a website and you just need a small glitch fixed, I’m more than happy alter my process to cater to your needs. Just ask!',
      ],
    },
    {
      header: 'Why should I pick you over an agency?',
      paragraphs: [
        'I’d first like to say that agencies usually offer great, comprehensive services that may be perfect for you and your business. Who you should pick really depends on your business’ needs and your budget.',
        'I offer services in web design and development, but agencies typically offer additional services such as copywriting, content strategy, product design, and social media marketing.',
        'Usually they take about the same amount of time to complete a project as I would- remember agencies often have multiple projects going on at once. But some of them offer clients the option to speed up the project timeframe; at a significant extra cost of course, but this results in a turnaround time that simply cannot be beaten by a single person.',
        'That being said, for an equally polished product, I offer strikingly cheaper prices compared to agencies. Seriously, a fraction of their price.',
        'And, unlike agencies, I don’t expect half of the total project cost up front. All payments are spread across the project timeline such that you have the freedom to, at any point, change your mind on future services or even drop out entirely.',
        'With me you’ll also get a much more personal business relationship. I’m not ‘ABC Web Design & Development Agency’, I’m Daniel. I’m easy-going and approachable, and I’ll be with you from the start of the project to the end- no need to worry about speaking to a new person every video call.',
        'In short, if your business has additional needs outside of web design and development, or if you have a rapidly approaching deadline, then go with an agency- else work with me. You’ll receive an equally polished product and you’ll enjoy a professional, personal business relationship; all at a hugely discounted rate.',
      ],
    },
  ]

  const slideUp = keyframes({
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  })

  const slideDown = keyframes({
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  })

  const AnimatedContent = styled(Accordion.Content, {
    '&[data-state="open"]': {
      animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
    },
  })

  const numberOfItems = items.length

  return (
    <section className='mt-16 md:mt-20 pb-20 relative'>
      <Container size={Options.Large}>
        <Accordion.Root type='single' collapsible asChild>
          <div className='text-base md:lg lg:text-xl bg-anthracite-3 rounded-xl px-5 pt-10 md:px-8 md:pt-12 lg:px-12 lg:pt-16 shadow-2xl'>
            <h2 className='text-cyan-700 pb-8 lg:pb-14 font-heading text-5xl md:text-6xl lg:text-7xl'>
              Some questions and answers
            </h2>
            {items.map((item, index) => {
              const value = 'item-' + (index + 1).toString()
              const isFirstItem = index === 0
              const isLastItem = index === numberOfItems - 1
              return (
                <Fragment key={index}>
                  <Accordion.Item value={value}>
                    <Accordion.Header>
                      <Accordion.Trigger className='group flex w-full justify-between items-center'>
                        <span
                          className={classNames(
                            isFirstItem ? 'pb-4 md:pb-8' : 'py-4 md:py-8',
                            'text-2xl md:text-3xl lg:text-4xl font-heading text-white text-left '
                          )}
                        >
                          {item.header}
                        </span>
                        <div
                          aria-hidden
                          className='transform duration-300 w-fit h-fit group-radix-state-open:rotate-180'
                        >
                          <ChevronDownIcon className='w-6 h-6 lg:w-8 lg:h-8' />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <AnimatedContent className='overflow-hidden'>
                      <p
                        className={classNames(
                          isLastItem ? 'mb-2 md:mb-4 lg:mb-6' : ''
                        )}
                      >
                        {item.paragraphs.map((para, index) => {
                          return (
                            <Fragment key={index}>
                              {para}
                              <br />
                              <br />
                            </Fragment>
                          )
                        })}
                      </p>
                    </AnimatedContent>
                  </Accordion.Item>
                  {isLastItem ? null : (
                    <Separator.Root
                      decorative
                      className='h-[0.05rem] bg-gradient-to-r from-anthracite-6'
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        </Accordion.Root>
      </Container>
    </section>
  )
}
