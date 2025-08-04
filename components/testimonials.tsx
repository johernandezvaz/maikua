"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Quote } from "lucide-react";

const testimonialsData = [
  {
    name: "Sapphirus",
    type: "American Products E-commerce",
    logo: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
    content: "At Sapphirus, we knew it was time to take the next step and go digital, but we didn't have a clear understanding of how to get started. That's when we met Maikua, and from the first contact, we knew we were in good hands. Their team provided us with consistent, clear, and friendly advice. Throughout the entire process of building our website, communication was impeccable. They listened to our needs, guided us patiently, and proposed solutions that truly fit our brand. Thanks to them, today we have a functional and professional e-commerce platform that will allow our customers to purchase directly from the comfort of their homes, without needing to visit a physical store. This advancement represents a huge benefit for our business and a new way to connect with those who choose us. We are incredibly grateful to Maikua for supporting us in this digital transformation process. Without a doubt, their commitment and experience made the difference.",
    link: "https://sapphirus.com.mx/"
  },
  {
    name: "Ase-Ca-Lab",
    type: "Mechanical Testing Laboratory",
    logo: "/clients/ASE-CA LAB-02.png",
    content: "When we started with Maikua, our mechanical testing laboratory, Ase-Ca-Lab, was just getting started. We needed a website that not only reflected our professionalism but also helped attract clients. Maikua understood our needs from the beginning and offered us a tailored solution. Thanks to their exceptional work, our website has been a gateway for new clients, allowing us to grow faster than we expected. Today, many of our clients find us and contact us directly through the website that Maikua created. We couldn't be more grateful.",
    link: "https://www.asecalab.com.mx"
  },
  {
    name: "Noubeau",
    type: "Marketing and Development Agency",
    logo: "/clients/noubeau_logo.png",
    content: "As a startup, Noubeau faced the challenge of not having the team or infrastructure needed to develop our website. We were looking for a solution that would allow us to start without complications and within our budget. Maikua was the perfect answer. They offered us personalized quotes and a design that fit our specific needs. Thanks to them, our website is not only functional but also conveys the essence of our brand. Maikua's support made it possible for our dream to become a reality.",
    link: "https://www.noubeau.com"
  },
  {
    name: "La Fabrica de Sabores",
    type: "Pastry Shop",
    logo: "/clients/fabrica_sabores_logo.jpg",
    content: "At La Fábrica de Sabores, managing our expenses, orders, and profits with Excel sheets was becoming increasingly inefficient, especially because we couldn't always access the information from our phones. We needed a more practical and agile solution. That's when we turned to Maikua to develop a custom mobile application. The result exceeded our expectations. The application is not only easy to use but also allows all our employees to access information in real-time. This has significantly improved our organization and efficiency. We are delighted with Maikua's service and professionalism."
  }
];

export function Testimonials() {

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
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
            What our clients say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16">
                  <Image
                    src={testimonial.logo}
                    alt={`${testimonial.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-text/60">{testimonial.type}</p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-primary/20 -translate-x-2 -translate-y-2" />
                <p className="text-text/80 leading-relaxed mb-6">
                  {testimonial.content}
                </p>
              </div>

              {testimonial.link && (
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-accent transition-colors"
                >
                  View project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}