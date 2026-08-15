import { Wine, Wheat, Sparkles } from "lucide-react";
import mesaVinho from "@/assets/images/mesa-vinho.jpeg";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

const EXPERIENCIAS = [
  {
    Icone: Wine,
    titulo: "Drinks Clássicos",
    desc: "Carta com drinks artesanais e clássicos italianos: Aperol Spritz, Negroni e muito mais.",
  },
  {
    Icone: Wheat,
    titulo: "Massas Artesanais",
    desc: "Massas produzidas diariamente na casa com farinha especial e técnicas tradicionais.",
  },
  {
    Icone: Sparkles,
    titulo: "Ambiente Exclusivo",
    desc: "Decoração intimista, iluminação calorosa e serviço atencioso e personalizado.",
  },
];

export function Experiencia() {
  return (
    <section className="superficie-verde relative overflow-hidden py-24 lg:py-32">
      <img
        src={mesaVinho}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
        <div className="revelar mx-auto max-w-2xl text-center" data-revelar>
          <Eyebrow>L&apos;Esperienza</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-creme lg:text-5xl">
            Uma experiência{" "}
            <em className="font-script text-accent not-italic">completa</em>
          </h2>
          <p className="mt-4 text-sm text-creme/60">
            Cada detalhe pensado para transformar sua visita em um momento único.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {EXPERIENCIAS.map((e, i) => (
            <div
              key={e.titulo}
              data-revelar
              style={{ transitionDelay: `${i * 90}ms` }}
              className="revelar rounded-3xl border border-creme/10 bg-verde-card/70 p-8 backdrop-blur-sm transition-colors hover:border-accent/40"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-creme/8 text-accent">
                <e.Icone className="size-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-creme">{e.titulo}</h3>
              <p className="mt-3 text-sm leading-relaxed text-creme/55">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
