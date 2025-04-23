import React from 'react'
import { AnimatedFeatureRow } from './AnimatedFeatureRow'

export const FeaturesSection = () => {
  return (
    <section className='h-screen flex flex-col justify-between'>
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl p-5 font-bold mb-5 text-left text-white">
          ¿QUÉ HACE NORA?
        </h2>
      </div>

      <div className="flex-1">
        <AnimatedFeatureRow
          features={[
            {
              text: "Busca propiedades según tus criterios",
              color: "bg-orange-400",
            },
            {
              text: "Filtra opciones en segundos",
              color: "bg-yellow-300",
            },
            {
              text: "Muestra fotos y videos reales",
              color: "bg-white",
            },
            {
              text: "Envía recorridos virtuales",
              color: "bg-green-600",
            },
            {
              text: "Responde dudas al instante",
              color: "bg-orange-400",
            },
            {
              text: "Te avisa si aparece una nueva propiedad ideal",
              color: "bg-yellow-300",
            },
            {
              text: "Comparte ubicación y referencias",
              color: "bg-white",
            },
            {
              text: "Agenda visitas sin demoras",
              color: "bg-green-600",
            },
            {
              text: "Te recuerda cada cita",
              color: "bg-orange-400",
            },
          ]}
          direction="right"
          speed={7}
          className="mb-12"
        />

        <AnimatedFeatureRow
          features={[
            {
              text: "Reprograma si algo cambia",
              color: "bg-green-600",
            },
            {
              text: "Confirma detalles con el dueño",
              color: "bg-white",
            },
            {
              text: "Envía direcciones listas para abrir en el mapa",
              color: "bg-orange-400",
            },
            {
              text: "Te da tips antes de cada visita",
              color: "bg-yellow-300",
            },
            {
              text: "Te consigue varias opciones en un solo día",
              color: "bg-green-600",
            },
            {
              text: "Hace seguimiento sin que lo pidas",
              color: "bg-white",
            },
            {
              text: "Te conecta con servicios legales si los necesitás",
              color: "bg-orange-400",
            },
            {
              text: "Se queda contigo hasta que firmás",
              color: "bg-yellow-300",
            },
          ]}
          direction="left"
          speed={8}
          className="mb-20"
        />
      </div>

      <div className="flex justify-center items-center flex-1">
        <div className="relative h-[90%] w-full max-w-6xl px-4 sm:px-8">
          <div className="flex justify-center items-center h-full relative">
            {/* Left phone */}
            <div className="hidden md:block absolute left-4 lg:left-16 top-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-white rounded-[32px] shadow-lg overflow-hidden transform -rotate-6 transition-all duration-500 hover:-rotate-3 hover:scale-105">
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
            <div className="w-[240px] sm:w-[280px] h-[500px] bg-white rounded-[36px] shadow-xl overflow-hidden z-20 transform transition-all duration-500 hover:scale-105 border border-gray-100">
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
            <div className="hidden md:block absolute right-4 lg:right-16 top-1/2 -translate-y-1/2 w-[200px] h-[400px] bg-white rounded-[32px] shadow-lg overflow-hidden transform rotate-6 transition-all duration-500 hover:rotate-3 hover:scale-105">
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
    </section>
  )
}
