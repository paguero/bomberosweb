<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Aprende sobre el SOAP</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Aprende sobre el SOAP</h1>
</div>

</section>

<section class="soap-section">
    <!-- Columna Izquierda: Texto -->
    <div class="soap-text">
      <p>
        El SOAP 2025 o Seguro Obligatorio de Accidentes Personales es un seguro exigido 
        por la ley Nº 18.490 y la CMF (Comisión para el Mercado Financiero), que tiene como 
        objetivo otorgar cobertura a las personas lesionadas o muertas como consecuencia de 
        un accidente en que el vehículo asegurado participe. El Seguro Obligatorio de 
        Accidentes Personales o SOAP debe ser contratado por el propietario de un vehículo 
        motorizado sea este auto, moto, entre otros, para poder acceder al permiso de circulación.
        En resumen El SOAP o Seguro Obligatorio de Accidentes Personales para tu vehículo, es 
        un seguro que entrega cobertura ante lesiones o fallecimiento a causa de accidente o choque.
      </p>
      <p>
        El aporte llega de manera íntegra a la compañía que escogiste una vez que finaliza la
        campaña. La información será transparentada con montos exactos a través de nuestra página web
        y en <strong>www.bomberosdechile.cl</strong>. El seguro obligatorio cubre al conductor, las
        personas transportadas en el vehículo asegurado y cualquier tercero afectado en el accidente.
        En caso de muerte del accidentado la indemnización se pagará a sus beneficiarios, en el siguiente 
        orden de precedencia: el cónyuge, los hijos menores de edad, los hijos mayores de edad, los padres, 
        la madre de los hijos de filiación no matrimonial del fallecido y, a falta de los anteriores, 
        sus herederos legales.
      </p>
      <p>
        La vigencia de tu SOAP es hasta el 31 de marzo del año posterior a su contratación, justo antes 
        de pagar el Permiso de Circulación y es obligatorio para todo dueño de vehículo motorizado, 
        remolque, acoplados, casas rodantes u otros similares.
      </p>
      <p>
        El SOAP 2025 o Seguro Obligatorio de Accidentes Personales cubre la muerte, muerte accidental, 
        incapacidad permanente y gastos médicos producto de lesiones consecuencia de accidentes de 
        tránsito en que intervenga el vehículo asegurado, sus remolques o sus cargas. Los gastos médicos 
        comprenden: atención prehospitalaria, transporte sanitario, hospitalización, atención médica y 
        quirúrgica, dental, prótesis e implantes, gastos farmacéuticos y gastos por concepto de 
        rehabilitación de las víctimas. El seguro tiene preferencia frente a cualquier otra prestación 
        cubierta por una Isapre, Fonasa u otro seguro complementario de salud y accidentes. 
        La contratación del SOAP consta de un certificado que otorga la compañía aseguradora, 
        y en él se detallan los datos del vehículo protegido, los antecedentes del propietario, entre otros.
      </p>
    </div>
  
    <!-- Columna Derecha: Imágenes -->
    <div class="soap-image">
      <div class="soap-image-top">
        <img src="/media/misc/aprende-SOAP_1.webp" alt="Primera imagen" />
      </div>
      <div class="soap-image-bottom">
        <img src="/media/misc/aprende-SOAP_2.webp" alt="Segunda imagen" />
      </div>
    </div>
  </section>
  

   <!-- Tabla de Coberturas SOAP -->
   <section class="table-section">
    <table class="coverage-table">
      <thead>
        <tr>
          <th>COBERTURAS SOAP</th>
          <th>INDEMNIZACIÓN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Muerte</td>
          <td>300 UF por persona</td>
        </tr>
        <tr>
          <td>Incapacidad Permanente total</td>
          <td>300 UF por persona</td>
        </tr>
        <tr>
          <td>Incapacidad Permanente parcial</td>
          <td>Hasta 200 UF por persona</td>
        </tr>
        <tr>
          <td>Gastos médicos hospitalarios</td>
          <td>Hasta 300 UF (nivel 3 Fonasa)</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section class="rounded-message">
    <p>
      El plazo para cobrar este seguro de auto obligatorio es de un año a contar de la fecha del accidente o de la muerte del afectado.
    </p>
  </section>

  


  <section class="two-column-section">
    <!-- Columna Izquierda -->
    <div class="left-column">
      <img src="/media/misc/bombero-cel.webp" alt="Bombero" class="firefighter-image">
    </div>
  
    <!-- Columna Derecha -->
    <div class="right-column flex-column">
      <section class="header-section">
        <h1>Puedes comprar el seguro obligatorio de accidentes personales para tu vehículo de manera 100% online</h1>
      </section>
      <p>
        - Al momento de realizar tu contratación, nunca deberás hacer transferencias de dinero en cuentas de terceros desconocidos.
      </p>
      <p>
        - Tu póliza se encontrará disponible para ser descargada las veces que quieras en seguros.sura.cl o www.soapbomberos.cl
      </p>
      <p>
        - Si deseas revisar la validación de tu SOAP en la AACHS, puedes ingresar a sisesoap.aach.cl. No cubre los daños causados al vehículo. Sólo ampara los riesgos de muerte, lesiones de las personas afectadas por accidentes y reembolsa los gastos médicos y hospitalarios. Este seguro debe ser contratado obligatoriamente por todo propietario de un vehículo motorizado, remolque, acoplados, casas rodantes u otros similares, al momento de adquirir el Permiso de Circulación. Si no contratas tu SOAP, no puedes circular en tu vehículo.
      </p>
      <ol>
        <li>Denuncia el siniestro ante la compañía de seguros, de forma presencial en alguna de sus sucursales.</li>
        <li>Guarda todos los certificados y boletas de gastos médicos que te hayan entregado por causa del accidente. También debes guardar todo documento emitido por el juzgado o fiscalía.</li>
        <li>
          Luego, preséntalos en la compañía de seguros para que te reembolsen el dinero correspondiente:
          <ul>
            <li>Debe asegurarse de que los datos del vehículo establecidos en el Certificado SOAP sean los correctos.</li>
          </ul>
        </li>
        <li>En el caso de protagonizar un accidente, debe hacer la denuncia en Carabineros de Chile.</li>
        <li>
          El Certificado SOAP siempre debe mantenerse junto con la documentación del vehículo, ya que puede ser solicitado en cualquier momento por Carabineros.
        </li>
        <li>
          Ten presente los límites de cobertura establecidos en la póliza. Las condiciones de ésta también pueden ser consultadas en el depósito de pólizas de la SVS.
        </li>
      </ol>
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
    Editor
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
