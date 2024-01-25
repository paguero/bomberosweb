<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <Toast />
    <!--begin::Content-->
    <div class="flex-lg-row-fluid">
      <!--begin::Post-->
      <div>
        <!--begin::Container-->
        <div id="kt_content_container">
          <!--begin::Form-->
		  <Form
                      id="kt_account_edificio_details_form"
                      class="form d-flex flex-column flex-lg-row"
                      novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="contactosValidator"
                    >
            <!--begin::Aside column-->
            <div
              class="
                d-flex
                flex-column
                gap-7 gap-lg-10
                w-lg-300px
                mb-7
                me-lg-10
              "
            >
              <!--begin::Thumbnail settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Imagen Principal</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body text-center pt-0">
                  <MixedWidgetImage v-bind:current_photo="imagen_principal" @inFileChange="changeImagenPrincipal"></MixedWidgetImage> 
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Thumbnail settings-->
              <!--begin::Status-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Status</h2>
                  </div>
                  <!--end::Card title-->
                  <!--begin::Card toolbar-->
                  <div class="card-toolbar">
                    <div
                      class="rounded-circle w-15px h-15px"
					            :class="contactoDetails.activo?'bg-success':'bg-danger'"
                      id="kt_status"
                    ></div>
                  </div>
                  <!--begin::Card toolbar-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select2-->
                    <Field
                    name="activo"
                    class="form-select mb-2"
                    as="select"
                    placeholder="Seleccione"
                    v-model="contactoDetails.activo"
                    >
                    <option :value="true">
                      Vigente
                    </option>
                    <option :value="false">Inactivo</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Seleccione el estado del contacto.
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Status-->

              <!--begin::Template settings-->
              <div class="card card-flush py-4">
                <!--begin::Card header-->
                <div class="card-header">
                  <!--begin::Card title-->
                  <div class="card-title">
                    <h2>Categoría</h2>
                  </div>
                  <!--end::Card title-->
                </div>
                <!--end::Card header-->
                <!--begin::Card body-->
                <div class="card-body pt-0">
                  <!--begin::Select store template-->
                  <label
                    for="kt_ecommerce_add_product_store_template"
                    class="form-label"
                    >Seleccione</label
                  >
                  <!--end::Select store template-->
                  <!--begin::Select2-->
                  <Field
                  name="idCategoria"
                  class="form-select mb-2"
                  as="select"
                  placeholder="Seleccione"
                  v-model="contactoDetails.categoriaId"
                  @change="onChange($event)"
                >
                <option v-for="categoria in categorias" :key="categoria.categoriaId" :value="categoria.categoriaId">{{ categoria.titulo }}</option>
                </Field>
                  <!--end::Select2-->
                  <!--begin::Description-->
                  <div class="text-muted fs-7">
                    Clasificar contacto es una gran idea
                  </div>
                  <!--end::Description-->
                </div>
                <!--end::Card body-->
              </div>
              <!--end::Template settings-->
            </div>
            <!--end::Aside column-->
            <!--begin::Main column-->
            <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <!--begin::Tab content-->
              <div class="tab-content">
                <!--begin::Tab pane-->
                <div
                  class="tab-pane fade show active"
                  id="kt_ecommerce_add_product_general"
                  role="tab-panel"
                >
                  <div class="d-flex flex-column gap-7 gap-lg-10">
                    
                      <!--begin::General options-->
                      <div class="card card-flush py-4">
                        <!--begin::Card header-->
                        <div class="card-header">
                          <div class="card-title">
                            <h2>General</h2>
                          </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                                                    
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Lenguaje Id</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="50"
                              name="lenguajeId"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Lenguaje Id"
                              v-model="contactoDetails.lenguajeId"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="lenguajeId" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Lenguaje Id
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Contacto Id</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="100"
                              name="contactoId"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Contacto Id"
                              v-model="contactoDetails.contactoId"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="contactoId" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Contacto Id
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Fecha Contacto</label
                            >
                            <!--end::Label-->
                                                            <!--begin::Input-->
                                <Prime-Calendar id="dateformat" v-model="contactoDetails.fechaContacto" :showIcon="true"/>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="fechaContacto" />
                                  </div>
                                </div>
                                <!--end::Input-->
                                <!--begin::Description-->
                                <div class="text-muted fs-7">
                                  Ingrese Fecha Contacto
                                </div>
                                <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Nombres</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="100"
                              name="nombres"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Nombres"
                              v-model="contactoDetails.nombres"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="nombres" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Nombres
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Apellido Paterno</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="100"
                              name="apellidoPaterno"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Apellido Paterno"
                              v-model="contactoDetails.apellidoPaterno"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="apellidoPaterno" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Apellido Paterno
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Apellido Materno</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="100"
                              name="apellidoMaterno"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Apellido Materno"
                              v-model="contactoDetails.apellidoMaterno"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="apellidoMaterno" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Apellido Materno
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Telefono</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="12"
                              name="telefono"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Telefono"
                              v-model="contactoDetails.telefono"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="telefono" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Telefono
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Email</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="75"
                              name="email"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Email"
                              v-model="contactoDetails.email"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="email" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Email
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Motivo</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="100"
                              name="motivo"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Motivo"
                              v-model="contactoDetails.motivo"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="motivo" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Motivo
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Observacion</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="1000"
                              name="observacion"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Observacion"
                              v-model="contactoDetails.observacion"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="observacion" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Observacion
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                               
                          <!--begin::Input group-->
                          <div class="mb-10 fv-row">
                            <!--begin::Label-->
                            <label class="required form-label"
                              >Estado Contacto</label
                            >
                            <!--end::Label-->
                                                        <!--begin::Input-->
                            <Field
                              type="text"
                              maxlength="50"
                              name="estadoContacto"
                              class="
                                form-control form-control-lg form-control-solid
                                mb-3 mb-lg-0
                              "
                              placeholder="Estado Contacto"
                              v-model="contactoDetails.estadoContacto"
                            />
                            <div class="fv-plugins-message-container">
                              <div class="fv-help-block">
                                <ErrorMessage name="estadoContacto" />
                              </div>
                            </div>
                            <!--end::Input-->
                            <!--begin::Description-->
                            <div class="text-muted fs-7">
                              Ingrese Estado Contacto
                            </div>
                            <!--end::Description-->
                                                      </div>
                          <!--end::Input group-->
                                             
                         
                        </div>
                        <!--end::Card header-->
                      </div>
                      <!--end::General options-->
                  </div>
                </div>
                <!--end::Tab pane-->
              </div>
              <!--end::Tab content-->
              <div class="d-flex justify-content-end">
                <!--begin::Button-->
                <router-link
                  :to="{name:'apps-contacto-listing'}"
                  id="kt_ecommerce_add_product_cancel"
                  class="btn btn-light me-5"
                  >Cancelar</router-link>
                <!--end::Button-->

                <!--begin::Button-->
                <button
                  type="submit"
                  id="kt_account_edificio_details_submit"
                  ref="submitButton1"
                  class="btn btn-primary"
                  >
                  <span class="indicator-label"> Guardar Cambios </span>
                  <span class="indicator-progress">
                    Espere ...
                    <span
                    class="
                      spinner-border spinner-border-sm
                      align-middle
                      ms-2
                    "
                    ></span>
                  </span>
                </button>
                <!--end::Button-->
              </div>
            </div>
            <!--end::Main column-->
          </Form>
          <!--end::Form-->
        </div>
        <!--end::Container-->
      </div>
      <!--end::Post-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useContactoStore } from "@/stores/contacto";
import type { IContacto } from "@/stores/contacto";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "contacto-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useContactoStore();
    const submitButton1 = ref<HTMLElement | null>(null);
    const imagen_principal = ref<ImagenArchivo>();
    const contactosValidator = Yup.object().shape({
                lenguajeId: Yup.string().required("Es obligatorio").label("Lenguaje Id"),
            contactoId: Yup.string().required("Es obligatorio").label("Contacto Id"),
            fechaContacto: Yup.string().required("Es obligatorio").label("Fecha Contacto"),
      
    });

    
    const saveChanges1 = () => {
      if (submitButton1.value) {
        // Activate indicator
        submitButton1.value.setAttribute("data-kt-indicator", "on");
        let formData = new FormData();
        formData.append("file", imagen_principal.value?.archivo);
        formData.append("contacto", JSON.stringify(contactoDetails.value));      
        
        store.updateContacto(formData)
          .then(() => {
            loading = ref(false);
            submitButton1.value?.removeAttribute("data-kt-indicator");
            Swal.fire({
              text: "Contacto se ha actualizado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              router.push({ name: "apps-contacto-listing" });
            });
          })
          .catch(() => {
            const [error] = Object.values(store.contactoErrors);
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
      }
    };
   
    const changeImagenPrincipal = (image)=>{
		imagen_principal.value = image;
	};
    const route = useRoute();
            const contactoId = route.params.contactoId;
        
    onMounted(() => {     
      obtenerContacto(, contactoId);
    });

    const obtenerContacto = (, contactoId) =>{
      store
        .getContacto(, contactoId)
        .then(() => {
          loading = ref(false);
          contactoDetails.value = store.currentContacto;
          imagen_principal.value = {archivo:null,contenido:contactoDetails.value.imagen};
          //contactoDetails.value.fechaInicio =  moment(store.currentContacto.fechaInicio, "YYYYMMDD hh:mm:ss").toDate();
          //contactoDetails.value.fechaTermino =  moment(store.currentContacto.fechaTermino, "YYYYMMDD hh:mm:ss").toDate();
        })
        .catch(() => {
          const [error] = Object.values(store.contactoErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    }
    
    const contactoDetails = ref<IContacto>({
       			lenguajeId : store.currentContacto.lenguajeId,
			contactoId : store.currentContacto.contactoId,
			fechaContacto : store.currentContacto.fechaContacto,
			nombres : store.currentContacto.nombres,
			apellidoPaterno : store.currentContacto.apellidoPaterno,
			apellidoMaterno : store.currentContacto.apellidoMaterno,
			telefono : store.currentContacto.telefono,
			email : store.currentContacto.email,
			motivo : store.currentContacto.motivo,
			observacion : store.currentContacto.observacion,
			estadoContacto : store.currentContacto.estadoContacto,
    
  });

    let loading = ref(true);
    return {
      submitButton1,
      saveChanges1,
      contactoDetails,
      contactosValidator,
      changeImagenPrincipal,
      imagen_principal
    };
  },
});


</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

