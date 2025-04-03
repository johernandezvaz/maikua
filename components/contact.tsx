"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Correo electrónico inválido"),
  subject: z.string().min(1, "Por favor selecciona un asunto"),
  message: z.string().min(10, "El mensaje es demasiado corto")
});

type ContactForm = z.infer<typeof contactSchema>;

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    console.log(data);
  };

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
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
            Contáctanos
          </h2>
          <p className="text-xl text-text/80">
            Estamos aquí para ayudarte. Contáctanos para discutir tus proyectos o resolver tus dudas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Correo Electrónico</h3>
                <p className="text-text/80">contacto@maikua.com.mx</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Teléfono</h3>
                <p className="text-text/80">+52 614 397 77 41</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Ubicación</h3>
                <p className="text-text/80">Chihuahua, Chihuahua</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Horario de Atención</h3>
                <p className="text-text/80">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nombre</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-primary">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-primary">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Asunto</label>
                <select
                  {...register("subject")}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="cotizacion">Solicitud de Cotización</option>
                  <option value="soporte">Soporte Técnico</option>
                  <option value="proyecto">Consulta sobre Proyecto</option>
                  <option value="colaboracion">Propuesta de Colaboración</option>
                  <option value="empleo">Oportunidades de Empleo</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-primary">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Mensaje</label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-primary">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-brutal"
              >
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}