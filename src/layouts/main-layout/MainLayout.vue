<template>
  <!--begin::App-->
  <KTHeader />

  <KTSidebar />

  <KTContent></KTContent>
  <KTFooter />
  <KTDrawers/>
  <KTScrollTop />
  <KTModals />
  <!--KTCustomize /-->
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
import KTSidebar from "@/layouts/main-layout/sidebar/Sidebar.vue";
import KTContent from "@/layouts/main-layout/content/Content.vue";
import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
import KTDrawers from "@/layouts/main-layout/drawers/Drawers.vue";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import KTCustomize from "@/layouts/main-layout/extras/Customize.vue";
import { useRoute } from "vue-router";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import LayoutService from "@/core/services/LayoutService";

export default defineComponent({
  name: "default-layout",
  components: {
    KTHeader,
    KTSidebar,
    KTContent,
    KTFooter,
    KTDrawers,
    KTScrollTop,
    KTCustomize,
  },
  setup() {
    const route = useRoute();
 
    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );
  },
});
</script>
