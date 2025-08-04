"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          
          <div className="space-y-6 text-text">
            <p className="text-lg">
              At Maikua, we are committed to protecting the personal information of our users. 
              We collect and use data solely to improve our services, develop personalized solutions, 
              and maintain effective communication.
            </p>
            
            <p className="text-lg">
              We never share or sell personal information to third parties without prior consent. 
              We implement advanced security measures to protect data from unauthorized access.
            </p>
            
            <p className="text-lg">
              If you have questions about how we manage your information, you can contact us at{" "}
              <a 
                href="mailto:contact@maikua.com"
                className="text-accent hover:text-accent-hover underline"
              >
                contact@maikua.com
              </a>
            </p>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center mt-8 px-6 py-3 text-white bg-primary rounded-lg hover:bg-accent transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}