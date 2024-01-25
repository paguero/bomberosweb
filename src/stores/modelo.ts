import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IModelo {
		id: string;
codigo: string;
codigoMarca: string;
codigoTipoVehiculo: string;
nombre: string;
activo: string;
orden: string;
marca: string;
tipoVehiculo: string;

}

export const useModeloStore = defineStore("modelo", () => {
  const modeloErrors = ref({});
  const currentModelo = ref<IModelo>({} as IModelo);
  const allModelos = ref<IModelo[]>([] as Array<IModelo>);

  function setModelo(modelo: IModelo) {
    currentModelo.value = modelo;
    modeloErrors.value = {};
  }

  function setModelos(modelos: IModelo[]) {
    allModelos.value = modelos;
    modeloErrors.value = {};
  }

  function setModeloError(error: any) {
    modeloErrors.value = { ...error };
  }

  function getModelos(campania:string, marca:string, tipoVehiculo:string) {
    return ApiService.get(`soap/modelos/${campania}/${marca}/${tipoVehiculo}`)
      .then(({ data }) => {
        setModelos(data);
      })
      .catch(({ response }) => {
        setModeloError(response.data.errores);
		throw new Error();
      });
  }

  function getModelo(id: string) {
    return ApiService.get("modelo", id)
      .then(({ data }) => {
        setModelo(data);
      })
      .catch(({ response }) => {
        setModeloError(response.data.errores);
		throw new Error();
      });
  }

  function createModelo(params: IModelo) {
    return ApiService.post("modelo", params)
      .then(({ data }) => {
        setModelo(data);
      })
      .catch(({ response }) => {
        setModeloError(response.data.errores);
		throw new Error();
      });
  }

  function updateModelo(params: IModelo) {
    return ApiService.put(`modelo/${params.id}`, params)
      .then(({ data }) => {
        setModelo(data);
      })
      .catch(({ response }) => {
        setModeloError(response.data.errores);
		throw new Error();
      });
  }

  function deleteModelo(id: string|undefined) {
    return ApiService.delete(`modelo/${id}`)
      .then(({ data }) => {
        setModelo(data);
      })
      .catch(({ response }) => {
        setModeloError(response.data.errores);
		throw new Error();
      });
  }


  return {
    modeloErrors,
    currentModelo,
    allModelos,
	getModelos,
	getModelo,
	createModelo,
	updateModelo,
    deleteModelo
  };
});




