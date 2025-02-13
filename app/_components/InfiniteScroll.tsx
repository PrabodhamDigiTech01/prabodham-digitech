"use client";

import { motion } from "framer-motion";
import { WandSparkles } from "lucide-react";

interface ScrollingItemProps {
  text: string;
  className?: string;
}

const ScrollingItem = ({ text, className }: ScrollingItemProps) => (
  <motion.div
    className={`flex items-center justify-center px-8 py-4 rounded-lg bg-white/5 backdrop-blur-sm 
                border border-white/10 hover:bg-white/10 transition-colors cursor-pointer ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
    <p className="text-white/80 font-medium whitespace-nowrap">{text}</p>
  </motion.div>
);

const industries = [
  "Polymer",
  "FMCG",
  "Real Estate",
  "Cyber Security",
  "Garments",
  "Dentist",
  "Jewellery",
  "Medical",
  "Furniture",
];

export function InfiniteScroll() {
  return (
    <div className="w-full py-8 bg-black relative overflow-hidden">
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <motion.h2
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-xl lg:text-2xl font-semibold tracking-wider text-gray-300 flex items-center justify-center gap-2">
          INDUSTRIES WE ARE HANDLING
          <WandSparkles className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
        </motion.h2>
      </div>
      <div className="relative flex flex-col gap-4 py-8">
        {/* First row */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -1035],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}>
          {[...industries, ...industries].map((industry, i) => (
            <ScrollingItem key={`${industry}-${i}`} text={industry} />
          ))}
        </motion.div>

        {/* Second row */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [-1035, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}>
          {[...industries, ...industries].map((industry, i) => (
            <ScrollingItem key={`${industry}-${i}-reverse`} text={industry} />
          ))}
        </motion.div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-dark-blue to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-dark-blue to-transparent pointer-events-none" />
    </div>
  );
}
