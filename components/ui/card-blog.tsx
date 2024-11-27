import Image from "next/image";
import Link from "next/link";

interface CardBlogProps {
  title: string;
  image: string;
  category: string;
  href: string;
  ago: string;
}

const CardBlog = ({ title, image, category, href, ago }: CardBlogProps) => {
  return (
    <Link
      href={href}
      className="group flex flex-col md:flex-row md:items-center gap-6 mb-10 lg:mb-0"
    >
      <div className="relative w-56 h-40 rounded-xl lg:mb-10 overflow-hidden">
        <Image
          src={image}
          fill
          alt="Image"
          className="rounded-xl object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="space-y-2">
        <p className="text-gray-500 text-sm uppercase font-semibold tracking-widest">
          {category}
        </p>
        <h3 className="text-white text-2xl group-hover:text-primary">
          {title}
        </h3>
        <p className="   text-gray-500 text-sm uppercase font-semibold tracking-widest">
          {ago}
        </p>
      </div>
    </Link>
  );
};

export default CardBlog;
