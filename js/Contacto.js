function comenzar(){
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
            <div class="content">
            </div>
        </div>
    </section>

<section id="contact"> <!-- HTML5 section tag for the contact 'section' -->
        <h2 class="contact">Contact Me</h2>
    <p>Alguna huevada en parrafo</p>
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
}