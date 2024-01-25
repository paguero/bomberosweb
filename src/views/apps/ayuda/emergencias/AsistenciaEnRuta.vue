<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";

const verMas = (emergencia) => {
  console.log(emergencia);
};
</script>
<template>
  <main class="mt-15">
    <a href="/centro-de-ayuda/ayuda" class="btn-volver">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="10"
        viewBox="0 0 17 10"
        fill="none"
      >
        <path
          d="M4.78319 0.216797L5.58734 1.02094L2.17673 4.43155H17V5.56842H2.17673L5.58734 8.97903L4.78319 9.78318L0 5.00075L4.78319 0.218313V0.216797Z"
          fill="#496251"
        />
      </svg>
      <span>Volver</span>
    </a>
    <div class="mb-15">
      <div class="titulo-pagina">Asistencia en ruta</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row">
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mt-5" >Paso 1</div>
        <div class="tarjeta-paso-descripcion mt-4">
          Llama al
          <a href="tel:6009399000" class="mx-2 tarjeta-paso-numero"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="19"
              viewBox="0 0 24 19"
              fill="none"
            >
              <path
                d="M23.71 14.7398C20.66 11.8498 16.54 10.0698 12 10.0698C7.46 10.0698 3.34 11.8498 0.29 14.7398C0.11 14.9198 0 15.1698 0 15.4498C0 15.7298 0.11 15.9798 0.29 16.1598L2.77 18.6398C2.95 18.8198 3.2 18.9298 3.48 18.9298C3.75 18.9298 4 18.8198 4.18 18.6498C4.97 17.9098 5.87 17.2898 6.84 16.7998C7.17 16.6398 7.4 16.2998 7.4 15.8998V12.7998C8.85 12.3198 10.4 12.0698 12 12.0698C13.6 12.0698 15.15 12.3198 16.6 12.7898V15.8898C16.6 16.2798 16.83 16.6298 17.16 16.7898C18.14 17.2798 19.03 17.9098 19.82 18.6398C20 18.8198 20.25 18.9198 20.52 18.9198C20.8 18.9198 21.05 18.8098 21.23 18.6298L23.71 16.1498C23.89 15.9698 24 15.7198 24 15.4398C24 15.1773 23.8957 14.9255 23.71 14.7398ZM21.16 4.32982L19.75 2.91982L16.19 6.46982L17.6 7.87982C17.6 7.87982 21.05 4.35982 21.16 4.32982ZM13 0.0698242H11V5.06982H13V0.0698242ZM6.4 7.87982L7.81 6.46982L4.26 2.90982L2.84 4.32982C2.95 4.35982 6.4 7.87982 6.4 7.87982Z"
                fill="#009900"
              />
            </svg>
            600 939 9000</a
          >
        </div>
      </div>

      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mt-5">Paso 2</div>
        <div class="tarjeta-paso-descripcion mt-4">
          Marca la <strong>opción 1</strong> para español
        </div>
      </div>
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mt-5">Paso 3</div>
        <div class="tarjeta-paso-descripcion mt-4">
          Luego marca la opción 5  <strong>Asistencia en Ruta</strong>
        </div>
      </div>
    </div>

     <div class="row">
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 4</div>
        <div class="tarjeta-paso-descripcion">
        Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.
        </div>
      </div>

      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 5</div>
        <div class="tarjeta-paso-descripcion">
         Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.
        </div>
      </div>
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 6</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.
        </div>
      </div>
    </div>
    <div class="contenedor-tarjeta-gris" id="prepara-tu-viaje">
      <div class="tarjeta-gris-titulo">Debes saber</div>
      <div class="tarjeta-gris-descripcion">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>

    <div class="d-flex justify-content-center gap-6 flex-wrap">
      <a
        class="tarjeta-caracteristica mt-10"
        href="/centro-de-ayuda/preguntas-frecuentes"
      >
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M13.0007 22.9168C11.5597 22.9168 10.2055 22.6432 8.93815 22.096C7.67079 21.5488 6.56836 20.8068 5.63086 19.87C4.69336 18.9325 3.95135 17.83 3.40482 16.5627C2.85829 15.2953 2.58468 13.9411 2.58398 12.5002C2.58398 11.0592 2.8576 9.70502 3.40482 8.43766C3.95204 7.1703 4.69405 6.06787 5.63086 5.13037C6.56836 4.19287 7.67079 3.45086 8.93815 2.90433C10.2055 2.3578 11.5597 2.08419 13.0007 2.0835C15.5354 2.0835 17.7534 2.87794 19.6548 4.46683C21.5562 6.05572 22.7409 8.04773 23.209 10.4429H21.0736C20.7437 9.17551 20.1489 8.04252 19.2892 7.04391C18.4295 6.0453 17.375 5.29461 16.1257 4.79183V5.2085C16.1257 5.78141 15.9215 6.27204 15.5132 6.68037C15.1048 7.08871 14.6145 7.29252 14.0423 7.29183H11.959V9.37516C11.959 9.6703 11.859 9.91787 11.659 10.1179C11.459 10.3179 11.2118 10.4175 10.9173 10.4168H8.83398V12.5002H10.9173V15.6252H9.87565L4.87565 10.6252C4.82357 10.9377 4.77565 11.2502 4.7319 11.5627C4.68815 11.8752 4.66662 12.1877 4.66732 12.5002C4.66732 14.7745 5.46593 16.7276 7.06315 18.3595C8.66037 19.9915 10.6395 20.8161 13.0007 20.8335V22.9168ZM22.4798 22.396L19.1465 19.0627C18.7819 19.271 18.3913 19.4446 17.9746 19.5835C17.5579 19.7224 17.1152 19.7918 16.6465 19.7918C15.3444 19.7918 14.2378 19.3359 13.3267 18.4241C12.4156 17.5123 11.9597 16.4057 11.959 15.1043C11.959 13.8022 12.4149 12.6953 13.3267 11.7835C14.2385 10.8717 15.3451 10.4161 16.6465 10.4168C17.9486 10.4168 19.0555 10.8727 19.9673 11.7845C20.8791 12.6963 21.3347 13.8029 21.334 15.1043C21.334 15.5731 21.2645 16.0158 21.1257 16.4325C20.9868 16.8491 20.8132 17.2397 20.6048 17.6043L23.9382 20.9377L22.4798 22.396ZM16.6465 17.7085C17.3757 17.7085 17.992 17.4568 18.4954 16.9533C18.9989 16.4498 19.2507 15.8335 19.2507 15.1043C19.2507 14.3752 18.9989 13.7588 18.4954 13.2554C17.992 12.7519 17.3757 12.5002 16.6465 12.5002C15.9173 12.5002 15.301 12.7519 14.7975 13.2554C14.2941 13.7588 14.0423 14.3752 14.0423 15.1043C14.0423 15.8335 14.2941 16.4498 14.7975 16.9533C15.301 17.4568 15.9173 17.7085 16.6465 17.7085Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Preguntas Frecuentes</span>
      </a>
      <a
        class="tarjeta-caracteristica mt-10"
        href="/centro-de-ayuda/siniestros"
      >
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <path
              d="M9.87565 18.2293C10.4509 18.2293 10.9173 17.763 10.9173 17.1877C10.9173 16.6124 10.4509 16.146 9.87565 16.146C9.30035 16.146 8.83398 16.6124 8.83398 17.1877C8.83398 17.763 9.30035 18.2293 9.87565 18.2293Z"
              fill="white"
            />
            <path
              d="M16.1257 18.2293C16.7009 18.2293 17.1673 17.763 17.1673 17.1877C17.1673 16.6124 16.7009 16.146 16.1257 16.146C15.5504 16.146 15.084 16.6124 15.084 17.1877C15.084 17.763 15.5504 18.2293 16.1257 18.2293Z"
              fill="white"
            />
            <path
              d="M18.4694 9.99984C18.4486 9.979 18.4382 9.95817 18.4173 9.92692C18.0215 9.38525 17.459 9.37484 17.459 9.37484H8.54232C8.54232 9.37484 7.97982 9.38525 7.58398 9.93734C7.56315 9.95817 7.55273 9.979 7.5319 9.99984C7.45898 10.1144 7.38607 10.2498 7.33398 10.4165C7.10482 11.104 6.56315 12.729 5.70898 15.3019V22.0728C5.70898 22.5415 6.07357 22.9165 6.52148 22.9165H6.97982C7.42773 22.9165 7.79232 22.5415 7.79232 22.0728V20.8332H18.209V22.0728C18.209 22.5415 18.5632 22.9165 19.0215 22.9165H19.4798C19.9277 22.9165 20.2923 22.5415 20.2923 22.0728V15.3019C19.4382 12.7394 18.8965 11.104 18.6673 10.4165C18.6152 10.2498 18.5423 10.1144 18.4694 9.99984ZM9.17773 11.4582H16.8236L17.0632 12.1769L17.5111 13.5415H8.49023L9.17773 11.4582ZM18.209 18.7498H7.79232V15.6248H18.209V18.7498ZM11.7819 3.12484C11.5651 2.51614 11.1655 1.9893 10.6378 1.61638C10.1101 1.24347 9.48014 1.04268 8.83398 1.0415C7.10482 1.0415 5.70898 2.43734 5.70898 4.1665C5.70898 5.88525 7.10482 7.2915 8.83398 7.2915C10.1882 7.2915 11.3444 6.4165 11.7819 5.20817H17.1673V7.2915H19.2507V5.20817H20.2923V3.12484H11.7819ZM8.83398 5.20817C8.26107 5.20817 7.79232 4.73942 7.79232 4.1665C7.79232 3.59359 8.26107 3.12484 8.83398 3.12484C9.4069 3.12484 9.87565 3.59359 9.87565 4.1665C9.87565 4.73942 9.4069 5.20817 8.83398 5.20817Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Siniestros</span>
      </a>

      <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/robos">
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
          >
            <g clip-path="url(#clip0_3198_16322)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0007 1.87516C7.13278 1.87516 2.37567 6.63228 2.37567 12.5002L2.37566 12.5015C2.37198 14.8475 3.14848 17.1281 4.58297 18.9844C4.86439 19.3485 4.79731 19.8719 4.43314 20.1533C4.06897 20.4347 3.54561 20.3676 3.26419 20.0035C1.60375 17.8548 0.704878 15.215 0.708998 12.4995C0.708999 12.4993 0.708999 12.4991 0.709 12.4989L1.54233 12.5002H0.708998C0.708998 12.4999 0.708998 12.4997 0.708998 12.4995C0.709347 5.71145 6.21252 0.208496 13.0007 0.208496C19.789 0.208496 25.2923 5.7118 25.2923 12.5002C25.2923 15.3241 24.3393 17.9274 22.7375 20.003C22.4563 20.3674 21.933 20.4348 21.5686 20.1536C21.2043 19.8724 21.1368 19.3491 21.418 18.9848C22.8026 17.1906 23.6257 14.9429 23.6257 12.5002C23.6257 6.63228 18.8686 1.87516 13.0007 1.87516Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13 6.04167C9.43316 6.04167 6.54168 8.93315 6.54168 12.5L6.54168 12.5014C6.53954 13.7629 6.90881 14.997 7.60343 16.05C7.85687 16.4341 7.75088 16.951 7.3667 17.2045C6.98253 17.4579 6.46565 17.3519 6.21221 16.9677C5.33752 15.6418 4.87246 14.0877 4.87501 12.4993C4.87539 8.0123 8.51292 4.375 13 4.375C17.4873 4.375 21.125 8.01268 21.125 12.5C21.125 14.1487 20.6333 15.685 19.788 16.9675C19.5347 17.3517 19.0179 17.4579 18.6336 17.2046C18.2493 16.9514 18.1431 16.4345 18.3964 16.0502C19.0678 15.0317 19.4583 13.8128 19.4583 12.5C19.4583 8.93315 16.5669 6.04167 13 6.04167ZM4.87501 12.4993C4.87501 12.4991 4.87501 12.4988 4.87501 12.4986L5.70834 12.5H4.87501C4.87501 12.4998 4.87501 12.4995 4.87501 12.4993Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4114 15.0361C12.7369 14.7106 13.2645 14.7106 13.5899 15.0361L21.9233 23.3694C22.1616 23.6077 22.2329 23.9662 22.1039 24.2776C21.9749 24.589 21.6711 24.792 21.334 24.792H4.66734C4.33029 24.792 4.02643 24.589 3.89744 24.2776C3.76846 23.9662 3.83975 23.6077 4.07809 23.3694L12.4114 15.0361ZM6.67919 23.1253H19.3222L13.0007 16.8038L6.67919 23.1253Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_3198_16322">
                <rect
                  width="25"
                  height="25"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Robos</span>
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
</style>
