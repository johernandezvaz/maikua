"use client";

import { motion } from "framer-motion";
import { CheckCircle, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export function Promotion() {
  const { language } = useLanguage();
  const t = translations[language].promotion;

  const handleContactClick = () => {
    const formUrl = language === 'es' ? '/secret-form' : 
                   language === 'en' ? '/secret-form' : 
                   '/secret-form';
    window.open(formUrl, '_blank');
  };

  return (
    <section className="py-12 bg-gradient-to-r from-black_gradient to-red_gradient text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6"
          >
            🌐 {t.badge}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl mb-8 max-w-4xl mx-auto"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {t.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-2 bg-white/10 rounded-lg p-3"
              >
                <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white/10 rounded-lg p-4 mb-8 max-w-2xl mx-auto"
          >
            <p className="text-sm">
              <strong>{t.note.title}:</strong> {t.note.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="space-y-4"
          >
            <p className="text-xl font-semibold">
              {t.cta.title} ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                {t.cta.button}
              </button>
              
              <div className="flex items-center space-x-4 text-sm">
                <span>{t.cta.or}</span>
                <a
                  href="mailto:contacto@maikua.com.mx"
                  className="inline-flex items-center hover:underline"
                >
                  <Mail className="h-4 w-4 mr-1" />
                  contacto@maikua.com.mx
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}