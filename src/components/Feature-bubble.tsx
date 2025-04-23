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
    <div
      className={`bg-[#20c9ca] rounded-full px-4 py-2 text-center shadow-md text-sm font-medium text-gray-800 w-64 h-14 flex items-center justify-center`}
    >
      <p className="line-clamp-2">{text}</p>
    </div>
  );
}
