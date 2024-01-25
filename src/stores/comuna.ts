import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IComuna {
		codigoComuna: string;
codigoCiudad: string;
codigoRegion: string;
nombre: string;
orden: string;
activo: string;

}

export const useComunaStore = defineStore("comuna", () => {
  const comunaErrors = ref({});
  const currentComuna = ref<IComuna>({} as IComuna);
  const allComunas = ref<IComuna[]>([] as Array<IComuna>);

  function setComuna(comuna: IComuna) {
    currentComuna.value = comuna;
    comunaErrors.value = {};
  }

  function setComunas(comunas: IComuna[]) {
    allComunas.value = comunas;
    comunaErrors.value = {};
  }

  function setComunaError(error: any) {
    comunaErrors.value = { ...error };
  }

  function getComunas() {
    return ApiService.get("soap/comunas")
      .then(({ data }) => {
        setComunas(data);
      })
      .catch(({ response }) => {
        setComunaError(response.data.errores);
		throw new Error();
      });
  }

  function getComuna(id: string) {
    return ApiService.get("comuna", id)
      .then(({ data }) => {
        setComuna(data);
      })
      .catch(({ response }) => {
        setComunaError(response.data.errores);
		throw new Error();
      });
  }

  function createComuna(params: IComuna) {
    return ApiService.post("comuna", params)
      .then(({ data }) => {
        setComuna(data);
      })
      .catch(({ response }) => {
        setComunaError(response.data.errores);
		throw new Error();
      });
  }

  function updateComuna(params: IComuna) {
    return ApiService.put(`comuna/${params.id}`, params)
      .then(({ data }) => {
        setComuna(data);
      })
      .catch(({ response }) => {
        setComunaError(response.data.errores);
		throw new Error();
      });
  }

  function deleteComuna(id: string|undefined) {
    return ApiService.delete(`comuna/${id}`)
      .then(({ data }) => {
        setComuna(data);
      })
      .catch(({ response }) => {
        setComunaError(response.data.errores);
		throw new Error();
      });
  }


  return {
    comunaErrors,
    currentComuna,
    allComunas,
	getComunas,
	getComuna,
	createComuna,
	updateComuna,
    deleteComuna
  };
});




