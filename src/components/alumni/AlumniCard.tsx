"use client";

import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SocialIcons from "@/components/alumni/SocialIcons";
import { IAlumni } from "@/models/Alumni";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

interface AlumniCardProps {
  alumni: IAlumni;
  index: number;
}

export default function AlumniCard({ alumni, index }: AlumniCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
    >
      {/* Large Image Carousel Section - Balanced Portrait Ratio */}
      <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
        <ImageCarousel
          images={alumni.images}
          className="h-full"
          autoPlay={true}
          interval={4000}
        />

        {/* Gradient Overlay at bottom for name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Social Icons - Always visible on top right */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <SocialIcons
            linkedin={alumni.socialLinks?.linkedin}
            github={alumni.socialLinks?.github}
            size="md"
          />
        </div>

        {/* Name overlay on image */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
          <h3 className="text-2xl font-serif font-bold text-white mb-1">
            {alumni.name}
          </h3>
          <p className="text-white/90 text-sm flex items-center gap-1.5">
            <MapPin size={14} className="text-saffron" />
            {alumni.college}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Position & Company */}
        <div className="flex items-start gap-2">
          <Briefcase size={18} className="text-saffron mt-0.5 flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-charcoal text-base leading-snug">
              {alumni.currentPosition}
            </p>
            <p className="text-sm text-gray-500 truncate">{alumni.company}</p>
          </div>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-saffron/10 text-saffron rounded-lg text-sm font-semibold">
            <Calendar size={14} />
            {alumni.passingYear}
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-semibold">
            <GraduationCap size={14} />
            {alumni.course}
          </div>
        </div>

        {/* Bio - Always visible but truncated */}
        {alumni.bio && (
          <p className="text-sm text-gray-600 line-clamp-2 italic border-t border-gray-100 pt-4">
            "{alumni.bio}"
          </p>
        )}
      </div>
    </motion.div>
  );
}
