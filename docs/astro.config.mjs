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
      description: "Minicurso de React e Typescript: criando um jogo do gênero idle-clicker.",
      locales: {
        root: {
          label: "Português",
          lang: "pt",
        },
      },
      sidebar: [
        {
          label: "Introdução",
          slug: "introduction",
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
