<template>
  <div>
    <div class="d-flex flex-column align-items-start justift-content-center">
      <div class="d-flex flex-row icons d-flex align-items-center"><InputSwitch v-model="redSocialActual.utilizar" /> <span class="ms-2">¿Utilizar esta red social?</span></div>
    </div>
    <div class="d-flex flex-column flex-xl-row p-7" :class="redSocialActual.utilizar?'':'disabled-red-social'">
      <!--begin::Content-->
      <div class="flex-lg-row-fluid me-xl-15 mb-20 mb-xl-0">
        <div
          class="pb-5"
          data-wizard-type="step-content"
          data-wizard-state="current"
        >
        <!--begin::Input group-->
          <div
            class="mb-10 fv-row"
            id="kt_ecommerce_add_product_discount_fixed"
          >
            <!--begin::Label-->
            <label class="form-label"
              >Inversión máxima</label
            >
            <!--end::Label-->
            <!--begin::Input-->
            <InputNumber id="inversionMaxima" class="txt-primary mb-2" placeholder="Inversión Máxima" v-model="redSocialActual.inversionMaxima" mode="currency" currency="CLP" locale="es-CL" />
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">
              Ingresa el monto máximo para invertir en esta red social
              {{redSocialActual}}
            </div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 fv-row">
            <!--begin::Label-->
            <label class="required form-label">Utm Source</label>
            <!--end::Label-->
            <!--begin::Input-->
            <InputText
              type="text"
              name="utmSource"
              class="form-control mb-3 mb-lg-0"
              placeholder="Utm Source"
              v-model="redSocialActual.utmSource"
            />{{redSocialActual.utmSource}}
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="utmSource" />
              </div>
            </div>
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">Código de seguimiento</div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 fv-row">
            <!--begin::Label-->
            <label class="required form-label">Utm Medium</label>
            <!--end::Label-->
            <!--begin::Input-->
            <InputText
              type="text"
              name="utmMedium"
              class="form-control mb-3 mb-lg-0"
              placeholder="Utm Medium"
              v-model="redSocialActual.utmMedium"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="utmMedium" />
              </div>
            </div>
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">Código de seguimiento</div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 fv-row">
            <!--begin::Label-->
            <label class="required form-label">Utm Campaign</label>
            <!--end::Label-->
            <!--begin::Input-->
            <InputText
              type="text"
              name="utmCampaign"
              class="form-control mb-3 mb-lg-0"
              placeholder="Utm Campaign"
              v-model="redSocialActual.utmCampaign"
            />
            <div class="fv-plugins-message-container">
              <div class="fv-help-block">
                <ErrorMessage name="utmCampaign" />
              </div>
            </div>
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">Código de seguimiento</div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 fv-row">
            <!--begin::Label-->
            <label class="required form-label">Cargar imagen o video</label>
            <!--end::Label-->
            <!--begin::Input-->
            {{archivo}}
            <FileUpload
              name="imagenes"
              chooseLabel="Adjuntar Archivos"
              :showCancelButton="false"
              :showUploadButton="false"
              :auto="true"
              mode="basic"
              :customUpload="true" @uploader="onUpload"
              :multiple="false"
              accept="image/*,video/mp4"
              :maxFileSize="700000000"
            >
            </FileUpload>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block"></div>
            </div>
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">Puedes cargar una imágen o un video</div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <!--begin::Input group-->
          <div class="mb-5 fv-row">
            <!--begin::Label-->
            <label class="required form-label">Texto</label>
            <!--end::Label-->
            <!--begin::Input-->
            <textarea
              class="form-control"
              style="height: 150px"
              rows="3"
              name="billing_order_postcode"
              v-model="redSocialActual.texto"
              placeholder="Ingrese un texto de acompañamiento"
            ></textarea>
            <div class="fv-plugins-message-container">
              <div class="fv-help-block"></div>
            </div>
            <!--end::Input-->
            <!--begin::Description-->
            <div class="text-muted fs-7">Texto que acompaña el "post"</div>
            <!--end::Description-->
          </div>
          <!--end::Input group-->
          <div class="d-flex justify-content-end">
              <!--begin::Button-->
              <button
                @click="saveRedSocial"
                id="kt_ecommerce_redsocial"
                class="btn btn-primary"
                ref="submitButton2"
                type="button"
              >
                <span class="indicator-label">Guardar Cambios</span>
                <span class="indicator-progress"
                  >Espere...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span
                ></span>
              </button>
              <!--end::Button-->
            </div>
        </div>
      </div>
      <!--end::Content-->
      <!--begin::Sidebar-->
      <div class="flex-column flex-lg-row-auto w-100 mw-lg-300px mw-xxl-350px">
        <div class="card-rounded bg-primary bg-opacity-5 mb-15">
          <!--begin::Title-->
          <h2 class="text-dark fw-bolder p-5">Vista previa</h2>
          <!--end::Title-->
          <!--begin::Item-->
          <div class="d-flex align-items-center mb-10">
            <!--begin example advertisement-->
            <div class="container mt-5 mb-5">
              <div class="row d-flex align-items-center justify-content-center">
                <div class="col-md-12">
                  <div class="card">
                    <div class="d-flex justify-content-between p-2 px-3">
                      <div class="d-flex flex-row align-items-center">
                        <img
                          src="https://i.imgur.com/UXdKE3o.jpg"
                          class="w-35px rounded-circle m-2"
                        />
                        <div class="d-flex flex-column ml-2">
                          <span class="font-weight-bold">loren ipsum</span>
                          <small class="text-primary">Redoondo</small>
                        </div>
                      </div>
                      <div class="d-flex flex-row mt-1 ellipsis">
                        <i class="fa fa-ellipsis-h"></i>
                      </div>
                    </div>
                    <div class="p-2">
                      <p class="text-justify small">
                        {{redSocialActual.texto}}
                      </p>
                    </div>
                    <img
                              v-if="default_type != 'video/mp4'"
                              :src="default_photo"
                              class="img-fluid"
                            />
                            <video
                              v-if="default_type == 'video/mp4'"
                              width="100%"
                              height="240"
                              style="width: 400px; max-width: 100%"
                              controls
                            >
                              <source :src="default_photo" type="video/mp4" />
                              Video no soportado
                            </video>
                    <div
                      class="d-flex justify-content-between p-2 px-3 bg-light"
                    >
                      <div class="d-flex align-items-center">
                        <div
                          class="
                            d-flex
                            flex-column     
                            align-items-start
                            justift-content-center
                            flex-equal
                            me-5
                          "
                        >
                          <p class="text-justify strong">
                            <b>Lorem ipsum</b> dolor sit amet
                          </p>
                        </div>
                        <div
                          class="
                            flex-equal
                            d-flex
                            justify-content-center
                            align-items-end
                            ms-5
                          "
                        >
                          <button class="btn small btn-sm btn-secondary p-2">
                            Más Información
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div class="p-2">
                      <div
                        class="
                          d-flex
                          justify-content-between
                          align-items-center
                        "
                      >
                        <div
                          class="
                            d-flex
                            flex-row
                            icons
                            d-flex
                            align-items-center
                          "
                        >
                          <i class="la la-lg la-thumbs-up"></i
                          ><span class="small"> Me Gusta</span>
                        </div>
                        <div
                          class="d-flex flex-row muted-color align-items-center"
                        >
                          <i class="la la-lg la-comment-alt"></i
                          ><span class="small"> Comentar</span>
                        </div>
                        <div
                          class="d-flex flex-row muted-color align-items-center"
                        >
                          <i class="la la-lg la-share"></i>
                          <span class="small">Compartir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--end example advertisement-->
          </div>
          <!--end::Item-->
        </div>
      </div>
      <!--end::Sidebar-->
    </div>
    <!--end::Form-->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { PropType}  from "vue";
import type {ImagenArchivo} from "@/stores/types/ImagenArchivo";
import FileUpload from "primevue/fileupload";
import InputSwitch from "primevue/inputswitch";
import InputNumber from "primevue/inputnumber";
import InputText from "primevue/inputtext";
import { ErrorMessage } from "vee-validate";

interface RedSocial {
  utilizar: boolean;
  campanaId: string;
  redSocial: string;
  texto: string;
  archivo: string;
  tipoArchivo: string;
  tamanioArchivo: number;
  inversionMaxima: number;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
}

export default defineComponent({
  name: "widget-image",
  components: { FileUpload, InputSwitch, ErrorMessage, InputText, InputNumber },
  props: {
    campanaId: { type: String, required: true },
    redesSociales: {
      type: Object as PropType<Array<RedSocial>>,
      required: true,
    },
    redSocial: { type: String, required: true },
  },
  //emits: ['inFileChange'],
  setup(props, ctx) {
    const default_photo = ref<string | ArrayBuffer | undefined | null>(
            "media/svg/files/blank-image.svg"
    );
    const default_type = ref("img");
    const archivo = ref<any>();
    const submitButton2 = ref<HTMLElement | null>(null);
    const showCancel = ref(false);
    console.log('redes sociales ' + JSON.stringify(props.redesSociales));
    let rs = props.redesSociales?.find((c) => c.redSocial === props.redSocial);
    if (rs === undefined) {
      rs = {
        utilizar: false,
        campanaId: props.campanaId,
        redSocial: props.redSocial,
        texto: "",
        tipoArchivo: "",
        tamanioArchivo: 0,
        inversionMaxima: 0,
        utmSource: "",
        utmMedium: "",
        utmCampaign: "",
        archivo:""
      };
    } 
    default_photo.value = rs.archivo;
    default_type.value = rs.tipoArchivo;
    const redSocialActual = ref<RedSocial | undefined>(rs);
    const onUpload = (e) => {
      archivo.value = e.files[0];
      if (typeof FileReader === "function") {
        const reader = new FileReader();

        reader.onload = (event) => {
          showCancel.value = true;
          
          default_photo.value = event?.target?.result;
          default_type.value = archivo.value.type;
        };
        reader.readAsDataURL(archivo.value);
      } else {
        alert("Sorry, FileReader API not supported");
      }
        /*archivo.value = event.files[0];
        console.log('upload '  + JSON.stringify(archivo.value));*/
    }
    const onFileClear = () => {
      ctx.emit("inFileChange", null);
    };
    /*const photo = computed(() => {
      return props.redSocial == null || props.current_photo.contenido === ""
        ? `background-image: url(${default_photo.value})`
        : `background-image: url('${props.current_photo.contenido}')`;
    });*/

    const saveRedSocial = () => {
      let formData = new FormData();
      formData.append("file", archivo.value);
      formData.append("campana", JSON.stringify(redSocialActual.value));
      // store
      //   .dispatch(Actions.INS_CAMPANIA_CANAL, {
      //     id: redSocialActual.value?.campanaId,
      //     formData,
      //   })
      //   .then(() => {
      //     Swal.fire({
      //       text: "El Campania se ha actualizado correctamente.",
      //       icon: "success",
      //       buttonsStyling: false,
      //       confirmButtonText: "Ok!",
      //       customClass: {
      //         confirmButton: "btn fw-bold btn-light-primary",
      //       },
      //     });
      //   })
      //   .catch(() => {
      //     const [error] = Object.keys(store.getters.getCampaniaCanalErrors);
      //     Swal.fire({
      //       text: store.getters.getCampaniaCanalErrors[error],
      //       icon: "error",
      //       buttonsStyling: false,
      //       confirmButtonText: "Intentar nuevamente!",
      //       customClass: {
      //         confirmButton: "btn fw-bold btn-light-danger",
      //       },
      //     });
      //   });
    };

    return {
      onUpload,
      default_photo,
      // photo,
      showCancel,
      saveRedSocial,
      archivo,
      onFileClear,
      redSocialActual,
    };
  },
});
</script>
<style scoped>
.disabled-red-social {
  pointer-events: none;
    filter: blur(3px);
}
</style>