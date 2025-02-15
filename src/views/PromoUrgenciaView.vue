<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Asistencia Integral en Casos de Emergencia</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Asistencia Integral en Casos de Emergencia</h1>
</div>

</section>

<section class="asegura-section">
    <div class="image-column">
      <img src="/media/banners/banner-sala-urgencias.webp" alt="Carretera y coches" class="highway-image">
    </div>
    <div class="text-column">
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
        <p>Central de asistencia MAWDY:
          <ul><li>
Para llamados: +56 223407008</li>
<li>Atención vía Whatsapp: +56  961712386</li></ul>

        </p>

        <h2>Exclusiones</h2>
        <ul>
            <li>No se cubren gastos derivados de deportes de alto riesgo, accidentes laborales, enfermedades laborales, actos delictivos o eventos fuera de la vigencia del contrato.</li>
            <li>Excluye territorios insulares, excepto la Isla Grande de Chiloé.</li>
            <li>Excluye el territorio fuera del límite urbano de la ciudad (hasta 20km desde su límite).</li><br>
        </ul>

        <h2>Tarifa Mensual</h2>
        <p>UF 0,066 + IVA por cliente vigente al cierre de mes.</p>
     
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
.highway-image {
  content: url('/media//banners/banner-sala-urgencias.webp'); /* Cambia la imagen en versión móvil */
  width: 100%; /* Ajusta el ancho de la imagen */
  max-width: 600px; /* Limita el ancho máximo */
  height: auto;
}
</style>
