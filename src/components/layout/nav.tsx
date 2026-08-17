import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CONTATO, MENU_URL } from "@/data/info";
import { useSecaoAtiva } from "@/hooks/use-secao-ativa";
import { useIsMobile } from "@/hooks/use-mobile";
import logoBocca from "@/assets/images/logo-bocca.png";

type Link = { href: string; label: string; external?: boolean; id?: string };

const LINKS: Link[] = [
  { href: "#sobre",       label: "Sobre",       id: "sobre" },
  { href: "#galeria",     label: "Cardápio",    id: "galeria" },
  { href: MENU_URL,       label: "Pedir Online", external: true },
  { href: "#depoimentos", label: "Avaliações",  id: "depoimentos" },
  { href: "#info",        label: "Localização", id: "info" },
];

const IDS = LINKS.map((l) => l.id).filter((id): id is string => Boolean(id));

export function SiteNav() {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const ativa = useSecaoAtiva(IDS);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (l: Link) => {
    const ativo = Boolean(l.id && l.id === ativa);
    const base =
      "relative text-sm transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-ouro after:transition-all hover:text-accent";
    const cor = ativo
      ? "text-accent"
      : rolou
        ? "text-muted-foreground"
        : "text-creme/80";
    const sublinhado = ativo ? "after:w-full" : "after:w-0 hover:after:w-full";
    return `${base} ${cor} ${sublinhado}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        rolou
          ? "border-border bg-background/95 shadow-suave backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-5 lg:h-[72px] lg:px-10">
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <img
            src={logoBocca}
            alt="Bocca Felice - Pasta e Pizza"
            style={{
              height: isMobile ? "52px" : "64px",
              width: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className={linkClass(l)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-ouro px-5 py-2 text-sm font-semibold text-verde shadow-ouro transition-all hover:-translate-y-0.5 hover:bg-ouro-claro"
          >
            Peça pelo WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setAberto((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full border border-border text-creme lg:hidden"
        >
          {aberto ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {aberto && (
        <div className="border-t border-border bg-background/98 px-5 py-4 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                onClick={() => !l.external && setAberto(false)}
                className={`flex min-h-[44px] items-center text-sm hover:text-accent ${
                  l.id === ativa ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href={CONTATO.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setAberto(false)}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-full bg-ouro px-5 text-sm font-semibold text-verde"
            >
              Peça pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
