import { CounterSection } from "@/components/CounterSection";
import { HeroSection } from "@/components/HeroSection";
import { SuscriptionSection } from "../components/SuscriptionSection";
import { AnimatedFeatureRow } from "@/components/AnimatedFeatureRow";
import { ScrollSection } from "@/components/ScrollSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white flex flex-col">
      <ScrollSection backgroundColor="#2c2c2c" className="flex-1">
        <HeroSection />
      </ScrollSection>
      
      <ScrollSection backgroundColor="#f8f7f2" className="w-full">
        <CounterSection />
      </ScrollSection>
      
      <ScrollSection backgroundColor="#1a1a1a" className="w-full">
        <SuscriptionSection />
      </ScrollSection>

      <ScrollSection
        backgroundColor="003a1c"
        id="features"
        className="relative py-16"
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl p-10 font-bold mb-12 text-left text-white">
            ¿QUÉ HACE NORA?
          </h2>
        </div>

        <AnimatedFeatureRow
          features={[
            {
              text: "Una agente inmobiliaria... para asesorarte con inteligencia artificial",
              color: "bg-orange-400",
            },
            {
              text: "Explora tu primera hogar con nosotros en casa",
              color: "bg-yellow-300",
            },
            {
              text: "Inmueble seguro",
              color: "bg-white",
            },
          ]}
          direction="right"
          speed={1}
          className="mb-12"
        />

        <AnimatedFeatureRow
          features={[
            {
              text: "Asesora a propietarios vendedores, compradores con inteligencia artificial",
              color: "bg-green-600",
            },
            {
              text: "Una agente inmobiliaria... para asesorarte con inteligencia artificial",
              color: "bg-white",
            },
            {
              text: "Explora tu primera hogar con nosotros en casa",
              color: "bg-orange-400",
            },
          ]}
          direction="left"
          speed={1}
          className="mb-20"
        />
      </ScrollSection>


      <footer className="w-full bg-[#222222] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Logo Column */}
            <div>
              <div className="text-2xl italic font-light mb-6">Logo</div>
            </div>

            {/* Column One */}
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Propiedades</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Casas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Apartamentos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Oficinas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Locales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terrenos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Proyectos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column Two */}
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Comprar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Vender
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Alquilar
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Invertir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Asesoría
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Financiación
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column Three */}
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Nosotros</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Quiénes Somos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Misión y Visión
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Tecnología
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column Four */}
            <div>
              <h3 className="font-medium text-gray-300 mb-4">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Teléfono
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Email
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Oficinas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Soporte
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Trabaja con nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 NORA. Todos los derechos reservados.</div>

            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Configuración de Cookies
              </Link>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
           
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
