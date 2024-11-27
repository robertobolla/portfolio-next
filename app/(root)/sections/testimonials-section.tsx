import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import CardTestimonial from "@/components/ui/card-testimonial";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="border-b border-gray-500/30 py-10 ">
      <Container>
        <Title title="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-2 gap-10 ">
          <CardTestimonial
            message="Consigue una suscripción para evitar la cola, disfrutar de las funciones
        PRO y procesar tus archivos más rápidamente."
            name="JhonSmith"
            owner="Escale Webs"
            image="/perfil.webp"
          />
          <CardTestimonial
            message="Consigue una suscripción para evitar la cola, disfrutar de las funciones
        PRO y procesar tus archivos más rápidamente."
            name="JhonSmith"
            owner="Escale Webs"
            image="/perfil.webp"
          />
          <CardTestimonial
            message="Consigue una suscripción para evitar la cola, disfrutar de las funciones
        PRO y procesar tus archivos más rápidamente."
            name="JhonSmith"
            owner="Escale Webs"
            image="/perfil.webp"
          />
          <CardTestimonial
            message="Consigue una suscripción para evitar la cola, disfrutar de las funciones
        PRO y procesar tus archivos más rápidamente."
            name="JhonSmith"
            owner="Escale Webs"
            image="/perfil.webp"
          />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
