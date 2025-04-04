"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { translations, NavKeys } from "@/lib/i18n/translations";

const navItems: Array<{ href: string; label: NavKeys }> = [
  { href: "#inicio", label: "inicio" },
  { href: "#about", label: "nosotros" },
  { href: "#services", label: "servicios" },
  { href: "#research", label: "investigacion" },
  { href: "#projects", label: "proyectos" },
  { href: "#contacto", label: "contacto" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleClick("#inicio")}
            className="flex items-center space-x-2"
          >
            <Image
              src={isScrolled ? "/maikua_logo.png" : "/white_logo.png"}
              alt="Maikua Logo"
              width={40}
              height={40}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-text hover:text-accent"
                    : "text-cream hover:text-accent"
                }`}
              >
                {translations[language].nav[item.label]}
              </button>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={`flex items-center space-x-1 ${
                  isScrolled
                    ? "text-text hover:text-accent"
                    : "text-cream hover:text-accent"
                }`}
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 py-2 w-24 glass rounded-lg shadow-lg"
                  >
                    {['es', 'en', 'fr'].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang as 'es' | 'en' | 'fr');
                          setIsLangMenuOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-sm text-text hover:text-accent transition-colors ${
                          language === lang ? 'text-accent' : ''
                        }`}
                      >
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isOpen ? (
              <X className={isScrolled ? "text-text" : "text-cream"} />
            ) : (
              <Menu className={isScrolled ? "text-text" : "text-cream"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleClick(item.href)}
                  className="block w-full text-left text-text hover:text-accent transition-colors"
                >
                  {translations[language].nav[item.label]}
                </button>
              ))}

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex space-x-4">
                  {['es', 'en', 'fr'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang as 'es' | 'en' | 'fr');
                        setIsOpen(false);
                      }}
                      className={`px-3 py-1 rounded-full text-sm ${
                        language === lang
                          ? 'bg-accent text-white'
                          : 'text-text hover:text-accent'
                      }`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}