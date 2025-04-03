"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
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
            Términos y Condiciones
          </h1>
          
          <div className="space-y-8 text-text">
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Aceptación de los Términos</h2>
              <p className="text-lg">Al usar nuestros servicios, aceptas las condiciones descritas en este documento.</p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Servicios Ofrecidos</h2>
              <p className="text-lg">
                Maikua proporciona desarrollo de sitios web y servicios de investigación en IA. 
                Nos reservamos el derecho de modificar o descontinuar servicios según sea necesario.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Propiedad Intelectual</h2>
              <p className="text-lg">
                Todo el contenido generado por Maikua está protegido por derechos de autor y no puede 
                ser reproducido sin autorización.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Responsabilidad</h2>
              <p className="text-lg">
                No garantizamos resultados específicos y no nos hacemos responsables de pérdidas 
                derivadas del uso de nuestros servicios.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-primary">Jurisdicción</h2>
              <p className="text-lg">Estas condiciones se rigen por las leyes de México.</p>
            </section>
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