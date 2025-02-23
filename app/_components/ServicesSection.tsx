"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "./ServiceCard";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: "brand",
    title: "Brand Development",
    description:
      "Our mission is simple: to work collaboratively with our clients to create fresh, powerful and effective brands.",
    details: [
      "Brand Strategy",
      "Brand Style Guide",
      "Brand Architecture",
      "Logo & Identity",
      "Voice & Tone",
      "Launch Strategy",
      "Messaging & Positioning",
      "Naming & Taglines",
    ],
  },
  {
    icon: "social",
    title: "Social Media Marketing",
    description:
      "Get fully customized social media marketing services. We cover Instagram, Facebook, YouTube, Twitter & LinkedIn marketing at an affordable price.",
    details: [
      "Custom Campaign Creation",
      "Social Media Strategy",
      "Content Calendar Planning",
      "Community Management",
      "Performance Analytics",
      "Influencer Partnerships",
    ],
  },
  {
    icon: "seo",
    title: "SEO",
    description:
      "Marketing your website on search engines like Google, Bing, and Yahoo. We make sure whenever your audience searches with your keyword, he finds you right there on search results.",
    details: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Link Building",
      "Performance Tracking",
    ],
  },
  {
    icon: "content",
    title: "Content Marketing",
    description:
      "From creating useful & relevant content to marketing it on different channels – we know the right ways to do it.",
    details: [
      "Content Strategy",
      "Blog Writing",
      "Copywriting",
      "Email Marketing",
      "Video Content",
      "Content Distribution",
    ],
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "Our developer team is expert in WordPress and Google hosting. We create stunning websites for online business to grow online presence.",
    details: [
      "WordPress Development",
      "Custom Web Design",
      "E-commerce Solutions",
      "Google Hosting",
      "Website Maintenance",
      "Performance Optimization",
    ],
  },
  {
    icon: "design",
    title: "Graphic Design",
    description:
      "Graphic designing is the best way of visual communication. We enhance your brand's visual identity through creative and impactful design solutions.",
    details: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
      "Packaging Design",
      "Print Design",
    ],
  },
  {
    icon: "marketplace",
    title: "Marketplace Solutions",
    description:
      "Having your own website is no longer enough. We help you expand your reach through e-marketplaces like Amazon and eBay.",
    details: [
      "Amazon Store Setup",
      "eBay Integration",
      "Product Listing",
      "Inventory Management",
      "Sales Optimization",
      "Performance Analytics",
    ],
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          {/* Services Badge */}
          <div className="flex justify-center items-center gap-2">
            <Badge className="px-4 py-2 rounded-xl bg-zinc-800/50 text-zinc-200 border-zinc-800">
              <div className="mr-2 w-2 h-2 bg-light-blue rounded-full"></div>
              Services
            </Badge>
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            {["Comprehensive Digital Solutions"].map((line, lineIndex) => (
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
            ))}
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your digital presence with our full suite of services
            designed to elevate your brand and drive growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, -1).map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          {/* Last card (Marketplace) centered */}
          <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
            <ServiceCard {...services[services.length - 1]} />
          </div>
        </div>
      </div>
    </section>
  );
}
