import { Wine, Wheat, Sparkles, MapPin, Phone, Instagram } from "lucide-react";

import fachadaAsset from "@/assets/restaurante-fachada.jpeg.asset.json";
import mesaVinhoAsset from "@/assets/mesa-vinho.jpeg.asset.json";
import alfredoAsset from "@/assets/spaghetti-alfredo.jpeg.asset.json";
import frutosAsset from "@/assets/frutos-do-mar.jpeg.asset.json";
import camaraoAsset from "@/assets/camarao-creme.jpeg.asset.json";
import raviolAsset from "@/assets/ravioli.jpeg.asset.json";
import tiramisuAsset from "@/assets/tiramisu.jpeg.asset.json";
import parfaitAsset from "@/assets/parfait.jpeg.asset.json";
import chefAsset from "@/assets/chef-thyago.jpeg.asset.json";
import neroAsset from "@/assets/spaghetti-nero.jpeg.asset.json";

const ambiente = fachadaAsset.url;
const forno = mesaVinhoAsset.url;
const tagliatelle = alfredoAsset.url;
const salmone = frutosAsset.url;
const heroPizza = camaraoAsset.url;
const drinks = mesaVinhoAsset.url;
const sobremesa = tiramisuAsset.url;
const ravioli = raviolAsset.url;
const parfait = parfaitAsset.url;
const chef = chefAsset.url;
const nero = neroAsset.url;

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="revelar relative" data-revelar>
          <img
            src={ambiente}
            alt="Fachada do Bocca Felice em Sobral à noite, com mesas na calçada"
            width={1008}
            height={1200}
            loading="lazy"
            className="aspect-4/5 w-full rounded-[2rem] object-cover shadow-elevado"
          />
          <div className="absolute -right-4 -bottom-6 rounded-2xl border border-border bg-card px-5 py-4 text-center shadow-elevado">
            <strong className="block font-display text-2xl text-primary">2017</strong>
            <span className="text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Dal · Fundação
            </span>
          </div>
        </div>

        <div className="revelar" data-revelar>
          <Eyebrow>Nossa História</Eyebrow>
          <h2 className="mt-4 font-display text-4xl leading-tight font-bold text-primary lg:text-5xl">
            Uma cozinha com
            <br />
            alma <em className="font-script text-accent not-italic">italiana</em>
          </h2>
          <div className="filete-ouro mt-6" />
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Desde 2017, o <strong className="text-primary">Bocca Felice</strong> traz a
            autenticidade da culinária italiana para Sobral. Cada prato é preparado com
            ingredientes selecionados e técnicas tradicionais herdadas da{" "}
            <em>cucina artigianale</em>.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Comandado por <strong className="text-primary">Thyago Lopes</strong>, é um espaço onde
            comida artesanal, drinks clássicos e ambiente acolhedor criam uma experiência
            memorável. <em>Mangia que te fa felice.</em>
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              ["2017", "Fundação"],
              ["22K+", "Seguidores"],
              ["100%", "Artesanal"],
            ].map(([n, l]) => (
              <div key={l}>
                <dt className="font-display text-3xl font-bold text-primary">{n}</dt>
                <dd className="mt-1 text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const PRATOS = [
  {
    img: heroPizza,
    alt: "Spaghetti al nero com camarões e tomate confit",
    tag: "Primo Piatto",
    nome: "Nero di Seppia",
    desc: "Massa artesanal ao nero di seppia, camarões salteados, tomatinhos confitados e ervas frescas.",
    preco: "R$ 72",
  },
  {
    img: tagliatelle,
    alt: "Spaghetti alfredo com filé ao molho de frutas vermelhas",
    tag: "Secondo",
    nome: "Alfredo & Filé",
    desc: "Massa fresca ao molho alfredo, grana padano e filé mignon com redução de frutas vermelhas.",
    preco: "R$ 78",
  },
  {
    img: salmone,
    alt: "Peixe grelhado com risoto cremoso",
    tag: "Dal Mare",
    nome: "Pesce & Risotto",
    desc: "Peixe grelhado com creme de limão siciliano, servido com risoto cremoso e tomate confit.",
    preco: "R$ 68",
  },
];

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
        src={forno}
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

const GALERIA = [
  { img: ambiente, cap: "Nosso Ambiente", span: "md:col-span-2 md:row-span-2" },
  { img: heroPizza, cap: "Pizzas", span: "" },
  { img: drinks, cap: "Drinks", span: "" },
  { img: tagliatelle, cap: "Massas", span: "" },
  { img: sobremesa, cap: "Sobremesas", span: "" },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="revelar text-center" data-revelar>
          <Eyebrow>La Galleria</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary lg:text-5xl">
            Momentos <em className="font-script text-accent not-italic">felici</em>
          </h2>
        </div>

        <div className="revelar mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4" data-revelar>
          {GALERIA.map((g) => (
            <figure
              key={g.cap}
              className={`group relative overflow-hidden rounded-2xl ${g.span}`}
            >
              <img
                src={g.img}
                alt={g.cap}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-0 flex items-end bg-linear-to-t from-verde/85 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.65rem] tracking-[0.22em] text-accent uppercase">
                  {g.cap}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const DEPOIMENTOS = [
  {
    texto:
      "Uma experiência inesquecível! A pizza napoletana é simplesmente divina, massa perfeita e ingredientes de altíssima qualidade. Voltarei sempre!",
    nome: "Ana Beatriz S.",
    local: "Sobral, CE",
    iniciais: "AB",
  },
  {
    texto:
      "Serviço impecável, ambiente aconchegante e comida de altíssimo nível. O melhor restaurante italiano que já fui em todo o Ceará!",
    nome: "Carlos Eduardo",
    local: "Fortaleza, CE",
    iniciais: "CE",
  },
  {
    texto:
      "As massas são feitas na hora e dá para sentir. O tagliatelle com filé é surreal, e os drinks acompanham perfeitamente o jantar.",
    nome: "Mariana Lima",
    local: "Sobral, CE",
    iniciais: "ML",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="revelar text-center" data-revelar>
          <Eyebrow>Testimonianze</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary lg:text-5xl">
            O que nossos <em className="font-script text-accent not-italic">clientes</em> dizem
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <blockquote
              key={d.nome}
              data-revelar
              style={{ transitionDelay: `${i * 90}ms` }}
              className="revelar rounded-3xl border border-border bg-card p-8 shadow-suave transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevado"
            >
              <span className="font-display text-5xl leading-none text-muted">&ldquo;</span>
              <p className="mt-2 font-display text-base leading-relaxed text-muted-foreground italic">
                {d.texto}
              </p>
              <div className="mt-6 tracking-[0.1em] text-accent">★★★★★</div>
              <footer className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <span className="superficie-ouro flex size-10 items-center justify-center rounded-full text-xs font-bold text-primary">
                  {d.iniciais}
                </span>
                <span className="text-sm leading-tight">
                  <strong className="block font-medium text-primary">{d.nome}</strong>
                  <span className="text-xs text-muted-foreground">{d.local}</span>
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

const HORARIOS = [
  ["Terça a Quinta", "18h às 23h", false],
  ["Sexta e Sábado", "12h–15h · 18h–00h", false],
  ["Domingo", "12h às 16h (almoço)", false],
  ["Segunda", "Fechado", true],
] as const;

export function Info() {
  return (
    <section id="info" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="revelar" data-revelar>
          <Eyebrow>Horários</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary lg:text-5xl">
            Horários de
            <br />
            <em className="font-script text-accent not-italic">funcionamento</em>
          </h2>
          <dl className="mt-8">
            {HORARIOS.map(([dia, hora, fechado]) => (
              <div
                key={dia}
                className="flex items-center justify-between border-b border-border py-4 text-sm"
              >
                <dt className="text-muted-foreground">{dia}</dt>
                <dd className={fechado ? "font-medium text-destructive" : "font-medium text-primary"}>
                  {hora}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="revelar" data-revelar>
          <Eyebrow>Localização</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold text-primary lg:text-5xl">
            Como nos <em className="font-script text-accent not-italic">encontrar</em>
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Mapa — Bocca Felice, Sobral, Ceará"
              src="https://www.google.com/maps?q=Sobral,Cear%C3%A1,Brasil&output=embed"
              loading="lazy"
              className="h-56 w-full grayscale-[0.3]"
            />
          </div>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 text-accent" /> Sobral, Ceará, Brasil
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-accent" />
              <a href="https://wa.me/55" className="text-primary hover:text-accent">
                WhatsApp — fale conosco
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram className="size-4 text-accent" />
              <a
                href="https://instagram.com/boccafelicepastaepizza"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:text-accent"
              >
                @boccafelicepastaepizza
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Reservas() {
  return (
    <section id="reservas" className="superficie-ouro grao relative py-24 text-center lg:py-28">
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-6 h-px w-10 bg-creme/50" />
        <h2 className="font-display text-4xl leading-tight font-bold text-creme lg:text-5xl">
          Pronto para sua
          <br />
          próxima experiência?
        </h2>
        <p className="mt-4 text-sm text-creme/75">
          Viva uma experiência gastronômica italiana inesquecível em Sobral.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/55"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-creme px-7 py-3.5 text-sm font-semibold text-verde transition-transform hover:-translate-y-0.5"
          >
            Reservar Mesa
          </a>
          <a
            href="https://instagram.com/boccafelicepastaepizza"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-creme/60 px-7 py-3.5 text-sm font-semibold text-creme transition-colors hover:border-creme hover:bg-creme/10"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
