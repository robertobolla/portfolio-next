import Image from "next/image";
import perfil from "@/public/perfil.webp";
import ButtonSocialMedia from "@/components/ui/button-social-media";
import { SocialMedia } from "@/assets/data";
import Container from "@/components/ui/container";

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 py-10">
      <Container>
        <div className="space-y-8 ">
          <div className="relative w-32 h-32">
            <Image
              src={perfil}
              alt="foto de perfil"
              fill
              className="object-cover rounded-xl grayscale"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl max-w-3xl text-white mb-4">{`Hey, I'am Roberto - I'am Front-End Developer`}</h1>
            <p className="text-gray-500">
              Soy un Full Stack Developer con más de 3 años de experiencia,
              apasionado por construir soluciones digitales robustas, eficientes
              y escalables. Mi carrera ha abarcado desde el trabajo freelance
              hasta el desarrollo de proyectos propios, incluyendo la creación
              de mi propia tienda online, donde vendo plantillas y plugins.
              También he liderado equipos en mi agencia de marketing y
              desarrollo web, asegurando que cada proyecto cumpla con altos
              estándares técnicos y creativos.
            </p>
          </div>
          <div className="flex gap-x-3">
            {SocialMedia.slice(0, 2).map((social) => (
              <ButtonSocialMedia
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
