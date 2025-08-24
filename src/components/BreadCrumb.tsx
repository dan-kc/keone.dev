import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "./Link";

interface Props {
  path: string;
}

const BreadCrumb: React.FC<Props> = ({ path }) => {
  const text = path.slice(1, 2).toUpperCase() + path.slice(2);
  return (
    <div className="flex items-center gap-1">
      <Link href="/">
        <HomeIcon className="h-5 w-5" />
      </Link>
      <ChevronRightIcon className="h-4 w-4" />
      <h1 className="font-heading text-lg font-semibold">{text}</h1>
    </div>
  );
};

export default BreadCrumb;
