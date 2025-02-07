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
    <router-link v-if="cotizacionDetails.cotizacionId" :to="{ name: 'info-vehiculo', params: { id: cotizacionDetails.cotizacionId }}" class="btn-volver">
    <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
    <span>Volver</span>
  </router-link>
    <!-- Título a la derecha -->
    <h1 class="section-title">Suscripción del vehículo</h1>
  </div>

</section>


<section class="realiza-aporte-section">
  <Form
                                      id="kt_account_edificio_details_form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
  <div class="realiza-aporte-container">
    <!-- Encabezado -->
    <div class="encabezado">
      <h2>REALIZA TU APORTE</h2>
    </div>

    <!-- Información del vehículo -->
    <div class="info-vehiculo">
      <div class="vehiculo-imagen">
        <img src="/media/misc/auto.webp" alt="Imagen del vehículo">
      </div>
      <div class="plate-info">
          <span type="text" v-mask="'#### ##'" v-if="cotizacionDetails.vehiculo" disabled="disabled" maxlength="7" :value="cotizacionDetails.vehiculo.patente" placeholder="ABCD 20" class="form-control valor-patente">
            {{$filters.formatPatente(cotizacionDetails.vehiculo.patente)}}
          </span>
        <p>{{cotizacionDetails.vehiculo?.marca}} / {{cotizacionDetails.vehiculo?.modelo}} / {{cotizacionDetails.vehiculo?.anio}}</p>
        <p>{{cotizacionDetails.cliente?.nombre}} {{cotizacionDetails.cliente?.apellidoPaterno}} / Rut: {{cotizacionDetails.cliente?.rut}}</p>
      </div>
    </div>

    <!-- Aporte y cálculo -->
    <div class="aporte-calculo">
      <p><strong>Valor SOAP :</strong> <span class="valor-soap">{{$filters.formatCurrency(cotizacionDetails.planPesos)}}</span></p>
      <p><strong><img src="/media/misc/heart-icon.webp" alt="Corazón" class="shield-icon"> Tu Aporte :</strong></p>
      <div class="amount-options-container">
      <div class="amount-options">
          <template v-for="(item, x) in allMontosAporte" v-bind:key="x + '-ammount'">
          <input type="radio" :id="item.monto" name="contribution" :value="item.monto" checked v-if="cotizacionDetails.aporte === item.monto">
          <input type="radio" :id="item.monto" name="contribution" :value="item.monto" v-else>
          <label :for="item.monto" @click="actualizarAporte(item.monto)">{{$filters.formatCurrency(item.monto)}} </label>
          </template>
        </div>
      </div>
      <p><strong>Total a pagar :</strong> <span class="total-pagar">{{$filters.formatCurrency(cotizacionDetails.montoPago)}}</span></p>
    </div>

    <!-- Selección de compañía -->
    <div class="seleccion-compania">
      <p class="seleccion-compania-titulo">¿A cuál compañía de bomberos quieres realizar el aporte?</p>
      <div class="alert alert-primary" v-if="currentConvenio.mensaje">{{currentConvenio.mensaje}}</div>
      <div
                                class="form-group col-md-6"
                                v-if="!currentConvenio.nombre || (currentConvenio && currentConvenio.esEmbajador)"
                              >
        <label for="comuna">*Comuna</label>
        
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
                              <div v-if="!currentConvenio.codigo || (currentConvenio && currentConvenio.esComuna) || (currentConvenio && currentConvenio.esEmbajador)"
                                class="form-group col-md-6">
        <label for="compania">*Compañía de bomberos</label>
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

    <!-- Botones -->
    <div class="botones">
      <router-link v-if="cotizacionDetails.cotizacionId  "
                      :to="{
                        name: 'info-persona', params:{id:cotizacionDetails.cotizacionId }
                      }" class="volver-button">VOLVER</router-link>
      <Prime-Button  onclick="gtag('event', 'Info_aporte')"
          type="submit"
          id="kt_account_edificio_details_submit"
          :loading="loading"
          :disabled="loading"
          class="continuar-button"
          label="Continuar"
          />
                                                      
    </div>
  </div>
</Form>
</section>


<section class="auto-payment-section">
  <div class="auto-payment-content">
    <h2>¡LIBÉRATE DE LOS PAGOS!</h2>
    <p>Vincula tu Tarjeta de Crédito y los siguientes pagos se realizarán de manera automática.</p>
  </div>
</section>



<div class="mercado-pago-banner">
  <img src="/media/misc/logo-mercado-pago2.webp" alt="Mercado Pago Logo" class="mercado-logo">
  <div class="mercado-text">
    <p>Ahora puedes pagar con la confianza de Mercado Pago. Usa tus tarjetas de débito, crédito o prepago.</p>
    <p><strong>Recuerda:</strong> Si tu tarjeta de débito tiene los 3 números en el reverso de la tarjeta, usa la opción <strong>con CVV</strong></p>
  </div>
</div>

<section class="image-section">
  <div class="image-container">
    <img src="/media/misc/imagen-bomberos.webp" alt="Descripción de la imagen">
  </div>
</section>

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
            loading.value = false;
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
      await obtenerCotizacion(carro.carroId, cotizacionId);
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
              storeCarro.currentCarroCompra.comuna = storeConvenio.currentConvenio.comuna;
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

    
    const obtenerCotizacion = async (carroId, cotizacionId) =>{
      await store
        .getCotizacion({carroId, cotizacionId})
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
      if(storeConvenio.currentConvenio.esComuna){
        cotizacionDetails.value.comuna = storeConvenio.currentConvenio.comuna;
      }
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