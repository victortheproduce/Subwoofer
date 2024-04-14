function calcularDistancia() {
    var frecuencia = parseFloat(document.getElementById('frecuencia').value);
    var temperatura = parseFloat(document.getElementById('temperatura').value);
    var cajas = parseInt(document.getElementById('cajas').value);

    // Calcular la velocidad del sonido en base a la temperatura (Newton-Laplace)
    var velocidad = 331.3 * Math.sqrt(1 + (temperatura / 273.15));

    // Calcular la distancia máxima
    var distanciaMaxima = velocidad / (frecuencia * 2);

    // Mostrar el resultado
    document.getElementById('resultado').innerText = 'Distancia máxima: ' + distanciaMaxima.toFixed(2) + ' metros';

    // Dibujar las cajas
    dibujarCajas(distanciaMaxima, cajas);
}

function dibujarCajas(distancia, numCajas) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar las cajas
    var espacioEntreCajas = 30; // Espacio entre cada caja en el dibujo
    var anchoCaja = 20;
    var alturaCaja = 10;
    var distanciaTotal = espacioEntreCajas * (numCajas - 1) + anchoCaja * numCajas;

    // Calcular el tamaño del canvas
    var canvasWidth = Math.max(distanciaTotal + 50, 400);
    canvas.width = canvasWidth;

    // Calcular la posición inicial de la primera caja
    var xInicial = (canvas.width - distanciaTotal) / 2;
    var y = canvas.height / 2 - alturaCaja / 2;

    // Calcular la distancia entre cajas
    var distanciaEntreCajas = distancia / (numCajas - 1);

    // Dibujar cada caja y mostrar la etiqueta de distancia
    ctx.fillStyle = "#fff"; // Color blanco para las cajas y etiquetas
    ctx.textAlign = "center";

    for (var i = 0; i < numCajas; i++) {
        var x = xInicial + i * (anchoCaja + espacioEntreCajas);
        ctx.fillRect(x, y, anchoCaja, alturaCaja);

        // Mostrar la etiqueta de distancia junto a la caja correspondiente
        ctx.fillText(distancia.toFixed(2) + 'm', x + anchoCaja / 2, y - 15);
    }
}
