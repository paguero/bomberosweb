<template>

<section class="breadcrumb-section">
    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
        <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon" />
        <router-link :to="{name:'home'}">Inicio</router-link>
        <span>/</span>
        <a href="#">Modifica tu póliza</a>
    </nav>

    <div class="volver-container">
        <!-- Botón Volver -->
        <router-link :to="{ name: 'home'}" class="btn-volver">
            <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon" />
            <span>Volver</span>
        </router-link>

        <!-- Título a la derecha -->
        <h1 class="section-title">Modifica tu póliza</h1>
    </div>
</section>

<Form @submit="onSubmit" class="d-flex gap-4 w-80 flex-column vehicle-data-section" :validation-schema="formulario">
    <section class="vehicle-data-section" v-if="cotizacionDetails.vehiculo">
        <!-- COLUMNA DERECHA: DATOS DEL PROPIETARIO -->
        <div class="datos-vehiculo" v-if="cotizacionDetails.cliente">
            <!-- Encabezado verde -->
            <div class="header-green">
                <h2>Datos del vehículo a asegurar</h2>
                <p>Verifica los datos con el padrón del auto.</p>
            </div>

            <!-- Contenido / Formulario del vehiculo -->
            <div class="vehiculo-form">
                <div class="form-row">
                    <div class="form-group">
                        <p>*Ingrese Patente</p>
                        <Field v-slot="{ field, handleChange }" v-model="cotizacionDetails.vehiculo.patente" name="patente" value="value" v-mask="'AAAAAA'" @change="obtenerVehiculo">
                            <Prime-InputText
                                class="form-control form-patente p-2"
                                name="patente"
                                maxlength="8"
                                v-bind="field"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
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
                        <p>*Marca del Vehículo</p>
                        <Field v-slot="{ field, handleChange }" v-model="cotizacionDetails.vehiculo.marca" name="marca" value="value">
                            <Prime-Dropdown
                                filter
                                v-model="cotizacionDetails.vehiculo.marca"
                                :options="allMarcas"
                                optionLabel="nombre"
                                optionValue="nombre"
                                placeholder="Seleccione Marca"
                                class="w-100"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                            />
                        </Field>
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="marca" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <p>*Modelo del Vehículo</p>
                        <Field v-slot="{ field, handleChange }" v-model="cotizacionDetails.vehiculo.modelo" name="modelo" value="value">
                            <Prime-Dropdown
                                v-model="cotizacionDetails.vehiculo.modelo"
                                :options="allModelos"
                                optionLabel="nombre"
                                optionValue="nombre"
                                placeholder="Seleccione Modelo"
                                class="w-100"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                            />
                        </Field>
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="modelo" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <p>*Tipo de Vehículo</p>

                        <Field v-slot="{ field, handleChange }" v-model="cotizacionDetails.vehiculo.tipoVehiculo" name="tipoVehiculo" value="value">
                            <Prime-Dropdown
                                v-model="cotizacionDetails.vehiculo.tipoVehiculo"
                                :options="allTipos"
                                optionLabel="nombre"
                                optionValue="nombre"
                                placeholder="Seleccione Tipo de vehículo"
                                class="w-100"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                                :disabled="true"
                            />
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
                        <p>*Nº Motor</p>
                        <Field type="text" maxlength="50" name="numeroMotor" class="form-control p-2" placeholder="Numero Motor" v-model="cotizacionDetails.vehiculo.numeroMotor" />
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="numeroMotor" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <p>*Año del vehículo</p>
                        <Prime-Dropdown v-model="cotizacionDetails.vehiculo.anio" :options="allAnios" placeholder="Seleccione aAño" class="w-100" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="propietario-data-section">
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
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.rut" name="rut" value="value">
                            <Prime-InputText
                                class="form-control form-rut"
                                size="lg"
                                id="rut"
                                name="rut"
                                maxlength="11"
                                placeholder="Rut"
                                v-bind="field"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
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
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.nombre" name="nombre" value="value">
                            <Prime-InputText
                                class="form-control form-patente"
                                maxlength="75"
                                placeholder="Ingrese Nombres"
                                v-model="cotizacionDetails.cliente.nombre"
                                v-bind="field"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                            />
                        </Field>
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
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.apellidoPaterno" name="apellidoPaterno" value="value">
                            <Prime-InputText
                                class="form-control"
                                maxlength="75"
                                placeholder="Ingrese Apellido Paterno"
                                v-model="cotizacionDetails.cliente.apellidoPaterno"
                                v-bind="field"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                            />
                        </Field>
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="apellidoPaterno" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="apellido-m">*Apellido Materno</label>
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.apellidoMaterno" name="apellidoMaterno" value="value">
                            <Prime-InputText
                                class="form-control"
                                maxlength="75"
                                placeholder="Ingrese Apellido Materno"
                                v-model="cotizacionDetails.cliente.apellidoMaterno"
                                v-bind="field"
                                @update:modelValue="handleChange"
                                :model-value="field.value"
                            />
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
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.email" name="email">
                            <Prime-InputText class="form-control" maxlength="75" placeholder="Ingrese Email" v-model="cotizacionDetails.cliente.email" v-bind="field" @update:modelValue="handleChange" :model-value="field.value" />
                        </Field>
                        <div class="fv-plugins-message-container">
                            <div class="fv-help-block">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="telefono">*Teléfono de contacto</label>
                        <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.cliente.telefono" name="telefono">
                            <Prime-InputText class="form-control" maxlength="12" placeholder="978542514" v-model="cotizacionDetails.cliente.telefono" v-bind="field" @update:modelValue="handleChange" :model-value="field.value" />
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
                    <Field v-slot="{ field,handleChange }" v-model="cotizacionDetails.datosConfirmados" name="datosConfirmados">
                        <Prime-Checkbox id="chbx" v-model="cotizacionDetails.datosConfirmados" :class="{ 'p-invalid': errorMessage }" binary @update:modelValue="handleChange" :model-value="field.value" />
                    </Field>
                    <label for="acepto">
                        He revisado la información <br />
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
            <Prime-Button type="submit" class="continue-button" label="Continuar" :loading="loading" />
        </div>
    </section>
</Form>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useRouter, useRoute } from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
const storeCotizacion = useCotizacionStore();
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
const router = useRouter();
const route = useRoute();

import { useCarroCompraStore } from "@/stores/carroCompra";

import { useMarcaStore } from "@/stores/marca";
import { useModeloStore } from "@/stores/modelo";
import { useTipoVehiculoStore } from "@/stores/tipoVehiculo";
import { useVehiculoStore } from "@/stores/vehiculo";
import { useAnioStore } from "@/stores/anio";
import { usePrimaSoapStore } from "@/stores/primaSoap";
import type { ICotizacion } from "@/stores/cotizacion";
import { rutEsValido } from "@/core/validators/YupRut";
import { vMaska } from "maska";
import { patenteEsValido } from "@/core/validators/YupPatente";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

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
const esPersona= ref(false);
const modelos = ref([]);
const formulario = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  marca: Yup.string().required("Es obligatorio").label("Marca"),
		  modelo: Yup.string().required("Es obligatorio").label("Modelo"),
		  tipoVehiculo: Yup.string().required("Es obligatorio").label("Tipo Vehículo"),
		  numeroMotor: Yup.string().required("Es obligatorio").label("numeroMotor"),
           rut: Yup.string().required("Es obligatorio").label("Rut").test("yupIsRut", "Rut ingresado no es valido", function (value) {
          return rutEsValido(value);
        }),
        datosConfirmados: Yup.bool().required("Es obligatorio").label("datosConfirmados"),
  nombre: Yup.string().required("Es obligatorio").label("Nombre"),
  apellidoPaterno: Yup.string().label("Rut").test("requiredIsPersona", "Es obligatorio", function (value) {
          return  (esPersona.value && value!='')|| !esPersona.value;
        }),
		  apellidoMaterno: Yup.string().label("Rut").test("requiredIsPersona", "Es obligatorio", function (value) {
          return  (esPersona.value && value!='')|| !esPersona.value;
        }),
  email: Yup.string()
    .required("Es obligatorio")
    .email("Email inválido")
    .label("Email"),
    telefono: Yup.string().required("Es obligatorio").label("telefono"),
      
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

const onSubmit = async (values) => {

   if(!esPersona.value){
    cotizacionDetails.value.cliente.apellidoMaterno='';
    cotizacionDetails.value.cliente.apellidoPaterno='';
  }
  await storeCotizacion
    .endoso(cotizacionDetails.value
    )
    .then(() => {
      Swal.fire({
            text: 'Tu póliza ha sido modificada. Llegará pronto a tu correo electrónico.',
            icon: "info",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          }).then(function () {
              router.push({ name: "info-comprobante", params: {id:cotizacionDetails.value.carroId} });
            });
      
    })
    .catch(() => {
      const [error] = Object.values(storeCotizacion.cotizacionErrors);
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

const cotizacionId = route.params.id;
const carroId = route.params.carroId;
onMounted(async () => {
  obtenerAnios();
  loading.value = true;
  await obtenerCotizacion(carroId, cotizacionId);
  obtenerTipos(storeCotizacion.currentCotizacion.codigoConvenio);
  loading.value = false;
});
const obtenerMarcas = async  (tipoVehiculo: string) => {
    await storeTipo.getTipoVehiculo(tipoVehiculo);
    obtenerModelos(cotizacionDetails.value.vehiculo?.marca);
  };

const obtenerModelos = (marca: string) => {
      console.log(marca + ' > ' + storeTipo.currentTipoVehiculo.marcas + ' >> ' + allMarcas.value);
      modelos.value = allMarcas.value?.find(c=>c.codigo==marca).modelos;
    };
const obtenerTipos = (campania: string) => {
  storeTipo.getTipoVehiculos(campania).catch(() => {
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
    });
  });
};
const obtenerAnios = () => {
  storeAnio.getAnios();
};
const obtenerCotizacion = async (carroId, cotizacionId) =>{
      await storeCotizacion
        .getCotizacion({carroId, cotizacionId})
        .then(() => {
          cotizacionDetails.value = storeCotizacion.currentCotizacion;
          cotizacionDetails.value.patente = storeCotizacion.currentCotizacion.vehiculo?.patente
        })
        .catch(() => {
          const [error] = Object.values(storeCotizacion.cotizacionErrors);
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

const obtenerVehiculo = async () => {
  await storeVehiculo
    .getVehiculo(cotizacionDetails.value.vehiculo.patente)
    .then(() => {
      cotizacionDetails.value.patente =
        cotizacionDetails.value.vehiculo.patente;
      cotizacionDetails.value.vehiculo = storeVehiculo.currentVehiculo;
      
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
const currentCarroCompra = computed(() => {
  return storeCarro.currentCarroCompra;
});
const cotizacionDetails = ref<ICotizacion>({
  cotizacionId: storeCotizacion.currentCotizacion.cotizacionId,
  carroId: storeCotizacion.currentCotizacion.carroId,
  numeroCotizacion: storeCotizacion.currentCotizacion.numeroCotizacion,
  codigoConvenio: storeCotizacion.currentCotizacion.codigoConvenio,
  codigoTipoSeguro: storeCotizacion.currentCotizacion.codigoTipoSeguro,
  tipoSeguro: storeCotizacion.currentCotizacion.tipoSeguro,
  grupoId: storeCotizacion.currentCotizacion.grupoId,
  vendedorId: storeCotizacion.currentCotizacion.vendedorId,
  fechaCreacion: storeCotizacion.currentCotizacion.fechaCreacion,
  estado: storeCotizacion.currentCotizacion.estado,
  contratado: storeCotizacion.currentCotizacion.contratado,
  fechaContratacion: storeCotizacion.currentCotizacion.fechaContratacion,
  usuario: storeCotizacion.currentCotizacion.usuario,
  nombrePlan: storeCotizacion.currentCotizacion.nombrePlan,
  planContratado: storeCotizacion.currentCotizacion.planContratado,
  planUf: storeCotizacion.currentCotizacion.planUf,
  planPesos: storeCotizacion.currentCotizacion.planPesos,
  comision: storeCotizacion.currentCotizacion.comision,
  valorUf: storeCotizacion.currentCotizacion.valorUf,
  aporte: storeCotizacion.currentCotizacion.aporte,
  numeroFolio: storeCotizacion.currentCotizacion.numeroFolio,
  numeroPoliza: storeCotizacion.currentCotizacion.numeroPoliza,
  fechaActualizacion: storeCotizacion.currentCotizacion.fechaActualizacion,
  usuarioActualizacion: storeCotizacion.currentCotizacion.usuarioActualizacion,
  tokenMedioPago: storeCotizacion.currentCotizacion.tokenMedioPago,
  codigoMedioPago: storeCotizacion.currentCotizacion.codigoMedioPago,
  montoPago: storeCotizacion.currentCotizacion.montoPago,
  fechaTransaccion: storeCotizacion.currentCotizacion.fechaTransaccion,
  exitoso: storeCotizacion.currentCotizacion.exitoso,
  emitida: storeCotizacion.currentCotizacion.emitida,
  anulada: storeCotizacion.currentCotizacion.anulada,
  pdfEnProceso: storeCotizacion.currentCotizacion.pdfEnProceso,
  codigoAutorizacion: storeCotizacion.currentCotizacion.codigoAutorizacion,
  fechaPago: storeCotizacion.currentCotizacion.fechaPago,
  mesPago: storeCotizacion.currentCotizacion.mesPago,
  anioPago: storeCotizacion.currentCotizacion.anioPago,
  numeroTarjeta: storeCotizacion.currentCotizacion.numeroTarjeta,
  notificado: storeCotizacion.currentCotizacion.notificado,
  codigoNotificacion: storeCotizacion.currentCotizacion.codigoNotificacion,
  cotizacionCompania: storeCotizacion.currentCotizacion.cotizacionCompania,
  urlPoliza: storeCotizacion.currentCotizacion.urlPoliza,
  fechaEmision: storeCotizacion.currentCotizacion.fechaEmision,
  fechaInicio: storeCotizacion.currentCotizacion.fechaInicio,
  fechaTermino: storeCotizacion.currentCotizacion.fechaTermino,
  compania: storeCotizacion.currentCotizacion.compania,
  vehiculo: storeCotizacion.currentCotizacion.vehiculo,
  cliente: storeCotizacion.currentCotizacion.cliente,
  patente: storeCotizacion.currentCotizacion?.vehiculo?.patente,
  tokenModificacion : storeCotizacion.getCarro().tokenModificacion
});

watch(async () => cotizacionDetails.value.vehiculo?.tipoVehiculo, async (newValue) =>  {
      if(cotizacionDetails.value.vehiculo)
        await obtenerMarcas(await newValue);
    });
    watch(() => cotizacionDetails.value.vehiculo?.marca, (newValue) =>  {
      if(allMarcas.value && allMarcas.value?.length>0)
        obtenerModelos(newValue);
    }); 

  watch(() => cotizacionDetails.value.cliente?.rut, (newValue) =>  {
      esPersona.value = parseInt(newValue.split('-')[0])<50000000;
      if(!esPersona.value){
        cotizacionDetails.value.cliente.apellidoMaterno='';
        cotizacionDetails.value.cliente.apellidoPaterno='';
      }
    });

</script>
<style scoped>
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
