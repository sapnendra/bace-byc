import Link from "next/link";
import Container from "../ui/Container";
import NapAddress from "@/components/seo/NapAddress";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/about", label: "About BACE" },
    { href: "/events-courses", label: "Events & Courses" },
    { href: "/hostel-life", label: "Hostel Life" },
    { href: "/parents-view", label: "For Parents" },
    { href: "/gallery", label: "Gallery" },
    { href: "/donation", label: "Donation" },
    { href: "/admissions", label: "Admissions" },
    { href: "/contact", label: "Contact Us" },
  ];

  const baceLocationLinks = [
    { href: "/jp-bace", label: "Jagannath Puri BACE - Anand Nagar, Bhopal" },
    { href: "/vrindavan-bace", label: "Vrindavan BACE - MANIT Chauraha, Bhopal" },
    { href: "/bhaktivedanta-bace", label: "Bhaktivedanta BACE - MP Nagar, Bhopal" },
    { href: "/barsana-bace", label: "Barsana BACE - Kokta Bypass, Bhopal" },
    { href: "/saket-dham-bace", label: "Saket Dham BACE - Saket Nagar, Bhopal" },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">BACE</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Bhaktivedanta Academic and Cultural Education - A Vedic hostel and
              youth development platform nurturing character, clarity, and
              consciousness in college students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <p className="text-sm text-gray-300 mb-2">
              Have questions? We're here to help.
            </p>
            <p className="text-sm text-gray-300 mb-3">
              IYF Bhopal, Prabhupada Marg, Near Mansarobar College, Kolar, Bhopal, Madhya Pradesh | +91 99931 01901
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm text-saffron hover:text-saffron-light transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>

        <div className="pb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">BACE Locations</h4>
            <ul className="space-y-2">
              {baceLocationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/admissions" className="text-sm text-saffron hover:text-saffron-light transition-colors">
                  BACE Admissions 2025
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact IYF Bhopal
                </Link>
              </li>
            </ul>
          </div>
          <NapAddress />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} BACE. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Powered by{" "}
              <span className="text-saffron hover:text-saffron-light transition-colors  "><a href="https://sapnendra.dev" target="_blank">Sapnendra.dev</a></span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
