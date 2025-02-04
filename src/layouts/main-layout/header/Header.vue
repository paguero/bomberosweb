<template>
  <!-- start page header -->
  <header class="main-header">
    <!-- Sección superior: Botón "Conoce aquí lo recaudado" -->
    <div class="section-button">
      <div class="button-container">
        <router-link :to="{ name: 'aportes'}" class="recaudado-button">Conoce aquí lo recaudado</router-link>
      </div>
    </div>

    <!-- Sección inferior: Logo + Botones (Iniciar sesión, Registrarse, Carrito) -->
    <div class="section-logo">
      <div class="logo-container">
        <!-- LOGO -->
        <router-link :to="{name:'home'}">
        <div class="logo">
          <span class="soap">SOAP</span>
          <span class="bomberos">BOMBEROS</span>
        </div>
        </router-link>
        <!-- Botones a la derecha -->
        <div class="buttons-right" id="buttons-right">
          <router-link v-if="!$oidc.isAuthenticated" :to="{name:'iniciar-sesion'}" class="action-button">Iniciar sesión</router-link>
          <router-link v-if="!$oidc.isAuthenticated" :to="{name:'registro'}" class="action-button">Regístrate</router-link>
          <div v-else
                class="px-2 d-flex flex-row align-items-center"
              >
          <Avatar
                  icon="pi pi-user"
                  style="background-color: #090; color: #fff"
                  shape="circle"
                />
                
                <div class="ps-2 dropdown dropdown-europ">
                  <button
                    class="dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {{ currentUser?.given_name }} {{ currentUser?.family_name }}
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <router-link :to="{name:'mis-datos'}"
                        class="dropdown-item esp"
                        >Mis datos</router-link
                      >
                    </li>
                    <li>
                      <router-link :to="{name:'mis-polizas'}"
                        class="dropdown-item px-4 py-4"
                        >Mis SOAP</router-link>
                    </li>
                    <li>
                      <span @click="cerrar_sesion"
                        class="dropdown-item px-4 py-4 cursor-pointer"
                        >Desconectar</span>
                    </li>
                  </ul>
                </div>
          </div>
          <div v-if="terminal" class="d-flex flex-row justify-content-center align-items-center pe-5">
              <span class="me-3">Hola {{terminal.responsable}}, revisa tu configuración    </span>
              <Prime-Button severity="secondary" type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
              <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
          </div>
          <div class="cart-icon" id="kt_drawer_chat_toggle">
            <span class="cart-badge">{{unidadesCarro}}</span>
            <img src="/media/misc/carrito-ico.webp" alt="Carrito de compras" class="cart-img">
          </div>
        </div>
      </div>
    </div>
  </header>
    
  <!-- end page header -->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, computed, getCurrentInstance } from "vue";
import { useBus } from "../../../core/bus/bus"; 
import Menu from 'primevue/menu';
import { useAuthStore } from "@/stores/auth";
import { useRouter, useRoute} from "vue-router";
import { useTerminalStore } from "@/stores/terminal";
import KTHeaderMenu from "@/layouts/main-layout/header/menu/Menu.vue";
import KTHeaderNavbar from "@/layouts/main-layout/header/Navbar.vue";
import Avatar from "primevue/avatar";

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
    Menu,
    Avatar
  },
  setup() {
    const isOpen = ref(false);  
    const store = useTerminalStore();
    const router = useRouter();
    const terminal = ref();
    const storeAuth = useAuthStore();
    const app = getCurrentInstance();
    var jsonTerminal = store.getTerminalStorage();
    if(jsonTerminal){
      terminal.value = JSON.parse(jsonTerminal);
    }


    const cerrar_sesion = () => {
      storeAuth.logout();
      location.href='/';
      
    };

    bus.on('unidades-carro-compra', (total ) => {
       console.log("RECIBIENDO UNIDADES COMPRA" + JSON.stringify(total)  );  
       unidadesCarro.value = total as number;
    }); 
    bus.on('agrega-producto-carro', (e) => {
       console.log("RECIBIENDO EMITT OTRA PAGE B" + e  )
       isOpen.value = e as boolean;
      });
    bus.on('terminal-conectado', (terminalConectado) => {
       terminal.value = JSON.parse(terminalConectado.toString());
        items.value = [
          {
              label: `ID Terminal: ${terminal.value?.terminalId}`,
              items: [
                  {
                      label: 'Cambiar terminal',
                      icon: 'pi pi-refresh',
                      command: () => {
                        router.push({ name: "info-terminal"});
                      }
                  },
                  {
                      label: 'Desconectar',
                      icon: 'pi pi-sign-out',
                      command: () => {
                        store.setTerminalStorage('');
                        terminal.value=null;
                      }
                  }
              ]
          }
        ]; 
    });
    const items = ref([
        {
            label: `ID Terminal: ${terminal.value?.terminalId}`,
            items: [
                {
                    label: 'Cambiar terminal',
                    icon: 'pi pi-refresh',
                    command: () => {
                      router.push({ name: "info-terminal"});
                    }
                },
                {
                    label: 'Desconectar',
                    icon: 'pi pi-sign-out',
                    command: () => {
                      store.setTerminalStorage('');
                      terminal.value=null;
                    }
                }
            ]
        }
      ]);

    
    const unidadesCarro = ref<number>(0);
    const menu = ref();
    
    const toggle = (event) => {
        menu.value.toggle(event);
    };
    const currentUser = computed(() => {
      return app?.appContext.config.globalProperties.$oidc.userProfile;
    });
    return {
      layout,
      headerWidthFluid,
      headerDisplay,
      themeMode,
      getAssetPath,
      unidadesCarro,
      toggle,
      items,
      menu,
      terminal,
      currentUser,
      cerrar_sesion
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