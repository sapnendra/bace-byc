"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PasswordGate from "@/components/alumni/PasswordGate";
import AlumniRegistrationForm from "@/components/forms/AlumniRegistrationForm";
import { Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";

export default function AlumniRegistrationPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const hasAccess = sessionStorage.getItem("alumni_access");
    if (hasAccess === "true") {
      setIsAuthenticated(true);
    }
    setIsChecking(false);
  }, []);

  const handlePasswordSuccess = () => {
    setIsAuthenticated(true);
  };

  if (isChecking) {
    return (
      <div className="min-h-screen bg-beige-soft flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-saffron border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordGate onSuccess={handlePasswordSuccess} />;
  }

  return (
    <main className="pt-20 bg-beige-soft min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-saffron/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <Container className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-saffron/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-saffron" />
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Join the BACE Alumni Network
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Share your journey and inspire the next generation of BACE
              students
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Award className="w-6 h-6" />,
                title: "Get Featured",
                desc: "Showcase your achievements on the BACE alumni page",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "Inspire Others",
                desc: "Share your success story with current students",
              },
              {
                icon: <CheckCircle2 className="w-6 h-6" />,
                title: "Stay Connected",
                desc: "Be part of the growing BACE community",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-beige-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-saffron/10 rounded-lg flex items-center justify-center mb-4 text-saffron">
                  {item.icon}
                </div>
                <h3 className="font-bold text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AlumniRegistrationForm />
          </motion.div>

          <p className="text-center text-xs text-charcoal-light mt-6">
            Your submission will be reviewed by our team before appearing on the
            public alumni page.
          </p>
        </Container>
      </Section>
    </main>
  );
}
