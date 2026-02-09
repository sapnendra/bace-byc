"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Eye, Check, X, Loader2, Users, FileX } from "lucide-react";
import AlumniPreviewModal from "@/components/admin/AlumniPreviewModal";
import { IAlumni } from "@/models/Alumni";

const statusTabs = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

export default function AdminAlumniPage() {
  const [alumni, setAlumni] = useState<IAlumni[]>([]);
  const [selectedAlumni, setSelectedAlumni] = useState<IAlumni | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  const fetchAlumni = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        status: activeTab,
        page: pagination.page.toString(),
        limit: pagination.limit.toString(),
      });

      if (searchQuery) {
        params.append("search", searchQuery);
      }

      const response = await fetch(`/api/admin/alumni?${params}`);
      const data = await response.json();

      setAlumni(data.alumni);
      setPagination(data.pagination);
    } catch (error) {
      console.error("Failed to fetch alumni:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAlumni();
  }, [activeTab, pagination.page]);

  const handleSearch = () => {
    setPagination((prev) => ({ ...prev, page: 1 }));
    fetchAlumni();
  };

  const handleStatusUpdate = async (
    id: string,
    status: "approved" | "rejected",
  ) => {
    setIsActionLoading(true);
    try {
      const response = await fetch(`/api/admin/alumni?id=${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        setIsModalOpen(false);
        fetchAlumni();
      }
    } catch (error) {
      console.error("Failed to update alumni:", error);
    } finally {
      setIsActionLoading(false);
    }
  };

  const openPreview = (alumniItem: IAlumni) => {
    setSelectedAlumni(alumniItem);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
          Alumni Management
        </h1>
        <p className="text-charcoal-light">
          Review and manage alumni registrations
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-4 mb-6">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4">
          {statusTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setPagination((prev) => ({ ...prev, page: 1 }));
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                activeTab === tab.value
                  ? "bg-saffron text-white shadow-md"
                  : "bg-beige-soft text-charcoal-light hover:bg-beige"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light"
              size={20}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search by name or company..."
              className="w-full pl-10 pr-4 py-2.5 border-2 border-beige-200 rounded-lg focus:border-saffron focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="px-6 py-2.5 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal/90 transition-colors"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-beige-200 overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-saffron" size={40} />
          </div>
        ) : alumni.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-charcoal-light">
            <FileX size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium">No alumni found</p>
            <p className="text-sm">Try adjusting your filters</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-beige-soft border-b border-beige-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Position
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Year
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-charcoal uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-beige-100">
                  {alumni.map((item) => (
                    <motion.tr
                      key={item._id.toString()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-beige-soft/50 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="font-medium text-charcoal">
                          {item.name}
                        </div>
                        <div className="text-sm text-charcoal-light">
                          {item.company}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-charcoal-light">
                        {item.currentPosition}
                      </td>
                      <td className="px-6 py-4 text-sm text-charcoal-light">
                        {item.passingYear}
                      </td>
                      <td className="px-6 py-4 text-sm text-charcoal-light">
                        {item.course}
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={item.status} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => openPreview(item)}
                            className="p-2 text-saffron hover:bg-saffron/10 rounded-lg transition-colors"
                            title="View Details"
                          >
                            <Eye size={18} />
                          </button>
                          {item.status === "pending" && (
                            <>
                              <button
                                onClick={() =>
                                  handleStatusUpdate(
                                    item._id.toString(),
                                    "approved",
                                  )
                                }
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="Approve"
                              >
                                <Check size={18} />
                              </button>
                              <button
                                onClick={() =>
                                  handleStatusUpdate(
                                    item._id.toString(),
                                    "rejected",
                                  )
                                }
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Reject"
                              >
                                <X size={18} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="px-6 py-4 border-t border-beige-200 flex items-center justify-between">
                <p className="text-sm text-charcoal-light">
                  Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                  {Math.min(
                    pagination.page * pagination.limit,
                    pagination.total,
                  )}{" "}
                  of {pagination.total} results
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      setPagination((prev) => ({
                        ...prev,
                        page: prev.page - 1,
                      }))
                    }
                    disabled={pagination.page === 1}
                    className="px-4 py-2 border border-beige-200 rounded-lg text-sm font-medium hover:bg-beige-soft disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() =>
                      setPagination((prev) => ({
                        ...prev,
                        page: prev.page + 1,
                      }))
                    }
                    disabled={pagination.page === pagination.totalPages}
                    className="px-4 py-2 border border-beige-200 rounded-lg text-sm font-medium hover:bg-beige-soft disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Preview Modal */}
      <AlumniPreviewModal
        alumni={selectedAlumni}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApprove={(id) => handleStatusUpdate(id, "approved")}
        onReject={(id) => handleStatusUpdate(id, "rejected")}
        isLoading={isActionLoading}
      />
    </div>
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
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
        colors[status as keyof typeof colors] || colors.pending
      }`}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
