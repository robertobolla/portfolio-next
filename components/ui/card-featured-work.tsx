import Image from "next/image";
import Link from "next/link";

interface CardFeaturedWorkProps {
  title: string;
  subtitle: string;
  href: string;
  image: string;
}

const CardFeaturedWork = ({
  href,
  title,
  subtitle,
  image,
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
      <h5 className="text-gray-500 uppercase tracking-widest font-medium group-hover:text-primary transition-colors duration-300">
        {subtitle}
      </h5>
      <h3 className="text-xl text-white">{title}</h3>
    </Link>
  );
};

export default CardFeaturedWork;
