import clsx from "clsx";
import AnimatedLink from "src/components/AnimatedLink";
import Em from "src/components/Em";
import FadeIn from "src/components/FadeIn";
import List from "src/components/List";
import PageContainer from "src/components/PageContainer";
import Section from "src/components/Section";

interface Props {
  path: string;
}

const Products: React.FC<Props> = ({ path }) => {
  return (
    <PageContainer
      color="green"
      heading="Products, services and prices"
      subHeading={`I've packaged some of my services into products for your convenience and to help you get a general idea of my workflow, pricing and timescale.`}
      path={path}
    >
      <Ecommerce />
      <Portfolio />
      <LandingPage />
      <AdditionalServices />
    </PageContainer>
  );
};

interface ArticleProps {
  heading?: string;
  children: React.ReactNode;
}

const Article = ({ heading, children }: ArticleProps) => {
  return (
    <article className="text-lg">
      {heading ? (
        <h3 className="font-heading mb-3 text-4xl leading-tight font-extrabold">
          {heading}
        </h3>
      ) : null}
      {children}
    </article>
  );
};

const Ecommerce = () => {
  return (
    <Section heading="Ecommerce Store" color="green">
      <Article>
        Reinvent your online business with a brand new, bespoke eCommerce
        storefront that’s designed from the ground up to drive sales, and is
        developed using the fastest, most reliable web frameworks available!
      </Article>

      <Article heading="Design">
        <div>
          Your new storefront will be designed to:
          <br />
          <br />
          <List
            dashClassName="text-greenDark-11"
            items={[
              "Attract new users",
              "Convert users into customers",
              "Maximise sales from each customer",
              "Achieve any unique business requirements",
            ]}
          />
          <br />
          CRO (Conversion Rate Optimisation) is a crucial aspect of my design
          process for every page, especially the checkout, where I’ll apply my
          expertise in behavioural design to create a funnel that’s bespoke to
          your business’ needs.
          <br />
          <br />
          And don’t worry about your website being responsive, I design mobile
          first!
        </div>
      </Article>

      <Article heading="Development">
        <p className="mt-3">
          My favourite web frameworks for eCommerce storefronts are{" "}
          <AnimatedLink href="https://nextjs.org/" newTab>
            Next.js
          </AnimatedLink>
          , which is used by huge corporations such as Target and Nike, and{" "}
          <AnimatedLink href="https://remix.run/" newTab>
            Remix
          </AnimatedLink>
          , which is a newer technology that boasts even better performance in
          many cases.
        </p>
      </Article>

      <Article heading="Content management">
        <p>
          My go-to headless eCommerce solution is{" "}
          <AnimatedLink href="https://www.shopify.com" newTab>
            {" "}
            Shopify
          </AnimatedLink>
          .
          <br />
          <br />
          Along with being secure, versatile, and future proof, Shopify is also
          equipped with a simple, intuitive user interface that makes updating
          your website with new content or adding new products a breeze for you
          and your team.
          <br />
          <br />
          Shopify also boast{" "}
          <AnimatedLink href="https://www.shopify.com/id/pricing" newTab>
            incredible value
          </AnimatedLink>{" "}
          in a market where other solutions can mean yearly bills of $50,000
          (Elastic Path) up to as much as $300,000 (CommerceTools).
          <br />
          <br />
          These other solutions often come with a slew of bells and whistles,
          but for most businesses these extra features are left unused, eating
          into your business’ money pot.
          <br />
          <br />
          But keep in mind that I'm platform agnostic. If you already have a
          headless eCommerce solution that you want to stick with, that's fine
          with me!
          <br />
          <br />
          What’s more, if you have a fast approaching deadline or a limited
          budget, such that I’m not afforded enough time to design and develop a
          fully custom storefront, I'll gladly adapt my designs to fit one of
          Shopify's templates.
          <br />
          <br />
          On the other end of the spectrum, if you require not only a custom
          storefront, but also a custom backend system, I'll build a solution
          that meets your exact business needs on top of a Product Information
          Management (PIM) system like{" "}
          <AnimatedLink
            href="https://crystallize.com/#this-is-crystallize"
            newTab
          >
            Crystalize
          </AnimatedLink>
          .
        </p>
      </Article>

      <Article heading="Price & timeframe">
        <p>
          Ecommerce stores vary hugely in scope and feature set, and as a
          result, they also vary hugely in cost and turnaround time.
          <br />
          <br />
          My best estimate is that for the design, development and deployment of
          a mid-featured, blazingly fast eCommerce store, it will cost between
          £9,500 and £18,500 and take between 9 and 14 weeks to complete.
        </p>
      </Article>
    </Section>
  );
};

const Portfolio = () => {
  return (
    <Section heading="Portfolio" color="green">
      <Article>
        <div>
          Impress your potential clients with a stunning new Portfolio site
          that’s bespoke to your artistic style, validating your status as a
          creative professional.
          <br />
          <br />
          As a creative professional your business <Em>IS</Em> your website.
          It’s the place where you:
          <br />
          <br />
          <List
            dashClassName="text-greenDark-11"
            items={[
              "Introduce yourself to potential clients",
              "Show off your latest works",
              "Display your skills and expertise",
              "Express your artistic style",
              "Provide ways to contact you",
            ]}
          />
          <br />
          ...and so on.
        </div>
      </Article>

      <Article heading="Design">
        <p>
          Your portfolio will be designed to generate qualified leads from
          potential clients who are likely to do business with you.
          <br />
          <br />A portfolio is just as scientific as an eCommerce store in its
          design, and just as important to its owner's business.
        </p>
      </Article>

      <Article heading="Development">
        <p>
          Static site generators like{" "}
          <AnimatedLink href="https://astro.build/" newTab>
            Astro
          </AnimatedLink>{" "}
          are often perfect for projects like these, to keep the file size down
          and the performance high!
          <br />
          <br />
          I’m also an expert in the animation libraries{" "}
          <AnimatedLink href="https://greensock.com/" newTab>
            GSAP
          </AnimatedLink>{" "}
          and{" "}
          <AnimatedLink href="https://www.framer.com/motion/" newTab>
            Framer Motion
          </AnimatedLink>
          , enabling a beautifully animated showcase of your work if needs be!
        </p>
      </Article>

      <Article heading="Content management">
        <p>
          <AnimatedLink href="https://prismic.io/marketers" newTab>
            Prismic
          </AnimatedLink>{" "}
          is my go-to CMS solution. You'll use this to update your website with
          your latest works to keep your website looking fresh.
          <br />
          <br />
          It has a generous free tier too!
        </p>
      </Article>

      <Article heading="Price & timeframe">
        <p>
          I estimate that a portfolio will cost between £7,500 and £13,500 and
          will take 6-8 weeks to complete, depending on the scope of the
          animations implemented.
          <br />
          <br />
          Beautiful animations are time-consuming to make performant across all
          browsers, devices, and screen sizes, so they are a big factor in
          evaluating price and timescale.
        </p>
      </Article>
    </Section>
  );
};
const services = [
  {
    heading: "User logins",
    subHeading: "Log in via email/password or Google, Facebook etc…",
  },
  {
    heading: "REST / GraphQL API servers",
    subHeading:
      "written in Typescript, or Go - deployed on traditional or edge servers",
  },
  {
    heading: "Email Marketing Service Integration",
    subHeading: "with Mailchimp ",
  },
  {
    heading: "Android / IOS app development",
    subHeading: "using React Native",
  },
  {
    heading: "Automated sales tax",
    subHeading: "with Taxjar",
  },
  {
    heading: "Analytics integration",
    subHeading: "with HotJar and/or Google Analytics",
  },
  {
    heading: "Custom email domiain setup",
    subHeading:
      "A personalised business email for you and your business' employees",
  },
];

const AdditionalServices = () => {
  return (
    <Section heading="Additional Services" color="green" last>
      <Article>
        <ul>
          {services.map((service, index) => {
            const isLast = index === services.length - 1 ? true : false;
            return (
              <li className={clsx(isLast ? "" : "pb-4")} key={index}>
                <FadeIn
                  from={-5}
                  className="font-heading flex gap-1 text-2xl leading-tight font-extrabold lg:leading-tight"
                >
                  <span className="text-greenDark-11">-</span>
                  <div className="ml-2">
                    <h3 className="mb-1 lg:mb-2">{service.heading}</h3>
                    <p className="font-body text-slateDark-11 text-base leading-tight font-normal lg:text-lg lg:leading-tight">
                      {service.subHeading}
                    </p>
                  </div>
                </FadeIn>
              </li>
            );
          })}
        </ul>
      </Article>
      <Article>
        <p>
          Of course, every website has unique requirements and considerations,
          so take my price and timescale estimates with a grain of salt.
          <br />
          <br />
          The only way to know for sure is to{" "}
          <AnimatedLink mail>contact me</AnimatedLink> for a quote!
        </p>
      </Article>
    </Section>
  );
};

const LandingPage = () => {
  return (
    <Section heading="Landing Page" color="green">
      <Article>
        <p>
          For businesses that operate primarily outside of the web, one page is
          often all it takes to introduce and inform users about their products
          and services.
          <br />
          <br />
          An eye-catching landing page would establish your brand’s online
          presence and open you up to a huge set of potential clients who would
          otherwise be left in the dark!
          <br />
          <br />
          Single landing pages are very similar to portfolios in their design
          and development, but they may differ in terms of scope and content
          management. Portfolios may require multiple pages or integration with
          a CMS so that the owner can regularly update their website with new
          works, but for many businesses, neither is necessary.
        </p>
      </Article>

      <Article heading="Price & timeframe">
        <p>
          A landing page should cost between £4,800 and £7,700 and take about 5
          weeks to complete; however, as with portfolio websites, price and
          timescale may vary depending on the scope of the animations
          implemented.
        </p>
      </Article>
    </Section>
  );
};
export default Products;
