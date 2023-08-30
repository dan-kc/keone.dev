import { ReactNode, useEffect } from "react";
import Link from "@components/Link";
import useDeviceModeStore from "@hooks/stores/useDeviceModeStore";
import { navigation, generateClassName } from "@components/Navbar";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import useFlyoutStore from "./hooks/stores/useFlyoutStore";
import disableScroll from "disable-scroll";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { EnvelopeOpenIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import * as RadixSeparator from "@radix-ui/react-separator";
import Image from "next/image";
import classNames from "classnames";
import {
  HomeIcon,
  PersonIcon,
  ArchiveIcon,
  CopyIcon,
  Pencil2Icon,
} from "@radix-ui/react-icons";

const icons = [HomeIcon, PersonIcon, ArchiveIcon, CopyIcon, Pencil2Icon];

export default function Flyout() {
  const device = useDeviceModeStore((state) => state.device);
  const setOpen = useFlyoutStore((state) => state.setOpen);
  const open = useFlyoutStore((state) => state.open);
  const { asPath } = useRouter();
  const { colorClassName } = generateClassName(asPath);

  useEffect(() => {
    setOpen(false);
  }, [asPath, setOpen]);

  useEffect(() => {
    if (device !== "Small") {
      setOpen(false);
    }
  }, [device, asPath, setOpen]);

  useEffect(() => {
    if (open === true) {
      disableScroll.on();
    } else if (open === false) {
      disableScroll.off();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <BackgroundOverlay />
          <NavRoot>
            <div className="flex gap-5 items-center">
              <div className="overflow-hidden rounded-full">
                <Image
                  src="/images/profile-photo.webp"
                  alt="Code snippet"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="text-base mb-1 ">Daniel Keone Cox</p>
                <div className="flex gap-2">
                  <Link href="https://github.com/dan-kc" newTab>
                    <GitHubLogoIcon className="h-5 w-5" />
                  </Link>
                  <Link mail>
                    <EnvelopeOpenIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <Separator />
            <PageLinks />
            <Separator className="mt-6 mb-6" />
            <div className="flex gap-3">
              <Link
                mail={true}
                aria-label="Contact"
                className={classNames(
                  "w-28 text-center rounded-md py-1.5 border shadow duration-50",
                  colorClassName
                )}
              >
                Contact
              </Link>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="w-28 text-center rounded-md py-1.5 border shadow bg-slateDark-3/20 border-slateDark-6 text-slateDark-11 duration-100"
              >
                Close
              </button>
            </div>
          </NavRoot>
        </>
      )}
    </AnimatePresence>
  );
}

function BackgroundOverlay() {
  const setOpen = useFlyoutStore((state) => state.setOpen);
  return (
    <motion.div
      className="fixed inset-0 bg-slateDark-1/90 z-40"
      onClick={() => setOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        opacity: { duration: 0.8, delay: 0.2 },
        default: { duration: 0 },
      }}
      layoutId="background"
      key="background"
    ></motion.div>
  );
}

interface RootProps {
  children: ReactNode;
}

function NavRoot({ children }: RootProps) {
  return (
    <NavigationMenu.Root asChild>
      <motion.div
        className="fixed top-0 h-full z-50 p-9 bg-slateDark-1 border-l border-slateDark-6/30 font-light font-body text-base"
        initial={{ right: "-100%" }}
        animate={{ right: "0%" }}
        exit={{ right: "-100%" }}
        transition={{
          right: { duration: 0.8 },
          default: { duration: 0 },
        }}
        layoutId="menu"
        key="menu"
      >
        {children}
      </motion.div>
    </NavigationMenu.Root>
  );
}

function Separator({ className }: { className?: string }) {
  return (
    <RadixSeparator.Root
      decorative
      className={classNames(
        "mt-7 mb-5 h-[1px] bg-gradient-to-r from-transparent to-transparent via-slateDark-6",
        className
      )}
    />
  );
}

function PageLinks() {
  const setOpen = useFlyoutStore((state) => state.setOpen);
  const { asPath } = useRouter();
  const { colorClassName } = generateClassName(asPath);

  return (
    <NavigationMenu.List className="flex flex-col gap-1">
      {navigation.map((item, index) => {
        const Icon = icons[index];
        const isActive = asPath === item.href;
        return (
          <NavigationMenu.Item key={index}>
            {isActive ? (
              <button
                className={classNames(
                  "w-full text-left rounded-md flex items-center gap-3 pl-3 py-1.5 border shadow",
                  colorClassName
                )}
                onClick={() => setOpen(false)}
              >
                <Icon />
                {item.name}
              </button>
            ) : (
              <Link
                mail={false}
                href={item.href}
                legacyBehavior
                passHref
                aria-label={item.name}
              >
                <NavigationMenu.Link className="w-full text-left rounded-md flex items-center gap-3 pl-3 py-1.5 border border-transparent">
                  <Icon />
                  {item.name}
                </NavigationMenu.Link>
              </Link>
            )}
          </NavigationMenu.Item>
        );
      })}
    </NavigationMenu.List>
  );
}
