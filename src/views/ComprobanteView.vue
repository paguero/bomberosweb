<template>
    <div class="overlayed-loader fullscreen-overlayed-loader" v-if="loading">
    <div class="fullscreen-overlayed-loader__overlay"></div> 
    <div class="ecw-loader-animation fullscreen-overlayed-loader__loader">
      <svg data-v-287d4030="" width="160px" height="80px" viewBox="0 0 160 60" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-car-loader"><g data-v-287d4030="" id="car-icon" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g data-v-287d4030="" id="icon_carLoader"><ellipse data-v-287d4030="" id="car__wheel__1" stroke="#212f40" stroke-width="4.97777778" cx="72.2089151" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <ellipse data-v-287d4030="" id="car__wheel__2" stroke="#212f40" stroke-width="4.97777778" cx="129.894867" cy="45.0519547" rx="11.165023" ry="10.9480453"></ellipse> <line data-v-287d4030="" id="car__support" x1="119.660263" y1="46.4610953" x2="83.9942172" y2="46.4610953" stroke="#212f40" stroke-width="4.97777778"></line> <path data-v-287d4030="" id="car__body__id" d="M60.6717247,46.1467592 L55.2752969,46.1467592 C50.8092877,45.2344221 49.940897,40.9768489 52.546069,33.3740396 C56.4538271,21.9394145 58.500748,14.0324928 66.1301804,6.73379594 C73.7596128,-0.564900963 112.775165,-7.62030797 131.073398,18.290066 C134.919128,23.7640887 145.277788,23.0950415 148.875407,26.622745 C152.473025,30.1504485 151.976802,33.8606194 151.976802,38.3614825 C151.976802,42.9231681 149.123518,45.5385344 143.354923,46.1467592 L140.563667,46.1467592" stroke="#212f40" stroke-width="4.97777778"></path> <line data-v-287d4030="" id="upper__trail__id" stroke="#212f40" x1="12.6141079" y1="32.3555556" x2="32" y2="32.3555556" stroke-width="5" stroke-linecap="round"></line> <line data-v-287d4030="" id="lower__trail__id" stroke="#212f40" x1="6" y1="21.1555556" x2="26" y2="21.1555556" stroke-width="5" stroke-linecap="round"></line></g></g></svg> <div data-v-287d4030="" class="loader-message">
      Un momento...
    </div>
    </div>
  </div>
  <section class="breadcrumb-section">

    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
      <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
      <router-link :to="{name:'home'}">Inicio</router-link>
      <span>/</span>
      <a>Suscripción exitosa</a>
    </nav>

    <div class="volver-container">
      <!-- Botón Volver -->
      <router-link  :to="{ name: 'home'}" class="btn-volver">
      <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
      <span>Volver</span>
    </router-link>
      <!-- Título a la derecha -->
      <h1 class="section-title">Suscripción exitosa</h1>
    </div>

    </section>

  <section class="purchase-success">
    <div class="success-container">
      
      <div class="table-responsive table-responsive-xxl border border-1 mb-10">
        <table id="example" class="tabla-soap table-centered mt-0 table table-bordered" style="width: 100%;">
            <thead class="bg-light">
                <tr class="table-dark">
                    <th colspan="1"><div class=""></div></th>
                    <th colspan="1"><div class="">Vehículo</div></th>
                    <th colspan="1"><div class="">Póliza</div></th>
                    <th colspan="1"><div class="">Valor Soap</div></th>
                    <th colspan="1"><div class=""></div></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(data, x) in allCotizaciones" v-bind:key="x">
                    <td class="align-middle border-top-0">
                      <a v-if="data.urlPoliza!=''" :href="data.urlPoliza" target="_blank" @click="pushGtagDescargar"><i  class="fs-2 p-1 pi pi-file-pdf"></i>Descarga tu Póliza</a>
                    </td>
                    <td class="align-middle border-top-0">
                        <h6 class="mb-0">{{data.vehiculo.patente}}</h6><span><small class="text-muted"> {{data.vehiculo.marca}} / {{data.vehiculo.modelo}}</small></span>
                    </td>
                    <td class="align-middle border-top-0">#{{data.numeroPoliza}}</td>
                    <td class="align-middle border-top-0">{{$filters.formatCurrency(data.planPesos)}}<br/>
                      <span class="custom-badge badge bg-warning">{{$filters.formatCurrency(data.aporte)}}</span>
                      <br/>{{$filters.formatCurrency(data.montoPago)}}</td>
                    <td class="align-middle border-top-0">
                      <span class="cursor-pointer" @click="descargarCertificado(data)"><i  class="p-1 pi pi-file-pdf"></i>Certificado</span>
                    </td>
                </tr>
                
            </tbody>
        </table>
    </div>
    <img src="/media/misc/foto-activa-seguros.webp" alt="Bomberos exitosos">
    <h2>¡Has comprado tu SOAP y aportaste a Bomberos de Chile con éxito!</h2>
    </div>
  </section>
  <Form
                                      id="kt_account_edificio_details_form"
                                      novalidate="novalidate"
                                      @submit="saveChanges()"
                                    >
  <section class="additional-coverage d-none">
    <!-- Contenedor Azul -->
    <div class="coverage-header">
      <h2>Súmale GRATIS estas coberturas por 3 meses</h2>
    </div>
  
    <!-- Contenedor Blanco -->
    <div class="tabla-coberturas">
      <br>
      <p>*Al 4° mes el cobro será generado automáticamente.</p>
      
      <table>
          <thead>
              <tr>
                <th></th>
                  <th></th>
                  <th>UF</th>
                  <th>Equivalente a pesos</th>
                  <th></th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(asistencia, idx) in allAsistencias" v-bind:key="asistencia.id">
                <td>
                    <input type="checkbox" name="cobertura" v-model="asistencia.seleccionado" :value="true"></td>
                  <td>
                      
                      <label for="asistencia-vial"><b>{{asistencia.nombreAsistencia}}</b></label>
                  </td>
                  <td>
                      <span style="color: red;">{{asistencia.primaUf}} UF</span><br>
                      <span style="font-size: 12px; color: red;">Neto mensual por vehículo asegurado</span>
                  </td>
                  <td>
                      <span style="color: green;">= {{$filters.formatCurrency(asistencia.primaPesos)}}</span>
                  </td>
                  <td>
                    <span class="info-icon cursor-pointer" @click="visible[idx]=true">?</span>
                  </td>
              </tr>
          </tbody>
      </table>
    
  </div>

    <section class="continue-section">
      <button class="continue-button">CONTINUAR</button>
    </section>
  </section>
  </Form>
  
  
  <!-- Modal 1 -->
<Prime-Dialog v-model:visible="visible[0]" modal header="Asistencia Vial" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
  <div class="modal-content">
    <img src="/media/banners/banner-asistencia-vial.webp" alt="Seguro de asistencia en carretera" />
    <p><strong>Objetivo:</strong> Brindar soluciones rápidas y efectivas ante emergencias vehiculares, garantizando la tranquilidad y movilidad de los asegurados en cualquier momento y lugar dentro del territorio nacional.</p>

        <h2>Coberturas</h2>
        <ol>
            <li><strong>Remolque o Transporte del Vehículo:</strong>
                <ul>
                    <li>Traslado del vehículo asegurado en caso de que no pueda circular debido a un accidente o avería.</li>
                    <li>Límite: UF 10 por evento, hasta 2 eventos al año.</li><br>
                </ul>
            </li>
            <li><strong>Reparaciones In Situ:</strong>
                <p>Servicios que pueden realizarse en el lugar donde ocurrió el evento:</p>
                <ul>
                    <li>Cambio de neumáticos.</li>
                    <li>Apertura de puertas por pérdida de llaves.</li>
                    <li>Abastecimiento de combustible (hasta 5 litros, costo a cargo del cliente).</li>
                    <li>Puente de batería.</li>
                    <li>Límite: Ilimitado en número de eventos anuales para cada servicio.</li><br>
                </ul>
            </li>
        </ol>

        <h2>Ámbito Territorial</h2>
        <p>El servicio se extiende a todo el territorio nacional, excluyendo territorios insulares (excepto Isla Grande de Chiloé) y cubriendo hasta 20 km desde los límites urbanos de la ciudad.</p>

        <h2>Procedimiento de Atención</h2>
        <ol>
            <li><strong>Contacto con la Central de Asistencia:</strong>
                <p>El cliente debe llamar al número indicado en su certificado para activar el servicio.</p>
            </li>
            <li><strong>Verificación de Datos:</strong>
                <p>Se requerirán datos como nombre, RUT, dirección, patente y detalles de la solicitud.</p>
            </li>
            <li><strong>Coordinación del Servicio:</strong>
                <p>Si el evento califica según las condiciones contratadas, se enviará un técnico o se organizará el remolque.</p>
            </li>
            <li><strong>Seguimiento:</strong>
                <p>Se informará al cliente sobre el progreso del servicio.</p>
            </li>
        </ol>

        <h2>Reembolsos</h2>
        <p>En casos excepcionales donde no se pueda prestar el servicio por fuerza mayor, el cliente podrá solicitar un reembolso, sujeto a las siguientes condiciones:</p>
        <ul>
            <li>Autorización previa de la central de asistencia.</li>
            <li>Presentación de documentos de respaldo (boletas, facturas).</li>
            <li>Plazo de análisis y pago: 15 días hábiles.</li><br>
        </ul>

        <h2>Exclusiones</h2>
        <ul>
            <li>Coordinación directa del cliente sin aviso a la central.</li>
            <li>Daños preexistentes a la vigencia del producto.</li>
            <li>Eventos derivados de desastres naturales, guerras o alteraciones del orden público.</li><br>
        </ul>

        <h2>Atención al Cliente</h2>
        <p><strong>Central de asistencia vía Whatsapp:</strong></p>
  </div>
</Prime-Dialog>

<!-- Modal 2 -->
<Prime-Dialog v-model:visible="visible[1]" modal header="Seguro de accidente personal full" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
  <div class="modal-content">
    <img src="/media/banners/banner-seguro-personal-full.webp" alt="Seguro de accidente personal full" />
    <p><strong>Objetivo:</strong> Ofrecer respaldo económico y tranquilidad en momentos difíciles. La cobertura incluye el reembolso de gastos médicos por accidentes y una compensación en caso de fallecimiento accidental.</p>

      <h2>Coberturas</h2>
      <ol>
          <li><strong>Muerte Accidental:</strong>
              <p>En virtud de esta cobertura, la compañía pagará a los beneficiarios UF 200 en su equivalente en pesos, inmediatamente después de acreditada la ocurrencia del siniestro de acuerdo con la ley y al Reglamento de Auxiliares del Comercio de Seguros.</p>
          </li>
          <li><strong>Incapacidad Total y Permanente por Accidente:</strong>
              <p>Si el asegurado sufre lesiones producto de un accidente y queda incapacitado totalmente en un plazo de 90 días, el asegurador pagará UF 100 en su equivalente en pesos.</p>
          </li>
          <li><strong>Incapacidad Temporal por Accidente:</strong>
              <p>Si el asegurado queda incapacitado temporalmente dentro de 30 días tras un accidente, el asegurador pagará UF 20 en su equivalente en pesos.</p>
          </li>
          <li><strong>Desmembramiento Accidental:</strong>
              <p>Indemnización proporcional según la pérdida total o funcional de miembros u órganos debido a un accidente.</p>
              <ul>
                  <li>100% por pérdida total de ambos ojos o extremidades principales.</li>
                  <li>Porcentajes menores para pérdidas parciales o específicas.</li>
                  <li>Límite máximo indemnizable: UF 100.</li>
              </ul><br>
          </li>
          <li><strong>Reembolso de Gastos Médicos por Accidente:</strong>
              <p>Reembolso de gastos médicos, farmacéuticos, de urgencia y/o hospitalarios que surjan dentro de los 30 días posteriores a un accidente, con un tope de UF 20 por evento.</p>
              <ul>
                  <li>Se reembolsarán gastos no cubiertos por beneficios de salud estatales o privados.</li>
                  <li>Si no hay beneficios de salud, se cubre el 50% del gasto real, hasta UF 20.</li>
              </ul><br>
          </li>
          <li><strong>Gastos Funerarios por Accidente:</strong>
              <p>Cobertura para gastos funerarios como urna, transporte de restos, publicaciones y servicios religiosos.</p>
          </li>
      </ol>

      <h2>Exclusiones</h2>
      <ul>
          <li>Participación en actos delictivos, guerras o deportes extremos.</li>
          <li>Accidentes bajo influencia de alcohol o drogas.</li>
          <li>Lesiones derivadas de suicidio o actos terroristas.</li><br>
      </ul>

      <h2>Condiciones de Suscripción</h2>
      <ul>
          <li>Edad mínima de ingreso: 18 años.</li>
          <li>Edad máxima de ingreso: 69 años y 364 días.</li>
          <li>Permanencia hasta los 70 años y 364 días.</li><br>
      </ul>

      <h2>Requisitos para Reclamos</h2>
      <ul>
          <li>Comunicación del siniestro dentro de 10 días a través de correo o línea telefónica.</li>
          <li>Presentación de documentos como facturas, licencias médicas y diagnósticos.</li><br>
      </ul>

      <h2>Vigencia y Renovación</h2>
      <p>La cobertura dura 12 meses y se renueva automáticamente por otros 12 meses, salvo aviso del asegurador con al menos 30 días de antelación.</p>

      <h2>Tarifas y Pago</h2>
      <p>El costo mensual es de UF 0,04498, con los primeros tres meses exentos de pago. En caso de incumplimiento, hay un plazo de 60 días para regularizar.</p>

      <h2>Atención al Cliente</h2>
      <p class="contact-info">Línea directa: 800 391 300<br>
      Correo electrónico: siniestros@sbins.cl</p>
  </div>
</Prime-Dialog>

<!-- Modal 3 -->
<Prime-Dialog v-model:visible="visible[2]" modal header="Seguro de asistencia en sala de urgencia" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
  <div class="modal-content">
    <img src="/media/banners/banner-sala-urgencias.webp" alt="Seguro de asistencia en sala de urgencia" />
    <p><strong>Objetivo:</strong> Proveer asistencia médica rápida y efectiva al contratante y su grupo familiar directo (cónyuge, conviviente civil, hijos), en situaciones de emergencia derivadas de enfermedades o accidentes, garantizando acceso a atención en centros de urgencia convenidos.</p>

        <h2>Coberturas</h2>
        <ol>
            <li><strong>Atención de Urgencia por Enfermedad:</strong>
                <ul>
                    <li>Cobertura del 100% del copago posterior al sistema de salud y seguros, hasta un tope de UF 5 por evento.</li>
                    <li>Máximo de 3 eventos anuales.</li><br>
                </ul>
            </li>
            <li><strong>Atención de Urgencia por Accidente:</strong>
                <ul>
                    <li>Cobertura del 100% del copago posterior al sistema de salud y seguros, hasta un tope de UF 5 por evento.</li>
                    <li>Sin límite en el número de eventos anuales.</li><br>
                </ul>
            </li>
            <li><strong>Traslado Sanitario por Accidente:</strong>
                <ul>
                    <li>Coordinación de transporte en ambulancia o medio adecuado en caso de accidentes graves.</li>
                    <li>Tope de UF 3 por evento, con un máximo de 3 eventos anuales.</li><br>
                </ul>
            </li>
        </ol>

        <h2>Servicios Incluidos</h2>
        <ul>
            <li>Consultas médicas en urgencias.</li>
            <li>Exámenes necesarios (laboratorio e imagenología).</li>
            <li>Medicamentos e insumos requeridos durante la atención.</li>
            <li>Seguimiento y evaluación post-atención para garantizar la calidad del servicio.</li><br>
        </ul>

        <h2>Flujo de Operación</h2>
        <ol>
            <li>Contacto del cliente mediante línea telefónica exclusiva.</li>
            <li>Verificación de datos y suscripción.</li>
            <li>Derivación a centros médicos en convenio.</li>
            <li>Seguimiento de la atención hasta el alta médica.</li>
            <li>Encuesta de calidad tras el servicio.</li><br>
        </ol>

        <h2>Reembolsos</h2>
        <p>Se aceptan solicitudes de reembolso en caso de:</p>
        <ul>
            <li>Falta de respuesta por parte de la línea de asistencia.</li>
            <li>Inexistencia de proveedores disponibles en la zona.</li>
            <li>Autorización previa de un ejecutivo.</li><br>
        </ul>

        <h2>Atención al Cliente</h2>
        <p><strong>Línea telefónica:</strong> +562 2 712 33 60</p>

        <h2>Exclusiones</h2>
        <ul>
            <li>No se cubren gastos derivados de deportes de alto riesgo, accidentes laborales, enfermedades laborales, actos delictivos o eventos fuera de la vigencia del contrato.</li>
            <li>Excluye territorios insulares, excepto la Isla Grande de Chiloé.</li>
            <li>Excluye el territorio fuera del límite urbano de la ciudad (hasta 20km desde su límite).</li><br>
        </ul>

        <h2>Tarifa Mensual</h2>
        <p>UF 0,066 + IVA por cliente vigente al cierre de mes.</p>
  </div>
</Prime-Dialog>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useConfirm } from "primevue/useconfirm";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useSuscripcionAsistenciaStore } from "@/stores/suscripcionAsistencia";
import { useAsistenciaStore } from "@/stores/asistencia";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useCertificadoStore } from "@/stores/certificado";
import * as Yup from "yup";
import { useBus } from "@/core/bus/bus";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { useGtm } from '@gtm-support/vue-gtm';
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form

  },
  
  setup() {
    const { bus } = useBus();
    const confirm = useConfirm();
    const router = useRouter();
    const store = useCotizacionStore();
    const storeCarro = useCarroCompraStore();
    const storeCertificado = useCertificadoStore();
    const storeSuscripcionAsistencia = useSuscripcionAsistenciaStore();
    const storeAsistencia = useAsistenciaStore();
    const loading = ref(false);
    const visible = ref([false, false, false]);
    var gtm = useGtm();
     bus.on('actualiza-carro-compra', (id  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(id)  );
       obtenerCarro(id);
    }); 

    bus.on('limpia-carro-compra', () => {       
       obtenerCarro(0);   
    });

    
    const route = useRoute();
    const carroId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {  
      store.setCarro(JSON.stringify({carroId:null, cotizacionId:null}));   
      await obtenerCarro(carroId);
      obtenerAsistencias(carroId);
      pushGtag();
    });

    const obtenerCarro = async (carroId) =>{
      await storeCarro
        .getCarroCompra(carroId)
        .catch(() => {
          const [error] = Object.values(storeCarro.carroCompraErrors);
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

    const obtenerAsistencias = async (carroId) =>{
      await storeAsistencia
        .getAsistencias(carroId)
        .catch(() => {
          const [error] = Object.values(storeAsistencia.asistenciaErrors);
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

    const descargarCertificado = async(cotizacion) => {
      loading.value = true;
      await storeCertificado.getCertificado(cotizacion).then(()=>{
        window.open(storeCertificado.currentCertificado.urlCertificado);
        loading.value = false;
      }).catch(() => {
          const [error] = Object.values(storeCertificado.certificadoErrors);
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

    const allCotizaciones = computed(() => {
      return storeCarro.currentCarroCompra.cotizaciones;
    });
    const allAsistencias = computed(() => {
      return storeAsistencia.allAsistencias;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });

    /**
     * Envia la informacion para realizar la suscripcion de asistencia
     */
    const saveChanges = async () => {
        loading.value = true;        
        storeSuscripcionAsistencia.createSuscripcionAsistencia({carroId, suscripciones:allAsistencias.value})
          .then(() => {
            loading.value = false;
            router.push({ name: "info-suscripcion", params:{id:carroId} });
          })
          .catch(() => {
            loading.value = false;
            const [error] = Object.values(storeCarro.carroCompraErrors);

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

    const pushGtag = () => {
        gtm.push({"event": `confirmacion_compra_soap`, 
          "category":"soap_pagado",
          "label":"paso_06",
          "action":`confirmacion_compra_soap`,
          item_list_id: "PAYMENT_SUCCESS",
          item_list_name: "PAYMENT_SUCCESS"
        });
        gtm.push(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };

    const pushGtagDescargar = () => {
        gtm.push({"event": `descargar_poliza_post_compra`, 
          "category":"soap_pagado",
          "label":"paso_06",
          "action":`descargar_poliza_post_compra`
        });
        gtm.push(function() {
          this.reset();
        });
        console.log('loaded pushGtag');
    };
    return {
      loading,
      allCotizaciones,
      currentCarroCompra,
      visible,
      descargarCertificado,
      allAsistencias,
      saveChanges,
      pushGtagDescargar
    };
  },
});


</script>

<style lang="scss">
.aporte-breath {
  animation-name: breath;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

.ml-pago {
  display: grid; grid-template-columns: 235px auto;
   @media screen and (max-width: 769px) {
        grid-template-columns: 100%;
        row-gap: 20px;
      }
}
@keyframes breath {
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
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
</style>

<style lang="scss" scoped>
@keyframes radar{
0%{
    width:25px;
    height:25px;
    border:40px 
    solid red;
    opacity:0
}50%{
    opacity:.1
}
90%{
    width:75px;
    height:75px
}
90%,100%{
    border:2px 
    solid red;
    opacity:0
}100%{
    width:115px;
    height:115px
}
}
.donation:hover {
  background: inherit;
  cursor: pointer;
  .radar {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    border: 10px solid #fff;
    width: 120px;
    height: 120px;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    -webkit-animation: radar 2s infinite;
    animation: radar 2s infinite;
    opacity: 0;
  }
  .radar:nth-child(2) {
      animation-delay: .4s;
  }
  .radar:nth-child(3) {
      animation-delay: .9s;
  }
  .radar:nth-child(4) {
      animation-delay: .15s;
  }
}

</style>