import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IAsistencia {
		codigoAsistencia: string;
    nombreAsistencia: string;
    primaUf: string;
    primaPesos: string;

}

export const useAsistenciaStore = defineStore("asistencia", () => {
  const asistenciaErrors = ref({});
  const currentAsistencia = ref<IAsistencia>({} as IAsistencia);
  const allAsistencias = ref<IAsistencia[]>([] as Array<IAsistencia>);

  function setAsistencia(asistencia: IAsistencia) {
    currentAsistencia.value = asistencia;
    asistenciaErrors.value = {};
  }

  function setAsistencias(asistencias: IAsistencia[]) {
    allAsistencias.value = asistencias;
    asistenciaErrors.value = {};
  }

  function setAsistenciaError(error: any) {
    asistenciaErrors.value = { ...error };
  }

  function getAsistencias(carroId:string) {
    return ApiService.get("asistencia/v1/all", carroId)
      .then(({ data }) => {
        setAsistencias(data);
      })
      .catch(({ response }) => {
        setAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function getAsistencia(id: string) {
    return ApiService.get("asistencia", id)
      .then(({ data }) => {
        setAsistencia(data);
      })
      .catch(({ response }) => {
        setAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function createAsistencia(params: IAsistencia) {
    return ApiService.post("asistencia", params)
      .then(({ data }) => {
        setAsistencia(data);
      })
      .catch(({ response }) => {
        setAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function updateAsistencia(params: IAsistencia) {
    return ApiService.put(`asistencia/${params.id}`, params)
      .then(({ data }) => {
        setAsistencia(data);
      })
      .catch(({ response }) => {
        setAsistenciaError(response.data.errors);
		throw new Error();
      });
  }

  function deleteAsistencia(id: string|undefined) {
    return ApiService.delete(`asistencia/${id}`)
      .then(({ data }) => {
        setAsistencia(data);
      })
      .catch(({ response }) => {
        setAsistenciaError(response.data.errors);
		throw new Error();
      });
  }


  return {
    asistenciaErrors,
    currentAsistencia,
    allAsistencias,
	getAsistencias,
	getAsistencia,
	createAsistencia,
	updateAsistencia,
    deleteAsistencia
  };
});




