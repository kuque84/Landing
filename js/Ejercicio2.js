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
    /* ==============================CONTACTO============================== */
    <section id="contact"> <!-- HTML5 section tag for the contact 'section' -->
    	
    <h2 class="contact">Contact Me</h2>
    
    <p>I whistled for a cab and when it came near the license plate said fresh and had dice in the mirror, if anything I could say that this cab was rare but I thought nah, <a href="">forget it</a>, yo home to Bel-Air! I pulled up to the house about seven or eight I yelled to the cabbie yo home, smell you later, looked at my kingdom I was finally there to sit on my throne as the prince of Bel-Air</p>
    
    <form id="contactform"> 

        <p><label for="name">Name</label></p> 
        <input type="text" id=name name=name placeholder="First and last name" required tabindex="1" /> 
         
        <p><label for="email">Email</label></p> 
        <input type="text" id=email name=email placeholder="example@domain.com" required tabindex="2" /> 
         
        <p><label for="comment">Your Message</label></p> 
        <textarea name="comment" id="comment" tabindex="4"></textarea> 
         
        <input name="submit" type="submit" id="submit" tabindex="5" value="Send Message" /> 
         
    </form> 


</section>
</body>
<footer class="footer">
Grupo 8<br>
Alan Abt - Ariel Berurena - Eugenio Regis<br>
</footer>`)
/* Fin finalizacion de estilo */