"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Linkedin,
  Github,
  Calendar,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { IAlumni } from "@/models/Alumni";

interface AlumniPreviewModalProps {
  alumni: IAlumni | null;
  isOpen: boolean;
  onClose: () => void;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  isLoading?: boolean;
}

export default function AlumniPreviewModal({
  alumni,
  isOpen,
  onClose,
  onApprove,
  onReject,
  isLoading,
}: AlumniPreviewModalProps) {
  if (!alumni) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden pointer-events-auto"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-charcoal to-charcoal-light text-white p-6 relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X size={20} />
                </button>
                <h2 className="text-2xl font-serif font-bold">
                  Alumni Profile Review
                </h2>
                <p className="text-sm text-gray-300 mt-1">
                  Review details before approval
                </p>
              </div>

              {/* Content - Scrollable */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
                {/* Images Carousel */}
                {alumni.images && alumni.images.length > 0 && (
                  <div className="mb-6">
                    <div className="grid grid-cols-3 gap-4">
                      {alumni.images.map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`${alumni.name} - ${idx + 1}`}
                          className="w-full aspect-square object-cover rounded-lg shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Basic Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-charcoal">
                      {alumni.name}
                    </h3>
                    <p className="text-charcoal-light flex items-center gap-2 mt-1">
                      <Briefcase size={16} />
                      {alumni.currentPosition} @ {alumni.company}
                    </p>
                  </div>

                  {/* Academic Info */}
                  <div className="grid grid-cols-2 gap-4 p-4 bg-beige-soft rounded-lg">
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">
                        <Calendar size={14} className="inline mr-1" />
                        Passing Year
                      </p>
                      <p className="font-semibold text-charcoal">
                        {alumni.passingYear}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">
                        <GraduationCap size={14} className="inline mr-1" />
                        Course
                      </p>
                      <p className="font-semibold text-charcoal">
                        {alumni.course}
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">
                        College/University
                      </p>
                      <p className="font-semibold text-charcoal">
                        {alumni.college}
                      </p>
                    </div>
                    {alumni.fieldOfStudy && (
                      <div className="col-span-2">
                        <p className="text-xs text-charcoal-light uppercase tracking-wide mb-1">
                          Field of Study
                        </p>
                        <p className="font-semibold text-charcoal">
                          {alumni.fieldOfStudy}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bio */}
                  {alumni.bio && (
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-2">
                        Bio/Message:
                      </p>
                      <p className="text-charcoal-light text-sm leading-relaxed bg-beige-soft p-4 rounded-lg">
                        {alumni.bio}
                      </p>
                    </div>
                  )}

                  {/* Social Links */}
                  {(alumni.socialLinks?.linkedin ||
                    alumni.socialLinks?.github) && (
                    <div>
                      <p className="text-sm font-semibold text-charcoal mb-2">
                        Social Links:
                      </p>
                      <div className="flex gap-3">
                        {alumni.socialLinks.linkedin && (
                          <a
                            href={alumni.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm"
                          >
                            <Linkedin size={16} />
                            LinkedIn
                          </a>
                        )}
                        {alumni.socialLinks.github && (
                          <a
                            href={alumni.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Metadata */}
                  <div className="pt-4 border-t border-beige-200">
                    <div className="grid grid-cols-2 gap-4 text-xs text-charcoal-light">
                      <div>
                        <span className="font-semibold">Submitted:</span>{" "}
                        {new Date(alumni.createdAt).toLocaleDateString()}
                      </div>
                      <div>
                        <span className="font-semibold">Status:</span>{" "}
                        <StatusBadge status={alumni.status} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Actions */}
              {alumni.status === "pending" && (
                <div className="p-6 bg-beige-soft border-t border-beige-200 flex gap-3">
                  <button
                    onClick={() => onReject(alumni._id.toString())}
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-white border-2 border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Processing..." : "Reject"}
                  </button>
                  <button
                    onClick={() => onApprove(alumni._id.toString())}
                    disabled={isLoading}
                    className="flex-1 px-6 py-3 bg-forest text-white rounded-lg font-medium hover:bg-forest/90 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Processing..." : "Approve"}
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

function StatusBadge({ status }: { status: string }) {
  const colors = {
    pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
    approved: "bg-green-100 text-green-700 border-green-200",
    rejected: "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold border ${
        colors[status as keyof typeof colors] || colors.pending
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
