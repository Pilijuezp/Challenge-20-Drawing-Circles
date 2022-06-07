function dibujarCirculo(radio, color){
    let canvas = document.getElementById("container");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radio, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.fill();
}



function pedirDato() {
    let quieroElegir =  confirm("Desea elegir el color");
    recopilarYDibujar(quieroElegir)
}

function recopilarYDibujar(chooseColor){
    let radio = Number(prompt("Insert the circle radius: "));
    let colorElegido = 'white'
    if (chooseColor  == true ){
        colorElegido = prompt('Choose a color;')
    }
    
    dibujarCirculo(radio,colorElegido)   
}