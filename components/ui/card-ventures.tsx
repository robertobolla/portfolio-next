import { cn } from "@/libs/utils";
import Image from "next/image";

interface CardVenturesProps {
  name: string;
  image: string;
  description: string;
  href: string;
  className?: string;
}

const CardVentures = ({
  name,
  image,
  description,
  href,
  className,
}: CardVenturesProps) => {
  return (
    <a href={href} target="_blank" className="block group">
      <div className={cn("relative w-14 h-14 rounded-xl mb-5", className)}>
        <Image
          src={image}
          fill
          alt="frames"
          className="rounded-xl object-cover"
        />
      </div>
      <h3 className="text-white text-2xl group-hover:text-primary">{name}</h3>
      <p className="text-gray-500">{description}</p>
    </a>
  );
};

export default CardVentures;
