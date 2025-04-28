import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      }, 6000);
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
            <p className="text-[#20c9ca] font-medium text-xl mb-3">¡Listo!</p>
            <p className="text-gray-300 mb-4">Gracias por registrarte. Seleccionaremos algunos usuarios beta y te notificaremos si eres uno de ellos.</p>
            
            {/* Social media links */}
            <div className="mb-6">
              <p className="text-gray-300 mb-3">Síguenos</p>
              <div className="flex justify-center space-x-6">
                <Link href="https://www.facebook.com/profile.php?id=61574810702930" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#20c9ca]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.instagram.com/nora.prop/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#20c9ca]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465.668.25 1.29.629 1.846 1.185.56.56.938 1.176 1.186 1.844.246.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.219 1.791-.465 2.427a4.902 4.902 0 01-1.186 1.846c-.56.56-1.17.938-1.846 1.186-.636.246-1.363.416-2.427.465-1.06.048-1.37.06-4.123.06-2.752 0-3.063-.012-4.123-.06-1.064-.049-1.791-.219-2.427-.465a4.902 4.902 0 01-1.846-1.186 4.902 4.902 0 01-1.186-1.846c-.246-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.219-1.791.465-2.427a4.902 4.902 0 011.186-1.846A4.902 4.902 0 015.45 2.525c.636-.246 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="https://www.linkedin.com/company/noraagent/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#20c9ca]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
            
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