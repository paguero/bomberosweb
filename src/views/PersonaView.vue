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
  <a>Datos del propietario</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link v-if="cotizacionDetails.cotizacionId" :to="{ name: 'info-vehiculo', params: { id: cotizacionDetails.cotizacionId }}" class="btn-volver">
    <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
    <span>Volver</span>
  </router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Datos del propietario</h1>
</div>

</section>

<section class="vehicle-data-section">
  <Form
                                      id="kt_account_edificio_details_form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
<!-- COLUMNA DERECHA: DATOS DEL PROPIETARIO -->
<div class="datos-propietario" v-if="cotizacionDetails.cliente">
  <!-- Encabezado azul -->
  <div class="header-blue">
    <h2>Datos del propietario del vehículo</h2>
    <p>En caso de no estar actualizados, corregir sobre el mismo campo.</p>
  </div>

  <!-- Contenido / Formulario del propietario -->
  <div class="propietario-form">
    <div class="form-row">
      <div class="form-group">
        <label for="rut">*RUT</label>
        <Field 
            v-slot="{ field,handleChange }"
            v-model="cotizacionDetails.cliente.rut"
            name="rut"
            value="value"
          >
            <Prime-InputText
          class="form-control form-rut"
          size="lg"
          id="rut"
          name="rut"
          maxlength="11"
          placeholder="Rut"
          v-bind="field"
          @update:modelValue="handleChange" :model-value="field.value"
          v-model="cotizacionDetails.cliente.rut"
          />
          </Field>    
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="rut" />
              </div>
            </div>
      </div>
      <div class="form-group">
        <label for="nombre">*Nombre / Razón Social</label>
        <Field 
              v-slot="{ field,handleChange }"
              v-model="cotizacionDetails.cliente.nombre"
              name="nombre"
              value="value"
            >
              <Prime-InputText
                          class="form-control form-patente"
                          maxlength="75"
                          placeholder="Ingrese Nombres"
                          v-model="cotizacionDetails.cliente.nombre"
                          v-bind="field"
            @update:modelValue="handleChange" :model-value="field.value"
                          /></Field>
                        <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nombre" />
                </div>
              </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="apellido-p">*Apellido Paterno</label>
        <Field 
              v-slot="{ field,handleChange }"
              v-model="cotizacionDetails.cliente.apellidoPaterno"
              name="apellidoPaterno"
              value="value"
            >
              <Prime-InputText
                          class="form-control"
                          maxlength="75"
                          placeholder="Ingrese Apellido Paterno"
                          v-model="cotizacionDetails.cliente.apellidoPaterno"
                          v-bind="field"
            @update:modelValue="handleChange" :model-value="field.value"
                          /></Field>
                          <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="apellidoPaterno" />
                </div>
              </div>
      </div>
      <div class="form-group">
        <label for="apellido-m">*Apellido Materno</label>
        <Field 
              v-slot="{ field,handleChange }"
              v-model="cotizacionDetails.cliente.apellidoMaterno"
              name="apellidoMaterno"
              value="value"
            >
              <Prime-InputText
                          class="form-control"
                          maxlength="75"
                          placeholder="Ingrese Apellido Materno"
                          v-model="cotizacionDetails.cliente.apellidoMaterno"
                          v-bind="field"
            @update:modelValue="handleChange" :model-value="field.value"/>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="apellidoMaterno" />
                </div>
              </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="email">*Correo electrónico</label>
        <Field 
            v-slot="{ field,handleChange }"
            v-model="cotizacionDetails.cliente.email"
            name="email"
          >
            <Prime-InputText
                        class="form-control"
                        maxlength="75"
                        placeholder="Ingrese Email"
                        v-model="cotizacionDetails.cliente.email"
                        v-bind="field"
          @update:modelValue="handleChange" :model-value="field.value"
                        />
                        </Field>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="email" />
              </div>
            </div>
      </div>
      <div class="form-group">
        <label for="telefono">*Teléfono de contacto</label>
        <Field v-slot="{ field,handleChange }"
            v-model="cotizacionDetails.cliente.telefono"
            name="telefono"
          >
            <Prime-InputText
                        class="form-control"
                        maxlength="12"
                        placeholder="978542514"
                        v-model="cotizacionDetails.cliente.telefono"
                        v-bind="field"
          @update:modelValue="handleChange" :model-value="field.value"
                        />
                        </Field>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="telefono" />
              </div>
            </div>
      </div>
    </div>

    <!-- Checkbox He revisado información -->
    <div class="checks-row">
      <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.datosConfirmados"
          name="datosConfirmados"
          
        >
      <Prime-Checkbox id="chbx" v-model="cotizacionDetails.datosConfirmados" :class="{ 'p-invalid': errorMessage }" binary  @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
      <label for="acepto">
        He revisado la información <br>
        <span class="small-text">La información que aparece es correcta.</span>
      </label>
    </div>
    <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="datosConfirmados" />
            </div>
          </div> 
  </div>
</div>

<div class="continue-container">
    <Prime-Button 
      type="submit"
      class="continue-button"
      label="Continuar" :loading="loading">
      <span class="main-text">CONTINUA</span><br/><span class="sub-text">y haz tu aporte</span>
    </Prime-Button>
  </div>

</Form>
</section>


  
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useClienteStore } from "@/stores/cliente";
import type { ICotizacion } from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { rutEsValido } from "@/core/validators/YupRut";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useCotizacionStore();
    const storeCliente = useClienteStore();
    const storeCarro = useCarroCompraStore();
    const datosConfirmados = ref(false);
    const loading = ref(false);
    const esPersona= ref(false); 
    const cotizacionsValidator = Yup.object().shape({
      rut: Yup.string().required("Es obligatorio").label("Rut").test("yupIsRut", "Rut ingresado no es valido", function (value) {
          return rutEsValido(value);
        }),
		  nombre: Yup.string().required("Es obligatorio").label("Nombre"),
		  apellidoPaterno: Yup.string().label("Rut").test("requiredIsPersona", "Es obligatorio", function (value) {
          return  (esPersona.value && value!='')|| !esPersona.value;
        }),
		  apellidoMaterno: Yup.string().label("Rut").test("requiredIsPersona", "Es obligatorio", function (value) {
          return  (esPersona.value && value!='')|| !esPersona.value;
        }),
		  email: Yup.string().required("Es obligatorio").email("Email inválido").label("Email"),
      telefono: Yup.string().required("Es obligatorio").label("telefono"),
      datosConfirmados: Yup.bool().required("Es obligatorio").label("datosConfirmados")

    });
    Yup.addMethod(Yup.string, "requiredIsPersona", function (mensaje) {
      const { message } = mensaje;
      return this.test("requiredIsPersona", message, function (value) {
        const { path, createError } = this;
        const { some, more, args } = mensaje;
        return esPersona.value && value!='';
      });
    });
    Yup.addMethod(Yup.string, "yupIsRut", function (mensaje) {
      const { message } = mensaje;
      return this.test("yupIsRut", message, function (value) {
        const { path, createError } = this;
        const { some, more, args } = mensaje;
        // [value] - value of the property being tested
        // [path]  - property name,
        // ...
        return rutEsValido(value);
      });
    });
    
    const saveChanges1 = () => {
        loading.value=true;
        storeCliente.updateCliente(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            router.push({ name: "info-vehiculo", params:{id:cotizacionDetails.value.cotizacionId} });
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
          });    };
   
    const route = useRoute();
    const cotizacionId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {     
      await obtenerCotizacion(carro.carroId, cotizacionId);
      window.scrollTo({
        top: 650,
        left: 0,
        behavior: "smooth",
      });
    });
    
    const obtenerCotizacion = (carroId, cotizacionId) =>{
      store
        .getCotizacion({carroId, cotizacionId})
        .then(() => {
          cotizacionDetails.value = store.currentCotizacion;
          esPersona.value = parseInt(store.currentCotizacion.cliente.rut.split('-')[0])<50000000;
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
    
  });
     watch(() => cotizacionDetails.value.cliente?.rut, (newValue) =>  {
      esPersona.value = parseInt(newValue.split('-')[0])<50000000;
    });
 
    return {
      loading,
      saveChanges1,
      cotizacionDetails,
      cotizacionsValidator,
      datosConfirmados,
      esPersona
    };
  },
});


</script>
