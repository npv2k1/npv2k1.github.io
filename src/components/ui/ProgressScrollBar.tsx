import { motion, useScroll } from 'framer-motion';

export default function ProgressScrollBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
