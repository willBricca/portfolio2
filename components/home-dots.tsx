"use client";
import { useEffect, useRef, useState } from "react";

const SECTION_IDS = ["hero", "about", "projects", "experience", "publications"] as const;

export default function HomeDots() {
  const [active, setActive] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const tickingRef = useRef(false);

  // Smooth scrolling is better if the page also has scroll-snap disabled.
  // Ensure <html class="scroll-smooth"> or Tailwind global if desired.

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Resolve sections
    sectionsRef.current = SECTION_IDS
      .map((id) => document.getElementById(id) as HTMLElement | null)
      .filter((el): el is HTMLElement => !!el);

    const computeActive = () => {
      // Bottom lock: when near bottom, select last
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2; // tight tolerance
      if (nearBottom) return SECTION_IDS.length - 1;

      const viewportCenter = window.scrollY + window.innerHeight / 2;

      // Pick the section whose center is closest to viewport center
      let bestIdx = 0;
      let bestDist = Number.POSITIVE_INFINITY;

      for (let i = 0; i < sectionsRef.current.length; i++) {
        const el = sectionsRef.current[i];
        const rect = el.getBoundingClientRect();
        const center = window.scrollY + rect.top + rect.height / 2;
        const dist = Math.abs(center - viewportCenter);

        // Small early-activation bias for later sections (experience, publications)
        const bias = i >= 3 ? 0.9 : 1.0; // favor later sections slightly
        const biased = dist * bias;

        if (biased < bestDist) {
          bestDist = biased;
          bestIdx = i;
        }
      }
      return bestIdx;
    };

    const updateActive = () => {
      tickingRef.current = false;
      const idx = computeActive();
      setActive((prev) => (idx !== prev ? idx : prev));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(updateActive);
    };

    const onResize = () => {
      // Recompute immediately on resize for stability
      updateActive();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Initialize once content is laid out
    updateActive();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const scrollTo = (i: number) => {
    const id = SECTION_IDS[i];
    const el = document.getElementById(id);
    // Use block:"start" for deterministic alignment; inline smooth.
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
      {SECTION_IDS.map((_, i) => (
        <button
          key={i}
          onClick={() => scrollTo(i)}
          aria-label={`Go to section ${i + 1}`}
          className={[
            "h-2.5 w-2.5 rounded-full border transition-transform duration-200",
            i === active
              ? "bg-zinc-900 border-zinc-900 scale-110"
              : "bg-zinc-500/30 border-zinc-500/40 hover:bg-zinc-600/50",
          ].join(" ")}
        />
      ))}
    </div>
  );
}
