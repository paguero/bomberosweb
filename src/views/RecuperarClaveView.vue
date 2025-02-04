<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Iniciar Sesión</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Iniciar Sesión</h1>
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
          A continuación puedes acceder con tu email y contraseña:
        </p>
        <Form
                                                id="kt_account_edificio_details_form"
                                                class="form"
                                                novalidate="novalidate"
                                                @submit="saveChanges1()"
                                                :validation-schema="cotizacionsValidator"
                                              >
                
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
                <div class="mb-2 text-start">
                  <label class="">Contraseña:</label>
                  <Field
                    v-model="cotizacionDetails.password"
                    class="form-control p-4"
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="password" />
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
              <div class="divider">
          <hr>
          <span>o</span>
          <hr>
        </div>
        <div class="social-buttons">
          <GoogleLogin :callback="callback" prompt auto-login>
            <button class="btn-social google">
              <i class="fab fa-google"></i> Continuar con Google
            </button>
          </GoogleLogin>
          <button type="button" @click="signIn" class="btn-social facebook">
            <i class="fab fa-facebook-f"></i><em class="btn-text">Inicia sesión con Facebook</em>
          </button>
          <button class="hide btn-social apple">
            <i class="fab fa-apple"></i> Continuar con Apple
          </button>
        </div>
        <a href="#" class="see-more">Ver más</a>
        <a href="#" class="help-link">Obtener ayuda sobre cómo iniciar sesión</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
import { decodeCredential, googleOneTap  } from 'vue3-google-login'
import { initFbsdk  } from '@/config/facebook';
moment.locale("es");


declare global {
    interface Window {
      FB: any;
    }
  }

const router = useRouter();
const store = useTerminalStore();
const cotizacionStore = useCotizacionStore();
const loading = ref(false);
const visible = ref(false);
const { bus } = useBus();

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData)
}

async function signIn() {
      console.log('window.FB ' + window.FB);
      window.FB.login(response => {
        console.log('fb response', response)
      }); 
    }

const cotizacionsValidator = Yup.object().shape({
  email: Yup.string().required("Es obligatorio").email("EMail inválido").label("Email"),
  password: Yup.string().required("Es obligatorio").label("Password")
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
onMounted(async () => {
  await initFbsdk();
});
</script>

