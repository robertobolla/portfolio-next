"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";
import CardBlog from "@/components/ui/card-blog";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";

const BlogSection = () => {
  const router = useRouter();

  return (
    <section id="testimonials" className="border-b border-gray-500/30 py-10 ">
      <Container>
        <Title title="Blog" />
        <CardBlog
          title="What's Defference Between UX and UI?"
          href="/blog"
          image="/escale-webs3.png"
          category="Design"
          ago="4 min"
        />
        <CardBlog
          title="What's Defference Between UX and UI?"
          href="/blog"
          image="/escale-webs3.png"
          category="Design"
          ago="4 min"
        />
        <CardBlog
          title="What's Defference Between UX and UI?"
          href="/blog"
          image="/escale-webs3.png"
          category="Design"
          ago="4 min"
        />
        <CardBlog
          title="What's Defference Between UX and UI?"
          href="/blog"
          image="/escale-webs3.png"
          category="Design"
          ago="4 min"
        />
        <CardBlog
          title="What's Defference Between UX and UI?"
          href="/blog"
          image="/escale-webs3.png"
          category="Design"
          ago="4 min"
        />
        <Button label="View All Posts" onClick={() => router.push("blog")} />
      </Container>
    </section>
  );
};

export default BlogSection;
