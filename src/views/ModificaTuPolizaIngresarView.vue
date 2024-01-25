<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { patenteEsValido } from "@/core/validators/YupPatente";
import { useRouter } from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
const storeCotizacion = useCotizacionStore();
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
const router = useRouter();
const numeroFolio = ref("");
const numeroPoliza = ref("");
const patente = ref("");
const loading = ref(false);

const formulario = Yup.object().shape({
  numeroFolio: Yup.string().required("Es obligatorio").label("Folio"),
  numeroPoliza: Yup.string().required("Es obligatorio").label("Número Póliza"),
  patente: Yup.string()
    .required("Es obligatorio")
    .label("Patente")
    .test("yupIsPatente", "Patente ingresada no es valida", function (value) {
      return patenteEsValido(value);
    }),
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
const onSubmit = async (values) => {
  loading.value = true;
  await storeCotizacion
    .getCotizacionModificarPoliza(
      values.numeroFolio,
      values.numeroPoliza,
      values.patente
    )
    .then(() => {
      if (storeCotizacion.currentCotizacion.statusCode == 202) {
        Swal.fire({
          text: "Los datos ingresados no son correctos",
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Ok",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        });
        loading.value = false;
        return false;
      }
      router.push({
        name: "modifica-tu-poliza",
        params: { id: storeCotizacion.currentCotizacion.cotizacionId },
      });
    })
    .catch(() => {
      loading.value = false;
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
</script>
<template>
  <div class="d-flex justify-content-center align-items-center login p-20">
    <Form @submit="onSubmit" class="" :validation-schema="formulario">
      <div class="mb-5">
        <label class="">Folio:</label>
        <Field
          v-model="numeroFolio"
          class="form-control"
          type="text"
          placeholder=""
          name="numeroFolio"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="numeroFolio" />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label class="">Póliza:</label>
        <Field
          v-model="numeroPoliza"
          class="form-control"
          type="text"
          placeholder=""
          name="numeroPoliza"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="numeroPoliza" />
          </div>
        </div>
      </div>
      <div class="mb-5">
        <label class="">Patente</label>
        <Field
          v-model="patente"
          class="form-control"
          type="text"
          placeholder=""
          name="patente"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="patente" />
          </div>
        </div>
      </div>
      <Prime-Button
        type="submit"
        class="btn btn-primary d-flex mx-auto"
        label="Ingresar"
        :loading="loading"
      />
      <div></div>
    </Form>
  </div>
</template>

<style scoped>
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
