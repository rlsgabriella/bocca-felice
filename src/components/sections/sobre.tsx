import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useVideoVisibility } from "@/hooks/useVideoVisibility";
import chefThyago from "@/assets/images/chef-thyago.jpg";
import video360 from "@/assets/images/BOCA_FELICE_web.mp4";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="font-display italic text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

function InstitucionalVideo() {
  const videoRef = useVideoVisibility({ threshold: 0.5, resumeOnVisible: true });
  return (
    <video
      ref={videoRef}
      controls
      autoPlay
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    >
      <source src="/videos/institucional.mp4" type="video/mp4" />
    </video>
  );
}

function Video360() {
  const videoRef = useVideoVisibility({ threshold: 0.5 });
  return (
    <video
      ref={videoRef}
      src={video360}
      controls
      playsInline
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
      }}
    />
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const isMobile = useIsMobile();

  return (
    <div style={{
      marginTop: "4rem",
      background: "rgba(0,0,0,0.15)",
      borderRadius: "1.5rem",
      padding: isMobile ? "2.5rem 1.25rem" : "4rem 3rem",
      border: "1px solid rgba(201,168,76,0.12)",
    }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Eyebrow>Nos bastidores</Eyebrow>
          <h3 className="mt-3 font-display text-[1.75rem] font-bold text-primary lg:text-[2.1rem]">
            A cozinha que faz a diferença
          </h3>
        </div>

        {/* Grid 2 colunas */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1.5rem",
          alignItems: "start",
        }}>
          {/* COLUNA ESQUERDA — Vídeo Institucional */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{
              background: "rgba(0,0,0,0.25)",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              border: "1px solid rgba(201,168,76,0.2)",
            }}>
              <span style={{
                color: "var(--ouro)", fontSize: "0.7rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              }}>
                🎬 Vídeo Institucional
              </span>
            </div>

            <div style={{
              width: "100%",
              height: isMobile ? "260px" : "380px",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)",
            }}>
              {!playing ? (
                <div
                  onClick={() => setPlaying(true)}
                  style={{ position: "absolute", inset: 0, cursor: "pointer" }}
                >
                  {/* Poster */}
                  <img
                    src="/videos/poster.jpg"
                    alt="Vídeo institucional Bocca Felice"
                    style={{
                      position: "absolute", inset: 0,
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                    }}
                  />
                  {/* Overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "rgba(6, 15, 8, 0.42)" }} />
                  {/* Badge */}
                  <div style={{
                    position: "absolute", top: "1rem", left: "1rem",
                    background: "rgba(13, 31, 20, 0.85)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 9999,
                    padding: "0.35rem 0.85rem",
                    fontSize: "0.72rem", fontWeight: 500,
                    color: "var(--color-creme)",
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    zIndex: 2,
                  }}>
                    ▶ 32s · Vídeo Institucional
                  </div>
                  {/* Play button */}
                  <div style={{
                    position: "absolute", inset: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    zIndex: 2,
                  }}>
                    <div
                      style={{
                        width: 72, height: 72, borderRadius: "50%",
                        background: "rgba(255,255,255,0.95)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.45)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.35)";
                      }}
                    >
                      <div style={{
                        width: 0, height: 0,
                        borderTop: "12px solid transparent",
                        borderBottom: "12px solid transparent",
                        borderLeft: "20px solid var(--color-ouro)",
                        marginLeft: 4,
                      }} />
                    </div>
                  </div>
                </div>
              ) : (
                <InstitucionalVideo />
              )}
            </div>

            <p style={{
              fontSize: "0.8rem", color: "var(--creme-muted)",
              textAlign: "center", fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
            }}>
              Conheça a nossa história
            </p>
          </div>

          {/* COLUNA DIREITA — Vídeo 360° */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <div style={{
              background: "rgba(0,0,0,0.25)",
              borderRadius: "1rem",
              padding: "1rem 1.25rem",
              border: "1px solid rgba(201,168,76,0.2)",
            }}>
              <span style={{
                color: "var(--ouro)", fontSize: "0.7rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                fontFamily: "'Playfair Display', serif", fontStyle: "italic",
              }}>
                🎥 Nosso Restaurante
              </span>
            </div>

            <div style={{
              width: "100%",
              height: isMobile ? "260px" : "380px",
              borderRadius: "1rem",
              overflow: "hidden",
              position: "relative",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.15)",
            }}>
              <Video360 />
            </div>

            <p style={{
              fontSize: "0.8rem", color: "var(--creme-muted)",
              textAlign: "center", fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
            }}>
              Conheça nosso restaurante por dentro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Sobre() {
  return (
    <section id="sobre" className="bg-verde-medio py-16 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        {/* Grid 2 colunas */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Imagem principal: chef-thyago */}
          <div className="revelar relative" data-revelar>
            <img
              src={chefThyago}
              alt="Chef Thyago Lopes no Bocca Felice"
              width={1008}
              height={1260}
              loading="lazy"
              className="aspect-4/5 w-full rounded-[1.5rem] object-cover"
              style={{ boxShadow: "0 12px 32px rgba(201, 168, 76, 0.25), 0 4px 12px rgba(201, 168, 76, 0.15)" }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              borderRadius: "1.5rem",
              background: "linear-gradient(135deg, rgba(201, 168, 76, 0.12) 0%, rgba(201, 168, 76, 0.08) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }} />
            <div className="absolute right-2 -bottom-3 rounded-2xl border border-ouro bg-verde px-5 py-4 text-center shadow-elevado lg:-right-4 lg:-bottom-6" style={{ zIndex: 2 }}>
              <strong className="block font-display text-[1.4rem] text-ouro">2017</strong>
              <span className="text-[0.65rem] tracking-[0.2em] text-creme/70 uppercase">
                Dal · Fundação
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="revelar" data-revelar>
            <Eyebrow>Nossa História</Eyebrow>
            <h2 className="mt-4 font-display text-[1.75rem] leading-tight font-bold text-primary lg:text-[2.1rem]">
              Uma cozinha com alma{" "}
              <em className="font-script text-accent not-italic" style={{ fontSize: "1.15em" }}>italiana</em>
            </h2>
            <div style={{ display: "flex", gap: "3px", marginTop: "1.5rem" }}>
              <div style={{ width: 28, height: 3, borderRadius: 1, background: "#009246" }} />
              <div style={{ width: 28, height: 3, borderRadius: 1, background: "#F4F5F0", opacity: 0.8 }} />
              <div style={{ width: 28, height: 3, borderRadius: 1, background: "#CE2B37" }} />
            </div>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Desde 2017, o <strong className="text-primary">Bocca Felice</strong> construiu mais
              do que um restaurante. Criou uma cultura italiana no coração do Ceará, com público
              fiel, noites especiais e um ambiente que remete às cantinas de Nápoles.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Comandado pelo chef <strong className="text-primary">Thyago Lopes</strong>, dos
              queijos importados aos processos de cocção artesanal, tudo para que cada garfada
              valha a pena.{" "}
              <em className="font-display italic">Mangia que te fa felice. 🤌</em>
            </p>
          </div>
        </div>

        {/* Bloco vídeo */}
        <VideoPlayer />
      </div>
    </section>
  );
}
