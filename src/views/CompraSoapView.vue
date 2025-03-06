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
  import { ref, defineComponent, onMounted, computed, nextTick } from "vue";
  import _ from "lodash";
  import { useRouter } from "vue-router";
  import { useConvenioStore } from "@/stores/convenio";
  import { useAporteStore } from "@/stores/aporte";
  import { useComunaStore } from "@/stores/comuna";
  import type { IAporte } from "@/stores/aporte";
  import * as Yup from "yup";
  import Toast from 'primevue/toast';
  import ToastService from 'primevue/toastservice';
  import Swal from "sweetalert2/dist/sweetalert2.js";
  import { useToast } from 'primevue/usetoast';
  import VueQrcode from '@chenfengyuan/vue-qrcode';
  import OverlayPanel from 'primevue/overlaypanel';
  import { ShareNetwork } from "vue3-social-sharing";
  
  import moment from "moment";
  moment.locale("es");
  
  export default defineComponent({
    name: "aporte-list",
    components: {
      VueQrcode, 
      OverlayPanel, Toast, ShareNetwork
    },
    
    setup() {
      const router = useRouter();
      const toast = useToast();
      const aporte = ref<IAporte>();
      const store = useAporteStore();
      const storeConvenio = useConvenioStore();
      const storeComuna = useComunaStore();
      const comuna = ref('');
      const compania = ref({});
      const canvasContainer = ref(null);
      const op = ref();
      const sharingInfo = ref({
          title: 'My perfect test title',
          url: 'https://example.com',
          description: 'My perfect description',
          quote: 'My perfect quote',
          hashtags: 'tag1,tag2',
          twitterUser: 'POTUS',
          media:
            'https://www.soapbomberos.cl/media/logos/default.png',
        });
  
      const share = ref(false);
      onMounted(async () => {
        buscarAportes();
        obtenerComunas();
      });
      const copiarAlPortapapeles = () => {
        const canvas = canvasContainer.value.querySelector('canvas');
        if (canvas && navigator.clipboard) {
          canvas.toBlob(blob => {
            navigator.clipboard.write([
              new ClipboardItem({
                'image/png': blob,
              }),
            ]);
          });
          toast.add({ severity: 'info', summary: 'Info', detail: 'Imagen QR copiada al porta papeles. Ya puedes compartir "pegandola donde quieras"', life: 3000 });
        } else {
          toast.add({ severity: 'error', summary: 'Info', detail: 'No pudimos copiar el QR a tu porta papeles', life: 3000 });
        }
      }
      const buscarAportes = () => {
        store.getAportes()
          .then(() => {
            loading.value = false;
          })
          .catch(() => {
            const [error] = Object.values(store.aporteErrors);
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
      };
      const toggle = (event, param) => {
          op.value.hide();
          console.log('x' + param);
          compania.value = param;
          share.value = false;
          nextTick(() => {
            //op.value.show(event);
            share.value = true;
            const miDiv = document.getElementById("share-div");
            window.scrollTo({
              top: miDiv.offsetTop,
              left: 0,
              behavior: "smooth",
            });
            sharingInfo.value = {
              title: 'Hola. Te invito a que tu también ayudes a Bomberos de Chile.',
              url: 'https://www.soapbomberos.cl',
              description: 'Compra el SOAP en '+ compania.value.url + 'y haz un aporte a ' + compania.value.compania + '.',
              quote: 'Hola. Te invito a que tu tambien ayudes a Bomberos de Chile.',
              hashtags: 'soap,ayuda,heroes,hazloporellos',
              twitterUser: '',
              media:
                'https://www.soapbomberos.cl/media/logos/default.png',
            };
            
          });
      }
      const buscarConvenios = async () => {
        await storeConvenio.getConvenios()
          .catch(() => {
            const [error] = Object.values(storeConvenio.convenioErrors);
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
      };
      const obtenerComunas = () => {
        storeComuna.getComunas()
          .catch(() => {
            const [error] = Object.values(storeComuna.comunaErrors);
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
      };
      const buscarAporte = async (comuna) => {
        loading.value = true;
        await buscarConvenios();
        store.getAporte(comuna)
          .then(() => {
            loading.value = false;
            var convenios = storeConvenio.allConvenios.filter(c=>c.comuna==comuna);
            store.allAportes.forEach((aporte, index) => {
              var convenio = convenios.find(c=>c.nombre == aporte.compania);
              if(convenio){
                aporte.url = 'https://www.soapbomberos.cl/yo-apoyo/' + convenio.codigo;
              }
              
            });
            //recorremos y ponemos la info al convenio
          })
          .catch(() => {
            const [error] = Object.values(store.aporteErrors);
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
      };
      const dt = ref();
      const allAportes = computed(() => {
        return store.allAportes;
      });
      const currentAporte = computed(() => {
        return store.currentAporte;
      });
      const allComunas = computed(() => {
        return storeComuna.allComunas;
      });
  
      const copyClip = (url)=>{
        navigator.clipboard.writeText(url),
        toast.add({ severity: 'info', summary: 'Info', detail: 'Url copiada al porta papeles', life: 3000 });
      }
      const loading = ref(true);
  
      const networks = [
    {
      network: 'facebook',
      name: 'Facebook',
      icon: 'fab fah fa-lg fa-facebook-f',
      color: '#1877f2',
    },
    
    {
      network: 'linkedin',
      name: 'LinkedIn',
      icon: 'fab fah fa-lg fa-linkedin',
      color: '#007bb5',
    },
  
    {
      network: 'sms',
      name: 'SMS',
      icon: 'far fah fa-lg fa-comment-dots',
      color: '#333333',
    },
    {
      network: 'telegram',
      name: 'Telegram',
      icon: 'fab fah fa-lg fa-telegram-plane',
      color: '#0088cc',
    },
    {
      network: 'x',
      name: 'X',
      icon: 'fab fah fa-lg fa-x-twitter',
      color: '#1da1f2',
    },
     {
      network: 'whatsapp',
      name: 'Whatsapp',
      icon: 'fab fah fa-lg fa-whatsapp',
      color: '#25d366',
    }
  ];
  
      return {
        loading,
        buscarAportes,
        allAportes,
        comuna,
        compania,
        aporte, currentAporte, buscarAporte,
        allComunas, toast, copyClip, toggle, op, canvasContainer, copiarAlPortapapeles, share, networks, sharingInfo
      };
    },
  });
  </script>
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
  