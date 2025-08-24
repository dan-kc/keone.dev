import type { Color } from "src/types";
import Contents from "./Contents";
import Title from "./Title";

interface Props {
  children: React.ReactNode;
  color: Color;
  heading: string;
  path: string;
  subHeading: string;
}

const PageContainer: React.FC<Props> = ({
  children,
  color,
  heading,
  subHeading,
  path,
}) => {
  return (
    <main>
      <Title
        color={color}
        heading={heading}
        subHeading={subHeading}
        path={path}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-10">
        <div className="flex gap-10 lg:gap-20 xl:gap-28">
          <div>{children}</div>
          <Contents color={color} />
        </div>
      </div>
    </main>
  );
};
export default PageContainer;
