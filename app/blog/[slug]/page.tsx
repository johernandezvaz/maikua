import { Metadata } from "next";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Tag, Share2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = {
  "go-python-rust-backend": {
    title: "¿Go, Python o Rust para el Backend? Descubre cuál es el mejor para tu proyecto",
    content: `
      # ¿Go, Python o Rust para el Backend?

      En Maikua, siempre estamos explorando las mejores tecnologías para ofrecer soluciones innovadoras y eficientes. Cuando se trata de elegir el lenguaje de programación adecuado para el backend de una aplicación, Go, Python, y Rust son opciones populares, cada una con sus propias ventajas.

      ## Comparación de Go, Python y Rust

      ### Go
      - Alta performance gracias a su compilación rápida
      - Excelente para microservicios
      - Sintaxis simple y minimalista
      - Gran soporte para concurrencia

      ### Python
      - Muy fácil de aprender y usar
      - Amplia biblioteca de paquetes
      - Excelente para prototipado rápido
      - Gran comunidad de desarrollo

      ### Rust
      - Rendimiento excepcional
      - Seguridad de memoria garantizada
      - Excelente para sistemas de bajo nivel
      - Curva de aprendizaje pronunciada

      ## Conclusión

      La elección entre Go, Python y Rust depende de las necesidades específicas de tu proyecto. Si buscas simplicidad y velocidad en el desarrollo, Python es una opción excelente. Si tu prioridad es el rendimiento y la escalabilidad, Go es una gran elección. Por otro lado, si trabajas en sistemas críticos donde la seguridad y el control del hardware son primordiales, Rust será tu mejor aliado.
    `,
    image_url: "/images/blog/backend-comparison.jpg",
    category: "Desarrollo",
    tags: ["Backend", "Go", "Python", "Rust"],
    created_at: "2024-02-01"
  },
  "monai-ai-medica": {
    title: "MONAI: El Futuro del Desarrollo en Inteligencia Artificial Médica",
    content: `
      # MONAI: El Futuro del Desarrollo en Inteligencia Artificial Médica

      MONAI (Medical Open Network for AI) es una herramienta revolucionaria desarrollada por NVIDIA y la comunidad de investigación médica, diseñada para facilitar el desarrollo de modelos de inteligencia artificial aplicados a la medicina.

      ## ¿Qué posibilidades ofrece MONAI?

      ### Análisis avanzado de imágenes médicas
      MONAI se utiliza para desarrollar modelos que analizan imágenes médicas de manera precisa. Esto incluye tareas como la segmentación de órganos, la detección de anomalías y la reconstrucción de imágenes en 3D.

      ### Optimización del diagnóstico
      Los modelos creados con MONAI pueden ayudar a los profesionales de la salud a diagnosticar enfermedades de forma más rápida y precisa, apoyándolos con herramientas basadas en inteligencia artificial.

      ## Conclusión

      MONAI está revolucionando el campo de la inteligencia artificial aplicada a la salud, permitiendo desarrollar soluciones innovadoras que beneficien tanto a los pacientes como a los profesionales médicos.
    `,
    image_url: "/images/blog/monai-ai.jpg",
    category: "Inteligencia Artificial",
    tags: ["MONAI", "IA", "Medicina", "InnovacionMedica"],
    created_at: "2024-01-15"
  },
  "raspberry-pi-vs-plc": {
    title: "¿Pueden las Raspberry Pi reemplazar a los PLC en la industria?",
    content: `
      # ¿Pueden las Raspberry Pi reemplazar a los PLC en la industria?

      En el mundo de la automatización industrial, surge frecuentemente la pregunta sobre si las Raspberry Pi pueden ser una alternativa viable a los PLC tradicionales.

      ## Ventajas de usar una Raspberry Pi

      ### Costo accesible
      Una Raspberry Pi cuesta una fracción de lo que vale un PLC industrial, lo que la convierte en una excelente opción para proyectos con presupuestos ajustados.

      ### Flexibilidad para programar
      Puedes desarrollar soluciones personalizadas en lenguajes como Python, C++ o Java. Además, cuenta con una amplia comunidad que comparte librerías y recursos.

      ## Limitaciones de la Raspberry Pi

      ### Fiabilidad limitada
      No están diseñadas para ambientes industriales extremos (temperatura, polvo, vibraciones) y pueden fallar ante interrupciones eléctricas.

      ### Sin certificaciones industriales
      Carecen de certificaciones como la IEC 61131-3, esenciales para cumplir con los estándares de seguridad y operación en la industria.

      ## Conclusión

      Si bien las Raspberry Pi son herramientas versátiles y modernas, no reemplazan completamente la robustez y fiabilidad de un PLC en entornos industriales críticos. Sin embargo, pueden ser una excelente alternativa para proyectos específicos que no demanden las exigencias de un PLC.
    `,
    image_url: "/images/blog/raspberry-plc.jpg",
    category: "IoT",
    tags: ["RaspberryPi", "PLC", "Automatización", "IoT"],
    created_at: "2024-01-01"
  }
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts];
  
  if (!post) {
    return {
      title: 'Artículo no encontrado - Maikua',
    };
  }

  return {
    title: `${post.title} - Maikua`,
    description: post.content.split('\n')[2].trim(),
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-cream py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary">Artículo no encontrado</h1>
          <Link 
            href="/#blog"
            className="inline-flex items-center mt-8 text-accent hover:text-accent-hover"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const months = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <div className="min-h-screen bg-cream py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <article className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-2xl border border-white/20 backdrop-blur-xl"
        >
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm bg-primary text-white rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-sm text-text/60">
                <Clock className="h-4 w-4 mr-2" />
                {formatDate(post.created_at)}
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
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

            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <Image
                src={post.image_url}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                const Tag = `h${level}` as keyof JSX.IntrinsicElements;
                return <Tag key={index} className="text-primary">{text}</Tag>;
              }
              if (paragraph.startsWith('-')) {
                return <li key={index}>{paragraph.slice(2)}</li>;
              }
              if (paragraph.startsWith('###')) {
                return <h3 key={index} className="text-accent">{paragraph.slice(4)}</h3>;
              }
              return paragraph.trim() && <p key={index}>{paragraph}</p>;
            })}
          </div>

          {/* Footer */}
          <footer className="mt-12 pt-8 border-t border-white/10">
            <div className="flex justify-between items-center">
              <Link 
                href="/#blog"
                className="inline-flex items-center text-text hover:text-primary transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al blog
              </Link>

              <button
                onClick={() => {
                  navigator.share({
                    title: post.title,
                    text: post.title,
                    url: window.location.href,
                  });
                }}
                className="inline-flex items-center text-text hover:text-primary transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Compartir
              </button>
            </div>
          </footer>
        </motion.div>
      </article>
    </div>
  );
}