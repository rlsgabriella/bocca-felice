import fachada from "@/assets/images/restaurante-fachada.jpeg";
import chefThyago from "@/assets/images/chef-thyago.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        overflow: "hidden",
      }}
    >
      {/* Inner wrapper */}
      <div
        className="mx-auto flex w-full flex-col px-5 pt-22 pb-12 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:pt-28 lg:pb-16"
        style={{ maxWidth: "1200px" }}
      >
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
            Sobral · CE · Dal 2017
          </span>

          {/* IMAGEM MOBILE — visível apenas abaixo de lg, entre eyebrow e h1 */}
          <div
            className="mt-5 block lg:hidden"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "1rem",
              overflow: "hidden",
              background: "var(--color-verde-medio)",
              marginBottom: "1.5rem",
            }}
          >
            <img
              src={fachada}
              alt="Bocca Felice — fachada do restaurante"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 65%",
              }}
            />
          </div>

          {/* H1 */}
          <h1
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 8vw, 4rem)",
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "var(--color-creme)",
            }}
          >
            Desde 2017 trazendo
            <em
              className="font-script"
              style={{
                display: "block",
                marginTop: "0.25rem",
                fontSize: "clamp(1.8rem, 7vw, 4.75rem)",
                fontStyle: "normal",
                fontWeight: 400,
                color: "var(--color-ouro)",
              }}
            >
              a Itália para Sobral
            </em>
          </h1>

          {/* Divisor */}
          <div
            style={{
              marginTop: "1.5rem",
              width: 48,
              height: 2,
              background: "linear-gradient(90deg, var(--color-ouro), transparent)",
              borderRadius: 2,
            }}
          />

          {/* Parágrafo */}
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              lineHeight: 1.7,
              color: "var(--color-creme-muted)",
            }}
          >
            Massas artesanais frescas, Verace Pizza Napoletana com fermentação de 48h
            e um ambiente que remete às cantinas de Nápoles, aqui em Sobral.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://wa.me/5588997041694"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center sm:w-auto"
              style={{
                borderRadius: 9999,
                background: "var(--color-ouro)",
                color: "var(--color-verde)",
                padding: "0.9rem 2rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-ouro-claro)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-ouro)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Peça pelo WhatsApp
            </a>
            <a
              href="https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center sm:w-auto"
              style={{
                borderRadius: 9999,
                border: "1px solid var(--color-border)",
                color: "var(--color-creme)",
                padding: "0.9rem 2rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
                background: "transparent",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Ver Cardápio
            </a>
          </div>
        </div>

        {/* COLUNA DIREITA — imagem desktop (hidden em mobile) */}
        <div
          className="hidden lg:block"
          style={{
            flexShrink: 0,
            width: "46%",
            maxWidth: "500px",
            position: "relative",
          }}
        >
          {/* Badge topo-esquerdo */}
          <div
            style={{
              position: "absolute",
              top: "1.5rem",
              left: "-3.5rem",
              zIndex: 10,
              background: "var(--color-verde-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 9999,
              padding: "0.65rem 1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              whiteSpace: "nowrap",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--color-creme)",
              animation: "floatY 4s ease-in-out infinite",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🍕</span>
            Verace Pizza Napoletana
          </div>

          {/* Container da imagem */}
          <div
            style={{
              width: "100%",
              aspectRatio: "3/4",
              borderRadius: "2.5rem",
              overflow: "hidden",
              background: "var(--color-verde-medio)",
              boxShadow: "0 32px 80px rgba(13,31,23,0.35)",
            }}
          >
            <img
              src={fachada}
              alt="Bocca Felice"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Badge baixo-direito */}
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              right: "-3rem",
              zIndex: 10,
              background: "var(--color-verde-card)",
              border: "1px solid var(--color-border)",
              borderRadius: 9999,
              padding: "0.65rem 1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              animation: "floatY 4s ease-in-out 1.5s infinite",
            }}
          >
            <img
              src={chefThyago}
              alt="Chef"
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "var(--color-creme)",
                  lineHeight: 1.2,
                }}
              >
                Chef Thyago Lopes
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--color-creme-muted)" }}>
                @boccafelicepastaepizza
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
