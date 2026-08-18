import { Instagram } from "lucide-react";
import { CONTATO } from "@/data/info";
import logoBocca from "@/assets/images/logo-bocca.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                border: '1px solid rgba(201,168,76,0.3)',
              }}>
                <img
                  src={logoBocca}
                  alt="Bocca Felice"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
              <span className="font-display text-lg font-bold text-creme">Bocca Felice</span>
            </span>
            <div style={{ display: 'flex', gap: '0', margin: '0.75rem 0 0', width: '84px' }}>
              <div style={{ flex: 1, height: '2.5px', background: '#009246', borderRadius: '1px 0 0 1px' }} />
              <div style={{ flex: 1, height: '2.5px', background: '#F4F5F0' }} />
              <div style={{ flex: 1, height: '2.5px', background: '#CE2B37', borderRadius: '0 1px 1px 0' }} />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-creme-muted">
              <em className="font-display italic">Cucina italiana artigianale</em> e Verace Pizza Napoletana desde 2017 em Sobral, Ceará.{" "}
              <em className="font-display italic">Mangia que te fa felice.</em>
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
                <WhatsAppIcon className="size-4" />
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
      className="fixed right-4 bottom-4 z-50 flex size-[50px] items-center justify-center rounded-full border border-ouro/40 text-verde shadow-ouro transition-transform hover:scale-110 lg:right-6 lg:bottom-6 lg:size-14"
      style={{ background: "var(--color-ouro)" }}
    >
      <WhatsAppIcon className="size-5 lg:size-6" />
    </a>
  );
}
