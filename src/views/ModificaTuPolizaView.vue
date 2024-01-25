<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
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
  nombre: Yup.string().required("Es obligatorio").label("Nombre"),
  apellidoPaterno: Yup.string()
    .required("Es obligatorio")
    .label("Apellido Paterno"),
  apellidoMaterno: Yup.string()
    .required("Es obligatorio")
    .label("Apellido Materno"),
  email: Yup.string()
    .required("Es obligatorio")
    .email("Email inválido")
    .label("Email"),
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

    console.log(cotizacionDetails.value)
//   await storeCotizacion
//     .getCotizacionModificarPoliza(
//       values.numeroFolio,
//       values.numeroPoliza,
//       values.patente
//     )
//     .then(() => {
//       console.log(storeCotizacion.currentCotizacion);
//       // router.push({ name: "modifica-tu-poliza" });
//     })
//     .catch(() => {
//       const [error] = Object.values(storeCotizacion.cotizacionErrors);
//       Swal.fire({
//         text: error,
//         icon: "error",
//         buttonsStyling: false,
//         confirmButtonText: "Ok",
//         heightAuto: false,
//         customClass: {
//           confirmButton: "btn fw-semobold btn-light-primary",
//         },
//       });
//     });
};

const cotizacionId = route.params.id;
onMounted(async () => {
  obtenerAnios();
  loading.value = true;
  await obtenerCotizacion(cotizacionId);
  obtenerMarcas(storeCotizacion.currentCotizacion.codigoConvenio);
  obtenerModelos(
    storeCotizacion.currentCotizacion.codigoConvenio,
    storeCotizacion.currentCotizacion.vehiculo.marca,
    storeCotizacion.currentCotizacion.vehiculo.tipoVehiculo
  );
  obtenerTipos(storeCotizacion.currentCotizacion.codigoConvenio);

  loading.value = false;
});
const obtenerMarcas = async (campania: string) => {
  await storeMarca.getMarcas(campania).catch(() => {
    const [error] = Object.values(storeMarca.marcaErrors);
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
const obtenerModelos = (
  campania: string,
  marca: string,
  tipoVehiculo: string
) => {
  storeModelo.getModelos(campania, marca, tipoVehiculo).catch(() => {
    const [error] = Object.values(storeMarca.marcaErrors);
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
const obtenerCotizacion = async (cotizacionId) => {
  await storeCotizacion
    .getCotizacion(cotizacionId)
    .then(() => {
      cotizacionDetails.value = storeCotizacion.currentCotizacion;
      cotizacionDetails.value.patente =
        storeCotizacion.currentCotizacion.vehiculo?.patente;
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

const obtenerVehiculo = async () => {
  await storeVehiculo
    .getVehiculo(cotizacionDetails.value.vehiculo.patente)
    .then(() => {
      cotizacionDetails.value.patente =
        cotizacionDetails.value.vehiculo.patente;
      cotizacionDetails.value.vehiculo = storeVehiculo.currentVehiculo;
      obtenerModelos(
        storeCotizacion.currentCotizacion.codigoConvenio,
        storeVehiculo.currentVehiculo.marca,
        storeVehiculo.currentVehiculo.tipoVehiculo
      );
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
  return storeMarca.allMarcas;
});
const allModelos = computed(() => {
  return storeModelo.allModelos;
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
});
</script>
<template>
  <div class="d-flex justify-content-center align-items-center p-20">
    <div class="card card-white v-application border border-1">
      <div class="card-body" v-if="cotizacionDetails.vehiculo">
        <Form @submit="onSubmit" class="" :validation-schema="formulario">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home3" role="tabpanel">
              <div class="row m-b-lg">
                <div class="col-md-12">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="py-5">
                      Modificar datos del <span class="rosa">Vehículo</span>
                    </h2>
                  </div>
                  <h3 id="form-quote">Datos del vehículo a asegurar</h3>
                  <p>Verifica los datos con el patrón del auto.</p>
                  <div class="row">
                    <div class="form-group col-md-6">
                      <p>*Ingrese Patente</p>
                      <Field
                        v-slot="{ field, handleChange }"
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
                          @update:modelValue="handleChange"
                          :model-value="field.value"
                          placeholder="ABCD20"
                          v-model="cotizacionDetails.vehiculo.patente"
                               :disabled="true"
                        />
                      </Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="patente" />
                        </div>
                      </div>
                    </div>

                    <div class="form-group col-md-6 margen-espacial">
                      <p>*Marca del Vehículo</p>
                      <Field
                        v-slot="{ field, handleChange }"
                        v-model="cotizacionDetails.vehiculo.marca"
                        name="marca"
                        value="value"
                      >
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
                    <div class="form-group col-md-6 margen-espacial">
                      <p>*Modelo del Vehículo</p>
                      <Field
                        v-slot="{ field, handleChange }"
                        v-model="cotizacionDetails.vehiculo.modelo"
                        name="modelo"
                        value="value"
                      >
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
                    <div class="form-group col-md-6 margen-espacial">
                      <p>*Tipo de Vehículo</p>

                      <Field
                        v-slot="{ field, handleChange }"
                        v-model="cotizacionDetails.vehiculo.tipoVehiculo"
                        name="tipoVehiculo"
                        value="value"
                      >
                        <Prime-Dropdown
                          v-model="cotizacionDetails.vehiculo.tipoVehiculo"
                          :options="allTipos"
                          optionLabel="nombre"
                          optionValue="nombre"
                          placeholder="Seleccione Tipo de vehículo"
                          class="w-100"
                          @update:modelValue="handleChange"
                          :model-value="field.value"
                        />
                      </Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="tipovehiculo" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <p>*Nº Motor</p>
                      <Field
                        type="text"
                        maxlength="50"
                        name="numeroMotor"
                        class="form-control p-2"
                        placeholder="Numero Motor"
                        v-model="cotizacionDetails.vehiculo.numeroMotor"
                      />
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="numeroMotor" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6 margen-espacial">
                      <p>*Año del vehículo</p>
                      <Prime-Dropdown
                        v-model="cotizacionDetails.vehiculo.anio"
                        :options="allAnios"
                        placeholder="Seleccione aAño"
                        class="w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row m-b-lg">
                <div class="col-md-12">
                  <div class="d-flex align-items-center justify-content-center">
                    <h2 class="py-5">
                      Modificar datos del <span class="rosa">Propietario</span>
                    </h2>
                  </div>
                  <h3 id="form-quote">Datos del propietario del vehículo</h3>

                  <div class="row">
                    <div class="form-group col-md-6">
                      <label>*RUT</label>
                      <Field
                        v-slot="{ field, handleChange }"
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
                    <div class="form-group col-md-6">
                      <label>*Nombre / Razón Social</label>
                      <Field
                        v-slot="{ field, handleChange }"
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
                          @update:modelValue="handleChange"
                          :model-value="field.value"
                      /></Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="nombre" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label>*Apellido Paterno</label>
                      <Field
                        v-slot="{ field, handleChange }"
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
                          @update:modelValue="handleChange"
                          :model-value="field.value"
                      /></Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="apellidoPaterno" />
                        </div>
                      </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label>*Apellido Materno</label>
                      <Field
                        v-slot="{ field, handleChange }"
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

                    <div class="form-group col-md-6">
                      <label>*Correo electrónico</label>
                      <Field
                        v-slot="{ field, handleChange }"
                        v-model="cotizacionDetails.cliente.email"
                        name="email"
                        value="value"
                      >
                        <Prime-InputText
                          class="form-control"
                          maxlength="75"
                          placeholder="Ingrese Email"
                          v-model="cotizacionDetails.cliente.email"
                          v-bind="field"
                          @update:modelValue="handleChange"
                          :model-value="field.value"
                        />
                      </Field>
                      <div class="fv-plugins-message-container">
                        <div class="fv-help-block">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-bordered shadow-none mt-2 mb-2">
              <!-- card body -->
              <div class="card-body p-6">
                <!-- check input -->
                <div class="d-flex">
                  <div class="form-check me-2">
                    <Prime-Checkbox
                      id="chbx"
                      v-model="datosConfirmados"
                      :class="{ 'p-invalid': errorMessage }"
                      binary
                      aria-describedby="chbx-error"
                    />
                  </div>
                  <div>
                    <p class="mb-0 small">
                      *Acepto las políticas,
                      <a href="#;" @click="visible = true"
                        >terminos y condiciones</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row">
              <Prime-Button
                :disabled="!datosConfirmados"
                type="submit"
                class="btn btn-primary"
                label="Continuar"
                :loading="loading"
              />
              <div></div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
