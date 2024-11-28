"use client";

import ListFeaturedWork from "@/components/list-features-work";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {
  const router = useRouter();
  return (
    <section
      id="featuredWork"
      className="border-b border-gray-500/30 py-10 pb-20"
    >
      <Container>
        <Title title="Features Work" />
        <ListFeaturedWork />
        <Button
          label="View All Proyects"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
