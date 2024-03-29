import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { boolean } from "yup";


export interface ICarroCompra {
		carroId: string|undefined;
    montoPago?: string|undefined;
    aporte: string|undefined;
    comuna?:string|undefined;
    convenioAporte?:string|undefined;
    compania:string|undefined;
    totalPagar?: string|undefined;
    urlPago:string|undefined;
    procesado?:boolean;
    exitoso?:boolean;
}

export const useCarroCompraStore = defineStore("carroCompra", () => {
  const carroCompraErrors = ref({});
  const currentCarroCompra = ref<ICarroCompra>({} as ICarroCompra);
  const allCarroCompras = ref<ICarroCompra[]>([] as Array<ICarroCompra>);

  function setCarroCompra(carroCompra: ICarroCompra) {
    currentCarroCompra.value = carroCompra;
    carroCompraErrors.value = {};
  }

  function setCarroCompras(carroCompras: ICarroCompra[]) {
    allCarroCompras.value = carroCompras;
    carroCompraErrors.value = {};
  }

  function setCarroCompraError(error: any) {
    carroCompraErrors.value = { ...error };
  }

  function getCarroCompras() {
    return ApiService.get("carroCompras/all")
      .then(({ data }) => {
        setCarroCompras(data);
      })
      .catch(({ response }) => {
        setCarroCompraError(response.data.errores);
		throw new Error();
      });
  }

  function getCarroCompra(id: string) {
    return ApiService.get("soap/carroCompra", id)
      .then(({ data }) => {
        setCarroCompra(data);
      })
      .catch(({ response }) => {
        setCarroCompraError(response.data.errores);
		throw new Error();
      });
  }

  function createCarroCompra(params: ICarroCompra) {
    return ApiService.post("carroCompra", params)
      .then(({ data }) => {
        setCarroCompra(data);
      })
      .catch(({ response }) => {
        setCarroCompraError(response.data.errores);
		throw new Error();
      });
  }

  function updateCarroCompra(params: ICarroCompra) {
    return ApiService.put(`carroCompra/${params.id}`, params)
      .then(({ data }) => {
        setCarroCompra(data);
      })
      .catch(({ response }) => {
        setCarroCompraError(response.data.errores);
		throw new Error();
      });
  }

  function iniciarEmision(params) {
    return ApiService.post(`soap/emitir/inicio`, params)
      .then(({ data }) => {
        setCarroCompra(data);
      })
      .catch(({ response }) => {
        setCarroCompraError(response.data.errores);
		throw new Error();
      });
  }



  return {
    carroCompraErrors,
    currentCarroCompra,
    allCarroCompras,
	getCarroCompras,
	getCarroCompra,
	createCarroCompra,
	updateCarroCompra,
  iniciarEmision
  };
});




