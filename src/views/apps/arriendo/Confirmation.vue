<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10 mt-10">

    <section class="py-7 py-md-9 px-9 overflow-hidden">
      <div class="container">
        <div class="row justify-content-start">
          <div class="col-12 col-md-8 col-lg-6">

            <!-- Heading -->
            <h2 class="mb-2 text-primary">
              Ofertas destacadas
            </h2>
          </div>
        </div>
        <div class="pasos-arriendo shadow">
          <div class="d-flex flex-row">
            <div class="frame-22">
              <div class="tdesign-form-wrapper bg-primary d-flex align-items-center justify-content-center"><img class="tdesign-form" src="/media/misc/step-1.svg"></div>
              <div class="div-2">
                <div class="text-white">Paso 1</div>
                <div class="text-white">Datos reserva</div>
              </div>
            </div>
            <div class="frame-22">
              <div class="tdesign-form-wrapper bg-primary d-flex align-items-center justify-content-center"><img class="tdesign-form" src="/media/misc/step-2.svg"></div>
              <div class="div-2">
                <div class="text-white">Paso 2</div>
                <div class="text-white">Seleccionar auto</div>
              </div>
            </div>
            <div class="frame-23">
              <div class="tdesign-form-wrapper bg-white d-flex align-items-center justify-content-center"><img class="tdesign-form" src="/media/misc/step-3.svg"></div>
              <div class="div-2">
                <div class="text-wrapper-7">Paso 3</div>
                <div class="text-wrapper-8">Seleccionar extras</div>
              </div>
            </div>
            <div class="frame-23">
              <div class="tdesign-form-wrapper bg-white d-flex align-items-center justify-content-center"><img class="tdesign-form" src="/media/misc/step-3.svg"></div>
              <div class="div-2">
                <div class="text-wrapper-7">Paso 4</div>
                <div class="text-wrapper-8">Verificar y reservar</div>
              </div>
            </div>
          </div>
        </div>

        
          </div>
    </section>


    <!-- Section with icon, title and description -->
<section class="py-8">
  <div class="container py-5">
    <div class="row">
   <div class="col-12">

      <div class="buscador-funcional mb-3">
         <h2>Identificación</h2>
                <div class="d-flex flex-row justify-content-start ">
                    <div class="tab"><div class="text-wrapper-9">Iniciar sesión / Registrarme</div></div>
                </div>
                <div class="bg-white rounded-bottom">
                    <Form
                      id="kt_reservation_form"
                      novalidate="novalidate"
                      @submit="saveChanges()"
                      :validation-schema="reservationValidator"
                    class="form-group form-group-light d-block">
                     <div class="d-flex flex-column p-5 w-80">
                    <h3>Iniciar sesión</h3>
                    <p>Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncus libero. Eu elementum suspendisse sagittis at ut viverra lectus quam. Lacus nibh.</p>
                     </div>
                  <div class="d-flex flex-row p-5 w-80 align-items-end justify-content-between">
                    <div class="w-100 px-3">
                      <p>Correo electrónico</p>
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
                    <div class="w-100 px-3 position-relative">
                      <p>Contraseña<span class="close position-absolute end-0"><button type="button" @click="otraLocacion=false" class="btn-close text-primary btn-sm" aria-label="Close"></button></span></p>
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
                  </div>
                  
                  <div class="d-flex flex-row p-5 w-100 align-items-center justify-content-start">
                    <div class="w-100 px-3 text-left">
                      <button class="btn btn-primary">Iniciar sesión
                      </button>
                    </div>

                  </div>
                    </Form>
                </div>

                <div class="mt-5 bg-white rounded-bottom">
                    <Form
                      id="kt_reservation_form"
                      novalidate="novalidate"
                      @submit="saveChanges()"
                      :validation-schema="reservationValidator"
                    class="form-group form-group-light d-block">
                     <div class="d-flex flex-column p-5 w-80">
                    <h3>Información de pago</h3>
                    <p>Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra semper rhoncus libero. Eu elementum suspendisse sagittis at ut viverra lectus quam. Lacus nibh.</p>
                     </div>
                  <div class="d-flex flex-row p-5 w-80 align-items-start justify-content-between">
                    <div class="w-100 px-3">
                      <p>Correo electrónico</p>
                      <Field
                          v-slot="{ field }"
                          v-model="reservationDetails.codigoEstacionRetiro"
                          name="codigoEstacionRetiro"
                          type="radio"
                        >
                        
                      </Field>
                      <money class="fs-1 text-primary fw-bold">$150.000</money>
                      <p>Total prepago online</p>
                      <img src="/media/misc/webpay.png"/>
                    </div>
                    <div class="w-100 px-3 position-relative">
                      <p>&nbsp;&nbsp;&nbsp;</p>
                      <Field
                          v-slot="{ field }"
                          v-model="reservationDetails.codigoEstacionDevolucion"
                          name="codigoEstacionDevolucion"
                          type="radio"
                        >
                      </Field>
                      <money class="fs-1 text-primary fw-bold">$160.000</money>
                      <p>Total pago en sucursal</p>
                      <description>Ut amet semper blandit amet donec neque. Et egestas mattis mi viverra sempe.</description>
                    </div>
                  </div>
                    </Form>
                </div>

                <div class="mt-5 bg-white rounded-bottom">
                    
                     <div class="d-flex flex-column p-5 w-80">
                    <h3>Terminos y condiciones</h3>
                    <p>*Debes contar con cupo en tu Tarjeta de Crédito para cubrir la Garantía (Varía según vehículo).<br/>
**Tarjetas extranjeras duales crédito/débito podrían presentar problemas en Chile y no serán aceptadas como medio de garantía. Tarjetas virtuales no son aceptadas.<br/>
***Foreign dual credit/debit cards may present problems in Chile and will not be accepted as guarantee form. Virtual cards are not accepted.</p>
                     </div>
               
                </div>

                  <div class="mt-5 bg-white rounded-bottom">
                    
                     <div class="d-flex flex-row p-5 w-80 align-items-center ">
                    <input type="checkbox"/>
                    <p>He leído y acepto los Términos y condiciones incluyendo, en particular, las Condiciones generales de arriendo Europcar, así como la Política de Privacidad Europcar.</p>
                     </div>
               
                </div>


              </div>


   </div>
</div>
  </div>
</section>
<!-- END Section with icon, title and description -->
  </div>
  <!--end::Row-->

  
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import BuscadorReserva from "@/components/modals/forms/BuscadorReserva.vue";
import BuscadorReservaInicial from "@/components/modals/forms/BuscadorReservaInicial.vue";
import moment from "moment";
import { Field, Form } from "vee-validate";

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
  name: "main-home",
  components: {
    BuscadorReserva,
    BuscadorReservaInicial,
    Field, Form
  },
  setup() {
    const visible = ref(false);
    const onSearchForm = (opt)=>{
      visible.value = opt;
    };
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
    return {
      getAssetPath,
      visible,
      onSearchForm,
      reservationDetails
    };
  },
});
</script>
<style scoped>
money{display:block;}

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
    
    width: 100%;

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





.div-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 5px 15px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
    background-color: rgba(176, 201, 184, 1);

}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: -51px;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
}


.w-35 {width:35%;}
.w-65 {width:65%;}
.frame-22 {
    display: flex;
    width: 240px;
    height: 83px;
    align-items: center;
    gap: 15px;
    padding: 0px 15px 0px 0px; 
    border-radius: 20px;
    background-color: var(--bs-app-footer-bg-color);
}
.frame-23 {
    display: flex;
    width: 240px;
    height: 83px;
    align-items: center;
    gap: 15px;
    padding: 0px 15px 0px 0px; 
    border-radius: 20px;
    background-color: #fff;
}
.pasos-arriendo .tdesign-form-wrapper {
    position: relative;
    width: 80px;
    height: 83px;
    border-radius: 20px;
}


.top-15 {top:15%;}
.end-2 {right:2%;}
.filter {
    position: absolute;
    width: 100%;
    height: 600px;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(10, 61, 41, 0.59) 0%, rgba(10, 61, 41, 0) 100%);
}
.filter-true {
    position: absolute;
    width: 100%;
    height: 600px;
    top: 0;
    left: 0;
    border-radius: 20px;
    background: linear-gradient(180deg, rgba(10, 61, 41, 0.99) 14%, rgba(10, 61, 41, 0) 122%);
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
    width: 237px;
    top: 0;
    left: 0;
    position: absolute;
    object-fit: cover;
}
.recurso-2 {
    width: 205px;
    top: 48px;
    left: 90px;
    position: absolute;
    object-fit: cover;
}
.recurso-3 {
    width: 193px;
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




@media(min-width: 992px) {
    .offcanvas-collapse {
        background-color:transparent;
        bottom: auto!important;
        display: block;
        height: auto!important;
        left: auto!important;
        position: static;
        right: auto!important;
        top: auto!important;
        transform: none!important;
        visibility: visible;
        width: 100%!important
    }
}

@media(min-width: 576px) {
    .navbar-expand-sm {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: var(--bs-navbar-nav-link-padding-x);
        padding-left: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-sm .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-sm .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
        display: none
    }

    .navbar-expand-sm .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto!important;
        height: auto!important;
        visibility: visible!important;
        background-color: transparent!important;
        border: 0!important;
        transform: none!important;
        box-shadow: none;
        transition: none
    }

    .navbar-expand-sm .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-sm .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        padding: 0;
        overflow-y: visible
    }
}

@media(min-width: 768px) {
    .navbar-expand-md {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: var(--bs-navbar-nav-link-padding-x);
        padding-left: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-md .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-md .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
        display: none
    }

    .navbar-expand-md .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto!important;
        height: auto!important;
        visibility: visible!important;
        background-color: transparent!important;
        border: 0!important;
        transform: none!important;
        box-shadow: none;
        transition: none
    }

    .navbar-expand-md .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-md .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        padding: 0;
        overflow-y: visible
    }
}

@media(min-width: 992px) {
    .navbar-expand-lg {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: var(--bs-navbar-nav-link-padding-x);
        padding-left: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-lg .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }

    .navbar-expand-lg .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto!important;
        height: auto!important;
        visibility: visible!important;
        background-color: transparent!important;
        border: 0!important;
        transform: none!important;
        box-shadow: none;
        transition: none
    }

    .navbar-expand-lg .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-lg .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        padding: 0;
        overflow-y: visible
    }
}

@media(min-width: 1200px) {
    .navbar-expand-xl {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: var(--bs-navbar-nav-link-padding-x);
        padding-left: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-xl .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-xl .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
        display: none
    }

    .navbar-expand-xl .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto!important;
        height: auto!important;
        visibility: visible!important;
        background-color: transparent!important;
        border: 0!important;
        transform: none!important;
        box-shadow: none;
        transition: none
    }

    .navbar-expand-xl .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-xl .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        padding: 0;
        overflow-y: visible
    }
}

@media(min-width: 1400px) {
    .navbar-expand-xxl {
        flex-wrap:nowrap;
        justify-content: flex-start
    }

    .navbar-expand-xxl .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-xxl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xxl .navbar-nav .nav-link {
        padding-right: var(--bs-navbar-nav-link-padding-x);
        padding-left: var(--bs-navbar-nav-link-padding-x)
    }

    .navbar-expand-xxl .navbar-nav-scroll {
        overflow: visible
    }

    .navbar-expand-xxl .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-xxl .navbar-toggler {
        display: none
    }

    .navbar-expand-xxl .offcanvas {
        position: static;
        z-index: auto;
        flex-grow: 1;
        width: auto!important;
        height: auto!important;
        visibility: visible!important;
        background-color: transparent!important;
        border: 0!important;
        transform: none!important;
        box-shadow: none;
        transition: none
    }

    .navbar-expand-xxl .offcanvas .offcanvas-header {
        display: none
    }

    .navbar-expand-xxl .offcanvas .offcanvas-body {
        display: flex;
        flex-grow: 0;
        padding: 0;
        overflow-y: visible
    }
}

.navbar-expand .offcanvas {
    box-shadow: none
}

</style>
<style>
.form-control .p-inputtext, .p-calendar .p-inputtext {border:0!important;  padding: 0.575rem 1rem;}
.p-calendar {padding: 0.245rem 1rem;
    border-color: transparent;}
</style>