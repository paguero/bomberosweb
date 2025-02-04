<script setup lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useLigaBomberoStore } from "@/stores/ligaBombero";
import type { ILigaBombero } from "@/stores/ligaBombero";
import { useRouter, useRoute} from "vue-router";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
moment.locale("es");


const router = useRouter();
const store = useLigaBomberoStore();
const loading = ref(false);
const visible = ref(false);

const ligaValidator = Yup.object().shape({
  email: Yup.string().required("Es obligatorio").email("EMail inválido").label("Email")
});

const saveChanges = () => { 
  loading.value = true;
  store.createLigaBombero(ligaDetails.value)
      .then(() => {
            Swal.fire({
              text: "Gracias por ser parte de la Liga Bomberos.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "OK",
              customClass: {
                confirmButton: "btn fw-bold btn-light-success",
              },
            });
            loading.value = false;
        })
      .catch((e) => {
            loading.value = false;
            const [error] = Object.values(store.ligaBomberoErrors);
            Swal.fire({
              text: e+ ' ' + error,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Intentar nuevamente!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });
};

const route = useRoute();

const ligaDetails = ref<ILigaBombero>({
      email:"",
    });

</script>



<template>
    <section class="subscribe-section">        
    <!-- Lado izquierdo: Imagen -->
    <div class="subscribe-image">
      <img src="/media/misc/firefighter.webp" alt="Bombero">
    </div>
  
    <!-- Lado derecho: Contenido -->
    <div class="subscribe-content">
      <h2>INSCRÍBETE EN LA LIGA DE BOMBEROS</h2>
      <p>Esta iniciativa reúne a personas, empresas y organizaciones que se comprometen a apoyar la noble causa de Bomberos. ¡Inscríbete y obtendrás recursos gráficos para tus redes sociales!</p>
      <Form
        novalidate="novalidate"
        @submit="saveChanges()"
        :validation-schema="ligaValidator"
        class="subscribe-form">
        <Field
        v-model="ligaDetails.email"
            class="form-control p-4"
            type="email"
            placeholder="Ingrese su email"
            name="email"
            autocomplete="off"
        />
        <div class="fv-plugins-message-container">
        <div class="fv-help-block">
            <ErrorMessage name="email" />
        </div>
        </div>
        <Prime-Button
                  type="submit" label="INSCRIBIR" :loading="loading"/>
    </Form>
    </div>
  </section>
</template>