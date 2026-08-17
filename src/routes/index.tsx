import { createFileRoute } from "@tanstack/react-router";

import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/layout/nav";
import { SiteFooter, BotaoWhatsApp } from "@/components/layout/footer";
import { DivisorOuro } from "@/components/layout/divisor";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { GaleriaCardapio } from "@/components/sections/galeria-cardapio";
import { Depoimentos } from "@/components/sections/depoimentos";
import { Info } from "@/components/sections/info";
import { Reservas } from "@/components/sections/reservas";

const TITULO = "Bocca Felice — Cucina Italiana e Pizza Napoletana em Sobral";
const DESCRICAO =
  "Restaurante italiano em Sobral, CE. Massas artesanais frescas, Verace Pizza Napoletana com fermentação de 48h e drinks clássicos. Reserve sua mesa.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <DivisorOuro />
        <Sobre />
        <DivisorOuro />
        <GaleriaCardapio />
        <DivisorOuro />
        <Depoimentos />
        <DivisorOuro />
        <Info />
        <Reservas />
      </main>
      <SiteFooter />
      <BotaoWhatsApp />
    </>
  );
}
