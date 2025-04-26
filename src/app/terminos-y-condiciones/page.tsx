import Link from "next/link";
import Image from "next/image";
import { ScrollSection } from "@/components/ScrollSection";

export default function TerminosCondiciones() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-white bg-clip-text ">
              Términos y Condiciones
            </h1>
          </div>
        </div>
      </ScrollSection>

      {/* Content */}
      <ScrollSection backgroundColor="#1a1a1a" className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-[#2c2c2c] rounded-xl shadow-xl p-6 md:p-10">
            <div className="prose prose-invert max-w-none">
              {/* Introducción */}
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4 text-[#20c9ca]">
                  Términos y condiciones de uso de la landing de NORA
                </h2>
                <p className="text-gray-300 mb-4">
                  Primero te agradecemos por confiar en NORA,
                </p>
                <p className="text-gray-300 mb-4">
                  NORA es una proptech que utiliza inteligencia artificial para integrar todos los aspectos 
                  del proceso inmobiliario en una experiencia fluida, disponible a través de múltiples canales 
                  (WhatsApp, plataforma web, llamadas)
                </p>
                <p className="text-gray-300 mb-4">
                  Este documento regula todas las interacciones con nuestras funcionalidades y/o servicios. 
                  Acá siguen los términos y condiciones, al utilizar nuestras funcionalidades y/o servicios 
                  aceptas cumplir con estos términos y condiciones, por ello te recomendamos leerlos a detalle.
                </p>
                <p className="text-gray-300">
                  La totalidad de los servicios de NORA se encontrarán disponibles en su sitio oficial 
                  en la fecha prevista para su despliegue.
                </p>
              </div>

              {/* Sección 1 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    1
                  </span>
                  CONDICIONES GENERALES
                </h3>
                <h4 className="text-lg font-medium mb-2 text-white">ACEPTACIÓN</h4>
                <p className="text-gray-300 mb-4">
                  Al registrarte y/o utilizar nuestros servicios de NORA, acepta estos términos y condiciones 
                  de uso en su totalidad, son aplicables a los usuarios que utilicen los servicios ofrecidos 
                  por NORA a través de esta plataforma, así como el uso de los softwares integrantes, 
                  aplicaciones, funcionalidades, extensiones, interfaces y sucesivas versiones.
                </p>
                <p className="text-gray-300 mb-4">
                  Estos términos y condiciones son un contrato aplicable entre los usuarios de NORA y NORA, 
                  y delimitan las formas de uso de los servicios de NORA ofrecidos en esta plataforma. 
                  Toda persona que desee acceder o usar la plataforma o los servicios ofertados en esta 
                  puede hacerlo sujetándose a los términos y condiciones, políticas, principios y normativa 
                  aplicable en la jurisdicción correspondiente a cada usuario.
                </p>
                <p className="text-gray-300 mb-4">
                  El uso de la plataforma implica que, como usuario, usted acepta y se obliga a cumplir con 
                  nuestros términos y condiciones de uso, que ha leído este documento de forma cuidadosa y que 
                  usará nuestros servicios, o solicitará su prestación sujetándose a lo indicado en nuestros 
                  términos y condiciones y que su no aceptación implica que no debe usar esta plataforma y debe 
                  adquirir los servicios de ofrecidos por NORA.
                </p>
                <p className="text-gray-300">
                  Además, como usuario, declara conocer, comprender y aceptar su responsabilidad ante el 
                  cumplimiento de la normativa que puede aplicarse a NORA, una plataforma proptech, en 
                  particular, la normativa colombiana que regula la propiedad, uso, goce, disposición y 
                  disfrute de bienes inmuebles dentro de territorio nacional.
                </p>
              </div>

              {/* Sección 2 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    2
                  </span>
                  FUNCIONALIDAD
                </h3>
                <p className="text-gray-300">
                  NORA es una proptech que usa herramientas de inteligencia artificial con diferentes 
                  funcionalidades con el objetivo de agilizar el proceso inmobiliario y facilitar que 
                  el usuario realice búsqueda, adquisición, arriendo o anuncio de bienes inmuebles 
                  mediante un flujo de conversaciones en la plataforma, en extensiones de mensajería 
                  instantánea o por llamada.
                </p>
              </div>

              {/* Sección 3 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    3
                  </span>
                  PLATAFORMA, EXTENSIÓN Y APLICATIVO
                </h3>
                <p className="text-gray-300">
                  NORA podrá operar de manera autónoma mediante sus propios apps o conectado a extensiones 
                  o apps con software de terceros. En caso de operar en el ecosistema tecnológico de 
                  terceros, los usuarios conocen y consienten que la totalidad de información, datos, 
                  ciertas funciones o actividades, estarán también reguladas por los términos y condiciones 
                  de estas terceras partes que el usuario deberá aceptar. En este caso, NORA no es responsable 
                  directa ni indirectamente por decisiones, términos, características, limitaciones tecnológicas, 
                  u otras variables que resuelva o sucedan en las terceras partes e impacte en los servicios, 
                  funcionalidades o datos de NORA o los usuarios.
                </p>
              </div>

              {/* Sección 4 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    4
                  </span>
                  REGISTRO
                </h3>
                <h4 className="text-lg font-medium mb-2 text-white">Acceso</h4>
                <p className="text-gray-300">
                  Los usuarios deben contar con la mayoría de edad, para completar el proceso de registro 
                  y consientan estos términos, así como la política de privacidad. El usuario garantiza que 
                  los datos que provee son veraces y exactos, así como que se obliga a notificar de manera 
                  inmediata las modificaciones sustanciales en su registro que podrían influir en los procesos 
                  que requieran esta información, por lo que, el usuario se obliga a notificar de manera 
                  inmediata toda modificación en sus datos.
                </p>
              </div>

              {/* Sección 5 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    5
                  </span>
                  CONTENIDO Y DATOS DEL USUARIO
                </h3>
                <p className="text-gray-300">
                  La totalidad de datos y contenido que sean introducidos por el usuario a NORA podrán 
                  ser utilizados por ésta a efectos de prestar sus servicios y funcionalidades. También 
                  se podrán tratar con el fin de analizar el comportamiento del usuario individualmente 
                  considerado o como parte de un grupo, así como analizarlos con la finalidad de obtener 
                  información relevante para la mejora del software, los servicios, las funcionalidades, 
                  las prestaciones al usuario y las capacidades de NORA u otros servicios o softwares 
                  propiedad de NORA.
                </p>
              </div>

              {/* Sección 6 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    6
                  </span>
                  COMUNICACIÓN DE DATOS
                </h3>
                <p className="text-gray-300">
                  El usuario consiente que, a efectos de cumplir con lo determinado en la cláusula anterior, 
                  NORA queda expresamente autorizado a tratar los datos y a comunicarlos a proveedores o 
                  partners, con la misma finalidad a la establecida en la cláusula anterior y estos términos, 
                  siempre que cuente con referidos proveedores o partners acuerdo contractuales que garanticen 
                  la seguridad y reserva de los datos y contenidos. los contenidos y datos sean personales o no, 
                  podrán ser tratados en los estados unidos de américa.
                </p>
              </div>

              {/* Sección 7 */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    7
                  </span>
                  NOTIFICACIONES
                </h3>
                <p className="text-gray-300">
                  El usuario constituye domicilio a efectos de toda notificación en el correo electrónico 
                  o número de whatsapp que establezca en el momento de registro, aceptando los medios y 
                  documento electrónico, como forma fehaciente de comunicación al referido domicilio. 
                  Adicionalmente, establece como forma auténtica y fehaciente de notificación cualquier 
                  mecanismo informático mediante el cual el usuario de manera expresa consienta o 
                  manifieste haber recepcionado la notificación.
                </p>
                <p className="text-gray-300">
                  Toda notificación que se desee hacer a NORA deberá ser realizada a contacto@noraagent.com. 
                  La notificación se reputará realizada a los siete (7) días hábiles desde la constancia de 
                  envío a los correos referenciados.
                </p>
              </div>

              {/* Sección 8 */}
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#20c9ca] flex items-center gap-2">
                  <span className="flex items-center justify-center bg-[#20c9ca] text-black rounded-full w-7 h-7 text-sm font-bold">
                    8
                  </span>
                  RECLAMOS, CONTROVERSIAS Y ARBITRAJE
                </h3>
                <p className="text-gray-300 mb-4">
                  Las diferencias o reclamos con relación a NORA y/o sus términos y condiciones, 
                  sus servicios o funcionalidades, que sea que surjan antes o después del periodo 
                  de vigencia de estos términos y condiciones se someten a la presente cláusula.
                </p>
                <p className="text-gray-300 mb-4">
                  Previo al inicio de un reclamo, usted, como usuario, y NORA se comprometen a intentar 
                  resolver los reclamos planteados, ambas partes reconocen que este es un requisito 
                  fundamental e indispensable para proceder con el arbitraje, y que la vulneración de 
                  este requisito implicaría la vulneración material de los términos y condiciones.
                </p>
                <p className="text-gray-300">
                  Las controversias que no puedan ser resueltas de forma directa entre las partes se 
                  resolverán por un tribunal arbitral del Centro de Arbitraje y Conciliación de la 
                  Cámara de Comercio de y estará regido por la normativa nacional colombiana.
                </p>
              </div>
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
