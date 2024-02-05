<template>
  <div class="d-flex justify-content-center align-items-center login p-20">
    <Form
                                      id="kt_account_edificio_details_form"
                                      class="form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
      <div class="mb-5">
        <label class="">Folio:</label>
        <Field
          v-model="cotizacionDetails.numeroFolio"
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
          v-model="cotizacionDetails.numeroPoliza"
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
          v-model="cotizacionDetails.patente"
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

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
import type {IConsultaCotizacionValidacion} from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";

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
    const loading = ref(false);
    const visible = ref(false);

    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  numeroFolio: Yup.string().required("Es obligatorio").label("Folio"),
      numeroPoliza: Yup.string().required("Es obligatorio").label("Póliza"),
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
        store.getEmisionValidacion(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            store.setCarro(JSON.stringify({carroId:currentCotizacion.value.carroId, cotizacionId:currentCotizacion.value.cotizacionId, tokenModificacion:currentCotizacion.value.tokenModificacion}));
            router.push({ name: "modifica-tu-poliza", params:{id:currentCotizacion.value.cotizacionId} });
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
    
    const cotizacionDetails = ref<IConsultaCotizacionValidacion>({
       			numeroFolio:'',
            numeroPoliza:'',
            patente:''
    
  });
    const currentCotizacion = computed(() => {
      return store.currentCotizacion;
    });

    return {
      saveChanges1,
      currentCotizacion,
      loading,
      visible,
      cotizacionDetails,
      cotizacionsValidator
    };
  },
});


</script>


<style scoped>
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
