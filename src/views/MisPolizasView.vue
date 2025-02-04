<template>

<section class="breadcrumb-section">
    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
        <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon" />
        <router-link :to="{name:'home'}">Inicio</router-link>
        <span>/</span>
        <a href="#">Mis Pólizas SOAP</a>
    </nav>

    <div class="volver-container">
        <!-- Botón Volver -->
        <router-link :to="{ name: 'home'}" class="btn-volver">
            <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon" />
            <span>Volver</span>
        </router-link>

        <!-- Título a la derecha -->
        <h1 class="section-title">Mis Pólizas SOAP</h1>
    </div>
</section>


<section class="additional-coverage">
    <!-- Contenedor Azul -->
    <div class="coverage-header">
      <h2>Estas son los SOAP asociados a tu cuenta</h2>
    </div>
  
    <!-- Contenedor Blanco -->
    <div class="tabla-coberturas">

      <table>
          <thead>
            <tr>
                <th></th>
                <th>Propietario</th>
                <th>N° Póliza</th>
                <th>Pesos pagados</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="data in polizas" v-bind-key="data.id">
                <td class="text-nowrap">
                    <i v-if="data.emitida" @click="editarPoliza(data)" class="pi true-icon pi-check-circle pointer" title="Editar"></i>
                    <i v-if="data.emitida"  class="pi true-icon pi-refresh pointer ms-3" title="Generar de nuevo el pdf"></i>
                </td>
                  <td>
                      
                      <label for="asistencia-vial"><span class="image-text">{{data.cliente.nombre}} {{data.cliente.apellidoPaterno}}</span>
                                                        <span class="d-block fs-8">{{data.cliente.rut}}</span>
                                                        <span class="d-block fs-8">{{data.cliente.email}}</span></label>
                  </td>
                  <td>
                      <span style="color: red;">{{data.numeroPoliza}}</span>
                      <span style="font-size: 12px; color: red;">{{data.vehiculo.patente}} / {{data.vehiculo.marca}} / {{data.vehiculo.modelo}}</span>
                  </td>
                  <td>
                      <span style="color: green;">SOAP: {{$filters.formatCurrency(data.planPesos)}}<br/>APORTE:{{$filters.formatCurrency(data.aporte)}}<br/>FINAL:{{$filters.formatCurrency(data.montoPago)}}</span>
                  </td>
                  <td>
                    <a v-if="data.urlPoliza!=''" :href="data.urlPoliza" target="_blank"><i  class="pi pi-file-pdf"></i></a>
                  </td>
              </tr>
              
          </tbody>
      </table>
  </div>

  </section>
</template>
<script setup lang="ts">
import { ref, onMounted, nextTick, computed, getCurrentInstance } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCotizacionStore } from "@/stores/cotizacion";
import DataView from 'primevue/dataview';
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'   // optional

import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
const router = useRouter();
const route = useRoute();

moment.locale("es");
const app = getCurrentInstance();
const store = useCotizacionStore();
const loading = ref(true);
const currentUser = computed(() => {
  return app?.appContext.config.globalProperties.$oidc.user;
});

onMounted(async () => {
    loading.value = true;
    await obtenerCotizaciones();
  loading.value = false;
});

const polizas = computed(() => {
    return store.allCotizacions;
});
const obtenerCotizaciones = async  () => {
    await store.getCotizaciones(currentUser.value?.profile?.email);
  };

  const editarPoliza = (data) => {
       router.push({ name: "modificar-mi-poliza", params: {carroId:data.carroId, id:data.cotizacionId} });
    };

</script>
<style scoped>
.login form {
  width: 300px;
  /* min-height: 100vh; */
}
</style>
