"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message is too short")
});

type ContactForm = z.infer<typeof contactSchema>;

const contactData = {
  title: "Contact Us",
  subtitle: "We're here to help. Contact us to discuss your projects or resolve your doubts.",
  form: {
    name: "Name",
    email: "Email",
    subject: {
      label: "Subject",
      placeholder: "Select a subject",
      options: {
        quote: "Quote Request",
        support: "Technical Support",
        project: "Project Inquiry",
        collaboration: "Collaboration Proposal",
        employment: "Employment Opportunities",
        other: "Other"
      }
    },
    message: "Message",
    submit: "Send Message",
    sending: "Sending...",
    success: "Message sent! We'll respond as soon as possible.",
    error: "There was a problem sending your message. Please try again."
  },
  info: {
    email: "Email",
    phone: "Phone",
    location: "Location",
    schedule: {
      title: "Office Hours",
      hours: "Monday to Friday: 9:00 AM - 6:00 PM"
    }
  }
};
export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: data.name,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            {contactData.title}
          </h2>
          <p className="text-xl text-text/80">
            {contactData.subtitle}
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
                <h3 className="text-lg font-semibold">{contactData.info.email}</h3>
                <p className="text-text/80">contact@maikua.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{contactData.info.phone}</h3>
                <p className="text-text/80">+52 614 397 77 41</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{contactData.info.location}</h3>
                <p className="text-text/80">Chihuahua, Mexico</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{contactData.info.schedule.title}</h3>
                <p className="text-text/80">{contactData.info.schedule.hours}</p>
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
                <label className="block text-sm font-medium mb-2">{contactData.form.name}</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-primary">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{contactData.form.email}</label>
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
                <label className="block text-sm font-medium mb-2">{contactData.form.subject.label}</label>
                <select
                  {...register("subject")}
                  className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-xl"
                >
                  <option value="">{contactData.form.subject.placeholder}</option>
                  <option value="quote">{contactData.form.subject.options.quote}</option>
                  <option value="support">{contactData.form.subject.options.support}</option>
                  <option value="project">{contactData.form.subject.options.project}</option>
                  <option value="collaboration">{contactData.form.subject.options.collaboration}</option>
                  <option value="employment">{contactData.form.subject.options.employment}</option>
                  <option value="other">{contactData.form.subject.options.other}</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-primary">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{contactData.form.message}</label>
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
                disabled={isSubmitting}
                className={`w-full btn-brutal ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? contactData.form.sending : contactData.form.submit}
              </button>

              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                  {contactData.form.success}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                  {contactData.form.error}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}