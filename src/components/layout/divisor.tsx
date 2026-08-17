/** Filete dourado que separa seções sem criar corte duro entre fundos. */
export function DivisorOuro() {
  return (
    <div aria-hidden className="relative h-px w-full overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.75 0.11 88 / 0.35) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
