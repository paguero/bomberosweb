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



<section class="login-section">
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
                            Esta opción te permite obtener una copia de tu póliza, la cual es enviada al correo electrónico utilizado en la compra.
                          </h5>
                            <div class="mb-5">
                              <label for="patente">Patente</label>

                              <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.patente"
                                                                name="patente"
                                                               value="value"
                                                               v-mask="'AAAAAA'"
                                                              >
                                                              <Prime-InputText
                                                              class="form-control form-patente p-2 text-uppercase"
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
                                                      label="Enviar a mi Correo"
                                                      :loading="loading"/>
                            </div>
                            <span v-if="email!=''">📧 Hemos enviado tu póliza al correo electrónico <b>{{email}}</b>
                            <br/>
                            ⚠️ ¿Tienes problemas para recibir tu póliza en el correo?. Por favor usa esta opción que permite descargar directamente el PDF
                            <router-link :to="{name:'info-poliza-directa'}" class="text-link">LLevame hasta ahí</router-link>
                            </span>
                            <div class="alert alert-info" v-if="patenteNoEncontrada.buscada && !patenteNoEncontrada.encontrada">
                              ⚠️ Lo sentimos, no hemos encontrado la patente.
                              Si crees que esto es un error y tienes un cargo en tu cuenta por el cobro, solicitanos que busquemos un pago
                              <button class="btn btn-sm btn-warning" type="button" @click="saveChanges2">Busca y encuentra un pago asociado</button>
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
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form, 
  },
  
  setup() {
    const router = useRouter();
    const storeAuth = useAuthStore();
    const store = useCotizacionStore();
    const patenteNoEncontrada = ref({buscada:false, encontrada:false});
    const loading = ref(false);
    const visible = ref(false);
    const email = ref('');
    const value = ref(null);
    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        })
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
        store.getEmisionEmail(cotizacionDetails.value)
          .then(() => {
            visible.value = true;
            loading.value = false;
            email.value = store.currentCotizacion.cliente.email;
            patenteNoEncontrada.value = {buscada:true, encontrada:true};    
          })
          .catch(() => {
            loading.value = false;
            patenteNoEncontrada.value = {buscada:true, encontrada:false};
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
    
    const saveChanges2 = () => { 
      loading.value = true;
      store.verificarPagoPatente(cotizacionDetails.value)
          .then(() => {
            Swal.fire({
                  text: 'Nuestro sistema encontró un pago asociado a tu patente. Se enviará la póliza a tu correo electrónico. Si deseas, puedes consultar nuevamente la patente en unos segundos',
                  icon: "success",
                  buttonsStyling: false,
                  confirmButtonText: "OK",
                  customClass: {
                    confirmButton: "btn fw-bold btn-light-danger",
                  },
                }).then(()=>{
                  saveChanges1();
                });;
          })
          .catch((e) => {
                loading.value = false;
                const [error] = Object.values(store.cotizacionErrors);
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
      email,
      patenteNoEncontrada
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