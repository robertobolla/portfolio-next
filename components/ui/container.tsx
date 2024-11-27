import { cn } from "@/libs/utils";
import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("container mx-auto", className)}>
      <div className="lg:mx-20">{children}</div>
    </div>
  );
};

export default Container;
