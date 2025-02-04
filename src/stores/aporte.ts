import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IAporte {
		id: string;
    montoAporte: string;
    compania: string;
    comuna: string;
    cantidad: string;
    fecha: string;
    url:string;
}

export const useAporteStore = defineStore("aporte", () => {
  const aporteErrors = ref({});
  const currentAporte = ref<IAporte>({} as IAporte);
  const allAportes = ref<IAporte[]>([] as Array<IAporte>);

  function setAporte(aporte: IAporte) {
    currentAporte.value = aporte;
    aporteErrors.value = {};
  }

  function setAportes(aportes: IAporte[]) {
    allAportes.value = aportes;
    aporteErrors.value = {};
  }

  function setAporteError(error: any) {
    aporteErrors.value = { ...error };
  }

  function getAportes() {
    return ApiService.get("aporte/v1/aportes")
      .then(({ data }) => {
        setAporte(data);
      })
      .catch(({ response }) => {
        setAporteError(response.data.errors);
		throw new Error();
      });
  }

  function getAporte(comuna: string) {
    return ApiService.get("aporte/v1/aportes", comuna)
      .then(({ data }) => {
        setAportes(data);
      })
      .catch(({ response }) => {
        setAporteError(response.data.errors);
		throw new Error();
      });
  }

  function createAporte() {
    return ApiService.get("soap/aporte")
      .then(({ data }) => {
        setAporte(data);
      })
      .catch(({ response }) => {
        setAporteError(response.data.errors);
		throw new Error();
      });
  }



  return {
    aporteErrors,
    currentAporte,
    allAportes,
    getAportes,
    getAporte,
    createAporte
  };
});