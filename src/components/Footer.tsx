import clsx from "clsx";
import Em from "./Em";
import Link from "./Link";
import Navbar from "./Navbar";

interface Props {
  path: string;
}

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

interface ClassNameTuple {
  headingClass: string;
  buttonClass: string;
}

const generateClassName = (path: string): ClassNameTuple => {
  let headingClass: string, buttonClass: string;

  if (path === "/") {
    headingClass = colorClassNames.red.heading;
    buttonClass = colorClassNames.red.button;
    return { headingClass, buttonClass };
  } else if (path.includes("profile")) {
    headingClass = colorClassNames.violet.heading;
    buttonClass = colorClassNames.violet.button;
    return { headingClass, buttonClass };
  } else if (path.includes("products")) {
    headingClass = colorClassNames.green.heading;
    buttonClass = colorClassNames.green.button;
    return { headingClass, buttonClass };
  } else if (path.includes("projects")) {
    headingClass = colorClassNames.orange.heading;
    buttonClass = colorClassNames.orange.button;
    return { headingClass, buttonClass };
  } else if (path.includes("process")) {
    headingClass = colorClassNames.sky.heading;
    buttonClass = colorClassNames.sky.button;
    return { headingClass, buttonClass };
  }

  throw "Invalid path in Footer gen classname";
};

const Footer: React.FC<Props> = ({ path }) => {
  const { headingClass, buttonClass } = generateClassName(path);

  return (
    <>
      <footer className="relative pt-36 lg:pt-52">
        <div className="relative flex w-full flex-col items-center px-3 pb-32 md:px-8 lg:pb-48">
          <h2
            className={clsx(
              headingClass,
              "font-heading w-fit bg-gradient-to-br bg-clip-text text-center text-5xl leading-tight font-extrabold text-transparent md:text-7xl md:leading-tight",
            )}
          >
            Get in touch!
          </h2>
          <p className="mx-auto mt-5 max-w-lg px-4 text-center text-xl leading-tight md:mt-6 md:max-w-xl md:text-2xl md:leading-tight">
            My inbox is <Em>always open</Em>. Feel free to shoot me a message
            and I&apos;ll get back to you as soon as possible!
          </p>
          <Link
            mail
            className={clsx(
              buttonClass,
              "font-heading mt-12 rounded-lg border-2 px-7 py-2 text-3xl font-bold shadow duration-200 md:px-10 md:py-3 md:text-4xl",
            )}
          >
            Say Hello
          </Link>
        </div>
        <Navbar path={path} />
      </footer>
    </>
  );
};
export default Footer;
