"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CookiesPolicy() {
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
            Cookie Policy
          </h1>
          
          <div className="space-y-6 text-text">
            <p className="text-lg">
              Our website uses cookies to improve user experience, analyze traffic, 
              and personalize content.
            </p>
            
            <p className="text-lg">
              You can accept or reject the use of cookies through your browser settings. 
              By accepting, you allow us to collect non-personal data, such as site behavior, 
              to offer you a more relevant experience.
            </p>

            <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/10">
              <h2 className="text-xl font-semibold mb-4 text-accent">Types of Cookies we use:</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Essential cookies for site functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Analytics cookies to improve our services</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Preference cookies to remember your settings</span>
                </li>
              </ul>
            </div>
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