"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">DK</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#projects">Projects</Link>
          <Link href="#publications">Publications</Link>
          <Link href="#about">About</Link>
          <Button asChild size="sm"><Link href="#contact">Contact</Link></Button>
        </nav>
      </div>
    </header>
  );
}
