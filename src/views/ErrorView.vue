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
          class="
            col-md-12 col-lg-12
            aos-init aos-animate
            content
            d-flex
            flex-column
            mt-1
            mb-5
            mx-auto
          "
        >
          <div class="row">
                  <div class="col-lg-8 col-md-7">
                     <div class="py-3">
                        <!-- alert -->
                        <div class="alert alert-danger p-2" role="alert">
                           No pudimos procesar tu pago. favor intenta nuevamente.
                        </div>
                        <ul class="list-group list-group-flush">
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0 border-top" v-for="(cotizacion, x) in allCotizaciones" v-bind:key="x">
                              <!-- row -->
                              <div class="row align-items-center p-4">
                                 <div class="col-6 col-md-6 col-lg-7">
                                    <div class="d-flex">
                                        <i class="fa-solid fa-car-side"></i>
                                       
                                       <div class="ms-3">
                                          <!-- title -->
                                          <router-link :to="{name:'info-vehiculo', params:{id:cotizacion.cotizacionId}}" class="text-inherit">
                                             <h6 class="mb-0">{{cotizacion.vehiculo.patente}} {{cotizacion.vehiculo.modelo}} / {{cotizacion.vehiculo.anio}}</h6>
                                          </router-link>
                                          <span><small class="text-muted text-upper">{{cotizacion.cliente.nombre}} {{cotizacion.cliente.apellidoPaterno}}</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" @click="confirmarEliminarCotizacion(cotizacion.cotizacionId)" class="text-decoration-none text-inherit">
                                                <span class="me-1 align-text-bottom">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 text-success">
                                                      <polyline points="3 6 5 6 21 6"></polyline>
                                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                      <line x1="10" y1="11" x2="10" y2="17"></line>
                                                      <line x1="14" y1="11" x2="14" y2="17"></line>
                                                   </svg>
                                                </span>
                                                <span class="text-muted">Remover</span>
                                             </a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <!-- input group -->
                                 <div class="col-4 col-md-3 col-lg-3">
                                    <!-- input -->
                                    <!-- input -->
                                    
                                 </div>
                                 <!-- price -->
                                 <div class="col-2 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold">{{$filters.formatCurrency(cotizacion.montoPago)}}</span>
                                    <i class="fa fa-warning text-warning" placeholder="Top"  v-if="!cotizacion.validado"
                                    v-tooltip="'No se ha proporcionado toda la información necesaria para emitir'"></i>
                                 </div>
                              </div>
                           </li>
                           <!-- list group -->
                        </ul>
                        <!-- btn -->
                        <div class="d-flex justify-content-between mt-4">
                           <router-link :to="{name:'info-nuevo', params:{id:currentCarroCompra?.carroId??0}}" class="btn btn-primary">Agregar nuevo vehículo</router-link>
                           
                        </div>
                     </div>
                  </div>

                  <!-- sidebar -->
                  <div class="col-12 col-lg-4 col-md-5">
                     <!-- card -->
                     <div class="mb-5 card mt-6">
                        <div class="card-body p-6 border border-1">
                           <!-- heading -->
                           <h2 class="h5 mb-4">Resumen</h2>
                           <Form
                                      id="kt_account_edificio_details_form"
                                      
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
                           <div class="card mb-2">
                              <!-- list group -->
                              <ul class="list-group list-group-flush">
                                 <!-- list group item -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div>Subtotal</div>
                                    </div>
                                    <span>{{$filters.formatCurrency(currentCarroCompra.montoPago)}}</span>
                                 </li>

                                 <!-- list group item -->
                                 <li class="list-group-item d-flex justify-content-between align-items-start">
                                    <div class="me-auto">
                                       <div class="fw-bold">Aportes</div>
                                    </div>
                                    <span class="fw-bold">{{$filters.formatCurrency(currentCarroCompra.aporte)}}</span>
                                 </li>
                              </ul>
                           </div>
                           <div class="d-grid mb-1 mt-4">
                              <!-- btn -->
                              <Prime-Button id="kt_account_edificio_details_submit"
                              :disabled="!currentCarroCompra.totalPagar || currentCarroCompra.totalPagar==0"
                               class="btn btn-primary btn-lg d-flex justify-content-between align-items-center" type="submit"
                               :loading="loading">
                                 Total a Pagar <span class="fw-bold">{{$filters.formatCurrency(currentCarroCompra.totalPagar)}}</span>
                              </Prime-Button>
                           </div>
                           </Form>
                           <!-- text -->
                           <p>
                              <small>
                                 El pago es realizado a través de un sistema seguro de Mercado Pago
                              </small>
                           </p>

                           <!-- heading -->
                        </div>
                     </div>
                  </div>
               </div> 
        </div>
      </div>
      <!-- Row -->
    </div>
    <!-- end page main wrapper -->
    
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useConfirm } from "primevue/useconfirm";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
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
    const loading = ref(false);
    
     bus.on('actualiza-carro-compra', (id  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
       obtenerCotizaciones(id);
    }); 

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });

    const saveChanges1 = () => {
        loading.value = true;
        storeCarro.iniciarEmision(carroId)
          .then(() => {
            loading.value = false;
            location.href = storeCarro.currentCarroCompra.urlPago;
          })
          .catch(() => {
            const [error] = Object.values(store.cotizacionErrors);
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

    const eliminarCotizacion = (cotizacionId) => {
        loading.value = true;
        store.deleteCotizacion(cotizacionId)
          .then(() => {
            loading.value = false;
            Swal.fire({
              text: "El vehículo ha sido eliminado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              obtenerCarro(carroId);
              obtenerCotizaciones(carroId);
            });
          })
          .catch(() => {
            const [error] = Object.values(store.cotizacionErrors);
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
   
    const route = useRoute();
    const carroId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {     
      obtenerCarro(carroId);
      obtenerCotizaciones(carroId);
    });
    
    const obtenerCotizaciones = (carroId) =>{
      loading.value = true;
      store
        .getCotizaciones(carroId)
        .then(() => {
          loading.value = false;
        })
        .catch(() => {
          const [error] = Object.values(store.cotizacionErrors);
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

    const obtenerCarro = (carroId) =>{
      storeCarro
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
    const allCotizaciones = computed(() => {
      return store.allCotizacions;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });
    const confirmarEliminarCotizacion = (cotizacionId) => {
      confirm.require({
          message: '¿Está seguro de eliminar el vehículo?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              eliminarCotizacion(cotizacionId);
          },
          reject: () => {
              
          }
      });
    }
    return {
      loading,
      saveChanges1,
      allCotizaciones,
      currentCarroCompra,
      eliminarCotizacion,
      confirmarEliminarCotizacion
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