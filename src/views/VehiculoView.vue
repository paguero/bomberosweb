<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
  
                <!-- start page main wrapper -->
               <div id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid" style="padding-top:30px">
                    <div class="row">
                        <div data-aos="fade-right fade-left" data-aos-delay="100" class="buyPatent donation-info col-lg-4 aos-init aos-animate text-center d-lg-block mx-auto resume-content">

                          <div class="buyPatent-info lift lift-lg sticky-top" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">

                              <div><span>
                               <input type="text" v-mask="'AAAA AA'" v-if="cotizacionDetails.vehiculo" disabled="disabled" maxlength="7" v-model="cotizacionDetails.patente" placeholder="ABCD 20" class="form-control valor-patente">
                                
                                {{cotizacionDetails.vehiculo?.marca}} / {{cotizacionDetails.vehiculo?.modelo}} / {{cotizacionDetails.vehiculo?.anio}}</span></div>
                                      <div class="donation-info__model">
                                       <div class="donation-soap">
                                          <div class="soap">
                                            <h3>{{$filters.formatCurrency(cotizacionDetails.planPesos)}}</h3>
                                            <label>Valor SOAP</label>
                                          </div>
                                          <div>
                                            <span class="plus text-align-center"><i class="fas fa-plus-circle"></i></span>
                                          </div>
                                          <div class="donation">
                                            <h3>{{$filters.formatCurrency(cotizacionDetails.aporte)}}</h3>
                                            <label><i class="fas fa-heart"></i> Tu Aporte</label>
                                          </div>
                                        </div>
                                        <!--<div class="donation-info__model-soap">
                                          <label>Valor SOAP:</label>
                                          <p>{{budget.prima|currency}}</p>
                                        </div>
                                        <div class="donation-info__model-donation">
                                          <label>Tu Aporte:</label>
                                          <p>{{budget.aporte|currency}}</p>
                                        </div>-->
                                      </div>
                                      <div class="donation-info__price">
                                        <label>Total a Pagar</label>
                                        <h3>{{$filters.formatCurrency(cotizacionDetails.montoPago)}}</h3>
                                      </div>
                                      <div class="donation-info__img">
                                        
                                        <div class="arrow autohide">
                                          <span></span>
                                          <span></span>
                                          <span></span>
                                        </div>
                                      </div>

                             
                             

                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="100" class="col-md-12 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto">
                            <div class="card card-white v-application border border-1">
                                <div class="card-body" v-if="cotizacionDetails.vehiculo">
                                    <Form
                                      id="kt_account_edificio_details_form"
                                      class="form d-flex flex-column flex-lg-row"
                                      novalidate="novalidate"
                                      @submit="saveChanges1()"
                                      :validation-schema="cotizacionsValidator"
                                    >
                                        <div class="tab-content" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home3" role="tabpanel">
                                                <div class="row m-b-lg">
                                                    <div class="col-md-12">
                                                      <div class="d-flex align-items-center justify-content-center">
                                                        <h2 class="py-5">Suscripción de <span class="rosa">Vehículo</span></h2>
                                                      </div>
                                                      <h3 id="form-quote">Datos del vehículo a asegurar</h3>
                                                        <p>Verifica los datos con el patrón del auto.</p>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                              <p>*Ingrese Patente</p>
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
                                                            
                                                            <div class="form-group col-md-6 margen-espacial">
                                                                <p>*Marca del Vehículo</p>
                                                               <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.vehiculo.marca"
                                                                name="marca"
                                                                value="value"
                                                              >
                                                               <Prime-Dropdown filter v-model="cotizacionDetails.vehiculo.marca" :options="allMarcas" 
                                                                optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Marca" class="w-100"
                                                                
                                                                @update:modelValue="handleChange" :model-value="field.value" />
                                                               </Field>
                                                               <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="marca" />
                                                                  </div>
                                                                </div> 
                                                            </div>
                                                            <div class="form-group col-md-6 margen-espacial">
                                                                <p>*Modelo del Vehículo</p>
                                                                 <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.vehiculo.modelo"
                                                                name="modelo"
                                                                value="value"
                                                              >
                                                                <Prime-Dropdown v-model="cotizacionDetails.vehiculo.modelo" :options="allModelos" 
                                                                optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Modelo" class="w-100" 
                                                                 @update:modelValue="handleChange" :model-value="field.value" />
                                                                </Field>
                                                               <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="modelo" />
                                                                  </div>
                                                                </div> 

                                                            </div>
                                                            <div class="form-group col-md-6 margen-espacial">
                                                                <p>*Tipo de Vehículo</p>
                                                                
                                                                <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.vehiculo.tipoVehiculo"
                                                                name="tipoVehiculo"
                                                                value="value"
                                                              >
                                                                <Prime-Dropdown v-model="cotizacionDetails.vehiculo.tipoVehiculo" :options="allTipos" 
                                                                optionLabel="nombre" optionValue="nombre" placeholder="Seleccione Tipo de vehículo" class="w-100"
                                                                 @update:modelValue="handleChange" :model-value="field.value" />
                                                                </Field>
                                                               <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="tipovehiculo" />
                                                                  </div>
                                                                </div> 
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <p>*Nº Motor</p>
                                                                <Field type="text"
                                                                    maxlength="50" name="numeroMotor"
                                                                    class="form-control p-2"
                                                                    placeholder="Numero Motor"
                                                                    v-model="cotizacionDetails.vehiculo.numeroMotor"/>
                                                                    <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="numeroMotor" />
                                                                  </div>
                                                                </div> 
                                                            </div>
                                                            <div class="form-group col-md-6 margen-espacial">
                                                                <p>*Año del vehículo</p>
                                                                 <Prime-Dropdown v-model="cotizacionDetails.vehiculo.anio" :options="allAnios" 
                                                                 placeholder="Seleccione aAño" class="w-100" />
                                                            </div>
                                                        </div>
                                                  
                                                    </div>
                                                </div>
                                            </div>
                                             <div class="card card-bordered shadow-none mt-2 mb-2">
                                          <!-- card body -->
                                          <div class="card-body p-6">
                                             <!-- check input -->
                                             <div class="d-flex">
                                                <div class="form-check me-2">
                                                   <Prime-Checkbox id="chbx" v-model="datosConfirmados" :class="{ 'p-invalid': errorMessage }" binary aria-describedby="chbx-error" />
                                                </div>
                                                <div>
                                                   <p class="mb-0 small">*Acepto las políticas, <a href="#;" @click="visible=true">terminos y condiciones</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>                                               
                                                <div class="d-flex flex-row">
                                                  
                                                    <Prime-Button 
                                                    :disabled="!datosConfirmados"
                                                      type="submit"
                                                      class="btn btn-primary"
                                                      label="Continuar" :loading="loading"/>
                                                      <div></div>
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
                <Prime-Dialog v-model:visible="visible" modal header="Términos y condiciones" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
                    <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="mb-5">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p class="mb-5">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <p class="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p class="mb-5">
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                        ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
                        ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa
                        qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                        maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae
                        non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                </Prime-Dialog>
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

    onMounted(async () => {     
      obtenerAnios();
      loading.value = true;
      await obtenerCotizacion(cotizacionId);
      obtenerMarcas(store.currentCotizacion.codigoConvenio);
      obtenerModelos(store.currentCotizacion.codigoConvenio, store.currentCotizacion.vehiculo.marca, store.currentCotizacion.vehiculo.tipoVehiculo);
      obtenerTipos(store.currentCotizacion.codigoConvenio);
      obtenerCarro(carro.carroId);
      loading.value=false;
    });
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
