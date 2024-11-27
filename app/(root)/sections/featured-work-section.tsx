"use client";

import Button from "@/components/ui/button";
import CardFeaturedWork from "@/components/ui/card-featured-work";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import { useRouter } from "next/navigation";

const FeaturedWorkSection = () => {
  const router = useRouter();
  return (
    <section
      id="featureWork"
      className="border-b border-gray-500/30 py-10 pb-20"
    >
      <Container>
        <Title title="Features Work" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl mb-10">
          <CardFeaturedWork
            title="Escale-Webs"
            subtitle="Web-app"
            image="/escale-webs3.png"
            href="/featured-1"
          />
          <CardFeaturedWork
            title="Escale-Webs"
            subtitle="Web-app"
            image="/escale-webs3.png"
            href="/featured-1"
          />
          <CardFeaturedWork
            title="Escale-Webs"
            subtitle="Web-app"
            image="/escale-webs3.png"
            href="/featured-1"
          />
        </div>
        <Button
          label="View All Proyects"
          onClick={() => router.push("/work")}
        />
      </Container>
    </section>
  );
};

export default FeaturedWorkSection;
