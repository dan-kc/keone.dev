import Head from "next/head";
import Section from "@components/Section";
import PageContainer from "@components/PageContainer";
import List from "@components/List";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | Daniel Keone Cox</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <PageContainer
        color="violet"
        heading={"Who does this guy think he is?"}
        subHeading={`Hello, I'm Daniel - a mathematician from London providing services in web design and development.`}
      >
        <Why />
        <DesignSkills />
        <DevelopmentSkills />
      </PageContainer>
    </>
  );
}

const Why = () => {
  return (
    <Section heading="Why the Web?" color="violet">
      <p>
        I began programming in my maths degree at University of Bath, and after
        delving into some research papers on behavioural design while
        procrastinating my degree, I also became fascinated by the science
        behind excellent UX/UI.
        <br />
        <br />
        These interests in tandem abruptly steered my career trajectory away
        from finance and toward designing and developing engaging web
        experiences, inspiring me to spend three years learning the web and all
        of its intricacies after earning my degree.
      </p>
    </Section>
  );
};
const DesignSkills = () => {
  return (
    <Section heading="Design Skills" color="violet">
      <div className="grid gap-7 lg:grid-cols-2">
        <div>
          <h3 className="mb-1 text-xl">Software</h3>
          <List
            items={["Figma", "Adobe Illustrator", "Adobe After Effects"]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
        <div>
          <h3 className="mb-1 text-xl">Expertise</h3>
          <List
            items={[
              "Behavioural web design",
              "Checkout funnels",
              "Landing pages",
            ]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
      </div>
    </Section>
  );
};
const DevelopmentSkills = () => {
  return (
    <Section heading="Development Skills" color="violet" last>
      <div className="grid gap-7 lg:grid-cols-2">
        <div>
          <h3 className="mb-1 text-xl">Languages</h3>
          <List
            items={["Typescript / Javascript", "HTML / CSS", "Go"]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
        <div>
          <h3 className="mb-1 text-xl">Frameworks</h3>
          <List
            items={["React", "Next.js", "Remix", "Astro", "Node.js"]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
        <div>
          <h3 className="mb-1 text-xl">Deployment / CMS Solutions</h3>
          <List
            items={["Vercel", "Shopify", "Crystallize", "Fly.io", "Prismic"]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
        <div>
          <h3 className="mb-1 text-xl">Expertise</h3>
          <List
            items={[
              "Super fast eCommerce storefronts",
              "Web animations (GSAP, Lottie, Framer Motion)",
              "Edge deployment",
              "API servers",
            ]}
            className="text-lg text-slateDark-11"
            dashClassName="text-violetDark-11"
          />
        </div>
      </div>
    </Section>
  );
};
