"use client";
import { useEffect } from "react";

export default function ScrollTopOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual" as History['scrollRestoration'];
      }
    } catch {}
    // If DK requested top, ensure we land at absolute top
    const act = () => {
      let goTop = false;
      try {
        goTop = sessionStorage.getItem("dkGoTop") === "1";
        if (goTop) sessionStorage.removeItem("dkGoTop");
      } catch {}
      if (goTop) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      }
    };
    requestAnimationFrame(act);
  }, []);
  return null;
}
