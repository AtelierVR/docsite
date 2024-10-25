
import { defineConfig, type DefaultTheme } from 'vitepress'

import pkg from '../../package.json'  with { type: "json" }

export const fr = defineConfig({
    lang: 'fr-FR',
    description: 'Une API pour créer des plateformes de jeux fédérées.',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/guide/': { base: '/guide/', items: sidebarGuide() },
            '/reference/': { base: '/reference/', items: sidebarReference() }
        },

        editLink: {
            pattern: 'https://github.com/AtelierVR/docsite/edit/development/:path',
            text: 'Editer cette page sur GitHub'
        },

        footer: {
            message: 'Publié sous licence GPL-3.0.',
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            link: '/guide/what-is-nox',
            activeMatch: '/guide/'
        },
        {
            text: 'Référence',
            link: '/reference/where-to-start',
            activeMatch: '/reference/'
        },
        {
            text: pkg.version,
            items: [
                {
                    text: 'Changelog',
                    link: 'https://github.com/AtelierVR/docsite/blob/development/CHANGELOG.md'
                },
                {
                    text: 'Contributer',
                    link: 'https://github.com/AtelierVR/docsite/blob/development/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Introduction',
            collapsed: false,
            items: [
                { text: 'Qu\'est-ce que Nox ?', link: 'what-is-nox' },
                { text: 'Commencer', link: 'getting-started' },
                { text: 'Déployer', link: 'deploy' }
            ]
        },
        {
            text: 'Configuration & Références',
            base: '/reference/',
            link: 'where-to-start'
        }
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Reference',
            base: '/reference/',
            items: [
                { text: 'Où commencer', link: '/where-to-start' },
                {
                    text: 'Master',
                    link: 'introduction',
                    base: '/reference/master/',
                    items: [
                        {
                            text: 'API',
                            collapsed: false,
                            link: 'endpoints',
                            base: '/reference/master/api/',
                            items: [
                                {
                                    text: 'Serveur',
                                    collapsed: false,
                                    link: 'server',
                                    base: '/reference/master/api/server/',
                                    items: [
                                        { text: 'Informations', link: 'get' },
                                        { text: 'Well-Known', link: 'well-known' },
                                    ]
                                },
                                {
                                    text: 'Utilisateurs',
                                    collapsed: false,
                                    link: 'users',
                                    base: '/reference/master/api/users/',
                                    items: [
                                        { text: 'Informations', link: 'get' },
                                        { text: 'Rechercher', link: 'search' },
                                        { text: 'Mes Informations', link: 'me' },
                                        { text: 'Mettre à jour', link: 'update' }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Relais',
                    link: 'introduction',
                    base: '/reference/relay/',
                    items: []
                },
                {
                    text: 'AVR Client',
                    link: 'introduction',
                    base: '/reference/avr/',
                    items: []
                }

                // { text: 'Site Config', link: 'site-config' },
                // { text: 'Frontmatter Config', link: 'frontmatter-config' },
                // { text: 'Runtime API', link: 'runtime-api' },
                // { text: 'CLI', link: 'cli' },
                // {
                //     text: 'Default Theme',
                //     base: '/reference/default-theme-',
                //     items: [
                //         { text: 'Overview', link: 'config' },
                //         { text: 'Nav', link: 'nav' },
                //         { text: 'Sidebar', link: 'sidebar' },
                //         { text: 'Home Page', link: 'home-page' },
                //         { text: 'Footer', link: 'footer' },
                //         { text: 'Layout', link: 'layout' },
                //         { text: 'Badge', link: 'badge' },
                //         { text: 'Team Page', link: 'team-page' },
                //         { text: 'Prev / Next Links', link: 'prev-next-links' },
                //         { text: 'Edit Link', link: 'edit-link' },
                //         { text: 'Last Updated Timestamp', link: 'last-updated' },
                //         { text: 'Search', link: 'search' },
                //         { text: 'Carbon Ads', link: 'carbon-ads' }
                //     ]
                // }
            ]
        }
    ]
}