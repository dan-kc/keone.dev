import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import React, { useEffect } from "react";
import { CountUp } from "countup.js"; // Alias to avoid naming conflict

interface Props {
  percentage: number;
  title: string;
  value: number;
  suffix?: string;
}

const ProgressBar: React.FC<Props> = ({
  percentage,
  title,
  value,
  suffix = "",
}) => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  const largeGreenSize = 80;
  const pinSize = 0.5;
  const smallGreenSize = percentage - largeGreenSize - pinSize;
  const smallYellowSize = (100 - percentage) / 2;
  const smallRedSize = smallYellowSize;

  const countupRef = useRef(null);
  let countUpAnim;

  useEffect(() => {
    if (countupRef.current) {
      countUpAnim = new CountUp(countupRef.current, 1000);
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
    }
  }, []);

  return (
    <div ref={scrollRef} className="flex flex-col gap-1">
      <div className="text-greenDark-12 flex gap-2 text-base lg:text-lg">
        <span className="bg-greenDark-9 mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full lg:mt-[10px] lg:h-2 lg:w-2" />
        <div className="sm:whitespace-nowrap">{title}</div>
      </div>

      <motion.div
        className="flex justify-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: isInView ? 1.5 : 0 }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${largeGreenSize}%` : "0%" }}
          transition={{
            duration: isInView ? 1.5 : 0,
          }}
          className="pr-1"
        >
          <div className="bg-greenDark-9 h-[5px]" />
        </motion.div>

        <div
          className="flex flex-col items-center gap-1"
          style={{ width: `${pinSize}%` }}
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isInView ? 1 : 0 }}
            transition={{
              duration: isInView ? 1.5 : 0,
              delay: isInView ? 0.5 : 0,
            }}
            className="h-5 w-full origin-top bg-white"
          />
          <div>
            <div
              className="font-heading text-greenDark-11 text-base font-bold"
              end={isInView ? value : 50}
              duration={2.5}
              start={70}
              suffix={suffix}
            />
          </div>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallGreenSize}%` : "0%" }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 0.5 : 0,
          }}
          className="pl-1"
        >
          <div className="bg-greenDark-9 h-[5px]" />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallYellowSize}%` : "0%" }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 1 : 0,
          }}
          className="pl-1"
        >
          <div className="bg-yellowDark-9 h-[5px]" />
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${smallRedSize}%` : "0%" }}
          transition={{
            duration: isInView ? 1.5 : 0,
            delay: isInView ? 1.5 : 0,
          }}
          className="pl-1"
        >
          <div className="bg-redDark-9 h-[5px]" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProgressBar;
