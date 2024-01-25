<template>
    <div class="buscador-funcional mb-3">
                <div class="d-flex flex-row justify-content-start ">
                    <div class="tab"><div class="text-wrapper-9">Arriendo Diario</div></div>
                    <div class="tab-flotante ms-2"><div class="text-white">Arriendo Mensual</div></div>
                    <div class="tab-flotante ms-2"><div class="text-white">Arriendo Internacional</div></div>
                </div>
                <div class="bg-white rounded-bottom">
                    <Form
                      id="kt_reservation_form"
                      novalidate="novalidate"
                      @submit="saveChanges()"
                      :validation-schema="reservationValidator"
                    class="form-group form-group-light d-block">
                  <div class="d-flex flex-row p-5 w-80 align-items-end justify-content-between">
                    <div class="w-100 px-3">
                      <p>Ciudad/Aeropuerto de Recogida y Devolución</p>
                      <Field
                          v-slot="{ field }"
                          v-model="reservationDetails.codigoEstacionRetiro"
                          name="codigoEstacionRetiro"
                        >
                        <Prime-Dropdown id="inputtext-estacionRetiro" :options="sucursales" optionValue="stationID" optionLabel="station" 
                         v-bind="field" placeholder="Seleccione oficina" :filter="true" filterPlaceholder="Buscar oficina"
                          @input="field.onInput.forEach((fn) => fn($event.value))"
                          @change="field.onChange.forEach((fn) => fn($event.value))"
                          :model-value="field.value"
                          class="form-control-sm w-100"
                          v-model="reservationDetails.codigoEstacionRetiro"/>
                      </Field>
                    </div>
                    <div v-if="!otraLocacion" @click="otraLocacion=true" class="cursor-pointer w-100 p-4 bg-light d-flex flex-row align-items-end px-5 justify-content-start mx-5">
                      <i class="fa-solid fa-plus px-2"></i>
                      <i class="fa-solid fa-location-dot px-2"></i>
                      <span class="text-wrapper-12">Deseo devolver en otra ciudad</span>
                    </div>
                    <div v-if="otraLocacion" class="w-100 px-3 position-relative">
                      <p>Ciudad/Aeropuerto de Recogida y Devolución<span class="close position-absolute end-0"><button type="button" @click="otraLocacion=false" class="btn-close text-primary btn-sm" aria-label="Close"></button></span></p>
                      <Field
                          v-slot="{ field }"
                          v-model="reservationDetails.codigoEstacionDevolucion"
                          name="codigoEstacionDevolucion"
                        >
                        <Prime-Dropdown id="inputtext-estacionRetiro" :options="sucursales" optionValue="stationID" optionLabel="station" 
                         v-bind="field" placeholder="Seleccione oficina" :filter="true" filterPlaceholder="Buscar oficina"
                          @input="field.onInput.forEach((fn) => fn($event.value))"
                          @change="field.onChange.forEach((fn) => fn($event.value))"
                          :model-value="field.value"
                          class="form-control-sm w-100"
                          v-model="reservationDetails.codigoEstacionDevolucion"/>
                      </Field>
                    </div>
                    <div class="w-100 p-4 bg-light d-flex flex-row align-items-end px-5 justify-content-start">
                      <i class="fa-solid fa-plus px-2"></i>
                      <i class="fa-solid fa-ticket px-2"></i>
                      <span class="text-wrapper-12">Agregar Código promocional</span>
                    </div>
                  </div>
                  <div class="d-flex flex-row p-5 w-80 align-items-end justify-content-between">
                    <div class="w-100 px-3">
                      <p>Fecha y hora de recogida</p>
                      <div class=" border border-radius">
                        <!--begin::calendario y horas-->
                        <div class="row g-0">
                          <div class="col-7">
                            <div class="position-relative">
                                    <Field 
                                        v-slot="{ field }"
                                        v-model="reservationDetails.fechaRetiro"
                                        name="fechaRetiro"
                                        >
                                    <Prime-Calendar inputId="range" v-bind="field"
                                        @input="field.onInput.forEach((fn) => fn($event.value))"
                                        @change="field.onChange.forEach((fn) => fn($event.value))" 
                                        @date-select="dateSelectDesde" class="form-control rounded-end-0 ms-2"
                                        :minDate="minDate" :maxDate="maxDate"
                                        v-model="reservationDetails.fechaRetiro" :numberOfMonths="3" :manualInput="false" />
                                    </Field>
                                    <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> 
                                    </div>
                               
                               </div>
                               <div class="col-5">
                                 <Prime-Calendar class="form-control rounded-start-0 border-start-0" v-model="reservationDetails.horaRetiro" :showTime="true" :timeOnly="true" :showButtonBar="true" :stepMinute="30"/>
                      
                                    <span class="icon-inside"><i class="fa-solid fa-chevron-down"></i></span> 
                              </div>
                            </div>

                        <!--end::calendario y horas-->
                        
                      </div>
                    </div>
                    <div class="w-100 px-3">
                      <p>Fecha y hora de recogida</p>
                      <div class=" border border-radius">
                        <!--begin::calendario y horas-->
                        <div class="row g-0">
                          <div class="col-7">
                            <div class="position-relative">
                                    <Field
                                    v-slot="{ field }"
                                    v-model="reservationDetails.fechaDevolucion"
                                    name="fechaDevolucion" 
                                    >
                                <Prime-Calendar inputId="range" v-bind="field"
                                    @input="field.onInput.forEach((fn) => fn($event.value))"
                                    @change="field.onChange.forEach((fn) => fn($event.value))" 
                                    class="form-control rounded-end-0 ms-2"
                                    :minDate="minDate" :maxDate="maxDate"
                                    v-model="reservationDetails.fechaDevolucion" :numberOfMonths="3" :manualInput="false" />
                                </Field>
                                    <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> </div>
                               
                               </div>
                               <div class="col-5">
                                  <Prime-Calendar class="form-control rounded-start-0 border-start-0" v-model="reservationDetails.horaDevolucion" :showTime="true" :timeOnly="true" :showButtonBar="true" :stepMinute="30"/>
                      
                                    <span class="icon-inside"><i class="fa-solid fa-chevron-down"></i></span> 
                              </div>
                            </div>

                        <!--end::calendario y horas-->
                        
                      </div>
                    </div>
                    <div class="w-100 px-3">
                      <div class="w-100 px-3 position-relative">
                      <p>Categoría de vehículo</p>
                      <Field
                          v-slot="{ field }"
                          v-model="reservationDetails.categoria"
                          name="categoria"
                        >
                        <Prime-Dropdown id="inputtext-categoria" :options="categorias" optionValue="segmentDescription" optionLabel="segmentDescription" 
                         v-bind="field" placeholder="Seleccione categoriía" :filter="true" filterPlaceholder="Buscar categoría"
                          @input="field.onInput.forEach((fn) => fn($event.value))"
                          @change="field.onChange.forEach((fn) => fn($event.value))"
                          :model-value="field.value"
                          class="form-control-sm w-100"
                          v-model="reservationDetails.categoria"/>
                      </Field>
                    </div>
                    </div>
                  </div>
                  <div class="d-flex flex-row p-5 w-100 align-items-center justify-content-center">
                    <div class="w-100 px-3 text-center">
                      <button class="btn btn-primary">Continuar para arrendar
                      </button>
                    </div>

                  </div>
                    </Form>
                </div>
              </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import moment from "moment";
import { useRentwaySucursalStore } from "@/stores/rentwaySucursal";
import { useRentwayCategoriaFlotaStore } from "@/stores/rentwayCategoriaFlota";
import type { ISucursal } from "@/stores/sucursal";

interface ReservationDetails {
  codigoEstacionRetiro: string;
  codigoEstacionDevolucion: string;
  categoria: string|undefined;
  estacionRetiro: string;
  estacionDevolucion: string;
  fechaRetiro: Date | undefined;
  fechaDevolucion: Date | undefined;
  horaRetiro: Date | undefined;
  horaDevolucion: Date | undefined;
}

export default defineComponent({
  name: "buscador-reserva-incial",
  components: {
    Field, Form
  },
  setup(props, ctx) {
    const sucursal = ref<ISucursal>();

    const store = useRentwaySucursalStore();
    const storeCategoria = useRentwayCategoriaFlotaStore();
    onMounted(() => {
      buscarSucursals();
      
    });
    const reservationDetails = ref<ReservationDetails>({
      codigoEstacionRetiro: "",
      codigoEstacionDevolucion: "",
      categoria:"",
      estacionRetiro: "",
      estacionDevolucion: "",
      fechaRetiro: moment().add(1, 'days').toDate(),
      fechaDevolucion: moment().add(2, 'days').toDate(),
      horaRetiro: moment("20111031 12:00:00", "YYYYMMDD hh:mm:ss").toDate(),
      horaDevolucion: moment("20111031 12:00:00", "YYYYMMDD hh:mm:ss").toDate()
    });
    const codigoEstacionRetiro = computed(() => {
                    return reservationDetails.value.codigoEstacionRetiro;
                  });
    const otraLocacion = ref(false);
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
    const sucursales = computed(() => {
      return store.allSucursals;
    });
    const obtenerCategorias = (stationID:string) => {
      storeCategoria.getCategoriaFlotas(stationID)
    };
    const categorias = computed(() => {
      return storeCategoria.allCategoriaFlotas;
    });
    const onSearchForm = (e) => {
      ctx.emit("onSearchForm", false);
    }
    watch(codigoEstacionRetiro, (newValue, oldValue) => {
      obtenerCategorias(newValue);
    });
    return {
      onSearchForm,
      sucursales,
      categorias,
      reservationDetails,
      otraLocacion
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

.buscador-funcional {
    position: absolute;
    width: 90%;
    height: 156px;
    top: 15%;
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