"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/lib/emailjs';
import { SecretNavigation } from "@/components/secret-navigation";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service"),
  projectDescription: z.string().min(10, "Description is too short"),
  budget: z.string().optional(),
  preferredLanguage: z.string().min(1, "Please select a language"),
  foundUs: z.string().optional(),
  otherService: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const formData = {
  title: "Contact Form",
  form: {
    fullName: "Full name",
    email: "Email",
    phone: "Phone number (optional)",
    serviceType: "Type of service needed",
    selectService: "Select a service",
    services: {
      web: "Web Development",
      mobile: "Mobile Development",
      ai: "AI Project",
      other: "Other"
    },
    specifyService: "Specify the service",
    projectDescription: "Tell us briefly what you need to develop or how we can help you",
    budget: "Estimated budget (optional)",
    selectBudget: "Select a budget range",
    budgetRanges: {
      less500: "Less than $500",
      range500to1000: "$500 – $1000",
      range1000to3000: "$1000 – $3000",
      more3000: "More than $3000"
    },
    preferredLanguage: "What language would you prefer to be contacted in?",
    selectLanguage: "Select a language",
    languages: {
      es: "Spanish",
      en: "English",
      fr: "French"
    },
    foundUs: "How did you find us? (optional)",
    selectFoundUs: "Select an option",
    foundUsOptions: {
      social: "Social media",
      recommendation: "Recommendation",
      google: "Google",
      other: "Other"
    },
    submit: "Submit form",
    sending: "Sending...",
    success: "Form submitted! We'll contact you soon.",
    error: "There was an error submitting the form. Please try again."
  }
};
export default function SecretForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
        <><SecretNavigation />
        <div className="min-h-screen bg-cream pt-20 pb-4 px-4">
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
                      {formData.title}
                  </h1>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.fullName}</label>
                          <input
                              {...register("fullName")}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent" />
                          {errors.fullName && (
                              <p className="mt-1 text-sm text-primary">{errors.fullName.message}</p>
                          )}
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.email}</label>
                          <input
                              {...register("email")}
                              type="email"
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent" />
                          {errors.email && (
                              <p className="mt-1 text-sm text-primary">{errors.email.message}</p>
                          )}
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.phone}</label>
                          <input
                              {...register("phone")}
                              type="tel"
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent" />
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.serviceType}</label>
                          <select
                              {...register("serviceType")}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                              <option value="">{formData.form.selectService}</option>
                              <option value="web">{formData.form.services.web}</option>
                              <option value="mobile">{formData.form.services.mobile}</option>
                              <option value="ai">{formData.form.services.ai}</option>
                              <option value="other">{formData.form.services.other}</option>
                          </select>
                          {errors.serviceType && (
                              <p className="mt-1 text-sm text-primary">{errors.serviceType.message}</p>
                          )}
                          {serviceType === 'other' && (
                              <input
                                  {...register("otherService")}
                                  placeholder={formData.form.specifyService}
                                  className="mt-2 w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent" />
                          )}
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.projectDescription}</label>
                          <textarea
                              {...register("projectDescription")}
                              rows={5}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent" />
                          {errors.projectDescription && (
                              <p className="mt-1 text-sm text-primary">{errors.projectDescription.message}</p>
                          )}
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.budget}</label>
                          <select
                              {...register("budget")}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                              <option value="">{formData.form.selectBudget}</option>
                              <option value="less500">{formData.form.budgetRanges.less500}</option>
                              <option value="500to1000">{formData.form.budgetRanges.range500to1000}</option>
                              <option value="1000to3000">{formData.form.budgetRanges.range1000to3000}</option>
                              <option value="more3000">{formData.form.budgetRanges.more3000}</option>
                          </select>
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.preferredLanguage}</label>
                          <select
                              {...register("preferredLanguage")}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                              <option value="">{formData.form.selectLanguage}</option>
                              <option value="es">{formData.form.languages.es}</option>
                              <option value="en">{formData.form.languages.en}</option>
                              <option value="fr">{formData.form.languages.fr}</option>
                          </select>
                          {errors.preferredLanguage && (
                              <p className="mt-1 text-sm text-primary">{errors.preferredLanguage.message}</p>
                          )}
                      </div>

                      <div>
                          <label className="block text-sm font-medium mb-2">{formData.form.foundUs}</label>
                          <select
                              {...register("foundUs")}
                              className="w-full px-4 py-2 rounded-lg bg-white/50 border border-white/20 focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                              <option value="">{formData.form.selectFoundUs}</option>
                              <option value="social">{formData.form.foundUsOptions.social}</option>
                              <option value="recommendation">{formData.form.foundUsOptions.recommendation}</option>
                              <option value="google">{formData.form.foundUsOptions.google}</option>
                              <option value="other">{formData.form.foundUsOptions.other}</option>
                          </select>
                      </div>

                      <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full btn-brutal ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                          {isSubmitting ? formData.form.sending : formData.form.submit}
                      </button>

                      {submitStatus === 'success' && (
                          <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
                              {formData.form.success}
                          </div>
                      )}

                      {submitStatus === 'error' && (
                          <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
                              {formData.form.error}
                          </div>
                      )}
                  </form>
              </div>
          </motion.div>
      </div></>
  );
}