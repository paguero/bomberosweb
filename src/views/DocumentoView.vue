<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
    <!-- start page main wrapper -->
    <div
      id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid"
      style="padding-top: 30px"
    >
      <div class="row">
        <div
          data-aos="fade-right fade-left"
          data-aos-delay="100"
          class="buyPatent donation-info col-lg-4 aos-init aos-animate text-center d-lg-block mx-auto resume-content" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">
        >
          <div class="buyPatent-info lift lift-lg sticky-top">
            <div class="donation-info__price">
              <h3>¡Gracias por convertirte en un héroe de verdad!</h3>
            </div>
            <div class="donation-info__img">
              
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="col-md-12 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto"
        >
          <div class="">
              <div class="buySuccess">
              <Form
                                      id="kt_account_edificio_details_form"
                                      class="form d-flex flex-column flex-lg-row"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="home3"
                    role="tabpanel"
                  >
                    <div class="row m-b-lg">
                      <div class="col-md-12">
                       <div class="buySuccess-form">
                          <h1 style="text-align: center">
                            Puedes descargar tu SOAP aquí
                          </h1>

                           <h5 style="text-align: center">
                            Para buscar tu póliza, debes ingresar tu Rut y Patente
                          </h5>
                          <!--div class="problemas alert alert-info">Si has comprado tu SOAP y no has recibido tu póliza. Por favor ten paciencia, existe un problema técnico al momento de informar tu seguro a las municipalidades.
                            Todos los SOAP estamos presentando el problema y estamos a la espera de su solución para poder enviarte tu póliza.
                          </div-->
                          <div class="panel-buscar-polizas mt-5">
                            <div class="row">
                                                            <div class="form-group col-md-4">
                            <label for="rut">Rut</label>
                              <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.cliente.rut"
                                                                name="rut"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                              class="form-control form-rut"
                                                              size="lg"
                                                              id="rut"
                                                              name="rut"
                                                              maxlength="11"
                                                              placeholder="Rut"
                                                              v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                              v-model="cotizacionDetails.cliente.rut"
                                                              />
                                                              </Field>    
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="rut" />
                                                                  </div>
                                                                </div>
                            </div>
                            <div class="form-group col-md-4">
                              <label for="patente">Patente</label>

                              <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.vehiculo.patente"
                                                                name="patente"
                                                               value="value"
                                                               v-mask="'AAAAAA'"
                                                               @change="obtenerVehiculo"
                                                              >
                                                              <Prime-InputText
                                                              class="form-control form-patente p-2"
                                                              name="patente"
                                                              maxlength="8"
                                                              v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                              placeholder="ABCD20"
                                                              v-model="cotizacionDetails.vehiculo.patente"
                                                              />
                                                              </Field>    
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="patente" />
                                                                  </div>
                                                                </div> 
                            </div>
                            <div class="form-group col-md-2">
                              <Prime-Button 
                                                      type="submit"
                                                      class="btn btn-primary"
                                                      label="Buscar"
                                                      :loading="loading"/>
                            </div>
                            </div>
                          </div>
                          <DataTableCotizacion
                            :item="allCotizaciones"
                            hide-default-footer
                            :isLoading="isLoading"
                            :buscando="buscando"
                          >
                          </DataTableCotizacion>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Form>
           </div>
          </div>
        </div>
      </div>
      <!-- Row -->
    </div>
    <!-- end page main wrapper -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed, watch} from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useMarcaStore } from "@/stores/marca";
import { useModeloStore } from "@/stores/modelo";
import { useTipoVehiculoStore } from "@/stores/tipoVehiculo";
import { useVehiculoStore } from "@/stores/vehiculo";
import { useAnioStore } from "@/stores/anio";
import { usePrimaSoapStore } from "@/stores/primaSoap";
import type { ICotizacion } from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { vMaska } from "maska"
import { rutEsValido } from "@/core/validators/YupRut";
import { patenteEsValido } from "@/core/validators/YupPatente";
import MixedWidgetImage from "@/components/widgets/mixed/WidgetImage.vue";
import Editor from "primevue/editor";
moment.locale("es");

export default defineComponent({
  name: "cotizacion-edit",
  components: {
    ErrorMessage,
    Field,
    Form,
    MixedWidgetImage,
    Editor

  },
  
  setup() {
    const router = useRouter();
    const store = useCotizacionStore();
    const storeMarca = useMarcaStore();
    const storeModelo = useModeloStore();
    const storeTipo = useTipoVehiculoStore();
    const storeAnio = useAnioStore();
    const storeCarro = useCarroCompraStore();
    const storeVehiculo = useVehiculoStore();
    const storePrima = usePrimaSoapStore();
    const datosConfirmados = ref(false);
    const loading = ref(true);
    const visible = ref(false);

    const cotizacionsValidator = Yup.object().shape({
      patente: Yup.string().required("Es obligatorio").label("Patente").test("yupIsPatente", "Patente ingresada no es valida", function (value) {
          return patenteEsValido(value);
        }),
		  marca: Yup.string().required("Es obligatorio").label("Marca"),
		  modelo: Yup.string().required("Es obligatorio").label("Modelo"),
		  tipoVehiculo: Yup.string().required("Es obligatorio").label("Tipo Vehículo"),
		  numeroMotor: Yup.string().required("Es obligatorio").label("numeroMotor")

    });

    Yup.addMethod(Yup.string, "yupIsRut", function (mensaje) {
      const { message } = mensaje;
      return this.test("yupIsRut", message, function (value) {
        const { path, createError } = this;
        const { some, more, args } = mensaje;
        // [value] - value of the property being tested
        // [path]  - property name,
        // ...
        return rutEsValido(value);
      });
    });

    Yup.addMethod(Yup.string, "yupIsPatente", function (mensaje) {
      const { message } = mensaje;
      return this.test("yupIsPatente", message, function (value) {
        const { path, createError } = this;
        const { some, more, args } = mensaje;
        // [value] - value of the property being tested
        // [path]  - property name,
        // ...
        return patenteEsValido(value);
      });
    });


    const saveChanges1 = () => {
      loading.value = true;
        storeVehiculo.updateVehiculo(cotizacionDetails.value.vehiculo)
          .then(() => {
            loading.value = false;
            router.push({ name: "info-persona", params:{id:cotizacionDetails.value.cotizacionId} });
          })
          .catch(() => {
            const [error] = Object.values(store.cotizacionErrors);
            Swal.fire({
                text: error,
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Ok",
                heightAuto: false,
                customClass: {
                confirmButton: "btn fw-semobold btn-light-primary",
                },
            });
          });
    };
   
    const route = useRoute();
    const cotizacionId = route.params.id;
    const carro = JSON.parse(store.getCarro());
    const obtenerMarcas =async  (campania:string) => {
      await storeMarca.getMarcas(campania)
        .catch(() => {
          const [error] = Object.values(storeMarca.marcaErrors);
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
    const obtenerModelos = (campania:string, marca: string, tipoVehiculo: string) => {
      storeModelo.getModelos(campania, marca, tipoVehiculo)
        .catch(() => {
          const [error] = Object.values(storeMarca.marcaErrors);
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
    const obtenerTipos = (campania:string) => {
      storeTipo.getTipoVehiculos(campania)
        .catch(() => {
          const [error] = Object.values(storeTipo.tipoVehiculoErrors);
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
    const obtenerAnios = () => {
      storeAnio.getAnios();
    };
    const obtenerCotizacion = async (cotizacionId) =>{
      await store
        .getCotizacion(cotizacionId)
        .then(() => {
          cotizacionDetails.value = store.currentCotizacion;
          cotizacionDetails.value.patente = store.currentCotizacion.vehiculo?.patente
        })
        .catch(() => {
          const [error] = Object.values(store.cotizacionErrors);
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
    }
    const obtenerPrima= async (tipoVehiculo) =>{
      await storePrima
        .getPrimaSoap(cotizacionDetails.value.codigoConvenio, tipoVehiculo)
        .then(() => {
          loading.value = false;
          cotizacionDetails.value.planPesos = storePrima.currentPrimaSoap.primaTecnica;
          cotizacionDetails.value.montoPago = storePrima.currentPrimaSoap.primaTecnica + cotizacionDetails.value.aporte;
        })
        .catch(() => {
          const [error] = Object.values(storePrima.primaSoapErrors);
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
    }
    const obtenerVehiculo= async () =>{
      await storeVehiculo
        .getVehiculo(cotizacionDetails.value.vehiculo.patente)
        .then(() => {
          cotizacionDetails.value.patente = cotizacionDetails.value.vehiculo.patente;
          cotizacionDetails.value.vehiculo = storeVehiculo.currentVehiculo;
          obtenerModelos(store.currentCotizacion.codigoConvenio, storeVehiculo.currentVehiculo.marca, storeVehiculo.currentVehiculo.tipoVehiculo);
        })
        .catch(() => {
          const [error] = Object.values(storeVehiculo.vehiculoErrors);
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
    }
    const obtenerCarro = async (carroId) =>{
      await storeCarro
        .getCarroCompra(carroId)
        .catch(() => {
          const [error] = Object.values(storeCarro.carroCompraErrors);
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
    }
    const allMarcas = computed(() => {
      return storeMarca.allMarcas;
    });
    const allModelos = computed(() => {
      return storeModelo.allModelos;
    });
    const allTipos = computed(() => {
      return storeTipo.allTipoVehiculos;
    });
    const allAnios = computed(() => {
      return storeAnio.allAnios;
    });
    const currentCarroCompra = computed(() => {
      return storeCarro.currentCarroCompra;
    });
    const cotizacionDetails = ref<ICotizacion>({
       			cotizacionId : store.currentCotizacion.cotizacionId,
            carroId : store.currentCotizacion.carroId,
            numeroCotizacion : store.currentCotizacion.numeroCotizacion,
            codigoConvenio : store.currentCotizacion.codigoConvenio,
            codigoTipoSeguro : store.currentCotizacion.codigoTipoSeguro,
            tipoSeguro : store.currentCotizacion.tipoSeguro,
            grupoId : store.currentCotizacion.grupoId,
            vendedorId : store.currentCotizacion.vendedorId,
            fechaCreacion : store.currentCotizacion.fechaCreacion,
            estado : store.currentCotizacion.estado,
            contratado : store.currentCotizacion.contratado,
            fechaContratacion : store.currentCotizacion.fechaContratacion,
            usuario : store.currentCotizacion.usuario,
            nombrePlan : store.currentCotizacion.nombrePlan,
            planContratado : store.currentCotizacion.planContratado,
            planUf : store.currentCotizacion.planUf,
            planPesos : store.currentCotizacion.planPesos,
            comision : store.currentCotizacion.comision,
            valorUf : store.currentCotizacion.valorUf,
            aporte : store.currentCotizacion.aporte,
            numeroFolio : store.currentCotizacion.numeroFolio,
            numeroPoliza : store.currentCotizacion.numeroPoliza,
            fechaActualizacion : store.currentCotizacion.fechaActualizacion,
            usuarioActualizacion : store.currentCotizacion.usuarioActualizacion,
            tokenMedioPago : store.currentCotizacion.tokenMedioPago,
            codigoMedioPago : store.currentCotizacion.codigoMedioPago,
            montoPago : store.currentCotizacion.montoPago,
            fechaTransaccion : store.currentCotizacion.fechaTransaccion,
            exitoso : store.currentCotizacion.exitoso,
            emitida : store.currentCotizacion.emitida,
            anulada : store.currentCotizacion.anulada,
            pdfEnProceso : store.currentCotizacion.pdfEnProceso,
            codigoAutorizacion : store.currentCotizacion.codigoAutorizacion,
            fechaPago : store.currentCotizacion.fechaPago,
            mesPago : store.currentCotizacion.mesPago,
            anioPago : store.currentCotizacion.anioPago,
            numeroTarjeta : store.currentCotizacion.numeroTarjeta,
            notificado : store.currentCotizacion.notificado,
            codigoNotificacion : store.currentCotizacion.codigoNotificacion,
            cotizacionCompania : store.currentCotizacion.cotizacionCompania,
            urlPoliza : store.currentCotizacion.urlPoliza,
            fechaEmision : store.currentCotizacion.fechaEmision,
            fechaInicio : store.currentCotizacion.fechaInicio,
            fechaTermino : store.currentCotizacion.fechaTermino,
            compania : store.currentCotizacion.compania,
            vehiculo:store.currentCotizacion.vehiculo,
            cliente:store.currentCotizacion.cliente,
            patente:store.currentCotizacion?.vehiculo?.patente
    
  });
    watch(() => cotizacionDetails.value.vehiculo?.tipoVehiculo, (newValue) =>  {
      if(cotizacionDetails.value.vehiculo)
        obtenerPrima(newValue);
    });
    /*watch(() => cotizacionDetails.value.vehiculo?.patente, (newValue) =>  {
      if(cotizacionDetails.value.vehiculo)
        obtenerVehiculo(newValue);
    });*/
    return {
      saveChanges1,
      cotizacionDetails,
      cotizacionsValidator,
      allMarcas,
      allModelos,
      allTipos,
      allAnios,
      currentCarroCompra,
      obtenerVehiculo,
      datosConfirmados,
      loading,
      visible
    };
  },
});


</script>
