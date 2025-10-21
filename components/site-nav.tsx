"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const updateWith = (y: number) => {
      if (pathname === "/" || pathname === "/about") {
        setHidden(false);
        lastYRef.current = y;
        tickingRef.current = false;
        return;
      }
      const lastY = lastYRef.current;
      const threshold = 10;
      const delta = 1;

      if (y < threshold) setHidden(false);
      else if (y > lastY + delta) setHidden(true);
      else if (y < lastY - delta) setHidden(false);

      lastYRef.current = y;
      tickingRef.current = false;
    };

    const onScrollWin = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      const y = (document.scrollingElement?.scrollTop ?? window.scrollY);
      requestAnimationFrame(() => updateWith(y));
    };

    const about = document.getElementById("about-scroll");
    const onScrollAbout = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      const y = (about as HTMLElement).scrollTop;
      requestAnimationFrame(() => updateWith(y));
    };

    window.addEventListener("scroll", onScrollWin, { passive: true });
    if (about) about.addEventListener("scroll", onScrollAbout, { passive: true });
    updateWith(document.scrollingElement?.scrollTop ?? window.scrollY);
    return () => {
      window.removeEventListener("scroll", onScrollWin);
      if (about) about.removeEventListener("scroll", onScrollAbout);
    };
  }, [pathname]);

  return (
    <>
      {/* top bleed: ensures white/frosted area above navbar during overscroll */}
      <div
        aria-hidden
        className="fixed inset-x-0 pointer-events-none z-40 -top-[50vh] h-[50vh]
                   bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur"
      />

      <header className={`sticky top-0 z-50 transition-transform duration-300 will-change-transform ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
        {/* FULL-BLEED BACKDROP LAYER */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen
                        bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur
                        border-b border-zinc-200">
          {/* CONSTRAINED CONTENT */}
          <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="font-semibold tracking-tight"
              onClick={(e) => {
                e.preventDefault();
                if (pathname === "/") {
                  setHidden(false);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                } else {
                  try { sessionStorage.setItem("dkGoTop", "1"); } catch {}
                  router.push("/", { scroll: true });
                }
              }}
            >
              DK
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/#projects">Projects</Link>
              <Link href="/#publications">Publications</Link>
              <Button asChild size="sm"><Link href="/about">About Me</Link></Button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
