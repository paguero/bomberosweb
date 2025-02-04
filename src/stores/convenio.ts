import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface IConvenio {
		codigo: string;
    codigoComuna: string;
    comuna: string;
    nombre: string;
    esComuna: boolean;
    slogan:string;
    mensaje:string;
    url:string;
}

export const useConvenioStore = defineStore("convenio", () => {
  const convenioErrors = ref({});
  const currentConvenio = ref<IConvenio>({} as IConvenio);
  const allConvenios = ref<IConvenio[]>([] as Array<IConvenio>);

  function setConvenio(convenio: IConvenio) {
    currentConvenio.value = convenio;
    convenioErrors.value = {};
  }

  function setConvenios(convenios: IConvenio[]) {
    allConvenios.value = convenios;
    convenioErrors.value = {};
  }

  function setConvenioError(error: any) {
    convenioErrors.value = { ...error };
  }
  function getConvenios() {
    return ApiService.get("convenio/v1/all")
      .then(({ data }) => {
        setConvenios(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }
  function getConvenio(id: string) {
    return ApiService.get("convenio", id)
      .then(({ data }) => {
        setConvenio(data);
      })
      .catch(({ response }) => {
        setConvenioError(response.data.errors);
		throw new Error();
      });
  }


  return {
    convenioErrors,
    currentConvenio,
    allConvenios,
    getConvenio,
    getConvenios
  };
});