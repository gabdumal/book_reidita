// @ts-check
import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  base: "book_reidita/",
  integrations: [
    starlight({
      customCss: ["./src/tailwind.css"],
      defaultLocale: "root",
      description:
        "Minicurso de React e Typescript: criando um jogo do gênero Idle Clicker.",
      locales: {
        root: {
          label: "Português",
          lang: "pt",
        },
      },
      sidebar: [
        {
          items: [
            { label: "Introdução", slug: "introduction" },
            {
              label: "Páginas na Web",
              slug: "introduction/web",
            },
            {
              label: "Tecnologias modernas",
              slug: "introduction/modern",
            },
          ],
          label: "Introdução",
        },
        {
          items: [
            {
              label: "Objetivo",
              slug: "course",
            },
            {
              label: "Instalação",
              slug: "course/installation",
            },
            {
              label: "Componentes",
              slug: "course/components",
            },
            {
              label: "Propriedades",
              slug: "course/properties",
            },
          ],
          label: "Curso",
        },
      ],
      social: {
        github: "https://github.com/gabdumal/book_reidita",
      },
      title: "Reidita",
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  site: "https://gabdumal.github.io",
});
