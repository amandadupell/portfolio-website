import React from "react";
import { motion } from "framer-motion";

interface AnimationSectionProps {
  children: any;
  home?: boolean;
}

const homeInitial = { opacity: 0, scale: 0 };
const initial = { opacity: 0 };
const homeWhileInView = { opacity: 1, scale: 1 };
const whileInView = { opacity: 1 };

const AnimationSection = ({ children, home }: AnimationSectionProps) => {
  return (
    <motion.div
      initial={home ? homeInitial : initial}
      whileInView={home ? homeWhileInView : whileInView}
      viewport={{ once: true }}
      transition={{ duration: home ? 1 : 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationSection;
