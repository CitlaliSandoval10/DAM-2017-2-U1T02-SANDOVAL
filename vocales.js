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