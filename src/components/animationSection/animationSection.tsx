import React from "react";
import { motion } from "framer-motion";

interface AnimationSectionProps {
  children: any;
  home?: boolean;
}

const AnimationSection = ({ children, home }: AnimationSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationSection;
