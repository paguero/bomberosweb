import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ITipoVehiculo {
		codigo: string;
nombre: string;
activo: string;
orden: string;

}

export const useTipoVehiculoStore = defineStore("tipoVehiculo", () => {
  const tipoVehiculoErrors = ref({});
  const currentTipoVehiculo = ref<ITipoVehiculo>({} as ITipoVehiculo);
  const allTipoVehiculos = ref<ITipoVehiculo[]>([] as Array<ITipoVehiculo>);

  function setTipoVehiculo(tipoVehiculo: ITipoVehiculo) {
    currentTipoVehiculo.value = tipoVehiculo;
    tipoVehiculoErrors.value = {};
  }

  function setTipoVehiculos(tipoVehiculos: ITipoVehiculo[]) {
    allTipoVehiculos.value = tipoVehiculos;
    tipoVehiculoErrors.value = {};
  }

  function setTipoVehiculoError(error: any) {
    tipoVehiculoErrors.value = { ...error };
  }

  function getTipoVehiculos(campania:string) {
    return ApiService.get("soap/tipoVehiculos", campania)
      .then(({ data }) => {
        setTipoVehiculos(data);
      })
      .catch(({ response }) => {
        setTipoVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function getTipoVehiculo(id: string) {
    return ApiService.get("tipoVehiculo", id)
      .then(({ data }) => {
        setTipoVehiculo(data);
      })
      .catch(({ response }) => {
        setTipoVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function createTipoVehiculo(params: ITipoVehiculo) {
    return ApiService.post("tipoVehiculo", params)
      .then(({ data }) => {
        setTipoVehiculo(data);
      })
      .catch(({ response }) => {
        setTipoVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function updateTipoVehiculo(params: ITipoVehiculo) {
    return ApiService.put(`tipoVehiculo/${params.id}`, params)
      .then(({ data }) => {
        setTipoVehiculo(data);
      })
      .catch(({ response }) => {
        setTipoVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function deleteTipoVehiculo(id: string|undefined) {
    return ApiService.delete(`tipoVehiculo/${id}`)
      .then(({ data }) => {
        setTipoVehiculo(data);
      })
      .catch(({ response }) => {
        setTipoVehiculoError(response.data.errores);
		throw new Error();
      });
  }


  return {
    tipoVehiculoErrors,
    currentTipoVehiculo,
    allTipoVehiculos,
	getTipoVehiculos,
	getTipoVehiculo,
	createTipoVehiculo,
	updateTipoVehiculo,
    deleteTipoVehiculo
  };
});




