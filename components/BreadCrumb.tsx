import { ChevronRightIcon, HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";

const BreadCrumb = () => {
  const { asPath } = useRouter();
  const lowerCaseText = asPath.slice(1);
  const upperCaseText =
    lowerCaseText.charAt(0).toUpperCase() + lowerCaseText.slice(1);

  return (
    <div className="flex items-center gap-1">
      <Link href="/">
        <HomeIcon className="h-5 w-5" />
      </Link>
      <ChevronRightIcon className="h-4 w-4" />
      <h1 className="font-heading text-lg font-semibold">{upperCaseText}</h1>
    </div>
  );
};
export default BreadCrumb;
