"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Cpu, Brain } from "lucide-react";

const services = {
  web: {
    title: "Desarrollo Web & Móvil",
    description: "Soluciones digitales modernas y responsivas para tu presencia en línea",
    items: [
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Sitios Web",
        description: "Diseñamos y desarrollamos sitios web modernos, rápidos y adaptables a cualquier dispositivo."
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "Apps Móviles",
        description: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android."
      },
      {
        icon: <Globe className="h-8 w-8" />,
        title: "E-commerce",
        description: "Creamos tu tienda virtual con todas las herramientas necesarias para vender en internet."
      }
    ]
  },
  iot: {
    title: "Internet de las Cosas",
    description: "Soluciones IoT inteligentes y conectadas para la automatización y monitoreo",
    items: [
      {
        icon: <Cpu className="h-8 w-8" />,
        title: "Automatización",
        description: "Sistemas de automatización inteligente para hogares e industrias."
      },
      {
        icon: <Cpu className="h-8 w-8" />,
        title: "Monitoreo",
        description: "Sistemas de monitoreo en tiempo real para control y análisis."
      },
      {
        icon: <Cpu className="h-8 w-8" />,
        title: "Dispositivos Conectados",
        description: "Desarrollo de dispositivos IoT personalizados para tus necesidades."
      }
    ]
  },
  ai: {
    title: "Inteligencia Artificial",
    description: "Soluciones avanzadas de IA para optimizar y automatizar procesos",
    items: [
      {
        icon: <Brain className="h-8 w-8" />,
        title: "Machine Learning",
        description: "Modelos predictivos y análisis de datos para toma de decisiones."
      },
      {
        icon: <Brain className="h-8 w-8" />,
        title: "Procesamiento de Lenguaje",
        description: "Análisis de texto y procesamiento del lenguaje natural."
      },
      {
        icon: <Brain className="h-8 w-8" />,
        title: "Visión Computacional",
        description: "Análisis y procesamiento de imágenes para reconocimiento y clasificación."
      }
    ]
  }
};

export function Services() {
  const [activeService, setActiveService] = useState("web");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Nuestras Soluciones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(services).map(([key, value]) => (
            <motion.button
              key={key}
              onClick={() => setActiveService(key)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-6 rounded-lg brutal ${
                activeService === key
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: activeService === key ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center mb-4"
              >
                {key === "web" && <Globe className="h-8 w-8" />}
                {key === "iot" && <Cpu className="h-8 w-8" />}
                {key === "ai" && <Brain className="h-8 w-8" />}
              </motion.div>
              <h3 className="text-xl font-semibold">{value.title}</h3>
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {services[activeService as keyof typeof services].items.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center mb-4"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-text/80">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}