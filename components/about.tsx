"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

export function About() {
  const [activeTab, setActiveTab] = useState("about");
  const { language } = useLanguage();
  const t = translations[language];

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
            {t.about.title}
          </h2>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl h-auto p-1 glass border border-white/20 backdrop-blur-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-white/30">{t.about.tabs.about}</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-white/30">{t.about.tabs.vision}</TabsTrigger>
            <TabsTrigger value="mision" className="data-[state=active]:bg-white/30">{t.about.tabs.mision}</TabsTrigger>
            <TabsTrigger value="valores" className="data-[state=active]:bg-white/30">{t.about.tabs.valores}</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{t.about.content.about.title}</h3>
              {t.about.content.about.description.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed mt-4">{paragraph}</p>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="vision" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">{t.about.content.vision.title}</h3>
              <p className="text-lg leading-relaxed">{t.about.content.vision.description}</p>
            </motion.div>
          </TabsContent>

          <TabsContent value="mision" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">{t.about.content.mision.title}</h3>
              <p className="text-lg leading-relaxed">{t.about.content.mision.description}</p>
            </motion.div>
          </TabsContent>

          <TabsContent value="valores" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">{t.about.content.valores.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.about.content.valores.items.map((valor, index) => (
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