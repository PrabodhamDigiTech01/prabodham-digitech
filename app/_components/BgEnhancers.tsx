import { motion } from "framer-motion";

const FloatingLine = ({ className }: { className?: string }) => (
  <motion.div
    className={`absolute bg-gradient-to-r from-transparent via-white to-transparent h-px ${className}`}
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{
      scaleX: [0, 1, 0],
      opacity: [0, 0.5, 0],
    }}
    transition={{
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop",
      ease: "easeInOut",
      delay: 0,
    }}
  />
);

export function BackgroundEnhancers() {
  return (
    <>
      {/* Existing Floating Lines */}
      <FloatingLine className="w-[30rem] top-[20%] -left-48" />
      <FloatingLine className="w-[30rem] bottom-[15%] -right-48" />
    </>
  );
}
