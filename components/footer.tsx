import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/white-logo.png"
                alt="Maikua Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold">Maikua</span>
            </div>
            <p className="text-gray-400">
              Fusionamos tecnología innovadora con un compromiso profundo hacia la investigación
              y el desarrollo de soluciones digitales.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61570268176249"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/maikua.iot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:contacto@maikua.com.mx" className="text-gray-400 hover:text-white transition-colors">
                  contacto@maikua.com.mx
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+526143977741" className="text-gray-400 hover:text-white transition-colors">
                  +52 614 397 77 41
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">Chihuahua, Chihuahua</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400  hover:text-white transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Maikua. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}