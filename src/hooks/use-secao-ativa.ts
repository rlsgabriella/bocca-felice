import { useEffect, useState } from "react";

/** Retorna o id da seção atualmente visível, para destacar o link no menu. */
export function useSecaoAtiva(ids: string[]) {
  const [ativa, setAtiva] = useState<string>("");

  useEffect(() => {
    const alvos = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!alvos.length || !("IntersectionObserver" in window)) return;

    const obs = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visivel) setAtiva(visivel.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    alvos.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids.join(",")]);

  return ativa;
}
