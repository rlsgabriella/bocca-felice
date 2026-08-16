import { Instagram, MessageCircle } from "lucide-react";
import { CONTATO } from "@/data/info";

const MENU_URL = "https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl";

const COLUNAS = [
  {
    titulo: "Links Rápidos",
    itens: [
      { label: "Sobre", href: "#sobre" },
      { label: "Galeria", href: "#galeria" },
      { label: "Avaliações", href: "#depoimentos" },
      { label: "Localização", href: "#info" },
    ],
  },
  {
    titulo: "Cardápio",
    itens: [
      { label: "Cardápio Digital", href: MENU_URL, external: true },
      { label: "Pizzas Napoletanas", href: MENU_URL, external: true },
      { label: "Massas Artesanais", href: MENU_URL, external: true },
      { label: "Sobremesas", href: MENU_URL, external: true },
      { label: "Drinks", href: MENU_URL, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t border-border px-6 pt-12 pb-8 lg:px-10 lg:pt-20 lg:pb-10"
      style={{ background: "oklch(0.12 0.025 160)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-border pb-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-3">
              <span className="superficie-ouro flex size-10 items-center justify-center rounded-full font-display text-sm font-bold text-verde">
                BF
              </span>
              <span className="font-display text-lg font-bold text-creme">Bocca Felice</span>
            </span>
            <p className="mt-5 text-sm leading-relaxed text-creme-muted">
              Cucina italiana artigianale e Verace Pizza Napoletana desde 2017 em Sobral, Ceará.
              Mangia que te fa felice.
            </p>
          </div>

          {COLUNAS.map((c) => (
            <div key={c.titulo}>
              <h3 className="font-display text-sm font-bold text-creme">{c.titulo}</h3>
              <ul className="mt-5 space-y-2.5">
                {c.itens.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={"external" in item && item.external ? "_blank" : undefined}
                      rel={"external" in item && item.external ? "noreferrer" : undefined}
                      className="text-sm text-creme-muted transition-colors hover:text-accent"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-bold text-creme">Contato</h3>
            <ul className="mt-5 space-y-2.5 text-sm text-creme-muted">
              <li>
                <a
                  href={CONTATO.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={CONTATO.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {CONTATO.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTATO.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {CONTATO.email}
                </a>
              </li>
              <li className="leading-snug">{CONTATO.endereco}</li>
            </ul>
            <div className="mt-6 flex gap-2.5">
              <a
                href={CONTATO.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-border text-creme-muted transition-colors hover:border-accent hover:bg-accent hover:text-verde"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={CONTATO.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex size-9 items-center justify-center rounded-full border border-border text-creme-muted transition-colors hover:border-accent hover:bg-accent hover:text-verde"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 pt-8 text-center md:flex-row md:justify-between md:text-start">
          <span
            className="text-xs text-creme"
            style={{ opacity: 0.4 }}
          >
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
      href="https://wa.me/5588997041694"
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-[50px] items-center justify-center rounded-full text-white shadow-elevado transition-transform hover:scale-110 lg:right-6 lg:bottom-6 lg:size-14"
      style={{ background: "#25d366" }}
    >
      <MessageCircle className="size-5 lg:size-6" />
    </a>
  );
}
