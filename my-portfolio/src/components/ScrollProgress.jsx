import { motion, useScroll, useSpring } from 'framer-motion';

/* A single accent hairline across the very top — the page's read position,
   drawn in the same weight as every other rule on the sheet. */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 h-px origin-left z-[60] bg-accent"
    />
  );
};

export default ScrollProgress;
