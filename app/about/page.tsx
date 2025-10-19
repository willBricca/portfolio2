"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SiteNav from "@/components/site-nav";

const SECTIONS = [
  {
    src: "/images/DeathValley.jpeg",
    title: "More About Me",
    body:
      "I am an engineer, artist, creator, or all of those combined, or none at all. I enjoy everything that involves creating and bringing things to life.",
    position: "left-bottom",
  },
  {
    src: "/images/stars.jpg",
    title: "Curiosity",
    body:
      "I heard this saying once: \"knowing ends the story; curiosity keeps it alive.\"",
    position: "right-center",
  },
  {
    src: "/images/easterislandlandscape.jpg",
    title: "Adventure",
    body:
      "The unknown is where everything begins.",
    position: "left-center",
  },
] as const;

const IRONMAN_SRC = "/images/Ironman.jpg";
const SAILING_SRC = "/images/croatiaboat.jpg";

export default function AboutPage() {
  const [active, setActive] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sentinelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setShowNav(true); // scrolling up
      } else if (currentScrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => {
        const best = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (best) {
          const idx = Number((best.target as HTMLElement).dataset.index || 0);
          setActive(idx);
        }
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    sentinelsRef.current.forEach((el) => el && io.observe(el));
    
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const scrollTo = (i: number) =>
    sentinelsRef.current[i]?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <SiteNav />
      <main className="relative w-full overflow-x-hidden">
        {/* Background crossfading images */}
        <div className="fixed inset-0 -z-10">
          {SECTIONS.map((s, i) => (
            <div
              key={s.src}
              className={[
                "absolute inset-0 transition-all duration-700 ease-out",
                i === active ? "opacity-100 scale-[1.01]" : "opacity-0 scale-100",
              ].join(" ")}
            >
              <Image
                src={s.src}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* White overlay fade into accomplishments */}
        <div
          className={[
            "fixed inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-out",
            active === SECTIONS.length ? "opacity-100" : "opacity-0",
          ].join(" ")}
        >
          <div className="absolute inset-0 bg-white" />
        </div>

        {/* Sections */}
        <div className="relative z-10 snap-y snap-mandatory">
          {SECTIONS.map((s, i) => (
            <section
              key={s.src}
              data-index={i}
              ref={(el) => {
                if (el) sentinelsRef.current[i] = el as HTMLDivElement;
              }}
              className="h-[100svh] w-full snap-start relative flex"
            >
              {/* Position variations */}
              <div
                className={[
                  "absolute",
                  s.position === "left-bottom"
                    ? "left-4 md:left-8 bottom-10 md:bottom-16"
                    : s.position === "right-center"
                    ? "right-6 md:right-12 top-1/2 -translate-y-1/2"
                    : s.position === "left-center"
                    ? "left-6 md:left-12 top-1/2 -translate-y-1/2"
                    : "",
                ].join(" ")}
              >
                <div
                  className={[
                    "transition-all duration-700 ease-out",
                    i === active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                  ].join(" ")}
                >
                  <div className="w-[90vw] max-w-sm md:max-w-md rounded-2xl border border-white/20 bg-white/25 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    <div className="px-5 py-4 md:px-7 md:py-5">
                      <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-white/95 mb-2">
                        {s.title}
                      </h1>
                      <p className="text-sm md:text-lg leading-relaxed font-medium text-white/85">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Accomplishments */}
          <section
            data-index={SECTIONS.length}
            ref={(el) => {
              if (el) sentinelsRef.current[SECTIONS.length] = el as HTMLDivElement;
            }}
            className="relative min-h-[100svh] w-full snap-start"
          >
            <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24 relative z-10">
              <div
                className={[
                  "transition-all duration-700 ease-out",
                  active === SECTIONS.length ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                ].join(" ")}
              >
                <header className="mb-8 md:mb-12">
                  <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                    Extracurricular Accomplishments
                  </h2>
                  <p className="mt-3 text-zinc-600 md:text-lg">
                    Milestones that left an indelible stamp.
                  </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={IRONMAN_SRC}
                        alt="Ironman finish"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                        Ironman Texas 2025
                      </h3>
                      <p className="mt-2 text-zinc-700">
                        A race.
                      </p>
                    </div>
                  </article>

                  <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm">
                    <div className="relative w-full aspect-[4/3]">
                      <Image
                        src={SAILING_SRC}
                        alt="Sailing voyage"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                        France-Croatia Sailing Voyage
                      </h3>
                      <p className="mt-2 text-zinc-700">
                        A voyage.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Dots */}
        <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          {[...Array(SECTIONS.length + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to section ${i + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full border transition-all",
                i < SECTIONS.length
                  ? i === active
                    ? "bg-white border-white scale-110"
                    : "bg-white/40 border-white/60 hover:bg-white/70"
                  : active === SECTIONS.length
                    ? "bg-zinc-900 border-zinc-900 scale-110"
                    : "bg-zinc-500/30 border-zinc-500/40 hover:bg-zinc-600/50",
              ].join(" ")}
            />
          ))}
        </div>
      </main>
    </>
  );
}
