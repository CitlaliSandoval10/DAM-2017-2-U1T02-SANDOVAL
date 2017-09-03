
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



 
  


 