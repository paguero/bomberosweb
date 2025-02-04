<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Seguro Personal Full</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Seguro Personal Full</h1>
</div>

</section>

<section class="asegura-section">
    <div class="image-column">
      <img src="/media/banners/banner-seguro-personal-full.webp" alt="Carretera y coches" class="highway-image">
    </div>
    <div class="text-column">
     
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
    
  </section>


  <Suscripcion/>
  
  <section class="our-allies">
    <h2>Nuestros Aliados</h2>
    <div class="allies-container">
      <!-- Logos: Sustituye src con las rutas de tus imágenes -->
      <img src="/media/misc/logo-saca-tu-permiso.webp" alt="Logo 1" class="ally-logo">
      <img src="/media/misc/logo-asegura.webp" alt="Logo 2" class="ally-logo">
      <img src="/media/misc/logo-seguro-las-condes.webp" alt="Logo 3" class="ally-logo">
      <img src="/media/misc/logo-seguros-bci.webp" alt="Logo 4" class="ally-logo">
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
  content: url('/media//banners/banner-seguro-personal-full.webp'); /* Cambia la imagen en versión móvil */
  width: 100%; /* Ajusta el ancho de la imagen */
  max-width: 600px; /* Limita el ancho máximo */
  height: auto;
}
</style>
