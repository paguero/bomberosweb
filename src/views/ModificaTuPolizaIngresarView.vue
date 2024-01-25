<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useRouter } from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
const storeCotizacion = useCotizacionStore();
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
const router = useRouter();
const numeroFolio = ref("123456");
const numeroPoliza = ref("1000200302");
const patente = ref("JLBH34");

const fomulario = Yup.object().shape({
    numeroFolio: Yup.string()
        .required("El campo es requerido")
        .label("Folio")
        .max(10, "Debe tener 10 caracteres como máximo"),
    numeroPoliza: Yup.string()
        .required("El campo es requerido")
        .label("Asunto"),
    patente: Yup.string()
        .required("El campo es requerido")
        .label("Mensaje")
        .max(500, "Debe tener 500 caracteres como máximo"),
});

const onSubmit = async (values) => {
    await storeCotizacion
        .getCotizacionModificarPoliza(
            values.numeroFolio,
            values.numeroPoliza,
            values.patente
        )
        .then(() => {
            console.log(storeCotizacion.currentCotizacion)
            router.push({ name: "modifica-tu-poliza",params:{id:storeCotizacion.currentCotizacion.cotizacionId} });
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
                <label class="">Poliza:</label>
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

            <button
                type="submit"
                class="btn btn-primary rounded-pill fw-bold"
                ref="submitButton"
            >
                Entrar
            </button>
        </Form>
    </div>
</template>

<style scoped>
.login form {
    width: 300px;
    /* min-height: 100vh; */
}
</style>
