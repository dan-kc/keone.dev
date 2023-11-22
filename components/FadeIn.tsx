import { motion } from "framer-motion";

interface Props {
  className?: string;
  from?: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<Props> = ({ className, children, from = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: from }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
