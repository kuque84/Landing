var btn = document.getElementById('btn');
function comenzar(){
    let i;
    i = parseInt(prompt(`Ingrese el número del Ejercicio que desea ver`));
    switch (i){
        case 1:
            document.write('<script src="./js/Ejercicio1.js"></script>');
            break
        case 2:
            document.write('<script src="./js/Ejercicio2.js"></script>');
            break
        case 3:
            document.write('<script src="./js/Ejercicio3.js"></script>');
            break
        case 4:
            document.write('<script src="./js/Ejercicio4.js"></script>');
            break
        default: alert("Ingrese una de las opciones sugeridas.");
        }
}
btn.addEventListener('click',comenzar,true)