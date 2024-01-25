<template>
  <div class="content-wrapper flex-row-fluid container space-2 space-3--lg">
  
                <!-- start page main wrapper -->
               <div id="mt-50 main-wrapper portal-content d-flex content d-flex flex-column flex-column-fluid container-fluid" style="padding-top:30px">
                    <div class="row">
                        <div data-aos="fade-right fade-left" data-aos-delay="100" class="buyPatent donation-info col-lg-4 aos-init aos-animate text-center d-lg-block mx-auto resume-content">

                          <div class="buyPatent-info lift lift-lg sticky-top" style="min-height:230px;background: url('/media/img/latfirefighter.png');background-position: center 0; background-size: cover;">
                              <div><span>
                               <input type="text" v-mask="'AAAA AA'" v-if="cotizacionDetails.vehiculo" disabled="disabled" maxlength="7" v-model="cotizacionDetails.vehiculo.patente" placeholder="ABCD 20" class="form-control valor-patente">
                               
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
                        <div v-if="cotizacionDetails.cliente" data-aos="fade-up" data-aos-delay="100" class="v-application col-md-12 col-lg-8 aos-init aos-animate content d-flex flex-column mt-1 mb-5 mx-auto">
                            <div class="card card-white v-application border border-1">
                                <div class="card-body">
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
                                                        
                                                   <h3 id="form-quote">Datos del propietario del vehículo</h3>
                                                        <span class="text-danger">(En caso de no estar actualizados, corregir sobre el mismo campo)</span>
                                                        <div class="row">
                                                            <div class="form-group col-md-6">
                                                                <label>*RUT</label>
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
                                                            <div class="form-group col-md-6">
                                                                <label>*Nombre / Razón Social</label>
                                                                <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.cliente.nombre"
                                                                name="nombre"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                                            class="form-control form-patente"
                                                                            maxlength="75"
                                                                            placeholder="Ingrese Nombres"
                                                                            v-model="cotizacionDetails.cliente.nombre"
                                                                            v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                                            /></Field>
                                                                          <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="nombre" />
                                                                  </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>*Apellido Paterno</label>
                                                                <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.cliente.apellidoPaterno"
                                                                name="apellidoPaterno"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                                            class="form-control"
                                                                            maxlength="75"
                                                                            placeholder="Ingrese Apellido Paterno"
                                                                            v-model="cotizacionDetails.cliente.apellidoPaterno"
                                                                            v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                                            /></Field>
                                                                            <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="apellidoPaterno" />
                                                                  </div>
                                                                </div>
                                                            </div>
                                                            <div class="form-group col-md-6">
                                                                <label>*Apellido Materno</label>
                                                                <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.cliente.apellidoMaterno"
                                                                name="apellidoMaterno"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                                            class="form-control"
                                                                            maxlength="75"
                                                                            placeholder="Ingrese Apellido Materno"
                                                                            v-model="cotizacionDetails.cliente.apellidoMaterno"
                                                                            v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"/>
                                                                </Field>
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="apellidoMaterno" />
                                                                  </div>
                                                                </div>
                                                            </div>
                                                            
                                                            
                                                            <div class="form-group col-md-6">
                                                                <label>*Correo electrónico</label>
                                                                <Field 
                                                                v-slot="{ field,handleChange }"
                                                                v-model="cotizacionDetails.cliente.email"
                                                                name="email"
                                                               value="value"
                                                              >
                                                                <Prime-InputText
                                                                            class="form-control"
                                                                            maxlength="75"
                                                                            placeholder="Ingrese Email"
                                                                            v-model="cotizacionDetails.cliente.email"
                                                                            v-bind="field"
                                                              @update:modelValue="handleChange" :model-value="field.value"
                                                                            />
                                                                            </Field>
                                                                <div class="fv-plugins-message-container">
                                                                  <div class="fv-help-block">
                                                                    <ErrorMessage name="email" />
                                                                  </div>
                                                                </div>
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
                                                   <!-- title -->
                                                   <h5 class="mb-1 h6">He revisado la información</h5>
                                                   <p class="mb-0 small">La información que aparece es correcta.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                            <div class="d-flex flex-row">
                                              <router-link :to="{ name: 'info-vehiculo', params: { id: cotizacionDetails.cotizacionId }}" class="btn btn-secondary">
                                              Volver</router-link>
                                            
                                                   <Prime-Button :disabled="!datosConfirmados"
                                                      type="submit"
                                                      class="btn btn-primary"
                                                      label="Continuar"
                                                      :loading="loading"/>
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
import { ref, defineComponent, onMounted, computed } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import _ from "lodash";
import { useRouter, useRoute} from "vue-router";
import { useCarroCompraStore } from "@/stores/carroCompra";
import { useCotizacionStore } from "@/stores/cotizacion";
import { useMarcaStore } from "@/stores/marca";
import { useModeloStore } from "@/stores/modelo";
import { useTipoVehiculoStore } from "@/stores/tipoVehiculo";
import { useClienteStore } from "@/stores/cliente";
import type { ICotizacion } from "@/stores/cotizacion";
import * as Yup from "yup";
import Swal from "sweetalert2/dist/sweetalert2.js";
import moment from "moment";
import { rutEsValido } from "@/core/validators/YupRut";
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
    const storeCliente = useClienteStore();
    const storeCarro = useCarroCompraStore();
    const datosConfirmados = ref(false);
    const loading = ref(false);
    const cotizacionsValidator = Yup.object().shape({
      rut: Yup.string().required("Es obligatorio").label("Rut").test("yupIsRut", "Rut ingresado no es valido", function (value) {
          return rutEsValido(value);
        }),
		  nombre: Yup.string().required("Es obligatorio").label("Nombre"),
		  apellidoPaterno: Yup.string().required("Es obligatorio").label("Apellido Paterno"),
		  apellidoMaterno: Yup.string().required("Es obligatorio").label("Apellido Materno"),
		  email: Yup.string().required("Es obligatorio").email("Email inválido").label("Email")

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
    
    const saveChanges1 = () => {
        loading.value=true;
        storeCliente.updateCliente(cotizacionDetails.value.cliente)
          .then(() => {
            loading.value = false;
            router.push({ name: "info-aporte", params:{id:cotizacionDetails.value.cotizacionId} });
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
          });    };
   
    const route = useRoute();
    const cotizacionId = route.params.id;
    const carro = JSON.parse(store.getCarro());

    onMounted(async () => {     
      obtenerCotizacion(cotizacionId);
      obtenerCarro(carro.carroId);
    });
    
    const obtenerCotizacion = (cotizacionId) =>{
      store
        .getCotizacion(cotizacionId)
        .then(() => {
          cotizacionDetails.value = store.currentCotizacion;
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

    const obtenerCarro = (carroId) =>{
      storeCarro
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
            patente:''
    
  });

    return {
      loading,
      saveChanges1,
      cotizacionDetails,
      cotizacionsValidator,
      currentCarroCompra,
      datosConfirmados
    };
  },
});


</script>
