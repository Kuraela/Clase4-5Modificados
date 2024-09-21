/*///// Código del ejercicio de configuración de canvas (S05. Ex.01.) ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

//COMO METER EN UNA FUNCION UN OBJETO (EN ESTE CASO UNA LINEA) PARA SOLO COPIAR Y PEGAR Y PODER DUPLICAR UN OBJETO

/*function renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY){
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenX, origenY);
    CTX.lineTo();
    CTX.stroke();
//}*/

//renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY
//renderOneLine("#ffff00",2 ,10, 300);

/*///// 1. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function renderLines() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  /*///// 2. Secuencia de comandos para dibujar una linea ///*/
    /* 
      1. Definir el estilo de la línea (como color y grosor).
      2. Definir el inicio de la línea usando la función beginPath()
      3. Definir el punto de origen de la línea usando la función moveTo(x, y)
      4. Definir otro punto en el canvas al cual se va a conectar la línea usando lineTo(x, y)
      5. Definir tantos puntos como se desee
      *. (Opcional) Usar la función closePath() para trazar una línea desde el último punto hasta el origen de la línea.
      6. Usar la función stroke() para renderizar la línea en el canvas
      
      7. En caso de desear realizar más líneas, se repiten los pasos del 1 al 6.
    */
  CTX.strokeStyle = "#43B9DE";
  CTX.lineWidth = 5;
  CTX.beginPath();
  CTX.moveTo(30, 30);  //nos genera un punto nada mas, la coordenada donde va a iniar a dibujarse la línea
  CTX.lineTo(160, 160);  //nos genera ya una línea
  CTX.lineTo(360, 160);
  CTX.closePath();
  CTX.stroke();
  
  CTX.strokeStyle = "#E06E0A";
  CTX.lineWidth = 11;
  CTX.beginPath();
  CTX.moveTo(100, 30);
  CTX.lineTo(60, 260);
  CTX.stroke();

  CTX.strokeStyle = "#E3A900";
  CTX.lineWidth = 11;
  CTX.beginPath();
  CTX.moveTo(900, 30);
  CTX.lineTo(60, 260);
  CTX.stroke();

  CTX.strokeStyle = "#E3A900";
  CTX.lineWidth = 11;
  CTX.beginPath();
  CTX.moveTo(1400, 30);
  CTX.lineTo(60, 260);
  CTX.stroke();

  CTX.strokeStyle = "#E3A900";
  CTX.lineWidth = 11;
  CTX.beginPath();
  CTX.moveTo(1700, 30);
  CTX.lineTo(60, 260);
  CTX.stroke();

  
  CTX.strokeStyle = "#E3A900";
  CTX.lineWidth = 11;
  CTX.beginPath();
  CTX.moveTo(1950, 30);
  CTX.lineTo(60, 260);
  CTX.stroke();
  requestAnimationFrame(renderLines);
}



/*///// 6. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);



/* Happy Coding! 👾 */
// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D