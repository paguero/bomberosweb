import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ISuscripcion {
  numero: string|undefined;
  
} 

export const useSuscripcionStore = defineStore("suscripcion", () => {
  const suscripcionErrors = ref({});
  const currentSuscripcion = ref<ISuscripcion>({} as ISuscripcion);
  const allSuscripciones = ref<ISuscripcion[]>([] as Array<ISuscripcion>);

  function setSuscripcionStorage(suscripcion: any) {
    localStorage.suscripcion = suscripcion;
  }

  function getSuscripcionStorage() {
    return localStorage.suscripcion;
  }


  function setSuscripcion(reserva: ISuscripcion) {
    currentSuscripcion.value = reserva;
    suscripcionErrors.value = {};
  }

  function setSuscripciones(suscripciones: ISuscripcion[]) {
    allSuscripciones.value = suscripciones;
    suscripcionErrors.value = {};
  }

  function setSuscripcionError(error: any) {
    suscripcionErrors.value = { ...error };
  }

  function getSuscripcion(id: string) {
    return ApiService.get("suscripcion/v1/suscripcion", id)
      .then(({ data }) => {
        setSuscripcion(data);
      })
      .catch(({ response }) => {
        setSuscripcionError(response.data.errors);
		throw new Error();
      });
  }

  function getSuscripcionPago(id: string) {
    return ApiService.get("suscripcion/v1/token", id)
      .then(({ data }) => {
        setSuscripcion(data);
      })
      .catch(({ response }) => {
        setSuscripcionError(response.data.errors);
		throw new Error();
      });
  }

 function createSuscripcion(params: ISuscripcion) {
    return ApiService.post("suscripcionAsistencia/v1/suscripcion", params)
      .then(({ data }) => {
        setSuscripcion(data);
      })
      .catch(({ response }) => {
        setSuscripcionError(response.data.errors);
		throw new Error();
      });
  }

  function updateSuscripcion(params: any) {
    return ApiService.put(`suscripcionAsistencia/v1/suscripcion/${params.id}`, params)
      .then(({ data }) => {
        setSuscripcion(data);
      })
      .catch(({ response }) => {
        setSuscripcionError(response.data.errors);
		    throw new Error();
      });
  }

 
  function deleteSuscripcion(params) {
    return ApiService.post(
      `suscripcion/v1/anular/${params.id}`,
      params
    )
    .then(({ data }) => {
      setSuscripcion(data);
    })
    .catch(({ response }) => {
      setSuscripcionError(response.data.errors);
      throw new Error();
    });
  }

   
  return {
    suscripcionErrors,
    currentSuscripcion,
    allSuscripciones,
    getSuscripcion,
    getSuscripcionPago,
    createSuscripcion,
    updateSuscripcion,
    deleteSuscripcion,
    setSuscripcionStorage,
    getSuscripcionStorage
  };
});