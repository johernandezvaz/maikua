export type NavKeys = 'inicio' | 'nosotros' | 'servicios' | 'investigacion' | 'proyectos' | 'contacto';

export const translations = {
  es: {
    nav: {
      inicio: "Inicio",
      nosotros: "Nosotros",
      servicios: "Servicios",
      investigacion: "Investigación",
      proyectos: "Proyectos",
      contacto: "Contacto"
    },
    hero: {
      title: "Maikua",
      subtitle: "Creamos soluciones digitales que impulsan tu negocio",
      description: "Desarrollamos sitios web, aplicaciones y sistemas inteligentes que transforman tu visión en realidad, combinando diseño moderno con tecnología avanzada.",
      cta: "Comienza tu proyecto"
    },
    about: {
      title: "Conócenos",
      tabs: {
        about: "Nosotros",
        vision: "Visión",
        mision: "Misión",
        valores: "Valores"
      },
      content: {
        about: {
          title: "Acerca de Nosotros",
          description: [
            "En Maikua, fusionamos tecnología innovadora con un compromiso profundo hacia la investigación y el desarrollo de soluciones digitales. Diseñamos y desarrollamos sitios web avanzados, como tiendas en línea, sistemas de gestión (ORM, ERP) y plataformas únicas, con el objetivo de empoderar a personas y empresas.",
            "Creemos en el poder de la Inteligencia Artificial para mejorar la sociedad, impulsando soluciones éticas y beneficiosas que permitan construir un futuro más justo y eficiente para todos."
          ]
        },
        vision: {
          title: "Nuestra Visión",
          description: "Ser un referente global en el desarrollo de plataformas digitales y aplicaciones de Inteligencia Artificial que contribuyan al avance social y económico, creando herramientas que sean útiles, accesibles y capaces de transformar vidas."
        },
        mision: {
          title: "Nuestra Misión",
          description: "Proveer soluciones digitales innovadoras y servicios de investigación en Inteligencia Artificial, diseñadas para resolver problemas reales y mejorar la eficiencia de las empresas. Desde el desarrollo de sitios web robustos hasta sistemas avanzados de IA, nuestro objetivo es impactar positivamente a las comunidades y fomentar un crecimiento sostenible."
        },
        valores: {
          title: "Nuestros Valores",
          items: [
            {
              title: "Innovación",
              desc: "Desarrollamos soluciones creativas que anticipan las necesidades del futuro."
            },
            {
              title: "Compromiso Social",
              desc: "Utilizamos la tecnología como una herramienta para generar un impacto positivo."
            },
            {
              title: "Transparencia",
              desc: "Actuamos con ética y claridad en todos nuestros proyectos."
            },
            {
              title: "Excelencia",
              desc: "Nos esforzamos por ofrecer la máxima calidad en cada solución."
            }
          ]
        }
      }
    },
    services: {
      title: "Nuestras Soluciones",
      categories: {
        web: {
          title: "Desarrollo Web & Móvil",
          description: "Soluciones digitales modernas y responsivas para tu presencia en línea",
          items: [
            {
              title: "Sitios Web",
              description: "Diseñamos y desarrollamos sitios web modernos, rápidos y adaptables a cualquier dispositivo."
            },
            {
              title: "Apps Móviles",
              description: "Desarrollo de aplicaciones nativas y multiplataforma para iOS y Android."
            },
            {
              title: "E-commerce",
              description: "Creamos tu tienda virtual con todas las herramientas necesarias para vender en internet."
            }
          ]
        },
        iot: {
          title: "Internet de las Cosas",
          description: "Soluciones IoT inteligentes y conectadas para la automatización y monitoreo",
          items: [
            {
              title: "Automatización",
              description: "Sistemas de automatización inteligente para hogares e industrias."
            },
            {
              title: "Monitoreo",
              description: "Sistemas de monitoreo en tiempo real para control y análisis."
            },
            {
              title: "Dispositivos Conectados",
              description: "Desarrollo de dispositivos IoT personalizados para tus necesidades."
            }
          ]
        },
        ai: {
          title: "Inteligencia Artificial",
          description: "Soluciones avanzadas de IA para optimizar y automatizar procesos",
          items: [
            {
              title: "Machine Learning",
              description: "Modelos predictivos y análisis de datos para toma de decisiones."
            },
            {
              title: "Procesamiento de Lenguaje",
              description: "Análisis de texto y procesamiento del lenguaje natural."
            },
            {
              title: "Visión Computacional",
              description: "Análisis y procesamiento de imágenes para reconocimiento y clasificación."
            }
          ]
        }
      }
    },
    research: {
      title: "Investigación en IA",
      description: "En Maikua, nos apasiona la investigación en Inteligencia Artificial. Desarrollamos proyectos innovadores que exploran las posibilidades de la IA para resolver problemas complejos y crear soluciones útiles para la sociedad.",
      areas: [
        {
          title: "Aprendizaje Automático",
          description: "Investigamos y desarrollamos modelos que aprenden de datos para hacer predicciones y tomar decisiones inteligentes."
        },
        {
          title: "Análisis Predictivo",
          description: "Utilizamos datos históricos para predecir tendencias y comportamientos futuros que ayuden en la toma de decisiones."
        },
        {
          title: "Procesamiento de Lenguaje",
          description: "Exploramos cómo las máquinas pueden entender y trabajar con el lenguaje humano de forma natural."
        },
        {
          title: "Redes Neuronales",
          description: "Investigamos sistemas que imitan el funcionamiento del cerebro para resolver problemas complejos."
        }
      ]
    },
    projects: {
      title: "Proyectos Destacados",
      filters: {
        all: "Todos",
        web: "Web",
        mobile: "Móvil",
        desktop: "Escritorio"
      },
      viewProject: "Ver proyecto"
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      viewProject: "Ver proyecto"
    },
    contact: {
      title: "Contáctanos",
      subtitle: "Estamos aquí para ayudarte. Contáctanos para discutir tus proyectos o resolver tus dudas.",
      form: {
        name: "Nombre",
        email: "Correo Electrónico",
        subject: {
          label: "Asunto",
          placeholder: "Selecciona un asunto",
          options: {
            quote: "Solicitud de Cotización",
            support: "Soporte Técnico",
            project: "Consulta sobre Proyecto",
            collaboration: "Propuesta de Colaboración",
            employment: "Oportunidades de Empleo",
            other: "Otro"
          }
        },
        message: "Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado! Te responderemos lo antes posible.",
        error: "Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente."
      },
      info: {
        email: "Correo Electrónico",
        phone: "Teléfono",
        location: "Ubicación",
        schedule: {
          title: "Horario de Atención",
          hours: "Lunes a Viernes: 9:00 AM - 6:00 PM"
        }
      }
    },
    footer: {
      navigation: {
        title: "Navegación",
        items: {
          home: "Inicio",
          services: "Servicios",
          projects: "Proyectos",
          contact: "Contacto"
        }
      },
      legal: {
        title: "Legal",
        privacy: "Política de Privacidad",
        terms: "Términos y Condiciones",
        cookies: "Política de Cookies"
      },
      copyright: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      inicio: "Home",
      nosotros: "About",
      servicios: "Services",
      investigacion: "Research",
      proyectos: "Projects",
      contacto: "Contact"
    },
    hero: {
      title: "Maikua",
      subtitle: "We create digital solutions that drive your business",
      description: "We develop websites, applications, and intelligent systems that transform your vision into reality, combining modern design with advanced technology.",
      cta: "Start your project"
    },
    about: {
      title: "About Us",
      tabs: {
        about: "About",
        vision: "Vision",
        mision: "Mission",
        valores: "Values"
      },
      content: {
        about: {
          title: "About Us",
          description: [
            "At Maikua, we merge innovative technology with a deep commitment to research and development of digital solutions. We design and develop advanced websites, such as online stores, management systems (ORM, ERP), and unique platforms, with the goal of empowering people and businesses.",
            "We believe in the power of Artificial Intelligence to improve society, driving ethical and beneficial solutions that enable building a fairer and more efficient future for all."
          ]
        },
        vision: {
          title: "Our Vision",
          description: "To be a global reference in the development of digital platforms and Artificial Intelligence applications that contribute to social and economic advancement, creating tools that are useful, accessible, and capable of transforming lives."
        },
        mision: {
          title: "Our Mission",
          description: "To provide innovative digital solutions and Artificial Intelligence research services, designed to solve real problems and improve business efficiency. From developing robust websites to advanced AI systems, our goal is to positively impact communities and foster sustainable growth."
        },
        valores: {
          title: "Our Values",
          items: [
            {
              title: "Innovation",
              desc: "We develop creative solutions that anticipate future needs."
            },
            {
              title: "Social Commitment",
              desc: "We use technology as a tool to generate positive impact."
            },
            {
              title: "Transparency",
              desc: "We act with ethics and clarity in all our projects."
            },
            {
              title: "Excellence",
              desc: "We strive to offer the highest quality in every solution."
            }
          ]
        }
      }
    },
    services: {
      title: "Our Solutions",
      categories: {
        web: {
          title: "Web & Mobile Development",
          description: "Modern and responsive digital solutions for your online presence",
          items: [
            {
              title: "Websites",
              description: "We design and develop modern, fast, and responsive websites for any device."
            },
            {
              title: "Mobile Apps",
              description: "Native and cross-platform application development for iOS and Android."
            },
            {
              title: "E-commerce",
              description: "We create your virtual store with all the necessary tools to sell online."
            }
          ]
        },
        iot: {
          title: "Internet of Things",
          description: "Smart and connected IoT solutions for automation and monitoring",
          items: [
            {
              title: "Automation",
              description: "Smart automation systems for homes and industries."
            },
            {
              title: "Monitoring",
              description: "Real-time monitoring systems for control and analysis."
            },
            {
              title: "Connected Devices",
              description: "Development of customized IoT devices for your needs."
            }
          ]
        },
        ai: {
          title: "Artificial Intelligence",
          description: "Advanced AI solutions to optimize and automate processes",
          items: [
            {
              title: "Machine Learning",
              description: "Predictive models and data analysis for decision making."
            },
            {
              title: "Language Processing",
              description: "Text analysis and natural language processing."
            },
            {
              title: "Computer Vision",
              description: "Image analysis and processing for recognition and classification."
            }
          ]
        }
      }
    },
    research: {
      title: "AI Research",
      description: "At Maikua, we are passionate about Artificial Intelligence research. We develop innovative projects that explore the possibilities of AI to solve complex problems and create useful solutions for society.",
      areas: [
        {
          title: "Machine Learning",
          description: "We research and develop models that learn from data to make predictions and intelligent decisions."
        },
        {
          title: "Predictive Analysis",
          description: "We use historical data to predict trends and future behaviors that aid in decision making."
        },
        {
          title: "Language Processing",
          description: "We explore how machines can understand and work with human language naturally."
        },
        {
          title: "Neural Networks",
          description: "We research systems that mimic brain function to solve complex problems."
        }
      ]
    },
    projects: {
      title: "Featured Projects",
      filters: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        desktop: "Desktop"
      },
      viewProject: "View project"
    },
    testimonials: {
      title: "What our clients say",
      viewProject: "View project"
    },
    contact: {
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
    },
    footer: {
      navigation: {
        title: "Navigation",
        items: {
          home: "Home",
          services: "Services",
          projects: "Projects",
          contact: "Contact"
        }
      },
      legal: {
        title: "Legal",
        privacy: "Privacy Policy",
        terms: "Terms and Conditions",
        cookies: "Cookie Policy"
      },
      copyright: "All rights reserved."
    }
  },
  fr: {
    nav: {
      inicio: "Accueil",
      nosotros: "À propos",
      servicios: "Services",
      investigacion: "Recherche",
      proyectos: "Projets",
      contacto: "Contact"
    },
    hero: {
      title: "Maikua",
      subtitle: "Nous créons des solutions numériques qui dynamisent votre entreprise",
      description: "Nous développons des sites web, des applications et des systèmes intelligents qui transforment votre vision en réalité, en combinant design moderne et technologie avancée.",
      cta: "Démarrer votre projet"
    },
    about: {
      title: "À propos de nous",
      tabs: {
        about: "À propos",
        vision: "Vision",
        mision: "Mission",
        valores: "Valeurs"
      },
      content: {
        about: {
          title: "À propos de nous",
          description: [
            "Chez Maikua, nous fusionnons la technologie innovante avec un engagement profond envers la recherche et le développement de solutions numériques. Nous concevons et développons des sites web avancés, tels que des boutiques en ligne, des systèmes de gestion (ORM, ERP) et des plateformes uniques, dans le but d'autonomiser les personnes et les entreprises.",
            "Nous croyons au pouvoir de l'Intelligence Artificielle pour améliorer la société, en favorisant des solutions éthiques et bénéfiques qui permettent de construire un avenir plus juste et plus efficace pour tous."
          ]
        },
        vision: {
          title: "Notre Vision",
          description: "Être une référence mondiale dans le développement de plateformes numériques et d'applications d'Intelligence Artificielle qui contribuent au progrès social et économique, en créant des outils utiles, accessibles et capables de transformer des vies."
        },
        mision: {
          title: "Notre Mission",
          description: "Fournir des solutions numériques innovantes et des services de recherche en Intelligence Artificielle, conçus pour résoudre des problèmes réels et améliorer l'efficacité des entreprises. Du développement de sites web robustes aux systèmes d'IA avancés, notre objectif est d'avoir un impact positif sur les communautés et de favoriser une croissance durable."
        },
        valores: {
          title: "Nos Valeurs",
          items: [
            {
              title: "Innovation",
              desc: "Nous développons des solutions créatives qui anticipent les besoins futurs."
            },
            {
              title: "Engagement Social",
              desc: "Nous utilisons la technologie comme un outil pour générer un impact positif."
            },
            {
              title: "Transparence",
              desc: "Nous agissons avec éthique et clarté dans tous nos projets."
            },
            {
              title: "Excellence",
              desc: "Nous nous efforçons d'offrir la plus haute qualité dans chaque solution."
            }
          ]
        }
      }
    },
    services: {
      title: "Nos Solutions",
      categories: {
        web: {
          title: "Développement Web & Mobile",
          description: "Solutions numériques modernes et responsives pour votre présence en ligne",
          items: [
            {
              title: "Sites Web",
              description: "Nous concevons et développons des sites web modernes, rapides et adaptables à tous les appareils."
            },
            {
              title: "Applications Mobiles",
              description: "Développement d'applications natives et multiplateformes pour iOS et Android."
            },
            {
              title: "E-commerce",
              description: "Nous créons votre boutique virtuelle avec tous les outils nécessaires pour vendre en ligne."
            }
          ]
        },
        iot: {
          title: "Internet des Objets",
          description: "Solutions IoT intelligentes et connectées pour l'automatisation et la surveillance",
          items: [
            {
              title: "Automatisation",
              description: "Systèmes d'automatisation intelligente pour les maisons et les industries."
            },
            {
              title: "Surveillance",
              description: "Systèmes de surveillance en temps réel pour le contrôle et l'analyse."
            },
            {
              title: "Appareils Connectés",
              description: "Développement d'appareils IoT personnalisés pour vos besoins."
            }
          ]
        },
        ai: {
          title: "Intelligence Artificielle",
          description: "Solutions IA avancées pour optimiser et automatiser les processus",
          items: [
            {
              title: "Machine Learning",
              description: "Modèles prédictifs et analyse de données pour la prise de décision."
            },
            {
              title: "Traitement du Langage",
              description: "Analyse de texte et traitement du langage naturel."
            },
            {
              title: "Vision par Ordinateur",
              description: "Analyse et traitement d'images pour la reconnaissance et la classification."
            }
          ]
        }
      }
    },
    research: {
      title: "Recherche en IA",
      description: "Chez Maikua, nous sommes passionnés par la recherche en Intelligence Artificielle. Nous développons des projets innovants qui explorent les possibilités de l'IA pour résoudre des problèmes complexes et créer des solutions utiles pour la société.",
      areas: [
        {
          title: "Apprentissage Automatique",
          description: "Nous recherchons et développons des modèles qui apprennent des données pour faire des prédictions et des décisions intelligentes."
        },
        {
          title: "Analyse Prédictive",
          description: "Nous utilisons des données historiques pour prédire les tendances et les comportements futurs qui aident à la prise de décision."
        },
        {
          title: "Traitement du Langage",
          description: "Nous explorons comment les machines peuvent comprendre et travailler avec le langage humain naturellement."
        },
        {
          title: "Réseaux Neuronaux",
          description: "Nous recherchons des systèmes qui imitent le fonctionnement du cerveau pour résoudre des problèmes complexes."
        }
      ]
    },
    projects: {
      title: "Projets Phares",
      filters: {
        all: "Tous",
        web: "Web",
        mobile: "Mobile",
        desktop: "Bureau"
      },
      viewProject: "Voir le projet"
    },
    testimonials: {
      title: "Ce que disent nos clients",
      viewProject: "Voir le projet"
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Nous sommes là pour vous aider. Contactez-nous pour discuter de vos projets ou résoudre vos doutes.",
      form: {
        name: "Nom",
        email: "Email",
        subject: {
          label: "Sujet",
          placeholder: "Sélectionnez un sujet",
          options: {
            quote: "Demande de Devis",
            support: "Support Technique",
            project: "Renseignement sur Projet",
            collaboration: "Proposition de Collaboration",
            employment: "Opportunités d'Emploi",
            other: "Autre"
          }
        },
        message: "Message",
        submit: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé ! Nous vous répondrons dès que possible.",
        error: "Il y a eu un problème lors de l'envoi de votre message. Veuillez réessayer."
      },
      info: {
        email: "Email",
        phone: "Téléphone",
        location: "Emplacement",
        schedule: {
          title: "Heures d'Ouverture",
          hours: "Lundi à Vendredi : 9h00 - 18h00"
        }
      }
    },
    footer: {
      navigation: {
        title: "Navigation",
        items: {
          home: "Accueil",
          services: "Services",
          projects: "Projets",
          contact: "Contact"
        }
      },
      legal: {
        title: "Légal",
        privacy: "Politique de Confidentialité",
        terms: "Conditions Générales",
        cookies: "Politique de Cookies"
      },
      copyright: "Tous droits réservés."
    }
  }
} as const;