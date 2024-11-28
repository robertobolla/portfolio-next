import { cn } from "@/libs/utils";

interface SubTitleProps {
  subtitle: string;
  className?: string;
}

const Subtitle = ({ subtitle, className }: SubTitleProps) => {
  return (
    <h1
      className={cn(
        "ml-6 text-2xl text-white my-10 relative before:absolute before:w-3 before:h-3 before:border before:border-primary before:-left-6 before:top-1/2 before:-translate-y-1/2",
        className
      )}
    >
      {subtitle}
    </h1>
  );
};

export default Subtitle;
