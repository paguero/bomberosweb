<template>
    <div>
      <h1>Pago Recurrente con Mercado Pago</h1>
      <p>Vas a inscribir tu PAC por <b>{{suscripcionAsistencia.prima}}</b> UF mensuales, por el pago de tus asistencias contratadas</p>
      <p>A partir del 4 mes se iniciará el cobro en forma automática</p>
      <div id="paymentBrick_container"></div>
      <div v-if="cardToken">
        <h3>Card Token ID:</h3>
        <p>{{ cardToken }}</p>
      </div>
    </div>
  </template>
  

  <script setup lang="ts">
import { ref, onMounted, nextTick, computed, getCurrentInstance  } from "vue";
import { useSuscripcionStore } from "@/stores/suscripcion";
import { useSuscripcionAsistenciaStore } from "@/stores/suscripcionAsistencia";
import { useI18n } from "vue-i18n";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import "vue3-carousel/dist/carousel.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

const storeSuscripcion = useSuscripcionStore();
const storeSuscripcionAsistencia = useSuscripcionAsistenciaStore();


const getSuscripcionAsistencia = async (id:string) => {
  try {
    await storeSuscripcionAsistencia.getSuscripcionAsistencia(id);
  } catch (error) {
    console.log(error);
  }
};

const suscripcionAsistencia = computed(() => {
  return storeSuscripcionAsistencia.currentSuscripcionAsistencia;
});

const refreshCardBrick = async () => {
  const cardPaymentBrickController = await mp.bricks();

  // Llamada a update() o create() según lo que necesites refrescar
  await cardPaymentBrickController.update();
};

let mp; 
const mPago = (suscripcion) => {
 mp = new MercadoPago('APP_USR-fb186711-45f2-4455-9339-0da7b5d8201d',
    {
      locale: 'es'
    }
);
//'APP_USR-5065035d-83f0-4739-a018-c960b0ae07da',
//'TEST-ae60e2cb-10a0-4aa0-ab79-9f2314339100');
        const bricksBuilder = mp.bricks();
        const renderPaymentBrick = async (bricksBuilder) => {
          const settings = {
              initialization: {
                  amount: suscripcion.primaPesos,
                  preferenceId: suscripcion.preferenceId,
                  external_reference: suscripcion.carroId,
                  payer: {
                    firstName: suscripcion.nombreCliente,
                    lastName: suscripcion.apellidoCliente,
                    email: suscripcion.email
                  },
                  back_urls: {
                    success: "https://www.success.com",
                    failure: "http://www.failure.com",
                    pending: "http://www.pending.com"
                  },
                  //auto_return: "approved",
              },
              back_urls: {
                success: "https://www.success.com",
                failure: "http://www.failure.com",
                pending: "http://www.pending.com"
              },
              //auto_return: "approved",
              customization: {
                visual: {
                  showExternalReference: true,
                  style: {
                    theme: "default",
                  },
                },
                statement_descriptor: "ASISTENCIAS",
                external_reference: suscripcion.carroId,
                paymentMethods: {
                    creditCard: "all",
										debitCard: "all",
										ticket: "all",
										bankTransfer: "all",
										atm: "all",
										mercadoPago: "all",
                    maxInstallments: 1
                },
              },
              callbacks: {
                  onReady: () => {
                  // callback chamado quando o Brick estiver pronto
                  },
                  onSubmit: ({paymentType, formData}) => {
                        return new Promise((resolve, reject) => {
                          formData.numero_cotizacion = suscripcion.carroId;
                          storeSuscripcion.createSuscripcion(JSON.parse(JSON.stringify(formData))).then(()=>{
                            Swal.fire({
                              text: 'La suscripción de su pago ha sido exitosa. Un ejecutivo se contactará con usted para el envío.',
                              icon: "success",
                              buttonsStyling: false,
                              confirmButtonText: "OK!",
                              customClass: {
                                confirmButton: "btn fw-bold btn-light-success",
                              },
                            });    
                            location.href = `https://aseguraonline.cl/seguro-celulares/certificado-${celular.numeroCotizacion}`;
                            
                          }).catch(()=>{
                            const [error] = Object.values(storeSuscripcion.suscripcionErrors);
                            Swal.fire({
                              text: error,
                              icon: "error",
                              buttonsStyling: false,
                              confirmButtonText: "Intentar nuevamente!",
                              customClass: {
                                confirmButton: "btn fw-bold btn-light-danger",
                              },
                            });
                            refreshCardBrick();
                          });
                      
                      });
                  },
                  onError: (error) => {
                   
                  },
              },
          };
          window.cardPaymentBrickController = await bricksBuilder.create('payment', 'paymentBrick_container', settings);
        };
        renderPaymentBrick(bricksBuilder);

      }
onMounted(async () => {
  const script = document.createElement('script');
  script.src = 'https://sdk.mercadopago.com/js/v2';
  document.body.appendChild(script);
  const route = useRoute();
  script.addEventListener('load', async() => {
    
    await getSuscripcionAsistencia(route.params.id.toString());
    mPago(suscripcionAsistencia.value);
  });
  
  
});

</script>