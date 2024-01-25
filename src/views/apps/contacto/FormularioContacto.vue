<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";

import * as Yup from "yup";
const submitButton = ref<HTMLButtonElement | null>(null);
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

const validarNumero = (event) => {
  const charCode = event.which || event.keyCode;

  if (
    (charCode >= 48 && charCode <= 57) || // Números del 0 al 9
    charCode === 8 || // Tecla de retroceso
    charCode === 9 || // Tecla de tabulación
    charCode === 37 || // Flecha izquierda
    charCode === 39 // Flecha derecha
  ) {
    return true;
  } else {
    event.preventDefault();
    return false;
  }
};

const formularioContacto = Yup.object().shape({
  nombreApellido: Yup.string()
    .required("El campo es requerido")
    .label("Nombre")
    .max(150, "Debe tener 150 caracteres como máximo"),
  asunto: Yup.string().required("El campo es requerido").label("Asunto"),
  mensaje: Yup.string()
    .required("El campo es requerido")
    .label("Mensaje")
    .max(500, "Debe tener 500 caracteres como máximo"),
  correo: Yup.string()
    .min(4, "Debe tener mas de 4 caracteres")
    .required("El campo es requerido")
    .email("El correo no es válido")
    .label("Email"),
  telefono: Yup.string()
    .matches(
      /^56\d{9}$/,
      "El número de teléfono debe comenzar con 56 y seguir con 9 dígitos."
    )
    .required("El campo es requerido")
    .label("Teléfono"),
});

const onSubmit = (values) => {
  console.log(values);
};

const asuntoSeleccionado = ref(null);
const asuntos = ref([
  {
    id: 1,
    nombre: "Consulta reservas /Reservations Enquiries",
  },
  {
    id: 2,
    nombre: "Asunto 2",
  },
  {
    id: 3,
    nombre: "Asunto 3",
  },
]);

const enviado = ref(false);
</script>
<template>
  <main class="mt-15">
    <div class="formulario-contacto" v-if="!enviado">
      <div class="mb-15">
        <div class="titulo-pagina">Contacto</div>
        <div class="descripcion-pagina">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
          Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
        </div>
      </div>

      <div class="card" style="">
        <div class="card-body">
          <h5 class="card-title">Formulario de contacto</h5>
          <p class="card-text">
            Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
            Volutpat tortor lorem fusce lorem viverra
          </p>

          <div class="">
            <Form
              @submit="onSubmit"
              class=""
              :validation-schema="formularioContacto"
            >
              <div class="row">
                <div class="col-md-4 mb-5">
                  <label class="">Nombre:</label>

                  <Field
                    class="form-control form-control"
                    type="text"
                    placeholder=""
                    name="nombreApellido"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="nombreApellido" />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <label class="">Email:</label>
                  <Field
                    class="form-control form-control"
                    type="email"
                    placeholder=""
                    name="correo"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="correo" />
                    </div>
                  </div>
                </div>

                <div class="col-md-4 mb-5">
                  <label class="">Teléfono</label>
                  <Field
                    class="form-control form-control"
                    type="phone"
                    placeholder=""
                    name="telefono"
                    autocomplete="off"
                    @keydown="validarNumero"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="telefono" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 mb-5">
                  <label class="">Asunto</label>
                  <Field
                    class="form-select form-select-lg mb-3"
                    name="asunto"
                    as="select"
                  >
                    <option
                      :value="asunto.id"
                      v-for="asunto in asuntos"
                      :key="asunto.id"
                    >
                      {{ asunto.nombre }}
                    </option>
                  </Field>
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="asunto" />
                    </div>
                  </div>
                </div>

                <div class="col-md-8 mb-5">
                  <label class="">Mensaje</label>
                  <Field
                    class="form-control form-control"
                    type="text"
                    as="textarea"
                    cols="30"
                    rows="5"
                    placeholder=""
                    name="mensaje"
                    autocomplete="off"
                  />
                  <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                      <ErrorMessage name="mensaje" />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                class="btn btn-primary rounded-pill fw-bold"
                ref="submitButton"
              >
                Enviar mensaje
              </button>
            </Form>
          </div>
        </div>
      </div>

      <div class="">
        <div class="comunicate-con-nosotros">
          <div>
            <div class="titulo">Comunícate con nosotros</div>
            <div class="descripcion">
              Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
              Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
              Odio non volutpat enim nam. Gravida non id in sit laoreet sed quis
              ultricies.
            </div>
            <div class="llamar">
              <a
                href="tel:6009399000"
                class="btn btn-primary rounded-pill d-flex justify-content-between"
              >
                <span class="llamar-icono"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                  >
                    <path
                      d="M23.71 15.2399C20.66 12.3499 16.54 10.5699 12 10.5699C7.46 10.5699 3.34 12.3499 0.29 15.2399C0.11 15.4199 0 15.6699 0 15.9499C0 16.2299 0.11 16.4799 0.29 16.6599L2.77 19.1399C2.95 19.3199 3.2 19.4299 3.48 19.4299C3.75 19.4299 4 19.3199 4.18 19.1499C4.97 18.4099 5.87 17.7899 6.84 17.2999C7.17 17.1399 7.4 16.7999 7.4 16.3999V13.2999C8.85 12.8199 10.4 12.5699 12 12.5699C13.6 12.5699 15.15 12.8199 16.6 13.2899V16.3899C16.6 16.7799 16.83 17.1299 17.16 17.2899C18.14 17.7799 19.03 18.4099 19.82 19.1399C20 19.3199 20.25 19.4199 20.52 19.4199C20.8 19.4199 21.05 19.3099 21.23 19.1299L23.71 16.6499C23.89 16.4699 24 16.2199 24 15.9399C24 15.6774 23.8957 15.4256 23.71 15.2399ZM21.16 4.82995L19.75 3.41995L16.19 6.96995L17.6 8.37995C17.6 8.37995 21.05 4.85995 21.16 4.82995ZM13 0.569946H11V5.56995H13V0.569946ZM6.4 8.37995L7.81 6.96995L4.26 3.40995L2.84 4.82995C2.95 4.85995 6.4 8.37995 6.4 8.37995Z"
                      fill="white"
                    /></svg
                ></span>
                <span class="llamar-numero fw-bold">600 939 9000</span>
              </a>
            </div>
            <svg
              class="comunicate-con-nosotros-linea"
              xmlns="http://www.w3.org/2000/svg"
              width="1078"
              height="210"
              viewBox="0 0 1078 210"
              fill="none"
            >
              <path
                d="M3 111.792C20.3489 138.164 91.0909 171.801 235.268 95.3799C415.489 -0.146997 587.943 -21.1882 686.598 26.7857C785.254 74.7595 656.302 219.102 817.88 207.319C979.458 195.536 983.342 8.26947 1170.55 41.9353C1320.32 68.868 1260.67 124.557 1258.33 151.349"
                stroke="#B0C9B8"
                stroke-width="4"
                stroke-linecap="square"
                stroke-linejoin="round"
                stroke-dasharray="10 30"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="contenedor-tarjeta-gris">
        <div class="tarjeta-gris-titulo">Emergencias</div>
        <div class="tarjeta-gris-descripcion">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
          Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
        </div>
      </div>

      <div class="d-flex justify-content-between flex-wrap">
        <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/asistencia-en-ruta">
          <span class="tarjeta-caracteristica-icono"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M21.6382 10.5791L20.2132 6.30309C20.0064 5.68067 19.6088 5.13923 19.0768 4.7557C18.5448 4.37216 17.9055 4.16604 17.2496 4.16663H7.75169C7.09585 4.16604 6.4565 4.37216 5.92449 4.7557C5.39248 5.13923 4.99487 5.68067 4.78815 6.30309L3.36315 10.5791C2.98462 10.738 2.66136 11.0049 2.43382 11.3466C2.20629 11.6883 2.0846 12.0895 2.08398 12.5V17.7083C2.08398 18.4927 2.52461 19.1687 3.16628 19.5239C3.15273 19.5927 3.12565 19.6552 3.12565 19.727V21.875C3.12565 22.1512 3.2354 22.4162 3.43075 22.6115C3.6261 22.8069 3.89105 22.9166 4.16732 22.9166H5.20898C5.48525 22.9166 5.7502 22.8069 5.94555 22.6115C6.1409 22.4162 6.25065 22.1512 6.25065 21.875V19.7916H18.7507V21.875C18.7507 22.1512 18.8604 22.4162 19.0557 22.6115C19.2511 22.8069 19.5161 22.9166 19.7923 22.9166H20.834C21.1103 22.9166 21.3752 22.8069 21.5706 22.6115C21.7659 22.4162 21.8757 22.1512 21.8757 21.875V19.727C21.8757 19.6552 21.8486 19.5916 21.835 19.5239C22.1615 19.3459 22.4342 19.0835 22.6245 18.7642C22.8149 18.4448 22.916 18.0801 22.9173 17.7083V12.5C22.9173 11.6364 22.3882 10.8948 21.6382 10.5791ZM4.16732 17.7083V12.5H20.834L20.8361 17.7083H4.16732ZM7.75169 6.24996H17.2486C17.6975 6.24996 18.0954 6.53538 18.2371 6.96246L19.3892 10.4166H5.61211L6.76315 6.96246C6.83226 6.75495 6.96494 6.57447 7.14237 6.44658C7.3198 6.3187 7.53298 6.24991 7.75169 6.24996Z"
                fill="white"
              />
              <path
                d="M6.77148 16.6666C7.63443 16.6666 8.33398 15.9671 8.33398 15.1041C8.33398 14.2412 7.63443 13.5416 6.77148 13.5416C5.90854 13.5416 5.20898 14.2412 5.20898 15.1041C5.20898 15.9671 5.90854 16.6666 6.77148 16.6666Z"
                fill="white"
              />
              <path
                d="M18.2285 16.6666C19.0915 16.6666 19.791 15.9671 19.791 15.1041C19.791 14.2412 19.0915 13.5416 18.2285 13.5416C17.3656 13.5416 16.666 14.2412 16.666 15.1041C16.666 15.9671 17.3656 16.6666 18.2285 16.6666Z"
                fill="white"
              /></svg
          ></span>
          <span class="tarjeta-caracteristica-texto">Asistencia en ruta</span>
        </a>
        <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/robos">
          <span class="tarjeta-caracteristica-icono"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.37565 18.2292C9.95095 18.2292 10.4173 17.7628 10.4173 17.1875C10.4173 16.6122 9.95095 16.1459 9.37565 16.1459C8.80035 16.1459 8.33398 16.6122 8.33398 17.1875C8.33398 17.7628 8.80035 18.2292 9.37565 18.2292Z"
                fill="white"
              />
              <path
                d="M15.6257 18.2292C16.2009 18.2292 16.6673 17.7628 16.6673 17.1875C16.6673 16.6122 16.2009 16.1459 15.6257 16.1459C15.0504 16.1459 14.584 16.6122 14.584 17.1875C14.584 17.7628 15.0504 18.2292 15.6257 18.2292Z"
                fill="white"
              />
              <path
                d="M17.9694 9.99996C17.9486 9.97913 17.9382 9.95829 17.9173 9.92704C17.5215 9.38538 16.959 9.37496 16.959 9.37496H8.04232C8.04232 9.37496 7.47982 9.38538 7.08398 9.93746C7.06315 9.95829 7.05273 9.97913 7.0319 9.99996C6.95898 10.1145 6.88607 10.25 6.83398 10.4166C6.60482 11.1041 6.06315 12.7291 5.20898 15.302V22.0729C5.20898 22.5416 5.57357 22.9166 6.02148 22.9166H6.47982C6.92773 22.9166 7.29232 22.5416 7.29232 22.0729V20.8333H17.709V22.0729C17.709 22.5416 18.0632 22.9166 18.5215 22.9166H18.9798C19.4277 22.9166 19.7923 22.5416 19.7923 22.0729V15.302C18.9382 12.7395 18.3965 11.1041 18.1673 10.4166C18.1152 10.25 18.0423 10.1145 17.9694 9.99996ZM8.67773 11.4583H16.3236L16.5632 12.177L17.0111 13.5416H7.99023L8.67773 11.4583ZM17.709 18.75H7.29232V15.625H17.709V18.75ZM11.2819 3.12496C11.0651 2.51627 10.6655 1.98943 10.1378 1.61651C9.61015 1.24359 8.98014 1.0428 8.33398 1.04163C6.60482 1.04163 5.20898 2.43746 5.20898 4.16663C5.20898 5.88538 6.60482 7.29163 8.33398 7.29163C9.68815 7.29163 10.8444 6.41663 11.2819 5.20829H16.6673V7.29163H18.7507V5.20829H19.7923V3.12496H11.2819ZM8.33398 5.20829C7.76107 5.20829 7.29232 4.73954 7.29232 4.16663C7.29232 3.59371 7.76107 3.12496 8.33398 3.12496C8.9069 3.12496 9.37565 3.59371 9.37565 4.16663C9.37565 4.73954 8.9069 5.20829 8.33398 5.20829Z"
                fill="white"
              /></svg
          ></span>
          <span class="tarjeta-caracteristica-texto">Robos</span>
        </a>

        <a class="tarjeta-caracteristica mt-10" href="/centro-de-ayuda/siniestros">
          <span class="tarjeta-caracteristica-icono"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <g clip-path="url(#clip0_3173_15657)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5007 1.87504C6.63278 1.87504 1.87567 6.63215 1.87567 12.5L1.87566 12.5014C1.87198 14.8473 2.64848 17.1279 4.08297 18.9842C4.36439 19.3484 4.29731 19.8718 3.93314 20.1532C3.56897 20.4346 3.04561 20.3675 2.76419 20.0033C1.10375 17.8547 0.204878 15.2149 0.208998 12.4994C0.208999 12.4992 0.208999 12.499 0.209 12.4987L1.04233 12.5H0.208998C0.208998 12.4998 0.208998 12.4996 0.208998 12.4994C0.209347 5.71133 5.71252 0.208374 12.5007 0.208374C19.289 0.208374 24.7923 5.71168 24.7923 12.5C24.7923 15.3239 23.8393 17.9273 22.2375 20.0029C21.9563 20.3673 21.433 20.4347 21.0686 20.1535C20.7043 19.8723 20.6368 19.349 20.918 18.9847C22.3026 17.1905 23.1257 14.9428 23.1257 12.5C23.1257 6.63215 18.3686 1.87504 12.5007 1.87504Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 6.04167C8.93316 6.04167 6.04168 8.93315 6.04168 12.5L6.04168 12.5014C6.03954 13.7629 6.40881 14.997 7.10343 16.05C7.35687 16.4341 7.25088 16.951 6.8667 17.2045C6.48253 17.4579 5.96565 17.3519 5.71221 16.9677C4.83752 15.6418 4.37246 14.0877 4.37501 12.4993C4.37539 8.0123 8.01292 4.375 12.5 4.375C16.9873 4.375 20.625 8.01268 20.625 12.5C20.625 14.1487 20.1333 15.685 19.288 16.9675C19.0347 17.3517 18.5179 17.4579 18.1336 17.2046C17.7493 16.9514 17.6431 16.4345 17.8964 16.0502C18.5678 15.0317 18.9583 13.8128 18.9583 12.5C18.9583 8.93315 16.0669 6.04167 12.5 6.04167ZM4.37501 12.4993C4.37501 12.4991 4.37501 12.4988 4.37501 12.4986L5.20834 12.5H4.37501C4.37501 12.4998 4.37501 12.4995 4.37501 12.4993Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9114 15.0358C12.2369 14.7104 12.7645 14.7104 13.0899 15.0358L21.4233 23.3692C21.6616 23.6075 21.7329 23.9659 21.6039 24.2773C21.4749 24.5887 21.1711 24.7917 20.834 24.7917H4.16734C3.83029 24.7917 3.52643 24.5887 3.39744 24.2773C3.26846 23.9659 3.33975 23.6075 3.57809 23.3692L11.9114 15.0358ZM6.17919 23.1251H18.8222L12.5007 16.8036L6.17919 23.1251Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3173_15657">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs></svg
          ></span>
          <span class="tarjeta-caracteristica-texto">Siniestros</span>
        </a>
      </div>
    </div>
    <div class="contenedor-mensaje-enviado" v-if="enviado">
      <div class="mensaje-enviado">
        <div class="mensaje-enviado-titulo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M17 30H31M17 36H24M38 4H10C9.46957 4 8.96086 4.21071 8.58579 4.58579C8.21071 4.96086 8 5.46957 8 6V42C8 42.5304 8.21071 43.0391 8.58579 43.4142C8.96086 43.7893 9.46957 44 10 44H38C38.5304 44 39.0391 43.7893 39.4142 43.4142C39.7893 43.0391 40 42.5304 40 42V6C40 5.46957 39.7893 4.96086 39.4142 4.58579C39.0391 4.21071 38.5304 4 38 4Z"
              stroke="#7AB800"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M30 13L22 21L18 17"
              stroke="#7AB800"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mensaje enviado exitosamente
        </div>
        <div class="mensaje-enviado-mensaje">
          Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra
          semper rhoncus libero. Eu elementum suspendisse sagittis at ut viverra
          lectus quam. Lacus nibh.
        </div>
        <a class="btn btn-primary rounded-pill fw-bold mt-7 px-10" href="/home">
          Ir al Inicio
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-title {
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}
.card-text {
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%;
}
.form-control {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #d8d8d8;
  background: #fff;
}

Form label {
  color: #496251;
  font-size: 12px;
  font-style: normal;
  font-weight: 325;
  line-height: 110%;
}

.comunicate-con-nosotros {
  margin-top: 100px;
  position: relative;
  padding: 30px 40px;
  border-radius: 20px;

  background: linear-gradient(90deg, #144733 28.64%, rgba(20, 71, 51, 0) 86.94%),
    url("/media/europcar/img-comunicate.png");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;

  height: 352px;
  flex-shrink: 0;
}
.comunicate-con-nosotros .titulo {
  color: #fff;
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  letter-spacing: -0.4px;
}
.comunicate-con-nosotros .descripcion {
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 24px */
  width: 600px;
  margin-top: 20px;
}
.comunicate-con-nosotros .llamar a {
  margin-top: 20px;
  height: 48px;
  padding: 0px 30px;
  width: 170px;
  align-items: center;
  position: relative;
}
.llamar-icono {
  top: -1px;
  position: absolute;
  padding: 12px;
  background: #090;
  border-radius: 50%;
  border: 2px solid #144733;
  left: -2px;
}
.llamar-icono svg {
  fill: #fff;
}

.llamar-numero {
  position: absolute;
  right: 20px;
}
.comunicate-con-nosotros-linea {
  position: absolute;
  right: 0px;
  bottom: -90px;
}

.btn-primary::hover {
  background: #090 !important;
}


.contenedor-mensaje-enviado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  flex-direction: column;
}
.mensaje-enviado {
  width: 800px;
}
.mensaje-enviado-titulo {
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
  letter-spacing: -0.4px;
}
.mensaje-enviado-mensaje {
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%;
  width: 560px;
  margin-top: 30px;
}
</style>
