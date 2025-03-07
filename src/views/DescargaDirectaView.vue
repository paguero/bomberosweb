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

<section class="section-slider d-none">
    <div class="slider-container">
        <div data-bs-ride="carousel" data-v-38c47deb="" class="recuperar-poliza">
            <div class="carousel-inner" data-v-38c47deb="">
                <div class="p-10 pt-5 text-white" data-v-38c47deb="" style="background-image: url('/media/banners/vigencia-extendida-.png') !important;">
                    <div class="flex-column align-items-start justify-content-center pb-10" data-v-38c47deb="">
                        <h2 class="text-white">Porque la vida sí puede ser más fácil</h2>
                        <p>
                            Puedes buscar tus pólizas contratadas usando sólo tu correo electrónico.
                        </p>
                        <div class="w-100 w-md-50">
                          <div class="d-flex flex-row mb-4">
                            <input type="text" class="form-control form-control-sm me-3" placeholder="misoap@soapbomberos.cl" aria-describedby="button-addon2">
                            <button class="btn btn-warning w-auto text-nowrap" type="button" id="button-addon2">Enviar Código</button>
                          </div>
                          <div style="display: flex; flex-direction: row">
                                      <v-otp-input
                                        ref="otpInput"
                                        input-classes="otp-input"
                                        :conditionalClass="['one', 'two', 'three', 'four']"
                                        separator="-"
                                        inputType="letter-numeric"
                                        :num-inputs="4"
                                        v-model:value="bindValue"
                                        :should-auto-focus="true"
                                        :should-focus-order="true"
                                        @on-change="handleOnChange"
                                        @on-complete="handleOnComplete"
                                        :placeholder="['*', '*', '*', '*']"
                                      />
                                    </div>
                            <p>Te enviaremos un código para validar en el siguiente paso</p>
                        </div>
                        <p>¿Por qué hacemos esto?. A veces uno se descuidada y escribe mal la patente y no la podemos recuperar desde el formulario de abajo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="login-section">
    <div class="login-content align-items-start">
      <!-- Formulario de inicio de sesión -->
      <div class="login-container w-100" style="max-width:100%">
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
                            Para buscar tu póliza, debes ingresar tu Rut y Patente
                          </h5>

                          <div class="mb-5">
                            <label for="rut">Rut</label>
                              <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.rut"
                                                                name="rut"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                              class="form-control form-rut"
                                                              size="lg"
                                                              id="rut"
                                                              name="rut"
                                                              maxlength="11"
                                                              placeholder="Rut"
                                                              v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                              v-model="cotizacionDetails.rut"
                                                              />
                                                              </Field>    
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="rut" />
                                                                  </div>
                                                                </div>
                            </div>
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
                            </div><div class="row">
                            <div class="form-group col-md-2">
                              <Prime-Button 
                                                      type="submit"
                                                      class="btn btn-primary"
                                                      label="Buscar"
                                                      :loading="loading"/>
                            </div>
                            </div>
                          </div>
                          <div class="alert alert-info" v-if="patenteNoEncontrada.buscada && !patenteNoEncontrada.encontrada">
                              ⚠️ Lo sentimos, no hemos encontrado la patente.
                              Si crees que esto es un error y tienes un cargo en tu cuenta por el cobro, solicitanos que busquemos un pago
                              <button class="btn btn-sm btn-warning" type="button" @click="saveChanges2">Busca y encuentra un pago asociado</button>
                            </div>

                          <div class="card-body p-2">
                              <ul class="list-unstyled" v-if="currentCotizacion.vehiculo && currentCotizacion.emitida">
                                <!-- Notif item -->
                                <li>
                                  <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                    <!-- Avatar -->
                                    <div class="avatar text-center">
                                      <img class="avatar-img rounded-circle" src="/media/img/tarifas/auto.png" alt="">
                                    </div>
                                    <!-- Info -->
                                    <div class="mx-sm-3 my-2 my-sm-0">
                                      <p class="small mb-2"><b>{{currentCotizacion.vehiculo.patente}}</b>, tiene una póliza vigente.</p>
                                    <!-- Button -->
                                    <div class="d-flex">
                                      <span class="btn btn-sm py-1 btn-primary me-2">{{currentCotizacion.vehiculo.marca}} / {{currentCotizacion.vehiculo.modelo}} / {{currentCotizacion.vehiculo.anio}}</span>
                                      <span class="btn btn-sm py-1 btn-danger">Nº póliza: {{currentCotizacion.numeroPoliza}} </span>

                                    </div>
                                  </div>
                                  <!-- Action -->
                                  <div class="d-flex ms-auto align-items-center flex-row">
                                    <!-- Notification action START -->
                                    <a :href="currentCotizacion.urlPoliza"> <i class="bi bi-download fa-fw pe-2"></i>Descargar PDF</a>
                                    <!-- Notification action END -->
                                    </div>
                                  </div>
                                </li>
                                <!-- Notif item -->                                
                              </ul>
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
import { useRouter, useRoute} from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
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
    const patenteNoEncontrada = ref({buscada:false, encontrada:false});
    const handleOnComplete = (value: string) => {
      console.log("OTP completed: ", value);
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
    const store = useCotizacionStore();
    const storeVehiculo = useVehiculoStore();
    const loading = ref(false);
    const visible = ref(false);
    const value = ref(null);
    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  rut: Yup.string().required("Es obligatorio").label("Marca").test("yupIsRut", "Rut ingresado no es valido", function (value) {
          return rutEsValido(value);
        }),
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
        store.getEmisionDescarga(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
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
      handleOnChange,
      handleOnComplete,
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
  margin: 0 10px;
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