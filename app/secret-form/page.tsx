"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

const formSchema = z.object({
  fullName: z.string().min(2, "El nombre es demasiado corto"),
  email: z.string().email("Correo electrónico inválido"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Por favor selecciona un servicio"),
  projectDescription: z.string().min(10, "La descripción es demasiado corta"),
  budget: z.string().optional(),
  preferredLanguage: z.string().min(1, "Por favor selecciona un idioma"),
  foundUs: z.string().optional(),
  otherService: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function SecretForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { language } = useLanguage();
  const t = translations[language].secretForm;

  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const serviceType = watch('serviceType');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_5s1da8u",
        "template_dcdnl7u",
        {
          from_name: data.fullName,
          from_email: data.email,
          phone: data.phone || 'No proporcionado',
          service_type: data.serviceType === 'other' ? data.otherService : data.serviceType,
          project_description: data.projectDescription,
          budget: data.budget || 'No especificado',
          preferred_language: data.preferredLanguage,
          found_us: data.foundUs || 'No especificado',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error al enviar email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-cream py-20 px-4">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {t.title}
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">{t.form.fullName}</label>
              <input
                {...register("fullName")}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-primary">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.email}</label>
              <input
                {...register("email")}
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-primary">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.phone}</label>
              <input
                {...register("phone")}
                type="tel"
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.serviceType}</label>
              <select
                {...register("serviceType")}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.form.selectService}</option>
                <option value="web">{t.form.services.web}</option>
                <option value="mobile">{t.form.services.mobile}</option>
                <option value="ai">{t.form.services.ai}</option>
                <option value="other">{t.form.services.other}</option>
              </select>
              {errors.serviceType && (
                <p className="mt-1 text-sm text-primary">{errors.serviceType.message}</p>
              )}
              {serviceType === 'other' && (
                <input
                  {...register("otherService")}
                  placeholder={t.form.specifyService}
                  className="mt-2 w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.projectDescription}</label>
              <textarea
                {...register("projectDescription")}
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              {errors.projectDescription && (
                <p className="mt-1 text-sm text-primary">{errors.projectDescription.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.budget}</label>
              <select
                {...register("budget")}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.form.selectBudget}</option>
                <option value="less500">{t.form.budgetRanges.less500}</option>
                <option value="500to1000">{t.form.budgetRanges.range500to1000}</option>
                <option value="1000to3000">{t.form.budgetRanges.range1000to3000}</option>
                <option value="more3000">{t.form.budgetRanges.more3000}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.preferredLanguage}</label>
              <select
                {...register("preferredLanguage")}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.form.selectLanguage}</option>
                <option value="es">{t.form.languages.es}</option>
                <option value="en">{t.form.languages.en}</option>
                <option value="fr">{t.form.languages.fr}</option>
              </select>
              {errors.preferredLanguage && (
                <p className="mt-1 text-sm text-primary">{errors.preferredLanguage.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.form.foundUs}</label>
              <select
                {...register("foundUs")}
                className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">{t.form.selectFoundUs}</option>
                <option value="social">{t.form.foundUsOptions.social}</option>
                <option value="recommendation">{t.form.foundUsOptions.recommendation}</option>
                <option value="google">{t.form.foundUsOptions.google}</option>
                <option value="other">{t.form.foundUsOptions.other}</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full btn-brutal ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? t.form.sending : t.form.submit}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                {t.form.success}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                {t.form.error}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
}