import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import type { IVehiculo } from "./vehiculo";
import type { ICliente } from "./cliente";

export interface IConsultaCotizacionValidacion{
  numeroFolio:string,
  numeroPoliza:string,
  patente:string
}

export interface IConsultaCotizacion {
  patente:string;
  rut:string;
}
export interface ICotizacion {
		cotizacionId: string;
    carroId: string;
    numeroCotizacion: string;
    codigoConvenio: string;
    codigoTipoSeguro: string;
    tipoSeguro: string;
    grupoId: string;
    vendedorId: string;
    fechaCreacion: string;
    estado: string;
    contratado: string;
    fechaContratacion: string;
    usuario: string;
    nombrePlan: string;
    planContratado: string;
    planUf: string;
    planPesos: string;
    comision: string;
    valorUf: string;
    aporte: string;
    numeroFolio: string;
    numeroPoliza: string;
    fechaActualizacion: string;
    usuarioActualizacion: string;
    tokenMedioPago: string;
    codigoMedioPago: string;
    montoPago: string;
    fechaTransaccion: string;
    exitoso: string;
    emitida: string;
    anulada: string;
    pdfEnProceso: string;
    codigoAutorizacion: string;
    fechaPago: string;
    mesPago: string;
    anioPago: string;
    numeroTarjeta: string;
    notificado: string;
    codigoNotificacion: string;
    cotizacionCompania: string;
    urlPoliza: string;
    fechaEmision: string;
    fechaInicio: string;
    fechaTermino: string;
    compania: string;
    patente:string;
    vehiculo: IVehiculo;
    cliente: ICliente;
    comuna:string;
    statusCode:number;
}

export const useCotizacionStore = defineStore("cotizacion", () => {
  const cotizacionErrors = ref({});
  const currentCotizacion = ref<ICotizacion>({} as ICotizacion);
  const allCotizacions = ref<ICotizacion[]>([] as Array<ICotizacion>);

  function setCotizacions(cotizacions: ICotizacion[]) {
    allCotizacions.value = cotizacions;
    cotizacionErrors.value = {};
  }

  function setCotizacion(cotizacion: ICotizacion) {
    currentCotizacion.value = cotizacion;
    cotizacionErrors.value = {};
  }

  function setCarro(carro: any) {
    localStorage.carro = carro;
    cotizacionErrors.value = {};
  }

  function setCotizacionError(error: any) {
    cotizacionErrors.value = { ...error };
  }

  function getCarro() {
    return localStorage.carro;
  }

  function getCotizaciones(id: string) {
    return ApiService.get("soap/cotizaciones", id)
      .then(({ data }) => {
        setCotizacions(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function getCotizacion(id: string) {
    return ApiService.get("soap/cotizacion", id)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }
  function getEmisionValidacion(params:IConsultaCotizacionValidacion) {
    return ApiService.get(`soap/cotizacion/emision/consulta/validacion`)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function getEmision(params: IConsultaCotizacion) {
    return ApiService.post("soap/cotizacion/emision/consulta", params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function createCotizacion(params: ICotizacion|any) {
    return ApiService.post("soap/cotizacion", params)
      .then(({ data }) => {
        setCotizacion(data);

      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function endoso(params: ICotizacion|any) {
    return ApiService.post("soap/cotizacion/endoso", params)
      .then(({ data }) => {
        setCotizacion(data);

      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }


  function updateCotizacion(params: ICotizacion) {
    return ApiService.put(`soap/cotizacion/${params.cotizacionId}`, params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  
  function deleteCotizacion(id: string|undefined) {
    return ApiService.delete(`soap/cotizacion/${id}`)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }


  return {
    cotizacionErrors,
    currentCotizacion,
    allCotizacions,
    getCotizacion,
    getCotizaciones,
    createCotizacion,
    updateCotizacion,
    deleteCotizacion,
    setCarro,
    getCarro,
    getEmision,
    getEmisionValidacion,
    endoso
  };
});




