import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | IYF Bhopal",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-beige-soft px-6 py-16">
      <div className="max-w-xl rounded-2xl border border-beige-200 bg-white p-10 text-center shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-widest text-saffron">404 Error</p>
        <h1 className="mt-3 text-4xl font-serif font-bold text-charcoal">Page Not Found</h1>
        <p className="mt-4 text-charcoal-light">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white hover:bg-saffron/90"
          >
            Go to Homepage
          </Link>
          <Link
            href="/admissions"
            className="rounded-full border border-charcoal/20 px-6 py-3 text-sm font-semibold text-charcoal hover:border-saffron hover:text-saffron"
          >
            Visit Admissions
          </Link>
        </div>
      </div>
    </main>
  );
}
