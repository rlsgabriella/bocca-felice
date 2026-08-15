import { CONTATO } from "@/data/info";

export function Reservas() {
  return (
    <section
      id="reservas"
      className="py-24 text-center lg:py-28"
      style={{ background: "var(--gradient-ouro)" }}
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-6 h-px w-10 bg-verde/50" />
        <h2 className="font-display text-4xl leading-tight font-bold text-verde lg:text-5xl">
          Pronto para sua
          <br />
          próxima experiência?
        </h2>
        <p className="mt-4 text-sm text-verde/75">
          Viva uma experiência gastronômica italiana inesquecível em Sobral.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-branco px-7 py-3.5 text-sm font-semibold text-verde transition-transform hover:-translate-y-0.5"
          >
            Reservar Mesa
          </a>
          <a
            href={CONTATO.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-branco/60 px-7 py-3.5 text-sm font-semibold text-branco transition-colors hover:border-branco hover:bg-branco/10"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
