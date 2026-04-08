import React from "react";

type DonationReceiptProps = {
  donorName: string;
  amount: number;
  donationId: string;
  donatedAt: string;
  variant?: "full" | "mini";
};

function formatDate(dateInput: string): string {
  return new Date(dateInput).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function formatAmount(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function DonationReceipt({
  donorName,
  amount,
  donationId,
  donatedAt,
  variant = "full",
}: DonationReceiptProps) {
  const isMini = variant === "mini";

  return (
    <div
      className={`relative mx-auto overflow-hidden bg-beige-soft text-charcoal ${
        isMini
          ? "w-full max-w-[680px] rounded-xl border-4 border-gold p-6 shadow-lg"
          : "w-[1120px] rounded-2xl border-8 border-gold p-14 shadow-2xl"
      }`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(184,134,11,0.12), transparent 45%), radial-gradient(circle at 80% 80%, rgba(200,98,31,0.10), transparent 50%)",
      }}
    >
      <div className={`absolute rounded-full border border-gold/60 ${isMini ? "left-3 top-3 h-7 w-7" : "left-6 top-6 h-12 w-12"}`} />
      <div className={`absolute rounded-full border border-gold/60 ${isMini ? "right-3 top-3 h-7 w-7" : "right-6 top-6 h-12 w-12"}`} />
      <div className={`absolute rounded-full border border-gold/60 ${isMini ? "bottom-3 left-3 h-7 w-7" : "bottom-6 left-6 h-12 w-12"}`} />
      <div className={`absolute rounded-full border border-gold/60 ${isMini ? "bottom-3 right-3 h-7 w-7" : "bottom-6 right-6 h-12 w-12"}`} />

      <div className={`relative z-10 rounded-xl border border-gold/40 bg-white/60 backdrop-blur-sm ${isMini ? "p-6" : "p-12"}`}>
        <div className={`${isMini ? "mb-5" : "mb-10"} text-center`}>
          <p className={`${isMini ? "text-[10px]" : "text-sm"} uppercase tracking-[0.2em] text-saffron-dark`}>BACE BYC</p>
          <h1 className={`mt-2 font-serif font-bold text-charcoal ${isMini ? "text-3xl" : "text-5xl"}`}>
            Certificate of Contribution
          </h1>
          <div className={`mx-auto bg-gold ${isMini ? "mt-3 h-[2px] w-24" : "mt-4 h-[2px] w-40"}`} />
        </div>

        <div className="text-center">
          <p className={`${isMini ? "text-sm" : "text-lg"} text-charcoal-light`}>This is to proudly acknowledge that</p>
          <h2 className={`mt-3 font-serif font-bold uppercase tracking-wide text-saffron-dark ${isMini ? "text-3xl" : "text-5xl"}`}>
            {donorName}
          </h2>

          <p className={`${isMini ? "mt-5 text-base" : "mt-8 text-xl"} text-charcoal-light`}>
            has generously contributed an amount of
          </p>
          <p className={`mt-2 font-serif font-bold text-gold ${isMini ? "text-4xl" : "text-6xl"}`}>₹ {formatAmount(amount)}</p>

          <p className={`mx-auto leading-relaxed text-charcoal ${isMini ? "mt-5 max-w-2xl text-sm" : "mt-8 max-w-3xl text-xl"}`}>
            towards the mission of Bhaktivedanta Academic and Cultural Education (BACE).
            Your support helps in building character-driven youth through Vedic wisdom and education.
          </p>
        </div>

        <div className={`grid grid-cols-3 items-end ${isMini ? "mt-7 gap-4 text-[11px]" : "mt-12 gap-8 text-sm"}`}>
          <div>
            <p className="font-semibold uppercase tracking-wide text-charcoal-light">Date</p>
            <p className={`mt-1 font-medium text-charcoal ${isMini ? "text-sm" : "text-base"}`}>{formatDate(donatedAt)}</p>
          </div>

          <div className="text-center">
            <p className="font-semibold uppercase tracking-wide text-charcoal-light">Donation ID</p>
            <p className={`mt-1 font-semibold text-saffron-dark ${isMini ? "text-sm" : "text-base"}`}>{donationId}</p>
          </div>

          <div className="text-right">
            <p className="font-semibold uppercase tracking-wide text-charcoal-light">Authorized by</p>
            <p className={`mt-1 font-medium text-charcoal ${isMini ? "text-sm" : "text-base"}`}>BACE BYC</p>
          </div>
        </div>

        <p className={`text-center italic text-charcoal-light ${isMini ? "mt-6 text-xs" : "mt-10 text-base"}`}>
          "Service to humanity is service to God."
        </p>
      </div>
    </div>
  );
}
