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
                    v-model="loginDetails.email"
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
                    v-model="loginDetails.password"
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
          <!--<button type="button" @click="signIn" class="btn-social facebook">
            <i class="fab fa-facebook-f"></i><em class="btn-text">Inicia sesión con Facebook</em>
          </button>
          <button class="hide btn-social apple">
            <i class="fab fa-apple"></i> Continuar con Apple
          </button>-->
        </div>
        <!--<a href="#" class="help-link">Obtener ayuda sobre cómo iniciar sesión</a>-->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import idsrvAuth from "../config/idsrvAuth";
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import {
  User
} from 'oidc-client'
import { ErrorMessage, Field, Form } from "vee-validate";
import { useBus } from  "@/core/bus/bus";
import _ from "lodash";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useRouter, useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type {UserLogin} from "@/stores/auth";
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
const store = useAuthStore();
const cotizacionStore = useCotizacionStore();
const loading = ref(false);
const visible = ref(false);
const { bus } = useBus();

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
  const userData = decodeCredential(response.credential)
  console.log("Handle the userData", userData);
  
  loading.value = true;
        store.auto_register({token:response.credential})
          .then(() => {
              console.log('1====>');
                let user = new User(store.user as any);
                console.log('2====>');
                let profile = store.user as any;
                console.log('3====>');
                user.profile = profile;
                console.log('4====>');
                idsrvAuth.storeUser(user).then(()=>{
                  console.log('5====>');
                  store.setAuthOIDC(user);
                  location.href='/';
                }).catch((e)=>{
                  console.log('e ===>' + e); 
                });
              loading.value = false;
          })
          .catch((e) => {
            loading.value = false;
            const error = Object.values(store.errors);
            Swal.fire({
              html: `<ul><li>${error.join('</li><li>')}</li></ul>`,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Intentar nuevamente!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

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
  store.login(loginDetails.value)
      .then(() => {
        let user = new User(store.user as any);
            let profile = store.user as any;
            user.profile = profile,
            idsrvAuth.storeUser(user).then(()=>{
              store.setAuthOIDC(user);
              location.href='/';
            }).catch((e)=>{
              console.log('e ' + e); 
            });

      })
      .catch((e) => {
            loading.value = false;
            const [error] = Object.values(store.errors);
            Swal.fire({
              text: e+ ' ' + error,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Intentar nuevamente!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });
};

const route = useRoute();

const loginDetails = ref<UserLogin>({
      email:"",
      password: "" 
    });

onMounted(async () => {
  await initFbsdk();
});
</script>

