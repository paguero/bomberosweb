<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
const packSeguros = ref([
  {
    id: 1,
    nombre: "Basic",
    subtitulo: "Desde $7.735 /día",
    caracteristicas: [
      "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
      "Robo del vehículo y pérdida total en Chile",
      "Vuelco del vehículo en Chile",
      "Cobertura por daños a terceros en Chile y Argentina",
    ],
    rating: 1,
  },
  {
    id: 2,
    nombre: "Medium",
    subtitulo: "Desde $7.735 /día",
    caracteristicas: [
      "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
      "Robo del vehículo y pérdida total en Chile",
      "Vuelco del vehículo en Chile",
      "Cobertura por daños a terceros en Chile y Argentina",
    ],
    rating: 2,
  },
  {
    id: 3,
    nombre: "Premium",
    subtitulo: "Desde $22.000 /día",
    caracteristicas: [
      "Cubre daño de vehículo en Chile y Argentina (CDW/LDW)",
      "Robo del vehículo y pérdida total en Chile",
      "Vuelco del vehículo en Chile",
      "Cobertura por daños a terceros en Chile y Argentina",
    ],
    rating: 3,
  },
]);

const protecciones = ref([
  {
    id: 1,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "Pack Medium",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 2,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 3,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 4,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 5,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
  {
    id: 6,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    incluidoPack: "",
    valor: "$253.000 /total",
    seleccionado: false,
  },
]);

const extras = ref([
  {
    id: 1,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 2,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 3,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 4,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 5,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
  {
    id: 6,
    imagen: "/media/avatars/blank.png",
    nombre: "Tincidunt feugiat congue massa laoreet cursus vehicula aliquam",
    descripcion:
      "Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncu",
    valor: "$253.000 /total",
    cantidad: 0,
  },
]);

const coberturasPorCancelacion = ref([
  {
    id: 1,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
  {
    id: 2,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
]);
const permisosCruceFronteraArgentina = ref([
  {
    id: 1,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
  {
    id: 2,
    nombre: "Devolución hasta 24 horas de anticipación",
    descripcion:
      "Commodo amet vel non etiam mattis. Quam at vitae in semper dignissim non. Amet non tincidunt a amet suspendisse rhoncus quam sagittis varius. Eu laoreet aliquam aliquam volutpat quis tincidunt adipiscing. Hendrerit eu non proin lacus a. Velit id nibh viverra scelerisque interdum mauris. In tincidunt quam enim eget. Vestibulum sed enim diam cursus in in.",
    valor: "$2.500 /día IVA incluido",
    seleccionado: false,
  },
]);

interface Extra {
  id: number;
  imagen: string;
  titulo: string;
  descripcion: string;
  incluidoPack: string;
  valor: string;
  cantidad?: number;
}

//Totales carro de compra
const totalPrepagoOnline = ref(150000);
const totalPagoSucursal = ref(160000);

//Son cada uno de los items seleccionado del carro de compra
const packSeguroSeleccionado = ref(null);
const proteccionSeleccionados = ref([]);
//Aqui se van agregando los extras y sus cantidades
const extrasSeleccionados = ref([]);
const coberturaSeleccionado = ref(null);
const permisoCruceFronteraArgentinaSeleccionado = ref(null);

const seleccionarPackSeguro = (pack) => {
  packSeguroSeleccionado.value = pack;
};

const seleccionarProteccion = (proteccion) => {
  const index = proteccionSeleccionados.value.findIndex(
    (e) => e.id === proteccion.id
  );

  if (index === -1) {
    proteccion.seleccionado = true;
    proteccionSeleccionados.value.push(proteccion);
  }
};

const removerProteccion = (proteccion) => {
  const index = proteccionSeleccionados.value.findIndex(
    (e) => e.id === proteccion.id
  );
  if (index !== -1) {
    proteccion.seleccionado = false;
    proteccionSeleccionados.value.splice(index, 1);
  }
};

const actualizarCarrito = (extra: Extra) => {
  const index = extrasSeleccionados.value.findIndex((e) => e.id === extra.id);

  if (extra.cantidad > 0) {
    if (index === -1) {
      extrasSeleccionados.value.push(extra);
    } else {
      extrasSeleccionados.value[index].cantidad = extra.cantidad;
    }
  } else {
    if (index !== -1) {
      extrasSeleccionados.value.splice(index, 1);
    }
  }
};

const incrementar = (extra: Extra) => {
  extra.cantidad++;
  actualizarCarrito(extra);
};

const disminuir = (extra: Extra) => {
  if (extra.cantidad > 0) {
    extra.cantidad--;
    actualizarCarrito(extra);
  }
};


const seleccionarCobertura = (cobertura) => {
  coberturaSeleccionado.value = cobertura;
};

const removerCobertura = (cobertura) => {
  coberturaSeleccionado.value = null;
};
const seleccionarPermisoCruceFronteraArgentina = (permiso) => {
  permisoCruceFronteraArgentinaSeleccionado.value = permiso;
};
const removerPermisoCruceFronteraArgentina = (permiso) => {
  permisoCruceFronteraArgentinaSeleccionado.value = null;
};


const formatCurrency = (value) => {
  return value.toLocaleString("es-CL", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency: "CLP",
  });
};
</script>
<template>
  <main class="row">
    <div class="mt-10 items-arriendo col-md-9">
      <!-- Pack seguros -->
      <div class="row p-10">
        <div class="fs-4 titulo">Pack seguros</div>
        <div
          class="col-md-6 col-lg-4 mt-7"
          v-for="pack in packSeguros"
          :key="pack.id"
        >
          <div
            :class="[
              'card',
              {
                'border-primary':
                  packSeguroSeleccionado != null
                    ? pack.id === packSeguroSeleccionado.id
                    : '',
              },
            ]"
          >
            <span
              class="etiqueta-seleccionado"
              v-if="
                packSeguroSeleccionado != null
                  ? pack.id === packSeguroSeleccionado.id
                  : false
              "
              >Seleccionado</span
            >
            <div class="card-body">
              <div class="mb-5">
                <h5
                  class="card-titulo titulo-tarjeta d-flex gap-1 align-items-center"
                >
                  {{ pack.nombre }}
                  <svg
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
                    />
                  </svg>
                </h5>

                <h5 class="card-titulo subtitulo-tarjeta">
                  {{ pack.subtitulo }}
                </h5>
              </div>
              <ul class="lista-pack-seguros">
                <li
                  class=""
                  v-for="caracteristica in pack.caracteristicas"
                  :key="caracteristica"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M7.5002 17.0167L2.3252 11.8417L4.68353 9.48332L7.5002 12.3083L15.7335 4.06665L18.0919 6.42498L7.5002 17.0167Z"
                      fill="#009900"
                    />
                  </svg>

                  {{ caracteristica }}
                </li>
              </ul>
              <div class="tarjeta-mas-informacion">Ver más información...</div>
              <button
                @click="seleccionarPackSeguro(pack)"
                class="btn mt-3 w-100 rounded-pill"
                :disabled="
                  packSeguroSeleccionado != null
                    ? pack.id === packSeguroSeleccionado.id
                    : false
                "
                :class="
                  packSeguroSeleccionado != null
                    ? pack.id === packSeguroSeleccionado.id
                      ? 'btn-secondary'
                      : 'btn-primary'
                    : 'btn-primary'
                "
              >
                {{
                  packSeguroSeleccionado != null
                    ? pack.id === packSeguroSeleccionado.id
                      ? "Seleccionado"
                      : "Seleccionar"
                    : "Seleccionar"
                }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Protecciones -->
      <div class="row p-10">
        <div class="fs-4 titulo">Protecciones</div>
        <div
          class="col-md-6 col-lg-4 mt-7"
          v-for="proteccion in protecciones"
          :key="proteccion.id"
        >
          <div
            :class="[
              'card',
              {
                'border-primary':
                  proteccion.seleccionado === true ||
                  proteccion.incluidoPack !== '',
              },
            ]"
          >
            <span
              class="etiqueta-incluido-pack"
              v-if="proteccion.incluidoPack !== ''"
              >Incluido en el Pack Medium</span
            >
            <span
              class="etiqueta-seleccionado-proteccion"
              v-if="proteccion.seleccionado === true"
              >Agregado</span
            >
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-proteccion d-flex gap-5">
                  <img
                    class="imagen-tarjeta-proteccion"
                    :src="proteccion.imagen"
                    alt=""
                  />
                  <span> {{ proteccion.nombre }}</span>
                </h5>
              </div>
              <div class="tarjeta-proteccion-descripcion">
                <div>
                  {{ proteccion.descripcion }}
                </div>

                <span class="leer-mas">Leer más</span>
              </div>

              <div class="proteccion-valor">
                {{ proteccion.valor }}
              </div>
              <button
                v-if="
                  proteccion.incluidoPack == '' &&
                  proteccion.seleccionado == false
                "
                @click="seleccionarProteccion(proteccion)"
                class="btn mt-3 w-100 rounded-pill btn-primary"
                :disabled="proteccion.seleccionado === true"
              >
                Agregar
              </button>

              <button
                v-if="proteccion.seleccionado === true"
                @click="removerProteccion(proteccion)"
                class="mt-3 w-100 rounded-pill btn-primary-outline-tarjeta"
              >
                Remover
              </button>

              <button
                v-if="proteccion.incluidoPack !== ''"
                @click="seleccionarProteccion(proteccion)"
                class="btn mt-3 w-100 rounded-pill btn-secondary"
                disabled
              >
                Incluido
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Extras -->
      <div class="row p-10">
        <div class="fs-4 titulo">Extras</div>
        <div
          class="col-md-6 col-lg-4 mt-7"
          v-for="extra in extras"
          :key="extra.id"
        >
          <div
            :class="[
              'card',
              {
                'border-primary': extra.cantidad > 0,
              },
            ]"
          >
            <span
              class="etiqueta-seleccionado-proteccion"
              v-if="extra.cantidad > 0"
              >Agregado</span
            >
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-proteccion d-flex gap-5">
                  <img
                    class="imagen-tarjeta-proteccion"
                    :src="extra.imagen"
                    alt=""
                  />
                  <span> {{ extra.nombre }}</span>
                </h5>
              </div>
              <div class="tarjeta-proteccion-descripcion">
                <div>
                  {{ extra.descripcion }}
                </div>

                <span class="leer-mas">Leer más</span>
              </div>

              <div class="proteccion-valor">
                {{ extra.valor }}
              </div>

              <div class="counter d-flex justify-content-between mt-5">
                <button
                  class="btn-cantidad"
                  :class="
                    extra.cantidad === 0 ? 'btn-disminuir' : 'btn-cantidad'
                  "
                  @click="disminuir(extra)"
                >
                  -
                </button>
                <span class="align-self-sm-center">{{ extra.cantidad }}</span>
                <button
                  class="btn-cantidad btn-aumentar"
                  @click="incrementar(extra)"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Coberturas por cancelacion -->
      <div class="row p-10">
        <div class="fs-4 titulo">Coberturas por cancelación</div>
        <div
          class="col-12 mt-7"
          v-for="cobertura in coberturasPorCancelacion"
          :key="cobertura.id"
        >
          <div
            :class="[
              'card',
              {
                'border-primary': coberturaSeleccionado != null
                    ? cobertura.id === coberturaSeleccionado.id
                    : '', 
              },
            ]"
          >
            <span
              class="etiqueta-seleccionado-cobertura"
              v-if="coberturaSeleccionado != null
                  ? cobertura.id === coberturaSeleccionado.id
                  : false"
              >Agregado</span
            >
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-cobertura">
                  <span> {{ cobertura.nombre }}</span>
                </h5>
                <h5 class="card-titulo subtitulo-tarjeta">
                  {{ cobertura.valor }}
                </h5>
              </div>
              <div class="tarjeta-cobertura-descripcion">
                <div>
                  {{ cobertura.descripcion }}
                </div>
              </div>

              <button
                v-if="coberturaSeleccionado != null
                  ? cobertura.id !== coberturaSeleccionado.id
                  : true"
                @click="seleccionarCobertura(cobertura)"
                class="btn mt-3 rounded-pill btn-primary px-12"
              >
                Agregar
              </button>

              <button
                v-if="coberturaSeleccionado != null
                  ? cobertura.id === coberturaSeleccionado.id
                  : false"
                @click="removerCobertura(cobertura)"
                class="mt-3 rounded-pill btn-primary-outline-tarjeta px-12"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Permiso cruce de frontera a Argentina -->
      <div class="row p-10">
        <div class="fs-4 titulo">Permiso cruce de frontera a Argentina</div>
        <div
          class="col-12 mt-7"
          v-for="permiso in permisosCruceFronteraArgentina"
          :key="permiso.id"
        >
          <div
            :class="[
              'card',
              {
                'border-primary': permisoCruceFronteraArgentinaSeleccionado != null
                    ? permiso.id === permisoCruceFronteraArgentinaSeleccionado.id
                    : '',
              },
            ]"
          >
            <span
              class="etiqueta-seleccionado-cobertura"
              v-if="permisoCruceFronteraArgentinaSeleccionado != null
                  ? permiso.id === permisoCruceFronteraArgentinaSeleccionado.id
                  : false"
              >Agregado</span
            >
            <div class="card-body">
              <div class="mb-5">
                <h5 class="card-titulo titulo-tarjeta-cobertura">
                  <span> {{ permiso.nombre }}</span>
                </h5>
                <h5 class="card-titulo subtitulo-tarjeta">
                  {{ permiso.valor }}
                </h5>
              </div>
              <div class="tarjeta-cobertura-descripcion">
                <div>
                  {{ permiso.descripcion }}
                </div>
              </div>

              <button
                v-if="permisoCruceFronteraArgentinaSeleccionado != null
                  ? permiso.id !== permisoCruceFronteraArgentinaSeleccionado.id
                  : true"
                @click="seleccionarPermisoCruceFronteraArgentina(permiso)"
                class="btn mt-3 rounded-pill btn-primary px-12"
              >
                Agregar
              </button>

              <button
                v-if="permisoCruceFronteraArgentinaSeleccionado != null
                  ? permiso.id === permisoCruceFronteraArgentinaSeleccionado.id
                  : false"
                @click="removerPermisoCruceFronteraArgentina(permiso)"
                class="mt-3 rounded-pill btn-primary-outline-tarjeta px-12"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-3 mt-10 carro-compra">
      <div class="card">
        <div class="card-body px-5">
          <div class="carro-compra-pack" v-if="packSeguroSeleccionado != null">
            <div class="carro-compra-titulo">Pack de seguro seleccionado</div>
            <div class="d-flex mt-5">
              <svg
                class="align-self-center me-2"
                v-for="(rating, i) in packSeguroSeleccionado.rating"
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
              <div class="mx-3">
                <div class="carro-compra-nombre-pack">
                  {{ packSeguroSeleccionado.nombre }}
                </div>
                <div class="carro-compra-subtitulo-pack">
                  {{ packSeguroSeleccionado.subtitulo }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="py-5 carro-compra-border-bottom"
            v-if="packSeguroSeleccionado != null"
          ></div>
          <div
            class="carro-compra-protecciones mt-10"
            v-if="proteccionSeleccionados.length > 0"
          >
            <div class="carro-compra-titulo mb-5">Selecciones Protecciones</div>
            <div
              class="d-flex mt-4"
              v-for="proteccion in proteccionSeleccionados"
              :key="proteccion.id"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5002 17.0167L2.3252 11.8417L4.68353 9.48332L7.5002 12.3083L15.7335 4.06665L18.0919 6.42498L7.5002 17.0167Z"
                  fill="#009900"
                />
              </svg>
              <div class="mx-5">
                <div class="carro-compra-nombre-proteccion">
                  {{ proteccion.nombre }}
                </div>
                <div class="carro-compra-valor-proteccion">
                  {{ proteccion.valor }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="py-5 carro-compra-border-bottom"
            v-if="proteccionSeleccionados.length > 0"
          ></div>
          <div
            class="carro-compra-extras mt-10"
            v-if="extrasSeleccionados.length > 0"
          >
            <div class="carro-compra-titulo mb-5">Selecciones extras</div>
            <div
              class="d-flex mt-4"
              v-for="extra in extrasSeleccionados"
              :key="extra.id"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M7.5002 17.0167L2.3252 11.8417L4.68353 9.48332L7.5002 12.3083L15.7335 4.06665L18.0919 6.42498L7.5002 17.0167Z"
                  fill="#009900"
                />
              </svg>
              <div class="mx-5">
                <div
                  class="carro-compra-cantidad-extra"
                  v-if="extra.cantidad > 1"
                >
                  {{ extra.cantidad }}
                </div>
                <div class="carro-compra-nombre-extra">
                  {{ extra.nombre }}
                </div>
                <div class="carro-compra-valor-extra">
                  {{ extra.valor }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="py-5 carro-compra-border-bottom"
            v-if="extrasSeleccionados.length > 0"
          ></div>
          <div class="carro-compra-coberturas"></div>
          <div class="carro-compra-permisos"></div>
          <div class="total-prepago-online d-flex justify-content-between mt-10 mb-5">
            <div>Total prepago online</div>
            <div class="">
              {{ formatCurrency(totalPrepagoOnline) }}
            </div>
          </div>
          <div class="total-pago-sucursal d-flex justify-content-between">
            <div>Total pago en sucursal</div>
            <div class="">
              {{ formatCurrency(totalPagoSucursal) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.total-prepago-online,
.total-pago-sucursal {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.carro-compra {
  /* position: fixed;
  right: 0; */
}
.carro-compra-titulo {
  color: #144733;

  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 24px */
}
.carro-compra-nombre-pack {
  color: #144733;

  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 24px */
}
.carro-compra-subtitulo-pack {
  color: #144733;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%;
}
.carro-compra-border-bottom {
  border-bottom: 2px solid #d8d8d8;
}

.carro-compra-nombre-proteccion {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%; /* 15.6px */
}
.carro-compra-valor-proteccion {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 150%; /* 18px */
}
.carro-compra-cantidad-extra {
  color: #496251;

  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 24px */
}
.carro-compra-nombre-extra {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%; /* 15.6px */
}
.carro-compra-valor-extra {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 900 !important;
  line-height: 150%; /* 18px */
}

.btn-cantidad {
  border-radius: 30px;
  border: 2px solid #090;
  font-weight: bold;
  padding: 0px 40px;
  background: #fff;
  color: #090;
  font-size: 20px;
}
.btn-disminuir {
  border: 2px solid #a9b0ab;
  color: #a9b0ab;
}
.proteccion-valor {
  color: #496251;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 27px */
  margin-top: 10px;
  margin-block-start: 10px;
}
.btn-primary-outline-tarjeta {
  border: 2px solid #090;
  font-weight: bolder;
  padding: 10px 40px;
  background: #fff;
  color: #090;
}
.tarjeta-proteccion-descripcion div {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 21px */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.leer-mas {
  display: inline;
  color: #496251;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  text-decoration-line: underline;
}
.imagen-tarjeta-proteccion {
  width: 64px;
  height: 64px;
}
.etiqueta-seleccionado {
  border-radius: 30px;
  background: #144733;
  position: absolute;
  color: #fff;
  text-align: center;
  padding: 5px 20px;
  top: -15px;
  left: 25px;
}
.etiqueta-seleccionado-proteccion,
.etiqueta-incluido-pack {
  border-radius: 30px;
  background: #090;
  position: absolute;
  color: #fff;
  text-align: center;
  padding: 5px 20px;
  top: -15px;
  left: 25px;
}
.etiqueta-seleccionado-cobertura {
  border-radius: 30px;
  background: #090;
  position: absolute;
  color: #fff;
  text-align: center;
  padding: 5px 20px;
  top: -15px;
  left: 25px;
}
.tarjeta-cobertura-descripcion div {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 21px */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.items-arriendo > div:nth-child(odd) {
  background-color: #f6f6f6;
}

.items-arriendo > div:nth-child(even) {
  background-color: rgba(216, 216, 216, 0.3);
}
.tarjeta-mas-informacion {
  color: #496251;
  text-align: center;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
}
.titulo-tarjeta {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta-proteccion {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta-cobertura {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.titulo-tarjeta {
  color: #144733;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Gotham Black", Helvetica;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.subtitulo-tarjeta {
  color: #496251;
  font-family: "Gotham Black", Helvetica;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}

.lista-pack-seguros {
  display: flex;
  padding: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
}
.lista-pack-seguros li {
  color: #496251;
  font-family: "Gotham", Helvetica;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 130%; /* 15.6px */
  align-self: stretch;
  list-style: none;
}
.titulo {
  color: #001501;
  font-family: "Gotham", Helvetica;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.card {
  cursor: pointer;
  transition: border-color 0.3s ease;
  border-radius: 10px;
}
.border-primary {
  cursor: pointer;
  transition: border-color 0.3s ease;
  border-radius: 10px;
  border: 2px solid #090;
}
</style>
