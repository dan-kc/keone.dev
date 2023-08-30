import AnimatedLink from "@components/AnimatedLink";
import Em from "@components/Em";
import ProgressBar from "@components/ProgressBar";
import ProgressCircle from "@components/ProgressCircle";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { Color } from "types";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Keone Cox | Web Designer \ Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="flex flex-col gap-36 lg:gap-52 pt-12 lg:pt-32 ">
        <ProfileSection />
        <MetricsSection />
        <ProcessSection />
      </main>
    </>
  );
}

const ProfileSection = () => {
  return (
    <section>
      <div className="px-3 overflow-hidden">
        <article className="relative max-w-md sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto rounded-2xl border border-slateDark-6 flex flex-col sm:flex-row-reverse overflow-hidden shadow bg-slateDark-2">
          <div className="w-fit sm:w-[345px] md:w-[365px] lg:w-[390px] xl:w-[450px] flex-none border-b sm:border-none border-slateDark-6 z-10">
            <Image
              src="/images/self-portrait-1.webp"
              alt="self portrait"
              height={532.967}
              width={450}
              quality={100}
              priority
            />
          </div>
          <div className="p-6 flex flex-col justify-between z-10">
            <div>
              <DoubleText />
              <p className="mt-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Renovate your online business with a brand new website that
                exceeds the conversion rates of your competitors, so you can
                finally focus on your business.
              </p>
            </div>
            <div className="flex justify-end mt-6 md:mt-0">
              <Link
                href="/profile"
                className="bg-slateDark-1/80 hover:bg-slateDark-3/60 hover:border-slateDark-8 border-slateDark-7 text-xl sm:text-base md:text-xl flex items-center gap-2 border py-2 px-5 xl:py-3 xl:px-6 rounded-lg  font-heading font-semibold shadow duration-100"
              >
                View Profile
                <ArrowRightIcon className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

const MetricsSection = () => (
  <GridSection color="sage">
    <div className="md:sticky md:top-20 px-6 md:px-0">
      <h2 className="max-w-xs sm:max-w-md font-heading leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl sm:text-6xl md:text-5xl lg:text-6xl">
        Worried about{" "}
        <span className="text-greenDark-11">your website&apos;s metrics?</span>
      </h2>
      <div className="hidden md:block pt-5">
        <p className="text-lg lg:text-xl">
          With me you&apos;ll get a lightning fast website and a huge edge over
          your competitors. Did I mention that I&apos;m drastically cheaper than
          agencies too?
        </p>
        <div className="flex justify-start mt-10">
          <Link
            href="/products"
            className="flex items-center gap-2 bg-greenDark-3/30 border border-greenDark-6 py-3 px-6 rounded-lg hover:border-greenDark-8 hover:bg-greenDark-2 font-heading font-semibold shadow-lg text-xl duration-100"
          >
            View Products & Prices
            <ArrowRightIcon className="w-7 h-7" />
          </Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-10 mt-10 md:mt-3 md:row-span-2">
      <Card heading="Lighthouse scores">
        <div className="flex gap-3 justify-between mt-7 px-2">
          <ProgressCircle percentage={98} caption="Performance" />
          <ProgressCircle percentage={98} caption="Accessibility" delay={0.2} />
          <ProgressCircle
            percentage={92}
            caption="Best Practices"
            delay={0.4}
          />
          <ProgressCircle percentage={100} caption="SEO" delay={0.6} />
        </div>
        <div className="relative inline-block mt-6 text-base lg:text-lg">
          <AnimatedLink
            href="https://developer.chrome.com/docs/lighthouse/overview/"
            linkClassName="text-sageDark-12 "
            underlineClassName="bg-sageDark-12"
            newTab
          >
            Google Lighthouse
          </AnimatedLink>{" "}
          is a tool for measuring the quality of web pages, and I think they
          like keone.dev.
        </div>
      </Card>

      <Card heading="Core web vitals">
        <div className="flex flex-col mt-6">
          <ProgressBar
            percentage={85}
            title="Largest Contentful Paint (LCP)"
            value={1.4}
            suffix="s"
          />
          <ProgressBar
            percentage={90}
            title="First Input Delay (FID)"
            value={17}
            suffix="ms"
          />
          <ProgressBar
            percentage={95}
            title="Cumulative Layout Shift (CLS)"
            value={0}
          />
        </div>
        <div className="relative inline-block mt-3 text-base lg:text-lg">
          <AnimatedLink
            href="https://web.dev/vitals/"
            linkClassName="text-sageDark-12 "
            underlineClassName="bg-sageDark-12"
            newTab
          >
            Core web vitals
          </AnimatedLink>{" "}
          are official Google ranking factors, but rest assured you don&apos;t
          have to worry about any of that when working with me.
          <br />
          <br />I use the fastest web frameworks available and I&apos;m always
          searching for bleeding-edge solutions to improve performance.
          <br />
          <br />
          Many web development agencies, including some of the world&apos;s
          largest, still use slow and dated web frameworks because they&apos;re
          &apos;proven&apos;, despite only being &apos;proven&apos; 5 years ago
          and sluggish today.
          <br />
          <br />
          <Em inViewClassName="text-sageDark-12">I&apos;m faster</Em>.
        </div>
      </Card>
    </div>
    <div className="md:hidden pt-10">
      <p className="text-lg px-6">
        With me you&apos;ll get a lightning fast website and a huge edge over
        your competitors.
        <br />
        <br />
        Did I mention that I&apos;m drastically cheaper than agencies too?
      </p>
      <div className="flex justify-end mt-10 pr-6">
        <Link
          href="/products"
          className="flex items-center gap-2 bg-greenDark-3/30 border border-greenDark-6 py-2 px-5 sm:py-3 sm:px-6 rounded-lg hover:border-greenDark-8 hover:bg-greenDark-2 font-heading font-semibold shadow-lg text-base sm:text-xl duration-100"
        >
          View Products & Prices
          <ArrowRightIcon className="w-5 h-5 sm:w-7 sm:h-7" />
        </Link>
      </div>
    </div>
  </GridSection>
);

function ProcessSection() {
  return (
    <GridSection color="slate">
      <div className="md:sticky md:top-20 px-6 order-2 md:px-0">
        <h2 className="max-w-xs sm:max-w-md font-heading leading-tight sm:leading-tight md:leading-tight lg:leading-tight font-extrabold text-5xl sm:text-6xl md:text-5xl lg:text-6xl">
          My process is{" "}
          <span className="text-skyDark-11">designed around you</span>
        </h2>
        <div className="hidden md:block pt-5">
          <p className="text-lg lg:text-xl">
            Sound perfect for you and your business? Take a look at my detailed
            9-step process to find out more.
          </p>
          <div className="flex justify-start mt-10">
            <Link
              href="/process"
              className="flex items-center gap-2 bg-skyDark-3/30 border border-skyDark-6 py-3 px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-semibold shadow-lg text-xl duration-100"
            >
              View Process
              <ArrowRightIcon className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 mt-10 md:mt-3 md:row-span-2">
        <Card heading="No large upfront deposits" color="sky">
          <p className="mt-5 text-base lg:text-lg text-skyDark-12">
            All payments are taken at milestones over the course of the project
            so that you have the freedom to, at any point, change your mind on
            future services or even drop out entirely.
            <br />
            <br />
            You will{" "}
            <Em inViewClassName="text-slateDark-12"> never feel locked in.</Em>
          </p>
        </Card>

        <Card heading="Multiple review rounds" color="sky">
          <p className="mt-5 text-base lg:text-lg text-skyDark-12">
            We&apos;ll conduct multiple detailed reviews of my work for the
            final designs.
            <br />
            <br />
            This is where I&apos;ll be able to take your suggestions onboard to
            keep myself informed on your style preferences so that you can be
            <Em className="text-slateDark-12">
              {" "}
              100% certain you&apos;re getting the website design you envisioned
            </Em>
            .
          </p>
        </Card>

        <Card heading="Live feedback" color="sky">
          <p className="mt-5 text-base lg:text-lg text-skyDark-12">
            All designs will be made available to you via{" "}
            <AnimatedLink
              href="https://www.figma.com/figjam/"
              newTab
              underlineClassName="bg-slateDark-12"
              linkClassName="text-slateDark-12"
            >
              FigJam
            </AnimatedLink>
            . This means that you can easily add comments, voice notes, likes,
            or dislikes to my designs at any time.
            <br />
            <br />
            This is perfect for requesting any minor changes outside of the
            formal review rounds.
          </p>
        </Card>

        <Card heading="Free maintenance" color="sky">
          <p className="mt-5 text-base lg:text-lg text-skyDark-12">
            After your website is deployed I&apos;ll be sticking around for an
            additional month to ensure that you and your team understand how to
            use
            <Em className="text-slateDark-12">
              {" "}
              every single feature of your website
            </Em>
            .
            <br />
            <br />
            I&apos;ll also fix any bugs and ensure that{" "}
            <Em className="text-slateDark-12">everything runs smoothly</Em>.
          </p>
        </Card>
      </div>
      <div className="md:hidden px-6 pt-10">
        <p className="text-lg">
          Sound perfect for you and your business? Take a look at my detailed
          9-step process to find out more.
        </p>
        <div className="flex justify-end mt-10">
          <Link
            href="/process"
            className="flex items-center gap-2 bg-skyDark-3/30 border border-skyDark-7 py-2 px-5 sm:py-3 sm:px-6 rounded-lg hover:border-skyDark-8 hover:bg-skyDark-2 font-heading font-semibold shadow-lg text-base sm:text-xl duration-100"
          >
            View Process
            <ArrowRightIcon className="w-5 h-5 sm:w-7 sm:h-7" />
          </Link>
        </div>
      </div>
    </GridSection>
  );
}

export function GridSection({
  children,
  color,
}: {
  children: ReactNode;
  color: Color;
}) {
  const className =
    color === "slate"
      ? "text-slateDark-12"
      : color === "sage"
      ? "text-sageDark-12"
      : "";

  return (
    <section className={className}>
      <div className="md:grid grid-cols-2 gap-10 lg:gap-20 max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto px-5">
        {children}
      </div>
    </section>
  );
}

const Card = ({
  heading,
  children,
  color = "green",
}: {
  heading: string;
  children: React.ReactNode;
  color?: Color;
}) => {
  return (
    <article
      className={classNames(
        "border rounded-xl shadow p-6",
        color === "sky"
          ? "bg-skyDark-3/30 border-skyDark-6"
          : "bg-greenDark-3/30 border-greenDark-6"
      )}
    >
      <h3
        className={classNames(
          "font-heading font-bold text-3xl lg:text-4xl leading-tight lg:leading-tight",
          color === "sky" ? "text-skyDark-11" : "text-greenDark-11"
        )}
      >
        {heading}
      </h3>
      {children}
    </article>
  );
};

const DoubleText = () => {
  const [isDesign, setIsDesign] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isMounted === false) {
      setIsMounted(true);
      return;
    }

    const interval = setInterval(() => {
      setIsDesign((prevState) => !prevState);
    }, 4500);

    return () => clearInterval(interval);
  }, [isDesign, isMounted]);

  return (
    <div className="relative font-heading font-extrabold text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
      <div className="relative">
        <div className="absolute top-0 left-0">
          <h1 className="whitespace-nowrap">
            <span>A</span>
            <span className="text-skyDark-11"> performance </span>
            <br />
            focused developer
            <br />
            specialising in
            <br />
            <span className="text-violetDark-10"> eCommerce </span>
            <br />
            <span className="text-violetDark-10"> storefronts </span>
          </h1>
        </div>

        <div className="relative">
          <div className="flex align-baseline whitespace-nowrap">
            <div className="whitespace-nowrap">A</div>
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="text-greenDark-11 whitespace-nowrap overflow-hidden bg-slateDark-2"
                transition={{ duration: 0.8, delay: isDesign ? 0 : 0.6 }}
              >
                &nbsp;user behaviour
              </motion.div>
            </div>
          </div>

          <div className="flex align-baseline">
            <div>focused</div>
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="text-yellowDark-10 whitespace-nowrap overflow-hidden bg-slateDark-2"
                transition={{ duration: 0.8, delay: isDesign ? 0.3 : 0.3 }}
              >
                &nbsp;designer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className="whitespace-nowrap">specialising in</div>

          <div className="flex align-baseline whitespace-nowrap">
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="text-redDark-10 whitespace-nowrap overflow-hidden bg-slateDark-2"
                transition={{ duration: 0.8, delay: isDesign ? 0.4 : 0.2 }}
              >
                conversion rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className="flex align-baseline whitespace-nowrap">
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="text-redDark-10 whitespace-nowrap overflow-hidden bg-slateDark-2"
                transition={{ duration: 0.8, delay: isDesign ? 0.6 : 0 }}
              >
                optimisation
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
