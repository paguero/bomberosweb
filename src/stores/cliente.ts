import { ref } from "vue";
import { defineStore } from "pinia";
import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";


export interface ICliente {
		cotizacionId: string;
email: string;
nombre: string;
apellidoPaterno: string;
apellidoMaterno: string;
telefono: string;
rut: string;
numeroSerie: string;
region: string;
comuna: string;
direccion: string;
fechaCreacion: string;

}

export const useClienteStore = defineStore("cliente", () => {
  const clienteErrors = ref({});
  const currentCliente = ref<ICliente>({} as ICliente);
  const allClientes = ref<ICliente[]>([] as Array<ICliente>);

  function setCliente(cliente: ICliente) {
    currentCliente.value = cliente;
    clienteErrors.value = {};
  }

  function setClientes(clientes: ICliente[]) {
    allClientes.value = clientes;
    clienteErrors.value = {};
  }

  function setClienteError(error: any) {
    clienteErrors.value = { ...error };
  }

  function getClientes() {
    return ApiService.get("clientes/all")
      .then(({ data }) => {
        setClientes(data);
      })
      .catch(({ response }) => {
        setClienteError(response.data.errores);
		throw new Error();
      });
  }

  function getCliente(id: string) {
    return ApiService.get("cliente", id)
      .then(({ data }) => {
        setCliente(data);
      })
      .catch(({ response }) => {
        setClienteError(response.data.errores);
		throw new Error();
      });
  }

  function createCliente(params: ICliente) {
    return ApiService.post("cliente", params)
      .then(({ data }) => {
        setCliente(data);
      })
      .catch(({ response }) => {
        setClienteError(response.data.errores);
		throw new Error();
      });
  }

  function updateCliente(params: ICliente) {
    return ApiService.put(`soap/cliente/${params.cotizacionId}/${params.rut}`, params)
      .then(({ data }) => {
        setCliente(data);
      })
      .catch(({ response }) => {
        setClienteError(response.data.errores);
		throw new Error();
      });
  }

  function deleteCliente(id: string|undefined) {
    return ApiService.delete(`cliente/${id}`)
      .then(({ data }) => {
        setCliente(data);
      })
      .catch(({ response }) => {
        setClienteError(response.data.errores);
		throw new Error();
      });
  }


  return {
    clienteErrors,
    currentCliente,
    allClientes,
	getClientes,
	getCliente,
	createCliente,
	updateCliente,
    deleteCliente
  };
});




