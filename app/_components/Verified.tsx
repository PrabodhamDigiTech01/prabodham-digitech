"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ContactDialog } from "./ContactDiaglog";

const partners = [
  {
    name: "Google Partner",
    logo: "/verified/google.png",
  },
  {
    name: "Meta Business Partner",
    logo: "/verified/meta.png",
  },
  {
    name: "Shopify Partner",
    logo: "/verified/shopify.svg",
  },
  {
    name: "Airtel IQ",
    logo: "/verified/airtel.png",
  },
  {
    name: "Zoho",
    logo: "/verified/zoho.svg",
  },
  {
    name: "Dribbble",
    logo: "/verified/dribble.svg",
  },
];

export function VerifiedSection() {
  return (
    <section className="w-full py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-xl lg:text-2xl font-semibold tracking-wider text-gray-300 flex items-center justify-center gap-2">
            VERIFIED BY INDUSTRY LEADERS
            <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-gray-300" />
          </motion.h2>
        </div>

        {/* Partners Grid */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group">
              <div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 
                            transition-all duration-300 hover:border-white/20 hover:bg-white/10
                            flex items-center justify-center h-[120px]">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain filter brightness-100 contrast-100 transition-all duration-300"
                />
                <BorderBeam
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  size={200}
                  duration={10}
                  borderWidth={2}
                  colorFrom="#01A2CC"
                  colorTo="#FD5298"
                  delay={0}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6">
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Kindly share your coordinates and we will be more than happy to help
            you in meeting your digital media objectives.
          </p>
          <ContactDialog />
        </motion.div>
      </div>
    </section>
  );
}
