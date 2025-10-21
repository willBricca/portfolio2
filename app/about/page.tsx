"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import SiteNav from "@/components/site-nav";

const HERO_SRC = "/images/DeathValley.jpeg";
const IRONMAN_SRC = "/images/Ironman.jpg";
const SAILING_SRC = "/images/croatiaboat.jpg";

export default function AboutPage() {
  const [onWhite, setOnWhite] = useState(false);
  const [animating, setAnimating] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const NAV_Z = 3000;
  const OVERLAY_Z = 1200;
  const BG_Z = -30;

  // --- scrollbar compensation ---
  const getScrollbarWidth = () =>
    window.innerWidth - document.documentElement.clientWidth;

  const lockScroll = () => {
    const y = window.scrollY;
    const sbw = getScrollbarWidth();
    document.body.dataset.lockY = String(y);
    document.documentElement.style.setProperty("--sbw", `${sbw}px`);
    Object.assign(document.body.style, {
      position: "fixed",
      top: `-${y}px`,
      left: "0",
      right: "0",
      width: "100%",
      overflow: "hidden",
      paddingRight: `var(--sbw)`,
    } as CSSStyleDeclaration);
  };

  const unlockScroll = () => {
    const y = Number(document.body.dataset.lockY || "0");
    Object.assign(document.body.style, {
      position: "",
      top: "",
      left: "",
      right: "",
      width: "",
      overflow: "",
      paddingRight: "",
    } as CSSStyleDeclaration);
    document.documentElement.style.removeProperty("--sbw");
    window.scrollTo(0, y);
    delete document.body.dataset.lockY;
  };

  const fadeToWhite = useCallback(async () => {
    if (animating || onWhite) return;
    setAnimating(true);
    lockScroll();
    const overlay = overlayRef.current!;
    overlay.style.transition = "opacity 160ms linear";
    overlay.style.opacity = "1";
    await new Promise(r => setTimeout(r, 180));
    setOnWhite(true);
    window.scrollTo({ top: 0, behavior: "auto" });
    overlay.style.transition = "opacity 140ms linear";
    overlay.style.opacity = "0";
    await new Promise(r => setTimeout(r, 160));
    unlockScroll();
    setAnimating(false);
  }, [animating, onWhite]);

  const fadeToHero = useCallback(async () => {
    if (animating || !onWhite) return;
    setAnimating(true);
    lockScroll();
    const overlay = overlayRef.current!;
    overlay.style.transition = "opacity 160ms linear";
    overlay.style.opacity = "1";
    await new Promise(r => setTimeout(r, 180));
    setOnWhite(false);
    window.scrollTo({ top: 0, behavior: "auto" });
    overlay.style.transition = "opacity 140ms linear";
    overlay.style.opacity = "0";
    await new Promise(r => setTimeout(r, 160));
    unlockScroll();
    setAnimating(false);
  }, [animating, onWhite]);

  useEffect(() => {
    let touchStartY = 0;
    const atTop = () =>
      (document.scrollingElement?.scrollTop ?? window.scrollY) <= 8;

    const onWheel = (e: WheelEvent) => {
      if (animating) return;
      if (!onWhite && atTop() && e.deltaY > 0) {
        e.preventDefault();
        fadeToWhite();
      } else if (onWhite && atTop() && e.deltaY < 0) {
        e.preventDefault();
        fadeToHero();
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (animating) return;
      if (!onWhite && atTop() && [" ", "PageDown", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        fadeToWhite();
      } else if (onWhite && atTop() && ["PageUp", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        fadeToHero();
      }
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches?.[0]?.clientY ?? 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (animating) return;
      const y = e.touches?.[0]?.clientY ?? touchStartY;
      const dy = touchStartY - y;
      if (!onWhite && atTop() && dy > 12) fadeToWhite();
      else if (onWhite && atTop() && dy < -12) fadeToHero();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [onWhite, animating, fadeToWhite, fadeToHero]);

  return (
    <>
      {/* HARD LOCK the SiteNav header on THIS page */}
      <style jsx global>{`
        /* Override SiteNav's sticky/transform so it never moves on this page */
        header.sticky {
          position: fixed !important;
          top: 0 !important;
          left: 0;
          right: 0;
          transform: none !important;
          transition: none !important;
          will-change: auto !important;
          z-index: ${NAV_Z} !important;
        }
      `}</style>

      {/* NAV stays above everything */}
      <div style={{ position: "relative", zIndex: NAV_Z }}>
        <SiteNav />
      </div>

      {/* BACKGROUND */}
      {!onWhite ? (
        <div className="fixed inset-0" style={{ zIndex: BG_Z }}>
          <Image
            src={HERO_SRC}
            alt="Desert landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="fixed inset-0 bg-white" style={{ zIndex: BG_Z }} />
      )}

      {/* OVERLAY (below nav) */}
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: OVERLAY_Z,
          backgroundColor: "white",
          opacity: 0,
          willChange: "opacity",
          transform: "translateZ(0)",
        }}
      />

      <main className="relative z-0">
        <section className={!onWhite ? "h-[100svh]" : "h-0"} aria-label="Hero spacer" />

        <section
          className="min-h-[100svh] w-full bg-white flex items-center"
          aria-label="About Me"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
              About Me
            </h2>
            <p className="mt-4 text-zinc-700 md:text-lg leading-relaxed max-w-3xl">
              I’m Dylan, a UCSB mechanical engineer focused on systems that work
              outside the lab. Controls, perception, CAD/FEA, and rapid
              iteration are my core tools.
            </p>
          </div>
        </section>

        <section
          className="min-h-[100svh] w-full bg-white"
          aria-label="Extracurricular Accomplishments"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
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
                  <Image src={IRONMAN_SRC} alt="Ironman finish" fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                    Ironman Texas 2025
                  </h3>
                  <p className="mt-2 text-zinc-700">A race.</p>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm">
                <div className="relative w-full aspect-[4/3]">
                  <Image src={SAILING_SRC} alt="Sailing voyage" fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                    France–Croatia Sailing Voyage
                  </h3>
                  <p className="mt-2 text-zinc-700">A voyage.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
<style jsx global>{`
  /* keep layout width stable across scrollbar changes */
  :root { scrollbar-gutter: stable both-edges; }

  /* 1) Hard-lock the header on this page */
  header.sticky {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    transform: none !important;
    transition: none !important;
    will-change: auto !important;
    z-index: 3000 !important;
  }

  /* 2) Kill the full-bleed (-mx-[50vw], left-1/2) that jitters horizontally */
  header.sticky [class*="-mx-[50vw]"],
  header.sticky [class*="left-1/2"],
  header.sticky [class*="right-1/2"],
  header.sticky [class*="w-screen"] {
    position: relative !important;
    left: 0 !important;
    right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
    width: 100% !important;
  }

  /* 3) Prevent accidental horizontal scroll nudges */
  html, body { overflow-x: hidden; }
`}</style>



