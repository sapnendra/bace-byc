"use client";

import { motion } from "framer-motion";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SocialIcons from "@/components/alumni/SocialIcons";
import { IAlumni } from "@/models/Alumni";
import { Briefcase, Calendar, GraduationCap } from "lucide-react";

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
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-beige-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group"
    >
      {/* Image Carousel */}
      <div className="relative h-64 bg-beige-100">
        <ImageCarousel
          images={alumni.images}
          className="h-full"
          autoPlay={true}
          interval={3000}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Social Icons - Show on hover */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <SocialIcons
            linkedin={alumni.socialLinks?.linkedin}
            github={alumni.socialLinks?.github}
            size="md"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-xl font-serif font-bold text-charcoal mb-2 group-hover:text-saffron transition-colors">
          {alumni.name}
        </h3>

        {/* Position & Company */}
        <p className="text-charcoal-light flex items-center gap-2 mb-4">
          <Briefcase size={16} className="text-saffron" />
          <span className="font-medium">{alumni.currentPosition}</span>
          <span className="text-charcoal-light/60">@</span>
          <span>{alumni.company}</span>
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-saffron/10 text-saffron rounded-lg text-sm font-medium">
            <Calendar size={14} />
            {alumni.passingYear}
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-forest/10 text-forest rounded-lg text-sm font-medium">
            <GraduationCap size={14} />
            {alumni.course}
          </div>
        </div>

        {/* College */}
        <p className="text-xs text-charcoal-light line-clamp-1">
          {alumni.college}
        </p>

        {/* Bio - Show on hover */}
        {alumni.bio && (
          <div className="mt-4 pt-4 border-t border-beige-100 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
            <p className="text-sm text-charcoal-light line-clamp-3 italic">
              "{alumni.bio}"
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
