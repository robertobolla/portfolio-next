import Image from "next/image";

interface CardTestimonialsProps {
  message: string;
  image: string;
  name: string;
  owner: string;
}

const CardTestimonials = ({
  message,
  image,
  name,
  owner,
}: CardTestimonialsProps) => {
  return (
    <div className="p-10 rounded-xl border border-gray-500/30">
      <p className="mb-5 font-medium text-gray-200">{message}</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full ">
          <Image
            src={image}
            alt="testimonial"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h4 className="text-white font-medium">{name}</h4>
          <h5 className="text-gray-500 uppercase font-medium tracking-widest text-sm">
            {owner}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardTestimonials;
