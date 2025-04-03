"use client";

import { motion } from "framer-motion";
import { Notebook as Robot, LineChart, Languages, Brain } from "lucide-react";

const researchAreas = [
  {
    icon: <Robot className="h-12 w-12" />,
    title: "Aprendizaje Automático",
    description: "Investigamos y desarrollamos modelos que aprenden de datos para hacer predicciones y tomar decisiones inteligentes."
  },
  {
    icon: <LineChart className="h-12 w-12" />,
    title: "Análisis Predictivo",
    description: "Utilizamos datos históricos para predecir tendencias y comportamientos futuros que ayuden en la toma de decisiones."
  },
  {
    icon: <Languages className="h-12 w-12" />,
    title: "Procesamiento de Lenguaje",
    description: "Exploramos cómo las máquinas pueden entender y trabajar con el lenguaje humano de forma natural."
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Redes Neuronales",
    description: "Investigamos sistemas que imitan el funcionamiento del cerebro para resolver problemas complejos."
  }
];

export function Research() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="research" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Investigación en IA
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            En Maikua, nos apasiona la investigación en Inteligencia Artificial. Desarrollamos proyectos innovadores
            que exploran las posibilidades de la IA para resolver problemas complejos y crear soluciones útiles para la sociedad.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index}
              whileHover={{ y: -5 }}
              className="glass p-6 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center justify-center mb-6 text-primary"
              >
                {area.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl font-semibold mb-4 text-center"
              >
                {area.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-text/80 text-center"
              >
                {area.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}