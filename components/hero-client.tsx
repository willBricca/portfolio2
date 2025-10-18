"use client";
import Image from "next/image";

export default function HeroClient({
  children,
  img = "/images/UCSB.jpg",
}: {
  children: React.ReactNode;
  img?: string;
}) {
  return (
    // full-bleed hero
    <section className="relative isolate left-1/2 right-1/2 -mx-[50vw] w-screen min-h-screen">
      {/* background */}
      <Image src={img} alt="UCSB campus" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-white/60 mix-blend-multiply" />

      {/* content: push toward top (≈ top quarter) */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-[6vh] md:pt-[8vh] pb-[30vh]">
        {children}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-zinc-200" />
    </section>
  );
}
