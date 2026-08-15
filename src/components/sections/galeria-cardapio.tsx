import { useState, useEffect, useRef } from "react";
import spaghettiNero from "@/assets/images/spaghetti-nero.jpeg";
import spaghettiAlfredo from "@/assets/images/spaghetti-alfredo.jpeg";
import frutosDomar from "@/assets/images/frutos-do-mar.jpeg";
import camaraoCreme from "@/assets/images/camarao-creme.jpeg";
import ravioli from "@/assets/images/ravioli.jpeg";
import tiramisu from "@/assets/images/tiramisu.jpeg";

const LINK_CARDAPIO =
  "https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl";

const PRATOS = [
  {
    img: spaghettiNero,
    tag: "Primo Piatto",
    nome: "Nero di Seppia",
    desc: "Massa artesanal ao nero di seppia, camarões salteados, tomatinhos confitados e ervas frescas.",
  },
  {
    img: spaghettiAlfredo,
    tag: "Secondo",
    nome: "Alfredo & Filé",
    desc: "Massa fresca ao molho alfredo, grana padano e filé mignon com redução de frutas vermelhas.",
  },
  {
    img: frutosDomar,
    tag: "Dal Mare",
    nome: "Pesce & Risotto",
    desc: "Peixe grelhado com creme de limão siciliano, servido com risoto cremoso e tomate confit.",
  },
  {
    img: camaraoCreme,
    tag: "Frutti di Mare",
    nome: "Gamberetti al Crème",
    desc: "Fettuccine artesanal, camarões ao molho cremoso, parmesão e ervas frescas.",
  },
  {
    img: ravioli,
    tag: "Pasta Ripiena",
    nome: "Ravioli Aperto",
    desc: "Ravioli aberto ao molho branco, ragù artesanal, tomate cereja e microgreens.",
  },
  {
    img: tiramisu,
    tag: "Dolci",
    nome: "Tiramisù Classico",
    desc: "Receita original com mascarpone, savoiardi, café espresso e cacau belga.",
  },
];

function useSlidesVisiveis() {
  const [n, setN] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setN(1);
      else if (window.innerWidth < 1024) setN(2);
      else setN(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return n;
}

export function GaleriaCardapio() {
  const slidesVisiveis = useSlidesVisiveis();
  const maxIndex = PRATOS.length - slidesVisiveis;

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerHovered, setContainerHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Garante que o índice não ultrapasse o máximo quando slidesVisiveis muda
  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, PRATOS.length - slidesVisiveis)));
  }, [slidesVisiveis]);

  const goNext = () => setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  const goPrev = () => setCurrent((c) => (c <= 0 ? maxIndex : c - 1));

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, maxIndex]);

  const slideWidth = `calc(100% / ${slidesVisiveis})`;
  const translateX = `translateX(-${current * (100 / slidesVisiveis)}%)`;

  return (
    <section id="galeria" style={{ background: "var(--verde)", padding: "5rem 0 4rem" }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", padding: "0 2rem", marginBottom: "3rem" }}>
        <span
          style={{
            color: "var(--ouro)",
            fontSize: "0.7rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          I Nostri Piatti
        </span>
        <h2
          className="font-display"
          style={{
            color: "var(--creme)",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 700,
            marginTop: "0.5rem",
          }}
        >
          Nossa{" "}
          <em className="font-script" style={{ fontStyle: "normal", color: "var(--ouro)" }}>
            Cucina
          </em>
        </h2>
        <p
          style={{
            color: "var(--creme-muted)",
            fontSize: "0.95rem",
            marginTop: "0.75rem",
            maxWidth: 480,
            margin: "0.75rem auto 0",
          }}
        >
          Ingredientes selecionados, técnicas tradicionais e muito amor em cada prato
        </p>
      </div>

      {/* CARROSSEL */}
      <div
        style={{ position: "relative", padding: "0 1.5rem" }}
        onMouseEnter={() => { setIsPaused(true); setContainerHovered(true); }}
        onMouseLeave={() => { setIsPaused(false); setContainerHovered(false); }}
      >
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: translateX,
            }}
          >
            {PRATOS.map((prato) => (
              <div
                key={prato.nome}
                style={{
                  flexShrink: 0,
                  width: slideWidth,
                  padding: "0 0.75rem",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    background: "var(--verde-card)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    height: "100%",
                  }}
                >
                  {/* Imagem */}
                  <div style={{ height: 260, overflow: "hidden" }}>
                    <img
                      src={prato.img}
                      alt={prato.nome}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                      }}
                    />
                  </div>

                  {/* Corpo do card */}
                  <div style={{ padding: "1.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ouro)",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {prato.tag}
                    </span>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: "var(--creme)",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {prato.nome}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--creme-muted)",
                        lineHeight: 1.65,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {prato.desc}
                    </p>

                    {/* Link */}
                    <div
                      style={{
                        borderTop: "1px solid var(--border)",
                        paddingTop: "1rem",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <a
                        href={LINK_CARDAPIO}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          color: "var(--ouro)",
                          textDecoration: "none",
                          letterSpacing: "0.05em",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          transition: "gap 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.gap = "0.6rem";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.gap = "0.3rem";
                        }}
                      >
                        VER CARDÁPIO →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seta esquerda */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Anterior"
          style={{
            position: "absolute",
            top: "40%",
            left: "0.25rem",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--verde-card)",
            border: "1px solid var(--border)",
            color: "var(--ouro)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: containerHovered ? 1 : 0,
            transition: "opacity 0.3s",
            fontSize: "1.1rem",
            zIndex: 10,
          }}
        >
          ‹
        </button>

        {/* Seta direita */}
        <button
          type="button"
          onClick={goNext}
          aria-label="Próximo"
          style={{
            position: "absolute",
            top: "40%",
            right: "0.25rem",
            transform: "translateY(-50%)",
            width: 44,
            height: 44,
            borderRadius: "50%",
            background: "var(--verde-card)",
            border: "1px solid var(--border)",
            color: "var(--ouro)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            opacity: containerHovered ? 1 : 0,
            transition: "opacity 0.3s",
            fontSize: "1.1rem",
            zIndex: 10,
          }}
        >
          ›
        </button>
      </div>

      {/* DOTS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          marginTop: "2.5rem",
        }}
      >
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir para posição ${i + 1}`}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: i === current ? 4 : "50%",
              background: i === current ? "var(--ouro)" : "oklch(0.75 0.11 88 / 0.3)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, opacity 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: "3rem", padding: "0 2rem" }}>
        <a
          href={LINK_CARDAPIO}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--ouro)",
            color: "var(--verde)",
            padding: "0.9rem 2.5rem",
            borderRadius: 9999,
            fontSize: "0.95rem",
            fontWeight: 700,
            textDecoration: "none",
            transition: "background 0.25s, transform 0.2s",
            boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--ouro-claro)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "var(--ouro)";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          🍝 Ver Cardápio Completo
        </a>
        <p style={{ color: "var(--creme-muted)", fontSize: "0.8rem", marginTop: "0.75rem" }}>
          Cardápio digital · Peça também pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
