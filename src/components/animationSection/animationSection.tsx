import React from "react";
import { motion } from "framer-motion";

interface AnimationSectionProps {
  children: any;
}

const AnimationSection = ({ children }: AnimationSectionProps) => {
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
