<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
const sucursales = ref([
  {
    id: 1,
    nombreSucursal: "Sucursal 1",
    jefeSucursal: "Juan Perez",
    telefonoJefe: "+56 2 0000 0000",
    telefonoSucursal: "+56 2 0000 0000",
    horarioAtencion:
      "Lun a Vier 09:00 - 18:30hrs  |  Sab y Dom 09:00 - 13:00hrs",
    comentarios:
      "non et. Risus aliquam nulla in suscipit malesuada. Elit amet vulputate ipsum eget id.",
    direccion: "Aeropuerto Arturo Merino Benítez, Terminal 1 y 2, Pudahuel",
    ciudad: "Santiago",
    coordenadas: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 2,
    nombreSucursal: "Sucursal 2",
    jefeSucursal: "Juan Perez",
    telefonoJefe: "+56 2 0000 0000",
    telefonoSucursal: "+56 2 0000 0000",
    horarioAtencion:
      "Lun a Vier 09:00 - 18:30hrs  |  Sab y Dom 09:00 - 13:00hrs",
    comentarios:
      "non et. Risus aliquam nulla in suscipit malesuada. Elit amet vulputate ipsum eget id.",
    direccion: "Av. Américo Vespucio 1373, Pudahuel.",
    ciudad: "Santiago",
    coordenadas: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 3,
    nombreSucursal: "Sucursal 3",
    jefeSucursal: "Juan Perez",
    telefonoJefe: "+56 2 0000 0000",
    telefonoSucursal: "+56 2 0000 0000",
    horarioAtencion:
      "Lun a Vier 09:00 - 18:30hrs  |  Sab y Dom 09:00 - 13:00hrs",
    comentarios:
      "non et. Risus aliquam nulla in suscipit malesuada. Elit amet vulputate ipsum eget id.",
    direccion: "Av. Isidora Goyenechea 3000 Local 106, Las Condes",
    ciudad: "Santiago",
    coordenadas: "media/stock/1600x800/img-4.jpg",
  },
  {
    id: 4,
    nombreSucursal: "Sucursal 4",
    jefeSucursal: "Juan Perez",
    telefonoJefe: "+56 2 0000 0000",
    telefonoSucursal: "+56 2 0000 0000",
    horarioAtencion:
      "Lun a Vier 09:00 - 18:30hrs  |  Sab y Dom 09:00 - 13:00hrs",
    comentarios:
      "non et. Risus aliquam nulla in suscipit malesuada. Elit amet vulputate ipsum eget id.",
    direccion: "Av. Marina 15,Viña del Mar",
    ciudad: "Viña del Mar",
    coordenadas: "media/stock/1600x800/img-4.jpg",
  },
]);

const ciudades = ref([
  {
    id: 0,
    nombre: "Todas las Ciudades",
  },
  {
    id: 1,
    nombre: "Santiago",
  },
  {
    id: 2,
    nombre: "Concepción",
  },
  {
    id: 3,
    nombre: "Temuco",
  },
  {
    id: 4,
    nombre: "Viña del Mar",
  },
]);
const sucursalSeleccionada = ref(null);
const ciudadSeleccionada = ref(0);
const filtroSeleccionado = ref(null);

const sucursalesFiltradas = computed(() => {
  if (ciudadSeleccionada.value === 0) {
    return sucursales.value;
  }
  return sucursales.value.filter(
    (sucursal) =>
      sucursal.ciudad ===
      ciudades.value.find((ciudad) => ciudad.id === ciudadSeleccionada.value)
        ?.nombre
  );
});
const mostrarEnMapa = (sucursal) => {
  sucursalSeleccionada.value = sucursal.direccion;
};
onMounted(async () => {
  sucursalSeleccionada.value = sucursales.value[0].direccion;
});
</script>
<template>
  <main class="mt-15">
    <div class="mb-15">
      <div class="titulo-pagina">Sucursales</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <p class="titulo-filtro-ciudad">Ciudad</p>
        <Prime-Dropdown
          :options="ciudades"
          optionValue="id"
          optionLabel="nombre"
          placeholder="Seleccione para filtrar"
          :filter="true"
          filterPlaceholder="Buscar ciudad"
          @change="ciudadesFiltradas"
          class="form-control-sm w-100"
          v-model="ciudadSeleccionada"
        />
        <div class="contenedor-sucursales mt-15">
          <div
            class="tarjeta-sucursal"
            v-for="(sucursal, i) in sucursalesFiltradas"
            :key="i"
          >
            <div class="tarjeta-sucursal-nombre">
              {{ sucursal.nombreSucursal }}
            </div>
            <div class="tarjeta-sucursal-items tarjeta-sucursal-direccion">
              {{ sucursal.direccion }}
            </div>
            <div class="tarjeta-sucursal-items tarjeta-sucursal-jefe  d-flex">
              <svg
               class="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="20"
                viewBox="0 0 17 20"
                fill="none"
              >
                <path
                  d="M5.16667 19.5V15.587M11.8333 19.5V15.587M1 19.5V15.587C1 11.6974 4.35833 9.32609 8.5 9.32609M8.5 9.32609C12.6417 9.32609 16 11.6974 16 15.587V19.5M8.5 9.32609C9.60507 9.32609 10.6649 8.91382 11.4463 8.17998C12.2277 7.44614 12.6667 6.45085 12.6667 5.41304C12.6667 4.37524 12.2277 3.37994 11.4463 2.6461C10.6649 1.91227 9.60507 1.5 8.5 1.5C7.39493 1.5 6.33512 1.91227 5.55372 2.6461C4.77232 3.37994 4.33333 4.37524 4.33333 5.41304C4.33333 6.45085 4.77232 7.44614 5.55372 8.17998C6.33512 8.91382 7.39493 9.32609 8.5 9.32609Z"
                  stroke="#144733"
                  stroke-width="2"
                />
              </svg>
              <div>
                 <span class="">Jefe/Responsable de sucursal:</span>
              <span>{{ sucursal.jefeSucursal }}</span>
              </div>
             
            </div>
            <div class="tarjeta-sucursal-items tarjeta-sucursal-telefono-jefe d-flex">
              <svg
              class="me-2"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="23"
                viewBox="0 0 18 23"
                fill="none"
              >
                <path
                  d="M10.8746 0.709946L1.35932 3.25955C0.998807 3.35615 0.691433 3.59201 0.504817 3.91524C0.318201 4.23846 0.26763 4.62259 0.364229 4.9831L4.73498 21.295C4.83158 21.6555 5.06744 21.9629 5.39066 22.1495C5.71389 22.3361 6.09802 22.3867 6.45853 22.2901L15.9738 19.7405C16.3343 19.6439 16.6417 19.408 16.8283 19.0848C17.0149 18.7615 17.0655 18.3774 16.9689 18.0169L12.5981 1.70504C12.5015 1.34452 12.2657 1.03715 11.9424 0.850533C11.6192 0.663917 11.2351 0.613346 10.8746 0.709946ZM1.72355 4.61887L11.2388 2.06927L14.5169 14.3032L5.00161 16.8528L1.72355 4.61887ZM6.0943 20.9307L5.36584 18.2121L14.8811 15.6625L15.6096 18.3811L6.0943 20.9307Z"
                  fill="#144733"
                />
                <path
                  d="M9.625 17.7993L10.9843 17.4351L11.3486 18.7944L9.98923 19.1586L9.625 17.7993Z"
                  fill="#144733"
                />
              </svg>
              <div class="">
                <span class="">
                  Teléfono Jefe/Responsable de sucursal:</span
                >
                <span>{{ sucursal.telefonoJefe }}</span>
              </div>
            </div>
            <div
              class="tarjeta-sucursal-items tarjeta-sucursal-telefono-sucursal d-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
              >
                <path
                  d="M15.8067 10.6119C13.7733 8.61983 11.0267 7.39289 8 7.39289C4.97333 7.39289 2.22667 8.61983 0.193333 10.6119C0.0733333 10.7359 0 10.9083 0 11.1013C0 11.2943 0.0733333 11.4666 0.193333 11.5907L1.84667 13.3001C1.96667 13.4242 2.13333 13.5 2.32 13.5C2.5 13.5 2.66667 13.4242 2.78667 13.307C3.31333 12.7969 3.91333 12.3696 4.56 12.0318C4.78 11.9215 4.93333 11.6872 4.93333 11.4115V9.27465C5.9 8.9438 6.93333 8.77147 8 8.77147C9.06667 8.77147 10.1 8.9438 11.0667 9.26776V11.4046C11.0667 11.6734 11.22 11.9146 11.44 12.0249C12.0933 12.3627 12.6867 12.7969 13.2133 13.3001C13.3333 13.4242 13.5 13.4931 13.68 13.4931C13.8667 13.4931 14.0333 13.4173 14.1533 13.2932L15.8067 11.5838C15.9267 11.4597 16 11.2874 16 11.0944C16 10.9134 15.9304 10.7398 15.8067 10.6119ZM14.1067 3.43637L13.1667 2.46447L10.7933 4.91145L11.7333 5.88335C11.7333 5.88335 14.0333 3.45705 14.1067 3.43637ZM8.66667 0.5H7.33333V3.94645H8.66667V0.5ZM4.26667 5.88335L5.20667 4.91145L2.84 2.45758L1.89333 3.43637C1.96667 3.45705 4.26667 5.88335 4.26667 5.88335Z"
                  fill="#144733"
                />
              </svg>
              <span class="mx-2">Teléfono sucursal:</span>
              <span>{{ sucursal.telefonoSucursal }}</span>
            </div>
            <div
              class="tarjeta-sucursal-items tarjeta-sucursal-horario-atencion d-flex"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
              >
                <path
                  d="M11.8261 1.36364H0.695652V0H11.8261V1.36364ZM11.4783 7.5H10.4348V10.9091L12.9461 12.3818L13.4678 11.55L11.4783 10.3977V7.5ZM16 10.2273C16 12.8659 13.8226 15 11.1304 15C8.67478 15 6.65739 13.2205 6.31652 10.9091H0.695652V6.81818H0V5.45455L0.695652 2.04545H11.8261L12.5217 5.45455V5.65227C14.5322 6.24545 16 8.06591 16 10.2273ZM1.41913 5.45455H11.1026L10.6852 3.40909H1.83652L1.41913 5.45455ZM2.08696 9.54545H6.26087V6.81818H2.08696V9.54545ZM14.6087 10.2273C14.6087 8.34545 13.0504 6.81818 11.1304 6.81818C9.21043 6.81818 7.65217 8.34545 7.65217 10.2273C7.65217 12.1091 9.21043 13.6364 11.1304 13.6364C13.0504 13.6364 14.6087 12.1091 14.6087 10.2273Z"
                  fill="#144733"
                />
              </svg>
              <span class="mx-2"> {{ sucursal.horarioAtencion }}</span>
            </div>
            <div
              class="tarjeta-sucursal-items tarjeta-sucursal-comentarios mt-5"
            >
              <span>Comentarios especiales:</span>
              <span>{{ sucursal.comentarios }}</span>
            </div>
            <div
              class="tarjeta-sucursal-como-llegar mt-4"
              @click="mostrarEnMapa(sucursal)"
            >
              Como llegar GMaps
              <svg
                class="mx-1"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <g clip-path="url(#clip0_3173_7369)">
                  <path
                    d="M12.75 12.75H2.25V2.25H6V0.75H2.25C1.85218 0.75 1.47064 0.908035 1.18934 1.18934C0.908035 1.47064 0.75 1.85218 0.75 2.25V12.75C0.75 13.1478 0.908035 13.5294 1.18934 13.8107C1.47064 14.092 1.85218 14.25 2.25 14.25H12.75C13.1478 14.25 13.5294 14.092 13.8107 13.8107C14.092 13.5294 14.25 13.1478 14.25 12.75V9H12.75V12.75Z"
                    fill="#009900"
                  />
                  <path
                    d="M8.24992 0.75L10.7174 3.2175L6.41992 7.515L7.48492 8.58L11.7824 4.2825L14.2499 6.75V0.75H8.24992Z"
                    fill="#009900"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3173_7369">
                    <rect width="15" height="15" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8 d-flex justify-content-center">
        <iframe
          class="align-self-center"
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="`https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=${sucursalSeleccionada}&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`"
        ></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contenedor-sucursales {
  max-height: 700px; /* Altura máxima */
  overflow-y: scroll;
}
.titulo-filtro-ciudad {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 110%;
  margin-bottom: 2px;
}

.contenedor-sucursales::-webkit-scrollbar {
  width: 6px;
}

.contenedor-sucursales::-webkit-scrollbar-track {
  background: #d8d8d8;
}

.contenedor-sucursales::-webkit-scrollbar-thumb {
  background: #144733;
}

.contenedor-sucursales::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.contenedor-sucursales {
  scrollbar-width: thin;
  scrollbar-color: #144733 #d8d8d8;
}

.tarjeta-sucursal {
  border-radius: 20px;
  border: 2px solid var(--Green-01-Secundary, #144733);
  background: var(--White, #fff);
  margin-bottom: 20px;
  margin-right: 20px;
  padding: 30px;
  align-items: center;
}
.tarjeta-sucursal-items {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%; /* 15.6px */
  margin-top: 10px;
}
.tarjeta-sucursal-nombre {
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}

.tarjeta-sucursal-como-llegar {
  color: #496251;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
}
</style>
