<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card header-->
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">CONTACTO</div>
      <!--begin::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          class="d-flex justify-content-end"
          data-kt-subscription-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            @click="exportExcel"
            type="button"
            class="btn btn-light-primary me-3"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Exportar
          </button>
          <!--end::Export-->

          <!--begin::Add CONTACTO-->
          <router-link
            class="btn btn-primary"
            :to="{name:'apps-contacto-create'}"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Nueva contacto
          </router-link>
          <!--end::Add CONTACTO-->
           
        </div>
        <!--end::Toolbar-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0">
      <DataTable
        :value="allContactos"
        :paginator="true"
        :rows="10"
        dataKey="contactoId"
        :rowHover="true"
        v-model:selection="selectedContactos"
        v-model:filters="filters1"
        :loading="loading"
        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 25, 50]"
        currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} registros"
        :globalFilterFields="[
          'lenguajeId','contactoId','fechaContacto','nombres','apellidoPaterno','apellidoMaterno','telefono','email','motivo','observacion','estadoContacto'
        ]"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <Prime-InputText
                v-model="filters1['global'].value"
                class="form-control w-250px ps-14"
                placeholder="Buscar"
              />
            </span>
          </div>
        </template>

        <template #empty> No existen datos. </template>
        <template #loading> Cargando información. Por favor espere. </template>
        <Column
          selectionMode="multiple"
          style="width: 3rem"
          :exportable="false"
        ></Column>
                <Column
          field="lenguajeId"
          header="Lenguaje Id"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.lenguajeId }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Lenguaje Id"
            />
          </template>
        </Column>
                <Column
          field="contactoId"
          header="Contacto Id"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.contactoId }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Contacto Id"
            />
          </template>
        </Column>
                <Column
          field="fechaContacto"
          header="Fecha Contacto"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.fechaContacto }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Fecha Contacto"
            />
          </template>
        </Column>
                <Column
          field="nombres"
          header="Nombres"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.nombres }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Nombres"
            />
          </template>
        </Column>
                <Column
          field="apellidoPaterno"
          header="Apellido Paterno"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.apellidoPaterno }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Apellido Paterno"
            />
          </template>
        </Column>
                <Column
          field="apellidoMaterno"
          header="Apellido Materno"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.apellidoMaterno }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Apellido Materno"
            />
          </template>
        </Column>
                <Column
          field="telefono"
          header="Telefono"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.telefono }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Telefono"
            />
          </template>
        </Column>
                <Column
          field="email"
          header="Email"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.email }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Email"
            />
          </template>
        </Column>
                <Column
          field="motivo"
          header="Motivo"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.motivo }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Motivo"
            />
          </template>
        </Column>
                <Column
          field="observacion"
          header="Observacion"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.observacion }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Observacion"
            />
          </template>
        </Column>
                <Column
          field="estadoContacto"
          header="Estado Contacto"
          sortable
          style="min-width: 9rem"
        >
          <template #body="{ data }">
            {{ data.estadoContacto }}
          </template>
          <template #filter="{ filterModel }">
            <Prime-InputText
              type="text"
              v-model="filterModel.value"
              class="p-column-filter"
              placeholder="Estado Contacto"
            />
          </template>
        </Column>
                <Column field="base" header="Acciones" dataType="boolean" style="min-width: 6rem">
            <template #body="{ data }">
                <a
                    href="#;"
                    class=""
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                    >Acciones
                    <KTIcon icon-name="down" icon-class="fs-5 m-0" />
                  </a>
                  <!--begin::Menu-->
                  <div
                    class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semobold fs-7 w-125px py-4"
                    data-kt-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3 d-flex flex-row align-items-center">
                      <i class="fa-regular fa-pen-to-square mr-2"></i>
                     <router-link
                        :to="{name: 'apps-contacto-edit',params: { , contactoId : element.contactoId }}"
                        class="menu-link px-3"
                        >Editar</router-link
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3 d-flex flex-row align-items-center">
                     <i class="fa-regular fa-trash-can mr-2"></i>
                      <a class="menu-link px-3" @click="confirmDeleteContacto(data)"
                        >Eliminar</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3 d-flex flex-row align-items-center">
                      <i class="fa-regular fa-copy mr-2"></i>
                      <a  class="menu-link px-3"
                        >Duplicar</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <div class="separator my-3"></div>
                    <!--begin::Menu item-->
                    <div class="menu-item px-3 d-flex flex-row align-items-center">
                      <i class="fa-regular fa-eye mr-2"></i>
                      <a  class="menu-link px-3"
                        >Publicar</a
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3 d-flex flex-row align-items-center">
                      <i class="fa-regular fa-eye-slash mr-2"></i>
                      <a  class="menu-link px-3"
                        >Despublicar</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
            </template>
           
        </Column>   
        <Column :exportable="false" style="min-width: 8rem">
          <template #body="slotProps">
            <Prime-Button
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success me-2"
              @click="editContacto(slotProps.data)"
            />
            <Prime-Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteContacto(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>
    <!--end::Card body-->
    <Prime-Dialog v-model:visible="deleteContactoDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span v-if="contacto">¿Está seguro de eliminar el registro <b>{{contacto.nombre}}</b>?</span>
        </div>
        <template #footer>
            <Prime-Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteContactoDialog = false"/>
            <Prime-Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteContacto" />
        </template>
    </Prime-Dialog>

    <Prime-Dialog v-model:visible="deleteContactosDialog" :style="{width: '450px'}" header="Confirm" :modal="true">
        <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
            <span>¿Está seguro de eliminar los registros seleccionados?</span>
        </div>
        <template #footer>
            <Prime-Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteContactosDialog = false"/>
            <Prime-Button label="Sí" icon="pi pi-check" class="p-button-text" @click="deleteSelectedContactos" />
        </template>
    </Prime-Dialog>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import _ from "lodash";
import { FilterMatchMode, FilterOperator } from "primevue/api";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { useLenguajeStore } from "@/stores/lenguaje";
import { useContactoStore } from "@/stores/contacto";
import type { IContacto } from "@/stores/contacto";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import moment from "moment";
moment.locale("es");

interface Buscador {
  fechaInicio?: Date;
  fechaTermino?: Date;
}

export default defineComponent({
  name: "contacto-list",
  components: {
    DataTable,
    Column
  },
  
  setup() {
    const router = useRouter();
    const submitButton1 = ref<HTMLElement | null>(null);
    const deleteContactoDialog = ref(false);
    const deleteContactosDialog = ref(false);
    const selectedContactos = ref(null);
    const contacto = ref<IContacto>();
    const store = useContactoStore();
    const authStore = useAuthStore();
     const storeLenguaje = useLenguajeStore();
    const id = ref(null);
    onMounted(() => {
      buscarLenguajes();
      buscarContactos();
    });
    const buscarLenguajes = () => {
      storeLenguaje.getLenguajes();
    };
    const lenguajes = computed(() => {
      return storeLenguaje.allLenguajes;
    });
    const buscadorValidator = Yup.object().shape({});
    const buscarContactos = () => {
      store.getContactos()
        .then(() => {
          loading.value = false;
          reinitializeComponents();
        })
        .catch(() => {
          const [error] = Object.values(store.contactoErrors);
          Swal.fire({
            text: error,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Ok",
            heightAuto: false,
            customClass: {
              confirmButton: "btn fw-semobold btn-light-primary",
            },
          })
        });
    };
    const dt = ref();
    const formatDate = (value) => {
      value = new Date(value);
      return value.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    };
    const formatCurrency = (value) => {
      return value.toLocaleString("es-CL", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        style: "currency",
        currency: "CLP",
      });
    };
    const dataexport = () => {
      const newJson = store.allContactos.map((rec) => {
        return {
          /*"Nombre Campaña": rec.nombre,
          "F. Desde":formatDate (rec.desde),
          "F. Hasta":formatDate (rec.hasta),
          "Campaña Habilitada": rec.activo ? "SI" : "NO" */
        };
      });
      return newJson;
    };

    const exportExcel = () => {
      import("xlsx").then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(dataexport());
        const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
        const excelBuffer = xlsx.write(workbook, {
          bookType: "xlsx",
          type: "array",
        });
        saveAsExcelFile(excelBuffer, "contacto");
      });
    };
    const saveAsExcelFile = (buffer, fileName) => {
      import("file-saver").then((FileSaver) => {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });
        FileSaver.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      });
    };
	const currentUser = computed(() => {
      return authStore.user;
    });
    const allContactos = computed(() => {
      return store.allContactos;
    });
    
    const editContacto = (element) => {
      router.push({
        name: "apps-contacto-edit",
        params: { , contactoId : element.contactoId },
      });
    };
    const confirmDeleteContacto = (element) => {
        contacto.value = element;
        deletecontactoDialog.value = true;
    };
    const deleteContacto = () => {
        deleteContactoDialog.value = false;
        store.deleteContacto(contacto.value.contactoId)
          .then(() => {
            Swal.fire({
              text: "El registro se ha eliminado correctamente.",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () { 
              contacto.value = undefined;
              buscarContactos();
            });
          })
          .catch(() => {
              const [error] = Object.values(store.contactoErrors);
              Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Intentar nuevamente!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
          });
    };
    const confirmDeleteSelected = () => {
        deleteContactosDialog.value = true;
    };
    const deleteSelectedContactos = () => {
        deleteContactosDialog.value = false;
        selectedContactos.value = null;
    };
    const filters1 = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    const exportCSV = () => {
        dt.value.exportCSV();
    }
    const visibleFull = ref(false);
    const search = ref(null);
    const loading = ref(true);
    return {
      filters1,
      selectedContactos,
      loading,
      buscadorValidator,
      buscarContactos,
      submitButton1,
      allContactos,
       visibleFull,
      id,
      exportExcel,
      formatDate,
      formatCurrency,
      confirmDeleteContacto,
      deleteContacto,
      confirmDeleteSelected,
      deleteSelectedContactos,
      contacto,
      editContacto,
      deleteContactoDialog,
      deleteContactosDialog,
      lenguajes
    };
  },
});
</script>

	
	export default {
	  state,
	  actions,
	  mutations
	};

