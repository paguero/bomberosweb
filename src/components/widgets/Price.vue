<template>
    <section class="price">
      <div class="price-container container">
        
        <div class="price-info">
          
          <div
            v-for="(patente) in patentes"
            :key="patente.index"
            
          >
            <Form class="price-info__item" autocomplete="off" novalidate="novalidate" @submit="saveChanges1(patente)">
            <img :src="`/media/img/tarifas/${patente.icon}`" />
            <p>{{ patente.name }}</p>
            <label>{{ patente.price }}</label>
            
            <Field
                                  v-maska data-maska="#### ##"
                                  type="text"
                                  maxlength="7"
                                  :name="patente.id" v-mask="'AAAA AA'"
                                  class="
                                    form-control form-control-lg form-control-solid
                                    mb-3 mb-lg-0
                                  "
                                  placeholder="SOAP 24"
                                 v-model="patente.patente"
                                 :rules="requiredRules"
                                />
             <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                   <ErrorMessage :name="patente.id" />
                </div>
              </div>
            
            <button type="submit" ref="submitButton1" class="btn banner-form__button btn-quotation">COMPRAR</button> 
          </Form>
          </div>
        </div>
      </div>
    </section>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import type { PropType } from "vue";
import _ from "lodash";
import * as Yup from "yup";
import { useRouter, useRoute} from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
import { vMaska } from "maska"
import { patenteEsValido } from "@/core/validators/YupPatente";
 
export interface IVehiculo {
  patente: string
}
export interface ICotizacion {
  vehiculo: IVehiculo
}

export default defineComponent({
  name: "main-dashboard",
  components: {

    ErrorMessage,
    Field,
    Form,
  },
  props: {
    patentes: {
      type: Object as PropType<Array<any>>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
     const store = useCotizacionStore();
     const submitButton1 = ref<HTMLElement | null>(null);

     const cotizacionDetails= ref<ICotizacion>({
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
    const patentes = ref([
            { id:"item0", name: "Auto", price: "$5.290", icon: "auto.png", buy: false, patente:null, placeholder:'SOAP 24' },
            { id:"item1", name: "Camioneta", price: "$7.290", icon: "camioneta.png", buy: false, patente:null, placeholder:'SOAP 24' },
            { id:"item2", name: "Moto", price: "$35.490", icon: "moto.png", buy: false, patente:null, placeholder:'SOAP 23' },
            { id:"item3", name: "Minibús", price: "$17.990", icon: "minibus.png", buy: false, patente:null, placeholder:'SOAP 24' },
            {
            id:"item4", name: "Carro de Arrastre",
            price: "3400",
            icon: "carro.png",
            buy: false,patente:null, placeholder:'SOAP 24'
            },
        ]);

      const requiredRules = Yup.string().nullable().required("Es obligatorio").min(6).test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        });
     const cotizacionValidator = Yup.object().shape({
      //patentes.value.forEach((key) => patentes[key] = string().required());
      item0: Yup.string().nullable().required("Es obligatorio").label("Patente")
    });
    const saveChanges1 = (patente) => {
        console.log('enviando ' + patente.patente);
        const cotizacionDetails= ref<ICotizacion>({
          vehiculo : {
            patente : patente.patente    
        }}); 
        // Activate indicator
        store.createCotizacion(cotizacionDetails.value)
          .then(() => {
            store.setCarro(JSON.stringify({carroId:store.currentCotizacion.carroId, cotizacionId:store.currentCotizacion.cotizacionId}));
            router.push({ name: "info-vehiculo", params:{id:store.currentCotizacion.cotizacionId} });
          })
          .catch(() => {
            const [error] = Object.values(store.cotizacionErrors);
            console.log('eror ' + error);
          });
    };


    watch(() => props.patentes, (newValue) => {
      patentes.value = newValue;
    });

    return {
      patentes,
      submitButton1,
      cotizacionDetails,
      saveChanges1,
      cotizacionValidator,
      requiredRules
    };
  },
});
</script>
