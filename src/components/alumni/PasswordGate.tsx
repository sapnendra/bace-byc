"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react";

interface PasswordGateProps {
  onSuccess: () => void;
}

export default function PasswordGate({ onSuccess }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsVerifying(true);

    try {
      const response = await fetch("/api/alumni/verify-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        // Store verification in session
        sessionStorage.setItem("alumni_access", "true");
        onSuccess();
      } else {
        setError("Incorrect password. Please try again.");
        setPassword("");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-beige-200">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-saffron/10 rounded-full flex items-center justify-center">
              <Lock className="w-8 h-8 text-saffron" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-serif font-bold text-charcoal text-center mb-2">
            Alumni Registration
          </h2>
          <p className="text-charcoal-light text-center mb-8 text-sm">
            This page is protected. Enter the password to continue.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3.5 pr-12 border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                  error
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                    : "border-beige-200 focus:border-saffron focus:ring-saffron/10"
                }`}
                placeholder="Enter password"
                required
                disabled={isVerifying}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-light hover:text-charcoal transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-red-500 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isVerifying || !password}
              className="w-full bg-saffron text-white py-3.5 rounded-xl font-medium hover:bg-saffron/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isVerifying ? "Verifying..." : "Continue"}
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 p-4 bg-beige-soft rounded-lg border border-beige-200">
            <p className="text-xs text-charcoal-light text-center">
              <Lock className="w-3.5 h-3.5 inline mr-1" />
              Don't have the password? Contact{" "}
              <a
                href="/contact"
                className="text-saffron hover:underline font-medium"
              >
                BACE Admin
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
