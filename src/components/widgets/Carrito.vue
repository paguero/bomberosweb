<template>
  <!--begin::Chat drawer-->
  <div
    id="kt_drawer_chat"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
  <div class="offcanvas-carro" tabindex="-1">
  <div class="offcanvas-header border-bottom">
    <div class="text-start">
      <h5 id="offcanvasRightLabel" class="mb-0 fs-4">Carrito Compras</h5>
      <small>Productos agregados</small>
    </div>
    
  </div>
  <div class="offcanvas-body">

    <div class="">
      <!-- alert -->
      <div class="alert alert-info p-2" role="alert">
        Tienes <a href="#!" class="alert-link">{{   $filters.formatCurrency(misPuntos.disponibles) }}</a> puntos disponibles
      </div>
      <ul class="list-group list-group-flush  border-top">
        <!-- list group -->
        <template v-for="(item, index) in productos" :key="index">
        <li class="list-group-item py-3 ps-0  border-bottom">
          <!-- row -->
          <div class="row align-items-center">
            <div class="col-3 col-md-2">
              <!-- img --> 
              <img :src="item.imagen" :alt="item.nombreProducto" class="img-fluid"></div>
            <div class="col-4 col-md-6 col-lg-5">
              <!-- title -->
              <a href="#" class="text-inherit">
                <h6 class="mb-0">{{ item.nombreProducto }}</h6>
              </a>
              <span><small class="text-muted">{{item.puntos}}</small></span>
              <!-- text -->
              <div class="mt-2 small lh-1"> <button @click="eliminarProductoCarroCompra(item.idCarroCompra,item.idProducto,item.idVariacion)" class="btn btn-sm btn-transparent text-decoration-none text-inherit"> <span class="me-1 align-text-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 text-success">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                      </path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg></span><span class="text-muted">Eliminar</span></button></div>
            </div>
            <!-- input group -->
            <div class="col-3 col-md-3 col-lg-3">
              <!-- input -->
              <!-- input -->
              <div class="input-group input-spinner  ">
                <input type="button" value="-" class="button-minus  btn  btn-sm " data-field="quantity"  @click="descontarUnidad(item)">
                <input type="number" step="1" max="10" :value="item.cantidad" name="quantity" class="quantity-field form-control-sm form-input   ">
                <input type="button" value="+" class="button-plus btn btn-sm " data-field="quantity" @click="agregarUnidad(item)">
              </div>

            </div>
            <!-- price -->
            <div class="col-2 text-lg-end text-start text-md-end col-md-2">
              <span class="fw-bold">{{ $filters.formatCurrency(item.totalPuntos) }}</span>

            </div>
          </div>

        </li>
        </template>
        <!-- list group -->
      </ul>
      <!-- btn -->
      <div class="d-flex justify-content-between mt-4" v-if="productos.length>0">
        <router-link 
            :to="{name:'carro-compra'}"
            class="btn btn-primary me-2"
            type="button"
            data-kt-element="send"
          >
            Continuar al Checkout
          </router-link>
        <a href="#!" class="btn btn-dark" @click="actualizarCarroCompra()">Actualizar Carro</a>
      </div>

    </div>
  </div>
</div>
  </div>
  <!--end::Chat drawer-->
</template>

<script lang="ts">
import { defineComponent, ref,computed, onMounted ,getCurrentInstance} from "vue";
import { useBus } from "../../../core/bus/bus";
import { useStore } from "vuex";
import { Actions, Mutations } from "@/store/enums/StoreEnums";
import { useRouter } from "vue-router";
import Swal from "../../../../node_modules/sweetalert2/dist/sweetalert2.min.js"
//   ../../sweetalert2.min.js"
interface CarroCompra {
  idCarroCompra : string;
  numeroIdentificadorCliente: string;
  productoCarroCompraList:Array<any>;
}

export default defineComponent({
  name: "upgrade-to-pro",
  components: {
  },
  
  setup() {
    const app = getCurrentInstance();
    const { bus } = useBus();
    const store = useStore();
    const router = useRouter();
    const idCarroCompra = ref('');
     onMounted(() => {
      var numeroIdentificadorCliente = 0;
      if(usuario.value.isAuthenticated)
      {
        numeroIdentificadorCliente = usuario.value.userProfile.identification_number;
      }
      obtenerCarroCompra(numeroIdentificadorCliente);     
      obtenerMisPuntos(numeroIdentificadorCliente);
    });

    bus.on('actualiza-carro-compra', (idCliente  ) => {
       console.log("RECIBIENDO CARRO COMPRA" + JSON.stringify(idCliente)  );
       obtenerCarroCompra(idCliente);   
    }); 

    bus.on('limpia-carro-compra', () => {      
       obtenerCarroCompra(0);   
    });
    
    const obtenerCarroCompra = (idCliente)=>{
      store
          .dispatch(Actions.GET_CARRO_COMPRA, idCliente )
          .then(() => {   
            obtenerProductosCarro(store.getters.currentCarroCompra.idCarroCompra);
          })
          .catch(() => {
            const [error] = Object.keys(store.getters.getCarroCompraErrors)
          });
    }

    const eliminarProductoCarroCompra = (idCarroCompra ,idProducto,idVariacion) => {
      Swal.fire({
        title: 'Carro Compra',
        text: '¿Está seguro de eliminar Producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        showLoaderOnConfirm: true,        
        allowOutsideClick: () => !Swal.isLoading(),
        allowEscapeKey: false,
        preConfirm: function () {          
          return  store
                    .dispatch(Actions.DEL_PRODUCTO_CARRO_COMPRA, { idCarroCompra:idCarroCompra , idProducto : idProducto, idVariacion : idVariacion })
                    .then(() => {            
                      bus.emit("actualiza-carro-compra", usuario.value.userProfile.identification_number);  
                      bus.emit("actualiza-carro-compra-view", usuario.value.userProfile.identification_number);          
                    })
                    .catch(() => {
                      const [error] = Object.keys(store.getters.getCarroCompraErrors);
                      Swal.fire({
                        text: store.getters.getCarroCompraErrors[error],
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Intentar nuevamente!",
                        customClass: {
                          confirmButton: "btn fw-bold btn-light-danger",
                        },
                      });
                    });
        }
      })
    };

    const actualizarCarroCompra = ( ) => {    
      
      if(!usuario.value.isAuthenticated)
      {
        router.push({ name: "pre-sign-in" })
      }
      else
      {
        const numeroIdentificadorCliente = usuario.value.userProfile.identification_number;
       //  var productos = Array<any>();
        // unidad.cantidad = 1;
      //   productos.push(unidad);
         store
          .dispatch(Actions.INS_CARRO_COMPRA, { numeroIdentificadorCliente:numeroIdentificadorCliente , productoCarroCompraList : productos.value })
          .then(() => {
            bus.emit("actualiza-carro-compra", numeroIdentificadorCliente);
            bus.emit("actualiza-carro-compra-view", numeroIdentificadorCliente);   
            Swal.fire('Sus productos se han actualizado correctamente', '', 'success')
          })
          .catch(() => {
            const [error] = Object.keys(store.getters.getCarroCompraErrors);
          });
      }        
    };


    const obtenerProductosCarro = (idCarro)=>{
        store
          .dispatch(Actions.GET_CARRO_COMPRA_PRODUCTOS, idCarro).then(()=>{
              bus.emit("unidades-carro-compra", store.getters.allCarroCompraProductos.length);
          });
    }

    const carroCompra = computed(()=>{
      return store.getters.currentCarroCompra;
    });

    const productos = computed(()=>{
      return store.getters.allCarroCompraProductos;
    });

    const usuario = computed(() => {
      return app?.appContext.config.globalProperties.$oidc;   
    });

    const agregarUnidad = (producto) => {
      producto.cantidad =  producto.cantidad +1;
     // unidadProducto.value = unidadProducto.value - 1 ;
    }

    const descontarUnidad = (producto) => {
      producto.cantidad =  producto.cantidad -1;
     // unidadProducto.value = unidadProducto.value - 1 ;
    }    
    
    const obtenerMisPuntos = (numeroIdentificadorCliente)  => {
      store
          .dispatch(Actions.GET_MIS_PUNTOS,numeroIdentificadorCliente  )       
          .catch(() => {
            const [error] = Object.keys(store.getters.getCarroCompraErrors);
          });   
    }
    const misPuntos = computed(()=>{
      return store.getters.currentMisPuntos;
    });


    return {
      misPuntos,
      obtenerMisPuntos,
      actualizarCarroCompra,
      agregarUnidad,
      descontarUnidad,
      eliminarProductoCarroCompra,
      productos,
      carroCompra,
      idCarroCompra,
      
    };
  },
});
</script>
<style>
.offcanvas-carro {
    background-clip: padding-box;
    background-color: var(--bs-offcanvas-bg);
    bottom: 0;
    color: var(--bs-offcanvas-color);
    display: flex;
    flex-direction: column;
    max-width: 100%;
    outline: 0;
    padding: 20px;
    transition: transform 0.3s ease-in-out;
    visibility: visible!important;
    z-index: 1045;

    
}
</style>