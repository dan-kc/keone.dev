import useUpdateDeviceMode from "@hooks/useUpdateDeviceMode";
import useUpdateWindowDimensions from "@hooks/useUpdateWindowDimensions";
import Link from "@components/Link";
import Lottie from "lottie-react";
import lottie from "@lib/lottie.json";
import { useRouter } from "next/router";
import classNames from "classnames";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import useFlyoutStore from "./hooks/stores/useFlyoutStore";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

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
  // {
  //   name: 'Projects',
  //   href: '/projects',
  //   colorClassName:
  //     'bg-orangeDark-3/20 border-orangeDark-6 text-orangeDark-9',
  // },
  {
    name: "Process",
    href: "/process",
    colorClassName: "bg-skyDark-3/20 border-skyDark-6 text-skyDark-9",
  },
];

export default function Navbar() {
  // Initialization Stuff
  useUpdateDeviceMode();
  useUpdateWindowDimensions();
  const setOpen = useFlyoutStore((state) => state.setOpen);

  return (
    <div className="relative max-w-3xl px-5 py-4 sm:mx-auto md:px-10 lg:max-w-5xl xl:max-w-7xl">
      <NavigationMenu.Root className="z-20 flex items-center justify-between py-1 font-display text-base">
        <Link
          aria-label="Home"
          href="/"
          className="pointer-events-auto mt-[6.4px] w-44 md:mt-[5.76px] lg:w-48"
        >
          <Lottie animationData={lottie} loop={true} />
        </Link>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="transform outline-none duration-100 hover:scale-110 md:hidden"
        >
          <HamburgerMenuIcon className="h-8 w-8" aria-hidden="true" />
        </button>
        <Nav />
      </NavigationMenu.Root>
    </div>
  );
}

function Nav() {
  const { asPath } = useRouter();
  const { colorClassName } = generateClassName(asPath);
  return (
    <div className="hidden md:block">
      <NavigationMenu.List className="flex gap-2">
        {navigation.map(({ href, name }) => {
          if (href === "/") {
            return;
          }
          return <NavItem key={name} href={href} name={name} />;
        })}
        <li className="mt-1 flex flex-col justify-center">
          <Link
            mail={true}
            className={classNames(
              "ml-1 rounded-md border py-2 px-4 font-heading font-extrabold shadow-lg duration-200",
              colorClassName,
            )}
          >
            Contact
          </Link>
        </li>
      </NavigationMenu.List>
    </div>
  );
}

function NavItem({ href, name }) {
  const { asPath } = useRouter();
  const isActive = asPath === href;
  return (
    <NavigationMenu.Item className="mt-1 flex flex-col justify-center">
      <Link href={href} passHref legacyBehavior>
        <NavigationMenu.Link
          active={isActive}
          className={classNames(
            isActive ? "" : "border-transparent hover:border-b-slateDark-6",
            "border-b-2 p-2 text-white transition duration-200",
          )}
        >
          {name}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
}

export function generateClassName(path: string) {
  let colorClassName: string;
  navigation.forEach((item) => {
    if (item.href === path) {
      colorClassName = item.colorClassName;
    }
  });
  return { colorClassName };
}
