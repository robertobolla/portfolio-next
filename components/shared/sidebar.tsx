"use client";
import Link from "next/link";
import MainMenu from "./main-menu";
import { cn } from "@/libs/utils";

interface SidebarProps {
  showMenu: boolean;
  onClose: () => void;
}

const Sidebar = ({ showMenu, onClose }: SidebarProps) => {
  return (
    <>
      <aside
        className={cn(
          "fixed top-0 lg:left-0 bg-dark w-[70vw] z-50 md:w-[30vw] lg:w-[20vw] xl:w-[13vW] h-full border-r border-gray-500/10 transition-all duration-300 ease",
          showMenu ? "left-0" : "-left-full"
        )}
      >
        <section className="px-5 py-8 border-b border-gray-500/30">
          <Link
            href="/"
            className="text-xl text-white hover:text-primary transition-all duration-300 ease-in-out"
          >
            Roberto Bolla
          </Link>
          <h3 className="text-sm text-gray-500 font-light">Web Development</h3>
        </section>
        <section>
          <MainMenu />
        </section>
      </aside>
      <div
        onClick={onClose}
        className={cn(
          "fixed bg-black/20 z-40 left-0 top-0 w-full h-full",
          showMenu ? "block" : "hidden"
        )}
      ></div>
    </>
  );
};

export default Sidebar;
