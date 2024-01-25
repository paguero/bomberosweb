<template>
  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10">
    <!--begin::Col-->
    <div class="col-md-12 col-lg-12 col-xl-12 col-xxl-12 mb-md-5 mb-xl-10">
      <div class="hero">
            <div class="overlap-6 position-relative">
              <img class="w-100" src="/media/misc/hero.png">
              <div class="filter" :class="`filter-${visible}`"></div>
              <img class="vector-3" src="/media/misc/layout/vector.svg">
              <span v-if="visible" class="close position-absolute end-2 top-15" data-bs-theme="dark">
                  <button type="button" @click="visible=false" class="btn-close text-white" aria-label="Close"></button></span>

              <div class="frame-26" v-if="!visible">
                <p class="h2 text-white text-wrapper">Planifica tu próximo viaje con Europcar</p>
                <div class="frame-27">
                  <p class="h3 text-white text-wrapper">
                    Con la seguridad que necesitas lit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
                  </p>
                  <div class="btn btn-success"><div class="label-3">CTA aquí</div></div>
                </div>
              </div>
              <BuscadorReservaInicial v-if="!visible" @onSearchForm="onSearchForm"/>
              <BuscadorReserva v-if="visible"/>
              {{visible}}
            </div>
      </div>
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
        <div class="row">
          <div class="col-4">

              <!--Begin:: Card -->
                <div class="card border-0 pt-5">
                  <div class="card-body">
                    <div class="d-flex flex-row">
                      <p class="mb-1">Precio desde</p>
                      <h4 class="mt-3 ms-5 fs-2">$100.000 /día</h4>
                    </div>
                    <div class="date d-flex flex-row align-items-center">
                      <div class="d-flex flex-row align-items-center">
                        <i class="fa-regular fa-calendar"></i>
                        <div class="text">01/01/2024</div>
                      </div>
                      <div class="text">-</div>
                      <div class="d-flex flex-row">
                        <div class="text">20/01/2024</div>
                      </div>
                  </div>
                  <!-- Image -->
                  </div>
                  <div class="overlap-group-5 position-relative pt-5">
                    <img class="recurso" src="/media/misc/recurso-1-3.png">
                    <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                    <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                  </div>
                  <!-- Body -->
                  <div class="card-body">
                    <!-- Heading -->
                    <div class="row mb-2">
                      <div class="col">
                        <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <!--End::card-->
          </div>

            <div class="col-4">

            <!--Begin:: Card -->
                <div class="card border-0 pt-5">
                  <div class="card-body">
                    <div class="d-flex flex-row">
                      <p class="mb-1">Precio desde</p>
                      <h4 class="mt-3 ms-5 fs-2">$100.000 /día</h4>
                    </div>
                    <div class="date d-flex flex-row align-items-center">
                      <div class="d-flex flex-row align-items-center">
                        <i class="fa-regular fa-calendar"></i>
                        <div class="text">01/01/2024</div>
                      </div>
                      <div class="text">-</div>
                      <div class="d-flex flex-row">
                        <div class="text">20/01/2024</div>
                      </div>
                  </div>
                  <!-- Image -->
                  </div>
                  <div class="overlap-group-5 position-relative pt-5">
                    <img class="recurso" src="/media/misc/recurso-1-3.png">
                    <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                    <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                  </div>
                  <!-- Body -->
                  <div class="card-body">
                    <!-- Heading -->
                    <div class="row mb-2">
                      <div class="col">
                        <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <!--End::card-->
          </div>
          <div class="col-4">

            <!--Begin:: Card -->
                <div class="card border-0 pt-5">
                  <div class="card-body">
                    <div class="d-flex flex-row">
                      <p class="mb-1">Precio desde</p>
                      <h4 class="mt-3 ms-5 fs-2">$100.000 /día</h4>
                    </div>
                    <div class="date d-flex flex-row align-items-center">
                      <div class="d-flex flex-row align-items-center">
                        <i class="fa-regular fa-calendar"></i>
                        <div class="text">01/01/2024</div>
                      </div>
                      <div class="text">-</div>
                      <div class="d-flex flex-row">
                        <div class="text">20/01/2024</div>
                      </div>
                  </div>
                  <!-- Image -->
                  </div>
                  <div class="overlap-group-5 position-relative pt-5">
                    <img class="recurso" src="/media/misc/recurso-1-3.png">
                    <img class="recurso-2" src="/media/misc/recurso-2-3.png">
                    <img class="recurso-3" src="/media/misc/recurso-3-3.png">
                  </div>
                  <!-- Body -->
                  <div class="card-body">
                    <!-- Heading -->
                    <div class="row mb-2">
                      <div class="col">
                        <h5 class="mb-0">Lorem ipsum dolor sit amet consectetur</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <!--End::card-->
          </div>
              
              </div>
          </div>
    </section>


    <!-- Section with icon, title and description -->
<section class="py-8">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <div class="p-3 text-center">
          <h5 class="mt-4">Alianzas</h5>
          <p>Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.</p>
          <button class="btn btn-primary">Ver Todas</button>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="p-3 text-center">
          <div class="icon icon-shape icon-md bg-gradient-danger shadow mx-auto">
            <img src="/media/logos/bice.svg"/>
          </div>
          <h5 class="mt-4">Banco BICE</h5>
          <p>Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="p-3 text-center">
          <div class="icon icon-shape icon-md bg-gradient-danger shadow mx-auto">
            <img src="/media/logos/bice.svg"/>
          </div>
          <h5 class="mt-4">Banco BICE</h5>
          <p>Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.</p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-6">
        <div class="p-3 text-center">
          <div class="icon icon-shape icon-md bg-gradient-danger shadow mx-auto">
            <img src="/media/logos/bice.svg"/>
          </div>
          <h5 class="mt-4">Banco BICE</h5>
          <p>Risus scelerisque cras et quisque quis. Ullamcorper viverra ultricies et aliquam at donec vulputate.</p>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- END Section with icon, title and description -->
<section class="d-block" style="min-height:550px">
  <div class="container py-5">
    <div class="row align-items-center position-relative">
      <div class="gettyimages z-index-0"></div>
      <div class="col-md-4 mb-md-0 mb-4 position-relative">
        <div class="mt-5 pt-5 position-absolute top-100">
          <h3 class="text-gradient text-primary mb-0">Club de beneficios</h3>
          <p class="lead mb-md-5 mb-4">
            Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus. Volutpat tortor lorem fusce lorem viverra morbi gravida ornare. Odio non volutpat enim nam. Gravida non id in sit laoreet sed quis ultricies.
          </p>
          <div class="d-flex flex-row justify-content-between">
            <button class="btn btn-primary">XX</button>
            <button class="btn btn-secondary">XX</button>
          </div>
        </div>
      </div>
      <div class="col-md-8  position-relative">
        <div class="text-center z-index-1 position-absolute">
          <img src="/media/misc/beneficios.png" alt="img-blur-shadow" class="img-fluid border-radius-lg max-height-600">
        </div>
      </div>
      <img class="vector z-index-2" src="/media/misc/vector-17.svg"/>
    </div>
  </div>
</section>


<section>
  <div class="container py-5">
    <div class="row align-items-center">
      <div class="col-12">
        <img  class="img-fluid" src="/media/misc/conductor.png"/>
      </div>
    </div>
  </div>
</section>

<!-- START Teams w/ 4 cards in a row w/ image & name & function -->
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-center">
        <h6 class="text-gradient text-warning">Prepara tu viaje</h6>
      </div>
    </div>
    <div class="row mt-md-5 mt-4">
      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
          <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><img class="vector-6" src="/media/misc/primer-viaje.svg"></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Mi primer viaje</div></div>
            </div>
      </div>

      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><img class="vector-6" src="/media/misc/destinos.svg"></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Destinos</div></div>
            </div>
      </div>

      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><img class="vector-6" src="/media/misc/tips.svg"></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Tips de viajes</div></div>
            </div>
      </div>
    </div><div class="row mt-md-5 mt-4 text-center">
      <div class="col-lg-6 col-6 mb-lg-0 mb-4 align-items-center">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><img class="vector-6" src="/media/misc/extras.svg"></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Extras y Adicionales</div></div>
            </div>
      </div>
      <div class="col-lg-6 col-6 mb-lg-0 mb-4 align-items-center">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><img class="vector-6" src="/media/misc/proteccion.svg"></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Protección</div></div>
            </div>
      </div>
    </div>
  </div>
</section>

<!-- START Testimonials w/ 3 cards & dark background -->
<section class="py-5 bg-gradient-dark position-relative overflow-hidden">
  <img src="/media/misc/chile.svg" class="position-absolute opacity-6 h-100 top-0 left-0 d-md-block d-none" alt="">
  <img src="/media/misc/cobertura-nacional.png" class="position-absolute opacity-6 h-100 top-0 d-md-block d-none" alt="">
  <div class="container pt-6 pb-5 position-relative z-index-3">
    <div class="row align-items-center" style="min-height:500px ">
      <div class="col-4 offset-8">
        <div class="">
        <h2 class="text-primary mb-3">Cobertura nacional</h2>
        <h5 class="text-secondary font-weight-light">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus. Volutpat tortor lorem fusce lorem viverra morbi gravida ornare. Odio non volutpat enim nam. Gravida non id in sit laoreet sed quis ultricies.
        </h5>
        <button class="btn btn-primary">Ver más</button>
        </div>
      </div>
    </div>
  </div>
  
</section>
<!-- END Testimonials w/ 3 cards & dark background -->
<!-- START Teams w/ 4 cards in a row w/ image & name & function -->
<section class="py-5 centro-ayuda">
  <div class="container">
    <div class="row">
      <div class="col-md-8 mx-auto text-center">
        <h6 class="text-gradient text-warning">Centro de Ayuda</h6>
      </div>
    </div>
    <div class="row mt-md-5 mt-4">
      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
          <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><i class="fa-solid fa-car-rear"></i></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Asistencia en ruta</div></div>
            </div>
      </div>

      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><i class="fa-solid fa-car-on"></i></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Robos</div></div>
            </div>
      </div>

      <div class="col-lg-4 col-6 mb-lg-0 mb-4">
        <div class="acceso-directo">
              <div class="frame-47">
                <div class="img-wrapper d-flex justify-content-center align-items-center"><i class="fa-solid fa-car-burst"></i></div>
              </div>
              <div class="frame-48"><div class="unmatched-13">Siniestros</div></div>
            </div>
      </div>
    </div>
  </div>
</section>

<!-- END Teams w/ 4 cards w/ image on left & descriptio/social link on right -->
<section class="py-4">
  <div class="container">
    <h3 class="text-primary-light-dark">Noticias</h3>
    <div class="row justify-space-between py-2">
      <div class="col-4 mx-auto">
        <div class="card shadow-lg">
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <a href="javascript:;" class="d-block">
              <img src="/media/misc/noticia1.png" class="img-fluid border-radius-lg">
            </a>
          </div>

          <div class="card-body pt-3">
            <span class="text-uppercase text-xs font-weight-bold my-2">03 mayo 2023</span>
            <a href="javascript:;" class="text-darker card-title h5 d-block">
             Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso
            </a>
            
            <div class="d-none author align-items-center">
              <img src="../../assets/img/marie.jpg" alt="..." class="avatar shadow">
              <div class="name ps-3">
                <span>Mathew Glock</span>
                <div class="stats">
                  <small>Posted on 28 February</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mx-auto">
        <div class="card shadow-lg">
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <a href="javascript:;" class="d-block">
              <img src="/media/misc/noticia2.png" class="img-fluid border-radius-lg">
            </a>
          </div>

          <div class="card-body pt-3">
            <span class="text-uppercase text-xs font-weight-bold my-2">03 mayo 2023</span>
            <a href="javascript:;" class="text-darker card-title h5 d-block">
             Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso
            </a>
            
            <div class="d-none author align-items-center">
              <img src="../../assets/img/marie.jpg" alt="..." class="avatar shadow">
              <div class="name ps-3">
                <span>Mathew Glock</span>
                <div class="stats">
                  <small>Posted on 28 February</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 mx-auto">
        <div class="card shadow-lg">
          <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
            <a href="javascript:;" class="d-block">
              <img src="/media/misc/noticia3.png" class="img-fluid border-radius-lg">
            </a>
          </div>

          <div class="card-body pt-3">
            <span class="text-uppercase text-xs font-weight-bold my-2">03 mayo 2023</span>
            <a href="javascript:;" class="text-darker card-title h5 d-block">
             Ut libero dignissim cras vitae ultrices integer vitae neque erat vicso
            </a>
            
            <div class="d-none author align-items-center">
              <img src="../../assets/img/marie.jpg" alt="..." class="avatar shadow">
              <div class="name ps-3">
                <span>Mathew Glock</span>
                <div class="stats">
                  <small>Posted on 28 February</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <!--begin::Col-->
    <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10 d-none">
      <Widget1
        className="h-md-50 mb-5 mb-xl-10"
        description="Active Projects"
        bgColor="#F1416C"
        :bgImage="getAssetPath('media/patterns/vector-1.png')"
      />

      <Widget2
        className="h-md-50 mb-5 mb-xl-10"
        :icon="false"
        stats="357"
        description="Professionals"
        labelColor="dark"
        textColor="gray-300"
      />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10 d-none">
      <Widget3 className="h-md-50 mb-5 mb-xl-10" :chartSize="70" />

      <Widget4 className="h-lg-50" />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xxl-6 d-none">
      <Widget5 className="h-md-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row gx-5 gx-xl-10 d-none">
    <!--begin::Col-->
    <div class="col-xxl-6 mb-5 mb-xl-10">
      <Widget6 className="h-xl-100" height="275px" />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6 mb-5 mb-xl-10">
      <Widget7 className="h-xl-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10 d-none">
    <!--begin::Col-->
    <div class="col-xxl-6">
      <Widget8
        className="h-xl-100"
        :image="getAssetPath('media/stock/600x600/img-65.jpg')"
      />
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-6">
      <Widget9 className="h-lg-100" :height="300" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->

  <!--begin::Row-->
  <div class="row g-5 g-xl-10 mb-5 mb-xl-10 d-none">
    <!--begin::Col-->
    <div class="col-xl-4">
      <MixedWidget5
        widget-classes="card-xl-stretch mb-xl-8 h-md-100"
        chart-color="primary"
        chart-height="150"
      ></MixedWidget5>
    </div>
    <!--end::Col-->

    <!--begin::Col-->
    <div class="col-xl-8">
      <Widget10 className="h-md-100" />
    </div>
    <!--end::Col-->
  </div>
  <!--end::Row-->
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import { getAssetPath } from "@/core/helpers/assets";
import BuscadorReserva from "@/components/modals/forms/BuscadorReserva.vue";
import BuscadorReservaInicial from "@/components/modals/forms/BuscadorReservaInicial.vue";
import Widget1 from "@/components/dashboard-default-widgets/Widget1.vue";
import Widget2 from "@/components/dashboard-default-widgets/Widget2.vue";
import Widget3 from "@/components/dashboard-default-widgets/Widget3.vue";
import Widget4 from "@/components/dashboard-default-widgets/Widget4.vue";
import Widget5 from "@/components/dashboard-default-widgets/Widget5.vue";
import Widget6 from "@/components/dashboard-default-widgets/Widget6.vue";
import Widget7 from "@/components/dashboard-default-widgets/Widget7.vue";
import Widget8 from "@/components/dashboard-default-widgets/Widget8.vue";
import Widget9 from "@/components/dashboard-default-widgets/Widget9.vue";
import Widget10 from "@/components/dashboard-default-widgets/Widget10.vue";
import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "main-home",
  components: {
    BuscadorReserva,
    BuscadorReservaInicial,
    Widget1,
    Widget2,
    Widget3,
    Widget4,
    Widget5,
    Widget6,
    Widget7,
    Widget8,
    Widget9,
    Widget10,
    MixedWidget5,
    Field
  },
  setup() {
    const visible = ref(false);
    const onSearchForm = (opt)=>{
      visible.value = opt;
    };
    return {
      getAssetPath,
      visible,
      onSearchForm
    };
  },
});
</script>
<style scoped>
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
<style>
.form-control .p-inputtext, .p-calendar .p-inputtext {border:0!important;  padding: 0.575rem 1rem;}
.p-calendar {padding: 0.245rem 1rem;
    border-color: transparent;}
</style>