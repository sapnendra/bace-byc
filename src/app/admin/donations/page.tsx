"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Eye, Search, Trash2 } from "lucide-react";

type DonationRecord = {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  amount: number;
  screenshotUrl: string;
  createdAt: string;
};

type DonationStats = {
  totalAmount: number;
  totalDonors: number;
  todayAmount: number;
  recentDonations: number;
};

type ApiResponse = {
  success: boolean;
  data: DonationRecord[];
  stats: DonationStats;
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

const initialStats: DonationStats = {
  totalAmount: 0,
  totalDonors: 0,
  todayAmount: 0,
  recentDonations: 0,
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<DonationRecord[]>([]);
  const [stats, setStats] = useState<DonationStats>(initialStats);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "today" | "month">("all");
  const [sort, setSort] = useState<"newest" | "highest">("newest");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    loadDonations();
  }, [page, filter, sort, search]);

  const loadDonations = async () => {
    setLoading(true);

    try {
      const params = new URLSearchParams({
        page: String(page),
        limit: "20",
        filter,
        sort,
      });

      if (search.trim()) {
        params.set("search", search.trim());
      }

      const response = await fetch(`/api/donation?${params.toString()}`);
      const result: ApiResponse = await response.json();

      if (response.ok && result.success) {
        setDonations(result.data || []);
        setStats(result.stats || initialStats);
        setTotalPages(result.pagination?.totalPages || 1);
      }
    } catch (error) {
      console.error("Failed to load donations", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    const shouldDelete = confirm("Are you sure you want to delete this donation record?");
    if (!shouldDelete) return;

    setDeletingId(id);
    try {
      const response = await fetch(`/api/donation/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (response.ok && result.success) {
        await loadDonations();
      }
    } catch (error) {
      console.error("Failed to delete donation", error);
    } finally {
      setDeletingId(null);
    }
  };

  const handleExportCsv = () => {
    window.open("/api/donation?format=csv", "_blank");
  };

  const tableAmountTotal = useMemo(() => {
    return donations.reduce((sum, item) => sum + item.amount, 0);
  }, [donations]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-serif font-bold text-charcoal mb-2">
            Donations Management
          </h1>
          <p className="text-charcoal-light">
            Track donations, monitor impact, and manage donor records.
          </p>
        </div>

        <button
          onClick={handleExportCsv}
          className="inline-flex items-center gap-2 rounded-lg bg-saffron px-4 py-2 text-sm font-medium text-white shadow-md shadow-orange-200 transition hover:bg-saffron-dark"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard
          title="Total Donations"
          value={formatCurrency(stats.totalAmount)}
          subtitle="Overall contribution"
          color="bg-saffron text-white"
          borderColor="border-saffron/20"
        />
        <StatCard
          title="Total Donors"
          value={String(stats.totalDonors)}
          subtitle="All donation entries"
          color="bg-charcoal text-white"
          borderColor="border-charcoal/20"
        />
        <StatCard
          title="Today's Donations"
          value={formatCurrency(stats.todayAmount)}
          subtitle="Collected today"
          color="bg-forest text-white"
          borderColor="border-forest/20"
        />
        <StatCard
          title="Recent Donations"
          value={String(stats.recentDonations)}
          subtitle="Last 7 days"
          color="bg-gold text-white"
          borderColor="border-gold/20"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 p-6 mb-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, mobile..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-saffron"
            />
          </div>

          <div className="flex gap-2">
            {(["all", "today", "month"] as const).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setPage(1);
                }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-saffron text-white shadow-md shadow-orange-200"
                    : "bg-beige text-charcoal hover:bg-orange-50"
                }`}
              >
                {f === "all" ? "All" : f === "today" ? "Today" : "This Month"}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => {
              setSort(e.target.value as "newest" | "highest");
              setPage(1);
            }}
            className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-saffron"
          >
            <option value="newest">Newest First</option>
            <option value="highest">Highest Amount</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-orange-100 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center p-12">
            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-saffron" />
          </div>
        ) : donations.length === 0 ? (
          <div className="p-12 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-beige">
              <svg
                className="h-8 w-8 text-saffron-muted"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3 .672 3 1.5S13.657 14 12 14m0-6v6m0 0v2m8-4a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </div>
            <p className="text-charcoal-light">No donations yet</p>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-orange-100 bg-beige">
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Donor
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Contact Info
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Screenshot
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-charcoal">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-orange-50">
                  {donations.map((donation) => (
                    <tr key={donation._id} className="transition-colors hover:bg-beige-soft">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-saffron/10 text-lg font-bold text-saffron-dark">
                            {donation.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="font-semibold text-charcoal">{donation.name}</div>
                            <div className="text-xs text-charcoal-light">
                              Joined {new Date(donation.createdAt).toLocaleDateString("en-GB")}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-charcoal-light">{donation.email}</div>
                        <div className="text-sm text-charcoal-light">{donation.mobile}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-semibold text-saffron-dark">
                          {formatCurrency(donation.amount)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={donation.screenshotUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block"
                          title="Open screenshot"
                        >
                          <img
                            src={donation.screenshotUrl}
                            alt={`${donation.name} payment screenshot`}
                            className="h-12 w-12 rounded-lg border border-beige-200 object-cover"
                            loading="lazy"
                          />
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-charcoal-light">
                        {new Date(donation.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm">
                          <a
                            href={donation.screenshotUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-lg bg-beige px-3 py-1.5 text-charcoal transition hover:bg-beige-soft"
                          >
                            <Eye className="h-4 w-4" />
                            View
                          </a>
                          <button
                            onClick={() => handleDelete(donation._id)}
                            disabled={deletingId === donation._id}
                            className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-red-600 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 className="h-4 w-4" />
                            {deletingId === donation._id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-orange-100 bg-beige-soft">
                    <td className="px-6 py-4 text-sm font-semibold text-charcoal" colSpan={2}>
                      Total (Current Page)
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-saffron-dark">
                      {formatCurrency(tableAmountTotal)}
                    </td>
                    <td colSpan={3} />
                  </tr>
                </tfoot>
              </table>
            </div>

            {totalPages > 1 && (
              <div className="flex items-center justify-between border-t border-orange-100 bg-beige px-6 py-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <span className="text-sm font-medium text-charcoal-light">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-charcoal transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  color,
  borderColor,
}: {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div
      className={`rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${borderColor}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className={`rounded-lg p-3 shadow-sm ${color}`}>
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3 .672 3 1.5S13.657 14 12 14m0-6v6m0 0v2m8-4a8 8 0 11-16 0 8 8 0 0116 0z"
            />
          </svg>
        </div>
      </div>
      <h3 className="mb-1 text-sm font-medium text-charcoal-light">{title}</h3>
      <p className="mb-2 text-3xl font-bold text-charcoal">{value}</p>
      <p className="text-sm text-charcoal-light/80">{subtitle}</p>
    </div>
  );
}
