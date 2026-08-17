import { useState, useEffect, useRef, useCallback } from "react";
import { UtensilsCrossed } from "lucide-react";
import { useSwipe } from "@/hooks/use-swipe";
import gamberiParmegi from "@/assets/images/gamberi-parmegi-1.jpeg";
import filettoAlfredo from "@/assets/images/filetto-alfredo-1.jpeg";
import sacotine from "@/assets/images/sacotine-carne-sol.jpeg";
import risottoSalmone from "@/assets/images/risotto-salmone.jpeg";
import gamberiNero from "@/assets/images/gamberi-nero-1.jpeg";
import tiramisu from "@/assets/images/tiramisu-1.jpeg";
import fruttiRossi from "@/assets/images/frutti-rossi-1.jpg";

const LINK_CARDAPIO =
  "https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl";

const PRATOS = [
  {
    img: gamberiParmegi,
    tag: "Massas",
    nome: "Gamberi Parmegi",
    desc: "Camarões selados, servidos com fettuccine ao molho de sua escolha (bechamel ou pomodoro), finalizado com parmesão vigor e salsinha.",
  },
  {
    img: filettoAlfredo,
    tag: "Massas",
    nome: "Filetto Alfredo",
    desc: "Medalhões de filé mignon com redução de vinho tinto, fettuccine estilo Alfredo, fonduta de bechamel e parmesão vigor.",
  },
  {
    img: sacotine,
    tag: "Massas",
    nome: "Sacotine de Carne do Sol Caramelizada",
    desc: "Massa artesanal recheada com carne do sol, queijo coalho e cebola caramelizada, sobre fonduta de parmesão, molho trufado e azeite de ervas.",
  },
  {
    img: risottoSalmone,
    tag: "Frutos do Mar",
    nome: "Risotto Salmone Siciliano",
    desc: "Risoto flambado ao vinho branco, emulsão de parmesão e manteiga com toque de limão siciliano, salmão em posta selado no azeite e crispy de alho poró.",
  },
  {
    img: gamberiNero,
    tag: "Especial",
    nome: "Gamberi Nero di Sépia",
    desc: "Camarões selados e flambados ao vinho branco, spaghetti nero di sépia, toque de bechamel e parmesão, tomates cerejas confeitados.",
  },
  {
    img: tiramisu,
    tag: "Sobremesas",
    nome: "Tiramisù",
    desc: "Camadas de creme de mascarpone e biscoito embebido em café e marsala, finalizado com cacau em pó.",
  },
  {
    img: fruttiRossi,
    tag: "Sobremesas",
    nome: "Frutti Rossi in Crema",
    desc: "Sobremesa em taça com camadas de creme e calda de frutas vermelhas (framboesa, amora, mirtilo), guarnecida com frutas frescas.",
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
  const isMobile = slidesVisiveis === 1;
  const maxIndex = PRATOS.length - slidesVisiveis;

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [containerHovered, setContainerHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, PRATOS.length - slidesVisiveis)));
  }, [slidesVisiveis]);

  const goNext = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex]);
  const goPrev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex]);
  const { handlers: swipeHandlers, isDragging, deltaX } = useSwipe(goNext, goPrev);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(goNext, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, maxIndex]);

  const slideWidth = `calc(100% / ${slidesVisiveis})`;
  const translateX = `translateX(-${current * (100 / slidesVisiveis)}%)`;

  const sectionPadding = isMobile ? "4rem 0" : "7rem 0";
  const headerPadding = isMobile ? "0 1.25rem" : "0 2rem";

  return (
    <section id="galeria" style={{ background: "var(--verde)", padding: sectionPadding }}>
      {/* HEADER */}
      <div style={{ textAlign: "center", padding: headerPadding, marginBottom: isMobile ? "2rem" : "3rem" }}>
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
            fontSize: "clamp(1.75rem, 6vw, 2.8rem)",
            fontWeight: 700,
            marginTop: "0.5rem",
          }}
        >
          Nossa{" "}
          <em className="font-script" style={{ fontStyle: "normal", color: "var(--ouro)" }}>
            Cucina
          </em>
        </h2>
        <div style={{ display: 'flex', gap: '0', margin: '0.75rem auto 0', width: '84px' }}>
          <div style={{ flex: 1, height: '2.5px', background: '#009246', borderRadius: '1px 0 0 1px' }} />
          <div style={{ flex: 1, height: '2.5px', background: '#F4F5F0' }} />
          <div style={{ flex: 1, height: '2.5px', background: '#CE2B37', borderRadius: '0 1px 1px 0' }} />
        </div>
        <p
          style={{
            color: "var(--creme-muted)",
            fontSize: "0.95rem",
            marginTop: "0.75rem",
            maxWidth: 480,
            margin: "0.75rem auto 0",
          }}
        >
          Ingredientes importados, técnicas italianas e dedicação em cada prato
        </p>
      </div>

      {/* CARROSSEL */}
      <div
        style={{ position: "relative", padding: "0 1.5rem" }}
        onMouseEnter={() => { setIsPaused(true); setContainerHovered(true); }}
        onMouseLeave={() => { setIsPaused(false); setContainerHovered(false); }}
      >
        <div
          style={{ overflow: "hidden", touchAction: "pan-y" }}
          onTouchStart={(e) => { setIsPaused(true); swipeHandlers.onTouchStart(e); }}
          onTouchMove={swipeHandlers.onTouchMove}
          onTouchEnd={() => { setIsPaused(false); swipeHandlers.onTouchEnd(); }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              transition: isDragging ? "none" : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transform: isDragging
                ? `translateX(calc(-${current * (100 / slidesVisiveis)}% + ${deltaX}px))`
                : translateX,
            }}
          >
            {PRATOS.map((prato, i) => (
              <div
                key={i}
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
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* Imagem */}
                  <div style={{ height: "260px", overflow: "hidden", flexShrink: 0 }}>
                    <img
                      src={prato.img}
                      alt={prato.nome}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.06)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                    />
                  </div>

                  {/* Corpo do card */}
                  <div style={{ display: "flex", flexDirection: "column", flex: 1, padding: "1.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--ouro)",
                        display: "block",
                        marginBottom: "0.5rem",
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
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
                        flex: 1,
                      }}
                    >
                      {prato.desc}
                    </p>

                    {/* Link */}
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "1rem",
                        borderTop: "1px solid var(--border)",
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

        {/* Seta esquerda — oculta no mobile */}
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
            display: isMobile ? "none" : "flex",
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

        {/* Seta direita — oculta no mobile */}
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
            display: isMobile ? "none" : "flex",
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

      {/* DOTS — área de toque 32×32px */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "0.25rem",
          marginTop: "2rem",
        }}
      >
        {Array.from({ length: maxIndex + 1 }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Ir para posição ${i + 1}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span
              style={{
                display: "block",
                width: i === current ? 24 : 8,
                height: 8,
                borderRadius: i === current ? 4 : "50%",
                background: i === current ? "var(--ouro)" : "oklch(0.75 0.11 88 / 0.3)",
                transition: "width 0.3s ease",
              }}
            />
          </button>
        ))}
      </div>

      {/* CTA — largura total no mobile */}
      <div style={{ textAlign: "center", marginTop: "2.5rem", padding: headerPadding }}>
        <a
          href={LINK_CARDAPIO}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            width: isMobile ? "100%" : "auto",
            background: "var(--ouro)",
            color: "var(--verde)",
            padding: "0.9rem 2.5rem",
            borderRadius: 9999,
            fontSize: "0.95rem",
            fontWeight: 700,
            textDecoration: "none",
            transition: "background 0.25s, transform 0.2s",
            boxShadow: "0 4px 20px rgba(201,168,76,0.3)",
            boxSizing: "border-box",
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
          <UtensilsCrossed style={{ width: 18, height: 18 }} />
          Ver Cardápio Completo
        </a>
        <p style={{ color: "var(--creme-muted)", fontSize: "0.8rem", marginTop: "0.75rem" }}>
          Cardápio digital · Peça também pelo WhatsApp
        </p>
      </div>
    </section>
  );
}
