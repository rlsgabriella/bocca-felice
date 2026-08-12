import { createFileRoute } from "@tanstack/react-router";

import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import {
  Sobre,
  Cardapio,
  Experiencia,
  Galeria,
  Depoimentos,
  Info,
  Reservas,
} from "@/components/site/secoes";
import { SiteFooter, BotaoWhatsApp } from "@/components/site/footer";

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
        <Sobre />
        <Cardapio />
        <Experiencia />
        <Galeria />
        <Depoimentos />
        <Info />
        <Reservas />
      </main>
      <SiteFooter />
      <BotaoWhatsApp />
    </>
  );
}
