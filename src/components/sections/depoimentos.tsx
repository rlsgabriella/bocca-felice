import { useState, useEffect, useCallback } from "react";
import { useSwipe } from "@/hooks/use-swipe";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { depoimentos } from "@/data/depoimentos";
import { useIsMobile } from "@/hooks/use-mobile";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

type Depoimento = (typeof depoimentos)[number];

function Card({ d }: { d: Depoimento }) {
  return (
    <blockquote className="flex flex-1 flex-col rounded-3xl border border-border bg-card p-5 shadow-suave lg:p-8">
      <span
        className="font-display text-5xl leading-none"
        style={{ color: "oklch(0.75 0.11 88 / 0.25)" }}
      >
        &ldquo;
      </span>
      <p className="mt-2 flex-1 font-display text-base leading-relaxed text-muted-foreground italic">
        {d.texto}
      </p>
      <div className="mt-6 tracking-[0.1em] text-accent">
        {"★".repeat(d.nota)}
        {"☆".repeat(5 - d.nota)}
      </div>
      <footer className="mt-5 flex items-center justify-between border-t border-border pt-5">
        <div className="flex items-center gap-3">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
            style={{ backgroundColor: d.cor }}
          >
            {d.initials}
          </span>
          <span className="text-sm leading-tight">
            <strong className="block font-medium text-primary">{d.nome}</strong>
            <span className="text-xs text-muted-foreground">{d.cidade}</span>
          </span>
        </div>
        <span
          style={{
            borderRadius: 9999,
            padding: "0.2rem 0.65rem",
            fontSize: "0.6rem",
            letterSpacing: "0.08em",
            fontWeight: 500,
            textTransform: "uppercase",
            background: "oklch(0.75 0.11 88 / 0.12)",
            color: "var(--color-ouro)",
          }}
        >
          {d.fonte}
        </span>
      </footer>
    </blockquote>
  );
}

export function Depoimentos() {
  const isMobile = useIsMobile();
  const perPage = isMobile ? 1 : 3;
  const pageCount = Math.ceil(depoimentos.length / perPage);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setPage(0);
  }, [perPage]);

  const next = useCallback(() => setPage((p) => (p + 1) % pageCount), [pageCount]);
  const prev = useCallback(() => setPage((p) => (p - 1 + pageCount) % pageCount), [pageCount]);
  const { handlers: swipeHandlers, isDragging, deltaX } = useSwipe(next, prev);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section id="depoimentos" className="bg-background py-16 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="revelar text-center" data-revelar>
          <Eyebrow>Testimonianze</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary lg:text-5xl">
            O que nossos <em className="font-script text-accent not-italic">clientes</em> dizem
          </h2>
        </div>

        <div
          className="relative mt-8 lg:mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Viewport */}
          <div
            className="overflow-hidden"
            style={{ touchAction: "pan-y" }}
            onTouchStart={(e) => { setPaused(true); swipeHandlers.onTouchStart(e); }}
            onTouchMove={swipeHandlers.onTouchMove}
            onTouchEnd={() => { setPaused(false); swipeHandlers.onTouchEnd(); }}
          >
            {/* Track */}
            <div
              className="flex"
              style={{
                transform: isDragging
                  ? `translateX(calc(-${page * 100}% + ${deltaX}px))`
                  : `translateX(-${page * 100}%)`,
                transition: isDragging ? "none" : "transform 0.5s ease-in-out",
              }}
            >
              {Array.from({ length: pageCount }, (_, i) => (
                <div key={i} className="flex min-w-full gap-6">
                  {depoimentos.slice(i * perPage, i * perPage + perPage).map((d) => (
                    <Card key={d.nome} d={d} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Setas — visíveis apenas md+ */}
          <button
            type="button"
            onClick={prev}
            aria-label="Depoimento anterior"
            className="absolute -left-5 top-1/2 -translate-y-1/2 hidden size-10 items-center justify-center rounded-full border border-border bg-card shadow-suave transition-all hover:-translate-x-0.5 hover:shadow-elevado md:flex lg:-left-6"
          >
            <ChevronLeft className="size-5 text-accent" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Próximo depoimento"
            className="absolute -right-5 top-1/2 -translate-y-1/2 hidden size-10 items-center justify-center rounded-full border border-border bg-card shadow-suave transition-all hover:translate-x-0.5 hover:shadow-elevado md:flex lg:-right-6"
          >
            <ChevronRight className="size-5 text-accent" />
          </button>
        </div>

        {/* Dots — área de toque 32×32px */}
        <div className="mt-8 flex items-center justify-center gap-1">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Ir para página ${i + 1}`}
              className="flex min-h-[32px] min-w-[32px] items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-accent" : "w-2"
                }`}
                style={i !== page ? { background: "oklch(0.75 0.11 88 / 0.3)" } : undefined}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
