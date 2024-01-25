<template>
  <div class="main-wrapper">
      <!-- start page content -->
      <div class="page-content">
      <!-- begin:: Header Mobile -->
      <HeaderMobile></HeaderMobile>
      <!-- end:: Header Mobile -->
      

            <!-- begin::Body -->
      

          <!-- begin:: Content -->

            <!-- begin:: Content Body -->
                    <transition name="fade-in-up">
                      <router-view />
                    </transition>
                    <!-- end:: Content Body -->
                    <Footer></Footer>
    
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent
} from "vue";
import HeaderMobile from "@/layouts/header/HeaderPublic.vue";
import Footer from "@/layouts/footer/Footer.vue";

export default defineComponent({
  name: "default-layout",
  components: {
    HeaderMobile,
    Footer
  },
});
</script>