<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";


const protecciones = ref([
  {
    id: 1,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "Pack Medium",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 2,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 3,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 4,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 5,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 6,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
]);

const extras = ref([
  {
    id: 1,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 2,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 3,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 4,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 5,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 6,
    imagen: "/media/europcar/7cf0d6b81aafc1890369c79d2ff24fca.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
]);

const coberturasPorCancelacion = ref([
  {
    id: 1,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
  {
    id: 2,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
]);
const permisosCruceFronteraArgentina = ref([
  {
    id: 1,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
  {
    id: 2,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
]);


const formatCurrency = (value) => {
  return value.toLocaleString("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency: "CLP",
  });
};
</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
      <div class="titulo-pagina">Destinos</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row mt-10 items-multi-fondos">
      <!-- Protecciones -->
      <div class="row p-10">
        <div class="fs-4 titulo">Protecciones</div>
        <div
          class="col-md-6 col-lg-3 mt-7"
          v-for="proteccion in protecciones"
          :key="proteccion.id"
        >
          <div class="card">
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-proteccion d-flex gap-5">
                  <img
                    class="imagen-tarjeta-proteccion"
                    :src="proteccion.imagen"
                    alt=""
                  />
                  <span> {{ proteccion.nombre }}</span>
                </h5>
              </div>
              <div class="tarjeta-proteccion-descripcion">
                <div>
                  {{ proteccion.descripcion }}
                </div>

                <span class="leer-mas">Leer más</span>
              </div>

              <div class="proteccion-valor">
                {{ proteccion.valor }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Extras -->
      <div class="row p-10">
        <div class="fs-4 titulo">Extras</div>
        <div
          class="col-md-6 col-lg-3 mt-7"
          v-for="extra in extras"
          :key="extra.id"
        >
          <div class="card">
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-proteccion d-flex gap-5">
                  <img
                    class="imagen-tarjeta-proteccion"
                    :src="extra.imagen"
                    alt=""
                  />
                  <span> {{ extra.nombre }}</span>
                </h5>
              </div>
              <div class="tarjeta-proteccion-descripcion">
                <div>
                  {{ extra.descripcion }}
                </div>

                <span class="leer-mas">Leer más</span>
              </div>

              <div class="proteccion-valor">
                {{ extra.valor }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coberturas por cancelacion -->
      <div class="row p-10">
        <div class="fs-4 titulo">Coberturas por cancelación</div>
        <div
          class="col-12 mt-7"
          v-for="cobertura in coberturasPorCancelacion"
          :key="cobertura.id"
        >
          <div class="card">
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-cobertura">
                  <span> {{ cobertura.nombre }}</span>
                </h5>
                <h5 class="card-titulo subtitulo-tarjeta">
                  {{ cobertura.valor }}
                </h5>
              </div>
              <div class="tarjeta-cobertura-descripcion">
                <div>
                  {{ cobertura.descripcion }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Permiso cruce de frontera a Argentina -->
      <div class="row p-10">
        <div class="fs-4 titulo">Permiso cruce de frontera a Argentina</div>
        <div
          class="col-12 mt-7"
          v-for="permiso in permisosCruceFronteraArgentina"
          :key="permiso.id"
        >
          <div class="card">
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-cobertura">
                  <span> {{ permiso.nombre }}</span>
                </h5>
                <h5 class="card-titulo subtitulo-tarjeta">
                  {{ permiso.valor }}
                </h5>
              </div>
              <div class="tarjeta-cobertura-descripcion">
                <div>
                  {{ permiso.descripcion }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
        <div class="contenedor-tarjeta-gris">
      <div class="tarjeta-gris-titulo">Debes saber</div>
      <div class="tarjeta-gris-descripcion">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>

    <div class="d-flex justify-content-center gap-6 flex-wrap">
      <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/mi-primer-arriendo">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <path
              d="M21.6382 10.5791L20.2132 6.30309C20.0064 5.68067 19.6088 5.13923 19.0768 4.7557C18.5448 4.37216 17.9055 4.16604 17.2496 4.16663H7.75169C7.09585 4.16604 6.4565 4.37216 5.92449 4.7557C5.39248 5.13923 4.99487 5.68067 4.78815 6.30309L3.36315 10.5791C2.98462 10.738 2.66136 11.0049 2.43382 11.3466C2.20629 11.6883 2.0846 12.0895 2.08398 12.5V17.7083C2.08398 18.4927 2.52461 19.1687 3.16628 19.5239C3.15273 19.5927 3.12565 19.6552 3.12565 19.727V21.875C3.12565 22.1512 3.2354 22.4162 3.43075 22.6115C3.6261 22.8069 3.89105 22.9166 4.16732 22.9166H5.20898C5.48525 22.9166 5.7502 22.8069 5.94555 22.6115C6.1409 22.4162 6.25065 22.1512 6.25065 21.875V19.7916H18.7507V21.875C18.7507 22.1512 18.8604 22.4162 19.0557 22.6115C19.2511 22.8069 19.5161 22.9166 19.7923 22.9166H20.834C21.1103 22.9166 21.3752 22.8069 21.5706 22.6115C21.7659 22.4162 21.8757 22.1512 21.8757 21.875V19.727C21.8757 19.6552 21.8486 19.5916 21.835 19.5239C22.1615 19.3459 22.4342 19.0835 22.6245 18.7642C22.8149 18.4448 22.916 18.0801 22.9173 17.7083V12.5C22.9173 11.6364 22.3882 10.8948 21.6382 10.5791ZM4.16732 17.7083V12.5H20.834L20.8361 17.7083H4.16732ZM7.75169 6.24996H17.2486C17.6975 6.24996 18.0954 6.53538 18.2371 6.96246L19.3892 10.4166H5.61211L6.76315 6.96246C6.83226 6.75495 6.96494 6.57447 7.14237 6.44658C7.3198 6.3187 7.53298 6.24991 7.75169 6.24996Z"
              fill="white"
            />
            <path
              d="M6.77148 16.6666C7.63443 16.6666 8.33398 15.9671 8.33398 15.1041C8.33398 14.2412 7.63443 13.5416 6.77148 13.5416C5.90854 13.5416 5.20898 14.2412 5.20898 15.1041C5.20898 15.9671 5.90854 16.6666 6.77148 16.6666Z"
              fill="white"
            />
            <path
              d="M18.2285 16.6666C19.0915 16.6666 19.791 15.9671 19.791 15.1041C19.791 14.2412 19.0915 13.5416 18.2285 13.5416C17.3656 13.5416 16.666 14.2412 16.666 15.1041C16.666 15.9671 17.3656 16.6666 18.2285 16.6666Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Mi primer viaje</span>
      </a>
      <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/destinos">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M13.0007 22.9163C11.5597 22.9163 10.2055 22.6427 8.93815 22.0955C7.67079 21.5483 6.56836 20.8063 5.63086 19.8695C4.69336 18.932 3.95135 17.8295 3.40482 16.5622C2.85829 15.2948 2.58468 13.9406 2.58398 12.4997C2.58398 11.0587 2.8576 9.70454 3.40482 8.43718C3.95204 7.16981 4.69405 6.06738 5.63086 5.12988C6.56836 4.19238 7.67079 3.45037 8.93815 2.90384C10.2055 2.35731 11.5597 2.0837 13.0007 2.08301C15.5354 2.08301 17.7534 2.87745 19.6548 4.46634C21.5562 6.05523 22.7409 8.04724 23.209 10.4424H21.0736C20.7437 9.17502 20.1489 8.04204 19.2892 7.04343C18.4295 6.04481 17.375 5.29412 16.1257 4.79134V5.20801C16.1257 5.78092 15.9215 6.27155 15.5132 6.67988C15.1048 7.08822 14.6145 7.29204 14.0423 7.29134H11.959V9.37467C11.959 9.66981 11.859 9.91738 11.659 10.1174C11.459 10.3174 11.2118 10.417 10.9173 10.4163H8.83398V12.4997H10.9173V15.6247H9.87565L4.87565 10.6247C4.82357 10.9372 4.77565 11.2497 4.7319 11.5622C4.68815 11.8747 4.66662 12.1872 4.66732 12.4997C4.66732 14.774 5.46593 16.7271 7.06315 18.3591C8.66037 19.991 10.6395 20.8156 13.0007 20.833V22.9163ZM22.4798 22.3955L19.1465 19.0622C18.7819 19.2705 18.3913 19.4441 17.9746 19.583C17.5579 19.7219 17.1152 19.7913 16.6465 19.7913C15.3444 19.7913 14.2378 19.3354 13.3267 18.4236C12.4156 17.5118 11.9597 16.4052 11.959 15.1038C11.959 13.8018 12.4149 12.6948 13.3267 11.783C14.2385 10.8712 15.3451 10.4156 16.6465 10.4163C17.9486 10.4163 19.0555 10.8722 19.9673 11.784C20.8791 12.6959 21.3347 13.8025 21.334 15.1038C21.334 15.5726 21.2645 16.0153 21.1257 16.432C20.9868 16.8486 20.8132 17.2393 20.6048 17.6038L23.9382 20.9372L22.4798 22.3955ZM16.6465 17.708C17.3757 17.708 17.992 17.4563 18.4954 16.9528C18.9989 16.4493 19.2507 15.833 19.2507 15.1038C19.2507 14.3747 18.9989 13.7584 18.4954 13.2549C17.992 12.7514 17.3757 12.4997 16.6465 12.4997C15.9173 12.4997 15.301 12.7514 14.7975 13.2549C14.2941 13.7584 14.0423 14.3747 14.0423 15.1038C14.0423 15.833 14.2941 16.4493 14.7975 16.9528C15.301 17.4563 15.9173 17.708 16.6465 17.708Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Destinos</span>
      </a>

      <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/tips-de-viajes">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M19.2507 15.6247C19.2507 18.333 18.0007 20.7288 16.0215 22.1872L15.5007 21.6663L13.3132 19.4788L14.7715 18.0205L16.0215 19.2705C16.5423 18.5413 16.959 17.6038 17.0632 16.6663H15.084V14.583H17.0632C16.8548 13.6455 16.5423 12.8122 16.0215 11.9788L14.7715 13.2288L13.3132 11.7705L14.5632 10.5205C13.834 9.99967 12.8965 9.58301 11.959 9.47884V11.458H9.87565V9.47884C8.93815 9.68717 8.10482 9.99967 7.27148 10.5205L10.3965 13.6455C10.6048 13.6455 10.709 13.5413 10.9173 13.5413C11.4699 13.5413 11.9998 13.7608 12.3905 14.1515C12.7812 14.5422 13.0007 15.0721 13.0007 15.6247C13.0007 16.1772 12.7812 16.7071 12.3905 17.0978C11.9998 17.4885 11.4699 17.708 10.9173 17.708C9.76107 17.708 8.83398 16.7809 8.83398 15.6247C8.83398 15.4163 8.83398 15.3122 8.93815 15.1038L5.81315 11.9788C5.29232 12.708 4.87565 13.6455 4.77148 14.583H6.75065V16.6663H4.77148C4.97982 17.6038 5.29232 18.4372 5.81315 19.2705L7.06315 18.0205L8.52148 19.4788L5.81315 22.1872C3.83398 20.7288 2.58398 18.333 2.58398 15.6247C2.58398 11.0205 6.31315 7.29134 10.9173 7.29134C15.5215 7.29134 19.2507 11.0205 19.2507 15.6247ZM24.459 5.20801C24.459 3.47884 23.0632 2.08301 21.334 2.08301C19.6048 2.08301 18.209 3.47884 18.209 5.20801C18.209 6.56217 19.084 7.70801 20.2923 8.14551V11.458H22.3757V8.14551C23.584 7.70801 24.459 6.56217 24.459 5.20801ZM21.334 6.24967C20.7611 6.24967 20.2923 5.78092 20.2923 5.20801C20.2923 4.63509 20.7611 4.16634 21.334 4.16634C21.9069 4.16634 22.3757 4.63509 22.3757 5.20801C22.3757 5.78092 21.9069 6.24967 21.334 6.24967Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Tips de viajes</span>
      </a>
    </div>

    <div class="d-flex justify-content-center gap-6 flex-wrap mb-20">

      <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/proteccion">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M22.1382 10.5795L20.7132 6.30345C20.5064 5.68104 20.1088 5.1396 19.5768 4.75606C19.0448 4.37253 18.4055 4.16641 17.7496 4.16699H8.25169C7.59585 4.16641 6.9565 4.37253 6.42449 4.75606C5.89248 5.1396 5.49487 5.68104 5.28815 6.30345L3.86315 10.5795C3.48462 10.7383 3.16136 11.0053 2.93382 11.347C2.70629 11.6886 2.5846 12.0898 2.58398 12.5003V17.7087C2.58398 18.493 3.02461 19.1691 3.66628 19.5243C3.65273 19.593 3.62565 19.6555 3.62565 19.7274V21.8753C3.62565 22.1516 3.7354 22.4165 3.93075 22.6119C4.1261 22.8072 4.39105 22.917 4.66732 22.917H5.70898C5.98525 22.917 6.2502 22.8072 6.44555 22.6119C6.6409 22.4165 6.75065 22.1516 6.75065 21.8753V19.792H19.2507V21.8753C19.2507 22.1516 19.3604 22.4165 19.5557 22.6119C19.7511 22.8072 20.0161 22.917 20.2923 22.917H21.334C21.6103 22.917 21.8752 22.8072 22.0706 22.6119C22.2659 22.4165 22.3757 22.1516 22.3757 21.8753V19.7274C22.3757 19.6555 22.3486 19.592 22.335 19.5243C22.6615 19.3463 22.9342 19.0839 23.1245 18.7645C23.3149 18.4451 23.416 18.0805 23.4173 17.7087V12.5003C23.4173 11.6368 22.8882 10.8951 22.1382 10.5795ZM4.66732 17.7087V12.5003H21.334L21.3361 17.7087H4.66732ZM8.25169 6.25033H17.7486C18.1975 6.25033 18.5954 6.53574 18.7371 6.96283L19.8892 10.417H6.11211L7.26315 6.96283C7.33226 6.75532 7.46494 6.57483 7.64237 6.44695C7.8198 6.31907 8.03298 6.25027 8.25169 6.25033Z"
              fill="white"
            />
            <path
              d="M7.27148 16.667C8.13443 16.667 8.83398 15.9674 8.83398 15.1045C8.83398 14.2415 8.13443 13.542 7.27148 13.542C6.40854 13.542 5.70898 14.2415 5.70898 15.1045C5.70898 15.9674 6.40854 16.667 7.27148 16.667Z"
              fill="white"
            />
            <path
              d="M18.7285 16.667C19.5915 16.667 20.291 15.9674 20.291 15.1045C20.291 14.2415 19.5915 13.542 18.7285 13.542C17.8656 13.542 17.166 14.2415 17.166 15.1045C17.166 15.9674 17.8656 16.667 18.7285 16.667Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Protección</span>
      </a>
    </div>
  


  </main>
</template>

<style>
.proteccion-valor {
  color: #496251;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 27px */
  margin-top: 10px;
  margin-block-start: 10px;
}
.btn-primary-outline-tarjeta {
  border: 2px solid #090;
  font-weight: bolder;
  padding: 10px 40px;
  background: #fff;
  color: #090;
}
.tarjeta-proteccion-descripcion div {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 21px */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.leer-mas {
  display: inline;
  color: #496251;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  text-decoration-line: underline;
}
.imagen-tarjeta-proteccion {
  width: 64px;
  height: 64px;
}
.tarjeta-cobertura-descripcion div {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 21px */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.tarjeta-mas-informacion {
  color: #496251;
  text-align: center;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
}
.titulo-tarjeta {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta-proteccion {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta-cobertura {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.subtitulo-tarjeta {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}

.titulo {
  color: #001501;
  font-family: "Gotham", Helvetica;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.card {
  cursor: pointer;
  transition: border-color 0.3s ease;
  border-radius: 10px;
}
</style>
