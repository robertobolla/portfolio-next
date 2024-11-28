import Image from "next/image";
import Link from "next/link";
import Badge from "./badge";
import StackMedia from "./stack-media";
import { IconType } from "react-icons";

interface CardFeaturedWorkProps {
  title: string;
  subtitle: string;
  href: string;
  image: string;
  TechStack: { icon: IconType; label: string }[];
}

const CardFeaturedWork = ({
  href,
  title,
  subtitle,
  image,
  TechStack,
}: CardFeaturedWorkProps) => {
  return (
    <Link href={href} className=" group">
      <div className="relative w-full h-72 overflow-hidden rounded-xl mb-5">
        <Image
          fill
          src={image}
          alt="escale-webs-proyect"
          className="object-cover rounded-xl group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <Badge label={subtitle} />
      <h3 className="text-xl text-white  group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <div className="flex gap-x-3 mt-4">
        {TechStack.map((tech, index) => (
          <StackMedia label={tech.label} key={index} icon={tech.icon} />
        ))}
      </div>
    </Link>
  );
};

export default CardFeaturedWork;
