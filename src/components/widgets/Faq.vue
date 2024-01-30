<template>
    <section class="FAQ">
      <div class="faq-container container">
        <div class="faq-items" :class="faqOpen == false ? 'open' : ''">
          <div class="faq-item__column">
            <div class="faq-item__container px-5" v-bind:class="{ 'faq-full': isOpen }">
              <h1 class="faq-title">Aprende sobre el <span>SOAP</span></h1>
              <Accordion :activeIndex="0">
                    <AccordionTab 
                    v-for="(collapse1, index) of faqs"
                    :key="index" :header="collapse1.title"
                    >
                        <div class="card-content">
                        <div class="content">
                            <h2 v-html="collapse1.text"></h2>
                        </div>
                        </div>
                    </AccordionTab>
              </Accordion>
                <p class="read-more" v-show="isOpen==false"><a v-on:click="isOpen=true" class="btn btn-secondary">Ver más preguntas</a></p>
            </div>
             <img src="/media/img/bombero-3.jpg" />
          </div>
      </div>
        </div>
    </section>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from "vue";
import type { PropType } from "vue";
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
export default defineComponent({
  name: "kt-price",
  component: {Accordion, AccordionTab},
  props: {
    faqs: {
      type: Object as PropType<Array<any>>,
      required: true
    }
  },
  setup(props) {
    const faqs = ref([
        {
          title:
            "¿Qué es el SOAP 2024 o Seguro Obligatorio de Accidentes Personales?",
          text:
            "El SOAP 2024 o Seguro Obligatorio de Accidentes Personales es un seguro exigido por la ley N° 18.490 y la CMF (Comisión para el Mercado Financiero), que tiene como objetivo otorgar cobertura a las personas lesionadas o muertas como consecuencia de un accidente en que el vehículo asegurado participe. El Seguro Obligatorio de Accidentes Personales o SOAP debe ser contratado por el propietario de un vehículo motorizado sea este auto, moto, entre otros, para poder acceder al permiso de circulación. En resumen El SOAP o Seguro Obligatorio de Accidentes Personales para tu vehículo, es un seguro que entrega cobertura ante lesiones o fallecimiento a causa de accidente o choque.",
        },
        {
          title:"¿Cuándo Bomberos de Chile recibe las donaciones realizadas?",
          text:"El aporte llega de manera íntegra a la compañía que escogiste una vez que finaliza la campaña. La información será transparentada con montos exactos a través de nuestra página web y en www.bomberosdechile.cl"
        },
        {
          title: "¿A quién cubre el SOAP 2024?",
          text:
            "El seguro obligatorio cubre al conductor, las personas transportadas en el vehículo asegurado y cualquier tercero afectado en el accidente. En caso de muerte del accidentado la indemnización se pagará a sus beneficiarios, en el siguiente orden de precedencia: el cónyuge, los hijos menores de edad, los hijos mayores de edad, los padres, la madre de los hijos de filiación no matrimonial del fallecido y, a falta de los anteriores, sus herederos legales.",
        },

        {
          title: "¿Cuánto dura tiempo el SOAP?",
          text:
            "La vigencia de tu SOAP es hasta el 31 de marzo del año posterior a su contratación, justo antes de pagar el Permiso de Circulación y es obligatorio para todo dueño de vehículo motorizado, remolque, acoplados, casas rodantes u otros similares.",
        },
        {
          title:
            "¿Qué cubre el SOAP 2024 o Seguro Obligatorio de Accidentes Personales?",
          text:
            "El SOAP 2024 o Seguro Obligatorio de Accidentes Personales cubre la muerte, muerte accidental, incapacidad permanente y gastos médicos producto de lesiones consecuencia de accidentes de tránsito en que intervenga el vehículo asegurado, sus remolques o sus cargas. Los gastos médicos comprenden: atención prehospitalaria, transporte sanitario, hospitalización, atención médica y quirúrgica, dental, prótesis e implantes, gastos farmacéuticos y gastos por concepto de rehabilitación de las víctimas. El seguro tiene preferencia frente a cualquier otra prestación cubierta por una Isapre, Fonasa u otro seguro complementario de salud y accidentes. La contratación del SOAP consta de un certificado que otorga la compañía aseguradora, y en él se detallan los datos del vehículo protegido, los antecedentes del propietario, entre otros.",
        },
        {
          title: "¿Cuál es el plazo para cobrar el SOAP 2024?",
          text:
            "El plazo para cobrar este seguro de auto obligatorio es de un año a contar de la fecha del accidente o de la muerte del afectado.",
        },
        {
          title: "¿Cuáles son las coberturas e indemnizaciones del SOAP?",
          text:
            "<table class='tabla-cobertura'><thead></thead><tr><th style='width:50%'>Coberturas SOAP</th><th>Indemnización</th></tr></thead><tbody><tr><td>Muerte</td><td>300 UF por persona</td></tr><tr><td>Incapacidad Permanente total</td><td>300 UF por persona</td></tr><tr><td>Incapacidad permanente parcial</td><td>Hasta 200 UF por persona</td></tr><tr><td>Gastos médicos hospitalarios</td><td>Gastos médicos hospitalarios	Hasta 300 UF (nivel 3 Fonasa)</td></tr></tbody></table>",
        },{
          title:
            "¿Dónde puedo contratar el SOAP 2024 o Seguro Obligatorio de Accidentes Personales?",
          text:
            "Puedes comprar el seguro obligatorio de accidentes personales para tu vehículo de manera 100% online en www.soapbomberos.cl ",
        },
        {
          title: "¿Sabes cómo hacer una compra segura de tu SOAP?",
          text:
            "- Al momento de realizar tu contratación, nunca deberás hacer transferencias de dinero en cuentas de terceros desconocidos. <br /><br />- Tu póliza se encontrará disponible para ser descargada las veces que quieras en seguros.sura.cl o www.soapbomberos.cl <br /><br /> - Si deseas revisar la validación de tu SOAP en la AACHS, puedes ingresar a sisesoap.aach.cl",
        },
        {
          title:
            "¿Qué no está cubierto por SOAP o Seguro Obligatorio de Accidentes Personales?",
          text:
            "No cubre los daños causados al vehículo. Sólo ampara los riesgos de muerte, lesiones de las personas afectadas por accidentes y reembolsa los gastos médicos y hospitalarios.",
        },
        {
          title: "¿Qué pasa si no tengo SOAP 2024?",
          text:
            "Este seguro debe ser contratado obligatoriamente por todo propietario de un vehículo motorizado, remolque, acoplados, casas rodantes u otros similares, al momento de adquirir el Permiso de Circulación. Si no contratas tu SOAP, no puedes circular en tu vehículo.",
        },
        {
          title: "¿Cómo hago efectivo el cobro del SOAP?",
          text:
            "1.Denuncia el siniestro ante la compañía de seguros, de forma presencial en alguna de sus sucursales. <br/><br/> 2.Guarda todos los certificados y boletas de gastos médicos que te hayan entregado por causa del accidente. También debes guardar todo documento emitido por el juzgado o fiscalía. <br/><br/> 3.Luego, preséntalos en la compañía de seguros para que te reembolsen el dinero correspondiente <br/<br/",
        },
        {
          title: "¿Qué debo tener en cuenta al contratar el SOAP?",
          text:
            "1.	Debe asegurarse de que los datos del vehículo establecidos en el Certificado SOAP sean los correctos. <br/> <br/> 2.	En el caso de protagonizar un accidente, debe hacer la denuncia en Carabineros de Chile. <br/> <br/> 3.	El Certificado SOAP siempre debe mantenerlo junto con la documentación del vehículo, ya que puede ser solicitado en cualquier momento por Carabineros. <br/> <br/> 4.	Ten presente los límites de cobertura establecidos en la póliza. Las condiciones de ésta también pueden ser consultados en el depósito de pólizas de la SVS. <br/> <br/> ",
        },
      ]);
    const faqOpen = ref(false);
    const isOpen = ref(false);
    watch(() => props.faqs, (newValue) => {
      faqs.value = newValue;
    });
    return {
      faqs,
      faqOpen,
      isOpen
    };
  },
});
</script>
