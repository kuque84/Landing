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
document.write("<h1>Ejercicio 3</h1>");
let n1, n2, comparacion;
n1=parseInt(prompt(`Ingrese un número`));
n2=parseInt(prompt(`Ingrese otro número`));
if(n1 < n2){
    comparacion="menor"
}else if(n1>n2){
    comparacion="mayor"
}else{
    comparacion="igual"
};
document.write(`<h2>Comparación de dos números</h2>`);
document.write(`<h3>${n1} es ${comparacion} que ${n2}.</h3>`);
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