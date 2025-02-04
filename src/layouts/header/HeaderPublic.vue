<template>
  <!-- start page header -->
  <header class="main-header">
    <!-- Sección superior: Botón "Conoce aquí lo recaudado" -->
    <div class="section-button">
      <div class="button-container">
        <a href="recaudacion.html" class="recaudado-button">Conoce aquí lo recaudado</a>
      </div>
    </div>

    <!-- Sección inferior: Logo + Botones (Iniciar sesión, Registrarse, Carrito) -->
    <div class="section-logo">
      <div class="logo-container">
        <!-- LOGO -->
        <div class="logo">
          <span class="soap">SOAP</span>
          <span class="bomberos">BOMBEROS</span>
        </div>

        <!-- Botones a la derecha -->
        <div class="buttons-right" id="buttons-right">
          <a href="inicio-sesion.html" class="action-button">Iniciar sesión</a>
          <a href="inicio-sesion.html" class="action-button">Regístrate</a>
          
          <div class="cart-icon" id="cartIcon">
            <span class="cart-badge">1</span>
            <img src="img/carrito-ico.png" alt="Carrito de compras" class="cart-img">
          </div>
        </div>
      </div>
    </div>
  </header>
    
  <!-- end page header -->
</template>
<script setup>
import { ref } from "vue";
import Menu from 'primevue/menu';

const menu = ref();
const items = ref([
    {
        label: 'Options',
        items: [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Export',
                icon: 'pi pi-upload'
            }
        ]
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);
};
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
  grid-template-columns: 57% auto auto;
  /*justify-content: space-between;*/
  top: 0;
  align-items: center;
  background: #002962 !important;
  z-index: 99;
  width: 100%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 150px auto;
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
.navbar-end {
  z-index: 99;
  display: flex;
  grid-template-columns: 50% auto;
  max-width: fit-content;
  margin: 0;
  justify-content: flex-end;
  align-items: center;
  display: grid;
  @media screen and (max-width: 1025px) {
    grid-column: 1/3;
    justify-self: center;
  }
  .banner-form__button-secondary {
    width: 100%;
    text-align: center;
    height: fit-content;
    text-transform: uppercase;
    background: #FF0082;
    color: #fff;
    border: solid 1px #FF0082;
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
  }
  .rrss-icons {
    display: grid;
    grid-template-columns: repeat(6, 40px);
    grid-template-rows: 40px;
    row-gap: 10px;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
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