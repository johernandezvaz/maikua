"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

const projectsData = {
  es: [
    {
      category: "web",
      title: "Sapphirus",
      description: "E-commerce de productos americanos",
      image: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
      tags: ["Nextjs", "TailwindCSS", "Stripe"],
      link: "https://sapphirus.com.mx/"
    },
    {
      category: "web",
      title: "Asecalab",
      description: "Sitio web corporativo para laboratorio de pruebas mecánicas.",
      image: "/clients/ASE-CA LAB-02.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.asecalab.com.mx"
    },
    {
      category: "web",
      title: "Noubeau",
      description: "Sitio web corporativo para agencia de publicidad y desarrollo.",
      image: "/clients/noubeau_logo.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.noubeau.com"
    },
    {
      category: "mobile",
      title: "La Fábrica de Sabores",
      description: "Aplicación de gestión de pedidos y gastos de una repostería",
      image: "/clients/fabrica_sabores_logo.jpg",
      tags: ["Flutter", "Supabase", "Android"],
      screenshots: [
        "/projects/fabrica_sabores_01.jpeg",
        "/projects/fabrica_sabores_02.jpeg",
        "/projects/fabrica_sabores_03.jpeg",
        "/projects/fabrica_sabores_04.jpeg",
        "/projects/fabrica_sabores_05.jpeg",
        "/projects/fabrica_sabores_06.jpeg",
        "/projects/fabrica_sabores_07.jpeg",
      ]
    }
  ],
  en: [
    {
      category: "web",
      title: "Sapphirus",
      description: "American Products E-commerce",
      image: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
      tags: ["Nextjs", "TailwindCSS", "Stripe"],
      link: "https://sapphirus.com.mx/"
    },
    {
      category: "web",
      title: "Asecalab",
      description: "Corporate website for mechanical testing laboratory.",
      image: "/clients/ASE-CA LAB-02.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.asecalab.com.mx"
    },
    {
      category: "web",
      title: "Noubeau",
      description: "Corporate website for advertising and development agency.",
      image: "/clients/noubeau_logo.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.noubeau.com"
    },
    {
      category: "mobile",
      title: "La Fábrica de Sabores",
      description: "Order and expense management application for a pastry shop",
      image: "/clients/fabrica_sabores_logo.jpg",
      tags: ["Flutter", "Supabase", "Android"],
      screenshots: [
        "/projects/fabrica_sabores_01.jpeg",
        "/projects/fabrica_sabores_02.jpeg",
        "/projects/fabrica_sabores_03.jpeg",
        "/projects/fabrica_sabores_04.jpeg",
        "/projects/fabrica_sabores_05.jpeg",
        "/projects/fabrica_sabores_06.jpeg",
        "/projects/fabrica_sabores_07.jpeg",
      ]
    }
  ],
  fr: [
    {
      category: "web",
      title: "Sapphirus",
      description: "Commerce électronique de produits américains",
      image: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
      tags: ["Nextjs", "TailwindCSS", "Stripe"],
      link: "https://sapphirus.com.mx/"
    },
    {
      category: "web",
      title: "Asecalab",
      description: "Site web d'entreprise pour laboratoire d'essais mécaniques.",
      image: "/clients/ASE-CA LAB-02.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.asecalab.com.mx"
    },
    {
      category: "web",
      title: "Noubeau",
      description: "Site web d'entreprise pour agence de publicité et développement.",
      image: "/clients/noubeau_logo.png",
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://www.noubeau.com"
    },
    {
      category: "mobile",
      title: "La Fábrica de Sabores",
      description: "Application de gestion des commandes et des dépenses pour une pâtisserie",
      image: "/clients/fabrica_sabores_logo.jpg",
      tags: ["Flutter", "Supabase", "Android"],
      screenshots: [
        "/projects/fabrica_sabores_01.jpeg",
        "/projects/fabrica_sabores_02.jpeg",
        "/projects/fabrica_sabores_03.jpeg",
        "/projects/fabrica_sabores_04.jpeg",
        "/projects/fabrica_sabores_05.jpeg",
        "/projects/fabrica_sabores_06.jpeg",
        "/projects/fabrica_sabores_07.jpeg",
      ]
    }
  ]
};

export function Projects() {
  const [filter, setFilter] = useState("all");
  const { language } = useLanguage();
  const t = translations[language].projects;
  const projects = projectsData[language];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(t.filters).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-6 py-2 rounded-full brutal ${
                filter === key
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg overflow-hidden glass"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      {t.viewProject} <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}