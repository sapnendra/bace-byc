"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import AlumniCard from "@/components/alumni/AlumniCard";
import AlumniFilterBar from "@/components/alumni/AlumniFilterBar";
import { IAlumni } from "@/models/Alumni";
import { Loader2, Users, Building2, MapPin } from "lucide-react";

export default function AlumniPage() {
  const [alumni, setAlumni] = useState<IAlumni[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    years: [] as string[],
    courses: [] as string[],
    colleges: [] as string[],
  });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    hasMore: false,
  });

  // Extract unique values for filters
  const [filterOptions, setFilterOptions] = useState({
    years: [] as string[],
    courses: [] as string[],
    colleges: [] as string[],
  });

  const fetchAlumni = async (page: number = 1, append: boolean = false) => {
    if (append) {
      setIsLoadingMore(true);
    } else {
      setIsLoading(true);
    }

    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
      });

      if (filters.search) params.append("search", filters.search);
      if (filters.years.length) params.append("years", filters.years.join(","));
      if (filters.courses.length)
        params.append("courses", filters.courses.join(","));
      if (filters.colleges.length)
        params.append("colleges", filters.colleges.join(","));

      const response = await fetch(`/api/alumni?${params}`);
      const data = await response.json();

      if (append) {
        setAlumni((prev) => [...prev, ...data.alumni]);
      } else {
        setAlumni(data.alumni);
      }

      setPagination({
        page: data.pagination.page,
        limit: data.pagination.limit,
        total: data.pagination.total,
        hasMore: data.pagination.hasMore,
      });
    } catch (error) {
      console.error("Failed to fetch alumni:", error);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  // Fetch filter options
  const fetchFilterOptions = async () => {
    try {
      const response = await fetch("/api/alumni?page=1&limit=1000");
      const data = await response.json();

      const years = [
        ...new Set(data.alumni.map((a: IAlumni) => a.passingYear.toString())),
      ].sort(
        (a, b) => parseInt(b as string) - parseInt(a as string),
      ) as string[];
      const courses = [
        ...new Set(data.alumni.map((a: IAlumni) => a.course)),
      ].sort() as string[];
      const colleges = [
        ...new Set(data.alumni.map((a: IAlumni) => a.college)),
      ].sort() as string[];

      setFilterOptions({ years, courses, colleges });
    } catch (error) {
      console.error("Failed to fetch filter options:", error);
    }
  };

  useEffect(() => {
    fetchAlumni(1);
    fetchFilterOptions();
  }, []);

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, page: 1 }));
    // Small delay to allow state to update
    setTimeout(() => fetchAlumni(1), 100);
  };

  const handleLoadMore = () => {
    const nextPage = pagination.page + 1;
    setPagination((prev) => ({ ...prev, page: nextPage }));
    fetchAlumni(nextPage, true);
  };

  return (
    <main className="pt-20 bg-beige-soft min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-saffron/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-saffron" />
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Our Proud BACE Alumni
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Celebrating the success stories of our graduates who are making a
              difference in the world
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <StatCard
                icon={<Users size={24} />}
                value={pagination.total.toString()}
                label="Alumni"
              />
              <StatCard
                icon={<Building2 size={24} />}
                value={filterOptions.courses.length.toString()}
                label="Courses"
              />
              <StatCard
                icon={<MapPin size={24} />}
                value={filterOptions.colleges.length.toString()}
                label="Colleges"
              />
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Alumni Section */}
      <Section className="py-16">
        <Container>
          {/* Filter Bar */}
          <AlumniFilterBar
            onFilterChange={handleFilterChange}
            availableYears={filterOptions.years}
            availableCourses={filterOptions.courses}
            availableColleges={filterOptions.colleges}
          />

          {/* Loading State */}
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="animate-spin text-saffron" size={48} />
            </div>
          ) : alumni.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-beige-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-charcoal-light" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-charcoal mb-2">
                No Alumni Found
              </h3>
              <p className="text-charcoal-light">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <>
              {/* Alumni Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {alumni.map((alumniItem, index) => (
                  <AlumniCard
                    key={alumniItem._id.toString()}
                    alumni={alumniItem}
                    index={index}
                  />
                ))}
              </div>

              {/* Load More */}
              {pagination.hasMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoadingMore}
                    className="px-8 py-3 bg-charcoal text-white rounded-lg font-medium hover:bg-charcoal/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoadingMore ? (
                      <>
                        <Loader2
                          className="inline animate-spin mr-2"
                          size={20}
                        />
                        Loading...
                      </>
                    ) : (
                      "Load More"
                    )}
                  </button>
                </div>
              )}
            </>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 bg-gradient-to-r from-saffron/10 to-forest/10 border border-saffron/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-charcoal mb-4">
              Are You a BACE Alumni?
            </h3>
            <p className="text-charcoal-light mb-6 max-w-2xl mx-auto">
              Join our growing community and inspire the next generation of
              students
            </p>
            <a
              href="/our-alumani/registration"
              className="inline-block px-8 py-3 bg-saffron text-white rounded-lg font-medium hover:bg-saffron/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
    >
      <div className="text-saffron mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </motion.div>
  );
}
