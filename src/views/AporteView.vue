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
          class="
            buyPatent
            donation-info
            col-lg-4
            aos-init aos-animate
            text-center
            d-lg-block
            mx-auto
            resume-content
          "
        >
          <div class="buyPatent-info lift lift-lg sticky-top" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">

            <div>
              <span
                >{{cotizacionDetails.vehiculo?.patente}}
                               {{cotizacionDetails.vehiculo?.marca}} / {{cotizacionDetails.vehiculo?.modelo}} / {{cotizacionDetails.vehiculo?.anio}}
              </span>
            </div>
            <div class="donation-info__model">
              <div class="donation-soap">
                <div class="soap">
                   <h3>{{$filters.formatCurrency(cotizacionDetails.planPesos)}}</h3>
                  <label>Valor SOAP</label>
                </div>
                <div>
                  <span class="plus text-align-center"
                    ><i class="fas fa-plus-circle"></i
                  ></span>
                </div>
                <div
                  class="donation"
                  :class="contributing ? 'aporte-breath' : ''"
                >
                  <h3>{{$filters.formatCurrency(cotizacionDetails.aporte)}}</h3>
                  <label><i class="fas fa-heart"></i> Tu Aporte</label>
                </div>
              </div>
            </div>
            <div class="donation-info__price">
              <label>Total</label>
              <h3>{{$filters.formatCurrency(cotizacionDetails.montoPago)}}</h3>
            </div>
            <div class="donation-info__img">
              
              <div class="arrow autohide">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="
            col-md-12 col-lg-8
            aos-init aos-animate
            content
            d-flex
            flex-column
            mt-1
            mb-5
            mx-auto
          "
        >
          <div class="card card-white v-application border border-1">
            <div class="card-body">
              <Form
                                      id="kt_account_edificio_details_form"
                                      class="form d-flex flex-column flex-lg-row"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                  >
                    <div class="row m-b-lg">
                      <div class="col-md-12">
                        <h5 id="form-quote">
                          Con tu seguro estás aportando a Bomberos:
                        </h5>

                        <div class="row">
                          <div class="form-group col-md-12">
                            <div class="card-row card-bancos " style="display:flex; flex-wrap: wrap;">
                              
                              <template v-for="(item, x) in allMontosAporte" v-bind:key="x + '-ammount'">
                                <div class="aporte" >
                                  <div 
                                        :class="{'donation-selected' : cotizacionDetails.aporte === item.monto}" 
                                        @click="actualizarAporte(item.monto)">
                                          <div class="mt-2 donation bg icon-floating bg-secondary floating  hover-shadow-lg hover-translate-y-n10"><span></span>{{item.monto|currency}} 
                                          <p>Pesos</p>
                                          <div class="radar"> </div> <div class="radar"> </div> <div class="radar"> </div> <div class="radar"> </div> 
                                          <div style="left:80%;position:absolute; top:0;" v-if="cotizacionDetails.aporte === item.monto">
                                            <svg class="w-6 h-6" width="25px" height="25px" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                    <g id="checkmark-outline" fill-rule="nonzero">
                                                        <path d="M31.1442786,171.840796 C5.2779518,146.858262 -5.09578082,109.862896 4.01023318,75.0738981 C13.1162472,40.2848999 40.2848999,13.1162472 75.0738981,4.01023318 C109.862896,-5.09578082 146.858262,5.2779518 171.840796,31.1442786 C209.549474,70.1869539 209.010186,132.247241 170.628714,170.628714 C132.247241,209.010186 70.1869539,209.549474 31.1442786,171.840796 Z" id="Shape" fill="#97EBDC"></path>
                                                        <polygon id="Path" fill="#00836D" points="66.6666667 89.4527363 89.5522388 112.437811 132.338308 69.6517413 146.268657 83.7810945 89.5522388 140.298507 52.7363184 103.482587 66.6666667 89.3532338"></polygon>
                                                    </g>
                                                </g>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                </div>
                              </template>
                            </div>
                          </div>
                          <div class="row">
                              <div class="form-group col-md-12">
                                <h5>
                                  ¿A cuál compañía de bomberos quieres realizar el
                                  aporte?:
                                </h5>
                              </div>
                              <div class="alert alert-primary" v-if="currentConvenio.mensaje">{{currentConvenio.mensaje}}</div>
                              <div
                                class="form-group col-md-6"
                                v-if="!currentConvenio.nombre"
                              >
                                <label>*Comuna</label>
                                <Field 
                                                                    v-slot="{ field,handleChange }"
                                                                    v-model="cotizacionDetails.comuna"
                                                                    name="comuna"
                                                                    value="value"
                                                                  >
                                                                  <Prime-Dropdown filter v-model="cotizacionDetails.comuna" :options="allComunas" 
                                                                    optionLabel="nombre" optionValue="codigoComuna" placeholder="Seleccione Comuna" class="w-100"
                                                                    
                                                                    @update:modelValue="handleChange" :model-value="field.value" />
                                                                  </Field>
                                                                  <div class="fv-plugins-message-container">
                                                                      <div class="fv-help-block">
                                                                        <ErrorMessage name="comuna" />
                                                                      </div>
                                                                    </div> 
                              </div>
                              <div v-else class="form-group col-md-6">
                                <Field  type="hidden"
                                                                    v-model="cotizacionDetails.compania"
                                                                    name="comuna"
                                                                 />
                              </div>

                              
                              <div v-if="!currentConvenio.codigo || (currentConvenio && currentConvenio.esComuna)"
                                class="form-group col-md-6"
                              >
                                <label>*Compañía </label>
                                <Field 
                                                                    v-slot="{ field,handleChange }"
                                                                    v-model="cotizacionDetails.compania"
                                                                    name="compania"
                                                                    value="value"
                                                                    disabled="currentConvenio.nombre!='' && !currentConvenio.esComuna"
                                                                  >
                                                                  <Prime-Dropdown filter v-model="cotizacionDetails.compania" :options="allCompanias" 
                                                                    optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Compañía" class="w-100"
                                                                    
                                                                    @update:modelValue="handleChange" :model-value="field.value" />
                                                                  </Field>
                                                                  <div class="fv-plugins-message-container">
                                                                      <div class="fv-help-block">
                                                                        <ErrorMessage name="compania" />
                                                                      </div>
                                                                    </div> 
                              </div>
                              <div v-else>
                                 <Field  type="hidden"
                                                                    v-model="cotizacionDetails.compania"
                                                                    name="compania"
                                                                 />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--h2>Medios de Pago</h2>-->
                  <div class="ml-pay"></div>
                  
                  <div class="col-12 m-t-20 mt-20">
                    <router-link v-if="cotizacionDetails.cotizacionId  "
                      :to="{
                        name: 'info-persona', params:{id:cotizacionDetails.cotizacionId }
                      }"
                      class="btn btn-secondary"
                    >
                      Volver</router-link
                    >

                    <Prime-Button  onclick="gtag('event', 'Info_aporte')"
                                                      type="submit"
                                                      id="kt_account_edificio_details_submit"
                                                      :loading="loading"
                                                      :disabled="loading"
                                                      class="btn btn-primary"
                                                      label="Continuar"
                                                      />
                  </div>

                  <div class="mt-20 alert alert-secondary ml-pago">
                      <img src="/media/img/wp-mercadopago.png" style="max-width:213px"/>
                      <div class="text-black">Ahora puedes pagar con la confianza de Mercado Pago. 
                      Usa tus tarjetas de débito, crédito o prepago.
                      <p>Recuerda. Si tu tarjeta de débito tiene los 3 números en el reverso de la tarjeta, usa la opción <strong>con CVV</strong></p></div>
                  </div>
                </div>
              </Form>
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
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useMontoAporteStore } from "@/stores/montoAporte";
import { useComunaStore } from "@/stores/comuna";
import { useDestinoAporteStore } from "@/stores/destinoAporte";
import { useConvenioStore } from "@/stores/convenio";
import type { ICotizacion } from "@/stores/cotizacion";
import * as Yup from "yup";
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
    const router = useRouter();
    const store = useCotizacionStore();
    const storeMontoAporte = useMontoAporteStore();
    const storeComuna = useComunaStore();
    const storeDestinoAporte = useDestinoAporteStore();
    const storeCarro = useCarroCompraStore();
    const storeConvenio = useConvenioStore();
    const datosConfirmados = ref(false);
    const loading = ref(false);
    const campania = import.meta.env.VITE_APP_CONVENIO;
    const cotizacionsValidator = Yup.object().shape({
      comuna: Yup.string().required("Es obligatorio").label("Comuna"),
      compania: Yup.string().required("Es obligatorio").label("Compañía"),
    });

    
    const saveChanges1 = () => {
       loading.value = true;
        store.updateCotizacion(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
              router.push({ name: "info-confirmacion", params:{id:cotizacionDetails.value.carroId} });
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
    const cotizacionId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {     
      obtenerMontos(campania);
      obtenerComunas();
      await obtenerCotizacion(cotizacionId);
      await obtenerCarro(carro.carroId);
      if(storeCarro.currentCarroCompra.convenioAporte)
        await obtenerConvenio(storeCarro.currentCarroCompra.convenioAporte);
      if(storeCarro.currentCarroCompra.comuna)
        obtenerCompanias(storeCarro.currentCarroCompra.comuna);
      
    });
    const obtenerConvenio = async (codigo) => {
      await storeConvenio
        .getConvenio(codigo).then(()=>{
            if(storeConvenio.currentConvenio.esComuna){
              storeCarro.currentCarroCompra.comuna = storeConvenio.currentConvenio.nombre;
            } else {
              cotizacionDetails.value.compania = storeConvenio.currentConvenio.nombre;
            }
        });
    }
    const obtenerMontos = (canal:string) => {
      storeMontoAporte.getMontoAportes(canal)
        .catch(() => {
          const [error] = Object.values(storeMontoAporte.montoAporteErrors);
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
    const obtenerCompanias = (comuna) => {
      storeDestinoAporte.getDestinoAportes(comuna)
        .catch(() => {
          const [error] = Object.values(storeDestinoAporte.destinoAporteErrors);
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

    
    const obtenerCotizacion = async (cotizacionId) =>{
      await store
        .getCotizacion(cotizacionId)
        .then(() => {
          cotizacionDetails.value = store.currentCotizacion;
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
    const allMontosAporte = computed(() => {
      return storeMontoAporte.allMontoAportes;
    });
    
    const allComunas = computed(() => {
      return storeComuna.allComunas;
    });
    const allCompanias = computed(() => {
      return storeDestinoAporte.allDestinoAportes;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });
    const currentConvenio = computed(() => {
      return storeConvenio.currentConvenio;
    });
    
    const cotizacionDetails = ref<ICotizacion>({
       			cotizacionId : store.currentCotizacion.cotizacionId,
            carroId : store.currentCotizacion.carroId,
            numeroCotizacion : store.currentCotizacion.numeroCotizacion,
            codigoConvenio : store.currentCotizacion.codigoConvenio,
            codigoTipoSeguro : store.currentCotizacion.codigoTipoSeguro,
            tipoSeguro : store.currentCotizacion.tipoSeguro,
            grupoId : store.currentCotizacion.grupoId,
            vendedorId : store.currentCotizacion.vendedorId,
            fechaCreacion : store.currentCotizacion.fechaCreacion,
            estado : store.currentCotizacion.estado,
            contratado : store.currentCotizacion.contratado,
            fechaContratacion : store.currentCotizacion.fechaContratacion,
            usuario : store.currentCotizacion.usuario,
            nombrePlan : store.currentCotizacion.nombrePlan,
            planContratado : store.currentCotizacion.planContratado,
            planUf : store.currentCotizacion.planUf,
            planPesos : store.currentCotizacion.planPesos,
            comision : store.currentCotizacion.comision,
            valorUf : store.currentCotizacion.valorUf,
            aporte : store.currentCotizacion.aporte,
            numeroFolio : store.currentCotizacion.numeroFolio,
            numeroPoliza : store.currentCotizacion.numeroPoliza,
            fechaActualizacion : store.currentCotizacion.fechaActualizacion,
            usuarioActualizacion : store.currentCotizacion.usuarioActualizacion,
            tokenMedioPago : store.currentCotizacion.tokenMedioPago,
            codigoMedioPago : store.currentCotizacion.codigoMedioPago,
            montoPago : store.currentCotizacion.montoPago,
            fechaTransaccion : store.currentCotizacion.fechaTransaccion,
            exitoso : store.currentCotizacion.exitoso,
            emitida : store.currentCotizacion.emitida,
            anulada : store.currentCotizacion.anulada,
            pdfEnProceso : store.currentCotizacion.pdfEnProceso,
            codigoAutorizacion : store.currentCotizacion.codigoAutorizacion,
            fechaPago : store.currentCotizacion.fechaPago,
            mesPago : store.currentCotizacion.mesPago,
            anioPago : store.currentCotizacion.anioPago,
            numeroTarjeta : store.currentCotizacion.numeroTarjeta,
            notificado : store.currentCotizacion.notificado,
            codigoNotificacion : store.currentCotizacion.codigoNotificacion,
            cotizacionCompania : store.currentCotizacion.cotizacionCompania,
            urlPoliza : store.currentCotizacion.urlPoliza,
            fechaEmision : store.currentCotizacion.fechaEmision,
            fechaInicio : store.currentCotizacion.fechaInicio,
            fechaTermino : store.currentCotizacion.fechaTermino,
            compania : store.currentCotizacion.compania,
            vehiculo:store.currentCotizacion.vehiculo,
            cliente:store.currentCotizacion.cliente,
            patente:'',
            comuna:''
    
  });
    const actualizarAporte = (aporte) => {
      cotizacionDetails.value.aporte = aporte;
      cotizacionDetails.value.montoPago = cotizacionDetails.value.planPesos + aporte;
    }

    watch(() => cotizacionDetails.value.comuna, (newValue) =>  {
      if(cotizacionDetails.value.comuna)
        obtenerCompanias(newValue);
    });
    return {
      saveChanges1,
      actualizarAporte,
      cotizacionDetails,
      cotizacionsValidator,
      allMontosAporte,
      loading,
      currentCarroCompra,
      datosConfirmados,
      allCompanias,
      allComunas,
      currentConvenio
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