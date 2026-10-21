import { CountUp } from "countup.js";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  percentage: number;
  caption: string;
  delay?: number;
}

const ProgressCircle: React.FC<Props> = ({
  percentage,
  caption,
  delay = 0,
}) => {
  const draw: Variants = {
    hidden: {
      pathLength: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0,
      },
    },
    visible: {
      pathLength: percentage / 100,
      transition: { type: "spring", duration: 3, bounce: 0, delay: delay },
    },
  };

  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;

    // Use CountUp directly, as in ProgressBar, rather than the CommonJS React wrapper.
    const counter = new CountUp(countRef.current, percentage, {
      startVal: 0,
      duration: 2.35,
    });
    const timeout = setTimeout(() => counter.start(), delay * 1000);

    return () => {
      clearTimeout(timeout);
      counter.reset();
    };
  }, [isInView, percentage, delay]);

  return (
    <div className="relative flex w-1/5 flex-col items-center" ref={scrollRef}>
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: isInView ? 1.5 : 0,
          delay: isInView ? delay : 0,
        }}
      >
        <motion.svg
          className="w-full"
          viewBox="0 0 100 100"
          initial={"hidden"}
          animate={isInView ? "visible" : "hidden"}
        >
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#0f291e"
            fill="#0d1912"
            strokeWidth={6}
          />
          <motion.circle
            className="origin-center -rotate-90"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            stroke="#30a46c"
            strokeWidth={6}
            variants={draw}
          />
        </motion.svg>
        {isInView ? (
          <span
            ref={countRef}
            className="font-heading text-greenDark-9 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] leading-tight font-bold min-[350px]:text-[14px] min-[350px]:leading-tight min-[380px]:text-[15px] min-[380px]:leading-tight sm:text-[20px] sm:leading-tight md:text-[14px] md:leading-tight lg:text-[17px] lg:leading-tight xl:text-[21px] xl:leading-tight"
          >
            {percentage}
          </span>
        ) : null}
      </motion.div>
      <h4 className="text-center text-[8.5px] leading-tight min-[350px]:text-[10px] min-[350px]:leading-tight min-[380px]:text-[11px] min-[380px]:leading-tight sm:text-[15px] sm:leading-tight md:text-[11px] md:leading-tight lg:text-[13px] lg:leading-tight xl:text-[15px] xl:leading-tight">
        {caption}
      </h4>
    </div>
  );
};

export default ProgressCircle;
