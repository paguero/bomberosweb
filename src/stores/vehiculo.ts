import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IVehiculo {
		cotizacionId: string;
    fechaCreacion: string;
    fechaSuscripcion: string;
    numeroPoliza: string;
    codigoCampania: string;
    patente: string;
    patenteDv: string;
    esNuevo: string;
    anio: string;
    numeroMotor: string;
    numeroChasis: string;
    color: string;
    codigoMarca: string;
    marca: string;
    codigoModelo: string;
    modelo: string;
    codigoTipoVehiculo: string;
    tipoVehiculo: string;
    prima: string;
    primaMinima: string;
    aporte: string;
    costoDespacho: string;
    documentoPdf: string;
    codigoAceptacion: string;
    emitida: string;

}

export const useVehiculoStore = defineStore("vehiculo", () => {
  const vehiculoErrors = ref({});
  const currentVehiculo = ref<IVehiculo>({} as IVehiculo);
  const allVehiculos = ref<IVehiculo[]>([] as Array<IVehiculo>);

  function setVehiculo(vehiculo: IVehiculo) {
    currentVehiculo.value = vehiculo;
    vehiculoErrors.value = {};
  }

  function setVehiculos(vehiculos: IVehiculo[]) {
    allVehiculos.value = vehiculos;
    vehiculoErrors.value = {};
  }

  function setVehiculoError(error: any) {
    vehiculoErrors.value = { ...error };
  }

  function getVehiculos() {
    return ApiService.get("vehiculos/all")
      .then(({ data }) => {
        setVehiculos(data);
      })
      .catch(({ response }) => {
        setVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function getVehiculo(patente: string) {
    return ApiService.get("soap/vehiculo", patente)
      .then(({ data }) => {
        setVehiculo(data);
      })
      .catch(({ response }) => {
        setVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function createVehiculo(params: IVehiculo) {
    return ApiService.post("vehiculo", params)
      .then(({ data }) => {
        setVehiculo(data);
      })
      .catch(({ response }) => {
        setVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function updateVehiculo(params: IVehiculo) {
    return ApiService.put(`soap/vehiculo/${params.cotizacionId}/${params.patente}`, params)
      .then(({ data }) => {
        setVehiculo(data);
      })
      .catch(({ response }) => {
        setVehiculoError(response.data.errores);
		throw new Error();
      });
  }

  function deleteVehiculo(id: string|undefined) {
    return ApiService.delete(`vehiculo/${id}`)
      .then(({ data }) => {
        setVehiculo(data);
      })
      .catch(({ response }) => {
        setVehiculoError(response.data.errores);
		throw new Error();
      });
  }


  return {
    vehiculoErrors,
    currentVehiculo,
    allVehiculos,
	getVehiculos,
	getVehiculo,
	createVehiculo,
	updateVehiculo,
    deleteVehiculo
  };
});




