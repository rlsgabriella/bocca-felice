import { Pizza, Star } from "lucide-react";
import fachada from "@/assets/images/restaurante-fachada.jpeg";
import chefThyago from "@/assets/images/chef-thyago.jpg";
import { CONTATO, MENU_URL } from "@/data/info";
import { useStatusAberto } from "@/hooks/use-status-aberto";

function SeloStatus() {
  const status = useStatusAberto();
  if (!status) return null;

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-verde-card/70 px-3 py-1.5 text-xs text-creme backdrop-blur">
      <span
        className="size-2 rounded-full"
        style={{
          background: status.aberto ? "var(--color-italia-verde)" : "var(--color-italia-verm)",
          boxShadow: status.aberto ? "0 0 0 4px oklch(0.55 0.15 155 / 0.18)" : undefined,
        }}
      />
      {status.texto}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
      style={{ background: "var(--color-background)" }}
    >
      {/* Vinheta de profundidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 30%, oklch(0.28 0.05 158 / 0.55) 0%, transparent 62%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col gap-10 px-5 pt-24 pb-14 lg:flex-row lg:items-center lg:gap-14 lg:px-16 lg:pt-28 lg:pb-20">
        {/* COLUNA ESQUERDA — texto */}
        <div className="min-w-0 flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-ouro/10 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.28em] text-ouro uppercase lg:text-xs">
            <span className="inline-block size-1.5 rounded-full bg-ouro" />
            Sobral · CE · Dal 2017
          </span>

          {/* Imagem mobile */}
          <div className="mt-5 mb-6 aspect-16/10 w-full overflow-hidden rounded-2xl bg-verde-medio lg:hidden">
            <img
              src={fachada}
              alt="Bocca Felice — fachada do restaurante em Sobral"
              className="size-full object-cover"
              style={{ objectPosition: "center 55%" }}
            />
          </div>

          <h1 className="mt-6 font-display font-bold" style={{ letterSpacing: "-0.02em" }}>
            <span
              className="block text-creme"
              style={{ fontSize: "clamp(2rem, 5.6vw, 3.6rem)", lineHeight: 1.05 }}
            >
              Desde 2017 trazendo
            </span>
            <em
              className="mt-1 block font-script text-ouro not-italic"
              style={{ fontSize: "clamp(2.1rem, 6.4vw, 4.4rem)", fontWeight: 400, lineHeight: 1.15 }}
            >
              a Itália para Sobral
            </em>
          </h1>

          <div className="filete-ouro mt-6" />

          <p
            className="mt-5 max-w-[38ch] text-creme-muted"
            style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)", lineHeight: 1.7 }}
          >
            Massas artesanais frescas, Verace Pizza Napoletana com fermentação de 48h e um
            ambiente que remete às cantinas de Nápoles, aqui em Sobral.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={CONTATO.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full bg-ouro px-8 py-3.5 text-center text-sm font-semibold text-verde shadow-ouro transition-all hover:-translate-y-0.5 hover:bg-ouro-claro sm:w-auto"
            >
              Peça pelo WhatsApp
            </a>
            <a
              href={MENU_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-full border border-border px-8 py-3.5 text-center text-sm font-semibold text-creme transition-all hover:-translate-y-0.5 hover:border-ouro hover:bg-creme/5 sm:w-auto"
            >
              Ver Cardápio
            </a>
          </div>

          {/* Prova social + status */}
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="inline-flex items-center gap-2 text-sm text-creme-muted">
              <span className="flex items-center gap-0.5 text-ouro">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </span>
              <strong className="font-semibold text-creme">4,8</strong>
              no Google · +1.200 avaliações
            </span>
            <SeloStatus />
          </div>
        </div>

        {/* COLUNA DIREITA — imagem desktop */}
        <div className="relative hidden w-[46%] max-w-[500px] shrink-0 lg:block">
          {/* Badge topo-esquerdo */}
          <div
            className="absolute top-6 -left-12 z-10 flex items-center gap-2 rounded-full border border-border bg-verde-card px-4 py-2.5 text-sm font-medium whitespace-nowrap text-creme"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
              animation: "floatY 4s ease-in-out infinite",
            }}
          >
            <Pizza className="size-4 text-ouro" />
            Verace Pizza Napoletana
          </div>

          <div
            className="aspect-3/4 w-full overflow-hidden rounded-[2.5rem] bg-verde-medio"
            style={{ boxShadow: "0 32px 80px rgba(13,31,23,0.4)" }}
          >
            <img
              src={fachada}
              alt="Fachada do Bocca Felice à noite, com mesas na calçada"
              className="size-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </div>

          {/* Badge chef — canto inferior esquerdo, longe do texto da foto */}
          <div
            className="absolute -bottom-6 -left-10 z-10 flex items-center gap-3 rounded-full border border-border bg-verde-card py-2.5 pr-5 pl-2.5"
            style={{
              boxShadow: "0 8px 32px rgba(0,0,0,0.28)",
              animation: "floatY 4s ease-in-out 1.5s infinite",
            }}
          >
            <img
              src={chefThyago}
              alt="Chef Thyago Lopes"
              className="size-9 shrink-0 rounded-full object-cover"
            />
            <span className="leading-tight">
              <span className="block text-sm font-semibold text-creme">Chef Thyago Lopes</span>
              <span className="block text-xs text-creme-muted">{CONTATO.instagramHandle}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
