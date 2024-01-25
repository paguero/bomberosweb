<template>
  <div>
    <!--begin::Image input-->
    <div
      class="w-100 image-input image-input-outline mb-3"
      :class="showCancel?'image-input-changed':'image-input-empty'"
      data-kt-image-input="true"
      style=""
    >
      <!--begin::Preview existing avatar-->
      <div class="image-input-wrapper" :style="photo"></div>
      <!--end::Preview existing avatar-->
      <!--begin::Label-->
      <label
        class="
          btn btn-icon btn-circle btn-active-color-primary
          w-25px
          h-25px
          bg-body
          shadow
        "
        data-kt-image-input-action="change"
        data-bs-toggle="tooltip"
        title="Cambiar imagen"
      >
        <i class="bi bi-pencil-fill fs-7"></i>
        <!--begin::Inputs-->
        <input
          type="file"
          name="avatar"
          accept=".png, .jpg, .jpeg"
          @change="onFileChange($event)"
        />
        <input type="hidden" name="avatar_remove" />
        <!--end::Inputs-->
      </label>
      <!--end::Label-->
      
      <!--begin::Remove-->
      <span
        class="
          btn btn-icon btn-circle btn-active-color-primary
          w-25px
          h-25px
          bg-body
          shadow
        "
        data-kt-image-input-action="cancel"
        data-bs-toggle="tooltip"
        title="Remover imagen"
        @click="onFileClear()"
      >
        <i class="bi bi-x fs-2"></i>
      </span>
      <!--end::Remove-->
    </div>
    <!--end::Image input-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type {PropType} from "vue";
import type {ImagenArchivo} from '@/stores/types/ImagenArchivo';

export default defineComponent({
  name: "widget-image",
  components: {},
  props: {
    current_photo: {type:Object as PropType<ImagenArchivo>, required:true},
  },
  //emits: ['inFileChange'],
  setup(props, ctx) {
    const default_photo = ref("media/svg/files/blank-image.svg");
    const showCancel = ref(false);
    const onFileChange = (e) => {
      const file = e.target.files[0];
      if (typeof FileReader === "function") {
        const reader = new FileReader();   

        reader.onload = (event) => {
          showCancel.value = true;
          ctx.emit("inFileChange", {contenido:event?.target?.result, archivo: file, context:props.current_photo?.context});
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    };
    const onFileClear = () => {
      ctx.emit("inFileChange", {contenido:null, archivo: null, context:props.current_photo.context});
    }; 
    const photo = computed(() => {
      return props.current_photo == null||props.current_photo.contenido ===''
        ? `background-image: url(${default_photo.value})` 
        : `background-image: url('${props.current_photo.contenido}')`;
    });
    return {
      onFileChange,
      default_photo,
      photo, showCancel, onFileClear
    };
  },
});
</script>
