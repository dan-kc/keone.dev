import type { Color } from "src/types";
import BreadCrumb from "./BreadCrumb";
import clsx from "clsx";

const colorClassNames = {
  green: "from-greenDark-9 to-greenDark-11",
  orange: "from-orangeDark-9 to-orangeDark-10",
  violet: "from-violetDark-9 to-violetDark-11",
  sky: "from-skyDark-9 to-skyDark-11",
};

interface Props {
  heading: string;
  subHeading: string;
  path: string;
  color: Color;
}

const Title: React.FC<Props> = ({ heading, subHeading, color, path }) => {
  return (
    <div className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="md:max-w-xl">
          <BreadCrumb path={path} />
          <h2
            className={clsx(
              "font-heading mt-4 w-fit bg-gradient-to-bl bg-clip-text text-5xl leading-tight font-extrabold text-transparent md:text-6xl md:leading-tight",
              colorClassNames[color],
            )}
          >
            {heading}
          </h2>
          <p className="mt-4 text-lg">{subHeading}</p>
        </div>
      </div>
    </div>
  );
};
export default Title;
