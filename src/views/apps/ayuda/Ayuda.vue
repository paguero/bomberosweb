<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
 const router = useRouter();
const preguntas = ref([
  {
    id: 1,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 2,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 3,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 4,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
  {
    id: 5,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
  },
]);

const emergencias = ref([
  {
    id: 1,
    nombre: "Asistencia en ruta",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="83" viewBox="0 0 84 83" fill="none">
<path d="M72.3368 35.1225L67.6058 20.9261C66.9195 18.8596 65.5995 17.0621 63.8332 15.7887C62.0669 14.5154 59.9443 13.8311 57.7669 13.833H26.2338C24.0564 13.8311 21.9337 14.5154 20.1675 15.7887C18.4012 17.0621 17.0811 18.8596 16.3948 20.9261L11.6638 35.1225C10.4071 35.6498 9.33387 36.5361 8.57846 37.6705C7.82304 38.8048 7.41903 40.1368 7.41699 41.4997V58.7913C7.41699 61.3955 8.87987 63.6399 11.0102 64.8192C10.9652 65.0475 10.8753 65.255 10.8753 65.4936V72.6247C10.8753 73.5419 11.2397 74.4215 11.8882 75.0701C12.5368 75.7187 13.4165 76.083 14.3337 76.083H17.792C18.7092 76.083 19.5888 75.7187 20.2374 75.0701C20.886 74.4215 21.2503 73.5419 21.2503 72.6247V65.708H62.7503V72.6247C62.7503 73.5419 63.1147 74.4215 63.7632 75.0701C64.4118 75.7187 65.2915 76.083 66.2087 76.083H69.667C70.5842 76.083 71.4638 75.7187 72.1124 75.0701C72.761 74.4215 73.1253 73.5419 73.1253 72.6247V65.4936C73.1253 65.255 73.0354 65.044 72.9905 64.8192C74.0743 64.2283 74.9796 63.3572 75.6116 62.2968C76.2437 61.2365 76.5794 60.0258 76.5837 58.7913V41.4997C76.5837 38.6327 74.8268 36.1704 72.3368 35.1225ZM14.3337 58.7913V41.4997H69.667L69.6739 58.7913H14.3337ZM26.2338 20.7497H57.7634C59.254 20.7497 60.575 21.6973 61.0454 23.1152L64.8703 34.583H19.1304L22.9518 23.1152C23.1813 22.4263 23.6218 21.827 24.2108 21.4025C24.7999 20.9779 25.5077 20.7495 26.2338 20.7497Z" fill="white"/>
<path d="M22.9795 55.333C25.8445 55.333 28.167 53.0105 28.167 50.1455C28.167 47.2805 25.8445 44.958 22.9795 44.958C20.1145 44.958 17.792 47.2805 17.792 50.1455C17.792 53.0105 20.1145 55.333 22.9795 55.333Z" fill="white"/>
<path d="M61.0205 55.333C63.8855 55.333 66.208 53.0105 66.208 50.1455C66.208 47.2805 63.8855 44.958 61.0205 44.958C58.1555 44.958 55.833 47.2805 55.833 50.1455C55.833 53.0105 58.1555 55.333 61.0205 55.333Z" fill="white"/>
</svg>`,
    url: "/centro-de-ayuda/asistencia-en-ruta",
  },
  {
    id: 2,
    nombre: "Robos",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
<path d="M31.8747 61.9788C33.8307 61.9788 35.4163 60.3932 35.4163 58.4372C35.4163 56.4812 33.8307 54.8955 31.8747 54.8955C29.9187 54.8955 28.333 56.4812 28.333 58.4372C28.333 60.3932 29.9187 61.9788 31.8747 61.9788Z" fill="white"/>
<path d="M53.1247 61.9788C55.0807 61.9788 56.6663 60.3932 56.6663 58.4372C56.6663 56.4812 55.0807 54.8955 53.1247 54.8955C51.1687 54.8955 49.583 56.4812 49.583 58.4372C49.583 60.3932 51.1687 61.9788 53.1247 61.9788Z" fill="white"/>
<path d="M61.0934 34.0003C61.0226 33.9295 60.9872 33.8587 60.9163 33.7524C59.5705 31.9107 57.658 31.8753 57.658 31.8753H27.3413C27.3413 31.8753 25.4288 31.9107 24.083 33.7878C24.0122 33.8587 23.9768 33.9295 23.9059 34.0003C23.658 34.3899 23.4101 34.8503 23.233 35.417C22.4538 37.7545 20.6122 43.2795 17.708 52.0274V75.0482C17.708 76.642 18.9476 77.917 20.4705 77.917H22.0288C23.5518 77.917 24.7913 76.642 24.7913 75.0482V70.8337H60.208V75.0482C60.208 76.642 61.4122 77.917 62.9705 77.917H64.5288C66.0518 77.917 67.2913 76.642 67.2913 75.0482V52.0274C64.3872 43.3149 62.5455 37.7545 61.7663 35.417C61.5893 34.8503 61.3413 34.3899 61.0934 34.0003ZM29.5018 38.9587H55.4976L56.3122 41.4024L57.8351 46.042H27.1643L29.5018 38.9587ZM60.208 63.7503H24.7913V53.1253H60.208V63.7503ZM38.3559 10.6253C37.6188 8.55577 36.2602 6.76451 34.4661 5.49659C32.672 4.22866 30.5299 3.546 28.333 3.54199C22.4538 3.54199 17.708 8.28783 17.708 14.167C17.708 20.0107 22.4538 24.792 28.333 24.792C32.9372 24.792 36.8684 21.817 38.3559 17.7087H56.6663V24.792H63.7497V17.7087H67.2913V10.6253H38.3559ZM28.333 17.7087C26.3851 17.7087 24.7913 16.1149 24.7913 14.167C24.7913 12.2191 26.3851 10.6253 28.333 10.6253C30.2809 10.6253 31.8747 12.2191 31.8747 14.167C31.8747 16.1149 30.2809 17.7087 28.333 17.7087Z" fill="white"/>
</svg>`,
    url: "/centro-de-ayuda/robos",
  },
  {
    id: 3,
    nombre: "Siniestros",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.",
    icono: `<svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 85 85" fill="none">
<g clip-path="url(#clip0_1778_54177)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.4997 6.37467C22.5489 6.37467 6.37472 22.5489 6.37472 42.4997L6.37472 42.5041C6.36218 50.4804 9.0023 58.2345 13.8796 64.5459C14.8364 65.7841 14.6083 67.5635 13.3701 68.5204C12.1319 69.4772 10.3525 69.2491 9.39571 68.0109C3.75022 60.7054 0.694048 51.7301 0.708056 42.4975C0.708057 42.4967 0.708058 42.496 0.708059 42.4952L3.54139 42.4997H0.708056C0.708056 42.4989 0.708056 42.4982 0.708056 42.4975C0.709241 19.4181 19.42 0.708008 42.4997 0.708008C65.5802 0.708008 84.2914 19.4192 84.2914 42.4997C84.2914 52.101 81.0512 60.9523 75.6049 68.0095C74.6488 69.2483 72.8696 69.4775 71.6308 68.5215C70.392 67.5655 70.1627 65.7862 71.1188 64.5474C75.8264 58.4473 78.6247 50.8051 78.6247 42.4997C78.6247 22.5489 62.4505 6.37467 42.4997 6.37467Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5 20.5417C30.3728 20.5417 20.5417 30.3727 20.5417 42.5L20.5417 42.5048C20.5344 46.7937 21.79 50.9898 24.1517 54.5699C25.0133 55.8761 24.653 57.6335 23.3468 58.4952C22.0406 59.3568 20.2832 58.9965 19.4215 57.6903C16.4476 53.1821 14.8664 47.8983 14.875 42.4976C14.8763 27.2418 27.2439 14.875 42.5 14.875C57.7569 14.875 70.125 27.2431 70.125 42.5C70.125 48.1055 68.4532 53.329 65.5792 57.6894C64.718 58.9959 62.9607 59.3569 61.6542 58.4958C60.3477 57.6346 59.9866 55.8774 60.8478 54.5708C63.1304 51.1077 64.4584 46.9634 64.4584 42.5C64.4584 30.3727 54.6273 20.5417 42.5 20.5417ZM14.875 42.4976C14.875 42.4968 14.875 42.496 14.875 42.4952L17.7084 42.5H14.875C14.875 42.4992 14.875 42.4984 14.875 42.4976Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.4963 51.1209C41.6028 50.0144 43.3967 50.0144 44.5032 51.1209L72.8366 79.4542C73.6469 80.2645 73.8893 81.4832 73.4507 82.542C73.0122 83.6007 71.9791 84.291 70.8331 84.291H14.1664C13.0204 84.291 11.9873 83.6007 11.5488 82.542C11.1102 81.4832 11.3526 80.2645 12.163 79.4542L40.4963 51.1209ZM21.0067 78.6243H63.9928L42.4998 57.1313L21.0067 78.6243Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1778_54177">
<rect width="85" height="85" fill="white"/>
</clipPath>
</defs>
</svg>`,
    url: "/centro-de-ayuda/siniestros",
  },
]);
const preguntaActiva = ref(null);

const toggle = (id) => {
  preguntaActiva.value = preguntaActiva.value === id ? null : id;
};

const activeItem = ref<string>("faq");

const setActive = (item: string) => {
  activeItem.value = item;
};

const verMas = (emergencia) => {
    console.log(emergencia)
    router.push({
        name: `/centro-de-ayuda/${emergencia.url}`
      });
};
</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
      <div class="titulo-pagina">Centro de ayuda</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      id="faq"
    >
      <nav class="navbar mt-10 mb-20">
        <ul>
          <li :class="{ active: activeItem === 'faq' }">
            <a href="#faq" @click="setActive('faq')">Preguntas frecuentes</a>
          </li>
          <li :class="{ active: activeItem === 'emergencias' }">
            <a href="#emergencias" @click="setActive('emergencias')"
              >Emergencias</a
            >
          </li>
          <li :class="{ active: activeItem === 'prepara-tu-viaje' }">
            <a href="#prepara-tu-viaje" @click="setActive('prepara-tu-viaje')"
              >Prepara tu viaje</a
            >
          </li>
        </ul>
      </nav>
      <div class="titulo-pagina mb-5">Preguntas frecuentes</div>
      <div class="d-flex flex-column justify-content-center gap-5">
        <div
          class="pregunta d-flex flex-column justify-content-between"
          v-for="pregunta in preguntas"
          :key="pregunta.id"
        >
          <div
            class="nombre-pregunta d-flex justify-content-between"
            @click="toggle(pregunta.id)"
          >
            {{ pregunta.nombrePregunta }}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M11.6667 20H8.33333V11.6667H0V8.33333H8.33333V0H11.6667V8.33333H20V11.6667H11.6667V20Z"
                fill="#144733"
              />
            </svg>
          </div>

          <div
            v-show="preguntaActiva === pregunta.id"
            class="accordion-content mt-4"
          >
            <p>{{ pregunta.respuesta }}</p>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary rounded-pill fw-bold mt-7 px-10"
        href="/centro-de-ayuda/preguntas-frecuentes"
      >
        Ver Todas
      </a>
    </div>

    <div class="contenedor-emergencias mt-20" id="emergencias">
      <div class="titulo-pagina mb-2">Emergencias</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
      <div class="row mt-5">
        <div
          v-for="(emergencia, i) in emergencias"
          :key="i"
          class="emergencias col m-3"
        >
          <div
            class="emergencias-icono d-flex justify-content-center align-items-center"
            v-html="emergencia.icono"
          ></div>

          <div class="emergencias-nombre mb-3 mt-5">
            {{ emergencia.nombre }}
          </div>
          <div class="emergencias-descripcion mb-3">
            {{ emergencia.descripcion }}
          </div>
          <a class="emergencias-ver-mas" :href="emergencia.url">
            Ver más
          </a>
        </div>
      </div>
    </div>

    <div class="contenedor-tarjeta-gris" id="prepara-tu-viaje">
      <div class="tarjeta-gris-titulo">Prepara tu viaje</div>
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
      <a class="tarjeta-caracteristica mt-10" href="/adicionales">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.2191 1.26473C22.4924 1.21267 22.7737 1.30046 22.9689 1.49876C23.1641 1.69706 23.2474 1.9797 23.191 2.25218L20.066 17.3564C20.0637 17.3675 20.0612 17.3786 20.0585 17.3896L19.25 17.1875C20.0585 17.3896 20.0585 17.3893 20.0585 17.3896L20.0581 17.3908L20.0578 17.3923L20.0569 17.3957L20.0546 17.4048L20.0473 17.4319C20.0413 17.4538 20.0329 17.4832 20.022 17.5191C20.0002 17.5908 19.9681 17.6892 19.9245 17.8056C19.8523 17.9982 19.7448 18.2496 19.5942 18.5145L22.5208 22.4167C22.7102 22.6692 22.7407 23.007 22.5995 23.2894C22.4584 23.5717 22.1698 23.75 21.8542 23.75H4.66667C4.39335 23.75 4.13741 23.616 3.98173 23.3913C3.82605 23.1667 3.79042 22.88 3.88639 22.6241L5.1116 19.3569C3.86685 18.8337 3.3125 17.7022 3.3125 16.6667C3.3125 15.6749 3.65469 14.9231 4.23377 14.3922C4.778 13.8934 5.46098 13.656 6.02705 13.5145C6.39352 13.4229 6.86082 13.3983 7.32561 13.4026C7.80681 13.4069 8.34867 13.4434 8.89426 13.5007C9.97795 13.6144 11.1359 13.8165 11.9269 14.0425C11.9268 14.0425 11.9269 14.0425 11.9269 14.0425C12.1033 14.0929 12.3125 14.1569 12.4962 14.2131C12.6218 14.2515 12.7355 14.2863 12.8187 14.3106C13.0772 14.3862 13.2649 14.4308 13.4185 14.4481C13.5638 14.4644 13.6507 14.4525 13.7124 14.4326C13.7711 14.4137 13.8559 14.3718 13.9732 14.2545C14.0708 14.157 14.0923 14.0904 14.1017 14.0361C14.1153 13.958 14.1125 13.8371 14.067 13.6194C14.0448 13.513 14.0161 13.3989 13.981 13.2633C13.9767 13.2469 13.9723 13.23 13.9679 13.2129C13.9372 13.0946 13.9026 12.9614 13.8709 12.8248C13.7974 12.5084 13.7292 12.1343 13.7292 11.7188C13.7292 10.2386 14.7613 9.305 15.6239 8.71846C16.0008 8.46216 16.3983 8.23725 16.7309 8.04906C16.7882 8.01668 16.8435 7.98538 16.8965 7.9552C17.1395 7.81671 17.3155 7.71044 17.4391 7.62576C17.4553 7.645 17.4703 7.66349 17.4844 7.68141C17.5136 7.71862 17.5341 7.74768 17.5481 7.76983C17.5622 7.79217 17.5665 7.80232 17.5662 7.80155C17.5647 7.79813 17.5384 7.73165 17.5566 7.63099C17.5734 7.53805 17.6147 7.4889 17.6191 7.48372C17.5791 7.52375 17.5204 7.57006 17.4391 7.62576C17.3856 7.56197 17.3203 7.48993 17.2396 7.40299C17.2183 7.38004 17.1957 7.35594 17.1722 7.33077C16.9843 7.12982 16.7329 6.86092 16.531 6.56484C16.2969 6.22148 16.0729 5.76458 16.0729 5.20835C16.0729 4.29617 16.6696 3.62484 17.2557 3.1783C17.8611 2.71703 18.6302 2.35776 19.344 2.08586C20.0674 1.81025 20.784 1.60591 21.3154 1.47097C21.5823 1.40318 21.8053 1.35219 21.9628 1.31791C22.0415 1.30076 22.1041 1.28776 22.1477 1.27891L22.1985 1.26872L22.2127 1.26595L22.2191 1.26473C22.2193 1.2647 22.2191 1.26473 22.375 2.08335L22.2191 1.26473ZM21.2926 3.20175C20.8794 3.31715 20.4065 3.46458 19.9373 3.64334C19.2838 3.89227 18.6858 4.18403 18.2658 4.50402C17.8265 4.83873 17.7396 5.07885 17.7396 5.20835C17.7396 5.30315 17.776 5.43219 17.9081 5.62594C18.0332 5.80951 18.1933 5.98139 18.3929 6.19583C18.4151 6.21964 18.4378 6.24397 18.4609 6.26891L18.4711 6.27992C18.6597 6.48293 18.9523 6.79797 19.1028 7.15616C19.1897 7.36302 19.2505 7.62889 19.1968 7.9269C19.1425 8.22785 18.9874 8.47235 18.7976 8.66219C18.5079 8.95192 18.0757 9.20151 17.7217 9.40323C17.6612 9.43768 17.6009 9.47187 17.5407 9.50598C17.2063 9.6954 16.8763 9.8823 16.561 10.0967C15.796 10.6169 15.3958 11.1156 15.3958 11.7188C15.3958 11.9543 15.4344 12.1895 15.4943 12.4477C15.5209 12.562 15.5497 12.673 15.5808 12.7929C15.5853 12.8103 15.5899 12.8279 15.5945 12.8457C15.6295 12.9809 15.6674 13.1296 15.6986 13.279C15.7599 13.5731 15.8105 13.936 15.744 14.3204C15.6733 14.7286 15.4813 15.1035 15.1518 15.433C14.8784 15.7063 14.5727 15.9063 14.2244 16.0187C13.8792 16.1301 13.543 16.1392 13.2325 16.1043C12.9304 16.0704 12.6298 15.9918 12.3512 15.9104C12.2017 15.8667 12.0798 15.8291 11.9586 15.7917C11.8106 15.746 11.6637 15.7007 11.4691 15.6451C10.8017 15.4544 9.74601 15.2659 8.72032 15.1582C8.21122 15.1048 7.72444 15.0729 7.31046 15.0692C6.88006 15.0652 6.58565 15.0928 6.43128 15.1314C5.95568 15.2503 5.597 15.4036 5.35998 15.6208C5.15781 15.8061 4.97917 16.096 4.97917 16.6667C4.97917 17.1742 5.26247 17.7589 6.13218 17.9329C6.29532 17.9655 6.50612 17.957 6.80684 17.8861C7.1135 17.8137 7.4482 17.6937 7.86747 17.5428L7.89108 17.5343C8.69032 17.2465 9.72206 16.875 10.9167 16.875C12.1251 16.875 13.432 17.3218 14.5143 17.7038C14.5961 17.7326 14.6766 17.7612 14.7561 17.7893C15.2271 17.9562 15.6579 18.1089 16.0597 18.2274C16.5346 18.3676 16.898 18.4375 17.1667 18.4375C17.5223 18.4375 17.8228 18.2112 18.0876 17.7875C18.2126 17.5875 18.3038 17.3809 18.3639 17.2204C18.3935 17.1416 18.4143 17.0772 18.4272 17.035C18.4324 17.0177 18.4363 17.0042 18.4388 16.9952L21.2926 3.20175ZM6.80724 19.5818L5.86917 22.0833H20.1875L18.4399 19.7532C18.0909 19.9628 17.6691 20.1042 17.1667 20.1042C16.6541 20.1042 16.106 19.9788 15.588 19.826C15.1395 19.6936 14.6603 19.5237 14.1924 19.3578C14.1144 19.3302 14.0368 19.3026 13.9596 19.2754C12.8284 18.8762 11.7916 18.5417 10.9167 18.5417C10.0397 18.5417 9.25712 18.8139 8.43201 19.1109L8.39352 19.1248C8.00959 19.263 7.59367 19.4128 7.18958 19.5082C7.06604 19.5373 6.93831 19.5628 6.80724 19.5818Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Extras y Adicionales</span>
      </a>
      <a class="tarjeta-caracteristica mt-10" href="/adicionales">
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

<style scoped>
.pregunta {
  width: 850px;
  padding: 20px 30px;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
}
.pregunta svg {
  cursor: pointer;
}
.nombre-pregunta {
  font-size: 16px;
}

.accordion-content {
  transition: 0.5s ease-in-out;
  font-size: 16px;
}

.navbar {
  border-radius: 20px;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar ul li a {
  color: #496251;
  text-decoration: none;
  padding: 10px 20px;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: 50px;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}

.navbar ul li a:hover,
.navbar ul li.active a {
  background-color: #090;
  color: white;
}

.contenedor-emergencias {
  background: #fff;
  padding: 76px 80px;
}

.emergencias {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.05);
  padding: 30px;
}
.emergencias-icono {
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  background: #090;
  border-radius: 50%;
  margin: auto;
}
.emergencias-nombre {
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 33px */
}
.emergencias-descripcion {
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 24px */
}

.emergencias-ver-mas {
  color: #496251;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
}

@media (max-width: 768px) {
    .pregunta{
        width: 100%;
    }
    .pregunta svg{
       margin-left: 50px;
    }
}
</style>
