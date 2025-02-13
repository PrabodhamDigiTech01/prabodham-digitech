"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const handleCallButton = () => {
  const message =
    "Hi! I'm interested in learning more about Prabodham DigiTech's services. Would love to discuss how you can help grow my business.";
  const whatsappUrl = `https://wa.me/919222322261?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappUrl, "_blank");
};

export function AboutSection() {
  return (
    <section
      id="about"
      className="mt-20 w-full py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full w-full mx-auto">
            <div
              className="relative rounded-[24px] bg-white/5 backdrop-blur-sm
                        border-[1px] border-gray-700/50
                        drop-shadow-2xl p-3 h-full">
              <div className="absolute inset-3 rounded-[20px] border border-gray-600/50"></div>
              <Image
                src="/about.jpeg"
                alt="About Prabodham DigiTech"
                width={600}
                height={600}
                className="relative w-full h-full object-cover aspect-[4/3] rounded-[20px]"
              />
              {/* Bottom Glow Effect */}
              <div className="absolute bottom-3 left-3 right-3 h-32 bg-gradient-to-t from-black/80 to-transparent rounded-b-[20px]" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Badge className="px-4 py-2 rounded-xl bg-zinc-800/50 text-zinc-200 border-zinc-800">
                <div className="mr-2 w-2 h-2 bg-light-blue rounded-full"></div>
                About Us
              </Badge>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold tracking-relaxed text-white/85">
                {["Specialist in 360", "Digital Marketing Solutions"].map(
                  (line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ duration: 0.5, delay: lineIndex * 0.2 }}>
                      {line.split(" ").map((word, wordIndex) => (
                        <motion.span
                          key={wordIndex}
                          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                          whileInView={{
                            opacity: 1,
                            filter: "blur(0px)",
                            y: 0,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: lineIndex * 0.2 + wordIndex * 0.1,
                          }}>
                          {word}{" "}
                        </motion.span>
                      ))}
                      <br />
                    </motion.div>
                  )
                )}
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-lg md:mx-auto lg:mx-0 text-gray-400 sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                At Prabodham DigiTech, we don&apos;t just market brands we elevate
                them. With a comprehensive suite of digital marketing services.
              </motion.p>
            </div>

            <div
              className="h-px my-4 w-60 mx-auto lg:mx-0"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgb(75, 85, 99), transparent)",
              }}
            />

            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-xl font-normal text-white leading-relaxed text-center lg:text-left">
                Your Success, Our Priority
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-lg md:mx-auto lg:mx-0 text-gray-400 sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
                At Prabodham DigiTech, we believe in empowering our clients to
                achieve their goals. Our team works closely with you.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2">
              <Button
                size="lg"
                className="bg-gradient-to-r from-light-blue to-pink text-white px-4 py-2 rounded-lg
                         shadow-lg hover:shadow-light-blue/20 transition-all duration-300
                         sm:px-4 sm:py-2 md:px-6 md:py-4 mx-auto lg:mx-0"
                onClick={handleCallButton}>
                Book an Appointment
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
