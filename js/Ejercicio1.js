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
document.write("<h1>Ejercicio 1</h1>");
document.write(`<h2>Validar mayoría de edad.</h2><hr>`);
ejecutar();
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

function ejecutar (){
    let Edad = parseInt(prompt("Ingrese su Edad"));
    document.write(`<h3>Edad: ${Edad}<br>`)
    if (Edad >=18){
        document.write(`"Ud. es mayor de edad"</h3>`);
    }else{
        document.write(`"Ud. es menor de edad"</h3>`);
    }
    document.write("<h3>");
    document.write(`<a href="index.html">Inicio</a>`);
    document.write("</h3>");
}