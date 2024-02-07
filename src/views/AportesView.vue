<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
   <!-- start page main wrapper -->
   <div
      id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid"
      style="padding-top: 30px"
      >
      <div class="row">
         <div
            data-aos="fade-up"
            data-aos-delay="100"
            class="col-12 col-md-8 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto"
            >
            <div class="row" style="min-height:calc(v65)">
               
               <div class="col-12 col-sm-6 d-flex mt-5">
                  <div class="card illustration flex-fill">
                     <div class="card-body p-0 d-flex flex-fill">
                        <div class="row no-gutters w-100">
                           <div class="col-12">
                              <div class="illustration-text p-3 m-1">
                                 <h4 class="illustration-text">Aportes recibidos</h4>
                                 <p class="mb-0">Infórmate cómo va tu compañía seleccionando la comuna donde se ubica. No olvides compartir en tus redes para que tus amigos puedan ayudar a tu compañía.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-12 col-sm-6 d-flex mt-5">
                  <div class="card flex-fill">
                     <div class="card-body py-4">
                        <div class="media">
                           <div class="d-inline-block mr-3">
                                 <img src="/media/img/cash-payment.png"/>
                           </div>
                           <div class="media-body">
                              <h3 class="mb-2 aporte">{{$filters.formatCurrency(currentAporte.montoAporte)}}</h3>
                              <p class="mb-2">Monto total recaudado</p>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="buySuccess mt-10">
            <div class="buySuccess-form">
            <div class="row align-items-center">
                <h3 data-v-02950284="" id="form-quote">Selecciona una comuna y consulta los aportes recibidos por las compañías.</h3>
               <div class="form-group col-md-6">
                  <label>*Comuna</label>
                  <Prime-Dropdown filter v-model="comuna" :options="allComunas" 
                     optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Comuna" class="w-100"
                      />
               </div>
               <div class="col-6">
                  <button ref="kt_login_signin_submit" @click="buscarAporte(comuna)" :disabled="comuna==''" class="btn btn-primary mr-3 btn-sm">Consultar</button> 
               </div>
            </div>
            </div>
            </div>

            <!--Row table-->
      <div class="row text-center mt-5 ">
         <div class="card card-flush h-lg-100 shadow">  
    <!--begin::Header-->
    <div class="card-header pt-5">
        <!--begin::Title-->
        <h3 class="card-title align-items-start flex-column">            
            <span class="card-label fw-bold text-gray-900">Información de aportes</span>
            <span class="text-gray-500 mt-1 fw-semibold fs-6">Compañías de la comuna</span>
        </h3>
        <!--end::Title-->
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body pt-5">                 
         <!--begin::Item-->
         <template v-for="compania in allAportes" :key="compania.compania">
            <div class="d-flex flex-stack">
                <div class="text-gray-700 fw-semibold fs-6 me-2">{{compania.compania}}</div>                   
                <div class="d-flex align-items-senter">
                 <i class="bi bi-balloon-heart"></i>
                  <span class="text-gray-900 fw-bolder fs-6">{{$filters.formatCurrency(compania.montoAporte)}}</span> 
                  </div>  
            </div>
            <div class="separator separator-dashed my-3"></div>
         </template>
             
            
    </div>
    <!--end::Body-->
</div>
        </div>
      <!--Roe Table-->
         </div>
         <div class="d-none d-sm-block col-12 col-sm-4 mt-5 hidden-xs">
                  <div class="illustration flex-fill">
                      <img src="/media/img/overlay.png" style="max-height:412px" class="img-fluid illustration-img">
                  </div>
         </div>
      </div>
      <!-- Row -->
      
   </div>
   <!-- end page main wrapper -->
</div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import _ from "lodash";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useAporteStore } from "@/stores/aporte";
import { useComunaStore } from "@/stores/comuna";
import type { IAporte } from "@/stores/aporte";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

export default defineComponent({
  name: "aporte-list",
  components: {
  },
  
  setup() {
    const router = useRouter();
    const aporte = ref<IAporte>();
    const store = useAporteStore();
    const storeComuna = useComunaStore();
    const comuna = ref('');
    onMounted(() => {
      buscarAportes();
      obtenerComunas();
    });
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
    const buscarAporte = (comuna) => {
      store.getAporte(comuna)
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
    const loading = ref(true);
    return {
      loading,
      buscarAportes,
      allAportes,
      comuna,
      aporte, currentAporte, buscarAporte,
      allComunas
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
