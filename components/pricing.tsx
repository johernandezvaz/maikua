"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type CategoryType = 'web' | 'mobile' | 'ai';

const pricingData = {
  title: "Our Pricing",
  subtitle: "Transparent and accessible solutions for your business",
  categories: {
    web: { title: "Web Development" },
    mobile: { title: "Mobile Development" },
    ai: { title: "AI Development" }
  },
  plans: {
    web: [
      {
        name: "Landing Page",
        price: "$520",
        duration: "2 weeks development",
        features: [
          "Custom design",
          "Responsive design",
          "SEO optimization",
          "Contact form",
          "Social media integration",
          "Analytics"
        ]
      },
      {
        name: "Website",
        price: "$1,731",
        duration: "3-4 weeks development",
        features: [
          "All Landing Page features",
          "Multiple pages",
          "Admin panel",
          "Integrated blog",
          "Newsletter",
          "Technical support"
        ]
      },
      {
        name: "Ecommerce",
        price: "$2,037",
        duration: "3-4 weeks development",
        features: [
          "All Website features",
          "Product catalog",
          "Shopping cart",
          "Payment gateway",
          "Inventory management",
          "Sales reports"
        ]
      }
    ],
    mobile: [
      {
        name: "Basic App",
        price: "$2,037 - $3,056",
        duration: "2-3 weeks development",
        features: [
          "Intuitive design",
          "Basic features",
          "User authentication",
          "Local storage",
          "Push notifications",
          "Technical support"
        ]
      },
      {
        name: "Intermediate App",
        price: "$4,074 - $5,094",
        duration: "4-6 weeks development",
        features: [
          "All Basic App features",
          "API integration",
          "Maps and geolocation",
          "Data analytics",
          "Offline mode",
          "Admin panel"
        ]
      },
      {
        name: "Complex App",
        price: "$6,113 - $7,638",
        duration: "6-8 weeks development",
        features: [
          "All Intermediate App features",
          "Advanced features",
          "IoT integration",
          "Real-time analytics",
          "Enterprise scalability",
          "Priority support"
        ]
      }
    ],
    ai: [
      {
        name: "Basic AI",
        price: "$2,547 - $3,566",
        duration: "2-3 weeks development",
        features: [
          "Basic data analysis",
          "Simple predictive models",
          "Basic automation",
          "API integration",
          "Basic reporting",
          "Technical support"
        ]
      },
      {
        name: "Intermediate AI",
        price: "$5,094 - $7,638",
        duration: "4-6 weeks development",
        features: [
          "Advanced analytics",
          "Machine Learning",
          "Language processing",
          "Computer vision",
          "Custom dashboard",
          "Priority support"
        ]
      },
      {
        name: "Advanced AI",
        price: "$10,188 - $15,282",
        duration: "8-12 weeks development",
        features: [
          "Deep Learning",
          "Complex neural networks",
          "Real-time processing",
          "IoT integration",
          "Enterprise scalability",
          "Specialized consulting"
        ]
      }
    ]
  },
  customNote: "Need a custom solution? Contact us!",
  contactTitle: "Prices above your budget?",
  contactDescription: "We understand that each project is unique. Contact us to discuss your budget and find a solution that fits your needs."
};
export function Pricing() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('web');

  const categories: CategoryType[] = ['web', 'mobile', 'ai'];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
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
            {pricingData.title}
          </h2>
          <p className="text-xl text-text/80 max-w-3xl mx-auto">
            {pricingData.subtitle}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-white/50 backdrop-blur-sm shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-md'
                    : 'text-text hover:text-primary'
                }`}
              >
                {pricingData.categories[category].title}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingData.plans[activeCategory].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border-2 border-white/20 transition-all duration-300 hover:border-primary/50"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-text/60 ml-2">USD</span>
                  </div>
                  <p className="text-sm text-text/60">{plan.duration}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                 

                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-text/60">Starting from {plan.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-xl text-center max-w-3xl mx-auto mt-16"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center justify-center mb-4">
                  <HelpCircle className="h-8 w-8 text-primary" />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{pricingData.customNote}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <h3 className="text-2xl font-bold mb-4">{pricingData.contactTitle}</h3>
          <p className="text-text/80">
            {pricingData.contactDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}