import { createApp } from "vue";
import { createPinia } from "pinia";
import Tooltip from 'primevue/tooltip';
import App from "./App.vue";

/*
TIP: To get started with clean router change path to @/router/clean.ts.
 */
import router from "./router";
import ElementPlus from "element-plus";
import i18n from "@/core/plugins/i18n";
import { VueReCaptcha } from 'vue-recaptcha-v3'
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
//import "prismjs/themes/prism-coy.css";

//imports for app initialization
import ApiService from "@/core/services/ApiService";
import { initApexCharts } from "@/core/plugins/apexcharts";
import { initInlineSvg } from "@/core/plugins/inline-svg";
import { initVeeValidate } from "@/core/plugins/vee-validate";
import { initKtIcon } from "@/core/plugins/keenthemes";
import moment from "moment";
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
    app.use(VueReCaptcha, { siteKey: '6Lc53_okAAAAADSAVXr57bSrpnjDTiXb8ex98o-L' })
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
      }
    };
    app.directive("tooltip", Tooltip); 
    app.mount("#app");
  }
});