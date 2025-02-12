import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import idsrvAuth from "../config/idsrvAuth";
import { useConfigStore } from "@/stores/config";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
    component: () => import("@/layouts/main-layout/MainLayout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/terminal",
        name: "info-terminal",
        component: () => import("@/views/TerminalView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/iniciar-sesion",
        name: "iniciar-sesion",
        component: () => import("@/views/IniciarSesionView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/mis-polizas",
        name: "mis-polizas",
        component: () => import("@/views/MisPolizasView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/mis-cotizaciones",
        name: "mis-cotizaciones",
        component: () => import("@/views/MisCotizacionesView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/registro",
        name: "registro",
        component: () => import("@/views/RegistroView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/mis-datos",
        name: "mis-datos",
        component: () => import("@/views/MisDatosView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/cambiar-clave",
        name: "cambiar-clave",
        component: () => import("@/views/CambiarClaveView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/recuperar-clave",
        name: "recuperar-clave",
        component: () => import("@/views/RecuperarClaveView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/yo-apoyo/:id",
        name: "yo-apoyo",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/embajador/:id",
        name: "embajador",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/aprende-del-soap",
        name: "aprende-soap",
        component: () => import("@/views/AprendeSoapView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/promo-grua",
        name: "promo-grua",
        component: () => import("@/views/PromoGruaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/promo-urgencia",
        name: "promo-urgencia",
        component: () => import("@/views/PromoUrgenciaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/promo-accidente",
        name: "promo-accidente",
        component: () => import("@/views/PromoAccidenteView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },

      {
        path: "/aportes",
        name: "aportes",
        component: () => import("@/views/AportesView.vue"),
        meta: {
          pageTitle: "Aportes",
          breadcrumbs: ["Aportes"],
        },
      },
      {
        path: "/info-nuevo/:id",
        name: "info-nuevo",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-vehiculo/:id",
        name: "info-vehiculo",
        component: () => import("@/views/VehiculoView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-persona/:id",
        name: "info-persona",
        component: () => import("@/views/PersonaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-aporte/:id",
        name: "info-aporte",
        component: () => import("@/views/AporteView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-comprobante/:id",
        name: "info-comprobante",
        component: () => import("@/views/ComprobanteView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-suscripcion/:id",
        name: "info-suscripcion",
        component: () => import("@/views/SuscripcionView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-asistencias/:id",
        name: "info-asistencias",
        component: () => import("@/views/AsistenciasView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },

      {
        path: "/info-confirmacion/:id?",
        name: "info-confirmacion",
        component: () => import("@/views/ConfirmacionView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-error/:id?",
        name: "info-error",
        component: () => import("@/views/ErrorView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-reintento/:id",
        name: "info-reintento",
        component: () => import("@/views/ErrorView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-documento",
        name: "info-documento",
        component: () => import("@/views/DocumentoView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/info-condiciones",
        name: "info-condiciones",
        component: () => import("@/views/CondicionesView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/modifica-tu-poliza-ingresar",
        name: "modifica-tu-poliza-ingresar",
        component: () => import("@/views/ModificaTuPolizaIngresarView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/modifica-tu-poliza/:carroId/:id",
        name: "modifica-tu-poliza",
        component: () => import("@/views/ModificaTuPolizaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/modificar-mi-poliza/:carroId/:id",
        name: "modificar-mi-poliza",
        component: () => import("@/views/ModificarMiPolizaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/contacto",
        name: "contacto",
        component: () => import("@/views/ContactoView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/comentanos",
        name: "comentanos",
        component: () => import("@/views/ComentanosView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      {
        path: "/redirecciona-mis-polizas",
        name: "redirecciona-mis-polizas",
        component: () => import("@/views/RedireccionModificaView.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ["Dashboards"],
        },
      },
      
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/SystemLayout.vue"),
    children: [
      {
        // the 404 route, when none of the above matches
        path: "/404",
        name: "404",
        component: () => import("@/views/crafted/authentication/Error404.vue"),
        meta: {
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/crafted/authentication/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const configStore = useConfigStore();

  // current page view title
  //document.title = `${import.meta.env.VITE_APP_NAME}`;

  // reset config to initial state
  configStore.resetLayoutConfig();

  // verify auth token before each page change
  //authStore.verifyAuth();

  // before page access check if page requires authentication
  /*if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }*/
  next();
  // Scroll page to top on every route change
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
idsrvAuth.useRouter(router);
export default router;
