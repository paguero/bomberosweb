import * as Yup from "yup";

function telefonoEsValido(telefono) {
    if(telefono==='')
      return true;
    if (!telefono || telefono.trim().length < 9) return false;
    const telefonoLimpio = telefono.replace(/[^0-9-]/g, "");
  
    if (telefonoLimpio.length < 9) return false;
  
    return true;
  }
  
  function yupIsTelefonoChile(msg) {
    return function(){
      return Yup.string().test({
         name: 'yupIsTelefonoChile',
         exclusive: false,
         message: `no es un teléfono valido`,
         test: (value) => telefonoEsValido(value),
       });
     };
  }

  export { telefonoEsValido, yupIsTelefonoChile };