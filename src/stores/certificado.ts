import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ICertificado {
    url: string;
    carroId:string;
    cotizacionId:string;
}

export const useCertificadoStore = defineStore("certificado", () => {
  const certificadoErrors = ref({});
  const currentCertificado = ref<ICertificado>({} as ICertificado);
  const allCertificados = ref<ICertificado[]>([] as Array<ICertificado>);

  function setCertificado(certificado: ICertificado) {
    currentCertificado.value = certificado;
    certificadoErrors.value = {};
  }
  function setCertificadoError(error: any) {
    certificadoErrors.value = { ...error };
  }
  function getCertificado(params: ICertificado) {
    return ApiService.get(`certificado/v1/certificado/${params.carroId}`, params.cotizacionId)
      .then(({ data }) => {
        setCertificado(data);
      })
      .catch(({ response }) => {
        setCertificadoError(response.data.errors);
		    throw new Error();
      });
  }


  return {
    certificadoErrors,
    currentCertificado,
    allCertificados,
    getCertificado
  };
});