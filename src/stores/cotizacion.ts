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
    emitida?: boolean;
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
    Propietario:any;
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

  function getCotizaciones(email: string) {
    ApiService.setHeader();
    return ApiService.post("poliza/v1/missoaps", {email})
      .then(({ data }) => {
        setCotizacions(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function getCotizacionesTotales(email: string) {
    ApiService.setHeader();
    return ApiService.post("poliza/v1/missoaps/cotizaciones", {email})
      .then(({ data }) => {
        setCotizacions(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  

  function getCotizacion(cotizacion: ICotizacion) {
    return ApiService.get(`cotizacion/v1/${cotizacion.carroId}/cotizacion`, cotizacion.cotizacionId)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }
  function getEmisionValidacion(params:IConsultaCotizacionValidacion) {
    ApiService.setHeader();
    return ApiService.post(`cotizacion/v1/cotizacion/emision/consulta/validacion`,params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }

  function getEmisionesValidacion(params:IConsultaCotizacionValidacion) {
    ApiService.setHeader();
    return ApiService.post(`cotizacion/v1/cotizacion/emision/consulta/validaciones`,params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }

  function getEmisionDescarga(params: IConsultaCotizacion) {
    return ApiService.post("cotizacion/v1/cotizacion/emision/consulta/descarga", params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function getEmision(params: IConsultaCotizacion) {
    return ApiService.post("cotizacion/v1/cotizacion/emision/consulta", params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function getEmisionEmail(params: IConsultaCotizacion) {
    return ApiService.post("cotizacion/v1/webhook/duplicado", params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }

  function createCotizacion(params: ICotizacion|any) {
    ApiService.setHeader();
    return ApiService.post("Cotizacion/v1/cotizacion", params)
      .then(({ data }) => {
        setCotizacion(data);

      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function endoso(params: ICotizacion|any) {
    //ApiService.setHeader();
    return ApiService.post("cotizacion/v1/endoso/soap", params)
      .then(({ data }) => {
        setCotizacion(data);

      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }


  function updateCotizacion(params: ICotizacion) {
    return ApiService.put(`cotizacion/v1/${params.carroId}/cotizacion/${params.cotizacionId}`, params)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  
  function deleteCotizacion(params: ICotizacion) {
    return ApiService.delete(`cotizacion/v1/${params.carroId}/cotizacion/${params.cotizacionId}`)
      .then(({ data }) => {
        setCotizacion(data);
      })
      .catch(({ response }) => {
        setCotizacion(response.data);
        setCotizacionError(response.data.errores);
		throw new Error();
      });
  }

  function verificarPago(carroId:string) {
    ApiService.setHeader();
    return ApiService.put(`poliza/v1/verificapago/${carroId}`, carroId)
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }

  
  function verificarPagoPatente(params: ICotizacion|undefined) {
    ApiService.setHeader();
    return ApiService.post(`cotizacion/v1/webhook/consulta/pagos`, params)
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }

  function verPdf(id: string|undefined) {
    return ApiService.get(`soap/poliza/pdf/${id}`)
      .catch(({ response }) => {
        setCotizacionError(response.data.errores);
		    throw new Error();
      });
  }
  

  return {
    verPdf,
    cotizacionErrors,
    currentCotizacion,
    allCotizacions,
    getCotizacion,
    getCotizaciones,
    getCotizacionesTotales,
    createCotizacion,
    updateCotizacion,
    deleteCotizacion,
    setCarro,
    getCarro,
    getEmision,
    getEmisionEmail,
    getEmisionValidacion,
    getEmisionesValidacion,
    endoso, verificarPago, verificarPagoPatente,
    getEmisionDescarga
  };
});




