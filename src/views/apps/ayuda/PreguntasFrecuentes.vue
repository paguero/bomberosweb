<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
const preguntas = ref([
  {
    id: 1,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    tipoPregunta: "Coberturas y Seguros",
  },
  {
    id: 2,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    tipoPregunta: "Coberturas y Seguros",
  },
  {
    id: 3,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    tipoPregunta: "Garantías / Medios de Pago",
  },
  {
    id: 4,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    tipoPregunta: "Siniestros",
  },
  {
    id: 5,
    nombrePregunta:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso.",
    respuesta:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    tipoPregunta: "Cruce de frontera",
  },
]);

const filtrosPreguntas = ref([
  {
    id: 1,
    nombre: "Coberturas y Seguros",
  },
  {
    id: 2,
    nombre: "Garantías / Medios de Pago",
  },
  {
    id: 3,
    nombre: "Siniestros",
  },
  {
    id: 4,
    nombre: "Cruce de frontera",
  },
]);

const filtrarPreguntas = () => {};

const filtroSeleccionado = ref(null);

const preguntasFiltradas = computed(() => {
  if (filtroSeleccionado.value === null) {
    return preguntas.value;
  } else {
    return preguntas.value.filter(
      (pregunta) => pregunta.tipoPregunta === filtroSeleccionado.value
    );
  }
});

const filtrarTodo = () => {
  filtroSeleccionado.value = null;
};

const filtrarPorTipo = (tipo) => {
  filtroSeleccionado.value = tipo;
};

const obtenerCodigo = (pregunta) => {
  console.log(pregunta);
};

const preguntaActiva = ref(null);

const toggle = (id) => {
  preguntaActiva.value = preguntaActiva.value === id ? null : id;
};
</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
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
      <div class="titulo-pagina">Preguntas frecuentes</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row">
      <div class="filtro-preguntas col-md-2">
        <div class="titulo-filtro mb-4 d-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M18.3327 2.5H1.66602L8.33268 10.3833V15.8333L11.666 17.5V10.3833L18.3327 2.5Z"
              stroke="#009900"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="mx-2">Filtrar por</span>
        </div>
        <div class="filtros-alienzas">
          <div
            class="filtro-alienza d-flex justify-content-between align-items-center"
            @click="filtrarTodo"
            :class="{ filtroActivo: filtroSeleccionado === null }"
          >
            Ver todas
            <svg
              v-if="filtroSeleccionado === null"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
            >
              <path
                d="M12.2168 0.216797L11.4127 1.02094L14.8233 4.43155H0V5.56842H14.8233L11.4127 8.97903L12.2168 9.78318L17 5.00075L12.2168 0.218313V0.216797Z"
                fill="#144733"
              />
            </svg>
          </div>
          <div
            class="filtro-alienza d-flex justify-content-between align-items-center"
            v-for="filtro in filtrosPreguntas"
            :key="filtro.id"
            @click="filtrarPorTipo(filtro.nombre)"
            :class="{ filtroActivo: filtroSeleccionado === filtro.nombre }"
          >
            {{ filtro.nombre }}
            <svg
              v-if="filtroSeleccionado === filtro.nombre"
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
            >
              <path
                d="M12.2168 0.216797L11.4127 1.02094L14.8233 4.43155H0V5.56842H14.8233L11.4127 8.97903L12.2168 9.78318L17 5.00075L12.2168 0.218313V0.216797Z"
                fill="#144733"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="">
          <div class="d-flex flex-column justify-content-center gap-5">
            <div
              class="pregunta d-flex flex-column justify-content-between"
              v-for="pregunta in preguntasFiltradas"
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
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.titulo-filtro {
  color: #090;

  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%;
}
.filtro-alienza {
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 100%;
}
.filtroActivo {
  transition: all 0.3s ease-in-out;
  border-radius: 20px;
  background: #090;
  color: #fff;
}

.pregunta {
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
</style>
