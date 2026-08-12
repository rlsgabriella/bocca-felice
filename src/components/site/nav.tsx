import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Avaliações" },
  { href: "#info", label: "Horários" },
];

export function SiteNav() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        rolou
          ? "border-accent/20 bg-background/90 py-3 backdrop-blur-xl"
          : "border-transparent bg-background/60 py-5 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#hero" className="flex items-center gap-3">
          <span className="superficie-ouro flex size-9 items-center justify-center rounded-full font-display text-sm font-bold text-primary">
            BF
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-bold tracking-tight text-primary">
              Bocca Felice
            </span>
            <span className="block text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
              Pasta e Pizza
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:text-primary hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#cardapio"
            className="rounded-full border border-primary/70 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Ver Menu
          </a>
          <a
            href="#reservas"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-suave transition-transform hover:-translate-y-0.5"
          >
            Reservar Mesa
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setAberto((v) => !v)}
          className="rounded-full border border-border p-2 text-primary lg:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <div className="border-t border-border bg-background/98 px-6 py-6 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setAberto(false)}
                className="text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservas"
              onClick={() => setAberto(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Reservar Mesa
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
