import PageContainer from "@components/PageContainer";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import Head from "next/head";
import AnimatedLink from "@components/AnimatedLink";
import * as Separator from "@radix-ui/react-separator";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { Fragment } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/accordion";
import Section from "@components/Section";
import Image from "next/image";
import FadeIn from "@components/FadeIn";

const Process = () => {
  return (
    <>
      <Head>
        <title>Process | Daniel Keone Cox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageContainer
        color="sky"
        heading={`Wanna see how I work?`}
        subHeading={`Have a scroll through my 9-step process to learn how my workflow suits your business.`}
      >
        <Plan />
        <Design />
        <Develop />
        <Deploy />
        <QA />
      </PageContainer>
    </>
  );
};

export default Process;

const Plan = () => {
  return (
    <Section heading="Plan" color="sky">
      <Article stepNumber={1} heading="Shoot me an email">
        <p>
          Here&apos;s an <AnimatedLink mail> email template </AnimatedLink> to
          help get things started.
          <br />
          <br />
          I know how businesses work and how frustrating it can be when all you
          want is a quote but instead you’re having to endure a drawn out email
          exchange that feels like it’s going nowhere - made even worse when
          quoted terms in the end don’t even work for you!
          <br />
          <br />
          So, to spare you from that ordeal, I&apos;ve structured the email
          template to clearly outline everything that I need to know in order to
          accurately gauge the scope of your project and give you an instant
          quote on timescale and cost.
          <br />
          <br />
          In fact, if the email is detailed enough, I’m confident I can give you
          that quote you’re looking for in my very first email back! Along with
          some suggestions of features worth implementing.
          <br />
          <br />
          Get in touch - I can&apos;t wait to learn all about your business!
        </p>
      </Article>

      <Article stepNumber={2} heading="We discuss & agree terms">
        <p>Yep... That’s really all it takes to get started!</p>
      </Article>

      <ExtraInfo bulletPoints={["Design deposit"]} />
    </Section>
  );
};

const Design = () => {
  return (
    <Section heading="Design" color="sky">
      <Article stepNumber={3} heading="Moodboard">
        <p>
          First thing&apos;s first, let&apos;s define a design direction for
          your website.
          <br />
          <br />
          I&apos;ll make a moodboard for us so that we can easily share design
          inspiration with one another.
          <br />
          <br />
          This will instantly give you a space where you can show me any
          existing design material you may have, such as logos, colours,
          typography, photography, other websites that you really like, or even
          entire other moodboards. Feel free to add anything!
          <br />
          <br />
          I&apos;ll be steadily populating the moodboard with complementary
          material, mainly in the form of other website designs. Simply let me
          know what you like and dislike, and I&apos;ll reflect your feedback in
          the future designs.
          <br />
          <br />
          Moodboards often capture ideas that would otherwise be lost in
          translation when only describing things verbally, saving you time and
          money by avoiding additional revision requests later down the line.
        </p>
      </Article>

      <Article stepNumber={4} heading="Sitemap">
        <p>
          Shortly after receiving the moodboard you&apos;ll also be given a
          sitemap diagram which will outline the structure of your website and
          give you a bird&apos;s-eye view of the user journey.
          <br />
          <br />
          Even better, you&apos;ll receive this diagram, the moodboard, and all
          other design work on{" "}
          <AnimatedLink href="https://www.figma.com/figjam/" newTab>
            FigJam
          </AnimatedLink>
          , making live feedback an absolute breeze. This keeps me continually
          informed on your style preferences and what you envision the end
          product to look like.
        </p>
      </Article>

      <Article stepNumber={5} heading="Wireframe">
        <p>
          Next, I&apos;ll give you a detailed wireframe for each page of your
          website.
          <br />
          <br />
          Wireframes are skeletal illustrations of a page’s interface. They
          communicate what content is being prioritised and, most importantly,
          the intended user behaviours.
          <br />
          <br />
          Defining a good interface structure is the most important part of
          designing your website because it directly focuses on fulfilling your
          business’ key objectives.
        </p>
      </Article>

      <Article stepNumber={6} heading="Final Designs">
        <p>
          For the final designs I&apos;ll populate the wireframes with your
          content, such as product images or text, and modify the wireframes to
          reflect your style preferences from the moodboard.
          <br />
          <br />
          Since the goal of this stage is to fine-tune, we&apos;ll conduct three
          review rounds so you can be absolutely certain that the designs meet
          your expectations.
          <br />
          <br />
          Adjusting these final designs is my favourite part of the design
          process because I finally get to fully hone in on your vision.
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={[
          "Three review rounds",
          "Payment following design completion",
          "Development deposit",
        ]}
      />
    </Section>
  );
};

const Develop = () => {
  return (
    <Section heading="Develop" color="sky">
      <AspectRatio.Root ratio={822 / 382} className="relative">
        <Image
          src="/images/graphics/process-snippet.png"
          alt="Code snippet"
          fill
          className="object-fill"
          sizes="(max-width: 1024px) 100vw,
              (max-width: 1536px) 70vw,
              50vw"
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
          <br />I use fast, modern and industry proven web frameworks such as{" "}
          <AnimatedLink href="https://reactjs.org/" newTab>
            React
          </AnimatedLink>{" "}
          and{" "}
          <AnimatedLink href="https://nextjs.org/" newTab>
            Next.js
          </AnimatedLink>{" "}
          which are relied upon heavily by giants like TikTok, Redbull and Nike.
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={[
          "Payment following development completion",
          "Deployment & maintenance deposit",
        ]}
      />
    </Section>
  );
};

const Deploy = () => {
  return (
    <Section heading="Deploy" color="sky">
      <AspectRatio.Root ratio={940 / 386} className="relative">
        <Image
          src="/images/graphics/package-json.png"
          alt="Code snippet"
          fill
          className="object-fill"
          sizes="(max-width: 1024px) 100vw,
              (max-width: 1536px) 70vw,
              50vw"
          quality={100}
        />
      </AspectRatio.Root>

      <Article stepNumber={8} heading="Deployment">
        <p>
          We’re now ready to launch your website!
          <br />
          <br />
          But just before we do, I’ll deploy a test version that I’ll use to
          show you how to use your website’s features, for example where to
          access the analytics, or how to add new products.
          <br />
          <br />
          I’ll also benchmark your website using{" "}
          <AnimatedLink
            href="https://developer.chrome.com/docs/lighthouse/overview/"
            newTab
          >
            Google Lighthouse
          </AnimatedLink>
          . This is a service that audits your website for performance,
          accessibility, and SEO.
          <br />
          <br />
          This will give you peace of mind knowing that your website has good
          <AnimatedLink href="https://web.dev/vitals/" newTab>
            Core Web Vitals
          </AnimatedLink>{" "}
          which are metrics used by Google to index search results.
        </p>
      </Article>

      <Article stepNumber={9} heading="Maintain">
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
          ...and that&apos;s that!
        </p>
      </Article>

      <ExtraInfo
        bulletPoints={["Payment following deployment & maintenance"]}
      />
    </Section>
  );
};

function QA() {
  const numberOfItems = items.length;
  return (
    <Section heading="Some questions & answers" color="sky" last>
      <div>
        <Accordion allowMultiple>
          <div>
            {items.map((item, itemsIndex) => {
              const isFirstItem = itemsIndex === 0;
              const isLastItem = itemsIndex === numberOfItems - 1;
              return (
                <Fragment key={itemsIndex}>
                  <AccordionItem>
                    {({ isExpanded }) => (
                      <>
                        <h2>
                          <AccordionButton>
                            <div
                              className={classNames(
                                isExpanded
                                  ? "text-slateDark-12"
                                  : "text-slateDark-11",
                                isFirstItem ? "pb-3" : "py-3",
                                "flex w-full justify-between duration-300",
                              )}
                            >
                              <span className="text-xl font-heading font-medium text-left ">
                                {item.header}
                              </span>

                              <div
                                aria-hidden
                                className={classNames(
                                  isExpanded ? "rotate-180" : "",
                                  "transform duration-300 w-fit h-fit",
                                )}
                              >
                                <ChevronDownIcon className="w-7 h-7" />
                              </div>
                            </div>
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          className={classNames(
                            "pt-3 text-base text-slateDark-12",
                            isLastItem ? "mb-2" : "",
                          )}
                        >
                          {item.paragraphs.map((para, paraIndex) => {
                            return (
                              <Fragment key={paraIndex}>
                                {para}
                                <br />
                                <br />
                              </Fragment>
                            );
                          })}
                        </AccordionPanel>
                      </>
                    )}
                  </AccordionItem>
                  {isLastItem ? null : (
                    <Separator.Root
                      decorative
                      className="h-[1px] bg-gradient-to-r from-transparent via-slateDark-6"
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </Accordion>
      </div>
    </Section>
  );
}

function Article({
  stepNumber,
  heading,
  children,
}: {
  stepNumber: number;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <article className="text-lg">
      <p className={classNames("font-display text-base text-skyDark-11")}>
        Step {stepNumber}/9
      </p>
      <h3 className="text-4xl font-heading font-extrabold leading-tight mb-3">
        {heading}
      </h3>
      {children}
    </article>
  );
}

const ExtraInfo = ({ bulletPoints }: { bulletPoints: string[] }) => {
  return (
    <div className="flex flex-col gap-6">
      {bulletPoints.map((bulletPoint, index) => {
        return (
          <FadeIn from={-10} key={index}>
            <p className="text-2xl font-heading font-extrabold flex gap-2">
              <span>-</span>
              <span>{bulletPoint}</span>
            </p>
          </FadeIn>
        );
      })}
    </div>
  );
};

var items = [
  {
    header: "How often are we going to speak?",
    paragraphs: [
      "That’s up to you.",
      "I expect to communicate at least every other day during the design stage, but I’m happy to consolidate my updates if you’d rather me get on with things behind the scenes. ",
      "For the development stage I’ll give you weekly or bi-weekly updates on progress, for example when I finish developing the landing page, or when I finish a complicated animation, but let me know if you’d prefer more granular updates; I’ll happily adjust my communication process accordingly.",
    ],
  },
  {
    header: "What if I don’t like the designs?",
    paragraphs: [
      "I take this concern very seriously so I’ve structured my process to make this scenario as unlikely and as painless for you as possible.",
      "I provide three review rounds for my work (most agencies only provide one) and you’re able to give me live feedback at any time via FigJam.",
      "I also don’t lock you behind one huge deposit like most agencies do. If you’re still unhappy with the designs after all of the review rounds, well you haven’t paid for any of my development, deployment or maintenance services yet, so it’s painless for you to just take the designs and leave.",
      "No hard feelings either! My doors will remain open if you’d like to resume work later.",
    ],
  },
  {
    header: "Do you work with clients outside of the UK?",
    paragraphs: [
      "Absolutely.",
      "I’m very flexible and more than happy to accommodate to your timezone.",
    ],
  },
  {
    header: "I’d rather not pay in chunks, can we consolidate the payments?",
    paragraphs: [
      "Of course!",
      "Let me know what works best for you; I offer these gradual payments as a benefit to you, but we can certainly do things your way.",
    ],
  },
  {
    header: "I don’t need all these of steps, will you still work with me?",
    paragraphs: [
      "Absolutely. ",
      "What’s written above is only a blueprint. I’m happy to alter my process to cater to your specific needs.",
    ],
  },
  {
    header: "Why should I pick you over an agency?",
    paragraphs: [
      "First, let me say that most agencies provide excellent services that might be ideal for you and your business. Who you should go to really depends on your business’ needs and budget.",
      "I offer services in web design and development, but agencies typically offer additional services such as copywriting, content strategy, product design, and social media marketing.",
      "Since agencies frequently have several projects running at the same time, they’re typically no faster than me in completing a project. However some agencies offer clients the expensive option to expedite the project, which results in a turnaround time that simply cannot be beaten by a single person.",
      "Having said that, agencies and I both produce a polished end product. And for that end product, I offer strikingly cheaper prices. Seriously, a fraction of their price.",
      "And, unlike agencies, I don’t demand half of the total project cost upfront. All payments are spread out over the course of the project, giving you the leverage to drop out at any time without penalty.",
      "You’ll also get a much more personal business relationship with me. I’m not ‘ABC Web Design Agency’. I’m Daniel. I’m easygoing and approachable, and I’ll be with you all the way through the project. There’s no need to worry about speaking to a new person on each video call.",
      "In short, if your business has additional needs outside of web design and development, or if you have a tight deadline, hire an agency; otherwise, hire me. You’ll get the same high-quality product while also benefiting from a much more personal business relationship, all at a hugely discounted rate.",
    ],
  },
];
