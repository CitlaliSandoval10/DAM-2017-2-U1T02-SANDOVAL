 /////*****CUNENTA EL NUMERO DE LETRAS******//////
 function numLetras(textoArea)
 {
 
         var total = 0;
         var letras = textoArea.split("");
         for (var _i = 0, letras_2 = letras; _i < letras_2.length; _i++) {
             var letra = letras_2[_i];
             if (/[a-z]/.test(letra.toLocaleLowerCase()))
                 total++;
         }
         return total;
 
}
console.log("El numero de letras es: "+numLetras("hola"));