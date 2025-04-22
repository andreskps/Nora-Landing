interface FeatureBubbleProps {
  text: string;
  color: string;
  className?: string;
}

export function FeatureBubble({
  text,
  color,
  className = "",
}: FeatureBubbleProps) {
  return (
    // <div className={`${color} rounded-full px-4 py-2 text-center shadow-md text-sm font-medium ${className}`}>
    //   <p>{text}</p>
    // </div>

    <div
      className={`bg-[#20c9ca] rounded-full px-4 py-2 text-center shadow-md text-sm font-medium text-gray-800`}
    >
      <p>{text}</p>
    </div>
  );
}
