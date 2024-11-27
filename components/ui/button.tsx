import { cn } from "@/libs/utils";

interface ButtonProps {
  label: string;
  className?: string;
  type?: "button" | "submit";
  onClick: () => void;
}

const Button = ({
  type = "button",
  label,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "py-3 px-4 border border-gray-500/30 hover:bg-gray-500/5 hover:text-primary w-full rounded-lg transition-colors duration-300 font-medium",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
