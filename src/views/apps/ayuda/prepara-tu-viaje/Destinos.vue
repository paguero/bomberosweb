<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
 const router = useRouter();
const ofertas = ref([
  {
    id: 1,
    fechaDesde: "01/01/2024",
    fechaHasta: "20/01/2024",
    precio: "$100.000",
    imagen: "/media/europcar/Recurso1.png",
    descripcion:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso",
  },
  {
    id: 2,
    fechaDesde: "01/01/2024",
    fechaHasta: "20/01/2024",
    precio: "$200.000",
    imagen: "/media/europcar/Recurso2.png",
    descripcion:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso",
  },
  {
    id: 3,
    fechaDesde: "01/01/2024",
    fechaHasta: "20/01/2024",
    precio: "$300.000",
    imagen: "/media/europcar/Recurso3.png",
    descripcion:
      "Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso",
  },
]);
const destinos = ref([
  {
    id: 1,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 2,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Sur",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 3,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Centro",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 4,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Autral",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 5,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 6,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 7,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 8,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 9,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
  {
    id: 10,
    nombre: "Arica nombre del destino",
    fecha: "03 mayo 2023",
    duracion: "3 min.",
    zona: "Zona Norte",
    imagen: "/media/europcar/Rectangle425.png",
  },
]);

const filtrosZonas = ref([
  {
    id: 1,
    nombre: "Zona Norte",
  },
  {
    id: 2,
    nombre: "Zona Sur",
  },
  {
    id: 3,
    nombre: "Zona Centro",
  },
  {
    id: 4,
    nombre: "Zona Austral",
  },
]);

const filtrarPreguntas = () => {};

const filtroSeleccionado = ref(null);

const destinosFiltradoss = computed(() => {
  if (filtroSeleccionado.value === null) {
    return destinos.value;
  } else {
    return destinos.value.filter(
      (destino) => destino.zona === filtroSeleccionado.value
    );
  }
});

const filtrarTodo = () => {
  filtroSeleccionado.value = null;
};

const filtrarPorTipos = (tipo) => {
  filtroSeleccionado.value = tipo;
};

const obtenerCodigo = (zona) => {
  console.log(zona);
};

const preguntaActiva = ref(null);

const toggle = (id) => {
  preguntaActiva.value = preguntaActiva.value === id ? null : id;
};

//Carrusel
const currentSlide = ref(0);
const carousel = ref(null);
const settings = ref({
  itemsToShow: 1,
  snapAlign: "center",
});
const breakpoints = ref({
  700: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 3,
    snapAlign: "center",
  },
});

const next = () => {
  carousel.value.next();
};

const prev = () => {
  carousel.value.prev();
};

const esPrimeraSlide = computed(() => currentSlide.value === 0);
const esUltimaSlide = computed(
  () => currentSlide.value === ofertas.value.length - 1
);

const paginaActual = ref(1);
const cantidadPaginas = ref(6); // Cambia esto según cuántos elementos quieres por página

const destinosFiltradosss = computed(() => {
  const indexInicio = (paginaActual.value - 1) * cantidadPaginas.value;
  return destinos.value.slice(indexInicio, indexInicio + cantidadPaginas.value);
});

const cambiarPagina = (pagina) => {
  if (pagina >= 1 && pagina <= totalPaginas.value) {
    paginaActual.value = pagina;
  }
};

const destinosFiltrados = computed(() => {
  if (filtroSeleccionado.value === null) {
    return destinos.value.slice(
      (paginaActual.value - 1) * cantidadPaginas.value,
      paginaActual.value * cantidadPaginas.value
    );
  } else {
    const filteredDestinos = destinos.value.filter(
      (destino) => destino.zona === filtroSeleccionado.value
    );
    return filteredDestinos.slice(
      (paginaActual.value - 1) * cantidadPaginas.value,
      paginaActual.value * cantidadPaginas.value
    );
  }
});

const totalPaginas = computed(() => {
  if (filtroSeleccionado.value === null) {
    return Math.ceil(destinos.value.length / cantidadPaginas.value);
  } else {
    const filteredDestinos = destinos.value.filter(
      (destino) => destino.zona === filtroSeleccionado.value
    );
    return Math.ceil(filteredDestinos.length / cantidadPaginas.value);
  }
});

const filtrarPorTipo = (tipo) => {
  filtroSeleccionado.value = tipo;
  paginaActual.value = 1; 
};


const irDestino = (destino) => {
     router.push({
        name: "destino",
        params: { id : destino.id },
      });
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
      <div class="titulo-pagina">Destinos</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>

    <div class="mb-12">
      <div class="sub-titulo-pagina mb-4">Ofertas destacadas</div>
    </div>
    <div class="mb-6 d-flex justify-content-end">
      <button
        @click="next"
        class="btn-carrusel btn-carrusel-next"
        :class="{ 'btn-carrusel-verde': esPrimeraSlide }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
        >
          <path
            d="M4.78319 0L5.58734 0.804146L2.17673 4.21476H17V5.35163H2.17673L5.58734 8.76224L4.78319 9.56638L0 4.78395L4.78319 0.00151572V0Z"
            fill=""
          />
        </svg>
      </button>
      <button
        @click="prev"
        class="btn-carrusel btn-carrusel-prev"
        :class="{ 'btn-carrusel-verde': esUltimaSlide }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="10"
          viewBox="0 0 17 10"
          fill="none"
        >
          <path
            d="M12.2168 0L11.4127 0.804146L14.8233 4.21476H0V5.35163H14.8233L11.4127 8.76224L12.2168 9.56638L17 4.78395L12.2168 0.00151572V0Z"
            fill=""
          />
        </svg>
      </button>
    </div>
    <div class="mb-20">
      <Carousel
        :autoplay="100000"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
        ref="carousel"
        v-model="currentSlide"
      >
        <Slide class="" v-for="(oferta, i) in ofertas" :key="i">
          <div class="card w-100 tarjeta-ofertas">
            <div class="card-body">
              <div class="d-flex justify-content-star align-items-center gap-2">
                <span class="">Precio desde</span>
                <span class="tarjeta-ofertas-titulo">
                  {{ oferta.precio }}
                </span>
                <span class="">/día</span>
              </div>

              <div
                class="d-flex justify-content-star tarjeta-ofertas-fecha mt-1"
              >
                <svg
                  class="me-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M10.8333 0C11.0374 2.69255e-05 11.2344 0.0749635 11.387 0.210596C11.5395 0.346229 11.637 0.533124 11.6608 0.735833L11.6667 0.833333V1.66667H13.3333C13.7538 1.66653 14.1588 1.82534 14.4671 2.11125C14.7754 2.39716 14.9643 2.78904 14.9958 3.20833L15 3.33333V13.3333C15.0001 13.7538 14.8413 14.1588 14.5554 14.4671C14.2695 14.7754 13.8776 14.9643 13.4583 14.9958L13.3333 15H1.66667C1.24619 15.0001 0.841195 14.8413 0.532877 14.5554C0.224559 14.2695 0.0357029 13.8776 0.00416685 13.4583L8.35567e-08 13.3333V3.33333C-0.000132983 2.91285 0.158672 2.50786 0.444581 2.19954C0.73049 1.89123 1.12237 1.70237 1.54167 1.67083L1.66667 1.66667H3.33333V0.833333C3.33357 0.620934 3.4149 0.41664 3.56071 0.262193C3.70651 0.107746 3.90579 0.0148042 4.11783 0.00235657C4.32986 -0.010091 4.53865 0.0588955 4.70153 0.195221C4.8644 0.331546 4.96908 0.52492 4.99417 0.735833L5 0.833333V1.66667H10V0.833333C10 0.61232 10.0878 0.400358 10.2441 0.244078C10.4004 0.0877973 10.6123 0 10.8333 0ZM13.3333 7.5H1.66667V13.3333H13.3333V7.5ZM13.3333 3.33333H1.66667V5.83333H13.3333V3.33333Z"
                    fill="#B0C9B8"
                  />
                </svg>
                <span class="card-text">{{ oferta.fechaDesde }}</span>
                <span class="mx-2">-</span>
                <span class="card-text">{{ oferta.fechaHasta }}</span>
              </div>

              <div class="">
                <img :src="oferta.imagen" class="imagen-oferta" alt="..." />
                <div class="tarjeta-ofertas-descripcion">
                  {{ oferta.descripcion }}
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <!-- 
      <template #addons>
        <Navigation />
        <Pagination />
      </template> -->
      </Carousel>
    </div>

    <div class="row">
      <div class="filtro-zonas col-md-2">
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
            v-for="filtro in filtrosZonas"
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
        <div class="col-md-6" v-for="(destino, i) in destinosFiltrados" :key="i" @click="irDestino(destino)">

          <div class="card tarjeta-destino mb-5 p-3">
            <div class="position-relative">
              <img
                :src="destino.imagen"
                class="tarjeta-destino-imagen"
              />
              <div class="tarjeta-destino-zona">{{ destino.zona }}</div>
            </div>

            <div class="card-body p-0 pt-5">
              <div class="d-flex justify-content-between">
                <div class="tarjeta-destino-fecha">{{ destino.fecha }}</div>
                <div class="tarjeta-destino-fecha">{{ destino.duracion }}</div>
              </div>

              <div class="tarjeta-destino-nombre mt-3">
                {{ destino.nombre }}
              </div>
            </div>
          </div>
        </div>

        <div class="mb-6 d-flex justify-content-end" v-if="destinosFiltrados.length > 0">
          <button
            @click="cambiarPagina(paginaActual - 1)"
            class="btn-paginador btn-paginador-next"
            :class="{ 'btn-paginador-verde': paginaActual === totalPaginas }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
            >
              <path
                d="M4.78319 0L5.58734 0.804146L2.17673 4.21476H17V5.35163H2.17673L5.58734 8.76224L4.78319 9.56638L0 4.78395L4.78319 0.00151572V0Z"
                fill=""
              />
            </svg>
          </button>
          <span class="btn-paginador-texto align-self-center mx-2"
            >{{ paginaActual }} / {{ totalPaginas }}</span
          >
          <button
            @click="cambiarPagina(paginaActual + 1)"
            class="btn-paginador btn-paginador-prev"
            :class="{ 'btn-paginador-verde': paginaActual === 1 }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
            >
              <path
                d="M12.2168 0L11.4127 0.804146L14.8233 4.21476H0V5.35163H14.8233L11.4127 8.76224L12.2168 9.56638L17 4.78395L12.2168 0.00151572V0Z"
                fill=""
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

     <div class="contenedor-club-beneficios mt-20">
      <div class="p-20 col-9 row club-beneficios">
        <div class="mb-7">
          <div class="titulo-pagina mb-4">Cómo pago</div>
          <div class="club-beneficios-descripcion-pagina col-5">
            Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
            Volutpat tortor lorem fusce lorem viverra morbi gravida ornare. Odio
            non volutpat enim nam. Gravida non id in sit laoreet sed quis
            ultricies.
          </div>

          <div class="d-flex flex-wrap gap-5 mt-7">
            <a href="" class="btn btn-primary rounded-pill px-10 fw-bold">
              Sé parte del club
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
                />
              </svg>
            </a>
            <a href=""
              class="btn btn-primary btn-oscuro rounded-pill px-10 fw-bold"
            >
              Ver más
            </a>
          </div>
        </div>
        
      </div>
      <img
          class="club-beneficios-imagen img-fluid"
          src="/media/europcar/img-club-beneficios.png"
          alt=""
        />

        <svg
          class="club-beneficios-linea"
          xmlns="http://www.w3.org/2000/svg"
          width="354"
          height="713"
          viewBox="0 0 354 713"
          fill="none"
        >
          <path
            d="M383.203 710.275C630.63 713.79 558.903 507.433 333.537 519.867C169.926 528.894 -0.820226 559.514 2.86929 449.626C5.79745 362.414 118.847 359.595 303.427 346.87C488.007 334.145 568.967 313.159 506.171 255.39C422.118 178.067 216.852 188.131 166.495 101.824C116.139 15.5166 395.47 -70.1166 665.957 101.794"
            stroke="#90C53E"
            stroke-width="4"
            stroke-linecap="square"
            stroke-linejoin="round"
            stroke-dasharray="10 30"
          />
        </svg>
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

.zona {
  padding: 20px 30px;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
}
.zona svg {
  cursor: pointer;
}
</style>
