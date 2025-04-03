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
            Política de Privacidad
          </h1>
          
          <div className="space-y-6 text-text">
            <p className="text-lg">
              En Maikua, nos comprometemos a proteger la información personal de nuestros usuarios. 
              Recopilamos y utilizamos datos únicamente para mejorar nuestros servicios, desarrollar 
              soluciones personalizadas y mantener una comunicación efectiva.
            </p>
            
            <p className="text-lg">
              Nunca compartimos ni vendemos información personal a terceros sin consentimiento previo. 
              Implementamos medidas de seguridad avanzadas para proteger los datos de accesos no autorizados.
            </p>
            
            <p className="text-lg">
              Si tienes dudas sobre cómo gestionamos tu información, puedes contactarnos en{" "}
              <a 
                href="mailto:contacto@maikua.com.mx"
                className="text-accent hover:text-accent-hover underline"
              >
                contacto@maikua.com.mx
              </a>
            </p>
          </div>

          <Link 
            href="/"
            className="inline-flex items-center mt-8 px-6 py-3 text-white bg-primary rounded-lg hover:bg-accent transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al inicio
          </Link>
        </div>
      </motion.div>
    </div>
  );
}