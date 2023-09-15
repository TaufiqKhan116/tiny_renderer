// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const Cw = canvas.width;
const Ch = canvas.height;
const pixelSize = 2

function putPixel(x, y, color) {
    var Sx = (Cw / 2) + x;
    var Sy = (Ch / 2) - y;

    context.fillStyle = color;
    context.fillRect(Sx, Sy, pixelSize, pixelSize);
}

function drawLine(P0, P1, color) {
    var dx = (P0.x - P1.x);
    var dy = (P0.y - P1.y);

    if ( Math.abs(dx) > Math.abs(dy) ) {
        console.log("Horizontal-ish line!");

        if (P0.x > P1.x) {
            console.log("Swapping points!");

            var tmp;
            tmp = P0;
            P0 = P1;
            P1 = tmp;
        }

        var y0 = P0.y;
        var y1 = P1.y;
        var x0 = P0.x;
        var x1 = P1.x;
        var m = dy/dx;

        var y = y0;
        for (var x = x0; x <= x1; x++, y+=m) {
            putPixel(x, y, color);
        }

    } else {
        console.log("Vertical-ish line!");

        if (P0.y > P1.y) {
            console.log("Swapping points!");

            var tmp;
            tmp = P0;
            P0 = P1;
            P1 = tmp;
        }

        var y0 = P0.y;
        var y1 = P1.y;
        var x0 = P0.x;
        var x1 = P1.x;
        var m = dx/dy;

        var x = x0;
        for (var y = y0; y <= y1; y++, x+=m) {
            putPixel(x, y, color);
        }
    }
}

// Axis
drawLine({x: 0, y: 200}, {x: 0, y: -200}, "gray");
drawLine({x: 200, y: 0}, {x: -200, y: 0}, "gray");

// Render
var P0 = {x: -50, y: 50};
var P1 = {x: 50, y: -50};

drawLine(P1, P0, "red");