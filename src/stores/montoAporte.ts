import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IMontoAporte {
		monto: string;
activo: string;
inicial: string;
defecto: string;

}

export const useMontoAporteStore = defineStore("montoAporte", () => {
  const montoAporteErrors = ref({});
  const currentMontoAporte = ref<IMontoAporte>({} as IMontoAporte);
  const allMontoAportes = ref<IMontoAporte[]>([] as Array<IMontoAporte>);

  function setMontoAporte(montoAporte: IMontoAporte) {
    currentMontoAporte.value = montoAporte;
    montoAporteErrors.value = {};
  }

  function setMontoAportes(montoAportes: IMontoAporte[]) {
    allMontoAportes.value = montoAportes;
    montoAporteErrors.value = {};
  }

  function setMontoAporteError(error: any) {
    montoAporteErrors.value = { ...error };
  }

  function getMontoAportes(canal:string) {
    return ApiService.get("montoAporte/v1", canal)
      .then(({ data }) => {
        setMontoAportes(data);
      })
      .catch(({ response }) => {
        setMontoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function getMontoAporte(id: string) {
    return ApiService.get("montoAporte", id)
      .then(({ data }) => {
        setMontoAporte(data);
      })
      .catch(({ response }) => {
        setMontoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function createMontoAporte(params: IMontoAporte) {
    return ApiService.post("montoAporte", params)
      .then(({ data }) => {
        setMontoAporte(data);
      })
      .catch(({ response }) => {
        setMontoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function updateMontoAporte(params: IMontoAporte) {
    return ApiService.put(`montoAporte/${params.id}`, params)
      .then(({ data }) => {
        setMontoAporte(data);
      })
      .catch(({ response }) => {
        setMontoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function deleteMontoAporte(id: string|undefined) {
    return ApiService.delete(`montoAporte/${id}`)
      .then(({ data }) => {
        setMontoAporte(data);
      })
      .catch(({ response }) => {
        setMontoAporteError(response.data.errores);
		throw new Error();
      });
  }


  return {
    montoAporteErrors,
    currentMontoAporte,
    allMontoAportes,
	getMontoAportes,
	getMontoAporte,
	createMontoAporte,
	updateMontoAporte,
    deleteMontoAporte
  };
});




