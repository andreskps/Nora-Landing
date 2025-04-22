"use client";
import { useBackgroundColor } from '@/context/BackgroundColorContext';
import React, { useEffect, useRef } from 'react';

interface ScrollSectionProps {
  backgroundColor: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({ 
  backgroundColor, 
  children, 
  id,
  className = ""
}) => {
  const { setCurrentColor } = useBackgroundColor();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionElement = sectionRef.current;
    if (!sectionElement) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si la sección es visible en al menos un 50%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setCurrentColor(backgroundColor);
        }
      });
    }, {
      threshold: [0.5] // Disparar cuando al menos el 50% de la sección sea visible
    });

    observer.observe(sectionElement);

    return () => {
      if (sectionElement) observer.unobserve(sectionElement);
    };
  }, [backgroundColor, setCurrentColor]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={className}
    >
      {children}
    </section>
  );
};
