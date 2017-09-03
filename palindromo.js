
/////****RETORNA CADENA Y VERIFICA SI ES PALINDROMO****////////
function palindromo(cadena) {
 
  var resultado = "La cadena \""+cadena+"\" \n";
 
  // Pasar a minusculas la cadena
  var cadenaO = cadena.toLowerCase();
 
  // Convertir la cadena en un array
  var letrasE = cadenaO.split("");
 
  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinE = "";
  for(i in letrasE) {
    if(letrasE[i] != " ") {
      cadenaSinE += letrasE[i];
    }
  }
 
  var letras = cadenaSinE.split("");
  var letrasReves = cadenaSinE.split("").reverse();
 
  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras) {
    if(letras[i] == letrasReves[i]) {
      // Todo bien
    }
    else {
      // Alguna letra es distinta, por lo que ya no es un palindromo
      iguales = false;
    }
  }
 
  if(iguales) {
    resultado += " es un palíndromo";
  }
  else {
    resultado += " no es un palíndromo";
  }
 
  return resultado;
}
 
console.log(palindromo("hola"));

/////*****CUENTA EL NUMERO DE PALABRAS*****/////
function numPalabras(s){
  
  var contador = 1, pos;
  s = s.trim(); //eliminar los posibles espacios en blanco al principio y al final
  if (s===null) { //si la cadena está vacía
      contador = 0;
  } else {
              pos = s.indexOf(" "); //se busca el primer espacio en blanco
              while (pos != -1) { //mientras que se encuentre un espacio en blanco
                         contador++; //se cuenta una palabra
                         pos = s.indexOf(" ", pos + 1); //se busca el siguiente espacio en blanco
              }                                               //a continuación del actual
  }
  return contador;
  }
  console.log("El numero de palabras es: "+numPalabras("hola"));

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
  
/////*****CUENTA EL NUMERO DE VOCALES*****/
  function numVocales(cadena){
    
          var letras = cadena.split("");
          var total = 0;
          for (var _i = 0, letras_1 = letras; _i < letras_1.length; _i++) {
              var letra = letras_1[_i];
              switch (letra.toLowerCase()) {
                  case "a":
                      total++;
                      break;
                  case "e":
                      total++;
                      break;
                  case "i":
                      total++;
                      break;
                  case "o":
                      total++;
                      break;
                  case "u":
                      total++;
                      break;
              }
          }
          return total;
  }
  console.log("El numero de vocales es:" +numVocales("hola"))

  /////*****CUENTA EL NUMERO DE CONSONANTES**** */
  function numConsonantes(cadena){
    var res= "La cadena \""+cadena+"\" \n";
    var letras = cadena.split("");
    var total = 0;
    for (var _i = 0, letras_1 = letras; _i < letras_1.length; _i++) {
        var letra = letras_1[_i];
        switch (letra.toLowerCase()) {
            case "b":
                total++;
                break;
            case "c":
                total++;
                break;
            case "d":
                total++;
                break;
            case "f":
                total++;
                break;
            case "g":
                total++;
                break;
            case "h":
                total++;
                break;
            case "j":
                total++;
                break;
            case "k":
                total++;
                break;
            case "l":
                total++;
                break;
            case "m":
                total++;
                break;
            case "n":
                total++;
                break;
            case "p":
                total++;
                break;
            case "q":
                total++;
                break;
            case "r":
                total++;
                break;
            case "s":
                total++;
                break;
            case "t":
                total++;
                break;
            case "u":
                total++;
                break;
            case "v":
                total++;
                break;
            case "w":
                total++;
                break;
            case "x":
                total++;
                break;
            case "y":
                total++;
                break;
            case "z":
                total++;
                break;
           
        }
    }
    
    return total;
    return res;
}

  console.log("El numero de consonantes es: " +numConsonantes("hola"))
  