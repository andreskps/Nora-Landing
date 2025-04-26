import Link from "next/link";
import Image from "next/image";
import { ScrollSection } from "@/components/ScrollSection";

export default function QA() {
  const questions = [
    {
      id: 1,
      question: "¿Qué es NORA?",
      answer: "Una proptech que usa IA para hacer más fácil comprar, arrendar o vender propiedades."
    },
    {
      id: 2,
      question: "¿Cómo funciona?",
      answer: "Todo el proceso lo hacés por WhatsApp, llamada o en nuestra plataforma, 24/7 y gratis*."
    },
    {
      id: 3,
      question: "¿Puedo anunciar mi propiedad?",
      answer: "Sí, podés subirla gratis y, si querés, dejar que NORA gestione todo* por una comisión accesible."
    },
    {
      id: 4,
      question: "¿Qué es el Proyecto N?",
      answer: "Una red de mujeres locales que acompañan las visitas en la búsqueda de tu hogar."
    },
    {
      id: 5,
      question: "¿Cuánto cuesta usar NORA?",
      answer: "Buscar y cerrar contrato es gratis para arrendatarios y compradores.*"
    },
    {
      id: 6,
      question: "¿Funciona fuera de horario?",
      answer: "Sí, nuestra IA está activa 24/7 para ayudarte siempre."
    },
    {
      id: 7,
      question: "¿Dónde está disponible NORA?",
      answer: "Estaremos en las principales ciudades de Colombia y creciendo rápido."
    },
    {
      id: 8,
      question: "¿Qué hace diferente a NORA?",
      answer: "Te acompañamos en todo el proceso con IA y personas reales."
    },
    {
      id: 9,
      question: "¿Funciona fuera de horario?",
      answer: "Sí, nuestra IA está activa 24/7 para ayudarte siempre."
    },
    {
      id: 10,
      question: "¿Cómo accedo a NORA antes del lanzamiento?",
      answer: "Registrate en nuestro sitio para ser parte de la versión beta."
    },
  ];

  return (
    <main className="min-h-screen text-white">
      {/* Header */}
      <ScrollSection backgroundColor="#2c2c2c" className="pt-20 pb-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/images/logo.png"
                alt="Logo de NORA"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Preguntas Frecuentes
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Encontrá las respuestas a tus dudas sobre NORA y cómo podemos ayudarte en tu proceso inmobiliario
            </p>
          </div>
        </div>
      </ScrollSection>

      {/* Content */}
      <ScrollSection backgroundColor="#1a1a1a" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {questions.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-[#2c2c2c] rounded-xl shadow-md p-6 transition-all hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-start gap-3">
                    <span className="flex-shrink-0 flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-8 h-8 text-sm font-bold">
                      {item.id}
                    </span>
                    <span className="text-[#20c9ca]">{item.question}</span>
                  </h3>
                  <p className="text-gray-300 pl-11">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-sm text-gray-400 pl-4">
              * Aplican términos y condiciones.
            </div>

            {/* Return to home button */}
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-[#20c9ca] hover:bg-[#1baeae] text-black font-medium rounded-md transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="w-full bg-[#222222] text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center text-gray-400 text-sm">
            © 2025 NORA. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
