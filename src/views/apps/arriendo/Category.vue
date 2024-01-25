<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10 mt-10">
    <!--begin::Col-->
    <div class="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-10 border border-1 border-dark rounded-pill bg-white">
      <Form
                                    id="kt_reservation_form"
                                    novalidate="novalidate"
                                    @submit="saveChanges()"
                                    :validation-schema="reservationValidator"
                                 class="form-group form-group-light d-block">
                        <div class="row g-3 my-4">
                           <div class="col-md-12 col-lg">
                              <div class="position-relative">
                              <Field
                                 v-slot="{ field }"
                                 v-model="reservationDetails.codigoEstacionRetiro"
                                 name="codigoEstacionRetiro"
                                 >
                                 <Prime-Dropdown id="inputtext-estacionRetiro" :options="sucursales" optionValue="stationId" optionLabel="stationName" 
                                 v-bind="field" class="form-control"
                                 @input="field.onInput.forEach((fn) => fn($event.value))"
                                 @change="field.onChange.forEach((fn) => fn($event.value))"
                                 :model-value="field.value"
                                 v-model="reservationDetails.codigoEstacionRetiro"/>
                              </Field>
                                 <div class="fv-plugins-message-container">
                                    <div class="fv-help-block">
                                       <ErrorMessage name="codigoEstacionRetiro" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div class="col-md-6 col-lg">
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
                                          @date-select="dateSelectDesde" class="form-control rounded-end-0"
                                          v-model="reservationDetails.fechaRetiro" :numberOfMonths="3" :manualInput="false" />
                                    </Field>
                                    <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> </div>
                              </div>
                              <div class="col-5">
                                  <Prime-Calendar class="form-control rounded-start-0 border-start-0" v-model="reservationDetails.horaRetiro" :showTime="true" :timeOnly="true" :showButtonBar="true" :stepMinute="30"/>
                                    <span class="icon-inside"><i class="fa-solid fa-chevron-down"></i></span> 
                              </div>
                              </div>
                           </div>
                           <div class="col-md-12 col-lg">
                              <div class="position-relative">
                              <Field
                                             v-slot="{ field }"
                                             v-model="reservationDetails.codigoEstacionDevolucion"
                                             name="codigoEstacionDevolucion"
                                             >
                                             <Prime-Dropdown id="dropdown" :options="sucursales" optionValue="stationId" optionLabel="stationName" 
                                              v-bind="field" class="form-control"
                                             @input="field.onInput.forEach((fn) => fn($event.value))"
                                             @change="field.onChange.forEach((fn) => fn($event.value))"
                                             :model-value="field.value"
                                             v-model="reservationDetails.codigoEstacionDevolucion"/>
                                          </Field>
                              </div>
                           </div>
                           <div class="col-md-6 col-lg">
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
                                                class="form-control rounded-end-0"
                                                v-model="reservationDetails.fechaDevolucion" :numberOfMonths="3" :manualInput="false" />
                                          </Field>
                                    <span class="icon-inside"><i class="far fa-calendar-alt"></i></span> </div>
                              </div>
                              <div class="col-5">
                                 <Prime-Calendar class="form-control rounded-start-0 border-start-0" v-model="reservationDetails.horaDevolucion" :showTime="true" :timeOnly="true" :showButtonBar="true" :stepMinute="30"/>
                                 
                              </div>
                              </div>
                           </div>
                           <div class="col-lg-2 d-grid">
                              <button
                                          type="submit"
                                          id="kt_reservation_submit"
                                          class="btn btn-primary w-100"
                                          ref="submitButton1"
                                          >
                                          <span class="indicator-label">Buscar</span>
                                          <span class="indicator-progress"
                                             >Espere...
                                             <span
                                                class="spinner-border spinner-border-sm align-middle ms-2"
                                             ></span
                                          ></span>
                                          </button>
                           </div>
                        </div><!---->
                        </Form>
    </div>
    <!--end::Col-->
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
   <aside class="col-12 col-lg-4 col-xl-3 ps-0 pt-lg-2">
      <div class="offcanvas offcanvas-start offcanvas-collapse" id="filters-sidebar">
         <div class="offcanvas-header d-flex d-lg-none align-items-center">
            <h2 class="h5 mb-0">Filtros</h2>
            <button class="btn-close" type="button" data-bs-dismiss="offcanvas"></button>
         </div>
         <div class="offcanvas-body py-lg-4">
            <div class="pb-4 mb-2">
               <h3 class="h6">Filtrar resultados</h3>
            </div>
            <div class="pb-1 mb-2 border-bottom">
               <h3 class="h6">Categoría</h3>
               <div class="overflow-auto" data-simplebar="init" data-simplebar-auto-hide="false">
                  <div class="simplebar-wrapper">
                     <div class="simplebar-mask">
                        <div class="simplebar-offset">
                           <div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="height: 100%; overflow: hidden scroll;">
                              <div class="simplebar-content" style="padding: 0px;">
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Economicos y Hatchback" value="Economicos y Hatchback"><label class="form-check-label fs-sm" for="Economicos y Hatchback">Economicos y Hatchback</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Sedan" value="Sedan"><label class="form-check-label fs-sm" for="Sedan">Sedan</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Suv" value="Suv"><label class="form-check-label fs-sm" for="Suv">Suv</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Todo Terreno" value="Todo Terreno"><label class="form-check-label fs-sm" for="Todo Terreno">Todo Terreno</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Camionetas" value="Camionetas"><label class="form-check-label fs-sm" for="Camionetas">Camionetas</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Comerciales" value="Comerciales"><label class="form-check-label fs-sm" for="Comerciales">Comerciales</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="Replacement" value="Replacement"><label class="form-check-label fs-sm" for="Replacement">Replacement</label></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="pb-4 mb-2">
               <h3 class="h6">Capacidad</h3>
               <div class="overflow-auto">
                  <div class="simplebar-wrapper">
                     <div class="simplebar-mask">
                        <div class="simplebar-offset">
                           <div class="simplebar-content-wrapper">
                              <div class="simplebar-content" style="padding: 0px;">
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="0" value="0"><label class="form-check-label fs-sm" for="0">0 pasajeros</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="5" value="5"><label class="form-check-label fs-sm" for="5">5 pasajeros</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="9" value="9"><label class="form-check-label fs-sm" for="9">9 pasajeros</label></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="pb-4 mb-2">
               <h3 class="h6">Características</h3>
               <div class="overflow-auto">
                  <div class="simplebar-wrapper">
                     <div class="simplebar-mask">
                        <div class="simplebar-offset">
                           <div class="simplebar-content-wrapper">
                              <div class="simplebar-content">
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="automatica" value="true"><label class="form-check-label fs-sm" for="automatica">Transmisión automática</label></div>
                                 <div class="form-check-custom form-check-sm my-2"><input class="form-check-input" type="checkbox" id="manual" value="true"><label class="form-check-label fs-sm" for="manual">Transmisión manual</label></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="border-top py-4"><button class="m-2 btn btn-primary" type="button"><i class="fa-solid fa-magnifying-glass me-2"></i>Aplicar</button><button class="btn m-2 btn-sm btn-secondary" type="button"><i class="fa-solid fa-eraser me-2"></i>Limpiar</button></div>
         </div>
      </div>
   </aside>
   <div class="col-xl-9 col-12">
      <div class="d-flex flex-sm-row flex-column align-items-sm-center align-items-stretch my-2">
         <div class="d-flex align-items-center flex-shrink-0">
            <label class="fs-sm me-2 pe-1 text-nowrap" for="sortby"><i class="fi-arrows-sort text-muted mt-n1 me-2"></i>Ordenar por:</label>
            <select class="form-select form-select-sm" id="sortby">
               <option value="asc">Precio menor a mayor</option>
               <option value="desc">Precio mayor a menor</option>
            </select>
         </div>
         <hr class="d-none d-sm-block w-100 mx-4">
         <div class="d-none d-sm-flex align-items-center flex-shrink-0 text-muted"><i class="fi-check-circle me-2"></i><span class="fs-sm mt-n1">24 resultados</span></div>
      </div>
      <div class="collection-product-wrapper">
         <div class="product-top-filter">
            <div class="container-fluid p-0">
               <div class="row">
                  <div class="col-12">
                     <div class="collection-filter container-fluid top-filter filter-bottom-content"></div>
                  </div>
               </div>
            </div>
         </div>
         <div class="product-wrapper-grid j-box list-view" style="opacity: 1;">
            <div class="row mt-10 mb-10 bg-white rounded mb-3 py-5 px-3">
               <div class="col-lg-12 col-12 pb-5 hover-animate mb-5">
                  <div class="autocard row">
                    <div class="col-md-5">
                      <div class="group-5">
                        <div class="d-flex justify-content-end">
                              <div class="alert bg-light p-3 me-5">
                                 <span class="text-primary">Quedan pocas unidades</span>
                              </div>
                        </div>

                        <!--begin::galeria-->
                        <div id="carouselExampleCaptions" class="carousel slide">
                           <div class="carousel-indicators">
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                           </div>
                           <div class="carousel-inner">
                              <div class="carousel-item active">
                                 <div class="overlap-group-wrapper">
                                    <div class="overlap-group-5 position-relative pt-5">
                                       <img class="recurso" src="/media/misc/recurso-1-3.png">
                                       <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                                       <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                                    </div>
                                 </div>
                              </div>
                              <div class="carousel-item">
                                 <div class="overlap-group-wrapper">
                                    <div class="overlap-group-5 position-relative pt-5">
                                       <img class="recurso" src="/media/misc/recurso-1-3.png">
                                       <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                                       <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                                    </div>
                                 </div>
                              </div>
                              <div class="carousel-item">
                                 <div class="overlap-group-wrapper">
                                    <div class="overlap-group-5 position-relative pt-5">
                                       <img class="recurso" src="/media/misc/recurso-1-3.png">
                                       <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                                       <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <!--end::galeria-->
                      </div>
                    </div>
                    <div class="col-md-7">
                      <div class="d-flex flex-row justify-content-between mb-4 pt-5">
                        <h3 class="text-success w-65">Clase 1 / Compacto título en dos líneas lorem ipsum</h3>
                        <div class="d-flex flex-column ms-1 w-35 d-flex justify-content-end">
                           <div class="d-flex flex-column justify-content-end">
                              <div class="unmatched-6">Prepago online</div>
                              <h3 class="fs-1 text-success">$100.000</h3>
                           </div>
                            <div>
                              <span>Pago en sucursal: </span> 
                              <span class="text-primary-active">$150.000</span>
                            </div>
                        </div>
                     </div>
                    <div class="row">
                      <div class="col-6 mb-2">
                        <div class="d-flex flex-row bg-secondary rounded">
                           <img class="bi-luggage m-4" src="/media/misc/bi-luggage-49.svg">
                           <div class="frame-37 d-flex flex-column">
                              <div><small class="text-primary">Capacidad de maletas</small></div>
                              <span class="text-wrapper-13">2 maletas pequeña y 1 maleta grande</span>
                           </div>
                        </div>
                      </div>
                      <div class="col-6  mb-2">
                        <div class="d-flex flex-row bg-secondary rounded">
                           <img class="bi-luggage m-4" src="/media/misc/bi-luggage-49.svg">
                           <div class="frame-37 d-flex flex-column">
                              <div><small class="text-primary">Capacidad de maletas</small></div>
                              <span class="text-wrapper-13">2 maletas pequeña y 1 maleta grande</span>
                           </div>
                        </div>
                      </div>
                    
                    <div class="col-6  mb-2">
                      <div class="d-flex flex-row bg-secondary rounded">
                           <img class="bi-luggage m-4" src="/media/misc/bi-luggage-49.svg">
                           <div class="frame-37 d-flex flex-column">
                              <div><small class="text-primary">Capacidad de maletas</small></div>
                              <span class="text-wrapper-13">2 maletas pequeña y 1 maleta grande</span>
                           </div>
                        </div>
                    </div>
                    <div class="col-6  mb-2">
                        <div class="d-flex flex-row bg-secondary rounded">
                           <img class="bi-luggage m-4" src="/media/misc/bi-luggage-49.svg">
                           <div class="frame-37 d-flex flex-column">
                              <div><small class="text-primary">Capacidad de maletas</small></div>
                              <span class="text-wrapper-13">2 maletas pequeña y 1 maleta grande</span>
                           </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-row justify-content-end align-items-center">
                        <div class="buttons-2 me-5"><div class="label-3 txt-underline">Ver más información...</div></div>
                        <button class="btn btn-primary btn-sm">Reservar</button>
                    </div>
                    </div>
                  </div>
               </div>
               
               
            </div>

            <!--begin::banner-->
            <div class="mas-barato-banner bg-white rounded mb-3 py-5 px-3">
            <h3 class="text-center text-black py-4">¿Buscas reservas más económicas? Te ofrecemos fechas cercanas</h3>
            <div class="row">
              <div class="col-3">
               <div class="border border-1 rounded border-primary ">
                  <div class="div-wrapper"><div class="text-wrapper-18">2 días</div></div>
                  <div class="d-flex flex-row border border-right-0 border-left-0 border-primary justify-content-center"  >
                     <div class="d-flex flex-column justify-content-center me-3">
                        <div class="text-wrapper-19">Miércoles</div>
                        <div class="text-wrapper-20">31/12/2022</div>
                     </div>
                     <div class="w-1 border border-1 border-top-0 border-bottom-0 border-primary my-2"></div>
                     <div class="d-flex flex-column justify-content-center ms-3">
                        <div class="text-wrapper-19">Jueves</div>
                        <div class="text-wrapper-20">01/01/2023</div>
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-center">
                     <span>$200.000</span></div>
                </div>
              </div>
              <div class="col-3">
               <div class="border border-1 rounded border-primary ">
                  <div class="div-wrapper"><div class="text-wrapper-18">2 días</div></div>
                  <div class="d-flex flex-row border border-right-0 border-left-0 border-primary justify-content-center"  >
                     <div class="d-flex flex-column justify-content-center me-3">
                        <div class="text-wrapper-19">Miércoles</div>
                        <div class="text-wrapper-20">31/12/2022</div>
                     </div>
                     <div class="w-1 border border-1 border-top-0 border-bottom-0 border-primary my-2"></div>
                     <div class="d-flex flex-column justify-content-center ms-3">
                        <div class="text-wrapper-19">Jueves</div>
                        <div class="text-wrapper-20">01/01/2023</div>
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-center">
                     <span>$200.000</span></div>
                </div>
              </div>
              <div class="col-3">
               <div class="border border-1 rounded border-primary ">
                  <div class="div-wrapper"><div class="text-wrapper-18">2 días</div></div>
                  <div class="d-flex flex-row border border-right-0 border-left-0 border-primary justify-content-center"  >
                     <div class="d-flex flex-column justify-content-center me-3">
                        <div class="text-wrapper-19">Miércoles</div>
                        <div class="text-wrapper-20">31/12/2022</div>
                     </div>
                     <div class="w-1 border border-1 border-top-0 border-bottom-0 border-primary my-2"></div>
                     <div class="d-flex flex-column justify-content-center ms-3">
                        <div class="text-wrapper-19">Jueves</div>
                        <div class="text-wrapper-20">01/01/2023</div>
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-center">
                     <span>$200.000</span></div>
                </div>
              </div>
              <div class="col-3">
               <div class="border border-1 rounded border-primary ">
                  <div class="div-wrapper"><div class="text-wrapper-18">2 días</div></div>
                  <div class="d-flex flex-row border border-right-0 border-left-0 border-primary justify-content-center"  >
                     <div class="d-flex flex-column justify-content-center me-3">
                        <div class="text-wrapper-19">Miércoles</div>
                        <div class="text-wrapper-20">31/12/2022</div>
                     </div>
                     <div class="w-1 border border-1 border-top-0 border-bottom-0 border-primary my-2"></div>
                     <div class="d-flex flex-column justify-content-center ms-3">
                        <div class="text-wrapper-19">Jueves</div>
                        <div class="text-wrapper-20">01/01/2023</div>
                     </div>
                  </div>
                  <div class="d-flex flex-row justify-content-center">
                     <span>$200.000</span></div>
                </div>
              </div>
            </div>
          </div>
            <!--end::banner-->
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