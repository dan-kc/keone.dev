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
      <main className="flex flex-col gap-36 pt-12 lg:gap-52 lg:pt-32 ">
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
      <div className="overflow-hidden px-3">
        <article className="relative mx-auto flex max-w-md flex-col overflow-hidden rounded-2xl border border-slateDark-6 bg-slateDark-2 shadow sm:max-w-2xl sm:flex-row-reverse md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <div className="z-10 w-fit flex-none border-b border-slateDark-6 sm:w-[345px] sm:border-none md:w-[365px] lg:w-[390px] xl:w-[450px]">
            <Image
              src="/images/self-portrait-1.webp"
              alt="self portrait"
              height={532.967}
              width={450}
              quality={100}
              priority
            />
          </div>
          <div className="z-10 flex flex-col justify-between p-6">
            <div>
              <DoubleText />
              <p className="mt-4 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Renovate your online business with a brand new website that
                exceeds the conversion rates of your competitors, so you can
                finally focus on your business.
              </p>
            </div>
            <div className="mt-6 flex justify-end md:mt-0">
              <Link
                href="/profile"
                className="flex items-center gap-2 rounded-lg border border-slateDark-7 bg-slateDark-1/80 py-2 px-5 font-heading text-xl font-semibold shadow duration-100 hover:border-slateDark-8 hover:bg-slateDark-3/60  sm:text-base md:text-xl xl:py-3 xl:px-6"
              >
                View Profile
                <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6" />
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
    <div className="px-6 md:sticky md:top-20 md:px-0">
      <h2 className="max-w-xs font-heading text-5xl font-extrabold leading-tight sm:max-w-md sm:text-6xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
        Worried about{" "}
        <span className="text-greenDark-11">your website&apos;s metrics?</span>
      </h2>
      <div className="hidden pt-5 md:block">
        <p className="text-lg lg:text-xl">
          With me you&apos;ll get a lightning fast website and a huge edge over
          your competitors. Did I mention that I&apos;m drastically cheaper than
          agencies too?
        </p>
        <div className="mt-10 flex justify-start">
          <Link
            href="/products"
            className="flex items-center gap-2 rounded-lg border border-greenDark-6 bg-greenDark-3/30 py-3 px-6 font-heading text-xl font-semibold shadow-lg duration-100 hover:border-greenDark-8 hover:bg-greenDark-2"
          >
            View Products & Prices
            <ArrowRightIcon className="h-7 w-7" />
          </Link>
        </div>
      </div>
    </div>
    <div className="mt-10 flex flex-col gap-10 md:row-span-2 md:mt-3">
      <Card heading="Lighthouse scores">
        <div className="mt-7 flex justify-between gap-3 px-2">
          <ProgressCircle percentage={98} caption="Performance" />
          <ProgressCircle percentage={98} caption="Accessibility" delay={0.2} />
          <ProgressCircle
            percentage={92}
            caption="Best Practices"
            delay={0.4}
          />
          <ProgressCircle percentage={100} caption="SEO" delay={0.6} />
        </div>
        <div className="relative mt-6 inline-block text-base lg:text-lg">
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
        <div className="mt-6 flex flex-col">
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
        <div className="relative mt-3 inline-block text-base lg:text-lg">
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
    <div className="pt-10 md:hidden">
      <p className="px-6 text-lg">
        With me you&apos;ll get a lightning fast website and a huge edge over
        your competitors.
        <br />
        <br />
        Did I mention that I&apos;m drastically cheaper than agencies too?
      </p>
      <div className="mt-10 flex justify-end pr-6">
        <Link
          href="/products"
          className="flex items-center gap-2 rounded-lg border border-greenDark-6 bg-greenDark-3/30 py-2 px-5 font-heading text-base font-semibold shadow-lg duration-100 hover:border-greenDark-8 hover:bg-greenDark-2 sm:py-3 sm:px-6 sm:text-xl"
        >
          View Products & Prices
          <ArrowRightIcon className="h-5 w-5 sm:h-7 sm:w-7" />
        </Link>
      </div>
    </div>
  </GridSection>
);

function ProcessSection() {
  return (
    <GridSection color="slate">
      <div className="order-2 px-6 md:sticky md:top-20 md:px-0">
        <h2 className="max-w-xs font-heading text-5xl font-extrabold leading-tight sm:max-w-md sm:text-6xl sm:leading-tight md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
          My process is{" "}
          <span className="text-skyDark-11">designed around you</span>
        </h2>
        <div className="hidden pt-5 md:block">
          <p className="text-lg lg:text-xl">
            Sound perfect for you and your business? Take a look at my detailed
            9-step process to find out more.
          </p>
          <div className="mt-10 flex justify-start">
            <Link
              href="/process"
              className="flex items-center gap-2 rounded-lg border border-skyDark-6 bg-skyDark-3/30 py-3 px-6 font-heading text-xl font-semibold shadow-lg duration-100 hover:border-skyDark-8 hover:bg-skyDark-2"
            >
              View Process
              <ArrowRightIcon className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col gap-10 md:row-span-2 md:mt-3">
        <Card heading="No large upfront deposits" color="sky">
          <p className="mt-5 text-base text-skyDark-12 lg:text-lg">
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
          <p className="mt-5 text-base text-skyDark-12 lg:text-lg">
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
          <p className="mt-5 text-base text-skyDark-12 lg:text-lg">
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
          <p className="mt-5 text-base text-skyDark-12 lg:text-lg">
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
      <div className="px-6 pt-10 md:hidden">
        <p className="text-lg">
          Sound perfect for you and your business? Take a look at my detailed
          9-step process to find out more.
        </p>
        <div className="mt-10 flex justify-end">
          <Link
            href="/process"
            className="flex items-center gap-2 rounded-lg border border-skyDark-7 bg-skyDark-3/30 py-2 px-5 font-heading text-base font-semibold shadow-lg duration-100 hover:border-skyDark-8 hover:bg-skyDark-2 sm:py-3 sm:px-6 sm:text-xl"
          >
            View Process
            <ArrowRightIcon className="h-5 w-5 sm:h-7 sm:w-7" />
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
      <div className="mx-auto max-w-md grid-cols-2 gap-10 px-5 sm:max-w-lg md:grid md:max-w-3xl lg:max-w-4xl lg:gap-20 xl:max-w-5xl">
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
        "rounded-xl border p-6 shadow",
        color === "sky"
          ? "border-skyDark-6 bg-skyDark-3/30"
          : "border-greenDark-6 bg-greenDark-3/30",
      )}
    >
      <h3
        className={classNames(
          "font-heading text-3xl font-bold leading-tight lg:text-4xl lg:leading-tight",
          color === "sky" ? "text-skyDark-11" : "text-greenDark-11",
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
    <div className="relative font-heading text-3xl font-extrabold leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight xl:text-[40px]">
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
          <div className="flex whitespace-nowrap align-baseline">
            <div className="whitespace-nowrap">A</div>
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="overflow-hidden whitespace-nowrap bg-slateDark-2 text-greenDark-11"
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
                className="overflow-hidden whitespace-nowrap bg-slateDark-2 text-yellowDark-10"
                transition={{ duration: 0.8, delay: isDesign ? 0.3 : 0.3 }}
              >
                &nbsp;designer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className="whitespace-nowrap">specialising in</div>

          <div className="flex whitespace-nowrap align-baseline">
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="overflow-hidden whitespace-nowrap bg-slateDark-2 text-redDark-10"
                transition={{ duration: 0.8, delay: isDesign ? 0.4 : 0.2 }}
              >
                conversion rate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </motion.div>
            </div>
          </div>

          <div className="flex whitespace-nowrap align-baseline">
            <div>
              <motion.div
                initial={{ maxWidth: 0 }}
                animate={{ maxWidth: isDesign ? "100%" : "0%" }}
                className="overflow-hidden whitespace-nowrap bg-slateDark-2 text-redDark-10"
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
