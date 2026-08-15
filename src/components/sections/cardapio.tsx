import { PRATOS } from "@/data/cardapio";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

export function Cardapio() {
  return (
    <section id="cardapio" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="revelar mx-auto max-w-2xl text-center" data-revelar>
          <Eyebrow>I Piatti</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary lg:text-5xl">
            Destaques do <em className="font-script text-accent not-italic">Menu</em>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Criações exclusivas com ingredientes frescos e tradição italiana.
          </p>
          <div className="filete-ouro mx-auto mt-6 bg-linear-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {PRATOS.map((p, i) => (
            <article
              key={p.nome}
              data-revelar
              style={{ transitionDelay: `${i * 90}ms` }}
              className="revelar group overflow-hidden rounded-3xl border border-border bg-card shadow-suave transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevado"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.alt}
                  width={1008}
                  height={800}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                  {p.tag}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-primary">{p.nome}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-lg font-bold text-primary">{p.preco}</span>
                  <a href="#reservas" className="text-xs tracking-wide text-accent uppercase">
                    Reservar →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
