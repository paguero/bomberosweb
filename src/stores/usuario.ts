import { ref, getCurrentInstance } from "vue";
import { defineStore } from "pinia";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import { useAuthStore } from "@/stores/auth";
import type {UserLogin} from "@/stores/auth";

export interface Usuario {
  session_state?: string;
  access_token?: string;
  refresh_token?: string;
   token_type?: string;
   scope?: string;
   profile?: any;
   expires_at?: string;
   state?: string;

  name?: string;
  surname?: string;
  email: string;
  password: string;
  id_token?: string;
  sub?: string;
  identification_number?: string;
  role?: string;
  oi_au_id?: string;
  azp?: string;
  oi_tkn_id?: string;
  email_verified?: string;
  phone_number?: string;
  phone_number_verified?: string;
  given_name?: string;
  family_name?: string;

}

export const useUsuarioStore = defineStore("usuario", () => {
  const errors = ref({});
  const usuario = ref<Usuario>({} as Usuario);
  const app = getCurrentInstance();

  
  function setError(error: any) {
    errors.value = { ...error };
  }
  
  function setAuth(authUser: Usuario) {
      usuario.value = authUser;
      errors.value = {};
    }

  function validarToken(credentials: Usuario) {
    return ApiService.post("Usuario/v1/usuario/validarToken", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
		    throw new Error();
      });
  }

  

  return {
    errors,
    usuario,
    validarToken,
    setAuth
  };
});
