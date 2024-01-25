import * as Yup from "yup";

function patenteEsValido(patente) {
    if(patente==null || patente==='')
        return true;
    patente =  patente.replace(/ /g, "");
    //var regex = /[a-zA-Z]{4}[0-9]{2}[0-9kK]{0,1}|[a-zA-Z]{2}[0-9]{4}[0-9kK]{0,1}|[bcdfghjklprstvwxyzBCDFGHJKLPRSTVWXYZ]{4}[0-9]{2}[0-9kK]{0,1}|[a-zA-Z]{3}[0-9]{3}[0-9kK]{0,1}|[a-zA-Z]{2}0[0-9]{3}[0-9kK]{0,1}|[A-Z]{1}[0-9]{4}[0-9kK]{0,1}|[A-Z]{2}[0-9]{3}[0-9kK]{0,1}$/
    var regex = /([^. \s'@AEIMNOQUaeimnoqu,0123456789-]{4}\d{2})|([^.\s'@,0123456789-]{2}\d{4})|([^.\s'@,0123456789-]{3}\d{3})$/
    var regex2 = /^[a-zA-Z]{2}[0-9]{2}[0-9]{2}|([b-d,f-h,j-l,p,r-t,v-z]|[B-D,F-H,J-L,P,R-T,V-Z]){2}([b-d,f-h,j-l,p,r-t,v-z]|[B-D,F-H,J-L,P,R-T,V-Z]){2}[0-9]{2}|[a-zA-Z]{3}[0-9]{3}[0-9kK]{0,1}|[a-zA-Z]{2}0[0-9]{3}[0-9kK]{0,1}$/
    var bool = (regex.test(patente) && regex2.test(patente));
    return bool;
}

export { patenteEsValido };