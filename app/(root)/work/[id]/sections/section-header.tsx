"use client";
import Title from "@/components/ui/title";
import Button from "@/components/ui/button";
import Image from "next/image";
import Container from "@/components/ui/container";
import { RiGithubLine } from "react-icons/ri";

interface SectionHeaderProps {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  listItems: string[];
  image: {
    src: string;
    alt: string;
  };
  gitHubLink?: {
    url: string; // URL de la página externa
    label: string; // Texto opcional para accesibilidad
  };
}

const SectionHeader = ({ data }: { data?: SectionHeaderProps }) => {
  if (!data) {
    return null; // O muestra un valor predeterminado si `data` no está definido
  }
  const { title, description, button, listItems, image, gitHubLink } = data;

  return (
    <section id="sectionHeader" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title={title} className="mb-5 mt-10" />
        <p>{description} </p>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-8">
          <div className="flex gap-3">
            <Button
              label={button.label}
              type="button"
              onClick={() => {
                window.open(button.url, "_blank");
              }}
              className="w-auto"
            />
            {gitHubLink && (
              <div
                className="w-12 h-12 flex items-center justify-center border border-gray-500/30
      rounded-lg text-gray-500 hover:text-primary transition-colors duration-300
      hover:bg-gray-500/10 cursor-pointer "
                onClick={() => window.open(gitHubLink.url, "_blank")}
                title={gitHubLink.label || "Open github link"}
              >
                <RiGithubLine size={40} />
              </div>
            )}
          </div>
          <ul className="space-y-3 my-8 ml-7">
            {listItems.map((item, index) => (
              <li
                key={index}
                className="relative before:absolute before:w-2 before:h-2 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative w-full h-72 sm:h-[500px] lg:h-[700px]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className=" rounded-xl object-cover"
          />
        </div>
      </Container>
    </section>
  );
};

export default SectionHeader;
