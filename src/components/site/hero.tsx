import { Flame, ChefHat } from "lucide-react";

import heroPizza from "@/assets/hero-pizza.jpg";

const SELOS = [
  "Cucina Artigianale",
  "Verace Pizza Napoletana",
  "Dal 2017",
  "22 mil seguidores",
  "Sobral · Ceará",
];

export function Hero() {
  return (
    <section id="hero" className="grao relative overflow-hidden bg-background pt-32 pb-0">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-accent/12 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-secondary px-4 py-1.5 text-[0.7rem] tracking-[0.22em] text-primary uppercase">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            Sobral · Ceará · Dal 2017
          </span>

          <h1 className="mt-7 font-display text-5xl leading-[1.05] font-bold tracking-tight text-primary sm:text-6xl lg:text-7xl">
            Uma cozinha que
            <em className="mt-1 block font-script text-6xl font-normal text-accent not-italic sm:text-7xl lg:text-8xl">
              desperta felicidade
            </em>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground">
            Cucina italiana artigianale e Verace Pizza Napoletana. Massas frescas produzidas todos
            os dias e fermentação lenta de 48 horas, sob o comando do chef Thyago Lopes.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#reservas"
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elevado transition-transform hover:-translate-y-0.5"
            >
              Reservar Mesa
            </a>
            <a
              href="#cardapio"
              className="rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-secondary"
            >
              Ver o Menu
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="tracking-[0.15em] text-accent">★★★★★</span>
            <span>
              <strong className="font-medium text-primary">4,9</strong> · mais de 2.000 clientes
              satisfeitos
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[3rem] bg-accent/10 blur-2xl" aria-hidden />
          <img
            src={heroPizza}
            alt="Pizza napoletana artesanal do Bocca Felice"
            width={1200}
            height={1408}
            className="relative aspect-4/5 w-full rounded-[2.5rem] object-cover shadow-elevado"
          />
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-elevado sm:-left-8">
            <span className="superficie-ouro flex size-10 items-center justify-center rounded-xl text-primary">
              <Flame className="size-5" strokeWidth={1.6} />
            </span>
            <span className="text-xs leading-tight">
              <strong className="block text-primary">Forno de pedra</strong>
              <span className="text-muted-foreground">Fermentação de 48h</span>
            </span>
          </div>
          <div className="absolute -top-5 right-0 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-elevado sm:flex sm:-right-6">
            <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
              <ChefHat className="size-5" strokeWidth={1.6} />
            </span>
            <span className="text-xs leading-tight">
              <strong className="block text-primary">Thyago Lopes</strong>
              <span className="text-muted-foreground">Chef · Dal 2017</span>
            </span>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-secondary/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5 lg:px-10">
          {SELOS.map((s) => (
            <span
              key={s}
              className="text-[0.68rem] tracking-[0.24em] text-muted-foreground uppercase"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
