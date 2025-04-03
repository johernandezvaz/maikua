"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Clock, Tag, ChevronRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "¿Go, Python o Rust para el Backend? Descubre cuál es el mejor para tu proyecto",
    slug: "go-python-rust-backend",
    excerpt: "Analizamos las ventajas y desventajas de cada lenguaje para ayudarte a elegir el más adecuado para tu próximo proyecto backend.",
    image_url: "/images/blog/backend-comparison.jpg",
    category: "Desarrollo",
    tags: ["Backend", "Go", "Python", "Rust"],
    created_at: "2024-02-01"
  },
  {
    id: "2",
    title: "MONAI: El Futuro del Desarrollo en Inteligencia Artificial Médica",
    slug: "monai-ai-medica",
    excerpt: "Descubre cómo MONAI está revolucionando el desarrollo de soluciones de IA para el sector médico y sus aplicaciones prácticas.",
    image_url: "/images/blog/monai-ai.jpg",
    category: "Inteligencia Artificial",
    tags: ["MONAI", "IA", "Medicina", "InnovacionMedica"],
    created_at: "2024-01-15"
  },
  {
    id: "3",
    title: "¿Pueden las Raspberry Pi reemplazar a los PLC en la industria?",
    slug: "raspberry-pi-vs-plc",
    excerpt: "Analizamos las capacidades y limitaciones de las Raspberry Pi como alternativa a los PLC tradicionales en entornos industriales.",
    image_url: "/images/blog/raspberry-plc.jpg",
    category: "IoT",
    tags: ["RaspberryPi", "PLC", "Automatización", "IoT"],
    created_at: "2024-01-01"
  }
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
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
            Blog
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            Explora nuestros artículos sobre tecnología, desarrollo e innovación
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex justify-center space-x-4 mb-12 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full brutal whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm bg-primary text-white rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-text/60 mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  {formatDate(post.created_at)}
                </div>

                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-text/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center text-sm text-accent"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-accent transition-colors"
                >
                  Leer más
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}