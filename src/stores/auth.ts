import { ref, getCurrentInstance } from "vue";
import { defineStore } from "pinia";

import ApiService from "@/core/services/ApiService";
import JwtService from "@/core/services/JwtService";
import type { User } from 'oidc-client'

export interface UserLogin {
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

export const useAuthStore = defineStore("auth", () => {
  const errors = ref({});
  const user = ref<User>({} as User);
  const isAuthenticated = ref(!!JwtService.getToken());
  const app = getCurrentInstance();

  function setAuth(authUser: User) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.id_token);
    JwtService.saveAccessToken(user.value.access_token);
  }

  function getAuth() {
    user.value = app?.appContext.config.globalProperties.$oidc;
    return user.value;
  }


  function setAuthOIDC(authUser: any) {
    isAuthenticated.value = true;
    user.value = authUser;
    errors.value = {};
    JwtService.saveToken(user.value.id_token);
    JwtService.saveAccessToken(user.value.access_token);
  }

  function setError(error: any) {
    errors.value = { ...error };
  }

  function purgeAuth() {
    isAuthenticated.value = false;
    user.value = {} as User;
    errors.value = [];
    JwtService.destroyToken();
  }

  function login(credentials: UserLogin) {
    return ApiService.post("Auth/v1/signIn/", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
		    throw new Error();
      });
  }

  function logout() {
    purgeAuth();
  }

  function register(credentials: UserLogin) {
    return ApiService.post("Auth/v1/registration/", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
        throw new Error();
      });
  }

  function auto_register(credentials: any) {
    return ApiService.post("Auth/v1/registration/sso/", credentials)
      .then(({ data }) => {
        setAuth(data);
      })
      .catch(({ response }) => {
        setError(response.data.errores);
        throw new Error();
      });
  }

  function update(credentials: UserLogin) {
    return ApiService.post("Auth/v1/update/", credentials)
      .catch(({ response }) => {
        setError(response.data.errores);
        throw new Error();
      });
  }

  function forgotPassword(email: string) {
    return ApiService.post("Auth/v1/recovery", email)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
        throw new Error();
      });
  }

  function changePassword(params: any) {
    return ApiService.post("Auth/v1/passwordupdate", params)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
        throw new Error();
      });
  }

  function confirmChangePassword(params: any) {
    return ApiService.post("Auth/v1/passwordchange", params)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
        throw new Error();
      });
  }

  function updatePassword(params: any) {
    return ApiService.post("Auth/v1/passwordupdate", params)
      .then(() => {
        setError({});
      })
      .catch(({ response }) => {
        setError(response.data.errors);
        throw new Error();
      });
  }


  async function verifyAuth() {
    ApiService.setAccessHeader();
    await ApiService.get("https://uat-sso.europcar.cl/connect/userinfo")
      .catch(({ response }) => {
        setError(response.data.errores);
        purgeAuth();
        throw new Error();
      });
  }

  return {
    errors,
    user,
    isAuthenticated,
    getAuth,
    login,
    changePassword,
    confirmChangePassword,
    logout,
    register,
    update,
    forgotPassword,
    verifyAuth,
    setAuthOIDC,
    updatePassword,
    auto_register
  };
});
