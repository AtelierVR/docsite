import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "fr-FR",
  titleTemplate: " Nox",
  title: "NoxAPI",
  description: "An API for creating federated game platforms.",
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
          { text: "Kit de Création de Contenu", link: "/docs/cck/" },
          {
            text: "Systèmes",
            items: [
              {
                text: "Master",
                link: "/docs/master/",
              },
              {
                text: "Relai",
                link: "/docs/relay/",
              },
              {
                text: "Client",
                link: "/docs/client/",
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
              { text: "Monde", link: "/docs/api/worlds/" },
              { text: "Avatar", link: "/docs/api/avatars" },
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
