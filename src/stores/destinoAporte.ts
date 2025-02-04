import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IDestinoAporte {
		codigoDestino: string;
nombre: string;
codigoComuna: string;
activo: string;

}

export const useDestinoAporteStore = defineStore("destinoAporte", () => {
  const destinoAporteErrors = ref({});
  const currentDestinoAporte = ref<IDestinoAporte>({} as IDestinoAporte);
  const allDestinoAportes = ref<IDestinoAporte[]>([] as Array<IDestinoAporte>);

  function setDestinoAporte(destinoAporte: IDestinoAporte) {
    currentDestinoAporte.value = destinoAporte;
    destinoAporteErrors.value = {};
  }

  function setDestinoAportes(destinoAportes: IDestinoAporte[]) {
    allDestinoAportes.value = destinoAportes;
    destinoAporteErrors.value = {};
  }

  function setDestinoAporteError(error: any) {
    destinoAporteErrors.value = { ...error };
  }

  function getDestinoAportes(comuna:string) {
    return ApiService.get("destinoaporte/v1/destinoAportes", comuna)
      .then(({ data }) => {
        setDestinoAportes(data);
      })
      .catch(({ response }) => {
        setDestinoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function getDestinoAporte(id: string) {
    return ApiService.get("destinoAporte", id)
      .then(({ data }) => {
        setDestinoAporte(data);
      })
      .catch(({ response }) => {
        setDestinoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function createDestinoAporte(params: IDestinoAporte) {
    return ApiService.post("destinoAporte", params)
      .then(({ data }) => {
        setDestinoAporte(data);
      })
      .catch(({ response }) => {
        setDestinoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function updateDestinoAporte(params: IDestinoAporte) {
    return ApiService.put(`destinoAporte/${params.id}`, params)
      .then(({ data }) => {
        setDestinoAporte(data);
      })
      .catch(({ response }) => {
        setDestinoAporteError(response.data.errores);
		throw new Error();
      });
  }

  function deleteDestinoAporte(id: string|undefined) {
    return ApiService.delete(`destinoAporte/${id}`)
      .then(({ data }) => {
        setDestinoAporte(data);
      })
      .catch(({ response }) => {
        setDestinoAporteError(response.data.errores);
		throw new Error();
      });
  }


  return {
    destinoAporteErrors,
    currentDestinoAporte,
    allDestinoAportes,
	getDestinoAportes,
	getDestinoAporte,
	createDestinoAporte,
	updateDestinoAporte,
    deleteDestinoAporte
  };
});




