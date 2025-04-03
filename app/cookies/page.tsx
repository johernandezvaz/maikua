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
            Política de Cookies
          </h1>
          
          <div className="space-y-6 text-text">
            <p className="text-lg">
              Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario, analizar el 
              tráfico y personalizar el contenido.
            </p>
            
            <p className="text-lg">
              Puedes aceptar o rechazar el uso de cookies a través de la configuración de tu navegador. 
              Al aceptar, permites que recopilemos datos no personales, como el comportamiento en el sitio, 
              para ofrecerte una experiencia más relevante.
            </p>

            <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/10">
              <h2 className="text-xl font-semibold mb-4 text-accent">Tipos de Cookies que utilizamos:</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Cookies esenciales para el funcionamiento del sitio</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Cookies analíticas para mejorar nuestros servicios</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-accent rounded-full"></span>
                  <span>Cookies de preferencias para recordar tus ajustes</span>
                </li>
              </ul>
            </div>
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