"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Crown } from "lucide-react";
import Container from "../ui/Container";
import Section from "../ui/Section";

type LeaderboardEntry = {
  name: string;
  amount: number;
};

type LeaderboardResponse = {
  success: boolean;
  data?: LeaderboardEntry[];
};

function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);
}

function getBadge(amount: number): string {
  if (amount >= 5000) return "Champion";
  if (amount >= 2000) return "Contributor";
  if (amount >= 500) return "Supporter";
  return "Well-Wisher";
}

const medals = [
  {
    rank: 1,
    title: "1st",
    ring: "border-gold",
    bg: "from-[#B8860B]/20 to-saffron/10",
    text: "text-gold",
    scale: "md:-mt-6",
    sizing: "p-7 md:p-8",
  },
  {
    rank: 2,
    title: "2nd",
    ring: "border-slate-300",
    bg: "from-slate-200/40 to-slate-100",
    text: "text-slate-600",
    scale: "",
    sizing: "p-6",
  },
  {
    rank: 3,
    title: "3rd",
    ring: "border-[#CD7F32]",
    bg: "from-[#CD7F32]/20 to-[#CD7F32]/10",
    text: "text-[#8C5A27]",
    scale: "",
    sizing: "p-6",
  },
];

export default function DonorLeaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadLeaderboard() {
      try {
        const response = await fetch("/api/donation/leaderboard", {
          method: "GET",
          cache: "no-store",
        });
        const json = (await response.json()) as LeaderboardResponse;

        if (!active) return;
        if (json.success && Array.isArray(json.data)) {
          setEntries(json.data);
        } else {
          setEntries([]);
        }
      } catch {
        if (active) {
          setEntries([]);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadLeaderboard();

    return () => {
      active = false;
    };
  }, []);

  const topThree = useMemo(() => entries.slice(0, 3), [entries]);
  const remaining = useMemo(() => entries.slice(3), [entries]);

  return (
    <Section background="soft">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">Top Contributors</h2>
          <p className="mt-4 text-lg text-charcoal-light">
            Honoring those who support our mission
          </p>
        </div>

        <div className="mt-12">
          {loading ? (
            <div className="rounded-2xl border border-beige bg-white/70 p-10 text-center text-charcoal-light">
              Loading contributors...
            </div>
          ) : entries.length === 0 ? (
            <div className="rounded-2xl border border-beige bg-white/70 p-10 text-center text-charcoal-light text-lg">
              Be the first contributor 🙏
            </div>
          ) : (
            <>
              <div className="grid gap-4 md:grid-cols-3 md:items-end">
                {[2, 1, 3].map((rank) => {
                  const donor = topThree[rank - 1];
                  const style = medals.find((m) => m.rank === rank)!;

                  if (!donor) {
                    return (
                      <div
                        key={rank}
                        className="hidden md:block rounded-2xl border border-dashed border-beige bg-white/50 p-6"
                      />
                    );
                  }

                  return (
                    <div
                      key={rank}
                      className={`rounded-2xl border bg-gradient-to-br ${style.bg} ${style.ring} ${style.sizing} shadow-sm ${style.scale}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-semibold ${style.text}`}>{style.title}</span>
                        {rank === 1 ? <Crown className="h-5 w-5 text-gold" /> : null}
                      </div>

                      <p className="mt-3 text-2xl font-bold text-charcoal">{donor.name}</p>
                      <p className="mt-2 text-xl font-semibold text-saffron-dark">₹ {formatAmount(donor.amount)}</p>
                      <p className="mt-2 inline-flex rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-charcoal-light">
                        {getBadge(donor.amount)}
                      </p>
                    </div>
                  );
                })}
              </div>

              {remaining.length > 0 ? (
                <div className="mt-8 overflow-hidden rounded-2xl border border-beige bg-white">
                  <ul>
                    {remaining.map((donor, index) => {
                      const rank = index + 4;

                      return (
                        <li
                          key={`${donor.name}-${rank}`}
                          className="flex items-center justify-between border-b border-beige px-6 py-4 last:border-b-0"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-10 text-sm font-semibold text-charcoal-light">#{rank}</span>
                            <span className="text-base font-medium text-charcoal">{donor.name}</span>
                          </div>
                          <span className="text-base font-semibold text-saffron-dark">₹ {formatAmount(donor.amount)}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </>
          )}
        </div>

        <div className="mt-12 rounded-2xl border border-saffron/20 bg-white/80 p-8 text-center">
          <p className="text-lg text-charcoal">
            Be a part of this mission - Your contribution matters ❤️
          </p>
          <Link
            href="/donation"
            className="mt-5 inline-flex items-center rounded-md bg-saffron-dark px-6 py-3 font-medium text-white transition-colors hover:bg-saffron"
          >
            Donate Now
          </Link>
        </div>
      </Container>
    </Section>
  );
}
