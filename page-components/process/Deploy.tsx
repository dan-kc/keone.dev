import AnimatedLink from '@components/AnimatedLink'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Image from 'next/image'
import Section from '@components/Section'
import Article from '@page-components/process/ProcessArticle'
import ExtraInfo from '@page-components/process/ExtraInfo'

const Deploy = () => {
  return (
    <Section heading='Deploy' color='sky' >
      <AspectRatio.Root ratio={940 / 386} className='relative'>
        <Image
          src='/images/graphics/package-json.png'
          alt='Code snippet'
          fill
          className='object-fill'
          sizes='(max-width: 1024px) 100vw,
              (max-width: 1536px) 70vw,
              50vw'
          quality={100}
        />
      </AspectRatio.Root>

      <Article stepNumber={8} heading='Deployment'>
        <p>
          We’re now ready to launch your website!
          <br />
          <br />
          But just before we do, I’ll deploy a test version that I’ll use to
          show you how to use your website’s features, for example where to
          access the analytics, or how to add new products.
          <br />
          <br />
          I’ll also benchmark your website using{' '}
          <AnimatedLink
            href='https://developer.chrome.com/docs/lighthouse/overview/'
            newTab
          >
            Google Lighthouse
          </AnimatedLink>
          . This is a service that audits your website for performance,
          accessibility, and SEO.
          <br />
          <br />
          This will give you peace of mind knowing that your website has good
          <AnimatedLink href='https://web.dev/vitals/' newTab>
            Core Web Vitals
          </AnimatedLink>{' '}
          which are metrics used by Google to index search results.
        </p>
      </Article>

      <Article stepNumber={9} heading='Maintain'>
        <p>
          I’ll be sticking around for an extra month once the project is
          deployed to ensure that everything runs smoothly.
          <br />
          <br />
          When your business grows and you require more features, or if you just
          want keep me around for a bit longer, I’m open to set up a monthly
          arrangement for me to implement changes for you on demand.
          <br />
          <br />
          ...and that's that!
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={['Payment following deployment & maintenance']}
      />
    </Section>
  )
}

export default Deploy
