<template>
  <div class="overlayed-loader fullscreen-overlayed-loader" v-if="loading">
    <div class="fullscreen-overlayed-loader__overlay"></div> 
    <div class="ecw-loader-animation fullscreen-overlayed-loader__loader">
      <svg data-v-287d4030="" width="160px" height="80px" viewBox="0 0 160 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-car-loader"><g data-v-287d4030="" id="car-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-287d4030="" id="icon_carLoader"><ellipse data-v-287d4030="" id="car__wheel__1" stroke="#212f40" stroke-width="4.97777778" cx="72.2089151" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <ellipse data-v-287d4030="" id="car__wheel__2" stroke="#212f40" stroke-width="4.97777778" cx="129.894867" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <line data-v-287d4030="" id="car__support" x1="119.660263" y1="46.4610953" x2="83.9942172" y2="46.4610953" stroke="#212f40" stroke-width="4.97777778"></line> <path data-v-287d4030="" id="car__body__id" d="M60.6717247,46.1467592 L55.2752969,46.1467592 C50.8092877,45.2344221 49.940897,40.9768489 52.546069,33.3740396 C56.4538271,21.9394145 58.500748,14.0324928 66.1301804,6.73379594 C73.7596128,-0.564900963 112.775165,-7.62030797 131.073398,18.290066 C134.919128,23.7640887 145.277788,23.0950415 148.875407,26.622745 C152.473025,30.1504485 151.976802,33.8606194 151.976802,38.3614825 C151.976802,42.9231681 149.123518,45.5385344 143.354923,46.1467592 L140.563667,46.1467592" stroke="#212f40" stroke-width="4.97777778"></path> <line data-v-287d4030="" id="upper__trail__id" stroke="#212f40" x1="12.6141079" y1="32.3555556" x2="32" y2="32.3555556" stroke-width="5" stroke-linecap="round"></line> <line data-v-287d4030="" id="lower__trail__id" stroke="#212f40" x1="6" y1="21.1555556" x2="26" y2="21.1555556" stroke-width="5" stroke-linecap="round"></line></g></g></svg> <div data-v-287d4030="" class="loader-message">
      Un momento...
    </div>
    </div>
  </div>
  <!--Seccion principal Banner-->
  <section class="section-patente">
    <Form autocomplete="off" class="" novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="cotizacionValidator">
    <div class="text-banner">
      <p class="banner-title">APORTA A NUESTROS<br> BOMBEROS DE CHILE</p>
      <p class="banner-subtitle">Hazlo por ti, hazlo por ellos</p>
    </div>
    <div class="container-patente">
      <h1>INGRESE SU PATENTE</h1>
      <div class="input-box">
        <div class="plate-format">
          <Field 
            v-slot="{ field,handleChange }"
            v-model="cotizacionDetails.vehiculo.patente"
            name="patente"
            value="value"
          >
            <Prime-InputMask slotChar='' :unstyled="true"
                          mask="**** **"
                        class="form-control form-control-lg form-control-solid patente mb-3 mb-lg-0"
                        maxlength="7"
                        placeholder="SOAP 25"
                        v-model="cotizacionDetails.vehiculo.patente"
                        v-bind="field"
                        @update:modelValue="handleChange" :model-value="field.value"
                        /></Field>
        </div>
      </div>
                                <div class="fv-plugins-message-container">
                                  <div class="fv-help-block">
                                    <ErrorMessage name="patente" />
                                  </div>
                                </div>
      <p class="helper-text">Sin espacios, puntos o guión.</p>
      <Prime-Button :loading="loading" type="submit"  label="COMPRAR"  class="buy-button"/> 

    </div>
    <div class="button-group">
      <router-link :to="{ name: 'modifica-tu-poliza-ingresar'}" class="custom-button">
        <img src="/media/misc/ico-lapiz.webp" alt="Editar" class="button-icon">
        Modificar Póliza
      </router-link>
      <router-link :to="{ name: 'info-documento'}" class="custom-button">
        <img src="/media/misc/ico-descarga.webp" alt="Descargar" class="button-icon">
        Descargar Póliza
      </router-link>
    </div>
    </Form>
  </section>
  <!--Fin Seccion principal Banner-->
  <!-- Sección del slider -->
  <section class="section-slider">
    <div class="slider-container">

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item slide1 active">
            <div class="content-slider slide flex-column align-items-start justify-content-center">
              <h2>Compra tu <br>SOAP Bomberos<br>
              antes y obtén gratis <br>asistencia en carretera</h2>
              <router-link :to="{name:'promo-grua'}" class="benefit-button">Conoce este beneficio <span>→</span></router-link>
            </div>
          </div>
          <div class="carousel-item slide2">
            <div class="content-slider slide flex-column align-items-start justify-content-center">
              <h2>Compra tu SOAP<br>
                y obtén seguro de<br>
                accidente personal full</h2>
                <router-link :to="{name:'promo-accidente'}" class="benefit-button">Conoce este beneficio <span>→</span></router-link>
            </div>
          </div>
          <div class="carousel-item slide3">
            <div class="content-slider slide flex-column align-items-start justify-content-center">
              <h2>Suma a tu SOAP<br>
                  Seguro de asistencia<br>
                  en sala de urgencia</h2>
                  <router-link :to="{name:'promo-urgencia'}" class="benefit-button">Conoce este beneficio <span>→</span></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- Sección: Valor del SOAP -->
  <section class="section-soap-value">
    <div class="soap-value-container">
      <h2>Conoce el valor de tu SOAP</h2>
      <p>Cada vez que adquieres tu SOAP 2025 con Bomberos de Chile, 
      tienes la opción de donar a bomberos desde $1.000 pesos a la Compañía que tú elijas.</p>
    </div>
  </section>

  <!-- Sección: Tarjetas -->
  <section class="section-card">
    <Price/>
  </section>


  <section class="soap-donation">
    <!-- Lado izquierdo -->
    <div class="soap-donation-left">
      <div class="soap-text-container">
        <div class="soap-title">
          <h2>¿Por qué donar a <br> SOAP BOMBEROS?</h2>
        </div>
        <div class="soap-content">
          <p>
            Al comprar tu SOAP 2025 con Bomberos de Chile, además de estar cumpliendo con la documentación necesaria para la circulación de vehículos motorizados, estás haciendo un aporte para que la institución mejor evaluada de nuestro país, siga salvando vidas y bienes, tal como lo ha realizado por 170 años.
          </p>
          <p>
            Cada vez que adquieres tu SOAP 2025 con Bomberos de Chile, tienes la opción de donar a bomberos desde $1.000 pesos a la Compañía que tú elijas. Si quieres que ese aporte sea más, puedes elegir una de las opciones de aporte extraordinario. Con tu aporte y el de todos, estamos apoyando la labor de los más de 50 mil bomberos y bomberas de todo nuestro país.
          </p>
        </div>
      </div>
    </div>
  
    <!-- Lado derecho -->
    <div class="soap-donation-right">
      <div class="soap-image-container">
        <router-link :to="{name:'aprende-soap'}" class="soap-link">
          Aprende sobre el SOAP <span>→</span>
        </router-link>
      </div>
    </div>
  </section>
  
  
  <Suscripcion/>
  
  <section class="our-allies">
    <h2>Nuestros Aliados</h2>
    <div class="allies-container">
      <!-- Logos: Sustituye src con las rutas de tus imágenes -->
      <img src="/media/misc/logo-saca-tu-permiso.webp" alt="Logo 1" class="ally-logo">
      <img src="/media/misc/logo-asegura.webp" alt="Logo 2" class="ally-logo">
      <img src="/media/misc/logo-seguro-las-condes.webp" alt="Logo 3" class="ally-logo">
      <img src="/media/misc/logo-seguros-southbridge.webp" alt="Logo 4" class="ally-logo">
      <img src="/media/misc/logo-mercado-pago.webp" alt="Logo 5" class="ally-logo">
      <img src="/media/misc/logo-balloon.webp" alt="Logo 6" class="ally-logo">
    </div>
  </section>

  <div id="cartContainer"></div>

  <main  class="content-wrapper flex-row-fluid position-relative">
    
    <!--<Price></Price>-->
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
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
import { useBus } from  "@/core/bus/bus"; 
import { ErrorMessage, Field, Form } from "vee-validate";
import Price from "@/components/widgets/Price.vue";
import { useTerminalStore } from "@/stores/terminal";
import ChatBot from "@/components/widgets/ChatBot.vue";
import Suscripcion from "@/components/widgets/Suscripcion.vue";
import _ from "lodash";
import * as Yup from "yup";
import { useRouter, useRoute} from "vue-router";
import { useConvenioStore } from "@/stores/convenio";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { vMaska } from "maska"
import Swal from "sweetalert2/dist/sweetalert2.js";
import { patenteEsValido } from "@/core/validators/YupPatente";
import router from "@/router";

export interface IVehiculo {
  patente: string
}
export interface ICotizacion {
  vehiculo: IVehiculo,
  carroId:string,
  convenioAporte:string;
  terminal:string;
  terminalEmail:string;
  token:string;
}
export default defineComponent({
  name: "main-dashboard",
  components: {
    Price,
    ChatBot,
    ErrorMessage,
    Field,
    Form,
    Suscripcion
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
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()

    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('login')
      return token;
    }
    const cotizacionDetails= ref<ICotizacion>({
      carroId : carro.carroId,
      convenioAporte:'',
      terminal: terminal.value.terminalId,
      terminalEmail: terminal.value.email,
      token:'',
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
    const saveChanges1 = async () => {
        loading.value = true;
        // Activate indicator
        obtenerCarro(carro.carroId);
        cotizacionDetails.value.token = await recaptcha();
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
      currentConvenio,
      recaptcha
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