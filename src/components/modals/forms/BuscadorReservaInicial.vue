<template>
    <div class="buscador mb-3" v-if="!visible">
      <div class="d-flex flex-row justify-content-start ">
        <div class="tab"><div class="text-wrapper-9">Arriendo Diario</div></div>
        <div class="tab-flotante ms-2"><div class="text-white">Arriendo Mensual</div></div>
        <div class="tab-flotante ms-2"><div class="text-white">Arriendo Internacional</div></div>
      </div>
      <div class="bg-white rounded-bottom"  @click="onSearchForm">
        <div class="d-flex flex-row p-5 w-80 align-items-end justify-content-between">
          <div class="w-100 px-3">
            <p>Ciudad/Aeropuerto de Recogida y Devolución</p>
            <select class="form-select">
              </select>
          </div>
          <div class="w-100 p-4 bg-light d-flex flex-row align-items-end px-5 justify-content-start mx-5">
            <i class="fa-solid fa-plus px-2"></i>
            <i class="fa-solid fa-location-dot px-2"></i>
            <span class="text-wrapper-12">Deseo devolver en otra ciudad</span>
          </div>
          <div class="w-100 p-4 bg-light d-flex flex-row align-items-end px-5 justify-content-start">
            <i class="fa-solid fa-plus px-2"></i>
            <i class="fa-solid fa-ticket px-2"></i>
            <span class="text-wrapper-12">Agregar Código promocional</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { useRentwaySucursalStore } from "@/stores/rentwaySucursal";
import type { ISucursal } from "@/stores/sucursal";


export default defineComponent({
  name: "buscador-reserva-incial",
  components: {
  },
  setup(props, ctx) {
    const sucursal = ref<ISucursal>();
    const store = useRentwaySucursalStore();
    onMounted(() => {
      buscarSucursals();
    });
    const buscarSucursals = () => {
      store.getSucursals()
        /*.then(() => {
          reinitializeComponents();
        })
        .catch(() => {
          const [error] = Object.values(store.sucursalErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });*/
    };
    const allSucursals = computed(() => {
      return store.allSucursals;
    });
    const onSearchForm = (e) => {
      ctx.emit("onSearchForm", true);
    }
    return {
      onSearchForm,
      allSucursals
    };
  },
});
</script>
<style scoped>
.filter {
    position: absolute;
    width: 100%;
    height: 600px;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(10, 61, 41, 0.59) 0%, rgba(10, 61, 41, 0) 100%);
}
.vector-3 {
    position: absolute;
    width: 538px;
    height: 661px;
    top: 0;
    right: 0;
}
.frame-26 {
    display: flex;
    flex-direction: column;
    width: 550px;
    align-items: flex-start;
    justify-content: center;
    gap: var(--europcar-space-large);
    position: absolute;
    top: 108px;
    left: 45px;
}
.text-wrapper {
    position: relative;
    margin-top: -1px;
}

.buscador {
    position: absolute;
    width: 90%;
    height: 156px;
    top: 65%;
    left: 5%;
}
.tab {
  height: 43px;
    gap: 5px;
    padding: 0px 30px 0px 30px;
    flex: 0 0 auto;
    background-color: #ffffff;
    border-radius: 20px 20px 0px 0px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
.tab-flotante{
  display: inline-flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 0px 30px 0px 30px;
    position: relative;
    flex: 0 0 auto;
    background-color: rgba(0, 21, 1, 1);
    border-radius: 20px;
}
.recurso {
    width: 260px;
    height: 181px;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
}
.recurso-2 {
    width: 228px;
    height: 110px;
    top: 48px;
    left: 90px;
    position: absolute;
    object-fit: cover;
}
.recurso-3 {
    width: 231px;
    height: 159px;
    top: 48px;
    left: 171px;
    position: absolute;
    object-fit: cover;
}
.overlap-group-5{
  height:165px;
}

.gettyimages {
    position: absolute;
    width: 1034px;
    height: 500px;
    top: 21px;
    left: 0;
    border-radius: 0px 20px 20px 0px;
    background: linear-gradient(180deg, rgb(216, 216, 216) 0%, rgb(176, 201, 184) 100%);
}
.vector {
    position: absolute;
    width: 353px;
    height: 712px;
    top: 0;
    right: 0;
}
.top-100 {margin-top:100px!important;}

.acceso-directo {
    display: flex;
    width: 300px;
    height: 80px;
    align-items: center;
    justify-content: start;
    gap: 15px;
    padding: 0px 25px 0px 0px;
    position: relative;
    background-color: #ffffff;
    border-radius: 170px;
}
.frame-47 {
    position: relative;
    width: 80px;
    height: 80px;
}
.img-wrapper {
    position: relative;
    width: 60px;
    height: 60px;
    top: 10px;
    left: 10px;
    background-color: rgba(0, 153, 0, 1);
    border-radius: 30px;
}

.bg-gradient-dark {
    height: 500px;
    top: 0;
    left: 0;
    background: radial-gradient(50% 50% at 50% 50%, rgb(216, 216, 216) 0%, rgb(176, 201, 184) 100%);

}

.centro-ayuda i{
    line-height: 1;
    font-size: 1rem;
    color: #fff;
    font-size: 2rem;
}
.p-inputtext {
    border: 0!important;
} 

.p-calendar .p-inputtext {
    border: 4!important;
}
.icon-inside {
    position: absolute;
    left: 15px;
    top: calc(50% - 11px);
    pointer-events: none;
    font-size: 18px;
    font-size: 1.125rem;
    color: #c4c3c3;
    z-index: 3;
}

</style>