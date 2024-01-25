<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";

//  onMounted(() => {
//   packSeleccionado.value = packSeguros.value[0];
//   nextTick(() => {
//     packSeleccionado.value = packSeguros.value[0];
//   });
// });
const packSeguros = ref([
  {
    id: 1,
    nombre: "Pack Basic",
    subtitulo: "Desde $7.735 /día",
    descripcion:
      "Dolor aliquam hendrerit magna urna pretium orci. Eleifend tincidunt neque nibh eros fermentum platea. Non aliquet fringilla non vitae cras in mollis quis. Sed in molestie blandit nibh. Odio orci tellus massa quis ut varius sodales purus. Sem diam semper quis tristique sed nulla consequat. Nulla sit massa sit non orci aliquam.",
    rating: 1,
  },
  {
    id: 2,
    nombre: "Pack Medium",
    subtitulo: "Desde $7.735 /día",
    descripcion:
      "Dolor aliquam hendrerit magna urna pretium orci. Eleifend tincidunt neque nibh eros fermentum platea. Non aliquet fringilla non vitae cras in mollis quis. Sed in molestie blandit nibh. Odio orci tellus massa quis ut varius sodales purus. Sem diam semper quis tristique sed nulla consequat. Nulla sit massa sit non orci aliquam.",
    rating: 2,
  },
  {
    id: 3,
    nombre: "Pack Premium",
    subtitulo: "Desde $22.000 /día",
    descripcion:
      "Dolor aliquam hendrerit magna urna pretium orci. Eleifend tincidunt neque nibh eros fermentum platea. Non aliquet fringilla non vitae cras in mollis quis. Sed in molestie blandit nibh. Odio orci tellus massa quis ut varius sodales purus. Sem diam semper quis tristique sed nulla consequat. Nulla sit massa sit non orci aliquam.",
    rating: 3,
  },
]);

const coberturas = ref([
  {
    id: 1,
    nombre: "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
    descripcion: "Deducible entre 5 y 10 UF + IVA",
    pack: "Pack Basic",
  },
  {
    id: 2,
    nombre: "Asistencia en ruta",
    descripcion:
      "Servicio de grúa insitu que considera carga batería, cambio neumático, apertura vehículo cerrado. Excluye rescate por mal uso Chile o Argentina",
    pack: "Pack Basic",
  },
  {
    id: 3,
    nombre: "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
    descripcion: "Deducible entre 5 y 10 UF + IVA",
    pack: "Pack Basic",
  },
  {
    id: 4,
    nombre: "Asistencia en ruta",
    descripcion:
      "Servicio de grúa insitu que considera carga batería, cambio neumático, apertura vehículo cerrado. Excluye rescate por mal uso Chile o Argentina",
    pack: "Pack Basic",
  },
  {
    id: 5,
    nombre: "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
    descripcion: "Deducible entre 5 y 10 UF + IVA",
    pack: "Pack Medium",
  },
  {
    id: 6,
    nombre: "Asistencia en ruta",
    descripcion:
      "Servicio de grúa insitu que considera carga batería, cambio neumático, apertura vehículo cerrado. Excluye rescate por mal uso Chile o Argentina",
    pack: "Pack Medium",
  },
  {
    id: 7,
    nombre: "Asistencia en ruta",
    descripcion:
      "Servicio de grúa insitu que considera carga batería, cambio neumático, apertura vehículo cerrado. Excluye rescate por mal uso Chile o Argentina",
    pack: "Pack Premium",
  },
  {
    id: 8,
    nombre: "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
    descripcion: "Deducible entre 5 y 10 UF + IVA",
    pack: "Pack Premium",
  },
  {
    id: 9,
    nombre: "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
    descripcion: "Deducible entre 5 y 10 UF + IVA",
    pack: "Pack Premium",
  },
  {
    id: 10,
    nombre: "Asistencia en ruta",
    descripcion:
      "Servicio de grúa insitu que considera carga batería, cambio neumático, apertura vehículo cerrado. Excluye rescate por mal uso Chile o Argentina",
    pack: "Pack Premium",
  },
]);

const packSeleccionado = ref<{}>(packSeguros.value[0]);

const seleccionarPack = (item) => {
  packSeleccionado.value = item;
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
      <div class="titulo-pagina">Protección</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center">
      <nav class="navbar mt-6">
        <ul>
          <li
            :class="{ active: packSeleccionado.id === pack.id }"
            v-for="(pack, i) in packSeguros"
            :key="i"
          >
            <a href="javascript:void(0)" @click="seleccionarPack(pack)"
              >{{ pack.nombre }}
              <svg
                class="mx-1"
                v-for="(rating, i) in pack.rating"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M15.2 5.28193L10.4911 4.59758L8.38613 0.330127C8.32864 0.213287 8.23405 0.118702 8.11721 0.0612089C7.82419 -0.0834504 7.4681 0.037099 7.32159 0.330127L5.21661 4.59758L0.507762 5.28193C0.37794 5.30047 0.259245 5.36167 0.168369 5.45441C0.0585056 5.56733 -0.00203433 5.71924 5.21996e-05 5.87678C0.00213873 6.03431 0.066681 6.18457 0.179497 6.29454L3.58641 9.61614L2.78151 14.3064C2.76263 14.4156 2.77471 14.5278 2.81636 14.6304C2.85802 14.733 2.92758 14.8218 3.01717 14.8869C3.10676 14.952 3.21279 14.9906 3.32324 14.9985C3.43369 15.0064 3.54413 14.9831 3.64205 14.9314L7.85386 12.717L12.0657 14.9314C12.1807 14.9926 12.3142 15.013 12.4422 14.9908C12.7649 14.9352 12.9818 14.6291 12.9262 14.3064L12.1213 9.61614L15.5282 6.29454C15.621 6.20367 15.6822 6.08497 15.7007 5.95515C15.7508 5.63059 15.5245 5.33015 15.2 5.28193Z"
                  fill="#FFDC00"
                /></svg
            ></a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="p-20 row" v-if="packSeleccionado != null">
      <div class="mb-7">
        <div class="sub-titulo-pagina mb-4">
          {{ packSeleccionado.nombre }}
          <svg
            class="mx-1"
            v-for="(rating, i) in packSeleccionado.rating"
            :key="i"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M15.2 5.28193L10.4911 4.59758L8.38613 0.330127C8.32864 0.213287 8.23405 0.118702 8.11721 0.0612089C7.82419 -0.0834504 7.4681 0.037099 7.32159 0.330127L5.21661 4.59758L0.507762 5.28193C0.37794 5.30047 0.259245 5.36167 0.168369 5.45441C0.0585056 5.56733 -0.00203433 5.71924 5.21996e-05 5.87678C0.00213873 6.03431 0.066681 6.18457 0.179497 6.29454L3.58641 9.61614L2.78151 14.3064C2.76263 14.4156 2.77471 14.5278 2.81636 14.6304C2.85802 14.733 2.92758 14.8218 3.01717 14.8869C3.10676 14.952 3.21279 14.9906 3.32324 14.9985C3.43369 15.0064 3.54413 14.9831 3.64205 14.9314L7.85386 12.717L12.0657 14.9314C12.1807 14.9926 12.3142 15.013 12.4422 14.9908C12.7649 14.9352 12.9818 14.6291 12.9262 14.3064L12.1213 9.61614L15.5282 6.29454C15.621 6.20367 15.6822 6.08497 15.7007 5.95515C15.7508 5.63059 15.5245 5.33015 15.2 5.28193Z"
              fill="#FFDC00"
            />
          </svg>
        </div>
        <div class="cobertura-precio mb-4">
          {{ packSeleccionado.subtitulo }}
        </div>
        <div class="descripcion-pagina w-md-50">
          {{ packSeleccionado.descripcion }}
        </div>
      </div>

      <div class="row">
        <div
          class="col-md-6 col-lg-3 d-flex p-3"
          v-for="(cobertura, i) in coberturas"
          :key="i"
        >
          <div
            class="tarjeta-cobertura"
            :class="
              cobertura.pack !== packSeleccionado.nombre
                ? 'tarjeta-cobertura-deshabilitada'
                : ''
            "
          >
            <div class="tarjeta-cobertura-nombre mt-5">
              <svg
                v-if="cobertura.pack === packSeleccionado.nombre"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M5.175 13.4749L0 8.2999L2.35833 5.94157L5.175 8.76657L13.4083 0.524902L15.7667 2.88324L5.175 13.4749Z"
                  fill="#009900"
                />
              </svg>

              <svg
                v-if="cobertura.pack !== packSeleccionado.nombre"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M12 1.20805L7.20805 6L12 10.7919L10.7919 12L6 7.20805L1.20805 12L0 10.7919L4.79195 6L0 1.20805L1.20805 0L6 4.79195L10.7919 0L12 1.20805Z"
                  fill="#A9B0AB"
                />
              </svg>

              <span class="ms-2">{{ cobertura.nombre }}</span>
            </div>
            <div class="tarjeta-cobertura-descripcion mt-3">
              {{ cobertura.descripcion }}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contenedor-tarjeta-gris mt-10">
      <div class="tarjeta-gris-titulo">Debes saber</div>
      <div class="tarjeta-gris-descripcion">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>

    <div class="d-flex justify-content-center gap-6 flex-wrap mb-20">
      <a
        class="tarjeta-caracteristica mt-10"
        href="/centro-de-ayuda/mi-primer-arriendo"
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
        <span class="tarjeta-caracteristica-texto">Mi primer viaje</span>
      </a>
      <a
        class="tarjeta-caracteristica mt-10"
        href="/centro-de-ayuda/destinos"
      >
        <span class="tarjeta-caracteristica-icono"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13.1568 23.4701C11.7158 23.472 10.3613 23.2001 9.09321 22.6546C7.82514 22.109 6.72174 21.3684 5.78301 20.4329C4.84429 19.4966 4.10083 18.3951 3.55265 17.1285C3.00447 15.8618 2.72909 14.508 2.72651 13.067C2.72462 11.6261 2.99646 10.2716 3.54203 9.00348C4.08759 7.7354 4.82817 6.632 5.76375 5.69328C6.70002 4.75456 7.80148 4.0111 9.06812 3.46292C10.3348 2.91473 11.6886 2.63935 13.1295 2.63677C15.6643 2.63346 17.8834 3.42501 19.7868 5.01141C21.6903 6.59781 22.8776 8.58827 23.3488 10.9828L21.2134 10.9856C20.8819 9.71866 20.2856 8.58645 19.4246 7.58897C18.5635 6.59148 17.508 5.84216 16.2581 5.34102L16.2586 5.75769C16.2594 6.3306 16.0559 6.82149 15.6481 7.23036C15.2403 7.63923 14.7502 7.84369 14.178 7.84374L12.0947 7.84646L12.0974 9.9298C12.0978 10.2249 11.9981 10.4726 11.7984 10.6729C11.5986 10.8732 11.3516 10.9731 11.0571 10.9728L8.97378 10.9755L8.9765 13.0589L11.0598 13.0562L11.0639 16.1812L10.0223 16.1825L5.01572 11.1891C4.96405 11.5016 4.91654 11.8142 4.8732 12.1267C4.82985 12.4393 4.80874 12.7518 4.80984 13.0643C4.81281 15.3386 5.61398 17.2907 7.21333 18.9206C8.81268 20.5504 10.7929 21.3725 13.1541 21.3868L13.1568 23.4701ZM22.6353 22.9369L19.2976 19.6079C18.9333 19.8167 18.5429 19.9908 18.1264 20.1303C17.7099 20.2697 17.2673 20.3397 16.7985 20.3403C15.4964 20.342 14.3893 19.8876 13.4769 18.977C12.5646 18.0663 12.1073 16.9603 12.1049 15.659C12.1032 14.3569 12.5577 13.2493 13.4683 12.3363C14.3789 11.4233 15.4849 10.9663 16.7863 10.9653C18.0884 10.9636 19.1959 11.4181 20.1089 12.3287C21.0219 13.2393 21.4789 14.3453 21.4799 15.6467C21.4805 16.1155 21.4116 16.5583 21.2733 16.9751C21.135 17.3919 20.9619 17.7828 20.754 18.1477L24.0917 21.4766L22.6353 22.9369ZM16.7958 18.257C17.525 18.256 18.141 18.0035 18.6438 17.4994C19.1466 16.9952 19.3975 16.3786 19.3966 15.6494C19.3956 14.9203 19.1431 14.3043 18.6389 13.8015C18.1348 13.2986 17.5182 13.0477 16.789 13.0487C16.0598 13.0496 15.4438 13.3022 14.941 13.8063C14.4382 14.3104 14.1873 14.9271 14.1882 15.6562C14.1892 16.3854 14.4417 17.0014 14.9459 17.5042C15.45 18.007 16.0666 18.2579 16.7958 18.257Z"
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
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M19.3972 15.7386C19.4008 18.4469 18.1539 20.8444 16.1767 22.3053L15.6551 21.7852L13.4648 19.6005L14.9212 18.1403L16.1728 19.3887C16.6927 18.6588 17.1082 17.7208 17.2111 16.7831L15.2319 16.7857L15.2292 14.7024L17.2084 14.6998C16.9988 13.7626 16.6852 12.9297 16.1633 12.097L14.9149 13.3486L13.4547 11.8922L14.7031 10.6406C13.9732 10.1207 13.0352 9.70526 12.0976 9.60232L12.1001 11.5815L10.0168 11.5842L10.0142 9.60505C9.07699 9.8146 8.24407 10.1282 7.41142 10.6501L10.5405 13.771C10.7488 13.7708 10.8529 13.6665 11.0612 13.6662C11.6137 13.6655 12.1439 13.8843 12.5351 14.2744C12.9263 14.6646 13.1465 15.1943 13.1472 15.7468C13.148 16.2993 12.9292 16.8295 12.539 17.2207C12.1488 17.6119 11.6192 17.8321 11.0666 17.8328C9.91039 17.8344 8.9821 16.9085 8.98059 15.7522C8.98031 15.5439 8.98018 15.4397 9.08407 15.2313L5.95499 12.1104C5.43511 12.8402 5.01967 13.7782 4.91673 14.7159L6.89589 14.7133L6.89862 16.7966L4.91945 16.7992C5.12901 17.7364 5.4426 18.5694 5.96452 19.402L7.21289 18.1504L8.67312 19.6068L5.96833 22.3187C3.98726 20.8629 2.73413 18.4687 2.73059 15.7604C2.72457 11.1562 6.44886 7.4222 11.053 7.41618C15.6572 7.41017 19.3912 11.1345 19.3972 15.7386ZM24.592 5.31515C24.5897 3.58599 23.192 2.19198 21.4629 2.19424C19.7337 2.1965 18.3397 3.59416 18.342 5.32332C18.3437 6.67749 19.2202 7.82218 20.4291 8.2581L20.4335 11.5706L22.5168 11.5679L22.5125 8.25537C23.7202 7.81629 24.5937 6.66932 24.592 5.31515ZM21.4683 6.3609C20.8954 6.36165 20.426 5.89351 20.4253 5.3206C20.4245 4.74768 20.8927 4.27832 21.4656 4.27757C22.0385 4.27682 22.5079 4.74496 22.5086 5.31788C22.5094 5.89079 22.0412 6.36015 21.4683 6.3609Z"
              fill="white"
            /></svg
        ></span>
        <span class="tarjeta-caracteristica-texto">Tips de viajes</span>
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
  padding: 11px 20px;
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
