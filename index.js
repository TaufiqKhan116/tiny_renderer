import {putPixel, interPolate, drawLine} from './line.js'
import { drawwireframeTriangle, DrawFilledTriangle} from './triangle.js';

// Get the canvas element and its 2D rendering context
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

var P0 = {x: -200, y: -200};
var P1 = {x: 200, y: 50};
var P2 = {x: 20, y: 200};

// Axis
drawLine({x: 200, y: 0}, {x: -200, y: 0}, "grey", context)
drawLine({x: 0, y: -200}, {x: 0, y: 200}, "grey", context)

// drawLine(P0, P1, "green", context)
// drawLine(P1, P2, "red", context)
// drawLine(P2, P0, "green", context)
DrawFilledTriangle(P0, P1, P2, "pink", context)
drawwireframeTriangle(P0, P1, P2, "grey", context)