"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

const testimonialsData = {
  es: [
    {
      name: "Sapphirus",
      type: "E-commerce de productos americanos",
      logo: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
      content: "En Sapphirus sabíamos que era momento de dar el siguiente paso y digitalizarnos, pero no teníamos conocimientos claros sobre cómo iniciar. Fue entonces cuando conocimos a Maikua, y desde el primer contacto supimos que estábamos en buenas manos. Su equipo nos brindó un asesoramiento constante, claro y cercano. Durante todo el proceso de construcción de nuestro sitio web, la comunicación fue impecable. Supieron escuchar nuestras necesidades, guiarnos con paciencia y proponer soluciones que realmente se ajustaban a nuestra marca. Gracias a ellos, hoy contamos con un e-commerce funcional y profesional que permitirá a nuestros clientes comprar directamente desde la comodidad de su hogar, sin necesidad de visitar la tienda física. Este avance representa un gran beneficio para nuestro negocio y una nueva forma de conectar con quienes nos eligen. Estamos totalmente agradecidos con Maikua por acompañarnos en este proceso de transformación digital. Sin duda, su compromiso y experiencia marcaron la diferencia",
      link: "https://sapphirus.com.mx/"
    },
    {
      name: "Ase-Ca-Lab",
      type: "Laboratorio de Pruebas Mecánicas",
      logo: "/clients/ASE-CA LAB-02.png",
      content: "Cuando comenzamos con Maikua, nuestro laboratorio de pruebas mecánicas, Ase-Ca-Lab, apenas estaba arrancando. Necesitábamos un sitio web que no solo reflejara nuestra profesionalidad, sino que también ayudara a atraer clientes. Maikua entendió nuestras necesidades desde el principio y nos ofreció una solución a medida. Gracias a su excepcional trabajo, nuestro sitio web ha sido una puerta de entrada para nuevos clientes, permitiéndonos crecer más rápido de lo que esperábamos. Hoy en día, muchos de nuestros clientes nos encuentran y nos contactan directamente a través de la web que Maikua creó. No podríamos estar más agradecidos.",
      link: "https://www.asecalab.com.mx"
    },
    {
      name: "Noubeau",
      type: "Agencia de Marketing y Desarrollo",
      logo: "/clients/noubeau_logo.png",
      content: "Como empresa emergente, Noubeau enfrentaba el desafío de no contar con el equipo ni la infraestructura necesarios para desarrollar nuestro sitio web. Buscábamos una solución que nos permitiera iniciar sin complicaciones y dentro de nuestro presupuesto. Maikua fue la respuesta perfecta. Nos ofrecieron cotizaciones personalizadas y un diseño que se ajustaba a nuestras necesidades específicas. Gracias a ellos, nuestro sitio web no solo es funcional, sino que también transmite la esencia de nuestra marca. El apoyo de Maikua hizo posible que nuestro sueño se convirtiera en realidad.",
      link: "https://www.noubeau.com"
    },
    {
      name: "La Fabrica de Sabores",
      type: "Repostería",
      logo: "/clients/fabrica_sabores_logo.jpg",
      content: "En La Fábrica de Sabores, gestionar nuestros gastos, pedidos y ganancias con hojas de Excel se estaba volviendo cada vez más ineficiente, especialmente porque no siempre podíamos acceder a la información desde nuestros celulares. Necesitábamos una solución más práctica y ágil. Fue entonces cuando recurrimos a Maikua para desarrollar una aplicación móvil a medida. El resultado superó nuestras expectativas. La aplicación no solo es fácil de usar, sino que también permite a todos nuestros empleados acceder a la información en tiempo real. Esto ha mejorado significativamente nuestra organización y eficiencia. Estamos encantados con el servicio y el profesionalismo de Maikua."
    }
  ],
  en: [
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
  ],
  fr: [
    {
      name: "Sapphirus",
      type: "Commerce électronique de produits américains",
      logo: "/clients/400440972_122102821490108415_2965658771073295181_n.jpg",
      content: "Chez Sapphirus, nous savions qu'il était temps de franchir une nouvelle étape et de passer au numérique, mais nous ne savions pas vraiment comment nous y prendre. C'est alors que nous avons rencontré Maikua et, dès le premier contact, nous avons su que nous étions entre de bonnes mains. Leur équipe nous a prodigué des conseils cohérents, clairs et conviviaux. Tout au long du processus de création de notre site web, la communication a été irréprochable. Ils ont été à l'écoute de nos besoins, nous ont guidés avec patience et nous ont proposé des solutions parfaitement adaptées à notre marque. Grâce à eux, nous disposons aujourd'hui d'une plateforme e-commerce fonctionnelle et professionnelle qui permettra à nos clients d'acheter directement depuis chez eux, sans avoir à se déplacer en magasin. Cette avancée représente un atout majeur pour notre entreprise et une nouvelle façon d'interagir avec ceux qui nous choisissent. Nous sommes extrêmement reconnaissants à Maikua de nous avoir accompagnés dans cette transformation numérique. Leur engagement et leur expérience ont incontestablement fait la différence.",
      link: "https://sapphirus.com.mx/"
    },
    {
      name: "Ase-Ca-Lab",
      type: "Laboratoire d'Essais Mécaniques",
      logo: "/clients/ASE-CA LAB-02.png",
      content: "Lorsque nous avons commencé avec Maikua, notre laboratoire d'essais mécaniques, Ase-Ca-Lab, démarrait à peine. Nous avions besoin d'un site web qui reflète non seulement notre professionnalisme mais qui aide également à attirer des clients. Maikua a compris nos besoins dès le début et nous a proposé une solution sur mesure. Grâce à leur travail exceptionnel, notre site web est devenu une porte d'entrée pour de nouveaux clients, nous permettant de croître plus rapidement que prévu. Aujourd'hui, de nombreux clients nous trouvent et nous contactent directement via le site web créé par Maikua. Nous ne pourrions pas être plus reconnaissants.",
      link: "https://www.asecalab.com.mx"
    },
    {
      name: "Noubeau",
      type: "Agence de Marketing et Développement",
      logo: "/clients/noubeau_logo.png",
      content: "En tant que startup, Noubeau faisait face au défi de ne pas avoir l'équipe ou l'infrastructure nécessaire pour développer notre site web. Nous cherchions une solution qui nous permettrait de démarrer sans complications et dans notre budget. Maikua était la réponse parfaite. Ils nous ont proposé des devis personnalisés et un design qui correspondait à nos besoins spécifiques. Grâce à eux, notre site web est non seulement fonctionnel mais transmet aussi l'essence de notre marque. Le soutien de Maikua a rendu possible la réalisation de notre rêve.",
      link: "https://www.noubeau.com"
    },
    {
      name: "La Fabrica de Sabores",
      type: "Pâtisserie",
      logo: "/clients/fabrica_sabores_logo.jpg",
      content: "Chez La Fábrica de Sabores, la gestion de nos dépenses, commandes et profits avec des feuilles Excel devenait de plus en plus inefficace, d'autant plus que nous ne pouvions pas toujours accéder aux informations depuis nos téléphones. Nous avions besoin d'une solution plus pratique et agile. C'est alors que nous nous sommes tournés vers Maikua pour développer une application mobile sur mesure. Le résultat a dépassé nos attentes. L'application est non seulement facile à utiliser mais permet également à tous nos employés d'accéder aux informations en temps réel. Cela a considérablement amélioré notre organisation et notre efficacité. Nous sommes ravis du service et du professionnalisme de Maikua."
    }
  ]
};

export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const testimonials = testimonialsData[language];

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
            {t.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                  {t.viewProject}
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