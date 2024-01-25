<template>
  <!--begin::Menu-->
  <div
    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-175px"
    data-kt-menu="true"
    data-kt-element="language-mode-menu"
  >
    <!--begin::Menu item-->
    <div class="menu-item px-3" v-for="country in countries" v-bind:key="country">
      <a
        @click="setLang(`${country.lenguajeId}`)"
        href="#"
        class="menu-link d-flex px-5"
        :class="{ active: currentLanguage === `${country.lenguajeId}` }"
      >
        <span class="symbol symbol-20px me-4">
          <img
            class="rounded-1"
            :src="country.imagen"
            :alt="country.nombre"
          />
        </span>
        {{country.nombre}}
      </a>
    </div>
    <!--end::Menu item-->
  </div>
  <!--end::Menu-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { ref, computed, defineComponent, watch } from "vue";
import type { PropType } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useConfigStore } from "@/stores/config";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useLenguajeStore } from "@/stores/lenguaje";
import type { ILenguaje } from "@/stores/lenguaje";

export default defineComponent({
  name: "kt-language-switcher",
  component: {},
  props: {
    countries: {
      type: Object as PropType<Array<ILenguaje>>,
      required: true
    }
  },
  setup(props) {
    const storeTheme = useThemeStore();
    const storeConfig = useConfigStore();
    const route = useRoute();
    const i18n = useI18n();
    const countries = ref();
    watch(() => props.countries, (newValue) => {
      countries.value = newValue;
    });
    const setLang = (lang: string) => {
      localStorage.setItem("lang", lang);
      i18n.locale.value = lang;
    };

    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    const currentLangugeLocale = computed(() => {
      return countries[i18n.locale.value as keyof typeof countries];
    });
    

    const path = computed(() => route.path);

    const setMode = (mode: "dark" | "light" | "system") => {
      let configMode = mode;

      storeConfig.setLayoutConfigProperty("general.mode", configMode);

      storeTheme.setThemeMode(configMode);
    };

    return {
      setMode,
      path,
      getAssetPath,
      setLang,
      currentLanguage,
      currentLangugeLocale,
      countries
    };
  },
});
</script>
