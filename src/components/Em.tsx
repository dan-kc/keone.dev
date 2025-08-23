import clsx from "clsx";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  inViewClassName?: string;
  outViewClassName?: string;
  delay?: number;
  bold?: boolean;
}

const Em: React.FC<Props> = ({
  children,
  className,
  inViewClassName = "text-white",
  outViewClassName,
  delay = 0,
  bold = true,
}) => {
  const delayString = String(delay) + "s";
  const scrollRef = useRef(null);
  const inView = useInView(scrollRef);

  return (
    <em
      ref={scrollRef}
      style={{ transitionDelay: delayString }}
      className={clsx(
        inView ? inViewClassName : outViewClassName,
        bold ? "font-semibold" : null,
        className,
        "not-italic duration-1000",
      )}
    >
      {children}
    </em>
  );
};
export default Em;
