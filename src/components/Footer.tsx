import Em from "@components/Em";
import Link from "@components/Link";
import Navbar from "@components/Navbar";
import { useRouter } from "next/router";
import classNames from "classnames";

interface Props {}

const colorClassNames = {
  green: {
    heading: "from-greenDark-9 to-greenDark-11",
    button:
      "bg-greenDark-3/20 hover:bg-greenDark-4/20 border-greenDark-6 hover:border-greenDark-8 text-greenDark-9",
  },
  violet: {
    heading: "from-violetDark-9 to-violetDark-11",
    button:
      "bg-violetDark-3/20 hover:bg-violetDark-4/20 border-violetDark-6 hover:border-violetDark-8 text-violetDark-9",
  },
  orange: {
    heading: "from-orangeDark-9 to-orangeDark-10",
    button:
      "bg-orangeDark-3/20 hover:bg-orangeDark-4/20 border-orangeDark-6 hover:border-orangeDark-8 text-orangeDark-9",
  },
  sky: {
    heading: "from-skyDark-9 to-skyDark-11",
    button:
      "bg-skyDark-3/20 hover:bg-skyDark-4/20 border-skyDark-6 hover:border-skyDark-8 text-skyDark-9",
  },
  red: {
    heading: "from-redDark-9 to-redDark-11",
    button:
      "bg-redDark-3/20 hover:bg-redDark-4/20 border-redDark-6 hover:border-redDark-8 text-redDark-9",
  },
};

const generateClassName = (path: string) => {
  let headingClass: string, buttonClass: string;

  if (path === "/") {
    headingClass = colorClassNames.red.heading;
    buttonClass = colorClassNames.red.button;
  } else if (path === "/profile") {
    headingClass = colorClassNames.violet.heading;
    buttonClass = colorClassNames.violet.button;
  } else if (path === "/products") {
    headingClass = colorClassNames.green.heading;
    buttonClass = colorClassNames.green.button;
  } else if (path === "/projects") {
    headingClass = colorClassNames.orange.heading;
    buttonClass = colorClassNames.orange.button;
  } else if (path === "/process") {
    headingClass = colorClassNames.sky.heading;
    buttonClass = colorClassNames.sky.button;
  }
  return { headingClass, buttonClass };
};

const Footer: React.FC<Props> = () => {
  const { asPath } = useRouter();
  const { headingClass, buttonClass } = generateClassName(asPath);

  return (
    <>
      <footer className="relative pt-36 lg:pt-52">
        <div className="relative flex w-full flex-col items-center px-3 pb-32 md:px-8 lg:pb-48">
          <h2
            className={classNames(
              headingClass,
              "w-fit bg-gradient-to-br bg-clip-text text-center font-heading text-5xl font-extrabold leading-tight text-transparent md:text-7xl md:leading-tight ",
            )}
          >
            Get in touch!
          </h2>
          <p className="mx-auto mt-5 max-w-lg px-4 text-center text-xl leading-tight md:mt-6 md:max-w-xl  md:text-2xl md:leading-tight ">
            My inbox is <Em>always open</Em>. Feel free to shoot me a message
            and I&apos;ll get back to you as soon as possible!
          </p>
          <Link
            mail
            className={classNames(
              buttonClass,
              "mt-12 rounded-lg border-2 py-2 px-7 font-heading text-3xl font-bold shadow duration-200 md:py-3 md:px-10 md:text-4xl",
            )}
          >
            Say Hello
          </Link>
        </div>
        <Navbar />
      </footer>
    </>
  );
};
export default Footer;
