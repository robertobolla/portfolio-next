import { cn } from "@/libs/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { ReactNode } from "react";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Web",
  description: "Portfolio Web",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("bg-dark text-gray-300", font.className)}>
        <main className="lg:pl-[24vw] xl:pl-[13vw] px-5 lg:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
