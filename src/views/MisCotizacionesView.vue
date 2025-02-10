<template>

<section class="breadcrumb-section">
    <!-- Breadcrumb arriba -->
    <nav class="breadcrumb">
        <img src="/media/misc/ico-home.webp" alt="Icono Home" class="home-icon" />
        <router-link :to="{name:'home'}">Inicio</router-link>
        <span>/</span>
        <a href="#">Mis Cotizaciones SOAP</a>
    </nav>

    <div class="volver-container">
        <!-- Botón Volver -->
        <router-link :to="{ name: 'home'}" class="btn-volver">
            <img src="/media/misc/ico-atras.webp" alt="Flecha Volver" class="arrow-icon" />
            <span>Volver</span>
        </router-link>

        <!-- Título a la derecha -->
        <h1 class="section-title">Mis Cotizaciones SOAP</h1>
    </div>
</section>


<section class="additional-coverage">
    <!-- Contenedor Azul -->
    <div class="coverage-header">
      <h2>Estas son las cotizaciones que haz realizado</h2>
    </div>
  
    <!-- Contenedor Blanco -->
    <div class="tabla-coberturas" style="">

      <table>
          <thead>
            <tr>
                <th></th>
                <th>Propietario</th>
                <th>Vehículo</th>
                <th>Valores</th>
                <th>Estado</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="data in polizas" v-bind-key="data.id">
                <td class="text-nowrap">
                    <i v-if="data.emitida" @click="editarPoliza(data)" class="pi true-icon pi-check-circle pointer" title="Editar"></i>
                    <i v-if="data.emitida"  class="pi true-icon pi-refresh pointer ms-3" title="Generar de nuevo el pdf"></i>
                </td>
                  <td class="text-nowrap" style="min-width:120px">
                      
                      <label for="asistencia-vial"><span class="image-text">{{data.cliente.nombre}} {{data.cliente.apellidoPaterno}}</span><br/>
                                                        <span class="d-block fs-8">{{data.cliente.rut}}</span>
                                                        <span class="d-block fs-8">{{data.cliente.email}}</span></label>
                  </td>
                  <td class="text-nowrap" style="min-width:120px">
                      <span style="color: red;">{{data.numeroPoliza}}</span><br/>
                      <span style="font-size: 12px; color: red;">{{data.vehiculo.patente}} / {{data.vehiculo.marca}} / {{data.vehiculo.modelo}}</span>
                  </td>
                  <td>
                      <span style="color: green;">SOAP: {{$filters.formatCurrency(data.planPesos)}}<br/>APORTE:{{$filters.formatCurrency(data.aporte)}}<br/>FINAL:{{$filters.formatCurrency(data.montoPago)}}</span>
                  </td>
                  <td>
                    <span v-if="data.emitida">Emitida Correctamente</span>
                    <span v-else>Cotización no finalizada</span>
                    <a v-if="data.emitida" :href="data.urlPoliza" target="_blank"><i  class="pi pi-file-pdf"></i></a>
                    <p v-if="data.pago?.tokenMedioPago"><small>Este es tu ID de pago de Mercado Pago: {{data.pago?.tokenMedioPago}}</small></p>
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
    await store.getCotizacionesTotales(currentUser.value?.profile?.email);
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
