import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IMarca {
		codigo: string;
    nombre: string;
    activo: string;
    orden: string;

}

export const useMarcaStore = defineStore("marca", () => {
  const marcaErrors = ref({});
  const currentMarca = ref<IMarca>({} as IMarca);
  const allMarcas = ref<IMarca[]>([] as Array<IMarca>);

  function setMarca(marca: IMarca) {
    currentMarca.value = marca;
    marcaErrors.value = {};
  }

  function setMarcas(marcas: IMarca[]) {
    allMarcas.value = marcas;
    marcaErrors.value = {};
  }

  function setMarcaError(error: any) {
    marcaErrors.value = { ...error };
  }

  function getMarcas(campania:string) {
    return ApiService.get("soap/marcas", campania)
      .then(({ data }) => {
        setMarcas(data);
      })
      .catch(({ response }) => {
        setMarcaError(response.data.errores);
		throw new Error();
      });
  }

  function getMarca(id: string) {
    return ApiService.get("marca", id)
      .then(({ data }) => {
        setMarca(data);
      })
      .catch(({ response }) => {
        setMarcaError(response.data.errores);
		throw new Error();
      });
  }

  function createMarca(params: IMarca) {
    return ApiService.post("marca", params)
      .then(({ data }) => {
        setMarca(data);
      })
      .catch(({ response }) => {
        setMarcaError(response.data.errores);
		throw new Error();
      });
  }

  function updateMarca(params: IMarca) {
    return ApiService.put(`marca/${params.id}`, params)
      .then(({ data }) => {
        setMarca(data);
      })
      .catch(({ response }) => {
        setMarcaError(response.data.errores);
		throw new Error();
      });
  }

  function deleteMarca(id: string|undefined) {
    return ApiService.delete(`marca/${id}`)
      .then(({ data }) => {
        setMarca(data);
      })
      .catch(({ response }) => {
        setMarcaError(response.data.errores);
		throw new Error();
      });
  }


  return {
    marcaErrors,
    currentMarca,
    allMarcas,
	getMarcas,
	getMarca,
	createMarca,
	updateMarca,
    deleteMarca
  };
});




