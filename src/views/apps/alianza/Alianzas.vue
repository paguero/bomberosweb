<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
const alianzas = ref([
  {
    id: 1,
    nombre: "Banco BICE",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.",
    tipoAlianza: "Bancos",
    imagen: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 2,
    nombre: "Banco BICE",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate",
    tipoAlianza: "Bancos",
    imagen: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 3,
    nombre: "Aseguradora 1",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate",
    tipoAlianza: "Seguros",
    imagen: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 4,
    nombre: "Aseguradora 2",
    descripcion:
      "Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate",
    tipoAlianza: "Seguros",
    imagen: "media/stock/1600x800/img-4.jpg",
  },
]);

const filtrosAlianzas = ref([
  {
    id: 1,
    nombre: "Bancos",
  },
  {
    id: 2,
    nombre: "Seguros",
  },
]);

const filtrarAlianzas = () => {};

const filtroSeleccionado = ref(null);

const alianzasFiltradas = computed(() => {
  if (filtroSeleccionado.value === null) {
    return alianzas.value;
  } else {
    return alianzas.value.filter(
      (alianza) => alianza.tipoAlianza === filtroSeleccionado.value
    );
  }
});

const filtrarTodo = () => {
  filtroSeleccionado.value = null;
};

const filtrarPorTipo = (tipo) => {
  filtroSeleccionado.value = tipo;
};

const obtenerCodigo = (alianza) => {
  console.log(alianza);
};
</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
      <div class="titulo-pagina">Alianzas</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row">
      <div class="filtro-alianzas col-md-2">
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
            Ver todos
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
            v-for="filtro in filtrosAlianzas"
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
      <div class="col-md-10 row">
        <div
          class="col-md-6 col-lg-4 alianzas p-5"
          v-for="alianza in alianzasFiltradas"
          :key="alianza.id"
        >
          <img class="alianza-imagen img-fluid" :src="alianza.imagen" alt="" />
          <div class="alianza-nombre mt-5">{{ alianza.nombre }}</div>
          <div class="alianza-descripcion mt-3">{{ alianza.descripcion }}</div>
          <div class="obtener-codigo-alienza mt-5" @click="obtenerCodigo(alienza)">
            Obtener Código
            <svg class="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
            >
              <path
                d="M12.75 13.25H2.25V2.75H6V1.25H2.25C1.85218 1.25 1.47064 1.40804 1.18934 1.68934C0.908035 1.97064 0.75 2.35218 0.75 2.75V13.25C0.75 13.6478 0.908035 14.0294 1.18934 14.3107C1.47064 14.592 1.85218 14.75 2.25 14.75H12.75C13.1478 14.75 13.5294 14.592 13.8107 14.3107C14.092 14.0294 14.25 13.6478 14.25 13.25V9.5H12.75V13.25Z"
                fill="#009900"
              />
              <path
                d="M8.24992 1.25L10.7174 3.7175L6.41992 8.015L7.48492 9.08L11.7824 4.7825L14.2499 7.25V1.25H8.24992Z"
                fill="#009900"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.alianza-imagen {
  border-radius: 20px;
}
.alianza-nombre {
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 27px */
}
.alianza-descripcion {
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 24px */
}
.obtener-codigo-alienza {
  color: #496251;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
  cursor: pointer;
}
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
</style>
