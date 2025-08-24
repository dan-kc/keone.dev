import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  items: string[];
  className?: string;
  dashClassName?: string;
}

const List = ({ items, className, dashClassName }: Props) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { margin: "-5% 0px -5% 0px" });
  const length = items.length;

  return (
    <ul ref={scrollRef} className={className}>
      {items.map((item, index) => {
        const delayTime = (index / length) * 0.4;
        return (
          <li className="flex" key={index}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{
                duration: 1,
                delay: delayTime,
              }}
              className={clsx(dashClassName, "mr-2")}
            >
              -
            </motion.span>
            {item}
          </li>
        );
      })}
    </ul>
  );
};
export default List;
