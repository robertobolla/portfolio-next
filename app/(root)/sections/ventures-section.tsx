import CardVentures from "@/components/ui/card-ventures";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const VenturesSection = () => {
  return (
    <section id="testimonials" className="border-b border-gray-500/30 py-10 ">
      <Container>
        <Title title="Ventures" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CardVentures
            name="Framer Templates"
            image="/perfil.webp"
            href="/ventures"
            description="Creating Framer Templates for designers, agencies, and content creators"
          />
          <CardVentures
            name="Framer Templates"
            image="/perfil.webp"
            href="/ventures"
            description="Creating Framer Templates for designers, agencies, and content creators"
          />
          <CardVentures
            name="Framer Templates"
            image="/perfil.webp"
            href="/ventures"
            description="Creating Framer Templates for designers, agencies, and content creators"
          />
        </div>
      </Container>
    </section>
  );
};

export default VenturesSection;
