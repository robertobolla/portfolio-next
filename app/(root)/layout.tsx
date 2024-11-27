"use client";

import { ReactNode, useState } from "react";
import Sidebar from "@/components/shared/sidebar";
import ButtonIcon from "@/components/ui/buttonIcon";
import { RiMenu2Line } from "react-icons/ri";
import Footer from "@/components/shared/footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Sidebar showMenu={showMenu} onClose={() => setShowMenu(false)} />
      <header>
        <ButtonIcon
          icon={RiMenu2Line}
          onClick={() => setShowMenu(true)}
          className="lg:hidden fixed right-0 bottom-0 bg-primary/100  text-white p-4 rounded-tl-lg z-40"
        />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
