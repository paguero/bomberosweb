<template>

  <section class="breadcrumb-section">
  
  <!-- Breadcrumb arriba -->
  <nav class="breadcrumb">
    <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
    <router-link :to="{name:'home'}">Inicio</router-link>
    <span>/</span>
    <a>Compra tu SOAP 2025</a>
  </nav>
  
  <div class="volver-container">
    <!-- Botón Volver -->
    <router-link  :to="{ name: 'home'}" class="btn-volver">
    <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
    <span>Volver</span>
  </router-link>
    <!-- Título a la derecha -->
    <h1 class="section-title">Protege tu vehículo en minutos y obtén un descuento exclusivo</h1>
  </div>
  
  </section>
  
  <!-- Seccion de la imagen inicio -->
  <section class="banner_mp">
        <div class="banner_principal">
            <img src="/media/mercado-pago/soap_mercado_pago_desktop.jpg" class="compra_seguro" alt="Compra tu SOAP con Mercado Pago">
        </div>
        <div class="bloque_titulo">
            <h1>🚗 ¿Cómo obtener tu descuento?</h1>
        </div>
    </section>
    <!-- Seccion de la imagen fin -->

    <!-- Seccion de imagenes mobile inicio -->
    <section class="banner_mobile_compra_seguro">
        <div class="left-column">
            <div class="total-container">
                <img src="/media/mercado-pago/soap_mercado_pago_mobile.jpg" alt="Compra tu SOAP con Mercado Pago">
            </div>
        </div>
        <div class="bloque_titulo">
            <h1>🚗 ¿Cómo obtener tu descuento?</h1>
        </div>
    </section>
    <!-- Seccion de imagenes mobile fin -->

    <!-- Seccion del texto inicio -->
    <section id="descripcion_pasos">
        <div class="text-column">
            <p>
                1️⃣ Ingresa el cupón: SOAPMP al momento de pagar.
            </p>

            <p>
                2️⃣ Selecciona la opción de pago <b>"Dinero en cuenta Mercado Pago"</b>.
            </p>

            <p>
                3️⃣ ¡Listo! Automáticamente recibirás un descuento de $5.000 en tu compra.
            </p>
        </div>
    </section>
    <!--Seccion principal Banner-->
  <section class="section-patente" style="max-width: 413px;background:none;margin-top:-50px;">
    <Form autocomplete="off" class="" novalidate="novalidate"
                      @submit="saveChanges1()"
                      :validation-schema="cotizacionValidator">

    <div class="container-patente" style="margin-top:0;">
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
    </Form>
  </section>
  <!--Fin Seccion principal Banner-->

    <!-- Seccion del texto fin -->

    <!-- Inicio de como obtener tu descuento -->
    <section class="banner_mp">
        <div class="banner_principal">
            <img src="/media/mercado-pago/comprar_soap_con_nosotros_desktop.jpg" class="compra_seguro" alt="Por qué comprar tu SOAP con nosotros">
        </div>
    </section> 
    <!-- Inicio de como obtener tu descuento -->

    <!-- Inicio de compra ahora y obten tu descuento -->
    <section class="banner_mp">
        <div class="banner_principal">
            <img src="/media/mercado-pago/obten_descuento_desktop.jpg" class="compra_seguro" alt="Compra ahora y obtén tu descuento">
        </div>
    </section> 
    <!-- Inicio de como obtener tu descuento -->

    <!-- Seccion de imagenes mobile inicio -->
    <section class="banner_mobile_compra_seguro">
        <div class="left-column">
            <div class="total-container">
                <img src="/media/mercado-pago/comprar_soap_con_nosotros_mobile.jpg" alt="Por qué comprar tu SOAP con nosotros">
            </div>
        </div>
    </section>

    <section class="banner_mobile_compra_seguro">
        <div class="left-column">
            <div class="total-container">
                <img src="/media/mercado-pago/obten_descuento_mobile.jpg" alt="Compra ahora y obtén tu descuento">
            </div>
        </div>
    </section>
    <!-- Seccion de imagenes mobile fin -->
    
    <!-- Seccion de la imagen inicio -->
    <section id="preguntas_frecuentes">
        <div class="bloque_titulo">
            <h1>📌 Preguntas Frecuentes</h1>
        </div>
    </section>
    <!-- Seccion de la imagen fin -->

    <!-- Seccion del texto inicio -->
    <section id="frecuentes">
        <div class="text-column">
            <p>
                <b>¿Cómo sé si califico para el descuento?</b><br>
                El descuento de $5.000 se aplica solo a nuevos usuarios de Mercado Pago. 
                Si nunca has usado esta plataforma para pagar, puedes aprovechar esta promoción.
            </p>

            <p>
                <b>¿Cuánto tarda en llegar mi póliza?</b><br>
                Tu SOAP se genera de inmediato y lo recibirás en tu correo en minutos.
            </p>

            <p>
                <b>¿Este SOAP es válido en todo Chile?</b><br>
                ¡Sí! Es válido a nivel nacional y cumple con todas las regulaciones para circular sin problemas.
            </p>
        </div>
    </section>
    <!-- Seccion del texto fin -->

    <!-- Seccion de ayuda inicio -->
    <section id="ayuda">
        <div class="bloque_titulo">
            <h1>📩 ¿Necesitas ayuda?</h1>
        </div>
    </section>
    <!-- Seccion de ayuda fin -->

    <!-- Seccion del texto inicio -->
    <section id="texto_ayuda">
        <div class="text-column">
            <p>
                Si tienes dudas, contáctanos a través de nuestro chat o correo: <a href="mailto:conecta@soapbomberos.cl">conecta@soapbomberos.cl</a>.
            </p>
            <br>
            <p>
                🚗 <b>Compra tu SOAP ahora y asegura tu viaje.</b> ¡No dejes pasar esta oferta!
            </p>
        </div>
    </section>
    <!-- Seccion del texto fin -->
  <Toast />
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
import { useGtm } from '@gtm-support/vue-gtm';
const isVisible = ref(false);

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
    var gtm = useGtm();
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
      if(convenioAporte){
        obtenerConvenio(convenioAporte);
      }
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
            pushGtag(cotizacionDetails.value.vehiculo.patente);
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
    const pushGtag = (plate) => {
        gtm.trackEvent(
          {
            event: "begin_checkout", 
            step:"1",
            label:"paso_01",
            form_name:"formulario_principal",
            item_list_id: "PLATE",
            item_list_name: "PLATE",
            items: [
            {
                item_id: "plate",
                item_name: plate
            }
          ]
        });
        gtm.trackEvent(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };
    const pushGtagModificar = () => {
        gtm.trackEvent(
          {event: "select_item", 
          item_name:"modificar_poliza",
          button:"modificar_poliza_home"
        });
        gtm.trackEvent(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };
    const pushGtagDescargar = () => {
        gtm.trackEvent({event: "select_item", 
          item_name:"descargar_poliza",
          button:"descargar_poliza_home"
        });
        gtm.trackEvent(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };

    const beforeEnter = (el) => {
      el.style.transition = 'none';  // Sin transición al principio
      el.style.transform = 'translateY(-100%)';  // Coloca el div fuera de la vista
    };
    const enter = (el, done) => {
      el.offsetHeight; // Forzar reflow para aplicar el estilo de entrada
      el.style.transition = 'transform 3s ease'; // Aplica la transición para entrar
      el.style.transform = 'translateY(0)'; // Mueve el div a su posición final
      done(); // Finaliza la transición
    };

    const leave = (el, done) => {
      el.style.transition = 'transform 3s ease'; // Aplica la transición para salir
      el.style.transform = 'translateY(-100%)'; // Mueve el div hacia arriba
      // Debemos usar setTimeout para cambiar el valor de 'isVisible' después de la animación
      setTimeout(() => {
        isVisible.value = false; // Cambia a invisible después de que termina la animación de salida
        done(); // Finaliza la transición
      }, 3000); // 5000 ms para coincidir con la duración de la animación
    };

    return {
      saveChanges1,
      cotizacionDetails,
      cotizacionValidator,
      mostrarChatBot,
      botonChatBot,
      loading,
      currentConvenio,
      recaptcha,
      pushGtagDescargar,
      pushGtagModificar,beforeEnter, enter, leave, isVisible
    };
  },
});
</script>
<style lang="scss" scoped>
.div-asistencias {
  position: absolute;  /* Posición absoluta */
  z-index: 999;
  transform: translateX(-100%);  /* Centra el div horizontalmente */
  width: 100%;
  display: inline-block;  /* Se comporta como un bloque en línea */
  .position-relative{
    text-align:center;
    width:700px;
    @media (max-width: 768px) {
        width:100%;
      }
    img {
      margin:auto;
      width:700px;
      @media (max-width: 768px) {
        width:100%;
      }
    }
  }
  
}

.sticky-alert{text-align:center;position:absolute; top:0; left:0;width:100%;border-radius: 0;
background-color:rgba(255, 0, 130, 0.72)!important; 
border:0!important;
color:#fff;}
.sticky-alert a{opacity:1; color:#fff!important;font-size: 1.2rem;}
.sticky-alert i{color:#fff!important;}
</style>
  <style lang="scss" scoped>
  .social-network {
    padding: 3px;
    gap: 0.5rem !important;
    color:#fff;
    cursor: pointer;
    i {color:#fff!important; margin-right: 3px;}
  }
  
  .l-share a {color:#B5B5C3;}
  .l-share i {font-size:1rem;}
  .aporte {color: #FF0082; font-size:2rem;}
  .stat {
      background: #e0eafc;
      border-radius: 50%;
      padding: .75rem;
      padding-left: 0.85rem;
      width: 48px;
      height: 48px;
  }
  .stat svg {
      width: 24px;
      height: 24px;
      color: #3f80ea!important;
  }
  .buySuccess-form[data-v-56a41e1f] {
    background: white !important;
  }
  .buySuccess-pay__item {
    label {
      font-weight: bold;
      font-size: 18px;
    }
  }
  .buySuccess-form__soap-item {
    width: 100%;
  }
  .item-ty {
    h5 {
      align-self: center;
      height: fit-content;
    }
    strong {
      color: #bb2634;
    }
    .item-ty__seguros {
      font-weight: normal;
    }
  }
  .item-wsp {
    h5 {
      align-self: center;
      height: fit-content;
    }
    strong {
      color: #bb2634;
    }
    .item-ty__seguros {
      font-weight: normal;
    }
  }
  
  .b-form-datepicker {
    min-width: 130px;
  }
  .b-form-datepicker label {
    padding-bottom: 3px !important;
    padding-top: 6px;
    text-transform: none;
    white-space: nowrap !important;
    font-size: 1rem !important;
  }
  .b-form-datepicker .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    padding: 10px 5px;
  }
  .d-content-full {
    width: 100%;
  }
  
  .theme-twitter {
    background-color: rgb(29, 161, 242) !important;
  }
  #rut,
  .rut {
    width: 70%;
    float: left;
    margin-right: 6px;
  }
  #dv,
  .rutDv {
    width: 22%;
  }
  #patente {
    width: 235px !important;
  }
  .panel-buscar-poliza {
    width: 250px !important;
    position: relative;
    margin: auto;
    left: 0;
    right: 0;
  }


  #user_info_block, 
#botones_accion, 
#logo_principal, 
#image_liga_bmb,
#image_bloque_central,
#banner_casos_exito,
#banner_casos_exito_mr {
    justify-content: center;
}

#user_info_block {
    margin-top: 20px;
    margin-bottom: 20px;
}

#botones_accion {
    margin-bottom: 15px;
}

#image_liga_bmb{
    width: 100%;
    max-width: 1085px;
    margin: 0 auto;
}

.user-info .user-icon {
    width: 48px;
    height: 48px;
}

.user-info .user-text {
    font-size: 20px;
}

.cart-container .cart-img {
    width: 48px;
    height: 48px;
}

.cart-container .cart-badge {
    font-size: 16px;
    padding: 2px 8px;
    top: -2px;
}

.logo-container {
    margin-top: -0px !important;
}

#botones_accion .action-button {
    font-size: 24px;
    border-radius: 35px;
    padding: 18px 18px;
}

#botones_accion .action-button img {
    width: 40px;
    height: 40px;
}

#logo_principal .logo-container .logo {
    border-radius: 35px;
    letter-spacing: 8px;
}

#logo_principal .logo-container .logo .soap, 
#logo_principal .logo-container .logo .bomberos {
    font-size: 90px;
}

#image_liga_bmb .bloque_imagen {
    padding: 20px 30px;
    display: flex;
}

#image_liga_bmb .bloque_titulo {
    padding: 20px 30px;
    display: flex;
}

#image_liga_bmb .bloque_titulo h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #001f54;
    font-weight: bold;
    flex: 1;
    text-align: center;
}

#image_liga_bmb .bloque_imagen .liga_bomberos {
    width: 100%;
}

/* Bloque central con imagen inicio */
#image_bloque_central, #banner_casos_exito, #banner_casos_exito_mr {
    width: 100%;
    max-width: 1085px;
    margin: 0 auto;
}

#image_bloque_central .bloque_imagen, #banner_casos_exito .bloque_imagen, #banner_casos_exito_mr .bloque_imagen {
    padding: 20px 30px;
    display: flex;
    justify-content: center;
}

#image_bloque_central .bloque_imagen .liga_bomberos,  
#banner_casos_exito .bloque_imagen .liga_bomberos,
#banner_casos_exito_mr .bloque_imagen .liga_bomberos {
    width: 100%;
    margin-left: 0%;
    border-radius: 25px;
}


/* Bloque central con imagen fin */

#bloque_descripcion {
    width: 100%;
    max-width: 1085px;
    margin: 0 auto;
}

#bloque_descripcion .text-column {
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 40px;
}

#bloque_descripcion .text-column p {
    color: #001f54;
    font-size: 30px;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;
}

#bloque_descripcion .text-column p:nth-child(2), 
#bloque_descripcion .text-column p:nth-child(3) {
    margin-top: 4%;
}

.recaudado-section-liga-bomberos {
    font-family: 'Nunito', Arial, sans-serif;
    width: 100%;
    max-width: 1085px;
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between;
    align-items: flex-start; 
}

.recaudado-section-liga-bomberos .left-column {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.recaudado-section-liga-bomberos .left-column .total-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: none !important;
    background-color: transparent !important;
}

.recaudado-section-liga-bomberos .left-column .total-container img {
    width: 80%;
    margin-left: 6%;
    border-radius: 25px;
}

.recaudado-section-liga-bomberos .right-column {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.recaudado-section-liga-bomberos .right-column .total-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border: none !important;
    background-color: transparent !important;
}

.recaudado-section-liga-bomberos .right-column .total-container img {
    width: 80%;
    margin-left: 15%;
    border-radius: 25px;
}

.recaudado-section-liga-bomberos .left-column .btn_download_doc {
    text-align: center;
    margin-top: -30px;
}

.recaudado-section-liga-bomberos .right-column .btn_download_doc {
    text-align: center;
    margin-top: -10px;
}

.btn_download_doc .btn_action {
    font-family: 'Nunito', Arial, sans-serif;
    background-color: #FFFFFF;
    color: #000000;
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid #000000;
}

.btn_download_doc .btn_action img {
    filter: brightness(1) invert(0);
}

.video_home {
    width: 1025px;
    height: 450px;
}

.recaudado-section-liga-bomberos {
    display: none;
}

/* Ajustes para mobile */
@media (max-width: 768px) {
    #botones_accion .action-button img {
        width: 24px;
        height: 24px;
    }

    #botones_accion .action-button {
        font-size: 13px;
        padding: 10px 15px;
    }

    #user_info_block .user-info .user-text {
        font-size: 16px;
    }

    #logo_principal .logo-container .logo .soap, 
    #logo_principal .logo-container .logo .bomberos {
        font-size: 55px;
    }

    #logo_principal .logo-container .logo {
        border-radius: 20px;
        padding: 5px 10px 2px 15px;
        letter-spacing: 5px;
    }

    #user_info_block {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    #botones_accion {
        margin-bottom: 5px;
    }

    #image_liga_bmb .bloque_titulo h1 {
        font-size: 30px;
    } 

    #bloque_descripcion .text-column {
        padding: 20px;
        margin-left: 1%;
        margin-right: 1%;
    }

    #bloque_descripcion .text-column p {
        font-size: 23px;
        padding-left: 0px;
        padding-right: 0px;
    }

    #bloque_descripcion .text-column p:nth-child(2), 
    #bloque_descripcion .text-column p:nth-child(3) {
        margin-top: 8%;
    }

    .recaudado-section-liga-bomberos {
        width: 90%;
        flex-direction: column; /* Apila columnas */
        padding: 20px 0;
        gap: 20px;
    }

    .recaudado-section-liga-bomberos .left-column,
    .recaudado-section-liga-bomberos .right-column {
        width: 100%;
        flex: none; /* Anula flex: 1 para evitar expandirse */
    }
    
    .recaudado-section-liga-bomberos .left-column .total-container img {
        width: 100%;
        margin-left: 0;
    }

    .recaudado-section-liga-bomberos .right-column .total-container img {
        width: 100%;
        margin-right: 0%;
        margin-left: 0%;
    }

    #image_bloque_central .bloque_imagen .liga_bomberos {
        width: 100%;
    }

    #banner_casos_exito, #banner_casos_exito_mr, #image_bloque_central {
        display: none !important;
    }

    .recaudado-section-liga-bomberos {
        display: block !important;
    }
}

.banner_mp {
    width: 100%;
    max-width: 1085px;
    margin: 0 auto;
}

.banner_mp .banner_principal {
    padding: 20px 30px;
    display: block;
}

.banner_mp .banner_principal .compra_seguro {
    width: 100%;
    border-radius: 25px;
}

.banner_mp .bloque_titulo {
    padding: 20px 30px;
    display: flex;
}

.banner_mp .bloque_titulo h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #001f54;
    font-weight: bold;
    flex: 1;
    text-align: center;
}

#descripcion_pasos .text-column {
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 40px;
}

#descripcion_pasos {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
}

#descripcion_pasos .text-column {
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 40px;
}

#descripcion_pasos .text-column p {
    color: #001f54;
    font-size: 20px;
    padding-left: 5%;
    padding-right: 5%;
}

#frecuentes .text-column,
#texto_ayuda .text-column {
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 40px;
}

#frecuentes,
#texto_ayuda {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    margin-bottom: 1%;
}

#frecuentes .text-column p:nth-child(2),
#frecuentes .text-column p:nth-child(3) {
    margin-top: 2%;
}

#frecuentes .text-column b {
    font-size: 25px;
}

#frecuentes .text-column p
#texto_ayuda .text-column p {
    color: #001f54;
    font-size: 20px;
    padding-left: 5%;
    padding-right: 5%;
}

#preguntas_frecuentes,
#ayuda {
    width: 100%;
    max-width: 1085px;
    margin: 0 auto;
}

#preguntas_frecuentes .bloque_titulo,
#ayuda .bloque_titulo {
    padding: 20px 30px;
    display: flex;
}

#preguntas_frecuentes .bloque_titulo h1,
#ayuda .bloque_titulo h1 {
    font-size: 38px;
    margin-bottom: 20px;
    color: #001f54;
    font-weight: bold;
    flex: 1;
    text-align: center;
}

.banner_mobile_compra_seguro {
    display: none !important;
}


/*** Mobile ***/
@media (max-width: 768px) {
    #frecuentes,
    #texto_ayuda {
        padding-left: 1%;
        padding-right: 1%;
    }

    #frecuentes .text-column p:nth-child(2), 
    #frecuentes .text-column p:nth-child(3) {
        margin-top: 5%;
    }

    #descripcion_pasos .text-column p:nth-child(2),
    #descripcion_pasos .text-column p:nth-child(3) {
        margin-top: 5%;
    }

    #frecuentes .text-column b {
        font-size: 23px;
    }

    #descripcion_pasos .text-column {
        padding: 20px;
        margin-left: 1%;
        margin-right: 1%;
    }

    .banner_mobile_compra_seguro {
        width: 90%;
        flex-direction: column; /* Apila columnas */
        padding: 20px 0;
        gap: 20px;
        max-width: 1085px;
        margin: 0 auto;
    }

    .banner_mobile_compra_seguro .left-column,
    .banner_mobile_compra_seguro .right-column {
        width: 100%;
        flex: none; 
    }

    .banner_mobile_compra_seguro .left-column .total-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        border: none !important;
        background-color: transparent !important;
    }
    
    .banner_mobile_compra_seguro .left-column .total-container img {
        width: 100%;
        margin-left: 0;
        border-radius: 25px;
    }

    .banner_mobile_compra_seguro .right-column .total-container img {
        width: 100%;
        margin-right: 0%;
        margin-left: 0%;
    }

    .banner_mobile_compra_seguro {
        display: block !important;
    }

    .banner_mobile_compra_seguro .bloque_titulo h1 {
        font-size: 25px;
        margin-bottom: 20px;
        color: #001f54;
        font-weight: bold;
        flex: 1;
        text-align: center;
    }

    #preguntas_frecuentes .bloque_titulo h1,
    #ayuda .bloque_titulo h1 {
        font-size: 26px;
        margin-bottom: 20px;
        color: #001f54;
        font-weight: bold;
        flex: 1;
        text-align: center;
    }

    .banner_mp {
        display: none !important;
    }
}
  </style>
  