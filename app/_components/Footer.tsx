"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-gray-800">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16">
        {/* Use a consistent grid structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20">
          {/* Logo and Company Info */}
          <Image
            src="/PDLogo.png"
            alt="Prabodham DigiTech"
            width={350}
            height={350}
            quality={90}
            loading="lazy"
            className="object-cover"
          />

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-pink shrink-0 mt-1" />
                <p className="text-base">Mumbai, India</p>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400  transition-colors">
                  <Phone className="w-5 h-5 text-pink" />
                  <span className="text-base">+91 9222322261</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3 text-gray-400  transition-colors">
                  <Mail className="w-5 h-5 text-pink" />
                  <span className="text-base">PDS.sales01@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Social links
            </h3>
            <div className="flex gap-4">
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-pink hover:bg-light-blue/20 hover:text-light-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/prabodham_digitech?igsh=MWJmc2ZvYXd3eXpqZQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 text-pink hover:bg-light-blue/20 hover:text-light-blue transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-t-transparent bg-gradient-to-r from-light-blue to-pink bg-[length:100%_2px] bg-top bg-no-repeat">
          <p className="text-center text-gray-400 text-base">
            © {new Date().getFullYear()} Prabodham DigiTech. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
