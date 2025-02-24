<template>

  <section class="breadcrumb-section">
  
  <!-- Breadcrumb arriba -->
  <nav class="breadcrumb">
    <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
    <router-link :to="{name:'home'}">Inicio</router-link>
    <span>/</span>
    <a>¡Súmate a la campaña 2025!</a>
  </nav>
  
  <div class="volver-container">
    <!-- Botón Volver -->
    <router-link  :to="{ name: 'home'}" class="btn-volver">
    <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
    <span>Volver</span>
  </router-link>
    <!-- Título a la derecha -->
    <h1 class="section-title">¡Súmate a la campaña 2025!</h1>
  </div>
  
  </section>
  
  <!-- Seccion de la imagen inicio -->
  <section id="image_liga_bmb">
        <div class="bloque_imagen">
            <iframe 
            class="video_home"
            src="https://www.youtube.com/embed/2ATvE55oMlc" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture;
            web-share"
            allowfullscreen></iframe>
        </div>
        <div class="bloque_titulo">
            <h1>¡La campaña SOAP Bomberos la hacemos entre todos!</h1>
        </div>
    </section>
    <!-- Seccion de la imagen fin -->

    <!-- Seccion primer banner casos exito inicio -->
    <section id="banner_casos_exito">
        <div class="bloque_imagen">
            <a href="https://drive.google.com/file/d/1633EDuOA_S56ASypmejj6bArXwwWw4Bk/view" target="_blank">
                <img src="/media/banners/banner_buenas_practicas_desktop.jpeg" class="liga_bomberos" alt="Buenas prácticas Liga de Bomberos">
            </a>
        </div>
    </section>
   <!-- Seccion primer banner casos exito fin -->

   <!-- Seccion segundo banner casos exito inicio -->
    <section id="banner_casos_exito_mr">
        <div class="bloque_imagen">
            <a href="https://www.soapbomberos.cl/comentanos" target="_blank">
                <img src="/media/banners/banner_recaudacion_desktop.jpeg" class="liga_bomberos" alt="Recaudación Liga de Bomberos">
            </a>
        </div>
    </section>
    <!-- Seccion segundo banner casos exito fin -->


    <!-- Seccion banner central inicio -->
    <section id="image_bloque_central">
        <div class="bloque_imagen">
            <a href="https://drive.google.com/drive/folders/1qlYe_YFFKTInkSo5IZZJXutKg4Gynix7" target="_blank">
                <img src="/media/banners/banner_sumate_desktop.jpeg" class="liga_bomberos" alt="Súmate a la campaña Liga de Bomberos">
            </a>
        </div>
    </section>
    <!-- Seccion banner central fin -->

    <!-- Seccion de imagenes inicio mobile -->
    <section class="recaudado-section-liga-bomberos">
        <div class="left-column">
            <div class="total-container">
                <a href="https://drive.google.com/file/d/1gpSyKmRcO8FT3YYiqabqlv9XDTlhgHyb/view">
                    <img src="/media/banners/banner_buenas_practicas_mobile.jpeg" alt="Buensa prácticas" />
                </a>    
            </div>
        </div>
        <div class="right-column">
            <div class="total-container">
                <a href="https://www.soapbomberos.cl/comentanos" target="_blank">
                    <img src="/media/banners/banner_recaudacion_mobile.jpeg" alt="Recaudación" />
                </a>
            </div>
        </div>
        <div class="left-column">
            <div class="total-container">
                <a href="https://drive.google.com/drive/folders/1qlYe_YFFKTInkSo5IZZJXutKg4Gynix7" target="_blank">
                    <img src="/media/banners/banner_sumate_mobile.jpeg" alt="Súmate a la campaña Liga de Bomberos" />
                </a>    
            </div>
        </div>
    </section>
    <!-- Seccion de imagenes fin -->
  
      <!-- Seccion de aportes inicio -->
      <section class="aportes-section">
      <!-- Columna Izquierda -->
      <div class="left-column">
  
        <!-- Tarjeta de selección de comuna -->
        <div class="consulta-card">
          <h2>Selecciona una comuna y consulta los aportes recibidos por las compañías.</h2>
          
          <form class="comuna-form">
            <label for="select-comuna">*Comuna</label>
            <Prime-Dropdown filter v-model="comuna" :options="allComunas" 
                       optionLabel="nombre" optionValue="codigoComuna" placeholder="Seleccione Comuna" class="w-100"
                        />
            <button type="button" ref="kt_login_signin_submit" @click="buscarAporte(comuna)" :disabled="comuna==''" class="consultar-btn">Consultar</button> 
          </form>
        </div>
  
        <!-- Tarjeta de información de aportes -->
        <div class="info-aportes-card">
          <h3>Información de aportes</h3>
          <p class="subtitle">Compañías de la comuna</p>
          <ul class="aportes-list">
            <li v-for="compania in allAportes" :key="compania.compania">
              <div>
                <span class="cursor-pointer">{{compania.compania}}</span>
                <strong>{{$filters.formatCurrency(compania.montoAporte)}}</strong>
                <a href="javascript:;" @click="toggle($event, compania)" class="w-auto btn-share btn-warning"> <span class="pi pi-share-alt"></span></a>
              </div>
              <p>{{compania.url}}</p>
            </li>
            <!-- Agrega más items según tu necesidad -->
          </ul>
        </div>
      </div>
      <!-- Columna Derecha -->
      <div class="right-column" id="share-div" >
        <!-- Imagen con bordes redondeados -->
        <div class="d-flex flex-column gap-4 w-100 card border border-1 border-dark-subtle" v-if="share">
          <h3 class="mt-5">{{ compania.compania}}</h3>
          <div class="card-body w-100">
              <div class="font-medium block mb-2">Copia y comparte este QR</div>
              <div ref="canvasContainer">
              <vue-qrcode :value="compania.url" :options="{ width: 200 }"></vue-qrcode>
              </div>
              <button @click="copiarAlPortapapeles" class="btn btn-sm">Copiar QR</button>
          </div>
          <div class="card-footer w-100">
              <span class="font-medium block mb-2">Comparte la URL de la compañía</span>
              <div class="input-group mb-3">
                <input type="text" class="form-control" :value="compania.url" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2" @click="copyClip(compania.url)"><i class="pi pi-copy"></i></span>
              </div>
              
          </div>
          <div class="d-flex flex-row gap-3 mb-5 flex-wrap justify-content-center">
          <share-network
          v-for="network in networks"
          :key="network.network"
          v-slot="{ share }"
          :network="network.network"
          :title="sharingInfo.title"
          :url="sharingInfo.url"
          :description="sharingInfo.description"
          :quote="sharingInfo.quote"
          :hashtags="sharingInfo.hashtags"
          :twitterUser="sharingInfo.twitterUser"
          :media="sharingInfo.media"
        >
          <div
            class="social-network"
            @click="share"
            :style="{ backgroundColor: network.color }"
          >
            <i :class="network.icon"></i>
            <span>{{ network.name }}</span>
          </div>
        </share-network>
        </div>
        </div>
        <img src="/media/misc/bombero-traje.webp" alt="Bombero" class="bombero-img" v-else>
        
      </div>
    </section>
      <!-- Sección de aportes fin -->
  
    <OverlayPanel ref="op" appendTo="body">
      <div class="d-flex flex-column gap-4 w-[25rem]">
          <div>
              <span class="font-medium block mb-2">Comparte la url de la compañía</span>
              <div class="input-group mb-3">
                <input type="text" class="form-control" :value="compania.url" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text" id="basic-addon2" @click="copyClip(compania.url)"><i class="pi pi-copy"></i></span>
              </div>
              
          </div>
          <div>
              <div class="font-medium block mb-2">o envía este QR</div>
              <div ref="canvasContainer">
              <vue-qrcode :value="compania.url" :options="{ width: 200 }"></vue-qrcode>
              </div>
              <button @click="copiarAlPortapapeles" class="btn btn-sm">Copiar QR</button>
          </div>
          
      </div>
  </OverlayPanel>
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
  </style>
  