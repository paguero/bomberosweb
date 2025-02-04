<template>
    <div class="overlayed-loader fullscreen-overlayed-loader" v-if="loading">
    <div class="fullscreen-overlayed-loader__overlay"></div> 
    <div class="ecw-loader-animation fullscreen-overlayed-loader__loader">
      <svg data-v-287d4030="" width="160px" height="80px" viewBox="0 0 160 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-car-loader"><g data-v-287d4030="" id="car-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-287d4030="" id="icon_carLoader"><ellipse data-v-287d4030="" id="car__wheel__1" stroke="#212f40" stroke-width="4.97777778" cx="72.2089151" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <ellipse data-v-287d4030="" id="car__wheel__2" stroke="#212f40" stroke-width="4.97777778" cx="129.894867" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <line data-v-287d4030="" id="car__support" x1="119.660263" y1="46.4610953" x2="83.9942172" y2="46.4610953" stroke="#212f40" stroke-width="4.97777778"></line> <path data-v-287d4030="" id="car__body__id" d="M60.6717247,46.1467592 L55.2752969,46.1467592 C50.8092877,45.2344221 49.940897,40.9768489 52.546069,33.3740396 C56.4538271,21.9394145 58.500748,14.0324928 66.1301804,6.73379594 C73.7596128,-0.564900963 112.775165,-7.62030797 131.073398,18.290066 C134.919128,23.7640887 145.277788,23.0950415 148.875407,26.622745 C152.473025,30.1504485 151.976802,33.8606194 151.976802,38.3614825 C151.976802,42.9231681 149.123518,45.5385344 143.354923,46.1467592 L140.563667,46.1467592" stroke="#212f40" stroke-width="4.97777778"></path> <line data-v-287d4030="" id="upper__trail__id" stroke="#212f40" x1="12.6141079" y1="32.3555556" x2="32" y2="32.3555556" stroke-width="5" stroke-linecap="round"></line> <line data-v-287d4030="" id="lower__trail__id" stroke="#212f40" x1="6" y1="21.1555556" x2="26" y2="21.1555556" stroke-width="5" stroke-linecap="round"></line></g></g></svg> <div data-v-287d4030="" class="loader-message">
      Un momento...
    </div>
    </div>
  </div>
  <section class="breadcrumb-section">

    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
      <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
      <router-link :to="{name:'home'}">Inicio</router-link>
      <span>/</span>
      <a>Suscripción exitosa</a>
    </nav>

    <div class="volver-container">
      <!-- Botón Volver -->
      <router-link  :to="{ name: 'home'}" class="btn-volver">
      <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
      <span>Volver</span>
    </router-link>
      <!-- Título a la derecha -->
      <h1 class="section-title">Suscripción exitosa</h1>
    </div>

    </section>

  <section class="purchase-success">
    <div class="success-container">
      <img src="/media/banners/slider-urgencia.png" alt="Bomberos exitosos">
      <h2>¡Felicidades. Ya cuentas con tus asistencias gratis los primeros 3 meses!</h2>
      <p>Hemos enviado un correo electrónico con los certificados.</p>
    </div>
  </section>
  
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useConfirm } from "primevue/useconfirm";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useSuscripcionAsistenciaStore } from "@/stores/suscripcionAsistencia";
import { useAsistenciaStore } from "@/stores/asistencia";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useCertificadoStore } from "@/stores/certificado";
import * as Yup from "yup";
import { useBus } from "@/core/bus/bus";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form

  },
  
  setup() {
    const { bus } = useBus();
    const confirm = useConfirm();
    const router = useRouter();
    const store = useCotizacionStore();
    const storeCarro = useCarroCompraStore();
    const storeCertificado = useCertificadoStore();
    const storeSuscripcionAsistencia = useSuscripcionAsistenciaStore();
    const storeAsistencia = useAsistenciaStore();
    const loading = ref(false);
    const visible = ref([false, false, false]);

     bus.on('actualiza-carro-compra', (id  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
    }); 

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });

    
    const route = useRoute();
    const carroId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {  
      store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));   
      await obtenerCarro(carroId);
      obtenerAsistencias(carroId);
    });

    const obtenerCarro = async (carroId) =>{
      await storeCarro
        .getCarroCompra(carroId)
        .catch(() => {
          const [error] = Object.values(storeCarro.carroCompraErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    }

    const obtenerAsistencias = async (carroId) =>{
      await storeAsistencia
        .getAsistencias(carroId)
        .catch(() => {
          const [error] = Object.values(storeAsistencia.asistenciaErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    }

    const descargarCertificado = async(cotizacion) => {
      loading.value = true;
      await storeCertificado.getCertificado(cotizacion).then(()=>{
        window.open(storeCertificado.currentCertificado.urlCertificado);
        loading.value = false;
      }).catch(() => {
          const [error] = Object.values(storeCertificado.certificadoErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    }

    const allCotizaciones = computed(() => {
      return storeCarro.currentCarroCompra.cotizaciones;
    });
    const allAsistencias = computed(() => {
      return storeAsistencia.allAsistencias;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });

    /**
     * Envia la informacion para realizar la suscripcion de asistencia
     */
    const saveChanges = async () => {
        loading.value = true;        
        storeSuscripcionAsistencia.createSuscripcionAsistencia({carroId, suscripciones:allAsistencias.value})
          .then(() => {
            loading.value = false;
            router.push({ name: "info-suscripcion", params:{id:carroId} });
          })
          .catch(() => {
            loading.value = false;
            const [error] = Object.values(storeCarro.carroCompraErrors);

            Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                heightAuto: false,
                customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
                },
            });
          });
    };
    return {
      loading,
      allCotizaciones,
      currentCarroCompra,
      visible,
      descargarCertificado,
      allAsistencias,
      saveChanges
    };
  },
});


</script>

<style lang="scss">
.aporte-breath {
  animation-name: breath;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.ml-pago {
  display: grid; grid-template-columns: 235px auto;
   @media screen and (max-width: 769px) {
        grid-template-columns: 100%;
        row-gap: 20px;
      }
}
@keyframes breath {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}

.b-form-datepicker {
  min-width: 130px;
}
.b-form-datepicker label {
  padding-bottom: 3px !important;
  padding-top: 6px;
  text-transform: none;
  white-space: nowrap !important;
  font-size: 1rem !important;
}
.b-form-datepicker .btn:not(:disabled):not(.disabled) {
  cursor: pointer;
  padding: 10px 5px;
}
.d-content-full {
  width: 100%;
}
</style>

<style lang="scss" scoped>
@keyframes radar{
0%{
    width:25px;
    height:25px;
    border:40px 
    solid red;
    opacity:0
}50%{
    opacity:.1
}
90%{
    width:75px;
    height:75px
}
90%,100%{
    border:2px 
    solid red;
    opacity:0
}100%{
    width:115px;
    height:115px
}
}
.donation:hover {
  background: inherit;
  cursor: pointer;
  .radar {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 10px solid #fff;
    width: 120px;
    height: 120px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-animation: radar 2s infinite;
    animation: radar 2s infinite;
    opacity: 0;
  }
  .radar:nth-child(2) {
      animation-delay: .4s;
  }
  .radar:nth-child(3) {
      animation-delay: .9s;
  }
  .radar:nth-child(4) {
      animation-delay: .15s;
  }
}

</style>