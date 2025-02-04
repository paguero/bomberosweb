import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";


export interface ILigaBombero {
  email: string;
}

export const useLigaBomberoStore = defineStore("LigaBombero", () => {
  const ligaBomberoErrors = ref({});
  const currentLigaBombero = ref<ILigaBombero>({} as ILigaBombero);
  const allLigaBomberos = ref<ILigaBombero[]>([] as Array<ILigaBombero>);

  function setLigaBombero(ligaBombero: ILigaBombero) {
    currentLigaBombero.value = ligaBombero;
    ligaBomberoErrors.value = {};
  }

  function setLigaBomberoError(error: any) {
    ligaBomberoErrors.value = { ...error };
  }


  function getLigaBombero(id: string) {
    return ApiService.get("LigaBombero/v1/ligaBombero", id)
      .then(({ data }) => {
        setLigaBombero(data);
      })
      .catch(({ response }) => {
        setLigaBomberoError(response.data.errores);
		throw new Error();
      });
  }

  function createLigaBombero(params: ILigaBombero) {
    return ApiService.post("LigaBombero/v1/ligaBombero", params)
      .then(({ data }) => {
        setLigaBombero(data);
      })
      .catch(({ response }) => {
        setLigaBomberoError(response.data.errores);
		throw new Error();
      });
  }

  function updateLigaBombero(params: ILigaBombero) {
    return ApiService.put(`LigaBombero/v1/ligaBombero/${params.email}`, params)
      .then(({ data }) => {
        setLigaBombero(data);
      })
      .catch(({ response }) => {
        setLigaBomberoError(response.data.errores);
		throw new Error();
      });
  }

  function deleteLigaBombero(id: string|undefined) {
    return ApiService.delete(`LigaBombero/v1/ligaBombero/${id}`)
      .then(({ data }) => {
        setLigaBombero(data);
      })
      .catch(({ response }) => {
        setLigaBomberoError(response.data.errores);
		throw new Error();
      });
  }


  return {
    currentLigaBombero,
    allLigaBomberos,
    ligaBomberoErrors,
	  getLigaBombero,
	  createLigaBombero,
	  updateLigaBombero,
    deleteLigaBombero
  };
});