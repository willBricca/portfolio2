"use client";
import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "publications", "contact"] as const;

export default function HomeDots() {
  const [active, setActive] = useState(0);
  const sentinelsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Query and label sections
    const elements: HTMLElement[] = SECTION_IDS.map((id, i) => {
      const el = document.getElementById(id) as HTMLElement | null;
      if (el) {
        el.dataset.index = String(i);
        return el;
      }
      return null as unknown as HTMLElement;
    }).filter(Boolean as unknown as <T>(x: T) => x is T);

    sentinelsRef.current = elements;

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

    elements.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollTo = (i: number) => {
    const id = SECTION_IDS[i];
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
      {SECTION_IDS.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Go to section ${i + 1}`}
          className={[
            "h-2.5 w-2.5 rounded-full border transition-all",
            i === active
              ? "bg-zinc-900 border-zinc-900 scale-110"
              : "bg-zinc-500/30 border-zinc-500/40 hover:bg-zinc-600/50",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
