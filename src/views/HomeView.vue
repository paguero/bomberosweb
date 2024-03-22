<script setup lang="ts">

</script>

<template>
  <main  class="content-wrapper flex-row-fluid position-relative">
     <section style="padding-left: 0px; padding-right: 0px;" class="banner container-fluid">
        <div class="banner-container container">
        <div class="banner-text">
          <img src="/media/img/banner/banner-text.png" />
        </div>
     
            <!-- PATENTE-->
            <div class="banner-form">
                <Form autocomplete="off" class="form-signinx d-flex align-items-stretch flex-column" novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="cotizacionValidator">
                <div class="apoyo" v-if="currentConvenio.slogan"><h5><i class="fas fa-engine-warning"></i> {{currentConvenio.slogan}}</h5></div>
                <img src="/media/img/banner/soap-2023.png" style="width: 107px;margin:auto" />
                <h5>Ingresa tu patente</h5>
                <div class="sr-soap-header-patente__input" style="margin:auto; align-items:center">

                        <div class="form" style="margin:auto; align-items:center">
                                <Field 
                                      v-slot="{ field,handleChange }"
                                      v-model="cotizacionDetails.vehiculo.patente"
                                      name="patente"
                                      value="value"
                                    >
                                      <Prime-InputMask slotChar='' :unstyled="true"
                                                   mask="**** **"
                                                  class="form-control form-control-lg form-control-solid patente mb-3 mb-lg-0"
                                                  maxlength="75"
                                                  placeholder="SOAP 24"
                                                  v-model="cotizacionDetails.vehiculo.patente"
                                                  v-bind="field"
                                                  @update:modelValue="handleChange" :model-value="field.value"
                                                  /></Field>
                           <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="patente" />
                                  </div>
                                </div>
                        </div>
                    
                </div>
                <div class="sr-soap-header-patente__btn">
                    <Prime-Button :loading="loading" type="submit" onclick="gtag('event', 'Info_patente')" label="COMPRAR"  class="btn banner-form__button btn-quotation"/> 
                </div>
                </Form>
            </div>
        </div>
    </section>
    <Price></Price>
    <section class="aliados">
      <div class="container p-5 align-items-center text-center">
        <h2>Nuestros Aliados</h2>
        <div class="row align-items-center">
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/saca-tu-permiso.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/south.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/tarjetaliderbci1.png" class="img-fluid"/>
            </div>
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/logo-aseguraonline-horizontal-1-1.png" class="img-fluid"/>
</div>
          <div class="col-6 col-md-4 col-xl-3">
                          <img src="/media/img/content/logos-stpr_Mesa_de_trabajo.png" class="img-fluid"/>
                          </div>
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/logo-seguro-las-condes.png" class="img-fluid"/>
              </div>
          <div class="col-6 col-md-4 col-xl-3">
              <img src="/media/img/content/mercado_pago.png" class="img-fluid"/>
          </div>
        </div>
      </div>
    </section>

    <div show class="sticky-alert py-4"><router-link :to="{ name: 'aportes'}"><i class="fas fa-link"></i> Conoce Aquí lo recaudado hasta el momento y ayudanos a compartir y seguir ayudando a nuestros #HEROESDEVERDAD</router-link></div>
    <!--div class="notification-box">
    <router-link :to="{ name: 'indicators'}">
                                              <i v-b-tooltip.hover title="Conocer los aportes recaudados" class="fas fa-chart-bar"></i></router-link>
    </div-->
    <Bombero></Bombero>
    <Faq></Faq> 
    
        <transition name="fade">
          <div v-show="mostrarChatBot" class="panel-chatbot">
            <ChatBot :mostrarChatBot="mostrarChatBot"> </ChatBot>
          </div>
        </transition>

        <div class="botonChatBot" v-show="botonChatBot">
          <img
            src="/media/img/ejecutivo-animado.gif"
            alt=""
            @click="(mostrarChatBot = true), (botonChatBot = false)"
          />
        </div>
  </main>
</template>


<script lang="ts">
import { ref, defineComponent, computed, onMounted } from "vue";
import { useBus } from  "@/core/bus/bus"; 
import { ErrorMessage, Field, Form } from "vee-validate";
import Price from "@/components/widgets/Price.vue";
import Bombero from "@/components/widgets/Bombero.vue";
import Faq from "@/components/widgets/Faq.vue";
import { useTerminalStore } from "@/stores/terminal";
import ChatBot from "@/components/widgets/ChatBot.vue";
import _ from "lodash";
import * as Yup from "yup";
import { useRouter, useRoute} from "vue-router";
import { useConvenioStore } from "@/stores/convenio";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { vMaska } from "maska"
import Swal from "sweetalert2/dist/sweetalert2.js";
import { patenteEsValido } from "@/core/validators/YupPatente";

export interface IVehiculo {
  patente: string
}
export interface ICotizacion {
  vehiculo: IVehiculo,
  carroId:string,
  convenioAporte:string;
  terminal:string;
  terminalEmail:string;
}
export default defineComponent({
  name: "main-dashboard",
  components: {
    Price,
    Faq,
    Bombero,
    ChatBot,
    ErrorMessage,
    Field,
    Form,
  }, 
  setup() {
    const router = useRouter();
    const store = useCotizacionStore();
    const storeTerminal = useTerminalStore();
    const storeConvenio = useConvenioStore();
    const storeCarro = useCarroCompraStore();
    let loading = ref(false);
    const { bus } = useBus();
    const mostrarChatBot = ref(false);
    const botonChatBot = ref(false);
    const cotizacionValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
    });
    const route = useRoute();
    const convenioAporte = route.params.id;
    var jsonCarro = store.getCarro();
    let carro = {carroId:''};
    if(jsonCarro){
      carro = JSON.parse(store.getCarro());
    }
    const terminal = ref({});
    var jsonTerminal = storeTerminal.getTerminalStorage();
    if(jsonTerminal){
      terminal.value = JSON.parse(jsonTerminal);
    }

    const cotizacionDetails= ref<ICotizacion>({
      carroId : carro.carroId,
      convenioAporte:'',
      terminal: terminal.value.terminalId,
      terminalEmail: terminal.value.email,
      vehiculo : {
        patente : store.currentCotizacion?.patente
    }});
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
    onMounted(() => {
      if(convenioAporte)
        obtenerConvenio(convenioAporte);
      obtenerCarro(carro.carroId);
    });

    const obtenerCarro = (carroId) =>{
      storeCarro
        .getCarroCompra(carroId).then(()=>
        {
          if(storeCarro.currentCarroCompra.exitoso){
            store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));
            bus.emit("actualiza-carro-compra", 0);
          }
        });
    }

    const obtenerConvenio = (codigo) =>{
      storeConvenio
        .getConvenio(codigo).then(()=>{ 
          cotizacionDetails.value.convenioAporte =storeConvenio.currentConvenio.codigo; 
        });
    }
    const saveChanges1 = () => {
        loading.value = true;
        // Activate indicator
        obtenerCarro(carro.carroId);
        store.createCotizacion(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            bus.emit("actualiza-carro-compra", store.currentCotizacion.carroId);
            store.setCarro(JSON.stringify({carroId:store.currentCotizacion.carroId, cotizacionId:store.currentCotizacion.cotizacionId}));

            if(store.currentCotizacion.Propietario.rut=='1-9'){
              //No hemos encontrado la información del vehículo. Si desea emitir, debe proporcionarla al momento de emitir.
              Swal.fire({
                text: "No hemos encontrado la información del vehículo. Si desea emitir, debe proporcionarla en los siguientes pasos",
                icon: "success",
                buttonsStyling: false,
                confirmButtonText: "Ok!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-primary",
                },
              }).then(function () {
                router.push({ name: "info-vehiculo", params:{id:store.currentCotizacion.cotizacionId} });
              });
            } else {
              router.push({ name: "info-vehiculo", params:{id:store.currentCotizacion.cotizacionId} });
            }
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
    const currentConvenio = computed(() => {
      return storeConvenio.currentConvenio;
    });
    
    return {
      saveChanges1,
      cotizacionDetails,
      cotizacionValidator,
      mostrarChatBot,
      botonChatBot,
      loading,
      currentConvenio
    };
  },
});
</script>
<style scoped>
.sticky-alert{text-align:center;position:absolute; top:0; left:0;width:100%;border-radius: 0;
background-color:rgba(255, 0, 130, 0.72)!important; 
border:0!important;
color:#fff;}
.sticky-alert a{opacity:1; color:#fff!important;font-size: 1.2rem;}
.sticky-alert i{color:#fff!important;}
</style>