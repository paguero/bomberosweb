import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ISuscripcionAsistencia {
		codigoSuscripcion: string;
    cotizacionId: string;
    patente: string;
    primaUf: string;
    fechaContratacion: string;
    fechaActivacion: string;
    carroId: string;
    emailCliente: string;
    codigoAsistencia: string;
    nombreAsistencia: string;

}

export const useSuscripcionAsistenciaStore = defineStore("suscripcionAsistencia", () => {
  const suscripcionAsistenciaErrors = ref({});
  const currentSuscripcionAsistencia = ref<ISuscripcionAsistencia>({} as ISuscripcionAsistencia);
  const allSuscripcionAsistencias = ref<ISuscripcionAsistencia[]>([] as Array<ISuscripcionAsistencia>);

  function setSuscripcionAsistencia(suscripcionAsistencia: ISuscripcionAsistencia) {
    currentSuscripcionAsistencia.value = suscripcionAsistencia;
    suscripcionAsistenciaErrors.value = {};
  }

  function setSuscripcionAsistencias(suscripcionAsistencias: ISuscripcionAsistencia[]) {
    allSuscripcionAsistencias.value = suscripcionAsistencias;
    suscripcionAsistenciaErrors.value = {};
  }

  function setSuscripcionAsistenciaError(error: any) {
    suscripcionAsistenciaErrors.value = { ...error };
  }

  function getSuscripcionAsistencias() {
    return ApiService.get("suscripcionAsistencias/all")
      .then(({ data }) => {
        setSuscripcionAsistencias(data);
      })
      .catch(({ response }) => {
        setSuscripcionAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getSuscripcionAsistencia(id: string) {
    return ApiService.get("suscripcionAsistencia/v1/suscripcionAsistencia", id)
      .then(({ data }) => {
        setSuscripcionAsistencia(data);
      })
      .catch(({ response }) => {
        setSuscripcionAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function createSuscripcionAsistencia(params: any) {
    return ApiService.post("suscripcionAsistencia/v1/suscripcionAsistencias", params)
      .then(({ data }) => {
        setSuscripcionAsistencia(data);
      })
      .catch(({ response }) => {
        setSuscripcionAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function updateSuscripcionAsistencia(params: ISuscripcionAsistencia) {
    return ApiService.put(`suscripcionAsistencia/${params.id}`, params)
      .then(({ data }) => {
        setSuscripcionAsistencia(data);
      })
      .catch(({ response }) => {
        setSuscripcionAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteSuscripcionAsistencia(id: string|undefined) {
    return ApiService.delete(`suscripcionAsistencia/${id}`)
      .then(({ data }) => {
        setSuscripcionAsistencia(data);
      })
      .catch(({ response }) => {
        setSuscripcionAsistenciaError(response.data.errors);
		throw new Error();
      });
  }


  return {
    suscripcionAsistenciaErrors,
    currentSuscripcionAsistencia,
    allSuscripcionAsistencias,
    getSuscripcionAsistencias,
    getSuscripcionAsistencia,
    createSuscripcionAsistencia,
    updateSuscripcionAsistencia,
    deleteSuscripcionAsistencia
  };
});
