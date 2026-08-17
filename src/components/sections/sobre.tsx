import { useState } from "react";
import { Play } from "lucide-react";
import chefThyago from "@/assets/images/chef-thyago.jpg";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-12 lg:mt-20">
      <div className="text-center">
        <Eyebrow>Nos bastidores</Eyebrow>
        <h3 className="mt-3 font-display text-3xl font-bold text-primary lg:text-4xl">
          A cozinha que faz a diferença
        </h3>
      </div>

      <div className="mx-auto mt-10" style={{ maxWidth: 800 }}>
        {!playing ? (
          <div
            onClick={() => setPlaying(true)}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "1rem",
              overflow: "hidden",
              cursor: "pointer",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Poster */}
            <img
              src="/videos/poster.jpg"
              alt="Vídeo institucional Bocca Felice"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(6, 15, 8, 0.42)",
              }}
            />

            {/* Badge topo-esquerdo */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                background: "rgba(13, 31, 20, 0.85)",
                border: "1px solid var(--color-border)",
                borderRadius: 9999,
                padding: "0.35rem 0.85rem",
                fontSize: "0.72rem",
                fontWeight: 500,
                color: "var(--color-creme)",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                zIndex: 2,
              }}
            >
              <Play className="size-3 fill-current text-ouro" />
              32s · Vídeo Institucional
            </div>

            {/* Botão play centralizado */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.95)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "20px solid var(--color-ouro)",
                    marginLeft: 4,
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <video
            controls
            autoPlay
            playsInline
            style={{
              width: "100%",
              aspectRatio: "16/9",
              borderRadius: "1rem",
              display: "block",
              border: "1px solid var(--color-border)",
            }}
          >
            <source src="/videos/institucional.mp4" type="video/mp4" />
          </video>
        )}
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
              className="aspect-4/5 w-full rounded-[1.5rem] object-cover shadow-elevado"
            />
            {/* Badge — contido dentro da imagem no mobile */}
            <div className="absolute right-2 -bottom-3 rounded-2xl border border-ouro bg-verde px-5 py-4 text-center shadow-elevado lg:-right-4 lg:-bottom-6">
              <strong className="block font-display text-2xl text-ouro">2017</strong>
              <span className="text-[0.65rem] tracking-[0.2em] text-creme/70 uppercase">
                Dal · Fundação
              </span>
            </div>
          </div>

          {/* Texto */}
          <div className="revelar" data-revelar>
            <Eyebrow>Nossa História</Eyebrow>
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold text-primary lg:text-5xl">
              Uma cozinha com alma{" "}
              <em className="font-script text-accent not-italic">italiana</em>
            </h2>
            <div className="filete-ouro mt-6" />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Desde 2017, o <strong className="text-primary">Bocca Felice</strong> construiu mais
              do que um restaurante. Criou uma cultura italiana no coração do Ceará, com público
              fiel, noites especiais e um ambiente que remete às cantinas de Nápoles.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Comandado pelo chef <strong className="text-primary">Thyago Lopes</strong>, dos
              queijos importados aos processos de cocção artesanal, tudo para que cada garfada
              valha a pena.{" "}
              <em className="text-accent">Mangia que te fa felice.</em>
            </p>
          </div>
        </div>

        {/* Bloco vídeo */}
        <VideoPlayer />
      </div>
    </section>
  );
}
