import { cn } from "@/libs/utils";
import { IconType } from "react-icons";

interface ButtonIconProps {
  icon: IconType;
  className?: string;
  onClick: () => void;
}

const ButtonIcon = ({ icon: Icon, className, onClick }: ButtonIconProps) => {
  return (
    <button type="button" className={cn("", className)} onClick={onClick}>
      <Icon size={24} />
    </button>
  );
};

export default ButtonIcon;
