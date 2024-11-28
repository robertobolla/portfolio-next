import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="border-b border-gray-500/30 pb-10">
      <Container>
        <Title title="About Roberto Bolla " />
        <div className="relative lg:w-[500px] sm:w-[400px] h-[500px] rounded-xl">
          <Image src="/perfil.webp" alt="image" fill className="object-cover" />
        </div>
        <div className="mt-10 space-y-10 max-w-4xl">
          <p className="text-gray-500">
            With a background in product design, I thrive on crafting digital
            experiences that seamlessly blend aesthetics, functionality, and
            user-centered design principles. My journey in the world of design
            has equipped me with a keen eye for detail, a deep understanding of
            user behavior, and the ability to transform complex concepts into
            intuitive, visually appealing products.
          </p>
          <p className="text-gray-500">
            What sets me apart is my expertise in no-code development. I believe
            that technology should be accessible to all, regardless of technical
            expertise. By harnessing the potential of no-code tools, I bridge
            the gap between design and implementation, bringing concepts to life
            without the need for traditional coding. My proficiency in various
            no-code platforms empowers me to rapidly prototype, iterate, and
            build functional applications that resonate with users.
          </p>
          <p className="text-gray-500">
            Whether its crafting captivating user interfaces, optimizing user
            flows, or bringing an app from concept to fruition, Im dedicated to
            delivering high-quality design solutions that not only meet but
            exceed expectations. My commitment to staying updated with the
            latest design trends and no-code advancements ensures that my work
            is always at the forefront of innovation.
          </p>
          <p className="text-gray-500">
            I invite you to explore my portfolio, where youll discover a
            collection of projects that showcase my versatility as a product
            designer and my mastery of no-code tools. From user-centered mobile
            apps to visually striking web interfaces, each project reflects my
            passion for creating meaningful experiences that leave a lasting
            impact.
          </p>
          <p className="text-gray-500">
            Thank you for visiting my portfolio, and Im excited to connect with
            you to discuss how my skills can contribute to your next design or
            development endeavor. Lets collaborate to bring your ideas to life
            in the most innovative and efficient ways possible.
          </p>
        </div>
      </Container>
    </main>
  );
};

export default AboutPage;
