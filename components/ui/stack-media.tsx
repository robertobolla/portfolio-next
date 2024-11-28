import { IconType } from "react-icons";

interface StackMediaProps {
  icon: IconType;
  label: string;
}

export default function StackMedia({ icon: Icon, label }: StackMediaProps) {
  return (
    <div
      className="w-12 h-12 flex items-center justify-center border border-gray-500/30
      rounded-lg text-gray-500 hover:text-white transition-colors duration-300
      hover:bg-gray-500/10"
      aria-label={label}
    >
      <Icon size={20} />
    </div>
  );
}
