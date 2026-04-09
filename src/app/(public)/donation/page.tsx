import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import DonationForm from "@/components/forms/DonationForm";

export const metadata: Metadata = {
  title: "Donation - BACE",
  description:
    "Support BACE's mission through a simple UPI donation flow and help build character-driven youth through Vedic education.",
};

const upiId = "bace@upi";

export default function DonationPage() {
  return (
    <main className="min-h-screen bg-beige-soft pt-20">
      <Section className="relative overflow-hidden bg-charcoal py-20 text-white">
        <div className="absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/4 rounded-full bg-saffron/15 blur-3xl sm:h-96 sm:w-96" />
        <Container className="relative z-10 text-center">
          <span className="mb-4 block text-sm font-bold uppercase tracking-widest text-gold">
            Support BACE Mission
          </span>
          <h1 className="text-4xl font-bold md:text-6xl">Support a Noble Cause</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-300">
            Help us build character-driven youth through Vedic education.
          </p>
        </Container>
      </Section>

      <Section className="py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-beige-200 bg-white p-6 shadow-lg">
                <h2 className="text-2xl font-serif font-bold text-charcoal">Donate via UPI QR</h2>
                <p className="mt-2 text-sm text-charcoal-light">
                  Scan this QR using any UPI app (GPay, PhonePe, Paytm), complete your donation,
                  then upload payment screenshot below.
                </p>

                <div className="mt-6 rounded-xl border border-beige-200 bg-beige-soft p-4">
                  <div className="mx-auto w-full max-w-xs overflow-hidden rounded-lg border border-beige-300 bg-white p-2">
                    <Image
                      src="/images/donation-qr/donationQR.jpeg"
                      alt="BACE UPI QR Code"
                      width={260}
                      height={260}
                      className="h-auto w-full"
                      priority
                    />
                  </div>
                  <p className="mt-3 text-center text-sm text-charcoal-light">UPI ID</p>
                  <p className="text-center text-lg font-semibold text-saffron">{upiId}</p>
                </div>

                <ol className="mt-5 space-y-2 text-sm text-charcoal-light">
                  <li>1. Scan this QR using any UPI app (GPay, PhonePe, Paytm)</li>
                  <li>2. Complete your donation</li>
                  <li>3. Upload screenshot below</li>
                </ol>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-gold/20 bg-gold/10 px-4 py-3 text-sm font-medium text-charcoal">
                    <ShieldCheck className="mb-1 h-4 w-4 text-gold" />
                    Secure Donation
                  </div>
                  <div className="rounded-lg border border-forest/20 bg-forest/10 px-4 py-3 text-sm font-medium text-charcoal">
                    <BadgeCheck className="mb-1 h-4 w-4 text-forest" />
                    100% Used for Students
                  </div>
                </div>

                <p className="mt-5 rounded-lg border border-saffron/20 bg-saffron/10 px-4 py-3 text-sm italic text-charcoal">
                  “Last year, community contributions helped multiple students continue education with values.”
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <DonationForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
