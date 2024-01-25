import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";

export const useAnioStore = defineStore("anio", () => {
  const allAnios = ref<number[]>([] as Array<number>);

  function setAnios(anios: number[]) {
    allAnios.value = anios;
  }

  function getAnios() {
    return ApiService.get("soap/anios")
      .then(({ data }) => {
        setAnios(data);
      });
  }

  


  return {
    allAnios,
    getAnios,
 };
});




