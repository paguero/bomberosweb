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
    <button class="btn-volver" onclick="history.back()">
      <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
      <span>Volver</span>
    </button>

    <!-- Título a la derecha -->
    <h1 class="section-title">Datos del vehículo</h1>
  </div>

</section>


<section class="section-slider" v-if="mostrarVigencia">
    <div class="slider-container">
        <div style="height: 184px!important;" data-bs-ride="carousel" data-v-38c47deb="">
            <div class="carousel-inner" data-v-38c47deb="">
                <div class="p-10 pt-5 text-white" data-v-38c47deb="" style="background-image:url('/media/banners/vigencia-extendida-.png')!important">
                    <div class="flex-column align-items-start justify-content-center pb-10" data-v-38c47deb="">
                        <h2 class="text-white">
                            ¿Necesitas tu SOAP con cobertura desde hoy?
                        </h2>
                        <p>Si tu auto es nuevo o no cuentas con tu SOAP vigente al día de hoy, <br/>puedes contratarlo y obtener cobertura inmediata.</p>
                        <p v-for="prima in primasExtendidas">
                          {{prima.codigoTipoVehiculo}}: {{$filters.formatCurrency(prima.primaTecnica)}}
                        </p>
                        <button @click="vigenciaExtendida" class="benefit-button mb-5" data-v-38c47deb="">Lo necesito <span data-v-38c47deb="">→</span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="vehicle-data-section">
  <Form
                                      id="kt_account_edificio_details_form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
<!-- COLUMNA IZQUIERDA: DATOS DEL VEHÍCULO -->
<div class="datos-vehiculo" v-if="cotizacionDetails.vehiculo">
  <!-- Encabezado verde -->
  <div class="header-green">
    <h2>Datos del vehículo a asegurar</h2>
    <p>Verifica los datos con el padrón del auto.</p>
    <span>El valor de tu SOAP es <strong> {{$filters.formatCurrency(cotizacionDetails.planPesos)}}</strong></span>
  </div>

  <!-- Contenido / Formulario del vehículo -->
  <div class="vehiculo-form">
    <div class="form-row">
      <div class="form-group">
        <label for="patente">*Ingrese Patente</label>
        <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.vehiculo.patente"
          name="patente"
          value="value"
          v-mask="'AAAAAA'"
          @change="obtenerVehiculo"
        >
        <Prime-InputText
        class="form-control form-patente p-2"
        name="patente"
        maxlength="8"
        v-bind="field"
        @update:modelValue="handleChange" :model-value="field.value"
        placeholder="ABCD20"
        v-model="cotizacionDetails.vehiculo.patente"
        />
        </Field>    
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="patente" />
            </div>
          </div>  
      </div>
      <div class="form-group">
        <label for="tipo-vehiculo">*Tipo de Vehículo</label>
        <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.vehiculo.tipoVehiculo"
          name="tipoVehiculo"
          value="value"
        >
          <Prime-Dropdown v-model="cotizacionDetails.vehiculo.tipoVehiculo" :options="allTipos" 
          optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Tipo de vehículo" class="w-100"
            @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="tipovehiculo" />
            </div>
          </div> 
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="marca">*Marca del Vehículo</label>
        <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.vehiculo.marca"
          name="marca"
          value="value"
        >
          <Prime-Dropdown filter v-model="cotizacionDetails.vehiculo.marca" :options="allMarcas" 
          optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Marca" class="w-100"
          
          @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="marca" />
            </div>
          </div> 
      </div>
      <div class="form-group">
        <label for="modelo">*Modelo del Vehículo</label>
        <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.vehiculo.modelo"
          name="modelo"
          value="value"
        >
          <Prime-Dropdown filter v-model="cotizacionDetails.vehiculo.modelo" :options="allModelos" 
          optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Modelo" class="w-100" 
            @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="modelo" />
            </div>
          </div> 
      </div>
    </div>

    <div class="form-row">
      <div class="form-group">
        <label for="numero-motor">*N° Motor</label>
        <Field type="text"
          maxlength="50" name="numeroMotor"
          class="form-control p-2"
          placeholder="PE30977676"
          v-model="cotizacionDetails.vehiculo.numeroMotor"/>
          <div class="fv-plugins-message-container">
        <div class="fv-help-block">
          <ErrorMessage name="numeroMotor" />
        </div>
      </div> 
      </div>
      <div class="form-group">
        <label for="anio-vehiculo">*Año del Vehículo</label>
        <Prime-Dropdown v-model="cotizacionDetails.vehiculo.anio" :options="allAnios" 
                                                                 placeholder="Seleccione Año" class="w-100" />
      </div>
    </div>

    <!-- Checkbox Políticas y Términos -->
    <div class="checks-row">
      <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.datosConfirmados"
          name="datosConfirmados"
          
        >
            <Prime-Checkbox id="chbx" v-model="cotizacionDetails.datosConfirmados" :class="{ 'p-invalid': errorMessage }" binary  @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
          <label for="acepto">
            Acepto las políticas, <a href="/info-condiciones" target="_blank">términos y condiciones</a>
          </label>
    </div>
    <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="datosConfirmados" />
            </div>
          </div> 
    <div class="checks-row">
      <Field 
          v-slot="{ field,handleChange }"
          v-model="cotizacionDetails.aceptoComercial"
          name="aceptoComercial"
          
        >
            <Prime-Checkbox id="chbx" v-model="cotizacionDetails.aceptoComercial" :class="{ 'p-invalid': errorMessage }" binary  @update:modelValue="handleChange" :model-value="field.value" />
          </Field>
          <label for="acepto">
            *Acepto específicamente el uso de mis datos para finalidades comerciales.
          </label>
    </div>
    <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="aceptoComercial" />
            </div>
          </div> 
  </div>
</div>

  <div class="continue-container">
    <Prime-Button 
      type="submit"
      class="continue-button"
      label="" :loading="loading">
      <span class="main-text">CONTINUA</span><br/><span class="sub-text">y haz tu aporte</span>
    </Prime-Button>
  </div>
  </Form>
</section>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useMarcaStore } from "@/stores/marca";
import { useModeloStore } from "@/stores/modelo";
import { useTipoVehiculoStore } from "@/stores/tipoVehiculo";
import { useVehiculoStore } from "@/stores/vehiculo";
import { useAnioStore } from "@/stores/anio"; 
import { usePrimaSoapStore } from "@/stores/primaSoap";
import type { ICotizacion } from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { vMaska } from "maska"
import { patenteEsValido } from "@/core/validators/YupPatente";
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
    const storeMarca = useMarcaStore();
    const storeModelo = useModeloStore();
    const storeTipo = useTipoVehiculoStore();
    const storeAnio = useAnioStore();
    const storeCarro = useCarroCompraStore();
    const storeVehiculo = useVehiculoStore();
    const storePrima = usePrimaSoapStore();
    const datosConfirmados = ref(false);
    const loading = ref(true);
    const visible = ref(false);
    const mostrarVigencia = ref(false);
    const modelos = ref([]);

    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  marca: Yup.string().required("Es obligatorio").label("Marca"),
		  modelo: Yup.string().required("Es obligatorio").label("Modelo"),
		  tipoVehiculo: Yup.string().required("Es obligatorio").label("Tipo Vehículo"),
		  numeroMotor: Yup.string().required("Es obligatorio").label("numeroMotor"),
      datosConfirmados: Yup.bool().required("Es obligatorio").label("datosConfirmados"),
      aceptoComercial: Yup.bool().required("Es obligatorio").label("datosConfirmados")
    });

    Yup.addMethod(Yup.string, "yupIsPatente", function (mensaje) {
      const { message } = mensaje;
      return this.test("yupIsPatente", message, function (value) {
        const { path, createError } = this;
        const { some, more, args } = mensaje;
        // [value] - value of the property being tested
        // [path]  - property name,
        // ...
        return patenteEsValido(value);
      });
    });
    const saveChanges1 = () => {
      loading.value = true;
        storeVehiculo.updateVehiculo(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            router.push({ name: "info-persona", params:{id:cotizacionDetails.value.cotizacionId} });
          })
          .catch(() => {
            const [error] = Object.values(storeVehiculo.vehiculoErrors);
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
    const vigenciaExtendida = () => {
      loading.value = true;
        storeVehiculo.updateVehiculoExtension(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            location.href = "/info-vehiculo/" + cotizacionDetails.value.cotizacionId;
          })
          .catch(() => {
            const [error] = Object.values(storeVehiculo.vehiculoErrors);
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
      obtenerAnios();
      loading.value = true;
      await obtenerCotizacion(carro.carroId, cotizacionId);
      obtenerTipos(store.currentCotizacion.codigoConvenio);
      //obtenerCarro(carro.carroId);
      loading.value=false;
      window.scrollTo({
        top: 650,
        left: 0,
        behavior: "smooth",
      });
    });
    const obtenerMarcas = async  (tipoVehiculo: string) => {
      await storeTipo.getTipoVehiculo(tipoVehiculo);
      obtenerModelos(cotizacionDetails.value.vehiculo?.marca);
    };
    const obtenerModelos = (marca: string) => {
      modelos.value = allMarcas.value?.find(c=>c.codigo==marca).modelos;
    };
    const obtenerTipos = (campania:string) => {
      storeTipo.getTipoVehiculos(campania)
        .catch(() => {
          const [error] = Object.values(storeTipo.tipoVehiculoErrors);
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
    const obtenerAnios = () => {
      storeAnio.getAnios();
    };
    const obtenerCotizacion = async (carroId, cotizacionId) =>{
      await store
        .getCotizacion({carroId, cotizacionId})
        .then(() => {
          cotizacionDetails.value = store.currentCotizacion;
          cotizacionDetails.value.patente = store.currentCotizacion.vehiculo?.patente;
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

    const obtenerPrimaExtendida = async (tipoVehiculo) =>{
      await storePrima
        .getPrimaSoapExtendida(tipoVehiculo)
        .then(() => {
          loading.value = false;
          if(storePrima.allPrimasVigencia.length>0)
          {
            let fecha = moment(store.currentCotizacion.fechaInicio); 
            let hoy = moment(); // Esto obtiene la fecha y hora actual
            if (fecha.isAfter(hoy, 'day')) {
              mostrarVigencia.value = true;
            }
          }
        });
    } 
    const obtenerPrima = async (tipoVehiculo) =>{
      await storePrima
        .getPrimaSoap(cotizacionDetails.value.codigoConvenio, tipoVehiculo)
        .then(() => {
          loading.value = false;
          cotizacionDetails.value.planPesos = storePrima.currentPrimaSoap.primaTecnica;
          //cotizacionDetails.value.montoPago = storePrima.currentPrimaSoap.primaTecnica + cotizacionDetails.value.aporte;
        })
        .catch(() => {
          const [error] = Object.values(storePrima.primaSoapErrors);
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
    const obtenerVehiculo= async () =>{
      await storeVehiculo
        .getVehiculo(cotizacionDetails.value.vehiculo.patente)
        .then(() => {
          cotizacionDetails.value.patente = cotizacionDetails.value.vehiculo.patente;
          cotizacionDetails.value.vehiculo = storeVehiculo.currentVehiculo;
          //obtenerModelos(store.currentCotizacion.codigoConvenio, storeVehiculo.currentVehiculo.marca, storeVehiculo.currentVehiculo.tipoVehiculo);
        })
        .catch(() => {
          const [error] = Object.values(storeVehiculo.vehiculoErrors);
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
    const allMarcas = computed(() => {
      return storeTipo.currentTipoVehiculo.marcas;
    });
    const allModelos = computed(() => {
      return modelos.value;
    });
    const allTipos = computed(() => {
      return storeTipo.allTipoVehiculos;
    });
    const allAnios = computed(() => {
      return storeAnio.allAnios;
    });
    const primasExtendidas = computed(() => {
      return storePrima.allPrimasVigencia;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
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
            patente:store.currentCotizacion?.vehiculo?.patente
    
  });
    watch(async () => cotizacionDetails.value.vehiculo?.tipoVehiculo, async (newValue) =>  {
      if(cotizacionDetails.value.vehiculo)
        obtenerPrima(await newValue);
        obtenerPrimaExtendida(await newValue);
        await obtenerMarcas(await newValue);
    });
    watch(() => cotizacionDetails.value.vehiculo?.marca, (newValue) =>  {
      if(allMarcas.value && allMarcas.value?.length>0)
        obtenerModelos(newValue);
    });
    
    /*watch(() => cotizacionDetails.value.vehiculo?.patente, (newValue) =>  {
      if(cotizacionDetails.value.vehiculo)
        obtenerVehiculo(newValue);
    });*/
    return {
      saveChanges1,
      cotizacionDetails,
      cotizacionsValidator,
      allMarcas,
      allModelos,
      allTipos,
      allAnios,
      currentCarroCompra,
      obtenerVehiculo,
      datosConfirmados,
      loading,
      visible,
      vigenciaExtendida,
      mostrarVigencia,
      primasExtendidas
    };
  },
});


</script>
