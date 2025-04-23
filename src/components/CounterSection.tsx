"use client";
import React, { useEffect, useState } from "react";

export const CounterSection = () => {
  const [days, setDays] = useState(80);
  const [hours, setHours] = useState(50);
  const [minutes, setMinutes] = useState(11);
  const [seconds, setSeconds] = useState(12);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              clearInterval(timer);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [days, hours, minutes, seconds]);

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