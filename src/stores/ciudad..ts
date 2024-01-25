import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ICiudad {
		codigoCiudad: string;
codigoRegion: string;
nombre: string;
orden: string;
activo: string;

}

export const useCiudadStore = defineStore("ciudad", () => {
  const ciudadErrors = ref({});
  const currentCiudad = ref<ICiudad>({} as ICiudad);
  const allCiudads = ref<ICiudad[]>([] as Array<ICiudad>);

  function setCiudad(ciudad: ICiudad) {
    currentCiudad.value = ciudad;
    ciudadErrors.value = {};
  }

  function setCiudads(ciudads: ICiudad[]) {
    allCiudads.value = ciudads;
    ciudadErrors.value = {};
  }

  function setCiudadError(error: any) {
    ciudadErrors.value = { ...error };
  }

  function getCiudads() {
    return ApiService.get("ciudads/all")
      .then(({ data }) => {
        setCiudads(data);
      })
      .catch(({ response }) => {
        setCiudadError(response.data.errores);
		throw new Error();
      });
  }

  function getCiudad(id: string) {
    return ApiService.get("ciudad", id)
      .then(({ data }) => {
        setCiudad(data);
      })
      .catch(({ response }) => {
        setCiudadError(response.data.errores);
		throw new Error();
      });
  }

  function createCiudad(params: ICiudad) {
    return ApiService.post("ciudad", params)
      .then(({ data }) => {
        setCiudad(data);
      })
      .catch(({ response }) => {
        setCiudadError(response.data.errores);
		throw new Error();
      });
  }

  function updateCiudad(params: ICiudad) {
    return ApiService.put(`ciudad/${params.id}`, params)
      .then(({ data }) => {
        setCiudad(data);
      })
      .catch(({ response }) => {
        setCiudadError(response.data.errores);
		throw new Error();
      });
  }

  function deleteCiudad(id: string|undefined) {
    return ApiService.delete(`ciudad/${id}`)
      .then(({ data }) => {
        setCiudad(data);
      })
      .catch(({ response }) => {
        setCiudadError(response.data.errores);
		throw new Error();
      });
  }


  return {
    ciudadErrors,
    currentCiudad,
    allCiudads,
	getCiudads,
	getCiudad,
	createCiudad,
	updateCiudad,
    deleteCiudad
  };
});




