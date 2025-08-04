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
            About Us
          </h2>
        </motion.div>

        <Tabs defaultValue="about" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 rounded-2xl h-auto p-1 glass border border-white/20 backdrop-blur-xl">
            <TabsTrigger value="about" className="data-[state=active]:bg-white/30">About</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-white/30">Vision</TabsTrigger>
            <TabsTrigger value="mission" className="data-[state=active]:bg-white/30">Mission</TabsTrigger>
            <TabsTrigger value="values" className="data-[state=active]:bg-white/30">Values</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">About Us</h3>
              <p className="text-lg leading-relaxed mt-4">
                At Maikua, we merge innovative technology with a deep commitment to research and development of digital solutions. We design and develop advanced websites, such as online stores, management systems (ORM, ERP), and unique platforms, with the goal of empowering people and businesses.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                We believe in the power of Artificial Intelligence to improve society, driving ethical and beneficial solutions that enable building a fairer and more efficient future for all.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="vision" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be a global reference in the development of digital platforms and Artificial Intelligence applications that contribute to social and economic advancement, creating tools that are useful, accessible, and capable of transforming lives.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="mission" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h3>
              <p className="text-lg leading-relaxed">
                To provide innovative digital solutions and Artificial Intelligence research services, designed to solve real problems and improve business efficiency. From developing robust websites to advanced AI systems, our goal is to positively impact communities and foster sustainable growth.
              </p>
            </motion.div>
          </TabsContent>

          <TabsContent value="values" className="mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-semibold mb-4 text-accent">Our Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Innovation", desc: "We develop creative solutions that anticipate future needs." },
                  { title: "Social Commitment", desc: "We use technology as a tool to generate positive impact." },
                  { title: "Transparency", desc: "We act with ethics and clarity in all our projects." },
                  { title: "Excellence", desc: "We strive to offer the highest quality in every solution." }
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