<template>
         
  <template
            v-for="(patente) in patentes"
            :key="patente.index" 
          >
    <Form class="w-200px" autocomplete="off" novalidate="novalidate" @submit="saveChanges1(patente)">
      <div class="card">
          <div class="card-header">
            <img :src="patente.icon" :alt="patente.name" class="card-image">
            <h3 class="card-title text-nowrap">{{ patente.name }}</h3>
          </div>
          <div class="card-price">
            <p class="price">{{ patente.price }}</p>
            <p class="price-desc">
              <img src="/media/misc/heart-icon.webp" alt="Corazón" class="icon"> Tu aporte a Bomberos
            </p>
          </div>
          <div class="card-patente">
            <p class="patente-label">Ingrese su patente</p>
              <div class="plate-format-card">
                  <Field 
                            v-maska data-maska="#### ##"
                            type="text"
                            maxlength="7"
                            :name="patente.id" v-mask="'AAAA AA'"
                            class="
                              form-control form-control-lg
                              mb-3 mb-lg-0
                            "
                            placeholder="SOAP 25"
                            v-model="patente.patente"
                            :rules="requiredRules"
                          />
                </div>
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage :name="patente.id" />
                    </div>
                  </div>
          </div>
          <Prime-Button :loading="loading" type="submit"  label="COMPRAR"  class="buy-button"/> 

      </div>
    </Form>
  </template>
</template>
<script lang="ts">
import { ref, defineComponent, watch } from "vue";
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'
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
     const loading = ref(false);
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
            { id:"item0", name: "Auto", price: "$5.490", icon: "/media/misc/auto.webp", buy: false, patente:null, placeholder:'SOAP 25' },
            { id:"item1", name: "Camioneta", price: "$7.990", icon: "/media/misc/camioneta.webp", buy: false, patente:null, placeholder:'SOAP 25' },
            { id:"item2", name: "Moto", price: "$35.990", icon: "/media/misc/moto.webp", buy: false, patente:null, placeholder:'SOAP 25' },
            { id:"item3", name: "Minibús", price: "$17.990", icon: "/media/misc/minibus.webp", buy: false, patente:null, placeholder:'SOAP 25' },
            {
            id:"item4", name: "Carro de Arrastre",
            price: "$4.190",
            icon: "/media/misc/carro.webp",
            buy: false,patente:null, placeholder:'SOAP 25'
            },
        ]);

      const requiredRules = Yup.string().nullable().required("Es obligatorio").min(6).test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        });
     const cotizacionValidator = Yup.object().shape({
      //patentes.value.forEach((key) => patentes[key] = string().required());
      item0: Yup.string().nullable().required("Es obligatorio").label("Patente")
    });
    const { executeRecaptcha, recaptchaLoaded } = useReCaptcha()
    const recaptcha = async () => {
      await recaptchaLoaded()
      const token = await executeRecaptcha('login')
      return token;
    }

    const saveChanges1 = async (patente) => {
        loading.value = true;
        const cotizacionDetails= ref<ICotizacion>({
          vehiculo : {
            patente : patente.patente    
        }}); 
        cotizacionDetails.value.token = await recaptcha();
        // Activate indicator
        store.createCotizacion(cotizacionDetails.value)
          .then(() => {
            store.setCarro(JSON.stringify({carroId:store.currentCotizacion.carroId, cotizacionId:store.currentCotizacion.cotizacionId}));
            router.push({ name: "info-vehiculo", params:{id:store.currentCotizacion.cotizacionId} });
          })
          .catch(() => {
            loading.value = false;
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
      requiredRules,
      recaptcha,loading
    };
  },
});
</script>
