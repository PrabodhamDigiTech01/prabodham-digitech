"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Pacifico } from "next/font/google";
import { useEffect, useState } from "react";
import { AboutSection } from "./_components/About";
import { BackgroundEnhancers } from "./_components/BgEnhancers";
import { InfiniteScroll } from "./_components/InfiniteScroll";
import { ServicesSection } from "./_components/ServicesSection";
import InfiniteLogos from "./_components/InfiniteLogos";
import { VerifiedSection } from "./_components/Verified";
import { ToolsSection } from "./_components/Tools";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
  display: "swap",
});

const FloatingShape = ({ className }: { className?: string }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180, 270, 360],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 0.2,
      }}
    />
  );
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-black">
      {/* Hero Section */}
      <section className="h-[100svh] max-h-[900px] flex flex-col items-center justify-center">
        {isClient && (
          <>
            {/* Floating shapes - Adjust positioning */}
            <div className="absolute inset-0 overflow-hidden">
              <FloatingShape className="w-[350px] h-[350px] bg-light-blue absolute top-40 left-[35%] -translate-x-1/2" />
              <FloatingShape className="w-[300px] h-[300px] bg-pink top-40 right-0" />
              <FloatingShape className="w-[300px] h-[300px] bg-blue-700 top-6 left-0" />
              <BackgroundEnhancers />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 2 }}
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `repeating-linear-gradient(0deg,
                    rgba(255,255,255,0.1) 0%,
                    rgba(255,255,255,0.1) 2px,
                    transparent 2px,  
                    transparent 4px
                  )`,
                  backgroundSize: "100% 4px",
                  animation: "slideDown 20s linear infinite",
                }}
              />
            </div>
          </>
        )}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-4 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              <motion.div
                className={cn(
                  "relative inline-flex items-center gap-2 rounded-full backdrop-blur-sm border border-zinc-200/20 px-4 py-1.5 shadow-lg shadow-zinc-200/10 transition-all hover:shadow-xl",
                  pacifico.className
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Sparkles className="w-4 h-4 mr-1 fill-current text-pink" />
                <span className="bg-clip-text leading-[1.8] md:leading-[1.8] text-transparent bg-gradient-to-r from-light-blue via-white/75 to-pink">
                  Transform Digitally
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8" // Optional: Add a skeleton class for styling
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
                <span className="text-white/95">Elevate Your</span>
                <br />
                <span
                  className={cn(
                    "bg-clip-text text-transparent bg-gradient-to-r from-light-blue to-pink",
                    pacifico.className
                  )}>
                  Digital Vision
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white/85 pt-4 text-base md:text-lg mb-8 md:max-w-xl mx-auto text-center">
              Unlock the full potential of your brand with 360 digital
              solutions, tailored for growth and success 🎯
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() => {
                  document
                    .querySelector("section:nth-of-type(2)")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="cursor-pointer">
                <ChevronDown className="w-10 h-10 p-3 bg-gradient-to-b from-light-blue to-pink rounded-full text-white/80 hover:text-white transition-colors" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Logos Section */}
      <motion.section>
        <InfiniteLogos />
      </motion.section>

      {/* About Section */}
      <motion.section>
        <AboutSection />
      </motion.section>

      {/* Services Section */}
      <motion.section>
        <ServicesSection />
      </motion.section>

      {/* InfiniteScroll Section */}
      <motion.section>
        <InfiniteScroll />
      </motion.section>

      {/* Tools Section */}
      <motion.section>
        <ToolsSection />
      </motion.section>

      {/* Verified Section */}
      <motion.section>
        <VerifiedSection />
      </motion.section>
    </div>
  );
}
