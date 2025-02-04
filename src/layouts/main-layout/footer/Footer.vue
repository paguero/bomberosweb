<template>
    <footer class="soap-footer">
    <div class="footer-container">
      <!-- Columna 1: Contacto -->
      <div class="footer-column">
        <h3>Contacto</h3>
        <!--ul>
          <li class="text-nowrap"><span>✉</span>conecta@soapbomberos.cl</li>
          <li class="text-nowrap"><span>✉</span>modificaciones@soapbomberos.cl</li>
          <li class="text-nowrap"><span>✉</span>despacho@soapbomberos.cl</li>
          <li class="text-nowrap"><span>✉</span>devoluciones@soapbomberos.cl</li>
        </ul-->
        <router-link :to="{name:'contacto'}" class="report-button">Solicitudes y Reclamos</router-link>
      </div>
  
      <!-- Columna 2: De interés -->
      <div class="footer-column">
        <h3>De interés</h3>
        <ul>
          <li><router-link :to="{name:'info-condiciones'}">Términos y condiciones</router-link></li>
          <li><a target="_blank" href="https://www.bomberos.cl/">Bomberos.cl</a></li>
        </ul>
      </div>
  
      <!-- Columna 3: Logo -->
      <div class="footer-column footer-logo">
        <img src="/media/logos/asegura-logo.webp" alt="SOAP Bomberos">
      </div>
  
      <!-- Columna 4: Redes sociales y botón -->
      <div class="footer-column footer-social">
        <h3>Síguenos y Difunde</h3>
        <div class="social-icons">
          <a href="https://www.instagram.com/soapbomberos/" target="_blank"><img src="/media/rrss/instagram.webp" alt="Instagram"></a>
          <a href="https://www.facebook.com/soapbomberosoficial/?_rdc=2&_rdr#" target="_blank"><img src="/media/rrss/facebook.webp" alt="Facebook"></a>
          <a href="https://twitter.com/SoapBomberos" target="_blank"><img src="/media/rrss/twitter.webp" alt="Twitter"></a>
          <a href="https://www.tiktok.com/@soapbomberos?lang=es" target="_blank"><img src="/media/rrss/tik-tok.webp" alt="TikTok"></a>
          <a href="https://www.linkedin.com/company/soap-bomberos/" target="_blank"><img src="/media/rrss/linkedin.webp" alt="LinkedIn"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerDisplay, footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "theme-footer",
  components: {},
  setup() {
    return {
      footerWidthFluid,
      footerDisplay,
    };
  },
});
</script>