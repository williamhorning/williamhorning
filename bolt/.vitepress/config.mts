import { defineConfig } from "vitepress";

export default defineConfig(
    {
        appearance: "dark",
        assetsDir: "assets",
        base: "/bolt",
        cleanUrls: true,
        description: "documentation for bolt",
        ignoreDeadLinks: true,
        lang: "en-US",
        head: [["link", { rel: "icon", href: "/bolt/favicon.ico" }]],
        title: "bolt",
        themeConfig: {
            logo: {
                src: "/logo.svg",
                alt: "bolt",
            },
            nav: [
                {
                    text: "Users Guide",
                    link: "https://williamhorning.eu.org/lightning/users/",
                },
                {
                    text: "Legal",
                    link: "/legal/",
                    activeMatch: "^/legal/",
                },
            ],
            search: {
                provider: "local",
            },
            socialLinks: [
                {
                    icon: "github",
                    link: "https://github.com/williamhorning/bolt",
                },
            ],
            notFound: {
                quote:
                    "Not all who wander are lost, but those who are can find their way back, or get struck by lightning.",
            },
        },
    },
);
