import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import useFlyoutStore from "./hooks/stores/useFlyoutStore";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "./Link";
import clsx from "clsx";
import LottieAnimation from "./Lottie";

interface Props {
  path: string;
}
const Navbar: React.FC<Props> = ({ path }) => {
  const setOpen = useFlyoutStore((state) => state.setOpen);

  return (
    <div className="relative max-w-3xl px-5 py-4 sm:mx-auto md:px-10 lg:max-w-5xl xl:max-w-7xl">
      <NavigationMenu.Root className="font-display z-20 flex items-center justify-between py-1 text-base">
        <Link
          aria-label="Home"
          href="/"
          className="pointer-events-auto mt-[6.4px] w-44 md:mt-[5.76px] lg:w-48"
        >
          <LottieAnimation />
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="transform duration-100 outline-none hover:scale-110 md:hidden"
        >
          <HamburgerMenuIcon className="h-8 w-8" aria-hidden="true" />
        </button>
        <Nav path={path} />
      </NavigationMenu.Root>
    </div>
  );
};

const Nav: React.FC<Props> = ({ path }) => {
  const colorClassName = generateClassName(path);
  return (
    <div className="hidden md:block">
      <NavigationMenu.List className="flex gap-2">
        {navigation.map(({ href, name }) => {
          if (href === "/") {
            return;
          }
          return <NavItem key={name} href={href} name={name} path={path} />;
        })}
        <li className="mt-1 flex flex-col justify-center">
          <Link
            mail={true}
            className={clsx(
              "font-heading ml-1 rounded-md border px-4 py-2 font-extrabold shadow-lg duration-200",
              colorClassName,
            )}
          >
            Contact
          </Link>
        </li>
      </NavigationMenu.List>
    </div>
  );
};

interface NavItemProps {
  href: string;
  name: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, name, path }) => {
  const isActive = path === href;
  return (
    <NavigationMenu.Item className="mt-1 flex flex-col justify-center">
      <Link href={href}>
        <NavigationMenu.Link
          active={isActive}
          className={clsx(
            isActive ? "" : "hover:border-b-slateDark-6 border-transparent",
            "border-b-2 p-2 text-white transition duration-200",
          )}
        >
          {name}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

export const generateClassName = (path: string): string => {
  for (const item of navigation) {
    if (item.href === path) {
      return item.colorClassName;
    }
  }

  throw "Invalid path";
};

export default Navbar;

export const navigation = [
  {
    name: "Home",
    href: "/",
    colorClassName: "bg-redDark-3/20 border-redDark-6 text-redDark-9",
  },
  {
    name: "Profile",
    href: "/profile",
    colorClassName: "bg-violetDark-3/20 border-violetDark-6 text-violetDark-9",
  },
  {
    name: "Products",
    href: "/products",
    colorClassName: "bg-greenDark-3/20 border-greenDark-6 text-greenDark-9",
  },
  {
    name: "Process",
    href: "/process",
    colorClassName: "bg-skyDark-3/20 border-skyDark-6 text-skyDark-9",
  },
];
