"use client"
import Image from 'next/image'
import React, { useState } from 'react';
import { SubscriptionModal } from './SubscriptionModal';

export const SuscriptionSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="w-full bg-gray-200 py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Property Card 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <Image
                src="/images/p1.png"
                alt="Property 1"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                Venta
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Casa moderna
              </h3>
              <p className="text-gray-800 font-bold">$250,000</p>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full bg-[#20c9ca] hover:bg-[#1ab9ba] text-black py-2 rounded transition-colors cursor-pointer">
                Ver detalles
              </button>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="relative">
              <Image
                src="/images/p2.png"
                alt="Property 2"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                Venta
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Apartamento
              </h3>
              <p className="text-gray-800 font-bold">$180,000</p>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full bg-[#20c9ca] hover:bg-[#1ab9ba] text-black py-2 rounded transition-colors cursor-pointer">
                Ver detalles
              </button>
            </div>
          </div>

          {/* Property Card 3 - Oculto en móviles */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hidden md:block">
            <div className="relative">
              <Image
                src="/images/p3.png"
                alt="Property 3"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                Venta
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">Condominio</h3>
              <p className="text-gray-800 font-bold">$320,000</p>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full bg-[#20c9ca] hover:bg-[#1ab9ba] text-black py-2 rounded transition-colors cursor-pointer">
                Ver detalles
              </button>
            </div>
          </div>

          {/* Property Card 4 - Oculto en móviles */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hidden md:block">
            <div className="relative">
              <Image
                src="/images/p4.png"
                alt="Property 4"
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                Venta
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-black">
                Casa de lujo
              </h3>
              <p className="text-gray-800 font-bold">$500,000</p>
            </div>
            <div className="px-4 pb-4">
              <button className="w-full bg-[#20c9ca] hover:bg-[#1ab9ba] text-black py-2 rounded transition-colors cursor-pointer">
                Ver detalles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/50 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-2xl p-8 max-w-md w-full mx-4">
          <div className="text-center text-white">
            <h2 className="text-2xl font-light tracking-wide uppercase mb-3">
              Se parte y entérate todo
            </h2>
            <div className="w-16 h-1 bg-[#20c9ca] mx-auto mb-4"></div>
            <p className="text-white/80 mb-6">
              Sobre NORA, el nuevo proyecto inmobiliario que cambiará tu forma de vivir.
            </p>
            <div className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 mb-4">
              <button
                className="bg-[#20c9ca] hover:bg-[#1ab9ba] text-black px-6 py-2 rounded-md font-medium transition-all hover:shadow-lg cursor-pointer"
                onClick={handleModalToggle}
              >
                Suscríbete
              </button>
            </div>
            <p className="text-xs text-white/60 mt-4">
              Al suscribirte aceptas recibir noticias sobre NORA
            </p>
          </div>
        </div>
      </div>

      {/* Modal Componente */}
      <SubscriptionModal isOpen={isModalOpen} onClose={handleModalToggle} />
    </section>
  );
};
