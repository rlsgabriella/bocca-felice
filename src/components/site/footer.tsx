import { Instagram, MessageCircle } from "lucide-react";

const COLUNAS = [
  {
    titulo: "Links Rápidos",
    itens: [
      ["Sobre", "#sobre"],
      ["Cardápio", "#cardapio"],
      ["Galeria", "#galeria"],
      ["Reservas", "#reservas"],
    ],
  },
  {
    titulo: "Menu",
    itens: [
      ["Pizzas", "#cardapio"],
      ["Massas", "#cardapio"],
      ["Entradas", "#cardapio"],
      ["Sobremesas", "#cardapio"],
      ["Drinks", "#cardapio"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-verde px-6 pt-20 pb-10 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-creme/10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-3">
              <span className="superficie-ouro flex size-10 items-center justify-center rounded-full font-display text-sm font-bold text-verde">
                BF
              </span>
              <span className="font-display text-lg font-bold text-creme">Bocca Felice</span>
            </span>
            <p className="mt-5 text-sm leading-relaxed text-creme/50">
              Cucina italiana artigianale e Verace Pizza Napoletana desde 2017 em Sobral, Ceará.
              Mangia que te fa felice 🤌
            </p>
          </div>

          {COLUNAS.map((c) => (
            <div key={c.titulo}>
              <h3 className="font-display text-sm font-bold text-creme">{c.titulo}</h3>
              <ul className="mt-5 space-y-2.5">
                {c.itens.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm text-creme/50 transition-colors hover:text-accent"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold text-creme">Contato</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-creme/50">
              <li>
                <a href="https://wa.me/55" className="transition-colors hover:text-accent">
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/boccafelicepastaepizza"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  @boccafelicepastaepizza
                </a>
              </li>
              <li>Sobral, Ceará</li>
              <li>Dal 2017</li>
            </ul>
            <div className="mt-6 flex gap-2.5">
              <a
                href="https://instagram.com/boccafelicepastaepizza"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-creme/20 text-creme/50 transition-colors hover:border-accent hover:bg-accent hover:text-verde"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="https://wa.me/55"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-creme/20 text-creme/50 transition-colors hover:border-accent hover:bg-accent hover:text-verde"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <span className="text-xs text-creme/30">
            © 2026 Bocca Felice · Pasta e Pizza · Sobral, CE
          </span>
          <span className="flex overflow-hidden rounded-full">
            <span className="h-1 w-8 bg-italia-verde" />
            <span className="h-1 w-8 bg-creme" />
            <span className="h-1 w-8 bg-italia-verm" />
          </span>
        </div>
      </div>
    </footer>
  );
}

export function BotaoWhatsApp() {
  return (
    <a
      href="https://wa.me/55"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-italia-verde text-creme shadow-elevado transition-transform hover:scale-110"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
