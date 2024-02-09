<template>
  <!--begin::Header-->
  
 <header
    id="kt_header_mobile"
    class="_fixed-top bg-blue"
    v-bind:class="headerClasses"
  >     
  <div class="sticky-wrapper" style="min-height: 70px;">
    <div class="header-main _sticky-header _sticky-active">

  <div id="header-wrapper">

      <div>
          <nav class="Navbar">
            <div class="brand">
              <router-link to="/">
                <img src="/media/img/asegura-logo.png" />
              </router-link>
            </div>
            <div class="navbar-center d-none d-sm-block">
              <img src="/media/img/logotipo.png" />
            </div>
            <div class="rrss-icons">
                <a target="_blank" href="https://www.instagram.com/soapbomberos/"
                  ><img src="/media/logos/instagram.png"
                /></a>
                <a target="_blank" href="https://web.facebook.com/soapbomberosoficial/?_rdc=1"
                  ><img src="/media/logos/facebook.png"
                /></a>
                <a target="_blank" href="https://twitter.com/SoapBomberos"
                  ><img src="/media/logos/twitter.png"
                /></a>
                <a target="_blank" href="https://www.tiktok.com/@soapbomberos?lang=es"
                  ><img src="/media/logos/tik-tok.png"
                /></a>
                <a target="_blank" href="https://www.youtube.com/channel/UCX5HLqeLRbNt-87GzSfZSVA"
                  ><img src="/media/logos/youtube.png"
                /></a>
                <a target="_blank" href="https://www.linkedin.com/company/soap-bomberos/"
                  ><img src="/media/logos/linkedin.png" />
                </a>
              </div>
            <div class="navbar-end navbar-menu">
              <div>
                <router-link :to="{ name: 'modifica-tu-poliza-ingresar'}" class="banner-form__button-secondary text-nowrap mx-2">
                                              Modifica tu póliza</router-link>
                <router-link :to="{ name: 'info-documento'}" class="banner-form__button-secondary text-nowrap mx-2">
                                              Descarga tu póliza</router-link>
              </div>
            
              <div class="list-inline-item">
                       <!--begin::Chat-->
                        <div  class="app-navbar-item ms-1 ms-lg-3">
                          <!--begin::Menu wrapper-->
                          <div
                            class="btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px position-relative rounded-circle"
                            id="kt_drawer_chat_toggle"
                          >
                            <span class="svg-icon svg-icon-1">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag">
                                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                          <line x1="3" y1="6" x2="21" y2="6"></line>
                                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                                        </svg>
                                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white">
                                        {{unidadesCarro}}
                                        <span class="visually-hidden">unread messages</span>
                                        </span>
                            </span>
                            <span v-if="isOpen"
                              class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
                            ></span>  
                          </div>
                          <!--end::Menu wrapper-->
                        </div>
                        <!--end::Chat-->
                    </div>
                    </div>
          </nav>
        </div>
      </div> </div> </div>
    </header>
  <!--end::Header-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { useBus } from "../../../core/bus/bus";
import KTHeaderMenu from "@/layouts/main-layout/header/menu/Menu.vue";
import KTHeaderNavbar from "@/layouts/main-layout/header/Navbar.vue";
const { bus } = useBus();
import {
  headerDisplay,
  headerWidthFluid,
  layout,
  themeMode,
} from "@/core/helpers/config";

export default defineComponent({
  name: "layout-header",
  components: {
    KTHeaderMenu,
    KTHeaderNavbar,
  },
  setup() {
    const isOpen = ref(false);  
    bus.on('unidades-carro-compra', (total ) => {
       console.log("RECIBIENDO UNIDADES COMPRA" + JSON.stringify(total)  );  
       unidadesCarro.value = total as number;
    }); 
    bus.on('agrega-producto-carro', (e) => {
       console.log("RECIBIENDO EMITT OTRA PAGE B" + e  )
       isOpen.value = e as boolean;
      }); 

    const unidadesCarro = ref<number>(0);
    return {
      layout,
      headerWidthFluid,
      headerDisplay,
      themeMode,
      getAssetPath,
      unidadesCarro
    };
  },
});
</script>
<style lang="scss" scoped>
.navbar-desktop {
  @media screen and (max-width: 1024px) {
    display: none !important;
  }
}
nav {
  padding: 20px 7.5%;
  display: grid;
  column-gap: 20px;
  grid-template-columns: 5% 5% 25% auto;
  justify-content: space-between;
  top: 0;
  align-items: center;
  background: #002962 !important;
  z-index: 99;
  width: 100%;
  @media screen and (max-width: 1024px) {
    padding: 20px 2.5%;
    grid-template-columns: 110px auto;
  }
  img {
    max-height: none !important;
  }
}
.navbar {
  width: 100%;
  position: absolute;
}
.navbar-center {
  margin: 0;
  @media screen and (max-width: 769px) {
    font-size: 20px;
  }
  h1 {
    color: #fff;
    font-size: 26px;
    @media screen and (max-width: 769px) {
      font-size: 20px;
    }
    @media screen and (max-width: 426px) {
      font-size: 15px;
    }
    span {
      color: #bb2634;
      font-weight: 700;
    }
  }
}
.navbar-menu {
  background: transparent !important;
}
.rrss-icons {
    display: grid;
    grid-template-columns: repeat(6, 40px);
    grid-template-rows: 40px;
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(6, 30px);
      grid-template-rows: 40px;
    }
    a {
      width: 100%;
      color: #fff;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      border: none;
      transition: 400ms;
      padding: 5px 10px;
      &:hover {
        background: rgba(0, 0, 0, 0.4);
      }
      img {
        width: 100%;
      }
    }
  }
.navbar-end {
  z-index: 99;
  display: flex;
  grid-template-columns: 40% 40% auto;
  max-width: fit-content;
  margin: 0;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1025px) {
    grid-column: 1/3;
    justify-self: center;
    margin-top: 10px;
  }
  .banner-form__button-secondary {
    width: 100%;
    text-align: center;
    height: fit-content;
    text-transform: uppercase;
    background: #FF002B;
    color: #fff;
    border: solid 1px #FF002B;
    font-weight: 500;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    transition: 400ms;
    outline: none;
    &:hover {
      background: #a51e2c;
      color: #fff;
    }
    @media screen and (max-width: 1024px) {
      font-size: 0.75rem;
    }
  }
  
  .navbar-item {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    font-family: "Oswald";
    transition: 400ms;
    text-align: center;
    @media screen and (max-width: 1024px) {
      font-size: 40px;
    }
    &:hover {
      background: transparent;
      transition: 400ms;
    }
    &:visited {
      color: #fff;
      background: transparent !important;
    }
    &:focus {
      color: #fff;
      background: transparent !important;
    }
    &:active {
      color: #fff;
      background: transparent !important;
    }
  }
  .navbar-item {
    text-decoration: none;
    z-index: 1;
  }

  .navbar-item:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -5px;
    left: 0;
    background: #fff;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: 0.25s linear;
  }
  .navbar-item:hover:before,
  .navbar-item:focus:before {
    visibility: visible;
    transform: scaleX(1);
  }
}
.open {
  display: none;
  @media screen and (max-width: 1024px) {
    animation: slide-right;
    animation-duration: 400ms;
    animation-fill-mode: both;
    max-width: 120%;
    position: absolute;
    display: grid;
    grid-template-rows: repeat(3, min-content);
    justify-content: center;
    align-content: center;
    row-gap: 50px;
    background: #212f40;
    top: 0;
    right: -10%;
    width: 100%;
    height: 102vh;
  }
}
.close {
  display: none;
  animation-name: slide-left;
  animation-duration: 400ms;
  animation-delay: 400ms;
}
@keyframes slide-right {
  0% {
    right: -120%;
  }
  100% {
    right: 0;
  }
}
@keyframes slide-left {
  0% {
    right: -10%;
  }
  100% {
    right: -100%;
  }
}
@keyframes switch-right {
  0% {
    left: 5%;
    background: #575757;
    border: solid 2px #575757;
  }
  100% {
    left: 55%;
    background: #fff;
    border: solid 2px #fff;
  }
}
@keyframes switch-left {
  0% {
    left: 55%;
    background: #fff;
    border: solid 2px #fff;
  }
  100% {
    left: 5%;
    background: #575757;
    border: solid 2px #575757;
  }
}
@keyframes todark {
  0% {
    background: #fff;
  }
  100% {
    background: #575757;
  }
}
@keyframes towhite {
  0% {
    background: #575757;
  }
  100% {
    background: #fff;
  }
}
</style>