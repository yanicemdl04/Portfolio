import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'span';
  once?: boolean;
}

/**
 * Wrapper d'animation au scroll : fondu + léger déplacement vertical.
 * Discret, avec un easing naturel (decel), et respecte prefers-reduced-motion.
 */
const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  y = 16,
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
