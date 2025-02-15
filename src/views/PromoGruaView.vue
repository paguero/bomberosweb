<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Asistencia Vial</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Asistencia Vial</h1>
</div>

</section>

<section class="asegura-section">
    <div class="image-column">
      <img src="/media/banners/banner-asistencia-vial.webp" alt="Carretera y coches" class="highway-image">
    </div>
    <div class="text-column">
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

</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
import type {IConsultaCotizacionValidacion} from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import Suscripcion from "@/components/widgets/Suscripcion.vue";
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
    Editor,
    Suscripcion
  },
  
  setup() {
    const router = useRouter();
    const store = useCotizacionStore();
    const loading = ref(false);
    const visible = ref(false);

    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  numeroFolio: Yup.string().required("Es obligatorio").label("Folio"),
      numeroPoliza: Yup.string().required("Es obligatorio").label("Póliza"),
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
        store.getEmisionValidacion(cotizacionDetails.value)
          .then(() => {
            loading.value = false;
            store.setCarro(JSON.stringify({carroId:currentCotizacion.value.carroId, cotizacionId:currentCotizacion.value.cotizacionId, tokenModificacion:currentCotizacion.value.tokenModificacion}));
            console.log(JSON.stringify({carroId:currentCotizacion.value.carroId, cotizacionId:currentCotizacion.value.cotizacionId}));
            router.push({ name: "modifica-tu-poliza", params:{carroId:currentCotizacion.value.carroId, cotizacionId:currentCotizacion.value.cotizacionId} });
          })
          .catch((e) => {
            loading.value = false;
            const [error] = Object.values(store.cotizacionErrors);
            Swal.fire({
                text: error + ' ' + JSON.stringify(e),
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
    
    const cotizacionDetails = ref<IConsultaCotizacionValidacion>({
       			numeroFolio:'',
            numeroPoliza:'',
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
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
