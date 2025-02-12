<template>
Espera...
</template>

<script setup lang="ts">
import idsrvAuth from "../config/idsrvAuth";
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import {
  User
} from 'oidc-client'
import { ErrorMessage, Field, Form } from "vee-validate";
import { useBus } from  "@/core/bus/bus";
import _ from "lodash";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useRouter, useRoute} from "vue-router";
import { useAuthStore } from "@/stores/auth";
import type {UserLogin} from "@/stores/auth";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { decodeCredential, googleOneTap  } from 'vue3-google-login'
import { initFbsdk  } from '@/config/facebook';
moment.locale("es");


const router = useRouter();
const route = useRoute();
const store = useAuthStore();
const loading = ref(false);
const visible = ref(false);
const token = route.params.token;

const initRedirect = () => {
        loading.value = true;
        store.auto_register({token})
          .then(() => {
              console.log('1====>');
                let user = new User(store.user as any);
                console.log('2====>');
                let profile = store.user as any;
                console.log('3====>');
                user.profile = profile;
                console.log('4====>');
                idsrvAuth.storeUser(user).then(()=>{
                  console.log('5====>');
                  store.setAuthOIDC(user);
                  location.href='/mis-polizas';
                }).catch((e)=>{
                  console.log('e ===>' + e); 
                });
              loading.value = false;
          })
          .catch((e) => {
            loading.value = false;
            const error = Object.values(store.errors);
            Swal.fire({
              html: `<ul><li>${error.join('</li><li>')}</li></ul>`,
              icon: "error",
              buttonsStyling: false,
              confirmButtonText: "Intentar nuevamente!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-danger",
              },
            });
          });

}
onMounted(async () => {
  await initRedirect();
});
</script>

