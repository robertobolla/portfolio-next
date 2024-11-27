import { IconType } from "react-icons";

interface ButtonSocialProps {
  icon: IconType;
  href: string;
}

export default function ButtonSocialMedia({
  icon: Icon,
  href,
}: ButtonSocialProps) {
  return (
    <a
      className="w-12 h-12 flex items-center justify-center border border-gray-500/30
      rounded-lg text-gray-500 hover:text-white transition-colors duration-300
      hover:bg-gray-500/10"
      href={href}
      target="_blank"
    >
      <Icon size={20} />
    </a>
  );
}
