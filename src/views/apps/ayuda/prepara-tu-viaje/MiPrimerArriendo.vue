<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from "vue";
</script>
<template>
  <main class="mt-15">
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
    <div class="mb-15">
      <div class="titulo-pagina">Mi primer arriendo</div>
      <div class="descripcion-pagina">
        Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.<br />
        Volutpat tortor lorem fusce lorem viverra morbi gravida ornare.
      </div>
    </div>

    <div class="p-20 row">
      <div class="mb-7">
        <div class="sub-titulo-pagina mb-4">Qué necesito</div>
        <div class="descripcion-pagina">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
          Volutpat<br />
          tortor lorem fusce lorem viverra morbi gravida ornare.
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
      </div>
    </div>

    <div class="p-20 row">
      <div class="mb-7">
        <div class="sub-titulo-pagina mb-4">Cómo reservo</div>
        <div class="descripcion-pagina">
          Dui ac sit scelerisque faucibus scelerisque ante. Felis sit lorem sed
          purus proin <br />
          arcu ultricies fringilla.
          https://hertz.cl/primer-arriendo-de-auto-en-hertz Nisl<br />
          mus sit tempor auctor placerat magna dictumst. Ullamcorper odio
          vulputate<br />
          consequat tempus diam elit felis leo. Consectetur nunc nam bibendum
          nullam. <br />
          Gravida libero nulla mattis volutpat eget sed.
        </div>
      </div>

      <div class="row">
        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 1</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>

        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 2</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 6</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
      </div>

      <div class="row">
        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 3</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>

        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 5</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="tarjeta-paso col-md col-sm-12 m-2">
          <div class="tarjeta-paso-nombre mb-3">Paso 6</div>
          <div class="tarjeta-paso-descripcion">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
      </div>
    </div>

    <div class="p-20 fondo-blanco row">
      <div class="mb-7">
        <div class="sub-titulo-pagina mb-4">Cómo pago</div>
        <div class="descripcion-pagina">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
          Volutpat<br />
          tortor lorem fusce lorem viverra morbi gravida ornare.
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
      </div>
    </div>

    <div class="p-20 row">
      <div class="mb-7">
        <div class="sub-titulo-pagina mb-4">Dónde reservo</div>
        <div class="descripcion-pagina">
          Elit orci porta netus adipiscing. Dolor augue nulla aliquam lacus.
          Volutpat<br />
          tortor lorem fusce lorem viverra morbi gravida ornare.
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
        <div class="col-md-6 col-lg-3 tarjeta-caracteristica-transparente">
          <svg
            class="tarjeta-caracteristica-transparente-icono"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <rect width="40" height="40" rx="20" fill="#009900" />
            <path
              d="M20.634 29.625L22.0056 31H11V11.75H16.4867C16.4867 11.3704 16.5582 11.016 16.7011 10.6865C16.844 10.3571 17.0404 10.0635 17.2905 9.80566C17.5405 9.54785 17.8299 9.35091 18.1585 9.21484C18.4871 9.07878 18.8443 9.00716 19.2301 9C19.6088 9 19.9624 9.07161 20.291 9.21484C20.6197 9.35807 20.9126 9.55501 21.1698 9.80566C21.427 10.0563 21.6234 10.3464 21.7592 10.6758C21.8949 11.0052 21.9663 11.3633 21.9735 11.75H27.4602V22.7822L26.0886 24.1572V13.125H24.7169V15.875H13.7434V13.125H12.3717V29.625H20.634ZM15.1151 13.125V14.5H23.3452V13.125H20.6018V11.75C20.6018 11.5566 20.5661 11.3776 20.4946 11.2129C20.4232 11.0482 20.3268 10.9049 20.2053 10.7832C20.0839 10.6615 19.9374 10.5612 19.7659 10.4824C19.5945 10.4036 19.4159 10.3678 19.2301 10.375C19.0372 10.375 18.8586 10.4108 18.6943 10.4824C18.53 10.554 18.3871 10.6507 18.2657 10.7725C18.1442 10.8942 18.0442 11.041 17.9656 11.2129C17.887 11.3848 17.8513 11.5638 17.8584 11.75V13.125H15.1151ZM30 24.6084L24.031 30.6025L21.1483 27.7021L22.1128 26.7354L24.031 28.6475L29.0355 23.6416L30 24.6084Z"
              fill="white"
            />
          </svg>
          <div class="tarjeta-caracteristica-transparente-titulo mt-5">
            Ac pulvinar sit faucibus quisque
          </div>
          <div class="tarjeta-caracteristica-transparente-texto mt-3">
            Risus scelerisque cras et quisque quis. Ullamcorper viverra
            ultricies et aliquam at donec vulputate.
          </div>
        </div>
      </div>
    </div>

    <div class="contenedor-club-beneficios">
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

<style scoped>
.pregunta {
  width: 850px;
  padding: 20px 30px;
  border-radius: 20px;
  background: #fff;
  cursor: pointer;
}
.pregunta svg {
  cursor: pointer;
}
.nombre-pregunta {
  font-size: 16px;
}

.accordion-content {
  transition: 0.5s ease-in-out;
  font-size: 16px;
}

.navbar {
  border-radius: 20px;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
}

.navbar ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar ul li a {
  color: #496251;
  text-decoration: none;
  padding: 11px 20px;
  background-color: transparent;
  transition: background-color 0.3s;
  border-radius: 50px;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%;
}

.navbar ul li a:hover,
.navbar ul li.active a {
  background-color: #090;
  color: white;
}

.contenedor-emergencias {
  background: #fff;
  padding: 76px 80px;
}

.emergencias {
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.05);
  padding: 30px;
}
.emergencias-icono {
  width: 190px;
  height: 190px;
  flex-shrink: 0;
  background: #090;
  border-radius: 50%;
  margin: auto;
}
.emergencias-nombre {
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 33px */
}
.emergencias-descripcion {
  font-size: 16px;
  font-style: normal;
  font-weight: 325;
  line-height: 150%; /* 24px */
}

.emergencias-ver-mas {
  color: #496251;
  font-size: 14px;
  font-style: normal;
  font-weight: 900;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.028px;
  text-decoration-line: underline;
}
</style>
