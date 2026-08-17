import { useEffect, useState } from "react";
import { FAIXAS } from "@/data/info";

function formatar(min: number) {
  const h = Math.floor(min / 60) % 24;
  const m = min % 60;
  return m === 0 ? `${h}h` : `${h}h${String(m).padStart(2, "0")}`;
}

export type StatusAberto = { aberto: boolean; texto: string } | null;

/**
 * Calcula se o restaurante está aberto no horário de Sobral (UTC-3).
 * Retorna null no primeiro render para evitar mismatch de hidratação.
 */
export function useStatusAberto(): StatusAberto {
  const [status, setStatus] = useState<StatusAberto>(null);

  useEffect(() => {
    const calcular = () => {
      const agora = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Fortaleza" }),
      );
      const dia = agora.getDay();
      const minutos = agora.getHours() * 60 + agora.getMinutes();
      const faixas = FAIXAS[dia] ?? [];

      const atual = faixas.find(([ini, fim]) => minutos >= ini && minutos < fim);
      if (atual) {
        setStatus({ aberto: true, texto: `Aberto agora · fecha às ${formatar(atual[1])}` });
        return;
      }

      const proxima = faixas.find(([ini]) => minutos < ini);
      if (proxima) {
        setStatus({ aberto: false, texto: `Fechado · abre às ${formatar(proxima[0])}` });
        return;
      }

      setStatus({ aberto: false, texto: "Fechado agora · peça pelo WhatsApp" });
    };

    calcular();
    const id = setInterval(calcular, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
