import { cn } from "@/libs/utils";
import CardVentures from "./ui/card-ventures";

interface ListVenturesProps {
  className?: string;
}

const ListVentures = ({ className }: ListVenturesProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  ",
        className
      )}
    >
      <CardVentures
        name="Framer Templates"
        image="/perfil.webp"
        href="/ventures"
        description="Creating Framer Templates for designers, agencies, and content creators"
      />
      <CardVentures
        name="Framer Templates"
        image="/perfil.webp"
        href="/ventures"
        description="Creating Framer Templates for designers, agencies, and content creators"
      />
      <CardVentures
        name="Framer Templates"
        image="/perfil.webp"
        href="/ventures"
        description="Creating Framer Templates for designers, agencies, and content creators"
      />
    </div>
  );
};

export default ListVentures;
