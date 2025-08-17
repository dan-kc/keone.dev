import { motion } from "framer-motion";
import Link from "./Link";
import clsx from "clsx";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  mail?: boolean;
  href?: string;
  newTab?: boolean;
  delay?: number;
  thick?: boolean;
  linkClassName?: string;
  underlineClassName?: string;
  children: React.ReactNode;
}

const AnimatedLink: React.FC<Props> = ({
  href,
  delay = 0,
  mail = false,
  thick = false,
  newTab = false,
  linkClassName = "text-white",
  underlineClassName = "bg-white",
  children,
  ...rest
}) => {
  return (
    <Link
      mail={mail}
      href={href}
      {...rest}
      target={newTab ? "_blank" : "_self"}
      className={clsx(linkClassName, "relative inline-block")}
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: delay, duration: 1 }}
        className={clsx(
          thick ? "h-1" : "h-0.5",
          "absolute bottom-0 left-0 inline-block w-full origin-bottom-left",
          underlineClassName,
        )}
      />
      {children}
    </Link>
  );
};

export default AnimatedLink;
