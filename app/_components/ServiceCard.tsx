"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  Share2,
  Search,
  PenTool,
  Globe,
  Palette,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { MagicCard } from "@/components/ui/magic-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  details: string[];
  className?: string;
}

const iconMap = {
  brand: Paintbrush,
  social: Share2,
  seo: Search,
  content: PenTool,
  web: Globe,
  design: Palette,
  marketplace: ShoppingBag,
};

export function ServiceCard({
  title,
  description,
  icon,
  details,
  className,
}: ServiceCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}>
      <MagicCard
        className={cn(
          "p-6",
          "transition-all duration-300 border border-zinc-300/15",
          className
        )}
        gradientFrom="#FF69B4" // pink
        gradientTo="#87CEEB" // light-blue
        gradientSize={300}
        gradientOpacity={0.15}>
        {/* Icon */}
        <div className="relative mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-light-blue to-pink">
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>

          {/* Details */}
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <motion.li
                key={index}
                className="flex items-start text-sm text-gray-400"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}>
                <ChevronRight className="w-4 h-4 mr-2 mt-0.5 text-light-blue" />
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </MagicCard>
    </motion.div>
  );
}
