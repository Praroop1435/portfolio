import type { Variants } from "framer-motion";

// Apple animations typically rely on spring physics for fluidity
const macSpring = {
  type: "spring",
  stiffness: 260,
  damping: 20,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: macSpring,
  },
};

export const slideUp: Variants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: macSpring,
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const revealFromBelow: Variants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: macSpring,
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -40px 0px",
};
