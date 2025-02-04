<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Actualizar Datos</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Actualizar Datos</h1>
</div>

</section>



<section class="login-section">
    <div class="login-content align-items-start">
      <!-- Imagen al lado izquierdo -->
      <div class="login-image">
        <img src="/media/misc/foto-registro.webp" alt="Bomberos">
      </div>
      <!-- Formulario de inicio de sesión -->
      <div class="login-container">
        <p class="new-user">
          Puedes actualizar tu cuenta en SoapBomberos:
        </p>
        <Form
          id="kt_account_edificio_details_form"
          class="form"
          novalidate="novalidate"
          @submit="saveChanges()"
          :validation-schema="registerValidator"
        >
                
                <div class="mb-5">
                  <label class="">Nombres:</label>
                  <Field
                    v-model="registerDetails.givenName"
                    class="form-control p-4"
                    type="text"
                    placeholder="Juan Andrés"
                    name="givenName"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="givenName" />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <label class="">Apellidos:</label>
                  <Field
                    v-model="registerDetails.familyName"
                    class="form-control p-4"
                    type="text"
                    placeholder="Gutierrez Romero"
                    name="familyName"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="familyName" />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <label class="">Email:</label>
                  <Field
                    v-model="registerDetails.email"
                    class="form-control p-4"
                    type="email"
                    placeholder="juan.romero@gmail.com"
                    name="email"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="email" />
                    </div>
                  </div>
                </div>
                <div class="mb-5">
                  <label class="">Teléfono:</label>
                  <Field
                    v-model="registerDetails.phoneNumber"
                    class="form-control p-4"
                    type="phone"
                    placeholder="978582547"
                    name="phoneNumber"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="phoneNumber" />
                    </div>
                  </div>
                </div>
                <div class="mb-2 text-start">
                  <label class="">Contraseña:</label>
                  <Field
                    v-model="registerDetails.password"
                    class="form-control p-4"
                    type="password"
                    placeholder="Contraseña"
                    name="contrasena"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="contrasena" />
                    </div>
                  </div>
                </div>
                <div class="mb-2 text-start">
                  <label class="">Repetir Contraseña:</label>
                  <Field
                    v-model="registerDetails.confirmPassword"
                    class="form-control p-4"
                    type="password"
                    placeholder="Confirme Contraseña"
                    name="confirmacionContrasena"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="confirmacionContrasena" />
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

        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import idsrvAuth from "../config/idsrvAuth";
import { ref, defineComponent, onMounted, computed, getCurrentInstance} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import {
  User
} from 'oidc-client'
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { useAuthStore } from "@/stores/auth";
import type {UserLogin} from "@/stores/auth";
import { decodeCredential, googleOneTap  } from 'vue3-google-login'
import { initFbsdk  } from '@/config/facebook';
moment.locale("es");

const router = useRouter(); 
const store = useAuthStore();
const app = getCurrentInstance();
const loading = ref(false);
onMounted(() => {
    
});
const currentUser = computed(() => {
  return app?.appContext.config.globalProperties.$oidc.user;
});
const registerDetails = ref<UserLogin>({
    identificationNumber:'',
    country: 'CL',
    email:currentUser.value?.profile?.email,
    givenName: currentUser.value?.profile?.given_name,
    familyName: currentUser.value?.profile.family_name,
    phoneNumber: currentUser.value?.profile?.phone_number,
    password:currentUser.value?.profile?.password,
    confirmPassword:currentUser.value?.profile?.password,
    gender:currentUser.value?.profile.gender??"Male"
});
    const registerValidator = Yup.object().shape({
        email: Yup.string().email("Debe ingresar un email válido").required("Es obligatorio").label("Email"),
        givenName: Yup.string().required("Es obligatorio").label("Nombres"),
        familyName: Yup.string().required("Es obligatorio").label("Apellidos"),
        phoneNumber: Yup.string().min(9, 'largo mínimo 9 dígitos').max(12, 'largo máximo 12 dígitos').required("Es obligatorio").label("Teléfono"),
        contrasena: Yup.string().required("Es obligatorio").label("Email"),
        confirmacionContrasena: Yup.string().required("Es obligatorio").
        oneOf([Yup.ref('contrasena'), null], "No coincide con la contraseña").label("Nombres"),
      
    });
    const saveChanges = () => {
        loading.value = true;
        store.register(registerDetails.value)
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
    };
</script>

