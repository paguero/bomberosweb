<template>
  <!--begin::Chat drawer-->
  <div
    id="kt_drawer_chat"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
    <!--begin::Messenger-->
    <div class="card w-100" id="kt_drawer_chat_messenger">
      <!--begin::Card header-->
      <div class="w-100 cart-header pe-5 d-flex flex-row justify-content-between" id="kt_drawer_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <div class="d-flex justify-content-center flex-column me-3">
            <h2
              >Carrito de compras</h2
            >
          </div>
        </div>
        <div class="card-toolbar">
          <div class="me-2">
            
          </div>
          <div
            class="btn btn-sm btn-icon btn-active-icon-primary"
            id="kt_drawer_chat_close"
          >
            <KTIcon icon-name="cross" icon-class="fs-2x" />
          </div>
        </div>
      </div>

      <!--begin::Card body-->
      <div class="cart-body" id="kt_drawer_chat_messenger_body">
        <!--begin::Messages-->
        <div
          class="scroll-y me-n5 pe-5"
          ref="messagesRef"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
          data-kt-scroll-offset="0px"
        >
            <ul class="list-group list-group-flush">
                           <!-- list group -->
                           <li class="list-group-item py-3 ps-0 border-top" v-for="(cotizacion, x) in allCotizaciones" v-bind:key="x">
                              <!-- row -->
                              <div class="row align-items-start p-4">
                                 <div class="col-9 col-md-6 col-lg-9">
                                    <div class="d-flex item-info">
                                        <i class="fa-solid fa-car-side"></i>
                                       
                                       <div class="ms-3 text-start">
                                          <!-- title -->
                                          <router-link :to="{name:'info-vehiculo', params:{id:cotizacion.cotizacionId}}" class="text-inherit">
                                             <p class="mb-0">{{cotizacion.vehiculo.patente}} {{cotizacion.vehiculo.modelo}} / {{cotizacion.vehiculo.anio}}</p>
                                          </router-link>
                                          <span><small class="text-muted text-upper">{{cotizacion.cliente.nombre}} {{cotizacion.cliente.apellidoPaterno}}</small></span>
                                          <!-- text -->
                                          <div class="mt-2 small lh-1">
                                             <a href="#!" @click="confirmarEliminarCotizacionCarro(cotizacion.cotizacionId)" class="text-decoration-none text-inherit">
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
                                 <div class="col-3 text-lg-end text-start text-md-end col-md-2">
                                    <span class="fw-bold text-nowrap">{{$filters.formatCurrency(cotizacion.montoPago)}}</span>
                                 </div>
                              </div>
                           </li>
                           <!-- list group -->
                        </ul>
        </div>
        <!--end::Messages-->
        
      </div>
      <!--end::Card body-->

      <!--begin::Card footer-->
      <div class="cart-footer pt-4" id="kt_drawer_chat_messenger_footer" v-if="carro.carroId">
       
        <!--begin:Toolbar-->
        <div class="d-flex flex-stack">
          
          <div class="d-flex justify-content-between mt-4">
        <router-link :to="{name:'info-confirmacion', params:{id:carro.carroId??''}}" class="btn btn-primary me-2">
            Continuar al Checkout
          </router-link>
        <router-link :to="{name:'info-nuevo', params:{id:carro.carroId??''}}" class="btn btn-dark" >Agregar nuevo vehículo</router-link>
      </div>
          
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
  </div>
  <!--end::Chat drawer-->
  <Prime-ConfirmDialog></Prime-ConfirmDialog>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed, onMounted } from "vue";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import Dropdown4 from "@/components/dropdown/Dropdown4.vue";
import { useBus } from "@/core/bus/bus";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { useConfirm } from "primevue/useconfirm";

interface KTMessage {
  type: string;
  name?: string;
  image: string;
  time: string;
  text: string;
}

export default defineComponent({
  name: "upgrade-to-pro",
  components: {
    Dropdown4,
  },
  setup() {
    const router = useRouter();
    const { bus } = useBus();
    const store = useCotizacionStore();
    const storeCarro = useCarroCompraStore();
    const datosConfirmados = ref(false);
    let carro = {carroId:''};
    const confirm = useConfirm();
    onMounted(async () => { 
      var jsonCarro = await store.getCarro();
      if(jsonCarro){
        carro = JSON.parse(store.getCarro());
      }
      if(carro.carroId!=null) {
        obtenerCarro(carro.carroId);
      }
    });
    bus.on('actualiza-carro-compra', (id  ) => {
       carro.carroId = id;
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
    });  

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });
    const carrito = computed(() => {
      return carro;
    });
    const obtenerCarro = (carroId) =>{
      storeCarro
        .getCarroCompra(carroId).then(()=>{
          bus.emit("unidades-carro-compra", storeCarro.currentCarroCompra.cotizaciones.length);
          if(storeCarro.currentCarroCompra.procesado && storeCarro.currentCarroCompra.exitoso){
            store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));   
          }
        });
    }
    const allCotizaciones = computed(() => {
      return storeCarro.currentCarroCompra.cotizaciones;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });

    const eliminarCotizacionCarro = (cotizacionId) => {
        store.deleteCotizacion({carroId:carro.carroId, cotizacionId})
          .then(() => {
            bus.emit("actualiza-carro-compra", storeCarro.currentCarroCompra.carroId);
            Swal.fire({
              text: "El vehículo ha sido eliminado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(async function () {
              obtenerCarro(currentCarroCompra.value.carroId);
              if(store.currentCotizacion.cantidadEnCarro==0){
                store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));
              }
              location.href='/';
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

    const confirmarEliminarCotizacionCarro = (cotizacionId) => {
      confirm.require({
          message: '¿Está seguro de eliminar el vehículo?',
          header: 'Confirmación',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              eliminarCotizacionCarro(cotizacionId);
          },
          reject: () => {
              
          }
      });
    }
   
    return {
      getAssetPath,
      allCotizaciones,
      currentCarroCompra,
      carro,carrito,
      eliminarCotizacionCarro,
      confirmarEliminarCotizacionCarro
    };
  },
});
</script>