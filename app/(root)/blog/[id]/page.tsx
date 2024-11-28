import Badge from "@/components/ui/badge";
import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Image from "next/image";
import { BlogDetailsData } from "@/assets/blog-details-data";

export default function BlogDetails({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const blog = BlogDetailsData.find((_, index) => index === Number(id));
  // Muestra un mensaje si no se encuentra el blog
  if (!blog) {
    return (
      <main className="border-b border-gray-500/30 py-10">
        <Container>
          <Title title="Blog Not Found" />
        </Container>
      </main>
    );
  }

  // Extrae los datos del blog encontrado
  const { badge, title, image, content } = blog;
  return (
    <main className="border-b border-gray-500/30 py-10 mt-10">
      <Container>
        <Badge label={badge} className="text-primary" />
        <Title title={title} className="mt-0 mb-10" />
        <article className="space-y-10">
          <div className="relative w-full h-96 sm:h-[500px] lg:h-[700px] rounded-xl mb-10">
            <Image src={image} alt="image" fill className="rounded-xl" />
          </div>
          {content.map((item, index) => {
            if (item.type === "paragraph") {
              return (
                <p key={index} className="text-gray-500">
                  {item.text}
                </p>
              );
            }
            if (item.type === "heading") {
              return (
                <h3 key={index} className="text-white text-2xl">
                  {item.text}
                </h3>
              );
            }
            if (item.type === "subheading") {
              return (
                <h5 key={index} className="text-lg text-white">
                  {item.text}
                </h5>
              );
            }
            if (item.type === "list" && item.items) {
              return (
                <ul
                  key={index}
                  className="text-gray-500 list-decimal space-y-5 ml-4"
                >
                  {item.items.map((listItem, listIndex) => (
                    <li key={listIndex}>{listItem}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </article>
      </Container>
    </main>
  );
}

export async function generateStaticParams() {
  // Genera las rutas dinámicamente para cada blog
  return BlogDetailsData.map((_, index) => ({
    id: index.toString(),
  }));
}
