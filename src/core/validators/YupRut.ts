import * as Yup from "yup"; 

function rutEsValido(rut) {
    if(rut==='')
      return true;
    if (!rut || rut.trim().length < 3) return false;
    const rutLimpio = rut.replace(/[^0-9kK-]/g, "");
  
    if (rutLimpio.length < 3) return false;
  
    const split = rutLimpio.split("-");
    if (split.length !== 2) return false;
  
    const num = parseInt(split[0], 10);
    const dgv = split[1];
  
    const dvCalc = calculateDV(num);
    return dvCalc.toUpperCase() === dgv.toUpperCase();
  }

  function rutEsPersona(rut) {
      if(rut==='' || rut==null)
        return true;
      rut = rut.replace(/\./g,'').replace(/-/g, '').trim().toLowerCase();
      if (!rut || rut.trim().length < 3) return false;
      const rutLimpio = rut.replace(/[^0-9kK-]/g, "");
    
      if (rutLimpio.length < 3) return false;
      const split = rutLimpio.substr(0, rutLimpio.length-1);
   
      return parseInt(split, 10)<50000000;
  }
  function formatRut(rut) {
    // XX.XXX.XXX-X
    const newRut = rut.replace(/\./g,'').replace(/-/g, '').trim().toLowerCase();
    const lastDigit = newRut.substr(-1, 1);
    const rutDigit = newRut.substr(0, newRut.length-1)
    let format = '';
    for (let i = rutDigit.length; i > 0; i--) {
      const e = rutDigit.charAt(i-1);
      format = e.concat(format);
      if (i % 3 === 0){
        format = '.'.concat(format);
      }
    }
    return format.concat('-').concat(lastDigit);
  }

  function calculateDV(rut) {
    const cuerpo = `${rut}`;
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
  
    // Para cada dígito del Cuerpo
    for (let i = 1; i <= cuerpo.length; i++) {
      // Obtener su Producto con el Múltiplo Correspondiente
      const index = multiplo * parseInt(cuerpo.charAt(cuerpo.length - i));
  
      // Sumar al Contador General
      suma += index;
  
      // Consolidar Múltiplo dentro del rango [2,7]
      if (multiplo < 7) {
        multiplo += 1;
      } else {
        multiplo = 2;
      }
    }
  
    // Calcular Dígito Verificador en base al Módulo 11
    const dvEsperado = 11 - (suma % 11);
    if (dvEsperado === 10) return "K";
    if (dvEsperado === 11) return "0";
    return `${dvEsperado}`;
  }
  
  function yupIsRut(msg) {
    return function(){
      return Yup.string().test({
         name: 'yupIsRut',
         exclusive: false,
         message: `no es un rut valido`,
         test: (value) => rutEsValido(value),
       });
     };
  }

  export { rutEsValido, calculateDV, rutEsPersona, formatRut, yupIsRut };