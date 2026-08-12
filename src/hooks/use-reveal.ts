import { useEffect } from "react";

/** Ativa as animações de entrada em todos os elementos com [data-revelar]. */
export function useReveal() {
  useEffect(() => {
    const alvos = Array.from(document.querySelectorAll<HTMLElement>("[data-revelar]"));
    if (!("IntersectionObserver" in window)) {
      alvos.forEach((el) => el.setAttribute("data-visivel", "true"));
      return;
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).setAttribute("data-visivel", "true");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
