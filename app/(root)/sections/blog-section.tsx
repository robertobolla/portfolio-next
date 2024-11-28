"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import ListBlog from "@/components/list-blog";

const BlogSection = () => {
  const router = useRouter();

  return (
    <section id="blog" className="border-b border-gray-500/30 py-10 ">
      <Container>
        <Title title="Blog" />
        <ListBlog />
        <Button label="View All Posts" onClick={() => router.push("/blog")} />
      </Container>
    </section>
  );
};

export default BlogSection;
