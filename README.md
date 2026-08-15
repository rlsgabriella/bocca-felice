# Bocca Felice — Cucina Italiana e Pizza Napoletana

Landing page do restaurante **Bocca Felice** em Sobral, CE.

## Como rodar

```bash
npm install
npm run dev
```

O servidor abre em `http://localhost:3000`.

> Requer Node.js 20+. Use `nvm use` na raiz do projeto (tem `.nvmrc`).

## Estrutura

```
src/
├── assets/images/        imagens do restaurante
├── components/
│   ├── layout/           nav e footer
│   └── sections/         uma seção por arquivo
├── data/                 dados do restaurante (cardápio, horários, depoimentos)
├── hooks/                use-reveal, use-mobile
└── routes/               TanStack Router
```

## Stack

- React 19 + TypeScript
- TanStack Router + TanStack Start (SSR)
- Tailwind CSS v4
- shadcn/ui (button, sonner)
- Lucide React
