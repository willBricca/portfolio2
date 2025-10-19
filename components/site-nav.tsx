"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50">
      {/* FULL-BLEED BACKDROP LAYER */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen
                      bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur
                      border-b border-zinc-200">
        {/* CONSTRAINED CONTENT */}
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">DK</Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="#projects">Projects</Link>
            <Link href="#publications">Publications</Link>
            {/* Black button links to a dedicated About page */}
            <Button asChild size="sm"><Link href="/about">About Me</Link></Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
