"use client";

import { Badge } from "@/components/ui/badge";
import { IconCloud } from "@/components/ui/icon-cloud";
import { motion } from "framer-motion";

const tools = [
  "Google Ads",
  "Google Tag Manager",
  "Pixel",
  "Google Analytics",
  "Meta Ad Manager",
  "Zoho One",
  "Zoho Campaign",
  "Mailchimp",
  "Airtel IQ",
  "Send Blaster",
  "Google Keywords Planner",
  "Canva",
  "eScan",
  "Nemesis",
  "Publer",
  "Ahrefs",
  "Buffer",
  "SemRush",
  "Google Trends",
  "Amazon Seller",
  "Flipkart Seller",
];

// Define the icons array for IconCloud
const toolIcons = [
  "/tools/ahrefs.svg",
  "/tools/amazon.svg",
  "/tools/buffer.svg",
  "/tools/canva.svg",
  "/tools/escan_logo.png",
  "/tools/flipkart.png",
  "/tools/google.svg",
  "/tools/googleads.svg",
  "/tools/googletrends.svg",
  "/tools/gooletagmanager.svg",
  "/tools/mailchimp.svg",
  "/verified/airtel.png",
  "/tools/planner.svg",
  "/tools/publer.svg",
  "/tools/semrush.png",
  "/tools/sendblaster.png",
  "/tools/zohoone.svg",
];

export function ToolsSection() {
  return (
    <section className="w-full py-4 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Icon Cloud */}
          <div className="flex items-center justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-square max-w-[800px]">
              <IconCloud images={toolIcons} />
            </motion.div>
          </div>

          {/* Right Side - Tools List */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Badge className="px-4 py-2 rounded-xl bg-zinc-800/50 text-zinc-200 border-zinc-800">
                  <div className="mr-2 w-2 h-2 bg-light-blue rounded-full"></div>
                  Tools
                </Badge>
              </div>

              <h2 className="text-5xl md:text-6xl text-center lg:text-left font-bold tracking-relaxed text-white/85">
                {["Mastering the", "Digital Landscape"].map(
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
                Leveraging industry-leading tools to deliver exceptional results
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start text-lg text-gray-300 leading-relaxed">
              {tools.map((tool, index) => (
                <span key={tool} className="flex items-center">
                  <span className="text-light-blue mx-[0.55rem]">•</span>
                  <span className="hover:text-white transition-colors cursor-default">
                    {tool}
                  </span>
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
