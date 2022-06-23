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
    <link rel="stylesheet" href="/css/style.css">
</head>
<body class="full">
    <section class="full">
        <div class="full-inner">
            <div class="content">
                <h1 class="content">Contacto</h1>
                <h2 class="parrafo">¡Dejanos tu Consulta!</h2>
                <form id="contactform"> 
                <h3 class="parrafo"><label for="name">Nombre</label></h3> 
                    <input type="text" id=name name=name placeholder="Nombre y Apellido" required tabindex="1" /> 
                    <h3 class="parrafo"><label for="email">e-mail</label></h3> 
                    <input type="text" id=email name=email placeholder="example@domain.com" required tabindex="2" />                
                    <h3 class="parrafo"><label for="comment">Tu Mensaje:</label></h3> 
                    <textarea name="comment" id="comment" tabindex="4"></textarea>
                    <br><br><br>
                    <a href="index.html">Inicio</a>
                    <a href="javascript:enviar()">Enviar Mensaje</a>
                </form> 
            </div>
        </div>
    </section>
    <footer class="footer">
        <span class="icono"> Grupo 8 </span><br>
            &copy; Grupo 8 &reg;
    </footer>
</body>
`)
}