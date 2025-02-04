<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Acceso terminal POS</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Acceso terminal POS</h1>
</div>

</section>



<section class="login-section">
    <div class="login-content">
      <!-- Imagen al lado izquierdo -->
      <div class="login-image">
        <img src="/media/misc/foto-registro.webp" alt="Bomberos">
      </div>
      <!-- Formulario de inicio de sesión -->
      <div class="login-container">
        <p class="new-user">
          A continuación ingresa el identificador de la términal asignada y tu email para continuar
        </p>
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
  </section>
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

