export const HORARIOS = [
  { dia: "Segunda", hora: "Fechado", fechado: true },
  { dia: "Terça", hora: "11h30 às 14h30 · 18h às 23h30", fechado: false },
  { dia: "Quarta", hora: "11h30 às 14h30 · 18h às 23h30", fechado: false },
  { dia: "Quinta", hora: "11h30 às 14h30 · 18h às 23h59", fechado: false },
  { dia: "Sexta", hora: "11h30 às 14h30 · 18h às 23h59", fechado: false },
  { dia: "Sábado", hora: "11h30 às 14h30 · 18h às 23h59", fechado: false },
  { dia: "Domingo", hora: "11h30 às 14h30 · 18h às 23h30", fechado: false },
] as const;

/**
 * Faixas de funcionamento em minutos a partir da meia-noite,
 * indexadas por getDay() (0 = domingo). Usado pelo selo "Aberto agora".
 */
export const FAIXAS: Record<number, [number, number][]> = {
  0: [[690, 870], [1080, 1410]],           // domingo  — 11h30-14h30 / 18h-23h30
  1: [],                                    // segunda  — fechado
  2: [[690, 870], [1080, 1410]],           // terça    — 11h30-14h30 / 18h-23h30
  3: [[690, 870], [1080, 1410]],           // quarta   — 11h30-14h30 / 18h-23h30
  4: [[690, 870], [1080, 1439]],           // quinta   — 11h30-14h30 / 18h-23h59
  5: [[690, 870], [1080, 1439]],           // sexta    — 11h30-14h30 / 18h-23h59
  6: [[690, 870], [1080, 1439]],           // sábado   — 11h30-14h30 / 18h-23h59
};

export const CONTATO = {
  endereco: "Av. Dom José Tupinambá da Frota, 907 - Centro, Sobral - CE, 62010-290",
  whatsapp: "https://wa.me/5588997041694",
  instagram: "https://instagram.com/boccafelicepastaepizza",
  instagramHandle: "@boccafelicepastaepizza",
  email: "boccafelicebistro@gmail.com",
  mapEmbed:
    "https://maps.google.com/maps?q=Bocca+Felice+Pasta+Pizza+Sobral+CE&output=embed",
};

export const MENU_URL =
  "https://boccafelice.saipos.com/bocca-felice-pasta-e-pizza/table/dtsxxtl";
