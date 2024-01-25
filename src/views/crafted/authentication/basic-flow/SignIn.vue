<template>
  <!--begin::Wrapper-->
  <div class="w-lg-500px p-10">
    <!--begin::Form-->
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmitLogin"
      :validation-schema="login"
      :initial-values="{ email: 'admin@demo.com', password: 'demo' }"
    >
      <!--begin::Heading-->
      <div class="text-center mb-10">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">Login</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-semobold fs-4">
         
        </div>
        <!--end::Link-->
      </div>
      <!--begin::Heading-->


      <!--begin::Actions-->
      <div class="text-center">
        <!--begin::Submit button-->
        <router-link
          :to="{name:'dashboard'}"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Continuar </span>

          <span class="indicator-progress">
            Espere por favor...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </router-link>
        <!--end::Submit button-->

        <!--begin::Separator-->
        <div class="d-none text-center text-muted text-uppercase fw-bold mb-5">or</div>
        <!--end::Separator-->

        <!--begin::Google link-->
        <a
          href="#"
          class="d-none btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/google-icon.svg')"
            class="h-20px me-3"
          />
          Continue with Google
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a
          href="#"
          class="d-none btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
        >
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/facebook-4.svg')"
            class="h-20px me-3"
          />
          Continue with Facebook
        </a>
        <!--end::Google link-->

        <!--begin::Google link-->
        <a href="#" class="d-none btn btn-flex flex-center btn-light btn-lg w-100">
          <img
            alt="Logo"
            :src="getAssetPath('media/svg/brand-logos/apple-black.svg')"
            class="h-20px me-3"
          />
          Continue with Apple
        </a>
        <!--end::Google link-->
      </div>
      <!--end::Actions-->
    </VForm>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useAuthStore, type User } from "@/stores/auth";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const store = useAuthStore();
    const router = useRouter();

    const submitButton = ref<HTMLButtonElement | null>(null);

    //Create form validation object
    const login = Yup.object().shape({
      email: Yup.string().email().required().label("Email"),
      password: Yup.string().min(4).required().label("Password"),
    });

    //Form submit function
    const onSubmitLogin = async (values: any) => {
      values = values as User;
      // Clear existing errors
      store.logout();

      if (submitButton.value) {
        // eslint-disable-next-line
        submitButton.value!.disabled = true;
        // Activate indicator
        submitButton.value.setAttribute("data-kt-indicator", "on");
      }

      // Send login request
      await store.login(values);
      const error = Object.values(store.errors);

      if (error.length === 0) {
        router.push({ name: "dashboard" });
        /*Swal.fire({
          text: "You have successfully logged in!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-primary",
          },
        }).then(() => {
          // Go to page after successfully login
          router.push({ name: "dashboard" });
        });*/
      } else {
        Swal.fire({
          text: error[0] as string,
          icon: "error",
          buttonsStyling: false,
          confirmButtonText: "Try again!",
          heightAuto: false,
          customClass: {
            confirmButton: "btn fw-semobold btn-light-danger",
          },
        }).then(() => {
          store.errors = {};
        });
      }

      //Deactivate indicator
      submitButton.value?.removeAttribute("data-kt-indicator");
      // eslint-disable-next-line
        submitButton.value!.disabled = false;
    };

    return {
      onSubmitLogin,
      login,
      submitButton,
      getAssetPath,
    };
  },
});
</script>
