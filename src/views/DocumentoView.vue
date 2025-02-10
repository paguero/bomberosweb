<template>


<section class="breadcrumb-section">
    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
        <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon" />
        <router-link :to="{name:'home'}">Inicio</router-link>
        <span>/</span>
        <a href="#">Obtener una copia de tu póliza</a>
    </nav>

    <div class="volver-container">
        <!-- Botón Volver -->
        <router-link :to="{ name: 'home'}" class="btn-volver">
            <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon" />
            <span>Volver</span>
        </router-link>

        <!-- Título a la derecha -->
        <h1 class="section-title">Obtener una copia de tu póliza</h1>
    </div>
</section>

<section class="section-slider"  v-if="visible">
    <div class="slider-container">
        <div data-bs-ride="carousel" data-v-38c47deb="" class="recuperar-poliza">
            <div class="carousel-inner" data-v-38c47deb="">
                <div class="p-10 pt-5 text-white" data-v-38c47deb="" style="background-image: url('/media/banners/vigencia-extendida-.png') !important;">
                    <div class="flex-column align-items-start justify-content-center pb-10" data-v-38c47deb="">
                      <Form
                                      id="kt_account_edificio_details_form"
                                      class="form">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                  >
                    <div class="row m-b-lg">
                      <div class="col-md-12">
                       <div class="buySuccess-form">
                          <h5 class="text-white">
                            Por favor ingresa el código que hemos enviado al correo electronico <b>{{email}}</b>
                          </h5>
                            <div class="mb-5">
                              <label for="patente" class="mb-5">Ingresa el Código de validación</label>

                                <v-otp-input
                                        ref="otpInput"
                                        input-classes="otp-input"
                                        :conditionalClass="['one', 'two', 'three', 'four']"
                                        separator="-"
                                        inputType="letter-numeric"
                                        :num-inputs="6"
                                        v-model:value="bindValue"
                                        :should-auto-focus="true"
                                        :should-focus-order="true"
                                        @on-change="handleOnChange"
                                        @on-complete="handleOnComplete"
                                        :placeholder="['*', '*', '*', '*', '*', '*']"
                                      />
                            </div>

                        </div>
                      </div>
                  </div>
                </div>
              </div>
              </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="login-section" v-else>
    <div class="login-content align-items-start">
      <!-- Formulario de inicio de sesión -->
      <div class="login-container" style="max-width:350px">
              <Form 
                                      id="kt_account_edificio_details_form"
                                      class="form"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                  >
                    <div class="row m-b-lg">
                      <div class="col-md-12">
                       <div class="buySuccess-form">
                          <h5>
                            Para buscar tu póliza, ingresa la Patente del vehículo y te enviaremos un código de 6 números al correo electrónico utilizado en la compra.
                          </h5>
                            <div class="mb-5">
                              <label for="patente">Patente</label>

                              <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.patente"
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
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                              placeholder="ABCD20"
                                                              v-model="cotizacionDetails.patente"
                                                              />
                                                              </Field>    
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="patente" />
                                                                  </div>
                                                                </div> 
                            </div>
                          </div>
                          <div class="row">
                            <div class="form-group col-md-2">
                              <Prime-Button 
                                                      type="submit"
                                                      class="btn btn-primary"
                                                      label="Continuar"
                                                      :loading="loading"/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              

              <div class="divider">
          <hr>
        </div>
      
      </div>
    </div>
  </section>

</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import {
  User
} from 'oidc-client'
import idsrvAuth from "../config/idsrvAuth";
import { useRouter, useRoute} from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useUsuarioStore } from "@/stores/usuario";
import { useAuthStore } from "@/stores/auth";
import type {IConsultaCotizacion} from "@/stores/cotizacion";
import { useVehiculoStore } from "@/stores/vehiculo";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { vMaska } from "maska"
import { rutEsValido } from "@/core/validators/YupRut";
import { patenteEsValido } from "@/core/validators/YupPatente";

import VOtpInput from "vue3-otp-input";
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    VOtpInput 
  },
  
  setup() {
    const otpInput = ref<InstanceType<typeof VOtpInput> | null>(null);
    const bindModal = ref("");

    const handleOnComplete = (value: string) => {
      saveChanges2(value);
    };

    const handleOnChange = (value: string) => {
      console.log("OTP changed: ", value);
    };

    const clearInput = () => {
      otpInput.value?.clearInput();
    };

    const fillInput = (value: string) => {
      console.log(value);
      otpInput.value?.fillInput(value);
    };

    const router = useRouter();
    const storeAuth = useAuthStore();
    const store = useCotizacionStore();
    const storeUsuario = useUsuarioStore();
    const loading = ref(false);
    const visible = ref(false);
    const email = ref('');
    const value = ref(null);
    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        })/*,
		  rut: Yup.string().required("Es obligatorio").label("Marca").test("yupIsRut", "Rut ingresado no es valido", function (value) {
          return rutEsValido(value);
        }),*/
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
        store.getEmision(cotizacionDetails.value)
          .then(() => {
            visible.value = true;
            loading.value = false;
            email.value = store.currentCotizacion.email;
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
    
    const saveChanges2 = (token) => { 
      loading.value = true;
      storeUsuario.validarToken({usuarioId: currentCotizacion.value.usuarioId, token})
          .then(() => {
            let user = new User(storeUsuario.usuario as any);
                let profile = storeUsuario.usuario as any;
                user.profile = profile,
                idsrvAuth.storeUser(user).then(()=>{
                  storeAuth.setAuthOIDC(user);
                 location.href='/mis-polizas';
                }).catch((e)=>{
                  console.log('e ' + e); 
                });

          })
          .catch((e) => {
                loading.value = false;
                const [error] = Object.values(storeUsuario.errors);
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
    
    const cotizacionDetails = ref<IConsultaCotizacion>({
       			rut:'',
            patente:''
    
  });
    const currentCotizacion = computed(() => {
      return store.currentCotizacion;
    });

    return {
      saveChanges1,
      saveChanges2,
      currentCotizacion,
      loading,
      visible,
      cotizacionDetails,
      cotizacionsValidator,
      value,
      handleOnChange,
      handleOnComplete,
      email
    };
  },
});


</script>
<style lang="scss" >
.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 5px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 15px;
  text-align: center;
  font-weight: 600;
}
.badge-unread:hover {
    /* background: var(--bs-light); */
}
.badge-unread {
    background: #eef0f2;
}
.slider-container {
  height: 205px !important;
  @media screen and (max-width: 769px) {
    height: 274px !important;
    
  }
}
.recuperar-poliza {
  height: 205px !important;
  @media screen and (max-width: 769px) {
    height: 274px !important;
    
  }
}
</style>