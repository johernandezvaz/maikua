"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function About() {
  const [activeTab, setActiveTab] = useState("about");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Conócenos
          </h2>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl h-auto p-1 glass border border-white/20 backdrop-blur-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-white/30">Nosotros</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-white/30">Visión</TabsTrigger>
            <TabsTrigger value="mision" className="data-[state=active]:bg-white/30">Misión</TabsTrigger>
            <TabsTrigger value="valores" className="data-[state=active]:bg-white/30">Valores</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Acerca de Nosotros</h3>
              <p className="text-lg leading-relaxed">
                En Maikua, fusionamos tecnología innovadora con un compromiso profundo hacia la investigación y el desarrollo de soluciones digitales. Diseñamos y desarrollamos sitios web avanzados, como tiendas en línea, sistemas de gestión (ORM, ERP) y plataformas únicas, con el objetivo de empoderar a personas y empresas.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Creemos en el poder de la Inteligencia Artificial para mejorar la sociedad, impulsando soluciones éticas y beneficiosas que permitan construir un futuro más justo y eficiente para todos.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="vision" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">Nuestra Visión</h3>
              <p className="text-lg leading-relaxed">
                Ser un referente global en el desarrollo de plataformas digitales y aplicaciones de Inteligencia Artificial que contribuyan al avance social y económico, creando herramientas que sean útiles, accesibles y capaces de transformar vidas.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="mision" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Nuestra Misión</h3>
              <p className="text-lg leading-relaxed">
                Proveer soluciones digitales innovadoras y servicios de investigación en Inteligencia Artificial, diseñadas para resolver problemas reales y mejorar la eficiencia de las empresas. Desde el desarrollo de sitios web robustos hasta sistemas avanzados de IA, nuestro objetivo es impactar positivamente a las comunidades y fomentar un crecimiento sostenible.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="valores" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">Nuestros Valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Innovación", desc: "Desarrollamos soluciones creativas que anticipan las necesidades del futuro." },
                  { title: "Compromiso Social", desc: "Utilizamos la tecnología como una herramienta para generar un impacto positivo." },
                  { title: "Transparencia", desc: "Actuamos con ética y claridad en todos nuestros proyectos." },
                  { title: "Excelencia", desc: "Nos esforzamos por ofrecer la máxima calidad en cada solución." }
                ].map((valor, index) => (
                  <div key={index} className="glass p-4 rounded-xl border border-white/10">
                    <h4 className="text-primary font-semibold mb-2">{valor.title}</h4>
                    <p className="text-text/80">{valor.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}