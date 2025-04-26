"use client"
import Image from "next/image";
import React, { useState } from "react";
import { RegisterModal } from "./RegisterModal";

export const HeroSection = () => {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const handleRegisterModalToggle = () => {
    setIsRegisterModalOpen(!isRegisterModalOpen);
  };

  return (
    <section
      className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-6 flex-1 h-screen overflow-hidden"
    >
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
        <div className="mb-2">
          <Image 
            src="/images/logo.png" 
            alt="Logo NORA" 
            width={150} 
            height={150} 
            className="object-contain"
          />
        </div>
        <h2 className="text-2xl font-semibold text-[#f5f5dc] uppercase">
          ENCUENTRA TU HOGAR
        </h2>
        <p className="text-gray-300 max-w-md">
          Te acompaña de inicio a fin, busca tu hogar desde WhatsApp o por
          llamada, rápido, 24/7 y gratis*.
        </p>
        <div className="pt-4">
          <button
            className="bg-[#20c9ca] hover:bg-[#1ab9ba] text-black px-6 py-2 rounded-md font-medium transition-colors cursor-pointer"
            onClick={handleRegisterModalToggle}
          >
            Registrarte
          </button>
        </div>
      </div>

      {/* Right Content - Phone Illustration */}
      <div className="md:w-1/2 mt-5 md:mt-0 flex justify-center items-center">
        <div className="relative w-auto h-auto max-w-2xl ">
          <Image
            src="/images/hero-phone.png"
            alt="Phone with chat conversation"
            width={500}
            height={725}
            className="object-contain "
            priority
          />
        </div>
      </div>

      {/* Register Modal Component */}
      <RegisterModal 
        isOpen={isRegisterModalOpen} 
        onClose={handleRegisterModalToggle} 
      />
    </section>
  );
};
