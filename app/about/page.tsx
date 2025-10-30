"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import SiteNav from "@/components/site-nav";

const HERO_SRC = "/images/swissland.jpg";
const IRONMAN_SRC = "/images/ironman_finisher.jpg";
const controllers_SRC = "/images/controllers.jpg";
const osaka_SRC = "/images/osaka1.JPG";

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
          {/* Apple-esque text overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: animating ? 0 : 1,
              transition: 'opacity 200ms ease-out',
              paddingBottom: '62px',
            }}
          >
            <h1 
              className="text-white text-4xl md:text-6xl lg:text-7xl tracking-normal"
              style={{
                textShadow: '0 3px 25px rgba(0,0,0,0.35)',
                letterSpacing: '0.01em',
                fontWeight: 325,
              }}
            >
              I'm Will
            </h1>
          </div>
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

            <div className="mt-4 text-zinc-700 md:text-lg leading-relaxed max-w-3xl space-y-4">
              <p>
                ... and I truly love the iterative process of building things, and 
                watching them fail. I've failed more in the past two years than in my entire life
                before that, and it's been an incredible time of growth. 
              </p>
              <p>
                Starting out with Mechanical Engineering, it took time to find my passion within it.
                I've quickly realized over the second half of my degree that watching autonomous systems 
                interact with the world based on simple first principles is special.
              </p>
              <p>
                Beyond engineering, I enjoy producing and analyzing movie soundtracks. Songs from Tron, Interstellar, and The Lion King: 
                all incredible backdrops for building. I love the clarity that endurance sports bring, and the 
                humbling feeling of being outdoors. Most of all, I love my family and friends. 
                There's nothing better than building with or simply living alongside good, curious people. 
              </p>
            </div>
          </div>
        </section>

        <section
          className="min-h-[100svh] w-full bg-white flex items-center"
          aria-label="Extracurricular Accomplishments"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 w-full">
            <header className="mb-5 md:mb-6">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900">
                Extracurricular Milestones and Experiences
              </h2>
              <p className="mt-3 text-zinc-600 md:text-lg">
                Things that left a stamp.
              </p>
            </header>

            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
              <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm flex-shrink-0 flex-1 min-w-0 snap-center">
                <div className="relative w-full aspect-[3/4]">
                  <Image src={IRONMAN_SRC} alt="Ironman finish" fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                    Ironman California 2025
                  </h3>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm flex-shrink-0 flex-1 min-w-0 snap-center">
                <div className="relative w-full aspect-[3/4]">
                  <Image src={controllers_SRC} alt="Sailing voyage" fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                    Winning Best Presentation in UCSB Junior Capstone 
                  </h3>
                </div>
              </article>

              <article className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-sm flex-shrink-0 flex-1 min-w-0 snap-center">
                <div className="relative w-full aspect-[3/4]">
                  <Image src={osaka_SRC} alt="Backcountry skiing" fill className="object-cover" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-zinc-900">
                    Study Abroad at Osaka University
                  </h3>
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



