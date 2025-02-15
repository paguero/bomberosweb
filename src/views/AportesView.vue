<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a>Aportes recibidos</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>
  <!-- Título a la derecha -->
  <h1 class="section-title">Aportes recibidos</h1>
</div>

</section>



<section class="recaudado-section">
    
    <!-- COLUMNA IZQUIERDA -->
    <div class="left-column">
      <h2 class="section-title">Conoce lo Recaudado</h2>
      <p>Infórmate cómo va tu compañía seleccionando la comuna donde se ubica.
      No olvides compartir en tus redes para que tus amigos puedan ayudar a tu compañía.</p>
      
      

      <!-- Recuadro con el total recaudado -->
      <div class="total-container">
        <img src="/media/misc/ahorro.webp" alt="Icono de ahorro" class="jar-icon" />
        
        <div class="total-info">
          <span class="total-amount">{{$filters.formatCurrency(currentAporte.montoAporte)}}</span>
          <button class="btn-total">Monto total recaudado</button>
        </div>
      </div>
    </div> 

    <!-- COLUMNA DERECHA -->
    <div class="right-column">
      <img src="/media/misc/dibujo-bomberos.webp" alt="Imagen bomberos" class="firefighters-img" />
    </div>

  </section>

  <section class="aportes-section">
    <!-- Columna Izquierda -->
    <div class="left-column">

      <!-- Tarjeta de selección de comuna -->
      <div class="consulta-card">
        <h2>Selecciona una comuna y consulta los aportes recibidos por las compañías.</h2>
        
        <form class="comuna-form">
          <label for="select-comuna">*Comuna</label>
          <Prime-Dropdown filter v-model="comuna" :options="allComunas" 
                     optionLabel="nombre" optionValue="codigoComuna" placeholder="Seleccione Comuna" class="w-100"
                      />
          <button type="button" ref="kt_login_signin_submit" @click="buscarAporte(comuna)" :disabled="comuna==''" class="consultar-btn">Consultar</button> 
        </form>
      </div>

      <!-- Tarjeta de información de aportes -->
      <div class="info-aportes-card">
        <h3>Información de aportes</h3>
        <p class="subtitle">Compañías de la comuna</p>
        <ul class="aportes-list">
          <li v-for="compania in allAportes" :key="compania.compania">
            <div>
              <span @click="toggle($event, compania)" class="cursor-pointer">{{compania.compania}}</span>
              <strong>{{$filters.formatCurrency(compania.montoAporte)}}</strong>
            </div>
            <p>{{compania.url}}</p>
          </li>
          <!-- Agrega más items según tu necesidad -->
        </ul>
      </div>

    </div>

    <!-- Columna Derecha -->
    <div class="right-column">
      <!-- Imagen con bordes redondeados -->
      <img src="/media/misc/bombero-traje.webp" alt="Bombero" class="bombero-img">
    </div>
  </section>



  <section class="our-allies">
    <h2>Nuestros Aliados</h2>
    <div class="allies-container">
      <!-- Logos: Sustituye src con las rutas de tus imágenes -->
      <img src="/media/misc/logo-saca-tu-permiso.webp" alt="Logo 1" class="ally-logo">
      <img src="/media/misc/logo-asegura.webp" alt="Logo 2" class="ally-logo">
      <img src="/media/misc/logo-seguro-las-condes.webp" alt="Logo 3" class="ally-logo">
      <img src="/media/misc/logo-seguros-southbridge.webp" alt="Logo 4" class="ally-logo">
      <img src="/media/misc/logo-mercado-pago.webp" alt="Logo 5" class="ally-logo">
      <img src="/media/misc/logo-balloon.webp" alt="Logo 6" class="ally-logo">
    </div>
  </section>
  <OverlayPanel ref="op" appendTo="body">
    <div class="d-flex flex-column gap-4 w-[25rem]">
        <div>
            <span class="font-medium block mb-2">Comparte la url de la compañía</span>
            <div class="input-group mb-3">
              <input type="text" class="form-control" :value="compania.url" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <span class="input-group-text" id="basic-addon2" @click="copyClip(compania.url)"><i class="pi pi-copy"></i></span>
            </div>
            
        </div>
        <div>
            <div class="font-medium block mb-2">o envía este QR</div>
            <div ref="canvasContainer">
            <vue-qrcode :value="compania.url" :options="{ width: 200 }"></vue-qrcode>
            </div>
            <button @click="copiarAlPortapapeles" class="btn btn-sm">Copiar QR</button>
        </div>
        
    </div>
</OverlayPanel>
<Toast />
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed, nextTick } from "vue";
import _ from "lodash";
import { useRouter } from "vue-router";
import { useConvenioStore } from "@/stores/convenio";
import { useAporteStore } from "@/stores/aporte";
import { useComunaStore } from "@/stores/comuna";
import type { IAporte } from "@/stores/aporte";
import * as Yup from "yup";
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useToast } from 'primevue/usetoast';
import VueQrcode from '@chenfengyuan/vue-qrcode';
import OverlayPanel from 'primevue/overlaypanel';

import moment from "moment";
moment.locale("es");

export default defineComponent({
  name: "aporte-list",
  components: {
    VueQrcode, 
    OverlayPanel, Toast
  },
  
  setup() {
    const router = useRouter();
    const toast = useToast();
    const aporte = ref<IAporte>();
    const store = useAporteStore();
    const storeConvenio = useConvenioStore();
    const storeComuna = useComunaStore();
    const comuna = ref('');
    const compania = ref({});
    const canvasContainer = ref(null);
    const op = ref();
    onMounted(async () => {
      buscarAportes();
      obtenerComunas();
    });
    const copiarAlPortapapeles = () => {
      const canvas = canvasContainer.value.querySelector('canvas');
      if (canvas && navigator.clipboard) {
        canvas.toBlob(blob => {
          navigator.clipboard.write([
            new ClipboardItem({
              'image/png': blob,
            }),
          ]);
        });
        toast.add({ severity: 'info', summary: 'Info', detail: 'Imagen QR copiada al porta papeles. Ya puedes compartir "pegandola donde quieras"', life: 3000 });
      } else {
        toast.add({ severity: 'error', summary: 'Info', detail: 'No pudimos copiar el QR a tu porta papeles', life: 3000 });
      }
    }
    const buscarAportes = () => {
      store.getAportes()
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.aporteErrors);
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
    };
    const toggle = (event, param) => {
      console.log('=======>>>>>>>' + JSON.stringify(param));
        op.value.hide();
        console.log('x' + param);
        compania.value = param;
        nextTick(() => {
          op.value.show(event);
        });
    }
    const buscarConvenios = async () => {
      await storeConvenio.getConvenios()
        .catch(() => {
          const [error] = Object.values(storeConvenio.convenioErrors);
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
    };
    const obtenerComunas = () => {
      storeComuna.getComunas()
        .catch(() => {
          const [error] = Object.values(storeComuna.comunaErrors);
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
    };
    const buscarAporte = async (comuna) => {
      loading.value = true;
      await buscarConvenios();
      store.getAporte(comuna)
        .then(() => {
          loading.value = false;
          var convenios = storeConvenio.allConvenios.filter(c=>c.comuna==comuna);
          store.allAportes.forEach((aporte, index) => {
            var convenio = convenios.find(c=>c.nombre == aporte.compania);
            if(convenio){
              aporte.url = 'https://www.soapbomberos.cl/yo-apoyo/' + convenio.codigo;
            }
            
          });
          //recorremos y ponemos la info al convenio
        })
        .catch(() => {
          const [error] = Object.values(store.aporteErrors);
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
    };
    const dt = ref();
    const allAportes = computed(() => {
      return store.allAportes;
    });
    const currentAporte = computed(() => {
      return store.currentAporte;
    });
    const allComunas = computed(() => {
      return storeComuna.allComunas;
    });

    const copyClip = (url)=>{
      navigator.clipboard.writeText(url),
      toast.add({ severity: 'info', summary: 'Info', detail: 'Url copiada al porta papeles', life: 3000 });
    }
    const loading = ref(true);
    return {
      loading,
      buscarAportes,
      allAportes,
      comuna,
      compania,
      aporte, currentAporte, buscarAporte,
      allComunas, toast, copyClip, toggle, op, canvasContainer, copiarAlPortapapeles
    };
  },
});
</script>
<style lang="scss" scoped>
.l-share a {color:#B5B5C3;}
.l-share i {font-size:1rem;}
.aporte {color: #FF0082; font-size:2rem;}
.stat {
    background: #e0eafc;
    border-radius: 50%;
    padding: .75rem;
    padding-left: 0.85rem;
    width: 48px;
    height: 48px;
}
.stat svg {
    width: 24px;
    height: 24px;
    color: #3f80ea!important;
}
.buySuccess-form[data-v-56a41e1f] {
  background: white !important;
}
.buySuccess-pay__item {
  label {
    font-weight: bold;
    font-size: 18px;
  }
}
.buySuccess-form__soap-item {
  width: 100%;
}
.item-ty {
  h5 {
    align-self: center;
    height: fit-content;
  }
  strong {
    color: #bb2634;
  }
  .item-ty__seguros {
    font-weight: normal;
  }
}
.item-wsp {
  h5 {
    align-self: center;
    height: fit-content;
  }
  strong {
    color: #bb2634;
  }
  .item-ty__seguros {
    font-weight: normal;
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

.theme-twitter {
  background-color: rgb(29, 161, 242) !important;
}
#rut,
.rut {
  width: 70%;
  float: left;
  margin-right: 6px;
}
#dv,
.rutDv {
  width: 22%;
}
#patente {
  width: 235px !important;
}
.panel-buscar-poliza {
  width: 250px !important;
  position: relative;
  margin: auto;
  left: 0;
  right: 0;
}
</style>
