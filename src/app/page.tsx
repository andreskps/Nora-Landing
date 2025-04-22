import { CounterSection } from "@/components/CounterSection";
import { HeroSection } from "@/components/HeroSection";
import { SuscriptionSection } from "../components/SuscriptionSection";
import { AnimatedFeatureRow } from "@/components/AnimatedFeatureRow";
import { ScrollSection } from "@/components/ScrollSection";
import Link from "next/link";
import Image from "next/image";

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
        backgroundColor="#2c2c2c"
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

        <div className="flex justify-center my-12">
          <div className="relative h-[600px] w-full max-w-6xl px-4 sm:px-8">
            <div className="flex justify-center items-center h-full relative">
              {/* Left phone */}
              <div className="hidden md:block absolute left-4 lg:left-24 top-1/2 -translate-y-1/2 w-[250px] h-[500px] bg-white rounded-[32px] shadow-lg overflow-hidden transform -rotate-6 transition-all duration-500 hover:-rotate-3 hover:scale-105">
                <div className="h-full w-full bg-gray- flex flex-col">
                  {/* Status bar */}
                  <div className="bg-[#20c9ca] text-white p-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <span className="text-[#20c9ca] font-bold">N</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Nora</div>
                      <div className="text-xs opacity-90">
                        Asistente inmobiliario
                      </div>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="flex-1 p-4 relative overflow-y-auto">
                    <div className="max-w-[75%] ml-auto mb-4 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        Quiero comprar una casa
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:32
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto text-gray-800 mb-4 bg-white border border-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <p className="text-gray-800">
                        ¡Hola! Soy Nora, tu asistente inmobiliario. ¿En qué zona
                        estás buscando?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">14:32</p>
                    </div>

                    <div className="max-w-[75%] ml-auto mb-4 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        Zona Norte, cerca del parque
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:33
                      </p>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="border-t border-gray-200 p-3 bg-white flex items-center">
                    <input
                      type="text"
                      placeholder="Mensaje..."
                      className="bg-gray-100 rounded-full px-4 py-2 text-sm flex-1"
                    />
                    <button className="ml-2 w-10 h-10 rounded-full bg-[#20c9ca] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="m3 3 3 9-3 9 19-9Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Center phone (larger) */}
              <div className="w-[280px] sm:w-[320px] h-[580px] bg-white rounded-[36px] shadow-xl overflow-hidden z-20 transform transition-all duration-500 hover:scale-105 border border-gray-100">
                <div className="h-full w-full bg-gray-50 flex flex-col">
                  {/* Status bar with notch */}
                  <div className="bg-[#20c9ca] text-white p-4 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/4 h-7 bg-black rounded-b-xl"></div>
                    <div className="flex items-center mt-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <span className="text-[#20c9ca] font-bold">N</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-medium">Nora</div>
                        <div className="text-xs opacity-90">
                          Asistente inmobiliario
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="flex-1 p-4 relative overflow-y-auto">
                    <div className="max-w-[75%] ml-auto mb-6 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        Quiero arrendar un apartamento
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:30
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto mb-6 bg-white border border-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <p className="text-gray-800">
                        ¡Hola! Soy Nora. ¿Cuál es tu presupuesto mensual?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">14:30</p>
                    </div>

                    <div className="max-w-[75%] ml-auto mb-6 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        Máximo $1,500 al mes
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:31
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto mb-6 bg-white border border-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <p className="text-gray-800">
                        ¡Perfecto! Tengo varias opciones para ti. ¿Cuántas
                        habitaciones necesitas?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">14:31</p>
                    </div>

                    <div className="max-w-[75%] ml-auto mb-6 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        2 habitaciones
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:32
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto bg-white border border-gray-100 px-6 py-4 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-[#20c9ca] rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-[#20c9ca] rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-[#20c9ca] rounded-full animate-pulse delay-200"></div>
                      </div>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="border-t border-gray-200 p-3 bg-white flex items-center">
                    <input
                      type="text"
                      placeholder="Mensaje..."
                      className="bg-gray-100 rounded-full px-4 py-2 text-sm flex-1"
                    />
                    <button className="ml-2 w-10 h-10 rounded-full bg-[#20c9ca] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="m3 3 3 9-3 9 19-9Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right phone */}
              <div className="hidden md:block absolute right-4 lg:right-24 top-1/2 -translate-y-1/2 w-[250px] h-[500px] bg-white rounded-[32px] shadow-lg overflow-hidden transform rotate-6 transition-all duration-500 hover:rotate-3 hover:scale-105">
                <div className="h-full w-full bg-gray-50 flex flex-col">
                  {/* Status bar */}
                  <div className="bg-[#20c9ca] text-white p-4 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                      <span className="text-[#20c9ca] font-bold">N</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">Nora</div>
                      <div className="text-xs opacity-90">
                        Asistente inmobiliario
                      </div>
                    </div>
                  </div>

                  {/* Chat area */}
                  <div className="flex-1 p-4 relative overflow-y-auto">
                    <div className="max-w-[75%] ml-auto mb-4 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">
                        Quiero vender mi casa
                      </p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:35
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto mb-4 bg-white border border-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <p className="text-gray-800">
                        ¡Hola! Soy Nora. ¿Dónde está ubicada tu propiedad?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">14:35</p>
                    </div>

                    <div className="max-w-[75%] ml-auto mb-4 bg-[#e1f8f8] text-gray-800 px-4 py-3 rounded-t-2xl rounded-bl-2xl shadow-sm">
                      <p className="font-medium text-gray-800">En Polanco</p>
                      <p className="text-xs text-gray-500 mt-1 text-right">
                        14:36
                      </p>
                    </div>

                    <div className="max-w-[75%] mr-auto bg-white border border-gray-100 px-4 py-3 rounded-t-2xl rounded-br-2xl shadow-sm">
                      <p className="text-gray-800">
                        ¿Cuántos metros cuadrados tiene la propiedad?
                      </p>
                      <p className="text-xs text-gray-500 mt-1">14:36</p>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="border-t border-gray-200 p-3 bg-white flex items-center">
                    <input
                      type="text"
                      placeholder="Mensaje..."
                      className="bg-gray-100 rounded-full px-4 py-2 text-sm flex-1"
                    />
                    <button className="ml-2 w-10 h-10 rounded-full bg-[#20c9ca] flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      >
                        <path d="m3 3 3 9-3 9 19-9Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollSection>

      <footer className="w-full bg-[#222222] text-white py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Footer Grid - más responsivo con mejor distribución en móviles */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {/* Logo Column */}
            <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1 mb-6 md:mb-0">
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Logo de NORA"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              {/* <p className="text-gray-400 text-sm pr-4 mb-4 md:mb-0">
                Nora: El asistente inmobiliario inteligente que te ayuda a encontrar el hogar perfecto.
              </p> */}
            </div>

            {/* Links Columns - reorganizados para mejor vista en móvil */}
            <div className="col-span-1">
              <h3 className="font-medium text-gray-300 text-base mb-3">Propiedades</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Casas</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Apartamentos</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Oficinas</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Locales</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-medium text-gray-300 text-base mb-3">Servicios</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Comprar</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Vender</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Alquilar</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Invertir</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-medium text-gray-300 text-base mb-3">Nosotros</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Quiénes Somos</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Misión y Visión</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Equipo</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tecnología</Link></li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="font-medium text-gray-300 text-base mb-3">Contacto</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Teléfono</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Email</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Oficinas</Link></li>
              </ul>
            </div>
          </div>

          {/* Redes sociales - visible en todas las pantallas */}
          <div className="flex justify-center mt-8 md:mt-10 mb-4 md:mb-6">
            <div className="flex space-x-6">
              <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#20c9ca]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-[#20c9ca]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.29.629 1.846 1.185.56.56.938 1.176 1.186 1.844.246.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.219 1.791-.465 2.427a4.902 4.902 0 01-1.186 1.846c-.56.56-1.17.938-1.846 1.186-.636.246-1.363.416-2.427.465-1.06.048-1.37.06-4.123.06-2.752 0-3.063-.012-4.123-.06-1.064-.049-1.791-.219-2.427-.465a4.902 4.902 0 01-1.846-1.186 4.902 4.902 0 01-1.186-1.846c-.246-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.219-1.791.465-2.427a4.902 4.902 0 011.186-1.846A4.902 4.902 0 015.45 2.525c.636-.246 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#20c9ca]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#20c9ca]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Footer - reorganizado para móviles */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-xs md:text-sm mb-4 md:mb-0 text-center md:text-left">
                © 2025 NORA. Todos los derechos reservados.
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-y-2 gap-x-4 md:gap-x-6 text-xs text-gray-400">
                <Link href="#" className="hover:text-[#20c9ca] transition-colors whitespace-nowrap">
                  Política de Privacidad
                </Link>
                <Link href="#" className="hover:text-[#20c9ca] transition-colors whitespace-nowrap">
                  Términos de Servicio
                </Link>
                <Link href="#" className="hover:text-[#20c9ca] transition-colors whitespace-nowrap">
                  Configuración de Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
