import { Star } from "lucide-react";
import fachada from "@/assets/images/restaurante-fachada.jpeg";
import chefThyago from "@/assets/images/chef-thyago.jpg";
import { CONTATO, MENU_URL } from "@/data/info";

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
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Eyebrow */}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "clamp(0.6rem, 1.5vw, 0.75rem)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--color-ouro)",
              fontWeight: 600,
              background: "oklch(0.75 0.11 88 / 0.1)",
              border: "1px solid var(--color-border)",
              borderRadius: 9999,
              padding: "0.35rem 0.85rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--color-ouro)",
                display: "inline-block",
              }}
            />
            Sobral · CE · <em style={{ fontStyle: "italic" }}>Dal 2017</em>
          </span>

          {/* Imagem mobile */}
          <div className="mt-5 mb-6 aspect-16/10 w-full overflow-hidden rounded-2xl bg-verde-medio lg:hidden" style={{ boxShadow: "0 12px 32px rgba(201, 168, 76, 0.25), 0 4px 12px rgba(201, 168, 76, 0.15)" }}>
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
              style={{ fontSize: "clamp(1.48rem, 4.6vw, 2.75rem)", lineHeight: 1.05 }}
            >
              Desde 2017 trazendo
            </span>
            <em
              className="mt-1 block font-script text-ouro not-italic"
              style={{ fontSize: "clamp(1.65rem, 5vw, 3.1rem)", fontWeight: 400, lineHeight: 1.15 }}
            >
              a Itália para Sobral
            </em>
          </h1>

          <div style={{ display: 'flex', gap: '0', margin: '0.75rem 0 0', width: '84px' }}>
            <div style={{ flex: 1, height: '2.5px', background: '#009246', borderRadius: '1px 0 0 1px' }} />
            <div style={{ flex: 1, height: '2.5px', background: '#F4F5F0' }} />
            <div style={{ flex: 1, height: '2.5px', background: '#CE2B37', borderRadius: '0 1px 1px 0' }} />
          </div>

          <p
            className="font-display italic"
            style={{
              marginTop: "1.25rem",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "var(--color-creme-muted)",
            }}
          >
            Massas artesanais, Verace Pizza Napoletana com fermentação de 48h
            e um ambiente que remete às cantinas de Nápoles, aqui em Sobral.
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

          {/* Prova social */}
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
          </div>
        </div>

        {/* COLUNA DIREITA — imagem desktop */}
        <div className="relative hidden w-[42%] max-w-[480px] shrink-0 lg:block">
          {/* Badge topo-esquerdo */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "-3.5rem",
              zIndex: 10,
              background: "rgba(22, 56, 41, 0.92)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "9999px",
              padding: "0.65rem 1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              whiteSpace: "nowrap",
              animation: "floatY 4s ease-in-out infinite",
            }}
          >
            <span style={{ fontSize: "0.85rem" }}>🌿</span>
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--creme)" }}>
              Ingredientes importados da Itália
            </span>
          </div>

          <div
            className="aspect-3/4 w-full overflow-hidden rounded-[2.5rem] bg-verde-medio"
            style={{ boxShadow: "0 32px 80px rgba(13,31,23,0.4), 0 12px 32px rgba(201, 168, 76, 0.25), 0 4px 12px rgba(201, 168, 76, 0.15)" }}
          >
            <img
              src={fachada}
              alt="Fachada do Bocca Felice à noite, com mesas na calçada"
              className="size-full object-cover"
              style={{ objectPosition: "center 40%" }}
            />
          </div>

          {/* Badge chef — canto inferior direito */}
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              right: "-3rem",
              zIndex: 10,
              background: "rgba(22, 56, 41, 0.92)",
              border: "1px solid rgba(201,168,76,0.3)",
              borderRadius: "9999px",
              padding: "0.65rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              whiteSpace: "nowrap",
              animation: "floatY 4s ease-in-out 1.5s infinite",
            }}
          >
            <img
              src={chefThyago}
              alt="Chef Thyago Lopes"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
                border: "1.5px solid rgba(201,168,76,0.4)",
              }}
            />
            <div>
              <div style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--creme)", lineHeight: 1.2 }}>
                Chef Thyago Lopes
              </div>
              <a
                href="https://instagram.com/thyagom_lopes"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "0.68rem", color: "rgba(201,168,76,0.8)", textDecoration: "none" }}
              >
                @thyagom_lopes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
