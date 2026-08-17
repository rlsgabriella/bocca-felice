export const HORARIOS = [
  { dia: "Segunda", hora: "Fechado", fechado: true },
  { dia: "Terça", hora: "11h30 às 14h30 · 18h às 23h45", fechado: false },
  { dia: "Quarta", hora: "11h30 às 23h", fechado: false },
  { dia: "Quinta", hora: "11h às 14h30 · 18h às 23h45", fechado: false },
  { dia: "Sexta", hora: "11h30 às 14h30 · 18h às 00h", fechado: false },
  { dia: "Sábado", hora: "11h30 às 14h30 · 18h às 00h", fechado: false },
  { dia: "Domingo", hora: "11h30 às 14h30 · 18h às 23h45", fechado: false },
] as const;

/**
 * Faixas de funcionamento em minutos a partir da meia-noite,
 * indexadas por getDay() (0 = domingo). Usado pelo selo "Aberto agora".
 */
export const FAIXAS: Record<number, [number, number][]> = {
  0: [[690, 870], [1080, 1425]],           // domingo
  1: [],                                    // segunda — fechado
  2: [[690, 870], [1080, 1425]],           // terça
  3: [[690, 1380]],                         // quarta
  4: [[660, 870], [1080, 1425]],           // quinta
  5: [[690, 870], [1080, 1440]],           // sexta
  6: [[690, 870], [1080, 1440]],           // sábado
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
