import { MapPin, Phone, Instagram, Mail } from "lucide-react";
import { HORARIOS, CONTATO } from "@/data/info";
import { useStatusAberto } from "@/hooks/use-status-aberto";

function Eyebrow({ children }: { children: string }) {
  return (
    <span className="text-[0.7rem] tracking-[0.28em] text-accent uppercase">{children}</span>
  );
}

function ChipStatus() {
  const status = useStatusAberto();
  if (!status) return null;
  return (
    <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-verde-card px-3.5 py-2 text-xs text-creme">
      <span
        className="size-2 rounded-full"
        style={{
          background: status.aberto
            ? "var(--color-italia-verde)"
            : "var(--color-italia-verm)",
        }}
      />
      {status.texto}
    </span>
  );
}

export function Info() {
  return (
    <section id="info" className="bg-verde-medio py-16 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="revelar" data-revelar>
          <Eyebrow>Horários</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary lg:text-4xl">
            Horários de
            <br />
            <em className="font-script text-accent not-italic">funcionamento</em>
          </h2>
          <div style={{ display: 'flex', gap: '0', margin: '0.75rem 0 0', width: '84px' }}>
            <div style={{ flex: 1, height: '2.5px', background: '#009246', borderRadius: '1px 0 0 1px' }} />
            <div style={{ flex: 1, height: '2.5px', background: '#F4F5F0' }} />
            <div style={{ flex: 1, height: '2.5px', background: '#CE2B37', borderRadius: '0 1px 1px 0' }} />
          </div>
          <ChipStatus />
          <dl className="mt-6">
            {HORARIOS.map(({ dia, hora, fechado }) => (
              <div
                key={dia}
                className="flex items-center justify-between border-b border-border py-4 text-sm"
              >
                <dt className="text-muted-foreground">{dia}</dt>
                <dd className={fechado ? "font-medium text-destructive" : "font-bold text-primary"}>
                  {hora}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="revelar" data-revelar>
          <Eyebrow>Localização</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold text-primary lg:text-4xl">
            Como nos <em className="font-script text-accent not-italic">encontrar</em>
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-verde-card">
            <iframe
              title="Mapa — Bocca Felice, Sobral, Ceará"
              src={CONTATO.mapEmbed}
              loading="lazy"
              className="h-44 w-full grayscale-[0.3] lg:h-56"
            />
          </div>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {CONTATO.endereco}
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-accent" />
              <a
                href={CONTATO.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                (88) 99704-1694 — WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 shrink-0 text-accent" />
              <a
                href={`mailto:${CONTATO.email}`}
                className="text-muted-foreground hover:text-accent"
              >
                {CONTATO.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Instagram className="size-4 shrink-0 text-accent" />
              <a
                href={CONTATO.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-accent"
              >
                {CONTATO.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
