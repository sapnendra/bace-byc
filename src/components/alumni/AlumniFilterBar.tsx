"use client";

import { useState } from "react";
import { Search, X, Filter } from "lucide-react";

interface FilterOptions {
  search: string;
  years: string[];
  courses: string[];
  colleges: string[];
}

interface AlumniFilterBarProps {
  onFilterChange: (filters: FilterOptions) => void;
  availableYears: string[];
  availableCourses: string[];
  availableColleges: string[];
}

export default function AlumniFilterBar({
  onFilterChange,
  availableYears,
  availableCourses,
  availableColleges,
}: AlumniFilterBarProps) {
  const [search, setSearch] = useState("");
  const [selectedYears, setSelectedYears] = useState<string[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [selectedColleges, setSelectedColleges] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleApply = () => {
    onFilterChange({
      search,
      years: selectedYears,
      courses: selectedCourses,
      colleges: selectedColleges,
    });
  };

  const handleClear = () => {
    setSearch("");
    setSelectedYears([]);
    setSelectedCourses([]);
    setSelectedColleges([]);
    onFilterChange({
      search: "",
      years: [],
      courses: [],
      colleges: [],
    });
  };

  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: (val: string[]) => void,
  ) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((v) => v !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  const activeFiltersCount =
    selectedYears.length + selectedCourses.length + selectedColleges.length;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-beige-200 p-6 mb-8">
      {/* Search Bar */}
      <div className="flex gap-3 mb-4">
        <div className="flex-1 relative">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-light"
            size={20}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleApply()}
            placeholder="Search by name or company..."
            className="w-full pl-12 pr-4 py-3 border-2 border-beige-200 rounded-lg focus:border-saffron focus:outline-none text-charcoal"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
            showFilters || activeFiltersCount > 0
              ? "bg-saffron text-white"
              : "bg-beige-soft text-charcoal hover:bg-beige"
          }`}
        >
          <Filter size={20} />
          Filters
          {activeFiltersCount > 0 && (
            <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="pt-4 border-t border-beige-200 space-y-4">
          {/* Year Filter */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Passing Year
            </label>
            <div className="flex flex-wrap gap-2">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() =>
                    toggleSelection(year, selectedYears, setSelectedYears)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedYears.includes(year)
                      ? "bg-saffron text-white"
                      : "bg-beige-soft text-charcoal hover:bg-beige"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>

          {/* Course Filter */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              Course
            </label>
            <div className="flex flex-wrap gap-2">
              {availableCourses.map((course) => (
                <button
                  key={course}
                  onClick={() =>
                    toggleSelection(course, selectedCourses, setSelectedCourses)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCourses.includes(course)
                      ? "bg-forest text-white"
                      : "bg-beige-soft text-charcoal hover:bg-beige"
                  }`}
                >
                  {course}
                </button>
              ))}
            </div>
          </div>

          {/* College Filter */}
          <div>
            <label className="block text-sm font-semibold text-charcoal mb-2">
              College
            </label>
            <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
              {availableColleges.map((college) => (
                <button
                  key={college}
                  onClick={() =>
                    toggleSelection(
                      college,
                      selectedColleges,
                      setSelectedColleges,
                    )
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedColleges.includes(college)
                      ? "bg-charcoal text-white"
                      : "bg-beige-soft text-charcoal hover:bg-beige"
                  }`}
                >
                  {college}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={handleClear}
              className="flex-1 px-4 py-2.5 border-2 border-beige-200 rounded-lg font-medium text-charcoal hover:bg-beige-soft transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={handleApply}
              className="flex-1 px-4 py-2.5 bg-saffron text-white rounded-lg font-medium hover:bg-saffron/90 transition-colors shadow-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Active Filter Tags */}
      {activeFiltersCount > 0 && !showFilters && (
        <div className="flex flex-wrap gap-2 mt-4">
          {selectedYears.map((year) => (
            <FilterTag
              key={`year-${year}`}
              label={year}
              onRemove={() =>
                toggleSelection(year, selectedYears, setSelectedYears)
              }
            />
          ))}
          {selectedCourses.map((course) => (
            <FilterTag
              key={`course-${course}`}
              label={course}
              onRemove={() =>
                toggleSelection(course, selectedCourses, setSelectedCourses)
              }
            />
          ))}
          {selectedColleges.map((college) => (
            <FilterTag
              key={`college-${college}`}
              label={college}
              onRemove={() =>
                toggleSelection(college, selectedColleges, setSelectedColleges)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterTag({
  label,
  onRemove,
}: {
  label: string;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-saffron/10 text-saffron rounded-lg text-sm font-medium">
      {label}
      <button
        onClick={onRemove}
        className="hover:bg-saffron/20 rounded-full p-0.5 transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
