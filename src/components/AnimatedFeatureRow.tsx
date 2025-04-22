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
  speed = 300,
  className = "",
}: AnimatedFeatureRowProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Create a seamless infinite loop by duplicating features multiple times
  const duplicatedFeatures = [...features, ...features, ...features, ...features, ...features]

  // Calculate animation duration based on speed (lower number = faster)
  const animationDuration = duplicatedFeatures.length * speed

  useEffect(() => {
    // Reset animation when component mounts or direction changes
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running"
    }
  }, [direction])

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-4 py-2"
        style={{
          width: "fit-content",
          animation: `scroll-${direction} ${duplicatedFeatures.length * speed}s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedFeatures.map((feature, index) => (
          <div key={index} className="flex-shrink-0 max-w-xs">
            <FeatureBubble text={feature.text} color={feature.color} />
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
