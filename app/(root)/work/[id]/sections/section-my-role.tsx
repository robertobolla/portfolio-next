import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

interface SectionMyRoleProps {
  role: string;
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  image: {
    src: string;
    alt: string;
  };
}

const SectionMyRole = ({ data }: { data?: SectionMyRoleProps }) => {
  if (!data) {
    return null; // O muestra un valor predeterminado si `data` no está definido
  }
  const { role, title1, description1, title2, description2, image } = data;
  return (
    <section id="sectionMyRole" className="border-b border-gray-500/30 py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-10">
          <Subtitle subtitle={role} className="my-0" />
          <ul className="space-y-8 ">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium mb-2">{title1}</h4>
              <p className="text-sm text-gray-500 ">{description1}</p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium mb-2">{title2}</h4>
              <p className="text-sm text-gray-500 ">{description2}</p>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-72 sm:h-[500px] lg:h-[700px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionMyRole;
