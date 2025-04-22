"use client"

import { useEffect, useRef, useState } from "react"
import { FeatureBubble } from "./Feature-bubble"

interface Feature {
  text: string
  color: string
}

interface AnimatedFeatureRowProps {
  features: Feature[]
  direction?: "left" | "right" 
  speed?: number
  className?: string
}

export function AnimatedFeatureRow({
  features,
  direction = "right",
  speed = 35000,
  className = "",
}: AnimatedFeatureRowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [rowWidth, setRowWidth] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null)

  // Duplicar features suficientemente para asegurar un ciclo continuo
  const duplicatedFeatures = [...features, ...features, ...features]

  // Efecto para medir el ancho real del contenido y ajustar la animación
  useEffect(() => {
    if (rowRef.current) {
      setRowWidth(rowRef.current.offsetWidth)
    }
  }, [features])

  // Cálculo extremadamente rápido de la duración de animación
  const animationDuration = Math.max(1, rowWidth / speed)

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="relative whitespace-nowrap"
        style={{
          width: "100%",
        }}
      >
        {/* Primera fila de features */}
        <div
          ref={rowRef}
          className="inline-flex gap-4 py-2"
          style={{
            animationName: `scroll-${direction}`,
            animationDuration: `${animationDuration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0">
              <FeatureBubble text={feature.text} color={feature.color} />
            </div>
          ))}
        </div>

        {/* Segunda fila idéntica para crear efecto continuo */}
        <div
          className="inline-flex gap-4 py-2"
          style={{
            animationName: `scroll-${direction}`,
            animationDuration: `${animationDuration}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationPlayState: isHovered ? "paused" : "running",
            transform: direction === "left" ? `translateX(${rowWidth}px)` : `translateX(-${rowWidth}px)`,
          }}
        >
          {duplicatedFeatures.map((feature, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0">
              <FeatureBubble text={feature.text} color={feature.color} />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  )
}
