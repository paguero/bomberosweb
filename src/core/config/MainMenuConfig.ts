export interface MenuItem {
  heading?: string;
  sectionTitle?: string;
  route?: string;
  pages?: Array<MenuItem>;
  keenthemesIcon?: string;
  bootstrapIcon?: string;
  sub?: Array<MenuItem>;
}

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Cotizaciones",
        route: "/apps/cotizacion/cotizacion-list",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
  /*{
    heading: "craft",
    route: "/crafted",
    pages: [
      {
        sectionTitle: "pages",
        route: "/pages",
        keenthemesIcon: "element-plus",
        bootstrapIcon: "bi-archive",
        sub: [
          {
            sectionTitle: "profile",
            route: "/profile",
            sub: [
              {
                heading: "profileOverview",
                route: "/crafted/pages/profile/overview",
              },
              {
                heading: "projects",
                route: "/crafted/pages/profile/projects",
              },
              {
                heading: "campaigns",
                route: "/crafted/pages/profile/campaigns",
              },
              {
                heading: "documents",
                route: "/crafted/pages/profile/documents",
              },
              {
                heading: "connections",
                route: "/crafted/pages/profile/connections",
              },
              {
                heading: "activity",
                route: "/crafted/pages/profile/activity",
              },
            ],
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        keenthemesIcon: "profile-circle",
        bootstrapIcon: "bi-person",
        sub: [
          {
            heading: "accountOverview",
            route: "/crafted/account/overview",
          },
          {
            heading: "settings",
            route: "/crafted/account/settings",
          },
        ],
      },*/
      /*{
        sectionTitle: "authentication",
        keenthemesIcon: "fingerprint-scanning",
        bootstrapIcon: "bi-sticky",
        sub: [
          {
            sectionTitle: "basicFlow",
            sub: [
              {
                heading: "signIn",
                route: "/sign-in",
              },
              {
                heading: "signUp",
                route: "/sign-up",
              },
              {
                heading: "passwordReset",
                route: "/password-reset",
              },
            ],
          },
          {
            heading: "multiStepSignUp",
            route: "/multi-step-sign-up",
          },
          {
            heading: "error404",
            route: "/404",
          },
          {
            heading: "error500",
            route: "/500",
          },
        ],
      },*/
      /*{
        sectionTitle: "modals",
        route: "/modals",
        keenthemesIcon: "design",
        bootstrapIcon: "bi-shield-check",
        sub: [
          {
            sectionTitle: "general",
            route: "/general",
            sub: [
              {
                heading: "inviteFriends",
                route: "/crafted/modals/general/invite-friends",
              },
              {
                heading: "viewUsers",
                route: "/crafted/modals/general/view-user",
              },
              {
                heading: "upgradePlan",
                route: "/crafted/modals/general/upgrade-plan",
              },
              {
                heading: "shareAndEarn",
                route: "/crafted/modals/general/share-and-earn",
              },
            ],
          },
          {
            sectionTitle: "forms",
            route: "/forms",
            sub: [
              {
                heading: "newTarget",
                route: "/crafted/modals/forms/new-target",
              },
              {
                heading: "newCard",
                route: "/crafted/modals/forms/new-card",
              },
              {
                heading: "newAddress",
                route: "/crafted/modals/forms/new-address",
              },
              {
                heading: "createAPIKey",
                route: "/crafted/modals/forms/create-api-key",
              },
            ],
          },
          {
            sectionTitle: "wizards",
            route: "/wizards",
            sub: [
              {
                heading: "twoFactorAuth",
                route: "/crafted/modals/wizards/two-factor-auth",
              },
              {
                heading: "createApp",
                route: "/crafted/modals/wizards/create-app",
              },
              {
                heading: "createAccount",
                route: "/crafted/modals/wizards/create-account",
              },
            ],
          },
        ],
      },*/
      /*{
        sectionTitle: "widgets",
        route: "/widgets",
        keenthemesIcon: "element-7",
        bootstrapIcon: "bi-layers",
        sub: [
          {
            heading: "widgetsLists",
            route: "/crafted/widgets/lists",
          },
          {
            heading: "widgetsStatistics",
            route: "/crafted/widgets/statistics",
          },
          {
            heading: "widgetsCharts",
            route: "/crafted/widgets/charts",
          },
          {
            heading: "widgetsMixed",
            route: "/crafted/widgets/mixed",
          },
          {
            heading: "widgetsTables",
            route: "/crafted/widgets/tables",
          },
          {
            heading: "widgetsFeeds",
            route: "/crafted/widgets/feeds",
          },
        ],
      },*/
    /*],
  },*/

  {
    heading: "Administración",
    route: "/apps",
    pages: [
      {
        sectionTitle: "Blogs",
        route: "/blogs",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-card-heading",
        sub: [
          {
            heading: "Categorias",
            route: "/apps/blogcategoria/blogcategoria-list",
          },
          {
            heading: "Blogs",
            route: "/apps/blogs/blogs-list",
          },
        ],
      },
      {
        sectionTitle: "Noticias",
        route: "/noticias",
        keenthemesIcon: "abstract-38",
        bootstrapIcon: "bi-card-heading",
        sub: [
          {
            heading: "Categorias",
            route: "/apps/noticiacategoria/noticiacategoria-list",
          },
          {
            heading: "Noticias",
            route: "/apps/noticia/noticia-list",
          },
        ],
      },
      {
        sectionTitle: "Preguntas Frecuentes",
        route: "/categoriapreguntafrecuente",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-patch-question",
        sub: [
          {
            heading: "Categoría",
            route: "/apps/categoriapreguntafrecuente/categoriapreguntafrecuente-list",
          },
          {
            heading: "Preguntas",
            route: "/apps/preguntafrecuente/preguntafrecuente-list",
          }
        ],
      },
      {
        sectionTitle: "Alianzas",
        route: "/alianzas",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-patch-question",
        sub: [
          {
            heading: "Categoría",
            route: "/apps/alianza/categoriaalianza-list",
          },
          {
            heading: "Alianzas",
            route: "/apps/alianza/alianzas-list",
          }
        ],
      },
      {
        sectionTitle: "Banners",
        route: "/banners",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-lightbulb",
        sub: [
          {
            heading: "Banners",
            route: "/apps/banners/banners-list",
          }
        ],
      },
      {
        sectionTitle: "Sucursales",
        route: "/sucursales",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-lightbulb",
        sub: [
          {
            heading: "Sucursales",
            route: "/apps/sucursal/sucursal-list",
          }
        ],
      },
      {
        sectionTitle: "Destinos Recomendados",
        route: "/destinos",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-lightbulb",
        sub: [
          {
            heading: "Destinos Recomendados",
            route: "/apps/destinosrecomendados/destinosrecomendados-list",
          }
        ],
      },
      {
        sectionTitle: "Tips de Viajes",
        route: "/tips",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-lightbulb",
        sub: [
          {
            heading: "Tips de viajes",
            route: "/apps/tipviaje/tipviajes-list",
          }
        ],
      },
      {
        sectionTitle: "Vehículos",
        route: "/marcas",
        keenthemesIcon: "safe",
        bootstrapIcon: "bi-car-front",
        sub: [
          {
            heading: "Características",
            route: "/apps/vehiculocaracteristica/vehiculocaracteristica-list",
          },
          
          {
            heading: "Vehiculos",
            route: "/apps/vehiculos/vehiculos-list",
          },
          
        ],
      },
      

      {
        sectionTitle: "Campañas",
        route: "/campanias",
        keenthemesIcon: "basket",
        bootstrapIcon: "bi-card-image",
        sub: [
          {
            heading: "Campañas",
            route: "/apps/campania/campania-list",
          }
        ],
      },
      
      {
        sectionTitle: "Newsletter",
        route: "/suscripcionboletin",
        keenthemesIcon: "Readed-mail",
        bootstrapIcon: "bi-mailbox",
        sub: [
          {
            heading: "Newsletter",
            route: "/apps/suscripcionboletin/suscripcionboletin-list",
          }
        ],
      },
      {
        sectionTitle: "Términos y condiciones",
        route: "/terminocondicion",
        keenthemesIcon: "text",
        bootstrapIcon: "bi-textarea-t",
        sub: [
          {
            heading: "Términos y condiciones",
            route: "/apps/terminocondicion/terminocondicion-list",
          }
        ],
      },

      {
        sectionTitle: "Puntos de Interés",
        route: "/puntodeinteres",
        keenthemesIcon: "text",
        bootstrapIcon: "bi-textarea-t",
        sub: [
          {
            heading: "Puntos de Interés",
            route: "/apps/puntodeinteres/puntodeinteres-list",
          },
          {
            heading: "Destinos",
            route: "/apps/destinorecomendado/destinorecomendado-list",
          }
        ],
      },
      
    ],
  },
];

export default MainMenuConfig;
