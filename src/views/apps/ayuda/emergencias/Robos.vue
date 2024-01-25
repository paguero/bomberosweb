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
      <div class="titulo-pagina">Robos</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row">
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 1</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>

      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 2</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 6</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>
    </div>

    <div class="row">
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 3</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>

      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 5</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>
      <div class="tarjeta-paso col-md col-sm-12 m-2">
        <div class="tarjeta-paso-nombre mb-3">Paso 6</div>
        <div class="tarjeta-paso-descripcion">
          Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies
          et aliquam at donec vulputate.
        </div>
      </div>
    </div>

    <div class="mt-7 text-center">
      <a class="btn btn-primary rounded-pill px-10 fw-bold" href=""
        >Declarar Robo
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
        >
          <path
            d="M12.75 13.25H2.25V2.75H6V1.25H2.25C1.85218 1.25 1.47064 1.40804 1.18934 1.68934C0.908035 1.97064 0.75 2.35218 0.75 2.75V13.25C0.75 13.6478 0.908035 14.0294 1.18934 14.3107C1.47064 14.592 1.85218 14.75 2.25 14.75H12.75C13.1478 14.75 13.5294 14.592 13.8107 14.3107C14.092 14.0294 14.25 13.6478 14.25 13.25V9.5H12.75V13.25Z"
            fill="white"
          />
          <path
            d="M8.24992 1.25L10.7174 3.7175L6.41992 8.015L7.48492 9.08L11.7824 4.7825L14.2499 7.25V1.25H8.24992Z"
            fill="white"
          /></svg
      ></a>
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
        href="/centro-de-ayuda/asistencia-en-ruta"
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
              d="M22.1382 10.579L20.7132 6.30296C20.5064 5.68055 20.1088 5.13911 19.5768 4.75557C19.0448 4.37204 18.4055 4.16592 17.7496 4.16651H8.25169C7.59585 4.16592 6.9565 4.37204 6.42449 4.75557C5.89248 5.13911 5.49487 5.68055 5.28815 6.30296L3.86315 10.579C3.48462 10.7378 3.16136 11.0048 2.93382 11.3465C2.70629 11.6881 2.5846 12.0893 2.58398 12.4998V17.7082C2.58398 18.4925 3.02461 19.1686 3.66628 19.5238C3.65273 19.5925 3.62565 19.655 3.62565 19.7269V21.8748C3.62565 22.1511 3.7354 22.4161 3.93075 22.6114C4.1261 22.8068 4.39105 22.9165 4.66732 22.9165H5.70898C5.98525 22.9165 6.2502 22.8068 6.44555 22.6114C6.6409 22.4161 6.75065 22.1511 6.75065 21.8748V19.7915H19.2507V21.8748C19.2507 22.1511 19.3604 22.4161 19.5557 22.6114C19.7511 22.8068 20.0161 22.9165 20.2923 22.9165H21.334C21.6103 22.9165 21.8752 22.8068 22.0706 22.6114C22.2659 22.4161 22.3757 22.1511 22.3757 21.8748V19.7269C22.3757 19.655 22.3486 19.5915 22.335 19.5238C22.6615 19.3458 22.9342 19.0834 23.1245 18.764C23.3149 18.4446 23.416 18.08 23.4173 17.7082V12.4998C23.4173 11.6363 22.8882 10.8946 22.1382 10.579ZM4.66732 17.7082V12.4998H21.334L21.3361 17.7082H4.66732ZM8.25169 6.24984H17.7486C18.1975 6.24984 18.5954 6.53526 18.7371 6.96234L19.8892 10.4165H6.11211L7.26315 6.96234C7.33226 6.75483 7.46494 6.57434 7.64237 6.44646C7.8198 6.31858 8.03298 6.24979 8.25169 6.24984Z"
              fill="white"
            />
            <path
              d="M7.27148 16.6665C8.13443 16.6665 8.83398 15.9669 8.83398 15.104C8.83398 14.2411 8.13443 13.5415 7.27148 13.5415C6.40854 13.5415 5.70898 14.2411 5.70898 15.104C5.70898 15.9669 6.40854 16.6665 7.27148 16.6665Z"
              fill="white"
            />
            <path
              d="M18.7285 16.6665C19.5915 16.6665 20.291 15.9669 20.291 15.104C20.291 14.2411 19.5915 13.5415 18.7285 13.5415C17.8656 13.5415 17.166 14.2411 17.166 15.104C17.166 15.9669 17.8656 16.6665 18.7285 16.6665Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Asistencia en ruta</span>
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
