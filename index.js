import {putPixel, drawLine} from './line.js'

// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

var P0 = {x: -50, y: -50};
var P1 = {x: 50, y: -50};

// Axis
drawLine({x: 200, y: 0}, {x: -200, y: 0}, "grey", context)
drawLine({x: 0, y: -200}, {x: 0, y: 200}, "grey", context)

drawLine(P0, P1, "red", context)