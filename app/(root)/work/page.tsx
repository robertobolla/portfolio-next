import ListFeaturedWork from "@/components/list-features-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const WorkPage = () => {
  return (
    <main className="border-b border-gray-500/30 ">
      <Container>
        <Title title="Work" />
        <ListFeaturedWork />
      </Container>
    </main>
  );
};

export default WorkPage;
