interface FeatureBubbleProps {
    text: string
    color: string
    className?: string
  }
  
  export function FeatureBubble({ text, color, className = "" }: FeatureBubbleProps) {
    return (
      <div 
        className={`${color} rounded-full px-4 py-2 text-center shadow-md text-sm font-medium transition-transform hover:scale-105 ${className}`}
        style={{
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased"
        }}
      >
        <p>{text}</p>
      </div>
    )
  }
  