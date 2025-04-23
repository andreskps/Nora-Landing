import React, { useState } from 'react';
import Image from 'next/image';
import "/node_modules/flag-icons/css/flag-icons.min.css";

// Mapa de códigos telefónicos a códigos de país (ISO 3166-1 alpha-2)
const countryCodeMap: Record<string, string> = {
  '+57': 'co', // Colombia
  '+51': 'pe', // Perú
  '+52': 'mx', // México
  '+591': 'bo', // Bolivia
};

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    phoneCode: '+57',
  });
  
  // Estados para manejar la experiencia de usuario
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showPhoneDropdown, setShowPhoneDropdown] = useState(false);

  if (!isOpen) return null;

  // Manejar cambios en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Enviar datos al backend
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al registrarse');
      }

      // Limpiar el formulario después de un registro exitoso
      setFormData({
        name: '',
        phone: '',
        phoneCode: '+57',
      });
      
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 3000);
    } catch (err) {
      setError("Error al registrarse. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Obtener el país actual para mostrar la bandera
  const getCurrentCountryCode = (phoneCode: string) => {
    return countryCodeMap[phoneCode] || 'co';
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50">
      {success ? (
        <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-md relative border border-[#20c9ca]/30">
          <div className="text-center py-4">
            <p className="text-[#20c9ca] font-medium text-xl mb-3">¡Registro exitoso!</p>
            <p className="text-gray-300 mb-4">Gracias por registrarte, nos pondremos en contacto contigo pronto.</p>
            <button
              onClick={() => {
                onClose();
                setSuccess(false);
              }}
              className="bg-[#20c9ca] hover:bg-[#1ab9ba] text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-md relative border border-[#20c9ca]/30">
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
          <h3 className="text-xl font-semibold text-white mb-4 text-center">Regístrate en NORA</h3>
          
          {/* Texto introductorio */}
          <p className="text-gray-300 text-center mb-6">
            Completa estos datos y comienza tu viaje hacia el hogar de tus sueños.
          </p>
          
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-[#20c9ca] mb-1">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-white placeholder-white"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-[#20c9ca] mb-1">
                Teléfono
              </label>
              <div className="flex relative">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowPhoneDropdown(!showPhoneDropdown)}
                    className="flex items-center space-x-2 border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-white bg-black"
                  >
                    <span className={`fi fi-${getCurrentCountryCode(formData.phoneCode)}`}></span>
                    <span>{formData.phoneCode}</span>
                  </button>
                  
                  {showPhoneDropdown && (
                    <div className="absolute top-full left-0 z-50 mt-1 w-40 bg-black border border-gray-300 rounded-md shadow-lg">
                      {Object.entries(countryCodeMap).map(([code, country]) => (
                        <button
                          key={code}
                          type="button"
                          className="flex items-center w-full px-3 py-2 text-white hover:bg-gray-700"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, phoneCode: code }));
                            setShowPhoneDropdown(false);
                          }}
                        >
                          <span className={`fi fi-${country} mr-2`}></span>
                          <span>{code}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-r-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#20c9ca] text-white placeholder-white"
                  placeholder="Tu teléfono"
                  required
                />
              </div>
            </div>
          
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md cursor-pointer"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-[#20c9ca] hover:bg-[#1ab9ba] text-white px-4 py-2 rounded-md cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Registrando...' : 'Registrarse'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};