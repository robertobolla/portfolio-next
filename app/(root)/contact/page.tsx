import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Form from "./componentes/form";

const ContactPage = () => {
  return (
    <main className="pb-10 border-b border-gray-500/30">
      <Container>
        <Title title="Lets Chat" className="mx-auto" />
        <p className="text-gray-500 mb-10 mx-auto max-w-2xl">
          If youd like to talk about a potential project or just say hi, send me
          a message or email me at{" "}
          <span className="text-white">info@robertobolla.com</span>
        </p>
        <Form />
      </Container>
    </main>
  );
};

export default ContactPage;
