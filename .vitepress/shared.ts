import { defineConfig } from 'vitepress'
export const shared = defineConfig({
    titleTemplate: " NoxAPI",
    title: "NoxAPI",

    rewrites: {
        'fr/:rest*': ':rest*'
    },

    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,

    markdown: {
        math: true,
        codeTransformers: [
            {
                postprocess(code) {
                    return code.replace(/\[\!\!code/g, '[!code')
                }
            }
        ],
        container: {
            tipLabel: 'Astuce',
            warningLabel: 'Attention',
            dangerLabel: 'Danger',
            infoLabel: 'Info',
            detailsLabel: 'Détails',
        }
    },

    sitemap: {
        hostname: 'https://nox.hactazia.fr',
        transformItems(items) {
            return items.filter((item) => !item.url.includes('migration'))
        }
    },

    /* prettier-ignore */
    head: [
        ['link', { rel: 'icon', href: '/favicon.png' }],
        ['meta', { name: 'theme-color', content: '#511664' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: 'fr' }],
        ['meta', { property: 'og:title', content: 'NoxAPI | An API for creating federated game platforms' }],
        ['meta', { property: 'og:site_name', content: 'NoxAPI' }],
        ['meta', { property: 'og:url', content: 'https://nox.hactazia.fr/' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' }],
    ],

    themeConfig: {
        logo: {
            dark: "/logo.png",
            light: "/logo-light.png"
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/AtelierVR" },
            { icon: "twitter", link: "https://twitter.com/AtelierVR" },
        ],
        search: {
            provider: 'local'
        }
    }
})