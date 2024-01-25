<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
    <!-- start page main wrapper -->
    <div
      id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid"
      style="padding-top: 30px"
    >
      <div class="row">
        <div
          data-aos="fade-right fade-left"
          data-aos-delay="100"
          class="buyPatent donation-info col-lg-4 aos-init aos-animate text-center d-lg-block mx-auto resume-content"
        >
          <div class="buyPatent-info lift lift-lg sticky-top" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">
            <div class="donation-info__model">
              
            <div class="buySuccess-pay__item">
              <label for="">Fecha de pago</label>
              <p>{{$filters.formatDate(currentCarroCompra.fechaContratacion)}}</p>
            </div>
            <div class="buySuccess-pay__item">
              <label for="">Monto de pago</label>
              <p>{{$filters.formatCurrency(currentCarroCompra.totalPagar) }}</p>
            </div>
            </div>
            <div class="donation-info__price">
              <h3>¡Gracias por convertirte en un héroe de verdad!</h3>
            </div>
            <div class="donation-info__img">
             
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="col-md-12 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto"
        >
          <div class="">
            <div class="buySuccess">
              <b-form
                class="form-signinx d-flex align-items-stretch flex-column"
                @submit.stop.prevent="onSubmit"
              >
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                  >
                    <div class="row m-b-lg">
                      <div class="col-md-12">
                        <div class="buySuccess-form">
                             <h1 style="text-align: center;">Contratación de SOAP 2024</h1>
                          <div class="container-lg  animated fadeInLeft">
                              <div class="row align-items-center ticket">
                                <div class="col-md-9 offset-md-n3 order-md-1">

                                  <!-- Image -->
                                  <img class="img-fluid mw-md-125 mb-8 mb-md-0 aos-init aos-animate" style="max-width: 86%;height: auto;float: right;" src="/media/svg/illustrations/working.svg" alt="..." data-aos="fade-up" data-aos-delay="100">

                                </div>
                                <div class="col-md-6 order-md-0 text-center text-md-left aos-init aos-animate" data-aos="fade-up">

                                  <!-- Heading -->
                                  <h1 class="display-3 mb-4">
                                    ¡Tu <span class="text-primary">SOAP</span> ya está listo!
                                  </h1>

                                  <!-- Text -->
                                  <p class="font-size-lg">
                                    La contratación de tu Seguro Obligatorio ha finalizado exitosamente.
                                  </p>

                                  <template v-for="(cotizacion, x) in allCotizaciones" v-bind:key="x">
                                  <p class="font-size-lg">
                                    {{cotizacion.vehiculo.patente}} {{cotizacion.vehiculo.modelo}} / {{cotizacion.vehiculo.anio}}<br/>
                                    Su poliza <strong>n°{{ cotizacion.numeroPoliza }}</strong> está lista e informada a las municipalidades. Estamos generando su PDF para enviarselo por correo en un tiempo aproximado de 2 horas.
                                  </p>
                                  </template>
                                  <!-- Buttons -->
                                  <!--<a class="btn btn-primary" target="_blank" v-if="budget.documentoPdf!=null" v-bind:href="budget.documentoPdf"
                                                      ><i class="far fa-file-pdf"></i> Descargar tu Póliza</a
                                                    >-->

                                </div>
                              </div>
                            </div>
                           <hr class="separator"/>   

                           <div class="buySuccess-form__share">
                            <div class="buySuccess-form__share-item">
                              <label>
                                Comparte ya esta causa para poder llegar a más
                                personas y ayudar a que la tarea de los
                                <strong>#HEROESDEVERDAD</strong> no sea tan
                                difícil.

                                <br />
                                <br />
                                <strong class="buySuccess-form__strong"
                                  >¡Gracias por ayudar a Bomberos de
                                  Chile!</strong
                                >
                              </label>
                            </div>
                            <div class="v-application">
                              <h1>Compártelo en:</h1>
                              <ShareNetwork
                                class="v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--dark  v-size--small indigo mr-4"
                                network="facebook"
                                url="https://www.soapbomberos.cl"
                                title="¡Colaboremos con Bomberos de Chile!"
                                description="¡Amigos!. No sabía que al adquirir mi Seguro Obligatorio de Accidentes Personales (SOAP) tenía la opción de ayudar a que la tarea de los #HEROESDEVERDAD no sea tan difícil."
                                quote="¡Colaboremos con Bomberos de Chile!. ¡Convirtámonos en #HEROESDEVERDAD!"
                                hashtags="#HEROESDEVERDAD, #ayudabomberos, #soapconsentido"
                              >
                                <v-icon color="white">mdi-facebook</v-icon>
                              </ShareNetwork>
                              <ShareNetwork
                                class="v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--dark v-size--small theme-twitter mr-4"
                                network="twitter"
                                url="https://www.soapbomberos.cl"
                                title="¡Colaboremos con Bomberos de Chile! #HEROESDEVERDAD #ayudabomberos #soapconsentido"
                                description="¡Amigos!. No sabía que al adquirir mi Seguro Obligatorio de Accidentes Personales (SOAP) tenía la opción de ayudar a que la tarea de los #HEROESDEVERDAD no sea tan difícil."
                                quote="¡Convirtámonos en #HEROESDEVERDAD!"
                                hashtags="#HEROESDEVERDAD, #ayudabomberos, #soapconsentido"
                              >
                                <v-icon color="white">mdi-twitter</v-icon>
                              </ShareNetwork>
                               <ShareNetwork
                                class="v-btn v-btn--is-elevated v-btn--fab v-btn--has-bg v-btn--round theme--dark v-size--small green mr-4"
                                network="whatsapp"
                                url="https://www.soapbomberos.cl"
                                title="¡Colaboremos con Bomberos de Chile!"
                                description="¡Amigos!. No sabía que al adquirir mi Seguro Obligatorio de Accidentes Personales (SOAP) tenía la opción de ayudar a que la tarea de los #HEROESDEVERDAD no sea tan difícil."
                                quote="¡Convirtámonos en #HEROESDEVERDAD!"
                                hashtags="#HEROESDEVERDAD, #ayudabomberos, #soapconsentido"
                              >
                                <v-icon color="white">mdi-whatsapp</v-icon>
                              </ShareNetwork>
                              <v-btn fab dark small color="indigo" hidden>
                                <v-icon>mdi-facebook</v-icon>
                              </v-btn>
                              <v-btn fab dark small color="primary" hidden>
                                <v-icon>mdi-twitter</v-icon>
                              </v-btn>
                              <v-btn fab dark small color="green" hidden>
                                <v-icon>mdi-whatsapp</v-icon>
                              </v-btn>
                              
                            </div>
                          </div>
                          <hr class="separator"/>   
                          <div class="buySuccess-form__soap mt-4">
                         
                            <div class="buySuccess-form__soap-item item-ty">
                              <h5>
                              <strong><span  class="aporte-breath">¡Tu SOAP ya está listo!</span></strong> <br /><br />Enviaremos
                              una copia de tu póliza <strong>n°{{  }}</strong> al correo
                              registrado en menos de 48 horas.<br /><br />Gracias por
                              contratar tu seguro obligatorio de accidentes personales.
                            </h5>
                            
                            </div>
                            
                          </div>

                        <hr class="separator"/>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-form>
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
import type { ICotizacion } from "@/stores/cotizacion";
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
    const datosConfirmados = ref(false);
    const submitButton1 = ref<HTMLElement | null>(null);
    
     bus.on('actualiza-carro-compra', (id  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
       obtenerCotizaciones(id);
    }); 

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });

    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
       
        storeCarro.iniciarEmision(carroId)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Cotizacion se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              location.href = storeCarro.currentCarroCompra.urlPago;
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
      }
    };

    const eliminarCotizacion = (cotizacionId) => {
        store.deleteCotizacion(cotizacionId)
          .then(() => {
            loading = ref(false);
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
      store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));   
      obtenerCarro(carroId);
      obtenerCotizaciones(carroId);
    });
    
    const obtenerCotizaciones = (carroId) =>{
      store
        .getCotizaciones(carroId)
        .then(() => {
          loading = ref(false);
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
        .then(() => {
          loading = ref(false);
        })
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
    let loading = ref(true);

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
      submitButton1,
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