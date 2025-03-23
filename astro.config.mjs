// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import fs from "node:fs";

// https://astro.build/config
export default defineConfig({
  srcDir: "./src",
  output: "static",
  site: "https://williamhorning.eu.org/",
  build: {
    format: "preserve",
    inlineStylesheets: "never",
  },
  trailingSlash: "ignore",
  experimental: {
    contentIntellisense: true,
  },
  prefetch: false,
  integrations: [
    starlight({
      title: "lightning",
      titleDelimiter: "-",
      description: "documentation for lightning",
      disable404Route: true,
      logo: {
        src: "./public/assets/lightning/wordmark_white.svg",
        alt: "lightning",
        replacesTitle: true,
      },
      favicon: "/assets/lightning/logo_monocolor_dark.svg",
      head: [{
        tag: 'link',
        attrs: {
          rel: 'stylesheet',
          href: "/assets/docs.css"
        },
      }],
      components: {
        SiteTitle: "./src/components/DocsSiteTitle.astro",
        SocialIcons: "./src/components/Blank.astro",
        ThemeSelect: "./src/components/Blank.astro",
      },
      sidebar: [
        {
          label: "Lightning",
          collapsed: false,
          items: [
            {
              label: "About",
              slug: "lightning/about",
            },
            {
              label: "Bolt",
              link: "/bolt",
            },
            {
              label: "Github Repo",
              link: "https://github.com/williamhorning/bolt",
            },
            {
              label: "William Horning",
              link: "/",
            },
          ],
        },
        {
          label: "Users Guide",
          collapsed: false,
          items: [
            { label: "Start", slug: "lightning/users" },
            "lightning/users/commands",
            "lightning/users/settings",
          ],
        },
        {
          label: "Hosting",
          collapsed: false,
          items: [
            { label: "Start", slug: "lightning/hosting" },
            "lightning/hosting/database",
            "lightning/hosting/plugins",
            "lightning/hosting/configuration",
            "lightning/hosting/legacy-migrations",
            "lightning/hosting/deno",
            "lightning/hosting/docker",
          ],
        },
        {
          label: "Developers",
          collapsed: false,
          items: [
            { label: "Start", slug: "lightning/developer" },
            "lightning/developer/security",
          ],
        },
      ],
    }),
    mdx(),
    {
      name: "removeSitemap",
      hooks: {
        "astro:build:done"() {
          fs.rmSync("./dist/sitemap-0.xml");
          fs.rmSync("./dist/sitemap-index.xml");

          const files = fs.readdirSync("./dist/lightning");

          for (const file of files) {
            const path = `./dist/lightning/${file}`;
            const { isFile } = fs.statSync(path);

            if (isFile()) {
              const text = fs.readFileSync(path, { encoding: "utf-8" });

              fs.writeFileSync(
                path,
                text.replace(
                  '<link rel="sitemap" href="/sitemap-index.xml"/>',
                  ""
                )
              );
            } else {
              const subfiles = fs.readdirSync(path);

              for (const file2 of subfiles) {
                const path2 = `${path}/${file2}`;
                const { isFile } = fs.statSync(path2);

                if (isFile()) {
                  const text = fs.readFileSync(path2, { encoding: "utf-8" });

                  fs.writeFileSync(
                    path2,
                    text.replace(
                      '<link rel="sitemap" href="/sitemap-index.xml"/>',
                      ""
                    )
                  );
                }
              }
            }
          }
        },
      },
    },
  ],
  vite: {
    resolve: {
      alias: {
        fs: "node:fs",
        url: "node:url",
        path: "node:path",
      },
    },
  },
});
