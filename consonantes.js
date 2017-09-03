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
  