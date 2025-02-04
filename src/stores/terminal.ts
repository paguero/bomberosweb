import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ITerminal {
		terminalSerie: string;
    version: string;
    terminalId: string;
    vendedor: string;
    responsable: string;
    email: string;

}

export const useTerminalStore = defineStore("terminal", () => {
  const terminalErrors = ref({});
  const currentTerminal = ref<ITerminal>({} as ITerminal);
  const allTerminals = ref<ITerminal[]>([] as Array<ITerminal>);

  function setTerminal(terminal: ITerminal) {
    currentTerminal.value = terminal;
    terminalErrors.value = {};
  }

  function setTerminalError(error: any) {
    terminalErrors.value = { ...error };
  }

  function setTerminalStorage(terminal: any) {
    localStorage.terminal = terminal;
    terminalErrors.value = {};
  }

  function getTerminalStorage() {
    return localStorage.terminal;
  }

  function validarTerminal(params: ITerminal) {
    return ApiService.post("terminal/v1/terminal/validar", params)
      .then(({ data }) => {
        setTerminal(data);
      })
      .catch(({ response }) => {
        setTerminalError(response.data.errores);
		throw new Error();
      });
  }

  return {
    terminalErrors,
    currentTerminal,
    allTerminals,
	  validarTerminal,
    setTerminalStorage,
    getTerminalStorage
  };
});




