import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IVendedor {
		vendedorId: string;
nombreVendedor: string;
comision: string;
slug: string;
logo: string;
activo: string;
paginaDevolucion: string;
paginaResultados: string;
paginaVoucher: string;
esBase: string;

}

export const useVendedorStore = defineStore("vendedor", () => {
  const vendedorErrors = ref({});
  const currentVendedor = ref<IVendedor>({} as IVendedor);
  const allVendedors = ref<IVendedor[]>([] as Array<IVendedor>);

  function setVendedor(vendedor: IVendedor) {
    currentVendedor.value = vendedor;
    vendedorErrors.value = {};
  }

  function setVendedors(vendedors: IVendedor[]) {
    allVendedors.value = vendedors;
    vendedorErrors.value = {};
  }

  function setVendedorError(error: any) {
    vendedorErrors.value = { ...error };
  }

  function getVendedors() {
    return ApiService.get("vendedors/all")
      .then(({ data }) => {
        setVendedors(data);
      })
      .catch(({ response }) => {
        setVendedorError(response.data.errores);
		throw new Error();
      });
  }

  function getVendedor(id: string) {
    return ApiService.get("vendedor", id)
      .then(({ data }) => {
        setVendedor(data);
      })
      .catch(({ response }) => {
        setVendedorError(response.data.errores);
		throw new Error();
      });
  }

  function createVendedor(params: IVendedor) {
    return ApiService.post("vendedor", params)
      .then(({ data }) => {
        setVendedor(data);
      })
      .catch(({ response }) => {
        setVendedorError(response.data.errores);
		throw new Error();
      });
  }

  function updateVendedor(params: IVendedor) {
    return ApiService.put(`vendedor/${params.id}`, params)
      .then(({ data }) => {
        setVendedor(data);
      })
      .catch(({ response }) => {
        setVendedorError(response.data.errores);
		throw new Error();
      });
  }

  function deleteVendedor(id: string|undefined) {
    return ApiService.delete(`vendedor/${id}`)
      .then(({ data }) => {
        setVendedor(data);
      })
      .catch(({ response }) => {
        setVendedorError(response.data.errores);
		throw new Error();
      });
  }


  return {
    vendedorErrors,
    currentVendedor,
    allVendedors,
	getVendedors,
	getVendedor,
	createVendedor,
	updateVendedor,
    deleteVendedor
  };
});




