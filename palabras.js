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