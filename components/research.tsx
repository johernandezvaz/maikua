"use client";

import { motion } from "framer-motion";
import { Notebook as Robot, LineChart, Languages, Brain } from "lucide-react";

const researchIcons = {
  0: Robot,
  1: LineChart,
  2: Languages,
  3: Brain
};

const researchData = {
  title: "AI Research",
  description: "At Maikua, we are passionate about Artificial Intelligence research. We develop innovative projects that explore the possibilities of AI to solve complex problems and create useful solutions for society.",
  areas: [
    {
      title: "Machine Learning",
      description: "We research and develop models that learn from data to make predictions and intelligent decisions."
    },
    {
      title: "Predictive Analysis",
      description: "We use historical data to predict trends and future behaviors that aid in decision making."
    },
    {
      title: "Language Processing",
      description: "We explore how machines can understand and work with human language naturally."
    },
    {
      title: "Neural Networks",
      description: "We research systems that mimic brain function to solve complex problems."
    }
  ]
};
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
            {researchData.title}
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            {researchData.description}
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {researchData.areas.map((area, index) => {
            const Icon = researchIcons[index as keyof typeof researchIcons];
            return (
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
                  <Icon className="h-12 w-12" />
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
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}