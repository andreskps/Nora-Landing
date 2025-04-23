"use client";
import React, { useEffect, useState } from "react";

export const CounterSection = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Fecha objetivo: 2 de junio de 2025 a las 9:30 a.m.
    const targetDate = new Date("June 2, 2025 09:30:00").getTime();

    const updateCountdown = () => {
      // Fecha actual
      const now = new Date().getTime();
      
      // Diferencia entre la fecha objetivo y la actual
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }
      
      // Cálculos para obtener días, horas, minutos y segundos
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);
    };

    // Actualizar inmediatamente
    updateCountdown();
    
    // Actualizar cada segundo
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-[#f8f7f2] text-black py-8 md:py-16 h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-xl sm:max-w-2xl md:max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase mb-4">
          Tu futuro hogar está aquí
        </h2>
        <p className="text-md sm:text-lg mb-8">Regístrate y vive esta experiencia en:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          <div className="bg-[#0a0e17] w-full h-20 sm:h-24 flex flex-col items-center justify-center rounded-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{days}</div>
            <div className="text-[#20c9ca] text-xs sm:text-sm">Días</div>
          </div>
          <div className="bg-[#0a0e17] w-full h-20 sm:h-24 flex flex-col items-center justify-center rounded-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{hours}</div>
            <div className="text-[#20c9ca] text-xs sm:text-sm">Horas</div>
          </div>
          <div className="bg-[#0a0e17] w-full h-20 sm:h-24 flex flex-col items-center justify-center rounded-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{minutes}</div>
            <div className="text-[#20c9ca] text-xs sm:text-sm">Minutos</div>
          </div>
          <div className="bg-[#0a0e17] w-full h-20 sm:h-24 flex flex-col items-center justify-center rounded-md">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">{seconds}</div>
            <div className="text-[#20c9ca] text-xs sm:text-sm">Segundos</div>
          </div>
        </div>
      </div>
    </section>
  );
};