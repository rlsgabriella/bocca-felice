import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const MENU_URL = "https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl";

type Link = { href: string; label: string; external?: boolean };

const LINKS: Link[] = [
  { href: "#sobre",       label: "Sobre" },
  { href: "#galeria",     label: "Galeria" },
  { href: MENU_URL,       label: "Cardápio",   external: true },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#info",        label: "Localização" },
];

export function SiteNav() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = rolou
    ? "relative text-sm text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full"
    : "relative text-sm text-creme/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-ouro after:transition-all hover:text-accent hover:after:w-full";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        rolou
          ? "border-border bg-background/95 py-3 shadow-suave backdrop-blur-xl"
          : "border-transparent bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#hero" aria-label="Bocca Felice — início" className="flex items-center gap-3">
          <span className="superficie-ouro flex size-9 items-center justify-center rounded-full font-display text-sm font-bold text-verde">
            BF
          </span>
          <span className="leading-none">
            <span className={`block font-display text-base font-bold tracking-tight transition-colors ${rolou ? "text-primary" : "text-creme"}`}>
              Bocca Felice
            </span>
            <span className={`block text-[0.6rem] tracking-[0.28em] uppercase transition-colors ${rolou ? "text-muted-foreground" : "text-creme/60"}`}>
              Pasta e Pizza
            </span>
          </span>
        </a>

        {/* Links desktop */}
        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className={linkClass}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/5588997041694"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ouro px-5 py-2 text-sm font-semibold text-verde shadow-ouro transition-all hover:-translate-y-0.5 hover:bg-ouro-claro"
          >
            Peça pelo WhatsApp
          </a>
        </div>

        {/* Hamburguer mobile */}
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setAberto((v) => !v)}
          className="rounded-full border border-border p-2 text-primary lg:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {aberto && (
        <div className="border-t border-border bg-background/98 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                onClick={() => !l.external && setAberto(false)}
                className="text-sm text-muted-foreground hover:text-accent"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5588997041694"
              target="_blank"
              rel="noreferrer"
              onClick={() => setAberto(false)}
              className="mt-2 rounded-full bg-ouro px-5 py-2.5 text-center text-sm font-semibold text-verde"
            >
              Peça pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
