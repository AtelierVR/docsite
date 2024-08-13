import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "fr-FR",
  titleTemplate: " Nox",
  title: "NoxAPI",
  description: "An API for creating federated game platforms.",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    logo: {
      dark: "/logo.png",
      light: "/logo-light.png"
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Acceuil", link: "/" },
      { text: "Documentation", link: "/docs/" },
    ],

    sidebar: [
      {
        text: "Documentation",
        items: [
          { text: "Introduction", link: "/docs/" },
          {
            text: "Kit de Création de Contenu",
            link: "/docs/cck/",
            items: [
              {
                text: "Introduction",
                link: "/docs/cck/",
              },
              {
                text: "Créer un monde",
                link: "/docs/cck/worlds",
              },
              {
                text: "Créer un avatar",
                link: "/docs/cck/avatars",
              },
              {
                text: "Créer un mod",
                link: "/docs/cck/modding",
                items: [
                  {
                    text: "Getting Started",
                    link: "/docs/cck/modding/getting-started",
                  }
                ]
              },
              {
                text: "Références du CCK",
                link: "/docs/cck/references",
              }
            ],
          },
          {
            text: "Reférence de l'API",
            link: "/docs/api/",
            items: [
              {
                text: "Typage général",
                link: "/docs/api/typing",
              },
              {
                text: `Well-Known Endpoints`,
                link: "/docs/api/well-known",
              },
              {
                text: "GET /server",
                link: "/docs/api/get-server",
              },
              {
                text: "Utilisateur",
                items: [
                  {
                    text: "Typage utilisateur",
                    link: "/docs/api/users/typing",
                  },
                  {
                    text: "Requêtes",
                    items: [
                      { text: "GET /:se", link: "/docs/api/users/get-user" },
                      { text: "GET /@me", link: "/docs/api/users/get-me" },
                      { text: "POST /@me", link: "/docs/api/users/update-me" },
                      {
                        text: "GET /:se/banner",
                        link: "/docs/api/users/get-banner",
                      },
                      {
                        text: "POST /@me/banner",
                        link: "/docs/api/users/update-me-banner",
                      },
                      {
                        text: "GET /:se/thumbnail",
                        link: "/docs/api/users/get-thumbnail",
                      },
                      {
                        text: "POST /@me/thumbnail",
                        link: "/docs/api/users/update-me-thumbnail",
                      },
                    ],
                  }
                ],
              },
              {
                text: "Instance",
                items: [
                  {
                    text: "Typage instance",
                    link: "/docs/api/instances/typing",
                  },
                  {
                    text: "Requêtes",
                    items: [
                      { text: "GET /:se", link: "/docs/api/instances/get" },
                      { text: "GET /search", link: "/docs/api/instances/search" },
                    ]
                  }
                ]
              },
              {
                text: "Monde",
                link: "/docs/api/worlds/",
                items: [
                  {
                    text: "Typage monde",
                    link: "/docs/api/worlds/typing",
                  },
                  {
                    text: "Requêtes",
                    items: [
                      { text: "PUT /", link: "/docs/api/worlds/make" },
                      { text: "GET /:se", link: "/docs/api/worlds/get" },
                      { text: "POST /:se", link: "/docs/api/worlds/update" },
                      { text: "GET /search", link: "/docs/api/worlds/search" },
                    ]
                  }
                ]
              },
              { text: "Avatar", link: "/docs/api/avatars" },
              {
                text: "Challenge",
                items: [
                  {
                    text: "Typage challenge",
                    link: "/docs/api/challenge/typing",
                  },
                  {
                    text: "Requêtes",
                    items: [
                      { text: "GET /verify", link: "/docs/api/challenge/verify" },
                    ]
                  }
                ],
              },
              {
                text: "Relai",
                items: [
                  {
                    text: "Typage relai",
                    link: "/docs/api/relay/typing",
                  },
                  {
                    text: "Requêtes",
                    items: [
                      { text: "POST /checkbearer", link: "/docs/api/relay/checkbearer" },
                      { text: "POST /update", link: "/docs/api/relay/update" },
                    ]
                  }
                ],
              }
            ],
          },
          {
            "text": "Reférence du protocole",
            "link": "/docs/protocol/"
          }
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/AtelierVR" },
      { icon: "twitter", link: "https://twitter.com/AtelierVR" },
    ],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the GPL-3.0 License'
    }
  },
});
