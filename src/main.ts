import { createApp } from "vue";
import { createPinia } from "pinia";
import Tooltip from 'primevue/tooltip';
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import * as bootstrap from 'bootstrap'
import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import { VueReCaptcha } from 'vue-recaptcha-v3'
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
//import "prismjs/themes/prism-coy.css";
import vue3GoogleLogin from 'vue3-google-login'
//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import moment from "moment";
import { createGtm } from '@gtm-support/vue-gtm';
import "@/core/plugins/prismjs";
import idsrvAuth from "./config/idsrvAuth";
import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import Slider from "primevue/slider";
import Textarea from "primevue/textarea";
import Password from "primevue/password";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import RadioButton from "primevue/radiobutton";
import Toolbar from "primevue/toolbar";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import ConfirmPopup from "primevue/confirmpopup";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import OverlayPanel from "primevue/overlaypanel";
import TabMenu from "primevue/tabmenu";
import Badge from 'primevue/badge';
import InputMask from 'primevue/inputmask';
import Skeleton from "primevue/skeleton";
import Sidebar from "primevue/sidebar";
import Tag from "primevue/tag";
import BadgeDirective from 'primevue/badgedirective';
import Checkbox from "primevue/checkbox";
import { emitter } from  "./core/bus/bus";
import { VueSignalR } from '@dreamonkey/vue-signalr';
import { HubConnectionBuilder } from '@microsoft/signalr';


declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    emitter: typeof emitter
  }
}

idsrvAuth.startup().then((ok) => {
  if (ok) {
    const app = createApp(App);
    
    app.component("Prime-InputText", InputText);
    app.component("Prime-Slider", Slider);
    app.component("Prime-InputNumber", InputNumber);
    app.component("Prime-InputMask", InputMask);
    app.component("Prime-Textarea", Textarea);
    app.component("Prime-Password", Password);
    app.component("Prime-Button", Button);
    app.component("Prime-Dropdown", Dropdown);
    app.component("Prime-MultiSelect", MultiSelect);
    app.component("Prime-Checkbox", Checkbox);
    app.component("Prime-RadioButton", RadioButton);
    app.component("Prime-InputSwitch", InputSwitch);
    app.component("Prime-Toolbar", Toolbar);
    app.component("Prime-Dialog", Dialog);
    app.component("Prime-Sidebar", Sidebar);
    app.component("Prime-Calendar", Calendar);
    app.component("Prime-ConfirmDialog", ConfirmDialog);
    app.component("Prime-ConfirmPopup", ConfirmPopup);
    app.component("Prime-OverlayPanel", OverlayPanel);
    app.component("Prime-Tag", Tag);
    app.component("Prime-TabMenu", TabMenu);
    app.component("Prime-Badge", Badge);
    //app.component("Toast", Toast);
    app.directive('badge', BadgeDirective); 

    //const connection = new HubConnectionBuilder().withUrl(`${import.meta.env.VITE_APP_API_URL}/api/public/notify`).withAutomaticReconnect().build();
    const connection = new HubConnectionBuilder().withUrl(`https://socketpos.azurewebsites.net/api/public/notify`).withAutomaticReconnect().configureLogging(1).build();
    app.use(createPinia());
    app.use(router);
    app.use(ElementPlus);
    app.use(ToastService);
    app.use(ConfirmationService);
    app.use(VueSignalR, { connection });
    app.use(VueReCaptcha, { siteKey: '6Lc53_okAAAAADSAVXr57bSrpnjDTiXb8ex98o-L' });
    app.use(vue3GoogleLogin, {
      clientId: '986012678077-a0tq53hi8c1mcbj8bnsjonm6rt4s9r00.apps.googleusercontent.com',
    });

    app.use(
      createGtm({
        id: 'GTM-NRQTC7S', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
        /*queryParams: {
          // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
          gtm_auth: 'AB7cDEf3GHIjkl-MnOP8qr',
          gtm_preview: 'env-4',
          gtm_cookies_win: 'euro',
        },*/
        defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
        compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
        nonce: '3726c7f26c', // Will add `nonce` to the script tag
        enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
        debug: true, // Whether or not display console logs debugs (optional)
        loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
        vueRouter: router, // Pass the router instance to automatically sync with router (optional)
        //ignoredViews: ['homepage'], // Don't trigger events for specified router names (optional)
        trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
        //dataLayerName:'GTM-NRQTC7S'
      }),
    );


    ApiService.init(app);
    initApexCharts(app);
    initInlineSvg(app);
    initKtIcon(app);
    initVeeValidate();
    moment.locale('es')

  app.use(PrimeVue, {
    ripple: true,
    locale: {
      accept: "Aceptar",
      reject: "Rechazar",
      firstDayOfWeek: 1,
      dayNames: [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
      ],
      dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
      dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
      monthNamesShort: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      today: "Hoy",
      clear: "Limpiar",
      dateFormat: "dd/mm/yy",
      weekHeader: "Wk",
    },
  });

  app.use(i18n);
      app.config.globalProperties.$oidc = idsrvAuth;
      app.config.globalProperties.$filters = {
        formatDate(value) {
          const duration = moment(value).format("DD/MM/yyyy");
          return `${duration}`;
        },
        formatLongDate(value) {
          const duration = moment(value).format("dddd DD [de] MMMM [de] yyyy");
          return `${duration}`;
      },
      formatMiddleDate(value) {
        const duration = moment(value).format("DD MMM[,] yyyy");
        return `${duration}`;
      },
      formatHour(value) {
        const duration = moment(value).format("hh:mm a");
        return `${duration}`;
      },
      formatNumber(value) {
        if(!value)
          return value;
          return value.toLocaleString("es-CL");
      },
      formatCurrency (value) {
        if(!value)
          return value;
        return value.toLocaleString("es-CL", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
          style: "currency",
          currency: "CLP",
        });
      },
      getStatusLabel (status)  {
        switch (status) {
            case true:
                return 'success';
            default:
                return 'danger';
        }
      },
      formatPatente(patente: string): string {
        // Verificar que la patente tenga al menos 2 caracteres
        if (patente.length >= 2) {
            // Tomar todas las partes menos los últimos 2 caracteres
            const prefix = patente.substring(0, patente.length - 2);
            // Tomar los últimos 2 caracteres
            const suffix = patente.substring(patente.length - 2);
            // Combinar las partes con un espacio
            return `${prefix} ${suffix}`;
        }
      }
    };
    app.directive("tooltip", Tooltip); 
    app.mount("#app");
  }
});