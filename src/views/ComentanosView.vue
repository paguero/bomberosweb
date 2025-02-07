<template>

<section class="breadcrumb-section">

<!-- Breadcrumb arriba -->
<nav class="breadcrumb">
  <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon">
  <router-link :to="{name:'home'}">Inicio</router-link>
  <span>/</span>
  <a href="#">Contacto</a>
</nav>

<div class="volver-container">
  <!-- Botón Volver -->
  <router-link  :to="{ name: 'home'}" class="btn-volver">
  <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon">
  <span>Volver</span>
</router-link>

  <!-- Título a la derecha -->
  <h1 class="section-title">Contacto</h1>
</div>

</section>



<section class="login-section">
  <div ref="hubspotForm"  id="hubspot-form"></div>
  </section>
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


declare global {
    interface Window {
      hbspt: any;
    }
  }

const router = useRouter();
const store = useAuthStore();
const cotizacionStore = useCotizacionStore();
const loading = ref(false);
const visible = ref(false);
const { bus } = useBus();

const route = useRoute();
const portalId = '40686585';
const formId = '22feeefa-7243-4265-958f-efa2144ffc75';

onMounted(async () => {
  const script = document.createElement('script');
  script.src = 'https://js.hsforms.net/forms/embed/v2.js';
  document.body.appendChild(script);

  script.addEventListener('load', () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        portalId: portalId,
        formId: formId,
        target: '#hubspot-form',
      });
    }
  });
});
</script>

