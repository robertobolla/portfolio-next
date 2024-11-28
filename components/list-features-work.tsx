import CardFeaturedWork from "./ui/card-featured-work";
import { FaReact, FaNodeJs, FaDatabase, FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";

const ListFeaturedWork = () => {
  // Arreglo de datos para cada tarjeta
  const featuredWorks = [
    {
      id: 1,
      title: "Escale-Webs",
      subtitle: "Web-app",
      image: "/escale-webs.webp",
      href: "/work/0",
      TechStack: [
        { icon: FaHtml5, label: "HTML5.js" },
        { icon: FaSass, label: "CSS3" },
        { icon: FaReact, label: "React" },
      ],
    },
    {
      id: 2,
      title: "Project Two",
      subtitle: "API Development",
      image: "/escale-webs.webp",
      href: "/work/1",
      TechStack: [
        { icon: FaReact, label: "React" },
        { icon: FaDatabase, label: "Database" },
      ],
    },
    {
      id: 3,
      title: "Project Three",
      subtitle: "Backend Service",
      image: "/escale-webs.webp",
      href: "/work/2",
      TechStack: [
        { icon: FaNodeJs, label: "Node.js" },
        { icon: FaDatabase, label: "Database" },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 rounded-xl mb-10">
      {featuredWorks.map((work, index) => (
        <CardFeaturedWork
          key={index} // Usar el índice como key
          title={work.title}
          subtitle={work.subtitle}
          image={work.image}
          href={work.href}
          TechStack={work.TechStack}
        />
      ))}
    </div>
  );
};

export default ListFeaturedWork;
