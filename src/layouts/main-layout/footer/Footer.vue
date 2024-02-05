<template>
  <!--begin::Footer-->
  <div>
  <footer id="footer">
      <div class="footer-container container align-items-start">
        <div class="footer-contact">
          <h5>Contacto</h5>
          <div class="footer-contact__items">
            <div class="footer-contact__links">
              <a href="mailto:conecta@soapbomberos.cl">
                <i class="fas fa-envelope"
                />conecta@soapbomberos.cl</a
              >
            </div>
            <div class="footer-contact__links">
              <a href="mailto:modificaciones@soapbomberos.cl">
                <i class="fas fa-envelope"
                />modificaciones@soapbomberos.cl</a
              >
            </div>
            <div class="footer-contact__links">
              <a href="mailto:despacho@soapbomberos.cl">
                <i class="fas fa-envelope"
                />despacho@soapbomberos.cl</a
              >
            </div>
            <div class="footer-contact__links">
              <a href="mailto:devoluciones@soapbomberos.cl">
                <i class="fas fa-envelope"
                />devoluciones@soapbomberos.cl</a
              >
            </div>
            
          </div>
        </div>



        <div class="footer-interes">
          <h5>De interés</h5>
          <div class="d-flex flex-column">
            <div class="footer-interes__links">
              <router-link :to="{name:'info-condiciones'}" class="text-white">
                Términos y condiciones</router-link
              >
            </div>
            <div class="footer-interes__links"><a class="text-white" href="https://www.bomberos.cl">
                Bomberos.cl</a
              ></div>
            
          </div>
        </div>
        <div class="footer-logo">
          <img src="/media/img/asegura-logo.png" />
        </div>
        <div class="footer-rrss">
          <h2 class="text-white">Siguenos y Difunde</h2>
          <div class="rrss-icons">
                <a href="https://www.instagram.com/soapbomberos/"
                  ><img src="/media/logos/instagram.png"
                /></a>
                <a href="https://www.facebook.com/SOAPbomberos"
                  ><img src="/media/logos/facebook.png"
                /></a>
                <a href="https://twitter.com/SoapBomberos"
                  ><img src="/media/logos/twitter.png"
                /></a>
                <a href="https://www.tiktok.com/@soapbomberos?lang=es"
                  ><img src="/media/logos/tik-tok.png"
                /></a>
                <a href="https://www.youtube.com/channel/UCX5HLqeLRbNt-87GzSfZSVA"
                  ><img src="/media/logos/youtube.png"
                /></a>
                <a href="https://www.linkedin.com/company/soap-bomberos/"
                  ><img src="/media/logos/linkedin.png" />
                </a>
              </div>
              <router-link :to="{ name: 'home'}" class="banner-form__button-secondary btn btn-primary">
                                             Denuncia tu Siniestro</router-link>
        </div>
        
      </div>
    </footer>
    <div class="copyright py-4 border border-light border-top border-left-0 border-right-0 border-bottom-0">
      <div class="container">
       <div class="justify-content-center align-items-center m-auto"> 
          © 2024 SOAP Bomberos
        </div>
      </div>
    </div>
  </div>
  <!--end::Footer-->
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
<style scoped>

.footer .overlap {
    height: 303px;
    background-image: url(/media/patterns/rectangle-429-1.svg);
    background-size: 100% 100%;
}

footer.footer .frame-11 {
    display: inline-flex;
    align-items: flex-start;
    gap: 60px;
    position: absolute;
    top: 62px;
    left: 221px;
}
.footer .titulo {
    color: #496251;
    line-height: 13.2px;
    white-space: nowrap;
    position: relative;
    font-weight: 400;
    letter-spacing: 0;
}
.logo{
    width: 111.17px;
    text-align: center;
    background-color: #f2f2f2;
    border-radius: 20px;
    margin:0 1rem;
    padding: 1rem 0.5rem;
}
.rrss-icons a{
    margin:10px;
  }

</style>