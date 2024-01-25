<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { useRouter } from "vue-router";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
 const router = useRouter();

</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
      <a href="/centro-de-ayuda/destinos" class="btn-volver">
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
