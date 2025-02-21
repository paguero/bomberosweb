<template>



<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a>Suscripción del vehículo</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>
  <!-- Título a la derecha -->
  <h1 class="section-title">Suscripción del vehículo</h1>
</div>

</section>


<section class="vehicle-summary">
    <div class="vehicle-details p-4" v-for="(cotizacion, x) in allCotizaciones" v-bind:key="x">
      <p><router-link :to="{name:'info-persona', params:{id:cotizacion.cotizacionId}}" class="text-inherit">
        <strong>{{$filters.formatPatente(cotizacion.vehiculo.patente)}} {{cotizacion.vehiculo.modelo}} / {{cotizacion.vehiculo.anio}}</strong></router-link>
      </p>
      <p>{{cotizacion.cliente.nombre}} {{cotizacion.cliente.apellidoPaterno}}</p>
      <a href="#" @click="confirmarEliminarCotizacion(cotizacion.cotizacionId)" class="remove-link">
       🗑️ Remover
      </a>
    </div>
  
    <router-link :to="{name:'info-nuevo', params:{id:currentCarroCompra?.carroId??0}}"  class="add-vehicle-button">+ Agregar nuevo vehículo</router-link>
    <Form
                                      id="kt_account_edificio_details_form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
    <div class="summary">
      <h3>Resumen</h3>
      <div class="summary-item">
        <span>Subtotal</span>
        <span>{{$filters.formatCurrency(currentCarroCompra.montoPago)}}</span>
      </div>
      <div class="summary-item">
        <span>Aportes</span>
        <span>{{$filters.formatCurrency(currentCarroCompra.totalAportes)}}</span>
      </div>
      <div class="summary-total">
        <span>Total a Pagar</span>
        <span>{{$filters.formatCurrency(currentCarroCompra.totalPagar)}}</span>
      </div>
      <Prime-Button id="kt_account_edificio_details_submit"
                              :disabled="!currentCarroCompra.totalPagar || currentCarroCompra.totalPagar==0"
                               class="pay-button" type="submit"
                               :loading="loading" label="Ir a Pagar">
                                 
                              </Prime-Button>

      <p class="payment-note">
        El pago es realizado a través de un sistema seguro de Mercado Pago
      </p>
    </div>
  </Form>
  </section>
  
  <section class="auto-payment-section">
  <div class="auto-payment-content">
    <h2>¡LIBÉRATE DE LOS PAGOS!</h2>
    <p>Vincula tu Tarjeta de Crédito y los siguientes pagos se realizarán de manera automática.</p>
  </div>
</section>


<section>
<div class="mercado-pago-banner">
  <img src="/media/logos/logo-mercado-pago2.webp" alt="Mercado Pago Logo" class="mercado-logo">
  <div class="mercado-text">
    <p>Ahora puedes pagar con la confianza de Mercado Pago. Usa tus tarjetas de débito, crédito o prepago.</p>
    <p><strong>Recuerda:</strong> Si tu tarjeta de débito tiene los 3 números en el reverso de la tarjeta, usa la opción <strong>con CVV</strong></p>
  </div>
</div>
</section>

<section class="image-section">
  <div class="image-container">
    <img src="/media/misc/imagen-bomberos.webp" alt="Descripción de la imagen">
  </div>
</section>




  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
    <!-- start page main wrapper -->
    <!-- end page main wrapper -->
    <Prime-Dialog v-model:visible="modalPOS" modal :closable="false" header="Pago POS" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
      <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <div class="d-flex flex-column">Por favor, termina el pago en la POS. Una vez aprobado, esta ventana se cerrará automáticamente.<br/> No cierres este mensaje.
          <p v-if="mostrarMensaje" class="alert alert-secondary mt-5 text-black">
              <i class="fa fa-exclamation me-3"></i>Por favor, autoriza el pago en la terminal.
          </p>
          <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="var(--surface-ground)"
      animationDuration=".5s" aria-label="Custom ProgressSpinner" />
          </div>
          <img src="/media/img/redelcom.png"/>
      </div>
        <div class="flex align-items-center gap-3">
          <Prime-Button label="Cancelar" @click="refrescarCarro" text class="btn btn-primary btn-lg d-flex justify-content-between align-items-center"  />          
        </div>
    </Prime-Dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, inject } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useConfirm } from "primevue/useconfirm"; 
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useTerminalStore } from "@/stores/terminal";
import { useBus } from "@/core/bus/bus";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { useSignalR } from '@dreamonkey/vue-signalr';
import CryptoJS from 'crypto-js';
import ProgressSpinner from 'primevue/progressspinner';
import { useGtm } from '@gtm-support/vue-gtm';

moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    ProgressSpinner

  },
  
  setup() {
    const { bus } = useBus();
    const confirm = useConfirm();
    const router = useRouter();
    const storeTerminal = useTerminalStore();
    const store = useCotizacionStore();
    const storeCarro = useCarroCompraStore();
    const loading = ref(true);
    const modalPOS = ref(false);
    const mostrarMensaje = ref(false);
    const signalr = useSignalR();
    var gtm = useGtm(); 
    
     bus.on('actualiza-carro-compra', (id  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
    }); 

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });
    const terminal = ref();
    var jsonTerminal = storeTerminal.getTerminalStorage();
    if(jsonTerminal){
      terminal.value = JSON.parse(jsonTerminal);
    }

    const saveChanges1 = async () => {
        loading.value = true;        
        storeCarro.iniciarEmision({carroId:carro.carroId, hash:''})
          .then(() => {
            loading.value = false;
            pushGtag(currentCarroCompra.value.totalPagar);
            if(storeCarro.currentCarroCompra.urlPago=='RDC'){
              modalPOS.value = true;
            } else {
              location.href = storeCarro.currentCarroCompra.urlPago;
            }
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

    const eliminarCotizacion = (cotizacionId) => {
        loading.value = true;
        store.deleteCotizacion({carroId:carro.carroId, cotizacionId})
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
              obtenerCarro(carro.carroId);
            });
          })
          .catch(() => {
            const [error] = Object.values(store.cotizacionErrors);
            
            //si el error es por poliza enviada a pago. ofrecemos limpiar el carro nosotros
            if(store.currentCotizacion.borraCarro) {
              Swal.fire({
                html: error + '<br/><br/>¿Deseas que nosotros eliminemos el carro de compras completo e iniciar el proceso desde cero?',
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si',
                cancelButtonText: 'No',
                showLoaderOnConfirm: true,        
                allowOutsideClick: () => !Swal.isLoading(),
                allowEscapeKey: false,
                preConfirm: function () {
                  store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));
                  location.href='/';
                }
              })
            } else {
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
            }
          });
    };
   
    const route = useRoute();
    const carro = JSON.parse(store.getCarro());

    signalr.invoke('JoinNotificationGroup', carro.carroId);

    //signalr.invoke('SendMessage', { 'hello' });
    signalr.on('ClientReceiveNotification', (user, message) => {
      console.log('recibiendo mensaje');
      console.log('carro ' + user);
      console.log('message ' + message);
      if(user == carro.carroId && message=="0"){
        mostrarMensaje.value = true;
      } else if(user == carro.carroId && message=="1"){
        router.push({ name: "info-comprobante", params:{id:carro.carroId} });
      } else if(user == carro.carroId){
        Swal.fire({
              text: 'ERROR EN EL PAGO. EL PROCESO INDICA:\n\t' + message,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              history.go();
            });
        
      }
    });



    onMounted(async () => {     
      obtenerCarro(carro.carroId);
    });

    const refrescarCarro = () => {     
      obtenerCarro(carro.carroId);
      modalPOS.value = false;
    };
    
    const obtenerCarro = (carroId) =>{
      storeCarro
        .getCarroCompra(carroId).then(()=>{loading.value=false;})
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
      return storeCarro.currentCarroCompra.cotizaciones;
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

    const pushGtag = (monto) => {
        gtm.trackEvent({"event": `checkout`, 
          "form_name":"ir_a_pagar",
          "total":monto,
          "step":`5`
        });
        gtm.trackEvent(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };

    return {
      loading,
      saveChanges1,
      allCotizaciones,
      currentCarroCompra,
      eliminarCotizacion,
      confirmarEliminarCotizacion,
      modalPOS,
      mostrarMensaje, refrescarCarro
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