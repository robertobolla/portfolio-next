import Container from "@/components/ui/container";
import Subtitle from "@/components/ui/subtitle";
import Image from "next/image";

interface SectionTheProjectProps {
  project: string;
  title1: string;
  description1: string;
  title2: string;
  listLibraries: string[];

  image1: {
    src: string;
    alt: string;
  };
  image2: {
    src: string;
    alt: string;
  };
  image3: {
    src: string;
    alt: string;
  };
}

const SectionTheProject = ({ data }: { data?: SectionTheProjectProps }) => {
  if (!data) {
    return null; // O muestra un valor predeterminado si `data` no está definido
  }
  const {
    project,
    title1,
    description1,
    title2,
    listLibraries,
    image1,
    image2,
    image3,
  } = data;
  return (
    <section
      id="sectionTheProject"
      className="border-b border-gray-500/30 py-10"
    >
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-10">
          <Subtitle subtitle={project} className="mb-10" />
          <ul className="space-y-8 ">
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium mb-2">{title1}</h4>
              <p className="text-sm text-gray-500 ">{description1}</p>
            </li>
            <li className="max-w-2xl">
              <h4 className="text-xl text-white font-medium mb-2">{title2}</h4>
              <ul className="space-y-3 my-8 ml-7 text-sm text-gray-500">
                {listLibraries.map((item, index) => (
                  <li
                    key={index}
                    className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="relative w-full h-72 sm:h-[500px] lg:h-[700px] mb-10">
          <Image
            src={image1.src}
            alt={image1.alt}
            fill
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          <div className="relative w-full h-72 sm:h-[500px] lg:h-[600px] rounded-xl">
            <Image
              src={image2.src}
              alt={image2.alt}
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <div className="relative w-full h-72 sm:h-[500px] lg:h-[600px] rounded-xl">
            <Image
              src={image3.src}
              alt={image3.alt}
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionTheProject;
