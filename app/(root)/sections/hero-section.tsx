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
              I am a seasoned product designer with 5 tears of experience
              specializing in Sass solutions, crafting user-centric experiencies
              that drive innovation and effiency.
            </p>
          </div>
          <div className="flex gap-x-3">
            {SocialMedia.map((social) => (
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
