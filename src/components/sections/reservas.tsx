import { CONTATO } from "@/data/info";

export function Reservas() {
  return (
    <section
      id="reservas"
      className="py-14 text-center lg:py-28"
      style={{ background: "var(--gradient-ouro)" }}
    >
      <div className="mx-auto max-w-3xl px-5">
        <div className="mx-auto mb-6 h-px w-10 bg-verde/50" />
        <h2 className="font-display text-3xl leading-tight font-bold text-verde lg:text-5xl">
          Pronto para sua
          <br />
          próxima experiência?
        </h2>
        <p className="mt-4 text-sm text-verde/75">
          Venha viver a gastronomia italiana em Sobral.
        </p>
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href={CONTATO.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full bg-branco px-7 py-3.5 text-sm font-semibold text-verde transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Reservar Mesa
          </a>
          <a
            href={CONTATO.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border-2 border-branco/60 px-7 py-3.5 text-sm font-semibold text-branco transition-colors hover:border-branco hover:bg-branco/10 sm:w-auto"
          >
            Ver no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
