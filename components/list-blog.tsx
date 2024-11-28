import CardBlog from "./ui/card-blog";

const ListBlog = () => {
  // Datos de los blogs
  const blogList = [
    {
      title: "What's Defference Between UX and UI?",
      href: "/blog/details/0",
      image: "/escale-webs.webp",
      category: "Design",
      ago: "4 min",
    },
    {
      title: "How to Design User-Friendly Interfaces",
      href: "/blog/details/1",
      image: "/escale-webs.webp",
      category: "Design",
      ago: "5 min",
    },
    {
      title: "Understanding Accessibility in Web Design",
      href: "/blog/details/2",
      image: "/escale-webs.webp",
      category: "Web Development",
      ago: "6 min",
    },
    {
      title: "Tips for Creating Effective Wireframes",
      href: "/blog/details/3",
      image: "/escale-webs.webp",
      category: "Design",
      ago: "7 min",
    },
    {
      title: "The Importance of Responsive Design",
      href: "/blog/details/4",
      image: "/escale-webs.webp",
      category: "Web Development",
      ago: "8 min",
    },
  ];

  return (
    <div className="space-y-8 mb-10">
      {blogList.map((blog, index) => (
        <CardBlog
          key={index} // Asegúrate de incluir una key única
          title={blog.title}
          href={`/blog/${index}`}
          image={blog.image}
          category={blog.category}
          ago={blog.ago}
        />
      ))}
    </div>
  );
};

export default ListBlog;
