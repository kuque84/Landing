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
document.write("<h1>Ejercicio 2</h1>");
document.write("<h2>Tabla del 3</h2>");
let i=1;
let resultado=1;
while(i<=10){
    resultado = i * 3;
    document.write(`<h3>${i}x3=${resultado}<br></h3>`);
    i++;
}
document.write("<h3>");
document.write(`<a href="index.html">Inicio</a>`);
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