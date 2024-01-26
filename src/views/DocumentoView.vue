<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
    <!-- start page main wrapper -->
    <div
      id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid"
      style="padding-top: 30px"
    >
      <div class="row">
        <div
          data-aos="fade-right fade-left"
          data-aos-delay="100"
          class="buyPatent donation-info col-lg-4 aos-init aos-animate text-center d-lg-block mx-auto resume-content" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">
        >
          <div class="buyPatent-info lift lift-lg sticky-top">
            <div class="donation-info__price">
              <h3>¡Gracias por convertirte en un héroe de verdad!</h3>
            </div>
            <div class="donation-info__img">
              
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="col-md-12 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto"
        >
          <div class="">
              <div class="buySuccess">
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
                          <h1 style="text-align: center">
                            Puedes descargar tu SOAP aquí
                          </h1>

                           <h5 style="text-align: center">
                            Para buscar tu póliza, debes ingresar tu Rut y Patente
                          </h5>
                          <!--div class="problemas alert alert-info">Si has comprado tu SOAP y no has recibido tu póliza. Por favor ten paciencia, existe un problema técnico al momento de informar tu seguro a las municipalidades.
                            Todos los SOAP estamos presentando el problema y estamos a la espera de su solución para poder enviarte tu póliza.
                          </div-->
                          <div class="panel-buscar-polizas mt-5">
                            <div class="row">
                           <div class="form-group col-md-6">
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
                            <div class="form-group col-md-6">
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
                          <div class="card-body p-2">
                              <ul class="list-unstyled" v-if="currentCotizacion">
                                <!-- Notif item -->
                                <li>
                                  <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                    <!-- Avatar -->
                                    <div class="avatar text-center">
                                      <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="">
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
                                    <p class="small me-5 text-nowrap">Acciones</p>
                                    <!-- Notification action START -->
                                    <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                      <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots"></i>
                                      </a>
                                      <!-- Card share action dropdown menu -->
                                      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction1">
                                        <li><a class="dropdown-item" href="#"> <i class="bi bi-trash fa-fw pe-2"></i>Modificar</a></li>
                                        <li><a class="dropdown-item" :href="currentCotizacion.urlPoliza"> <i class="bi bi-download fa-fw pe-2"></i>Descargar PDF</a></li>
                                      </ul>
                                    </div>
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
                  </div>
                </div>
              </Form>
           </div>
          </div>
        </div>
      </div>
      <!-- Row -->
    </div>
    <!-- end page main wrapper -->
  </div>
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
    const storeVehiculo = useVehiculoStore();
    const loading = ref(false);
    const visible = ref(false);

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
        store.getEmision(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            //router.push({ name: "info-persona", params:{id:cotizacionDetails.value} });
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
    
    const cotizacionDetails = ref<IConsultaCotizacion>({
       			rut:'',
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
.badge-unread:hover {
    /* background: var(--bs-light); */
}
.badge-unread {
    background: #eef0f2;
}
</style>