import React from 'react';
import Image from 'next/image';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Logo en la esquina superior */}
        <div className="absolute top-4 left-4">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-4 text-center">Suscríbete a NORA</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-[#20c9ca] mb-1">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-gray-900 placeholder-white"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-[#20c9ca] mb-1">
              Teléfono
            </label>
            <div className="flex">
              <select
                className="border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-white bg-black"
              >
                <option value="+57" className="text-white bg-black">+57</option>
                <option value="+1" className="text-white bg-black">+1</option>
                <option value="+34" className="text-white bg-black">+34</option>
                {/* Agregar más indicadores según sea necesario */}
              </select>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-gray-900 placeholder-white"
                placeholder="Tu teléfono"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-[#20c9ca] mb-1">
              Rol
            </label>
            <select
              id="role"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-white bg-black"
            >
              <option value="" disabled selected className="text-gray-500">
                Selecciona tu rol
              </option>
              <option value="Inversor" className="text-white bg-black">
                Inversor
              </option>
              <option value="Emprendedor" className="text-white bg-black">
                Emprendedor (founder)
              </option>
              <option value="Soporte" className="text-white bg-black">
                Soporte (Aceleradora u organización)
              </option>
              <option value="Inmobiliaria" className="text-white bg-black">
                Inmobiliaria o asesor inmobiliario
              </option>
              <option value="Constructora" className="text-white bg-black">
                Constructora
              </option>
              <option value="Propietario" className="text-white bg-black">
                Propietario
              </option>
              <option value="Administración pública" className="text-white bg-black">
                Administración pública
              </option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md cursor-pointer"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-[#20c9ca] hover:bg-[#1ab9ba] text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Suscribirse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
