import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IPrimaSoap {
		codigoCampania: string;
codigoTipoVehiculo: string;
primaTecnica: string;
primaMinima: string;
primaMaxima: string;
activo: string;

}

export const usePrimaSoapStore = defineStore("primaSoap", () => {
  const primaSoapErrors = ref({});
  const currentPrimaSoap = ref<IPrimaSoap>({} as IPrimaSoap);
  const allPrimaSoaps = ref<IPrimaSoap[]>([] as Array<IPrimaSoap>);
  const allPrimasVigencia = ref<IPrimaSoap[]>([] as Array<IPrimaSoap>);
  const currentPrimaVigencia = ref<IPrimaSoap>({} as IPrimaSoap);

  function setPrimaSoap(primaSoap: IPrimaSoap) {
    currentPrimaSoap.value = primaSoap;
    primaSoapErrors.value = {};
  }

  function setPrimaSoaps(primaSoaps: IPrimaSoap[]) {
    allPrimaSoaps.value = primaSoaps;
    primaSoapErrors.value = {};
  }

  function setPrimaVigencia(primaSoap: IPrimaSoap[]) {
    allPrimasVigencia.value = primaSoap;
    primaSoapErrors.value = {};
  }


  function setPrimaSoapError(error: any) {
    primaSoapErrors.value = { ...error };
  }

  function getPrimaSoap(campania: string, tipoVehiculo: string) {
    return ApiService.get(`primasoap/v1/primaSoaps/${campania}/${tipoVehiculo}`)
      .then(({ data }) => {
        setPrimaSoap(data[0]);
      })
      .catch(({ response }) => {
        setPrimaSoapError(response.data.errores);
		throw new Error();
      });
  }

  function getPrimaSoapExtendida(tipoVehiculo: string) {
    return ApiService.get(`primasoap/v1/primaSoaps/extendida/${tipoVehiculo}`)
      .then(({ data }) => {
        setPrimaVigencia(data);
      })
      .catch(({ response }) => {
        setPrimaSoapError(response.data.errores);
		throw new Error();
      });
  }


  function createPrimaSoap(params: IPrimaSoap) {
    return ApiService.post("primaSoap", params)
      .then(({ data }) => {
        setPrimaSoap(data);
      })
      .catch(({ response }) => {
        setPrimaSoapError(response.data.errores);
		throw new Error();
      });
  }

  function updatePrimaSoap(params: IPrimaSoap) {
    return ApiService.put(`primaSoap/${params.codigoCampania}`, params)
      .then(({ data }) => {
        setPrimaSoap(data);
      })
      .catch(({ response }) => {
        setPrimaSoapError(response.data.errores);
		throw new Error();
      });
  }

  function deletePrimaSoap(id: string|undefined) {
    return ApiService.delete(`primaSoap/${id}`)
      .then(({ data }) => {
        setPrimaSoap(data);
      })
      .catch(({ response }) => {
        setPrimaSoapError(response.data.errores);
		throw new Error();
      });
  }


  return {
    primaSoapErrors,
    currentPrimaSoap,
    currentPrimaVigencia,
    allPrimaSoaps,
    allPrimasVigencia,
	getPrimaSoap,
	createPrimaSoap,
	updatePrimaSoap,
    deletePrimaSoap,
    getPrimaSoapExtendida
  };
});




