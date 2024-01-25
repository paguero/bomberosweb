import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ILenguaje {
		lenguajeId: string;
    nombre: string;
    base: string;
    path: string;
    cultura: string;
    imagen: string;
    activo: string;
    orden: string;

}

export const useLenguajeStore = defineStore("lenguaje", () => {
  const lenguajeErrors = ref({});
  const currentLenguaje = ref<ILenguaje>({} as ILenguaje);
  const allLenguajes = ref<ILenguaje[]>([] as Array<ILenguaje>);

  function setLenguaje(lenguaje: ILenguaje) {
    currentLenguaje.value = lenguaje;
    lenguajeErrors.value = {};
  }

  function setLenguajes(lenguajes: ILenguaje[]) {
    allLenguajes.value = lenguajes;
    lenguajeErrors.value = {};
  }

  function setLenguajeError(error: any) {
    lenguajeErrors.value = { ...error };
  }

  function getLenguajes() {
    return ApiService.get("lenguaje/v1/lenguajes")
      .then(({ data }) => {
        setLenguajes(data);
      })
      .catch(({ response }) => {
        setLenguajeError(response.data.errores);
		throw new Error();
      });
  }

  function getLenguaje(id: string) {
    return ApiService.get("lenguaje/v1/lenguaje", id)
      .then(({ data }) => {
        setLenguaje(data);
      })
      .catch(({ response }) => {
        setLenguajeError(response.data.errores);
		throw new Error();
      });
  }

  function createLenguaje(params: FormData) {
    return ApiService.postBlob("lenguaje/v1/lenguaje", params)
      .then(({ data }) => {
        setLenguaje(data);
      })
      .catch(({ response }) => {
        setLenguajeError(response.data.errores);
		throw new Error();
      });
  }

  function updateLenguaje(params: any) {
    return ApiService.putBlob(`lenguaje/v1/lenguaje/${params.lenguajeId}`, params.data)
      .then(({ data }) => {
        setLenguaje(data);
      })
      .catch(({ response }) => {
        setLenguajeError(response.data.errores);
		throw new Error();
      });
  }

  function deleteLenguaje(id: string|undefined) {
    return ApiService.delete(`lenguaje/${id}`)
      .then(({ data }) => {
        setLenguaje(data);
      })
      .catch(({ response }) => {
        setLenguajeError(response.data.errores);
		    throw new Error();
      });
  }


  return {
    lenguajeErrors,
    currentLenguaje,
    allLenguajes,
    getLenguajes,
    getLenguaje,
    createLenguaje,
    updateLenguaje,
    deleteLenguaje
  };
});




