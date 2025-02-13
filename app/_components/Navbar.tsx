"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";

const navItems = [
  { title: "Home", sectionId: "home" },
  { title: "About", sectionId: "about" },
  { title: "Services", sectionId: "services" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCallButton = () => {
    const message = "Hi! I'd like to schedule a call to discuss your services.";
    const whatsappUrl = `https://wa.me/919222322261?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Mobile Navbar */}
      {isMobile && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50">
          <div className="mx-4 my-4 backdrop-blur-lg rounded-2xl border border-white/10">
            <div className="flex items-center justify-between px-4 h-14">
              <Image
                src="/pd.png"
                alt="Prabodham DigiTech"
                width={40}
                height={20}
                className="object-contain"
              />

              <Button
                variant="default"
                className="bg-gradient-to-r from-light-blue to-pink text-white rounded-xl px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                onClick={handleCallButton}>
                <span className="relative z-10">Schedule a Call</span>
                <Phone className="w-3 h-3 relative z-10" />
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <Menu className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "tween", duration: 0.5 }}
                className="fixed inset-0 z-50 bg-gray-900/45 backdrop-blur-lg">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center p-6">
                    <Image
                      src="/pd.png"
                      alt="Prabodham DigiTech"
                      width={40}
                      height={20}
                      className="object-contain"
                    />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors">
                      <X className="h-5 w-5 text-white" />
                    </button>
                  </div>

                  <div className="flex flex-col px-8">
                    <div className="h-px bg-white/10" />

                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}>
                        <ScrollLink
                          to={item.sectionId}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-lg text-white/70 hover:text-primary transition-colors py-4 block cursor-pointer">
                          {item.title}
                        </ScrollLink>

                        {index < navItems.length - 1 && (
                          <div className="h-px bg-white/10" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}

      {!isMobile && (
        <motion.header
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 right-0 z-50 mt-3 px-4 py-2">
          <motion.div
            animate={{
              maxWidth: scrolled ? "600px" : "950px",
            }}
            transition={{
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={cn(
              "mx-auto rounded-2xl border border-zinc-200/25 bg-black/20 backdrop-blur-md",
              scrolled ? "px-4" : "px-6"
            )}>
            <div className="flex h-14 items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                className={cn("flex-shrink-0", scrolled && "hidden")}>
                <Link href="/">
                  <Image
                    src="/PDLogo.png"
                    alt="Prabodham DigiTech"
                    width={120}
                    height={80}
                    priority={true}
                    quality={90}
                    className="object-contain"
                  />
                </Link>
              </motion.div>

              {/* Navigation Items */}
              <nav
                className={cn(
                  "hidden md:flex",
                  scrolled ? "mx-auto space-x-12" : "space-x-8"
                )}>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      ease: "easeInOut",
                    }}>
                    <ScrollLink
                      to={item.sectionId}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      className="text-base font-medium cursor-pointer text-white/90 transition-colors hover:text-white">
                      {item.title}
                    </ScrollLink>
                  </motion.div>
                ))}
              </nav>

              {/* Call Button */}
              <Button
                variant="default"
                className="bg-gradient-to-r from-light-blue to-pink text-white rounded-xl px-4 py-2 flex items-center gap-2"
                onClick={handleCallButton}>
                <span>Schedule a Call</span>
                <Phone className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </motion.header>
      )}
    </>
  );
};

export default Navbar;
