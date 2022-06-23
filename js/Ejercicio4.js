/* Inicio de comienzo de estilo */
document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section class="full">
        <div class="full-inner">
            <div class="content">`)
/* Fin comienzo de estilo */
document.write("<h1>Ejercicio 4</h1>");
document.write("<h2>Operaciones entre dos números</h2>");
document.write(`<h3>Click en operar e ingrese el índice para realizar la operación deseada entre dos números<br>
| 1 | Suma<br>
| 2 | Resta<br>
| 3 | Multiplicación<br>
| 4 | División<br>
</h3>`)
let i=1;
function operar(){
let operacion,n1,n2,resultado;
    operacion = parseInt(prompt("Ingrese la operación deseada"));
        switch(operacion){
        case 1:
            n1= parseFloat(prompt(`Ingrese un número:`));
            n2= parseFloat(prompt(`Ingrese otro número:`));
            resultado = n1 + n2;
            document.write(`<h3>Operación Nº ${i}: ${n1} + ${n2} = ${resultado}.</h3>`);
            i++;
        break
        case 2:
            n1= parseFloat(prompt(`Ingrese un número:`));
            n2= parseFloat(prompt(`Ingrese otro número:`));
            resultado = n1 - n2;
            document.write(`<h3>Operación Nº ${i}: ${n1} - ${n2} = ${resultado}.</h3>`);
            i++;
        break
        case 3:
            n1= parseFloat(prompt(`Ingrese un número:`));
            n2= parseFloat(prompt(`Ingrese otro número:`));
            resultado = n1 * n2;
            document.write(`<h3>Operación Nº ${i}: ${n1} x ${n2} = ${resultado}.</h3>`);
            i++;
        break
        case 4:
            n1= parseFloat(prompt(`Ingrese un número:`));
            n2= parseFloat(prompt(`Ingrese otro número:`));
            resultado = n1 / n2;
            document.write(`<section class='parrafo'>Operación Nº ${i}: ${n1} / ${n2} = ${resultado}.</section>`);
            i++;
        break
        default: alert("Ingrese una de las opciones sugeridas.");
    }
}
document.write("<h3>");
document.write(`<a href="index.html">Inicio</a> <a href="javascript:operar()">Operar!</a>`);
document.write("</h3>");

/* Inicio fin de estilo */
document.write(`
            </div>
        </div>
    </section>
</body>
<footer class="footer">
Grupo 8<br>
Alan Abt - Ariel Berurena - Eugenio Regis<br>
</footer>`)
/* Fin finalizacion de estilo */