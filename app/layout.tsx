import type { Metadata } from "next";
import "./globals.css";
import "./section-animate.css";

export const metadata: Metadata = {
  title: "Dylan Kauffmann — Mechanical Engineering",
  description: "Projects, publications, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-zinc-900 bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Full-width scroll container so scrollbar sits at the browser edge */}
        <div className="h-screen w-screen overflow-y-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="mx-auto max-w-6xl px-6">{children}</div>
        </div>
      </body>
    </html>
  );
}

