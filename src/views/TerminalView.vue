<template>
  <div class="d-flex flex-column flex-center flex-column-fluid">
    <!--begin::Content-->
    <div class="d-flex flex-column flex-center text-center p-10">
      <!--begin::Wrapper-->
      <div class="card card-flush w-lg-650px py-5">
        <div class="card-body py-15 py-lg-20">
          <!--begin::Title-->
          <h1 class="fw-bolder fs-2hx text-gray-900 mb-4">Hola</h1>
          <!--end::Title-->
          <!--begin::Text-->
          <div class="fw-semibold fs-6 text-gray-500 mb-7">
            a continuación ingresa el identificador de la términal asignada y tu email para continuar
          </div>
          <!--end::Text-->
          <!--begin::Illustration-->
          <div class="mb-3">
            <div class="text-start d-flex justify-content-center align-items-center login p-20">
              <Form
                                                id="kt_account_edificio_details_form"
                                                class="form"
                                                novalidate="novalidate"
                                                @submit="saveChanges1()"
                                                :validation-schema="cotizacionsValidator"
                                              >
                <div class="mb-2 text-start">
                  <label class="">Identificador de la terminal:</label>
                  <Field
                    v-model="cotizacionDetails.terminalId"
                    class="form-control p-4"
                    type="text"
                    placeholder="ID de la terminal"
                    name="terminalId"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="terminalId" />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <label class="">Email:</label>
                  <Field
                    v-model="cotizacionDetails.email"
                    class="form-control p-4"
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <Prime-Button
                  type="submit"
                  class="btn btn-primary d-flex mx-auto"
                  label="Continuar"
                  :loading="loading"
                />
                <div></div>
              </Form>
            </div>
          </div>
          <!--end::Illustration-->
        </div>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Content-->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useBus } from  "@/core/bus/bus";
import _ from "lodash";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useRouter, useRoute} from "vue-router";
import { useTerminalStore } from "@/stores/terminal";
import type {ITerminal} from "@/stores/terminal";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");

export default defineComponent({
  name: "terminal-validacion",
  components: {
    ErrorMessage,
    Field,
    Form
  },
  
  setup() {
    const router = useRouter();
    const store = useTerminalStore();
    const cotizacionStore = useCotizacionStore();
    const loading = ref(false);
    const visible = ref(false);
    const { bus } = useBus();

    const cotizacionsValidator = Yup.object().shape({
      email: Yup.string().required("Es obligatorio").email("EMail inválido").label("Email"),
		  terminalId: Yup.string().required("Es obligatorio").label("Folio")
    });
    const saveChanges1 = () => { 
      loading.value = true;
        store.validarTerminal(cotizacionDetails.value)
          .then(() => {
            cotizacionStore.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));
            bus.emit("actualiza-carro-compra", 0);
            loading.value = false;
            store.setTerminalStorage(JSON.stringify(store.currentTerminal));
            bus.emit("terminal-conectado", JSON.stringify(store.currentTerminal));
            router.push({ name: "home"});
          })
          .catch(() => {
            loading.value = false;
            const [error] = Object.values(store.terminalErrors);
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
    
    const cotizacionDetails = ref<ITerminal>({
       			terminalId:'',
            email:''
    
  });
    const currentTerminal = computed(() => {
      return store.currentTerminal;
    });

    return {
      saveChanges1,
      currentTerminal,
      loading,
      visible,
      cotizacionDetails,
      cotizacionsValidator
    };
  },
});


</script>

