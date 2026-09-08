import clsx from "clsx";
import { motion } from "framer-motion";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  delay?: number;
}

const QuoteLine: React.FC<Props> = ({ className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      transition={{ delay: delay, duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={clsx(className, "w-1 origin-top")}
    />
  );
};
export default QuoteLine;
