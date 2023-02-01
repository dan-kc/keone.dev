import Image from 'next/image'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import AnimatedLink from '@components/AnimatedLink'
import Section from '@components/Section'
import Article from '@page-components/process/ProcessArticle'
import ExtraInfo from '@page-components/process/ExtraInfo'

const Develop = () => {
  return (
    <Section heading='Develop' color='sky'>
      <AspectRatio.Root ratio={822 / 382} className='relative'>
        <Image
          src='/images/graphics/process-snippet.png'
          alt='Code snippet'
          fill
          className='object-fill'
          sizes='(max-width: 1024px) 100vw,
              (max-width: 1536px) 70vw,
              50vw'
          quality={100}
        />
      </AspectRatio.Root>

      <Article stepNumber={7} heading="Let's write some code">
        <p>
          By this point, I’m itching to begin coding and making your website a
          reality.
          <br />
          <br />
          This is the most time consuming step of the process, but it’s also the
          most enjoyable for me as it reminds me of my time at university
          reading maths.
          <br />
          <br />I use fast, modern and industry proven web frameworks such as{' '}
          <AnimatedLink href='https://reactjs.org/' newTab>
            React
          </AnimatedLink>{' '}
          and{' '}
          <AnimatedLink href='https://nextjs.org/' newTab>
            Next.js
          </AnimatedLink>{' '}
          which are relied upon heavily by giants like TikTok, Redbull and Nike.
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={[
          'Payment following development completion',
          'Deployment & maintenance deposit',
        ]}
      />
    </Section>
  )
}

export default Develop
